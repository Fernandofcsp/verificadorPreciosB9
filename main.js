const _0x1b717a = _0x39cf;
(function (_0xa8ca64, _0x2a6ae3) {
  const _0x150b4c = _0x39cf,
    _0x39a6b5 = _0xa8ca64();
  while (!![]) {
    try {
      const _0x2cffb0 =
        -parseInt(_0x150b4c(0x107)) / 0x1 +
        parseInt(_0x150b4c(0xa2)) / 0x2 +
        (parseInt(_0x150b4c(0xb0)) / 0x3) * (parseInt(_0x150b4c(0xa4)) / 0x4) +
        -parseInt(_0x150b4c(0x86)) / 0x5 +
        (-parseInt(_0x150b4c(0xad)) / 0x6) * (parseInt(_0x150b4c(0xff)) / 0x7) +
        -parseInt(_0x150b4c(0x8a)) / 0x8 +
        parseInt(_0x150b4c(0x9e)) / 0x9;
      if (_0x2cffb0 === _0x2a6ae3) break;
      else _0x39a6b5["push"](_0x39a6b5["shift"]());
    } catch (_0x2e8b88) {
      _0x39a6b5["push"](_0x39a6b5["shift"]());
    }
  }
})(_0x5333, 0xc0261);
const form = document[_0x1b717a(0xe6)](_0x1b717a(0xf6)),
  inputCodigo = document[_0x1b717a(0xe6)](_0x1b717a(0xdf)),
  readerDiv = document["getElementById"](_0x1b717a(0x87)),
  ayudaTexto = document["getElementById"](_0x1b717a(0xdc)),
  installBtn = document[_0x1b717a(0xe6)]("installBtn");
let scannerActivo = ![],
  deferredPrompt;
function setCookie(_0x127900, _0x19885c, _0x2f2446) {
  const _0x45a927 = _0x1b717a,
    _0x118e8b = new Date(
      Date[_0x45a927(0xe8)]() + _0x2f2446 * 0x18 * 0x3c * 0x3c * 0x3e8
    )[_0x45a927(0xc8)]();
  document["cookie"] =
    _0x127900 +
    "=" +
    encodeURIComponent(_0x19885c) +
    ";\x20expires=" +
    _0x118e8b +
    _0x45a927(0x93);
}
function getCookie(_0x1f87b1) {
  const _0x38adda = _0x1b717a,
    _0x12568e = ";\x20" + document[_0x38adda(0xce)],
    _0x7600ac = _0x12568e[_0x38adda(0xbf)](";\x20" + _0x1f87b1 + "=");
  if (_0x7600ac[_0x38adda(0xb1)] === 0x2)
    return decodeURIComponent(
      _0x7600ac[_0x38adda(0xdb)]()[_0x38adda(0xbf)](";")[_0x38adda(0xc2)]()
    );
  return null;
}
const historialDiv = document[_0x1b717a(0xe6)](_0x1b717a(0xd9)),
  resultadoDiv = document[_0x1b717a(0xe6)](_0x1b717a(0x10c));
let historial = [];
const historialCookie = getCookie(_0x1b717a(0xd9));
if (historialCookie)
  try {
    historial = JSON[_0x1b717a(0x9a)](historialCookie);
  } catch (_0x2ce575) {
    historial = [];
  }
