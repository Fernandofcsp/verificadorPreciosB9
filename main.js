const _0x56aa49 = _0x1ba8;
(function (_0x1b753a, _0x309cd5) {
  const _0x1b0ac5 = _0x1ba8,
    _0x20200b = _0x1b753a();
  while (!![]) {
    try {
      const _0x3f43c5 =
        (parseInt(_0x1b0ac5(0x23a)) / 0x1) *
          (parseInt(_0x1b0ac5(0x20e)) / 0x2) +
        (-parseInt(_0x1b0ac5(0x1c5)) / 0x3) *
          (parseInt(_0x1b0ac5(0x1c8)) / 0x4) +
        (parseInt(_0x1b0ac5(0x1d9)) / 0x5) *
          (-parseInt(_0x1b0ac5(0x1c7)) / 0x6) +
        (parseInt(_0x1b0ac5(0x1ea)) / 0x7) *
          (-parseInt(_0x1b0ac5(0x1dc)) / 0x8) +
        (-parseInt(_0x1b0ac5(0x233)) / 0x9) *
          (-parseInt(_0x1b0ac5(0x223)) / 0xa) +
        (-parseInt(_0x1b0ac5(0x1f6)) / 0xb) *
          (parseInt(_0x1b0ac5(0x1f8)) / 0xc) +
        parseInt(_0x1b0ac5(0x1f9)) / 0xd;
      if (_0x3f43c5 === _0x309cd5) break;
      else _0x20200b["push"](_0x20200b["shift"]());
    } catch (_0x1617a7) {
      _0x20200b["push"](_0x20200b["shift"]());
    }
  }
})(_0x56f2, 0x30a26);
const form = document[_0x56aa49(0x22d)](_0x56aa49(0x21a)),
  inputCodigo = document["getElementById"](_0x56aa49(0x1db)),
  readerDiv = document[_0x56aa49(0x22d)](_0x56aa49(0x1f4)),
  ayudaTexto = document["getElementById"](_0x56aa49(0x1cb)),
  installBtn = document[_0x56aa49(0x22d)]("installBtn");
let scannerActivo = ![],
  deferredPrompt,
  puedeEscanear = !![],
  ultimoCodigoEscaneado = "";
function setCookie(_0x42ce23, _0x5b649e, _0x202bc6) {
  const _0x420639 = _0x56aa49,
    _0xe0b66f = new Date(
      Date["now"]() + _0x202bc6 * 0x18 * 0x3c * 0x3c * 0x3e8
    )[_0x420639(0x230)]();
  document[_0x420639(0x23c)] =
    _0x42ce23 +
    "=" +
    encodeURIComponent(_0x5b649e) +
    _0x420639(0x1bb) +
    _0xe0b66f +
    ";\x20path=/";
}
function getCookie(_0x4f898e) {
  const _0x365c56 = _0x56aa49,
    _0x49b72b = ";\x20" + document[_0x365c56(0x23c)],
    _0x5a70ab = _0x49b72b["split"](";\x20" + _0x4f898e + "=");
  if (_0x5a70ab[_0x365c56(0x1cc)] === 0x2)
    return decodeURIComponent(
      _0x5a70ab["pop"]()[_0x365c56(0x220)](";")[_0x365c56(0x240)]()
    );
  return null;
}
const historialDiv = document[_0x56aa49(0x22d)](_0x56aa49(0x250)),
  resultadoDiv = document[_0x56aa49(0x22d)](_0x56aa49(0x1c1));
