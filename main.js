const form = document.getElementById("formulario");
const inputCodigo = document.getElementById("codigo");
const readerDiv = document.getElementById("reader");
const ayudaTexto = document.getElementById("ayuda");
const installBtn = document.getElementById("installBtn");
let scannerActivo = false;
let deferredPrompt;
let puedeEscanear = true;
let ultimoCodigoEscaneado = "";

// Funciones para manejar cookies
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
  return null;
}

// NUEVO: historial de productos y resultado independiente
const historialDiv = document.getElementById("historial");
const resultadoDiv = document.getElementById("resultado");

// Cargar historial desde cookie si existe
let historial = [];
const historialCookie = getCookie("historial");
if (historialCookie) {
  try {
    historial = JSON.parse(historialCookie);
  } catch (e) {
    historial = [];
  }
}

// Botón para limpiar historial centrado verticalmente
function renderClearButton() {
  return `
    <div class="d-flex align-items-center justify-content-end h-100">
      <button id="limpiarHistorialBtn" class="btn btn-danger btn-sm">Limpiar historial</button>
    </div>
  `;
}

function renderHistorial() {
  historialDiv.innerHTML = `
    <div class="card shadow-sm mb-3 w-100">
      <div class="card-header bg-primary text-white d-flex flex-column flex-md-row justify-content-between align-items-center">
        <strong>Historial de productos escaneados:</strong>
        ${historial.length > 0 ? renderClearButton() : ""}
      </div>
      <div class="card-body p-2">
        ${
          historial.length === 0
            ? '<p class="text-muted mb-0">No hay productos escaneados.</p>'
            : `<ul class="list-group list-group-flush">
                ${historial
                  .map((producto) => {
                    const sku = producto.CODIGO || producto.SKU || "SKU desconocido";
                    const fecha = producto.FECHA_ESCANEO
                      ? new Date(producto.FECHA_ESCANEO).toLocaleString()
                      : "Fecha desconocida";
                    return `<li class="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
                      <span class="d-flex align-items-center">
                        <strong>${producto.NOMBRE}</strong>
                        <button class="btn btn-link btn-sm ms-2 p-0 copiar-btn" title="Copiar descripción" data-copiar="${producto.NOMBRE}" style="font-size:1.2rem; color:#616161;">
                          <i class="bi bi-clipboard"></i>
                        </button>
                      </span>
                      <span class="small text-secondary ms-md-2 d-flex align-items-center">
                        SKU: <strong class="ms-1">${sku}</strong>
                        <button class="btn btn-link btn-sm ms-2 p-0 copiar-btn" title="Copiar SKU" data-copiar="${sku}" style="font-size:1.2rem; color:#616161;">
                          <i class="bi bi-clipboard"></i>
                        </button>
                      </span>
                      <span class="badge bg-success fs-6 mb-1 mb-md-0 ms-md-2">Precio: $${producto.PRECIO}</span>
                      <span class="text-muted small ms-md-2">Escaneado: ${fecha}</span>
                    </li>`;
                  })
                  .join("")}
              </ul>`
        }
      </div>
    </div>
  `;
  setCookie("historial", JSON.stringify(historial), 30);

  const limpiarBtn = document.getElementById("limpiarHistorialBtn");
  if (limpiarBtn) {
    limpiarBtn.addEventListener("click", () => {
      historial = [];
      setCookie("historial", JSON.stringify(historial), 30);
      renderHistorial();
    });
  }

  // Botones copiar
  const copiarBtns = historialDiv.querySelectorAll('.copiar-btn');
  copiarBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const valor = btn.getAttribute('data-copiar');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(valor).then(() => {
          btn.innerHTML = '<i class="bi bi-clipboard-check"></i>';
          setTimeout(() => {
            btn.innerHTML = '<i class="bi bi-clipboard"></i>';
          }, 1200);
        });
      }
    });
  });
}