function renderClearButton() {
  return "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20";
}
function renderHistorial() {
  const _0x238e57 = _0x1b717a;
  (historialDiv[_0x238e57(0x10b)] =
    _0x238e57(0xb2) +
    (historial[_0x238e57(0xb1)] > 0x0 ? renderClearButton() : "") +
    _0x238e57(0xe0) +
    (historial[_0x238e57(0xb1)] === 0x0
      ? "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>"
      : _0x238e57(0x104) +
        historial[_0x238e57(0xd0)]((_0xd11727) => {
          const _0x56113d = _0x238e57,
            _0x44e90c =
              _0xd11727[_0x56113d(0x7f)] || _0xd11727["SKU"] || _0x56113d(0xfe),
            _0x20fc3d = _0xd11727[_0x56113d(0xe5)]
              ? new Date(_0xd11727["FECHA_ESCANEO"])[_0x56113d(0x8b)]()
              : "Fecha\x20desconocida";
          return (
            _0x56113d(0xbe) +
            _0xd11727[_0x56113d(0xa7)] +
            _0x56113d(0xd3) +
            _0x44e90c +
            _0x56113d(0x7c) +
            _0xd11727[_0x56113d(0xf7)] +
            "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x22>Escaneado:\x20" +
            _0x20fc3d +
            _0x56113d(0xd7)
          );
        })[_0x238e57(0xb4)]("") +
        _0x238e57(0x92)) +
    _0x238e57(0xbc)),
    setCookie(_0x238e57(0xd9), JSON[_0x238e57(0xea)](historial), 0x1e);
  const _0x18a5b4 = document["getElementById"](_0x238e57(0x91));
  _0x18a5b4 &&
    _0x18a5b4[_0x238e57(0x10f)](_0x238e57(0xf9), () => {
      const _0x196848 = _0x238e57;
      (historial = []),
        setCookie(_0x196848(0xd9), JSON["stringify"](historial), 0x1e),
        renderHistorial();
    });
}
inputCodigo["addEventListener"]("keydown", function (_0x14a63c) {
  const _0x434fb0 = _0x1b717a;
  _0x14a63c[_0x434fb0(0x96)] === "Enter" &&
    (_0x14a63c["preventDefault"](), form["requestSubmit"]());
}),
  form["addEventListener"](_0x1b717a(0xf3), async (_0x5d92b6) => {
    const _0x1dcbcc = _0x1b717a;
    _0x5d92b6["preventDefault"]();
    let _0xd69bbe = inputCodigo[_0x1dcbcc(0x84)]
      [_0x1dcbcc(0x90)]()
      ["replace"](/\s+$/, "");
    (inputCodigo[_0x1dcbcc(0x84)] = _0xd69bbe),
      (resultadoDiv[_0x1dcbcc(0x10b)] = "");
    if (!_0xd69bbe) {
      (resultadoDiv[_0x1dcbcc(0x10b)] = _0x1dcbcc(0xf2)),
        renderHistorial(),
        inputCodigo[_0x1dcbcc(0xe2)]();
      return;
    }
    (inputCodigo[_0x1dcbcc(0xaa)] = ""),
      (resultadoDiv[_0x1dcbcc(0x10b)] = _0x1dcbcc(0xd6));
    try {
      const _0xfb665a = await fetch(_0x1dcbcc(0xcd), {
          method: _0x1dcbcc(0xb6),
          headers: {
            Accept: _0x1dcbcc(0x82),
            "Content-Type": _0x1dcbcc(0xf8),
            "X-Requested-With": _0x1dcbcc(0xee),
          },
          body: _0x1dcbcc(0xb9) + _0xd69bbe,
        }),
        _0x62331 = await _0xfb665a[_0x1dcbcc(0x99)]();
      if (_0x62331?.[_0x1dcbcc(0xc9)]?.[_0x1dcbcc(0xa7)]) {
        const _0x79aa92 = _0x62331["DATOS"];
        (_0x79aa92[_0x1dcbcc(0x7f)] =
          _0x79aa92[_0x1dcbcc(0x7f)] ||
          _0x79aa92[_0x1dcbcc(0x100)] ||
          _0xd69bbe),
          (_0x79aa92["FECHA_ESCANEO"] = new Date()[_0x1dcbcc(0xfb)]()),
          historial[_0x1dcbcc(0xc7)](_0x79aa92),
          (resultadoDiv[_0x1dcbcc(0x10b)] =
            _0x1dcbcc(0x8e) +
            _0x79aa92[_0x1dcbcc(0xa7)] +
            "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-secondary\x22>SKU:\x20<strong>" +
            _0x79aa92[_0x1dcbcc(0x7f)] +
            "</strong></span><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-bold\x22>Precio:\x20$" +
            _0x79aa92[_0x1dcbcc(0xf7)] +
            _0x1dcbcc(0xd8) +
            new Date(_0x79aa92[_0x1dcbcc(0xe5)])[_0x1dcbcc(0x8b)]() +
            _0x1dcbcc(0x98)),
          (inputCodigo[_0x1dcbcc(0x84)] = ""),
          inputCodigo["focus"]();
      } else
        (resultadoDiv["innerHTML"] = _0x1dcbcc(0xc6)),
          (inputCodigo["value"] = ""),
          inputCodigo["focus"](),
          setTimeout(() => {
            const _0x31d748 = _0x1dcbcc;
            resultadoDiv[_0x31d748(0x10b)] = "";
          }, 0x1388);
      renderHistorial();
    } catch (_0x4c0f01) {
      (resultadoDiv[_0x1dcbcc(0x10b)] = _0x1dcbcc(0xe9)),
        inputCodigo[_0x1dcbcc(0xe2)](),
        renderHistorial();
    }
  });