let historial = [];
function _0x56f2() {
  const _0x1e47fd = [
    "disconnect",
    "SKU\x20desconocido",
    "DATOS",
    "application/x-www-form-urlencoded;\x20charset=UTF-8",
    "1363565izEges",
    "start",
    "playsinline",
    "Fecha\x20desconocida",
    "CODE_128",
    "forEach",
    "load",
    "putImageData",
    "limpiarHistorialBtn",
    "click",
    "reader",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x20ms-md-2\x22>Escaneado:\x20",
    "571307mMYAew",
    "focus",
    "12IImTth",
    "8395114lcENLG",
    "getTracks",
    "addEventListener",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "readonly",
    "preventDefault",
    "</strong></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x20ms-md-2\x22>Precio:\x20$",
    "</strong></span><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-bold\x22>Precio:\x20$",
    "applyConstraints",
    "result",
    "FECHA_ESCANEO",
    "getRegistrations",
    "error",
    "catch",
    "http",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "SKU",
    "❌\x20Instalación\x20rechazada",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "UPC_E",
    "❌\x20Error\x20al\x20registrar\x20SW:",
    "275962mQDywD",
    "toISOString",
    "URL_IMG",
    "log",
    "drawImage",
    "width",
    "height",
    "join",
    "remove",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Ocurrió\x20un\x20error\x20al\x20consultar\x20el\x20producto</div>",
    "keydown",
    "getContext",
    "formulario",
    "reload",
    "CODE_39",
    "video",
    "files",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>",
    "split",
    "https://dvncloud.com/instancias/theback9golf/index.php?controller=theback9golf:consultar_precio&DVNUSERID=45&DVNSUCURSAL=1",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara:\x20",
    "10BHCgwn",
    "srcObject",
    "fileInput",
    "setAttribute",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "code_39_reader",
    "service-worker.js",
    "d-none",
    "json",
    "map",
    "getElementById",
    "NOMBRE",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Producto\x20encontrado:</strong>\x20",
    "toUTCString",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20detectó\x20código,\x20recorta\x20la\x20imagen\x20o\x20prueba\x20con\x20otra</div>",
    "head",
    "1624887hNqYLB",
    "src",
    "</div>",
    "value",
    "toDataURL",
    "ean_reader",
    "scrollIntoView",
    "1cNhNOe",
    "stringify",
    "cookie",
    "block",
    "✅\x20Service\x20Worker\x20registrado:",
    "submit",
    "shift",
    "trim",
    "querySelector",
    "removeAttribute",
    "POST",
    "style",
    "canvas",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "unshift",
    "display",
    "then",
    "CODIGO",
    "getUserMedia",
    "register",
    "replace",
    "getVideoTracks",
    "historial",
    "prompt",
    "environment",
    "upc_reader",
    "\x0a\x20\x20#reader\x20{\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20width:\x20320px;\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20background:\x20#000;\x0a\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.15);\x0a\x20\x20}\x0a\x20\x20#reader\x20video\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20width:\x20320px\x20!important;\x0a\x20\x20\x20\x20height:\x20120px\x20!important;\x0a\x20\x20\x20\x20object-fit:\x20cover;\x0a\x20\x20}\x0a",
    "PRECIO",
    "https://dvncloud.com/",
    ";\x20expires=",
    "codeResult",
    "Enter",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "onload",
    "toLocaleString",
    "resultado",
    "observe",
    "center",
    "requestSubmit",
    "3rsaOyg",
    "</span><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "6hSweFb",
    "478744IWYfAU",
    "createElement",
    "outcome",
    "ayuda",
    "length",
    "mediaDevices",
    "innerHTML",
    "beforeinstallprompt",
    "appendChild",
    "change",
    "code",
    "getImageData",
    "key",
    "classList",
    "placeholder",
    "add",
    "continuous",
    "1019415hoIgAf",
    "true",
    "codigo",
    "16RiVKSu",
    "location",
    "upc_e_reader",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>",
    "EAN_13",
    "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "stop",
    "UPC_A",
    "serviceWorker",
    "target",
  ];
  _0x56f2 = function () {
    return _0x1e47fd;
  };
  return _0x56f2();
}
function _0x1ba8(_0x591fb1, _0x2fe73f) {
  const _0x56f2f7 = _0x56f2();
  return (
    (_0x1ba8 = function (_0x1ba856, _0x2e1b41) {
      _0x1ba856 = _0x1ba856 - 0x1ba;
      let _0x10f7c1 = _0x56f2f7[_0x1ba856];
      return _0x10f7c1;
    }),
    _0x1ba8(_0x591fb1, _0x2fe73f)
  );
}
const historialCookie = getCookie("historial");
if (historialCookie)
  try {
    historial = JSON["parse"](historialCookie);
  } catch (_0x123dab) {
    historial = [];
  }