// --- ENVÍO AUTOMÁTICO AL ESCANEAR O PEGAR UN SKU ---
inputCodigo.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    form.requestSubmit();
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let codigo = inputCodigo.value.trim().replace(/\s+$/, "");
  inputCodigo.value = codigo;

  resultadoDiv.innerHTML = ""; // Limpia mensaje anterior

  if (!codigo) {
    resultadoDiv.innerHTML = `<div class="alert alert-danger" role="alert">Por favor ingresa un código</div>`;
    renderHistorial();
    inputCodigo.focus();
    return;
  }

  // Borra el placeholder después de escanear
  inputCodigo.placeholder = "";

  resultadoDiv.innerHTML = `<div class="alert alert-info" role="alert">Buscando producto...</div>`;

  try {
    const response = await fetch(
      "https://dvncloud.com/instancias/theback9golf/index.php?controller=theback9golf:consultar_precio&DVNUSERID=45&DVNSUCURSAL=1",
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
          "Content-Type":
            "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: `codigo=${codigo}`,
      }
    );

    const data = await response.json();

    if (data?.DATOS?.NOMBRE) {
      const producto = data.DATOS;
      producto.CODIGO = producto.CODIGO || producto.SKU || codigo;
      producto.FECHA_ESCANEO = new Date().toISOString();
      historial.unshift(producto);
           // Procesar la URL de la imagen para que sea absoluta si es relativa
           let urlImg = "";
           if (producto.URL_IMG && producto.URL_IMG.trim() !== "") {
               if (producto.URL_IMG.startsWith("http")) {
                   urlImg = producto.URL_IMG;
               } else {
                   // Quitar los ../ iniciales si existen
                   let cleanPath = producto.URL_IMG.replace(/^\.\.\//, "");
                   // Construir la URL absoluta
                   urlImg = `https://dvncloud.com/${cleanPath.replace(/^\//, "")}`;
               }
           }
      resultadoDiv.innerHTML = `
        <div class="row align-items-center justify-content-center g-0 mb-4" style="padding: 0px 10px;">
          ${urlImg ? `
          <div class="col-12 col-lg-4 d-flex justify-content-center mb-3 mb-lg-0">
            <img src="${urlImg}" alt="Imagen del producto" class="img-fluid rounded shadow" style="max-width:220px; background:#f5f5f5; padding:10px;">
          </div>
          ` : ""}
          <div class="col-12 col-lg-8 text-center">
            <div class="fw-bold" style="font-size:2rem; color:#616161;">${producto.NOMBRE}</div>
            <div class="fw-bold text-danger" style="font-size:4rem;">$ ${producto.PRECIO}</div>
            <div class="text-secondary" style="font-size:1rem;">SKU: <b>${producto.CODIGO}</b></div>
          </div>
        </div>
      `;
      inputCodigo.value = "";
      inputCodigo.focus();
    } else {
      resultadoDiv.innerHTML = `<div class="alert alert-danger" role="alert">No se encontró el código ingresado</div>`;
      inputCodigo.value = "";
      inputCodigo.focus();
      setTimeout(() => {
        resultadoDiv.innerHTML = "";
      }, 5000);
    }
    renderHistorial();
  } catch (error) {
    resultadoDiv.innerHTML = `<div class="alert alert-danger" role="alert">Ocurrió un error al consultar el producto</div>`;
    inputCodigo.focus();
    renderHistorial();
  }
});