function iniciarScanner() {
  const _0x2aaf8c = _0x1b717a;
  if (scannerActivo) return;
  navigator[_0x2aaf8c(0xf1)]
    [_0x2aaf8c(0xa3)]({ video: !![] })
    [_0x2aaf8c(0x8c)]((_0x52c313) => {
      const _0x4b97a1 = _0x2aaf8c;
      _0x52c313[_0x4b97a1(0xcb)]()[_0x4b97a1(0xfd)]((_0x18baf5) =>
        _0x18baf5["stop"]()
      ),
        (scannerActivo = !![]),
        (readerDiv[_0x4b97a1(0xcf)][_0x4b97a1(0x9c)] = _0x4b97a1(0xb7)),
        document[_0x4b97a1(0xe6)](_0x4b97a1(0x87))[_0x4b97a1(0x102)]({
          behavior: _0x4b97a1(0x7e),
          block: _0x4b97a1(0xc0),
        }),
        (ayudaTexto["style"]["display"] = _0x4b97a1(0xb7));
      const _0x4fc4ff = new Html5Qrcode(_0x4b97a1(0x87)),
        _0x403e43 = {
          fps: 0xa,
          videoConstraints: {
            width: { min: 0x190, ideal: 0x780 },
            height: { min: 0x190, ideal: 0x438 },
            facingMode: _0x4b97a1(0x7b),
            advanced: [{ zoom: 0x2 }],
          },
          qrbox: function (_0x1eb910, _0x3640d8) {
            const _0x58c74f = _0x4b97a1,
              _0x1fa2f9 = Math[_0x58c74f(0x106)](0x12c, _0x1eb910 * 0.9),
              _0x542845 = 0x64;
            return { width: _0x1fa2f9, height: _0x542845 };
          },
          rememberLastUsedCamera: !![],
          aspectRatio: 0x1,
          formatsToSupport: [
            Html5QrcodeSupportedFormats[_0x4b97a1(0xc4)],
            Html5QrcodeSupportedFormats[_0x4b97a1(0xf5)],
            Html5QrcodeSupportedFormats[_0x4b97a1(0xb5)],
            Html5QrcodeSupportedFormats[_0x4b97a1(0xfc)],
            Html5QrcodeSupportedFormats[_0x4b97a1(0x103)],
            Html5QrcodeSupportedFormats[_0x4b97a1(0x81)],
          ],
          experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
        };
      _0x4fc4ff[_0x4b97a1(0x9d)](
        { facingMode: "environment" },
        _0x403e43,
        (_0x27dcbc) => {
          const _0xf2e747 = _0x4b97a1;
          (inputCodigo[_0xf2e747(0x84)] = _0x27dcbc[_0xf2e747(0x90)]()[
            _0xf2e747(0xae)
          ](/\s+$/, "")),
            _0x4fc4ff[_0xf2e747(0x8f)]()[_0xf2e747(0x8c)](() => {
              const _0x34c895 = _0xf2e747;
              (readerDiv[_0x34c895(0xcf)][_0x34c895(0x9c)] = _0x34c895(0xa6)),
                (ayudaTexto["style"][_0x34c895(0x9c)] = _0x34c895(0xa6)),
                (scannerActivo = ![]),
                _0x4fc4ff[_0x34c895(0xde)](),
                form["requestSubmit"]();
            });
        },
        (_0x32e933) => {}
      )
        ["then"](() => {
          setTimeout(() => {
            const _0x454d87 = _0x39cf,
              _0x340520 = readerDiv[_0x454d87(0xe4)]("video");
            if (_0x340520) {
              const _0x4fc1ee =
                _0x340520[_0x454d87(0x97)]["getVideoTracks"]()[0x0];
              _0x4fc1ee[_0x454d87(0x101)]({
                focusMode: _0x454d87(0xb8),
                advanced: [{ zoom: 0x2 }],
              })
                ["then"](() => {})
                [_0x454d87(0x9f)]((_0x1df8f8) => {});
            }
          }, 0x7d0);
        })
        ["catch"]((_0x44b3bb) => {
          const _0x465610 = _0x4b97a1;
          (scannerActivo = ![]),
            (resultadoDiv[_0x465610(0x10b)] =
              "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara:\x20" +
              _0x44b3bb +
              _0x465610(0x7d)),
            renderHistorial();
        });
      const _0x5269eb = new MutationObserver(() => {
        const _0x39a215 = _0x4b97a1,
          _0x381eb6 = readerDiv["querySelector"](_0x39a215(0xfa));
        _0x381eb6 &&
          (_0x381eb6[_0x39a215(0x85)]("playsinline", ""),
          _0x381eb6[_0x39a215(0x85)]("autoplay", ""),
          _0x381eb6[_0x39a215(0x85)]("muted", ""),
          _0x5269eb["disconnect"]());
      });
      _0x5269eb["observe"](readerDiv, { childList: !![], subtree: !![] });
    })
    ["catch"]((_0x4c3fd7) => {
      const _0x350a75 = _0x2aaf8c;
      (resultadoDiv[_0x350a75(0x10b)] = _0x350a75(0x10e)), renderHistorial();
    });
}
function _0x5333() {
  const _0x260146 = [
    "reader",
    "outcome",
    "register",
    "7662096ksRbjf",
    "toLocaleString",
    "then",
    "serviceWorker",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Producto\x20encontrado:</strong>\x20",
    "stop",
    "trim",
    "limpiarHistorialBtn",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>",
    ";\x20path=/",
    "❌\x20Instalación\x20rechazada",
    "load",
    "key",
    "srcObject",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "json",
    "parse",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20detectó\x20código,\x20recorta\x20la\x20imagen\x20o\x20prueba\x20con\x20otra</div>",
    "display",
    "start",
    "30971178GyhTMm",
    "catch",
    "service-worker.js",
    "❌\x20Error\x20al\x20registrar\x20SW:",
    "1937374fysRrm",
    "getUserMedia",
    "64bgPoAe",
    "canvas",
    "none",
    "NOMBRE",
    "onload",
    "src",
    "placeholder",
    "codeResult",
    "ean_8_reader",
    "709338Qhvxgy",
    "replace",
    "add",
    "158421TooonP",
    "length",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "files",
    "join",
    "EAN_8",
    "POST",
    "block",
    "continuous",
    "codigo=",
    "code",
    "d-none",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "✅\x20Service\x20Worker\x20registrado:",
    "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span><strong>",
    "split",
    "center",
    "ean_reader",
    "shift",
    "readAsDataURL",
    "CODE_128",
    "userChoice",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontró\x20el\x20código\x20ingresado</div>",
    "unshift",
    "toUTCString",
    "DATOS",
    "classList",
    "getTracks",
    "error",
    "https://dvncloud.com/instancias/theback9golf/index.php?controller=theback9golf:consultar_precio&DVNUSERID=45&DVNSUCURSAL=1",
    "cookie",
    "style",
    "map",
    "width",
    "height",
    "</strong></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x22>SKU:\x20<strong>",
    "upc_e_reader",
    "drawImage",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "</span><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x22>Escaneado:\x20",
    "historial",
    "createElement",
    "pop",
    "ayuda",
    "code_39_reader",
    "clear",
    "codigo",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "putImageData",
    "focus",
    "result",
    "querySelector",
    "FECHA_ESCANEO",
    "getElementById",
    "remove",
    "now",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Ocurrió\x20un\x20error\x20al\x20consultar\x20el\x20producto</div>",
    "stringify",
    "prompt",
    "requestSubmit",
    "getImageData",
    "XMLHttpRequest",
    "fileInput",
    "decodeSingle",
    "mediaDevices",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>",
    "submit",
    "log",
    "EAN_13",
    "formulario",
    "PRECIO",
    "application/x-www-form-urlencoded;\x20charset=UTF-8",
    "click",
    "video",
    "toISOString",
    "UPC_A",
    "forEach",
    "SKU\x20desconocido",
    "77jzAoOP",
    "SKU",
    "applyConstraints",
    "scrollIntoView",
    "UPC_E",
    "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "beforeinstallprompt",
    "min",
    "1018229mpOqcK",
    "scope",
    "target",
    "accepted",
    "innerHTML",
    "resultado",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20autoriza\x20el\x20acceso\x20a\x20la\x20cámara</div>",
    "addEventListener",
    "data",
    "change",
    "environment",
    "</strong></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x22>Precio:\x20$",
    "</div>",
    "smooth",
    "CODIGO",
    "upc_reader",
    "CODE_39",
    "application/json,\x20text/javascript,\x20*/*;\x20q=0.01",
    "code_128_reader",
    "value",
    "setAttribute",
    "5956780ARceot",
  ];
  _0x5333 = function () {
    return _0x260146;
  };
  return _0x5333();
}
const fileInput = document[_0x1b717a(0xe6)](_0x1b717a(0xef));
fileInput[_0x1b717a(0x10f)](_0x1b717a(0x7a), async (_0x37c846) => {
  const _0x41be3b = _0x1b717a,
    _0x13b4c5 = _0x37c846[_0x41be3b(0x109)][_0x41be3b(0xb3)][0x0];
  if (!_0x13b4c5) return;
  resultadoDiv[_0x41be3b(0x10b)] = _0x41be3b(0x10d);
  const _0x1c4e74 = new FileReader();
  (_0x1c4e74[_0x41be3b(0xa8)] = function (_0x199043) {
    const _0x29b22e = _0x41be3b,
      _0x1df2b1 = new Image();
    (_0x1df2b1["onload"] = function () {
      const _0x1a564b = _0x39cf,
        _0xb0c36e = document[_0x1a564b(0xda)](_0x1a564b(0xa5)),
        _0x4160af = _0xb0c36e["getContext"]("2d");
      (_0xb0c36e["width"] = _0x1df2b1[_0x1a564b(0xd1)]),
        (_0xb0c36e[_0x1a564b(0xd2)] = _0x1df2b1["height"]),
        _0x4160af[_0x1a564b(0xd5)](_0x1df2b1, 0x0, 0x0);
      const _0x18fa0f = _0x4160af[_0x1a564b(0xed)](
          0x0,
          0x0,
          _0xb0c36e[_0x1a564b(0xd1)],
          _0xb0c36e[_0x1a564b(0xd2)]
        ),
        _0x31d485 = _0x18fa0f[_0x1a564b(0x110)];
      for (
        let _0x479334 = 0x0;
        _0x479334 < _0x31d485[_0x1a564b(0xb1)];
        _0x479334 += 0x4
      ) {
        const _0x2c45b0 =
            (_0x31d485[_0x479334] +
              _0x31d485[_0x479334 + 0x1] +
              _0x31d485[_0x479334 + 0x2]) /
            0x3,
          _0x2415a0 = _0x2c45b0 > 0x80 ? 0xff : 0x0;
        _0x31d485[_0x479334] =
          _0x31d485[_0x479334 + 0x1] =
          _0x31d485[_0x479334 + 0x2] =
            _0x2415a0;
      }
      _0x4160af[_0x1a564b(0xe1)](_0x18fa0f, 0x0, 0x0);
      const _0x283ee7 = _0xb0c36e["toDataURL"]();
      Quagga[_0x1a564b(0xf0)](
        {
          src: _0x283ee7,
          numOfWorkers: 0x0,
          locate: !![],
          inputStream: { size: 0x320 },
          decoder: {
            readers: [
              _0x1a564b(0xc1),
              _0x1a564b(0xac),
              _0x1a564b(0x83),
              _0x1a564b(0x80),
              _0x1a564b(0xd4),
              _0x1a564b(0xdd),
            ],
          },
        },
        function (_0x1e8115) {
          const _0x3e672c = _0x1a564b;
          _0x1e8115 && _0x1e8115[_0x3e672c(0xab)]
            ? ((inputCodigo[_0x3e672c(0x84)] = _0x1e8115[_0x3e672c(0xab)][
                _0x3e672c(0xba)
              ]
                ["trim"]()
                [_0x3e672c(0xae)](/\s+$/, "")),
              form[_0x3e672c(0xec)]())
            : ((resultadoDiv[_0x3e672c(0x10b)] = _0x3e672c(0x9b)),
              renderHistorial()),
            (fileInput["value"] = "");
        }
      );
    }),
      (_0x1df2b1[_0x29b22e(0xa9)] =
        _0x199043[_0x29b22e(0x109)][_0x29b22e(0xe3)]);
  }),
    _0x1c4e74[_0x41be3b(0xc3)](_0x13b4c5);
});
function _0x39cf(_0x544dfb, _0x32e807) {
  const _0x5333e1 = _0x5333();
  return (
    (_0x39cf = function (_0x39cf3d, _0x2f9440) {
      _0x39cf3d = _0x39cf3d - 0x7a;
      let _0xa1fa58 = _0x5333e1[_0x39cf3d];
      return _0xa1fa58;
    }),
    _0x39cf(_0x544dfb, _0x32e807)
  );
}
"serviceWorker" in navigator &&
  window[_0x1b717a(0x10f)](_0x1b717a(0x95), () => {
    const _0x17e54e = _0x1b717a;
    navigator[_0x17e54e(0x8d)]
      [_0x17e54e(0x89)](_0x17e54e(0xa0))
      [_0x17e54e(0x8c)]((_0x33a346) =>
        console[_0x17e54e(0xf4)](_0x17e54e(0xbd), _0x33a346[_0x17e54e(0x108)])
      )
      [_0x17e54e(0x9f)]((_0x360165) =>
        console[_0x17e54e(0xcc)](_0x17e54e(0xa1), _0x360165)
      );
  });
window[_0x1b717a(0x10f)](_0x1b717a(0x105), (_0x53aed6) => {
  const _0x114ea9 = _0x1b717a;
  _0x53aed6["preventDefault"](),
    (deferredPrompt = _0x53aed6),
    installBtn && installBtn[_0x114ea9(0xca)][_0x114ea9(0xe7)](_0x114ea9(0xbb));
}),
  installBtn["addEventListener"](_0x1b717a(0xf9), (_0x177fc9) => {
    const _0x65a6b1 = _0x1b717a;
    deferredPrompt &&
      (deferredPrompt[_0x65a6b1(0xeb)](),
      deferredPrompt[_0x65a6b1(0xc5)][_0x65a6b1(0x8c)]((_0xca3553) => {
        const _0x207f5d = _0x65a6b1;
        _0xca3553[_0x207f5d(0x88)] === _0x207f5d(0x10a)
          ? console[_0x207f5d(0xf4)]("✅\x20Instalación\x20aceptada")
          : console[_0x207f5d(0xf4)](_0x207f5d(0x94)),
          (deferredPrompt = null),
          installBtn[_0x207f5d(0xca)][_0x207f5d(0xaf)]("d-none");
      }));
  }),
  renderHistorial();