function renderClearButton() {
  const _0x3fbd34 = _0x56aa49;
  return _0x3fbd34(0x247);
}
function renderHistorial() {
  const _0x5e3998 = _0x56aa49;
  (historialDiv[_0x5e3998(0x1ce)] =
    _0x5e3998(0x1be) +
    (historial[_0x5e3998(0x1cc)] > 0x0 ? renderClearButton() : "") +
    _0x5e3998(0x1fc) +
    (historial[_0x5e3998(0x1cc)] === 0x0
      ? "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>"
      : _0x5e3998(0x1e1) +
        historial[_0x5e3998(0x22c)]((_0x2962ef) => {
          const _0x1d6dfc = _0x5e3998,
            _0x51c418 =
              _0x2962ef[_0x1d6dfc(0x24b)] ||
              _0x2962ef[_0x1d6dfc(0x209)] ||
              _0x1d6dfc(0x1e7),
            _0x4e0620 = _0x2962ef[_0x1d6dfc(0x203)]
              ? new Date(_0x2962ef[_0x1d6dfc(0x203)])[_0x1d6dfc(0x1c0)]()
              : _0x1d6dfc(0x1ed);
          return (
            "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span><strong>" +
            _0x2962ef["NOMBRE"] +
            "</strong></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x20ms-md-2\x22>SKU:\x20<strong>" +
            _0x51c418 +
            _0x1d6dfc(0x1ff) +
            _0x2962ef[_0x1d6dfc(0x255)] +
            _0x1d6dfc(0x1f5) +
            _0x4e0620 +
            _0x1d6dfc(0x20b)
          );
        })[_0x5e3998(0x215)]("") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>") +
    _0x5e3998(0x227)),
    setCookie(_0x5e3998(0x250), JSON[_0x5e3998(0x23b)](historial), 0x1e);
  const _0x517746 = document[_0x5e3998(0x22d)](_0x5e3998(0x1f2));
  _0x517746 &&
    _0x517746[_0x5e3998(0x1fb)](_0x5e3998(0x1f3), () => {
      const _0x8e64d = _0x5e3998;
      (historial = []),
        setCookie(_0x8e64d(0x250), JSON[_0x8e64d(0x23b)](historial), 0x1e),
        renderHistorial();
    });
}
inputCodigo[_0x56aa49(0x226)](_0x56aa49(0x1fd), _0x56aa49(0x1da)),
  inputCodigo["addEventListener"](_0x56aa49(0x1f7), function () {
    const _0x50528b = _0x56aa49;
    inputCodigo[_0x50528b(0x243)](_0x50528b(0x1fd));
  }),
  inputCodigo[_0x56aa49(0x1fb)]("blur", function () {
    const _0x4b1f10 = _0x56aa49;
    inputCodigo[_0x4b1f10(0x226)](_0x4b1f10(0x1fd), _0x4b1f10(0x1da));
  }),
  inputCodigo[_0x56aa49(0x1fb)](_0x56aa49(0x218), function (_0x1e17b6) {
    const _0x1a6ee8 = _0x56aa49;
    _0x1e17b6[_0x1a6ee8(0x1d4)] === _0x1a6ee8(0x1bd) &&
      (_0x1e17b6[_0x1a6ee8(0x1fe)](), form[_0x1a6ee8(0x1c4)]());
  }),
  form[_0x56aa49(0x1fb)](_0x56aa49(0x23f), async (_0x158704) => {
    const _0x3df0ff = _0x56aa49;
    _0x158704[_0x3df0ff(0x1fe)]();
    let _0x3fa233 = inputCodigo[_0x3df0ff(0x236)]
      [_0x3df0ff(0x241)]()
      ["replace"](/\s+$/, "");
    (inputCodigo["value"] = _0x3fa233), (resultadoDiv[_0x3df0ff(0x1ce)] = "");
    if (!_0x3fa233) {
      (resultadoDiv[_0x3df0ff(0x1ce)] = _0x3df0ff(0x1df)),
        renderHistorial(),
        inputCodigo[_0x3df0ff(0x1f7)]();
      return;
    }
    (inputCodigo[_0x3df0ff(0x1d6)] = ""),
      (resultadoDiv[_0x3df0ff(0x1ce)] =
        "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>");
    try {
      const _0x1aafa0 = await fetch(_0x3df0ff(0x221), {
          method: _0x3df0ff(0x244),
          headers: {
            Accept: "application/json,\x20text/javascript,\x20*/*;\x20q=0.01",
            "Content-Type": _0x3df0ff(0x1e9),
            "X-Requested-With": "XMLHttpRequest",
          },
          body: "codigo=" + _0x3fa233,
        }),
        _0x136f78 = await _0x1aafa0[_0x3df0ff(0x22b)]();
      if (_0x136f78?.[_0x3df0ff(0x1e8)]?.["NOMBRE"]) {
        const _0x1b691b = _0x136f78[_0x3df0ff(0x1e8)];
        (_0x1b691b[_0x3df0ff(0x24b)] =
          _0x1b691b["CODIGO"] || _0x1b691b[_0x3df0ff(0x209)] || _0x3fa233),
          (_0x1b691b[_0x3df0ff(0x203)] = new Date()[_0x3df0ff(0x20f)]()),
          historial[_0x3df0ff(0x248)](_0x1b691b);
        let _0x11c96c = "";
        if (
          _0x1b691b[_0x3df0ff(0x210)] &&
          _0x1b691b[_0x3df0ff(0x210)][_0x3df0ff(0x241)]() !== ""
        ) {
          if (_0x1b691b[_0x3df0ff(0x210)]["startsWith"](_0x3df0ff(0x207)))
            _0x11c96c = _0x1b691b[_0x3df0ff(0x210)];
          else {
            let _0x4fd38d = _0x1b691b[_0x3df0ff(0x210)][_0x3df0ff(0x24e)](
              /^\.\.\//,
              ""
            );
            _0x11c96c = _0x3df0ff(0x1ba) + _0x4fd38d["replace"](/^\//, "");
          }
        }
        (resultadoDiv["innerHTML"] =
          _0x3df0ff(0x22f) +
          _0x1b691b[_0x3df0ff(0x22e)] +
          "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-secondary\x22>SKU:\x20<strong>" +
          _0x1b691b[_0x3df0ff(0x24b)] +
          _0x3df0ff(0x200) +
          _0x1b691b["PRECIO"] +
          "</span><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x22>Escaneado:\x20" +
          new Date(_0x1b691b[_0x3df0ff(0x203)])["toLocaleString"]() +
          _0x3df0ff(0x1c6) +
          (_0x11c96c
            ? "<div\x20style=\x22display:flex;\x20justify-content:center;\x20align-items:center;\x20width:100%;\x22><img\x20src=\x22" +
              _0x11c96c +
              "\x22\x20alt=\x22Imagen\x20del\x20producto\x22\x20style=\x22width:180px;\x20height:180px;\x20object-fit:contain;\x20border-radius:10px;\x20box-shadow:0\x202px\x208px\x20rgba(0,0,0,0.1);\x20margin-top:10px;\x22></div>"
            : "") +
          _0x3df0ff(0x208)),
          (inputCodigo[_0x3df0ff(0x236)] = ""),
          inputCodigo[_0x3df0ff(0x1f7)]();
      } else
        (resultadoDiv[_0x3df0ff(0x1ce)] =
          "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontró\x20el\x20código\x20ingresado</div>"),
          (inputCodigo[_0x3df0ff(0x236)] = ""),
          inputCodigo[_0x3df0ff(0x1f7)](),
          setTimeout(() => {
            resultadoDiv["innerHTML"] = "";
          }, 0x1388);
      renderHistorial();
    } catch (_0x465929) {
      (resultadoDiv[_0x3df0ff(0x1ce)] = _0x3df0ff(0x217)),
        inputCodigo[_0x3df0ff(0x1f7)](),
        renderHistorial();
    }
  });
function iniciarScanner() {
  const _0x3edc20 = _0x56aa49;
  if (scannerActivo) return;
  navigator[_0x3edc20(0x1cd)]
    [_0x3edc20(0x24c)]({ video: !![] })
    [_0x3edc20(0x24a)]((_0x44f800) => {
      const _0x298bd5 = _0x3edc20;
      _0x44f800[_0x298bd5(0x1fa)]()[_0x298bd5(0x1ef)]((_0x2ee683) =>
        _0x2ee683[_0x298bd5(0x1e2)]()
      ),
        (scannerActivo = !![]),
        (readerDiv["style"][_0x298bd5(0x249)] = _0x298bd5(0x23d)),
        document[_0x298bd5(0x22d)]("reader")[_0x298bd5(0x239)]({
          behavior: "smooth",
          block: _0x298bd5(0x1c3),
        }),
        (ayudaTexto[_0x298bd5(0x245)][_0x298bd5(0x249)] = _0x298bd5(0x23d));
      const _0x40d9f1 = new Html5Qrcode(_0x298bd5(0x1f4)),
        _0x258913 = {
          fps: 0xa,
          videoConstraints: {
            width: { min: 0x190, ideal: 0x780 },
            height: { min: 0x190, ideal: 0x438 },
            facingMode: "environment",
            advanced: [{ zoom: 0x2 }],
          },
          qrbox: function (_0xb7f52e, _0x3f096b) {
            const _0x3ebe3e = Math["min"](0x12c, _0xb7f52e * 0.9),
              _0x3cc4c0 = 0x64;
            return { width: _0x3ebe3e, height: _0x3cc4c0 };
          },
          rememberLastUsedCamera: !![],
          aspectRatio: 0x1,
          formatsToSupport: [
            Html5QrcodeSupportedFormats[_0x298bd5(0x1ee)],
            Html5QrcodeSupportedFormats[_0x298bd5(0x1e0)],
            Html5QrcodeSupportedFormats["EAN_8"],
            Html5QrcodeSupportedFormats[_0x298bd5(0x1e3)],
            Html5QrcodeSupportedFormats[_0x298bd5(0x20c)],
            Html5QrcodeSupportedFormats[_0x298bd5(0x21c)],
          ],
          experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
        };
      function _0x1d47da() {
        const _0x2a09ce = _0x298bd5;
        _0x40d9f1[_0x2a09ce(0x1eb)](
          { facingMode: _0x2a09ce(0x252) },
          _0x258913,
          (_0x5d9f5e) => {
            const _0x48e76a = _0x2a09ce,
              _0x3ecad0 = _0x5d9f5e[_0x48e76a(0x241)]()[_0x48e76a(0x24e)](
                /\s+$/,
                ""
              );
            if (!puedeEscanear) return;
            if (_0x3ecad0 === ultimoCodigoEscaneado) return;
            (puedeEscanear = ![]),
              (ultimoCodigoEscaneado = _0x3ecad0),
              (inputCodigo[_0x48e76a(0x236)] = _0x3ecad0),
              form[_0x48e76a(0x1c4)](),
              setTimeout(() => {
                (puedeEscanear = !![]), (ultimoCodigoEscaneado = "");
              }, 0x7d0);
          },
          (_0xb4d1c1) => {}
        )
          [_0x2a09ce(0x24a)](() => {
            setTimeout(() => {
              const _0x45439b = _0x1ba8,
                _0x52b927 = readerDiv["querySelector"](_0x45439b(0x21d));
              if (_0x52b927) {
                const _0x3184cb =
                  _0x52b927[_0x45439b(0x224)][_0x45439b(0x24f)]()[0x0];
                _0x3184cb[_0x45439b(0x201)]({
                  focusMode: _0x45439b(0x1d8),
                  advanced: [{ zoom: 0x2 }],
                })
                  [_0x45439b(0x24a)](() => {})
                  [_0x45439b(0x206)]((_0x5589f9) => {});
              }
            }, 0x7d0);
          })
          [_0x2a09ce(0x206)]((_0x38ed5a) => {
            const _0x36ddaf = _0x2a09ce;
            (scannerActivo = ![]),
              (resultadoDiv[_0x36ddaf(0x1ce)] =
                _0x36ddaf(0x222) + _0x38ed5a + _0x36ddaf(0x235)),
              renderHistorial();
          });
      }
      _0x1d47da();
      const _0x14d8a9 = new MutationObserver(() => {
        const _0x3cef35 = _0x298bd5,
          _0x4a5a4c = readerDiv[_0x3cef35(0x242)](_0x3cef35(0x21d));
        _0x4a5a4c &&
          (_0x4a5a4c[_0x3cef35(0x226)](_0x3cef35(0x1ec), ""),
          _0x4a5a4c["setAttribute"]("autoplay", ""),
          _0x4a5a4c[_0x3cef35(0x226)]("muted", ""),
          _0x14d8a9[_0x3cef35(0x1e6)]());
      });
      _0x14d8a9[_0x298bd5(0x1c2)](readerDiv, {
        childList: !![],
        subtree: !![],
      });
    })
    [_0x3edc20(0x206)]((_0x934cc3) => {
      const _0x24f240 = _0x3edc20;
      (resultadoDiv[_0x24f240(0x1ce)] =
        "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20autoriza\x20el\x20acceso\x20a\x20la\x20cámara</div>"),
        renderHistorial();
    });
}
const fileInput = document[_0x56aa49(0x22d)](_0x56aa49(0x225));
fileInput[_0x56aa49(0x1fb)](_0x56aa49(0x1d1), async (_0x3e2395) => {
  const _0x549b66 = _0x56aa49,
    _0x4432bc = _0x3e2395[_0x549b66(0x1e5)][_0x549b66(0x21e)][0x0];
  if (!_0x4432bc) return;
  resultadoDiv["innerHTML"] = _0x549b66(0x21f);
  const _0x5ba629 = new FileReader();
  (_0x5ba629[_0x549b66(0x1bf)] = function (_0x54fd4e) {
    const _0x246938 = _0x549b66,
      _0x4d1e30 = new Image();
    (_0x4d1e30[_0x246938(0x1bf)] = function () {
      const _0x51e891 = _0x246938,
        _0x8e0bfa = document[_0x51e891(0x1c9)](_0x51e891(0x246)),
        _0x13f987 = _0x8e0bfa[_0x51e891(0x219)]("2d");
      (_0x8e0bfa[_0x51e891(0x213)] = _0x4d1e30["width"]),
        (_0x8e0bfa[_0x51e891(0x214)] = _0x4d1e30[_0x51e891(0x214)]),
        _0x13f987[_0x51e891(0x212)](_0x4d1e30, 0x0, 0x0);
      const _0x5d5d3a = _0x13f987[_0x51e891(0x1d3)](
          0x0,
          0x0,
          _0x8e0bfa[_0x51e891(0x213)],
          _0x8e0bfa[_0x51e891(0x214)]
        ),
        _0x1a6942 = _0x5d5d3a["data"];
      for (
        let _0x3f012a = 0x0;
        _0x3f012a < _0x1a6942[_0x51e891(0x1cc)];
        _0x3f012a += 0x4
      ) {
        const _0x28816f =
            (_0x1a6942[_0x3f012a] +
              _0x1a6942[_0x3f012a + 0x1] +
              _0x1a6942[_0x3f012a + 0x2]) /
            0x3,
          _0x57e864 = _0x28816f > 0x80 ? 0xff : 0x0;
        _0x1a6942[_0x3f012a] =
          _0x1a6942[_0x3f012a + 0x1] =
          _0x1a6942[_0x3f012a + 0x2] =
            _0x57e864;
      }
      _0x13f987[_0x51e891(0x1f1)](_0x5d5d3a, 0x0, 0x0);
      const _0x152a24 = _0x8e0bfa[_0x51e891(0x237)]();
      Quagga["decodeSingle"](
        {
          src: _0x152a24,
          numOfWorkers: 0x0,
          locate: !![],
          inputStream: { size: 0x320 },
          decoder: {
            readers: [
              _0x51e891(0x238),
              "ean_8_reader",
              "code_128_reader",
              _0x51e891(0x253),
              _0x51e891(0x1de),
              _0x51e891(0x228),
            ],
          },
        },
        function (_0x57cff1) {
          const _0x2cc30d = _0x51e891;
          _0x57cff1 && _0x57cff1[_0x2cc30d(0x1bc)]
            ? ((inputCodigo[_0x2cc30d(0x236)] = _0x57cff1["codeResult"][
                _0x2cc30d(0x1d2)
              ]
                [_0x2cc30d(0x241)]()
                [_0x2cc30d(0x24e)](/\s+$/, "")),
              form[_0x2cc30d(0x1c4)]())
            : ((resultadoDiv[_0x2cc30d(0x1ce)] = _0x2cc30d(0x231)),
              renderHistorial()),
            (fileInput["value"] = "");
        }
      );
    }),
      (_0x4d1e30[_0x246938(0x234)] = _0x54fd4e["target"][_0x246938(0x202)]);
  }),
    _0x5ba629["readAsDataURL"](_0x4432bc);
});
_0x56aa49(0x1e4) in navigator &&
  window[_0x56aa49(0x1fb)](_0x56aa49(0x1f0), () => {
    const _0x5f43d9 = _0x56aa49;
    navigator[_0x5f43d9(0x1e4)]
      [_0x5f43d9(0x24d)](_0x5f43d9(0x229))
      [_0x5f43d9(0x24a)]((_0x56c074) =>
        console["log"](_0x5f43d9(0x23e), _0x56c074["scope"])
      )
      [_0x5f43d9(0x206)]((_0x59fd6d) =>
        console[_0x5f43d9(0x205)](_0x5f43d9(0x20d), _0x59fd6d)
      );
  });
window["addEventListener"](_0x56aa49(0x1cf), (_0x5d3a35) => {
  const _0x219d88 = _0x56aa49;
  _0x5d3a35[_0x219d88(0x1fe)](),
    (deferredPrompt = _0x5d3a35),
    installBtn && installBtn["classList"][_0x219d88(0x216)](_0x219d88(0x22a));
}),
  installBtn[_0x56aa49(0x1fb)]("click", (_0x392353) => {
    const _0x329a39 = _0x56aa49;
    deferredPrompt &&
      (deferredPrompt[_0x329a39(0x251)](),
      deferredPrompt["userChoice"][_0x329a39(0x24a)]((_0x562bd2) => {
        const _0x10b694 = _0x329a39;
        _0x562bd2[_0x10b694(0x1ca)] === "accepted"
          ? console[_0x10b694(0x211)]("✅\x20Instalación\x20aceptada")
          : console[_0x10b694(0x211)](_0x10b694(0x20a)),
          (deferredPrompt = null),
          installBtn[_0x10b694(0x1d5)][_0x10b694(0x1d7)]("d-none");
      }));
  });
_0x56aa49(0x1e4) in navigator &&
  (navigator[_0x56aa49(0x1e4)]
    [_0x56aa49(0x204)]()
    ["then"](function (_0x379a03) {
      for (let _0x471065 of _0x379a03) {
        _0x471065["update"]();
      }
    }),
  navigator[_0x56aa49(0x1e4)][_0x56aa49(0x1fb)](
    "controllerchange",
    function () {
      const _0x1fd1db = _0x56aa49;
      window[_0x1fd1db(0x1dd)][_0x1fd1db(0x21b)]();
    }
  ));
const style = document[_0x56aa49(0x1c9)](_0x56aa49(0x245));
(style[_0x56aa49(0x1ce)] = _0x56aa49(0x254)),
  document[_0x56aa49(0x232)][_0x56aa49(0x1d0)](style),
  renderHistorial();