function iniciarScanner() {
  if (scannerActivo) return;

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      stream.getTracks().forEach((track) => track.stop());

      scannerActivo = true;
      readerDiv.style.display = "block";
      document.getElementById("reader").scrollIntoView({ behavior: "smooth", block: "center" });
      ayudaTexto.style.display = "block";

      const html5QrCode = new Html5Qrcode("reader");
      const config = {
        fps: 10,
        videoConstraints: {
          width: { min: 400, ideal: 1920 },
          height: { min: 400, ideal: 1080 },
          facingMode: "environment",
          advanced: [{ zoom: 2.0 }],
        },
        qrbox: function (viewfinderWidth, viewfinderHeight) {
          const width = Math.min(300, viewfinderWidth * 0.9);
          const height = 100;
          return { width, height };
        },
        rememberLastUsedCamera: true,
        aspectRatio: 1.0,
        formatsToSupport: [
          Html5QrcodeSupportedFormats.CODE_128,
          Html5QrcodeSupportedFormats.EAN_13,
          Html5QrcodeSupportedFormats.EAN_8,
          Html5QrcodeSupportedFormats.UPC_A,
          Html5QrcodeSupportedFormats.UPC_E,
          Html5QrcodeSupportedFormats.CODE_39,
        ],
        experimentalFeatures: {
          useBarCodeDetectorIfSupported: true,
        },
      };

      html5QrCode
        .start(
          { facingMode: "environment" },
          config,
          (decodedText) => {
            inputCodigo.value = decodedText.trim().replace(/\s+$/, "");
            html5QrCode.stop().then(() => {
              readerDiv.style.display = "none";
              ayudaTexto.style.display = "none";
              scannerActivo = false;
              html5QrCode.clear();
              form.requestSubmit();
            });
          },
          (errorMessage) => {}
        )
        .then(() => {
          setTimeout(() => {
            const video = readerDiv.querySelector("video");
            if (video) {
              const track = video.srcObject.getVideoTracks()[0];
              track
                .applyConstraints({
                  focusMode: "continuous",
                  advanced: [{ zoom: 2.0 }],
                })
                .then(() => {
                  // Constraints aplicadas
                })
                .catch((err) => {
                  // No se pudieron aplicar constraints
                });
            }
          }, 2000);
        })
        .catch((err) => {
          scannerActivo = false;
          resultadoDiv.innerHTML = `<div class="alert alert-danger" role="alert">No se pudo acceder a la cámara: ${err}</div>`;
          renderHistorial();
        });

      const observer = new MutationObserver(() => {
        const video = readerDiv.querySelector("video");
        if (video) {
          video.setAttribute("playsinline", "");
          video.setAttribute("autoplay", "");
          video.setAttribute("muted", "");
          observer.disconnect();
        }
      });
      observer.observe(readerDiv, { childList: true, subtree: true });
    })
    .catch((err) => {
      resultadoDiv.innerHTML = `<div class="alert alert-danger" role="alert">Por favor autoriza el acceso a la cámara</div>`;
      renderHistorial();
    });
}

//Leer codigo de barras desde una imagen
const fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  resultadoDiv.innerHTML = `<div class="alert alert-info" role="alert">Procesando imagen...</div>`;

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      // Preprocesar la imagen: convertir a blanco y negro
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        const value = avg > 128 ? 255 : 0; // Umbral simple
        data[i] = data[i + 1] = data[i + 2] = value;
      }
      ctx.putImageData(imageData, 0, 0);

      const processedDataUrl = canvas.toDataURL();

      Quagga.decodeSingle(
        {
          src: processedDataUrl,
          numOfWorkers: 0,
          locate: true,
          inputStream: {
            size: 800,
          },
          decoder: {
            readers: [
              "ean_reader",
              "ean_8_reader",
              "code_128_reader",
              "upc_reader",
              "upc_e_reader",
              "code_39_reader",
            ],
          },
        },
        function (result) {
          if (result && result.codeResult) {
            inputCodigo.value = result.codeResult.code.trim().replace(/\s+$/, "");
            form.requestSubmit();
          } else {
            resultadoDiv.innerHTML = `<div class="alert alert-danger" role="alert">No se detectó código, recorta la imagen o prueba con otra</div>`;
            renderHistorial();
          }
          fileInput.value = "";
        }
      );
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
});

// Registro del Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((reg) =>
        console.log("✅ Service Worker registrado:", reg.scope)
      )
      .catch((err) => console.error("❌ Error al registrar SW:", err));
  });
}

// Manejo del evento beforeinstallprompt
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  if (installBtn) {
    installBtn.classList.remove("d-none");
  }
});

installBtn.addEventListener("click", (e) => {
  if (deferredPrompt) {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("✅ Instalación aceptada");
      } else {
        console.log("❌ Instalación rechazada");
      }
      deferredPrompt = null;
      installBtn.classList.add("d-none");
    });
  }
});

// Forzar actualización del Service Worker y recarga automática si hay nueva versión
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.update();
    }
  });
  navigator.serviceWorker.addEventListener('controllerchange', function() {
    window.location.reload();
  });
}

// Estilo para mostrar solo el cuadro de escaneo
const style = document.createElement('style');
style.innerHTML = `
  #reader {
    position: relative;
    width: 320px;
    height: 120px;
    overflow: hidden;
    margin: 0 auto;
    background: #000;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }
  #reader video {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 320px !important;
    height: 120px !important;
    object-fit: cover;
  }
`;
document.head.appendChild(style);

// Renderiza historial
renderHistorial();