const _0x403975 = _0x10dc;
(function (_0x30a558, _0x2eaa92) {
  const _0x554d3a = _0x10dc,
    _0x33a46f = _0x30a558();
  while (!![]) {
    try {
      const _0x4f30bf =
        -parseInt(_0x554d3a(0x14f)) / 0x1 +
        parseInt(_0x554d3a(0x151)) / 0x2 +
        parseInt(_0x554d3a(0x103)) / 0x3 +
        (-parseInt(_0x554d3a(0xc3)) / 0x4) *
          (-parseInt(_0x554d3a(0x119)) / 0x5) +
        (-parseInt(_0x554d3a(0x126)) / 0x6) *
          (-parseInt(_0x554d3a(0x120)) / 0x7) +
        -parseInt(_0x554d3a(0xbf)) / 0x8 +
        (parseInt(_0x554d3a(0xc8)) / 0x9) * (-parseInt(_0x554d3a(0x145)) / 0xa);
      if (_0x4f30bf === _0x2eaa92) break;
      else _0x33a46f["push"](_0x33a46f["shift"]());
    } catch (_0xeb0489) {
      _0x33a46f["push"](_0x33a46f["shift"]());
    }
  }
})(_0x7a8f, 0xbcce3);
const form = document[_0x403975(0xe9)](_0x403975(0x10f)),
  inputCodigo = document[_0x403975(0xe9)]("codigo"),
  readerDiv = document[_0x403975(0xe9)](_0x403975(0xdf)),
  ayudaTexto = document["getElementById"](_0x403975(0xc0)),
  installBtn = document[_0x403975(0xe9)](_0x403975(0x101));
let scannerActivo = ![],
  deferredPrompt;
function setCookie(_0x21ae80, _0x4a9bb1, _0x26dca9) {
  const _0x45ee9b = _0x403975,
    _0x4c27ad = new Date(
      Date[_0x45ee9b(0x123)]() + _0x26dca9 * 0x18 * 0x3c * 0x3c * 0x3e8
    )[_0x45ee9b(0x128)]();
  document["cookie"] =
    _0x21ae80 +
    "=" +
    encodeURIComponent(_0x4a9bb1) +
    _0x45ee9b(0xd4) +
    _0x4c27ad +
    _0x45ee9b(0x11d);
}
function getCookie(_0x15c3ba) {
  const _0x220cc6 = _0x403975,
    _0x2048dc = ";\x20" + document[_0x220cc6(0xde)],
    _0x217ebe = _0x2048dc[_0x220cc6(0x129)](";\x20" + _0x15c3ba + "=");
  if (_0x217ebe["length"] === 0x2)
    return decodeURIComponent(
      _0x217ebe[_0x220cc6(0x130)]()[_0x220cc6(0x129)](";")[_0x220cc6(0x12a)]()
    );
  return null;
}
function _0x10dc(_0x1f6d8a, _0x89fe9f) {
  const _0x7a8f69 = _0x7a8f();
  return (
    (_0x10dc = function (_0x10dca7, _0x543ac3) {
      _0x10dca7 = _0x10dca7 - 0xbb;
      let _0x4bcacd = _0x7a8f69[_0x10dca7];
      return _0x4bcacd;
    }),
    _0x10dc(_0x1f6d8a, _0x89fe9f)
  );
}
const historialDiv = document[_0x403975(0xe9)](_0x403975(0xc2)),
  resultadoDiv = document[_0x403975(0xe9)](_0x403975(0x143));
let historial = [];
const historialCookie = getCookie(_0x403975(0xc2));
if (historialCookie)
  try {
    historial = JSON[_0x403975(0x13a)](historialCookie);
  } catch (_0x5ae7f6) {
    historial = [];
  }
function renderClearButton() {
  const _0x832238 = _0x403975;
  return _0x832238(0x115);
}
function renderHistorial() {
  const _0x2decc0 = _0x403975;
  (historialDiv[_0x2decc0(0xfd)] =
    _0x2decc0(0xcc) +
    (historial[_0x2decc0(0xc7)] > 0x0 ? renderClearButton() : "") +
    _0x2decc0(0xfa) +
    (historial["length"] === 0x0
      ? _0x2decc0(0xda)
      : _0x2decc0(0xef) +
        historial[_0x2decc0(0x13b)]((_0x492677) => {
          const _0x2b2aad = _0x2decc0,
            _0x28395d =
              _0x492677[_0x2b2aad(0x102)] ||
              _0x492677[_0x2b2aad(0xce)] ||
              _0x2b2aad(0x13c),
            _0x1f456f = _0x492677["FECHA_ESCANEO"]
              ? new Date(_0x492677[_0x2b2aad(0x11a)])[_0x2b2aad(0x106)]()
              : _0x2b2aad(0x140);
          return (
            _0x2b2aad(0xd3) +
            _0x492677[_0x2b2aad(0xca)] +
            _0x2b2aad(0x14d) +
            _0x28395d +
            _0x2b2aad(0x137) +
            _0x492677[_0x2b2aad(0xd6)] +
            _0x2b2aad(0x11f) +
            _0x1f456f +
            _0x2b2aad(0x11e)
          );
        })["join"]("") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>") +
    _0x2decc0(0xcd)),
    setCookie(_0x2decc0(0xc2), JSON[_0x2decc0(0x125)](historial), 0x1e);
  const _0x5d1553 = document[_0x2decc0(0xe9)](_0x2decc0(0xf1));
  _0x5d1553 &&
    _0x5d1553[_0x2decc0(0xe5)](_0x2decc0(0xd5), () => {
      const _0x364005 = _0x2decc0;
      (historial = []),
        setCookie(_0x364005(0xc2), JSON["stringify"](historial), 0x1e),
        renderHistorial();
    });
}
inputCodigo[_0x403975(0xe5)]("keydown", function (_0x2d0918) {
  const _0x57ef21 = _0x403975;
  _0x2d0918[_0x57ef21(0xf0)] === _0x57ef21(0xfe) &&
    (_0x2d0918[_0x57ef21(0x150)](), form["requestSubmit"]());
}),
  form[_0x403975(0xe5)](_0x403975(0xc1), async (_0x438258) => {
    const _0x43cbff = _0x403975;
    _0x438258["preventDefault"]();
    let _0x38a4a9 = inputCodigo[_0x43cbff(0xdb)]
      [_0x43cbff(0x148)]()
      [_0x43cbff(0x14e)](/\s+$/, "");
    (inputCodigo[_0x43cbff(0xdb)] = _0x38a4a9),
      (resultadoDiv[_0x43cbff(0xfd)] = "");
    if (!_0x38a4a9) {
      (resultadoDiv[_0x43cbff(0xfd)] =
        "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>"),
        renderHistorial(),
        inputCodigo[_0x43cbff(0x12d)]();
      return;
    }
    (inputCodigo[_0x43cbff(0xd8)] = ""),
      (resultadoDiv["innerHTML"] = _0x43cbff(0x14a));
    try {
      const _0x2acdea = await fetch(
          "https://dvncloud.com/instancias/theback9golf/index.php?controller=theback9golf:consultar_precio&DVNUSERID=45&DVNSUCURSAL=1",
          {
            method: _0x43cbff(0x122),
            headers: {
              Accept: _0x43cbff(0x113),
              "Content-Type": _0x43cbff(0xd2),
              "X-Requested-With": _0x43cbff(0xfb),
            },
            body: "codigo=" + _0x38a4a9,
          }
        ),
        _0x3fe590 = await _0x2acdea[_0x43cbff(0x10b)]();
      if (_0x3fe590?.[_0x43cbff(0x146)]?.[_0x43cbff(0xca)]) {
        const _0x347b60 = _0x3fe590[_0x43cbff(0x146)];
        (_0x347b60[_0x43cbff(0x102)] =
          _0x347b60[_0x43cbff(0x102)] ||
          _0x347b60[_0x43cbff(0xce)] ||
          _0x38a4a9),
          (_0x347b60["FECHA_ESCANEO"] = new Date()[_0x43cbff(0x100)]()),
          historial[_0x43cbff(0x139)](_0x347b60),
          (resultadoDiv[_0x43cbff(0xfd)] =
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Producto\x20encontrado:</strong>\x20" +
            _0x347b60[_0x43cbff(0xca)] +
            "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-secondary\x22>SKU:\x20<strong>" +
            _0x347b60[_0x43cbff(0x102)] +
            _0x43cbff(0x114) +
            _0x347b60["PRECIO"] +
            _0x43cbff(0x107) +
            new Date(_0x347b60[_0x43cbff(0x11a)])["toLocaleString"]() +
            _0x43cbff(0xed)),
          (inputCodigo[_0x43cbff(0xdb)] = ""),
          inputCodigo[_0x43cbff(0x12d)]();
      } else
        (resultadoDiv[_0x43cbff(0xfd)] = _0x43cbff(0xdc)),
          (inputCodigo[_0x43cbff(0xdb)] = ""),
          inputCodigo[_0x43cbff(0x12d)](),
          setTimeout(() => {
            const _0x13eb1d = _0x43cbff;
            resultadoDiv[_0x13eb1d(0xfd)] = "";
          }, 0x1388);
      renderHistorial();
    } catch (_0x400ca3) {
      (resultadoDiv["innerHTML"] = _0x43cbff(0xf2)),
        inputCodigo[_0x43cbff(0x12d)](),
        renderHistorial();
    }
  });
function iniciarScanner() {
  const _0x107392 = _0x403975;
  if (scannerActivo) return;
  navigator[_0x107392(0x121)]
    [_0x107392(0xd9)]({ video: !![] })
    [_0x107392(0x142)]((_0x50515d) => {
      const _0x50e73 = _0x107392;
      _0x50515d[_0x50e73(0xe6)]()[_0x50e73(0x12b)]((_0x1f6ac1) =>
        _0x1f6ac1[_0x50e73(0x104)]()
      ),
        (scannerActivo = !![]),
        (readerDiv[_0x50e73(0x12c)][_0x50e73(0x116)] = _0x50e73(0x134)),
        document["getElementById"](_0x50e73(0xdf))[_0x50e73(0x14c)]({
          behavior: _0x50e73(0x144),
          block: "center",
        }),
        (ayudaTexto[_0x50e73(0x12c)][_0x50e73(0x116)] = _0x50e73(0x134));
      const _0x28d9c4 = new Html5Qrcode("reader"),
        _0x381b41 = {
          fps: 0xa,
          videoConstraints: {
            width: { min: 0x190, ideal: 0x780 },
            height: { min: 0x190, ideal: 0x438 },
            facingMode: "environment",
            advanced: [{ zoom: 0x2 }],
          },
          qrbox: function (_0x4f7ea3, _0x30e4d1) {
            const _0x17a7ac = Math["min"](0x12c, _0x4f7ea3 * 0.9),
              _0x3855d2 = 0x64;
            return { width: _0x17a7ac, height: _0x3855d2 };
          },
          rememberLastUsedCamera: !![],
          aspectRatio: 0x1,
          formatsToSupport: [
            Html5QrcodeSupportedFormats[_0x50e73(0x13d)],
            Html5QrcodeSupportedFormats["EAN_13"],
            Html5QrcodeSupportedFormats[_0x50e73(0x138)],
            Html5QrcodeSupportedFormats[_0x50e73(0xf4)],
            Html5QrcodeSupportedFormats[_0x50e73(0xf3)],
            Html5QrcodeSupportedFormats[_0x50e73(0x149)],
          ],
          experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
        };
      _0x28d9c4["start"](
        { facingMode: _0x50e73(0xe7) },
        _0x381b41,
        (_0x3af6c8) => {
          const _0x486e9d = _0x50e73;
          (inputCodigo[_0x486e9d(0xdb)] = _0x3af6c8["trim"]()[_0x486e9d(0x14e)](
            /\s+$/,
            ""
          )),
            _0x28d9c4["stop"]()["then"](() => {
              const _0x508713 = _0x486e9d;
              (readerDiv[_0x508713(0x12c)][_0x508713(0x116)] =
                _0x508713(0x11c)),
                (ayudaTexto[_0x508713(0x12c)][_0x508713(0x116)] =
                  _0x508713(0x11c)),
                (scannerActivo = ![]),
                _0x28d9c4[_0x508713(0x109)](),
                form["requestSubmit"]();
            });
        },
        (_0x13ba19) => {}
      )
        ["then"](() => {
          setTimeout(() => {
            const _0xff4320 = _0x10dc,
              _0x4a4e19 = readerDiv[_0xff4320(0xd1)](_0xff4320(0xf7));
            if (_0x4a4e19) {
              const _0x1b9aef =
                _0x4a4e19[_0xff4320(0xf8)][_0xff4320(0x127)]()[0x0];
              _0x1b9aef[_0xff4320(0x10c)]({
                focusMode: "continuous",
                advanced: [{ zoom: 0x2 }],
              })
                [_0xff4320(0x142)](() => {})
                [_0xff4320(0xe0)]((_0x5150c2) => {});
            }
          }, 0x7d0);
        })
        [_0x50e73(0xe0)]((_0x48be95) => {
          const _0x5c42dc = _0x50e73;
          (scannerActivo = ![]),
            (resultadoDiv[_0x5c42dc(0xfd)] =
              _0x5c42dc(0xfc) + _0x48be95 + "</div>"),
            renderHistorial();
        });
      const _0x131e50 = new MutationObserver(() => {
        const _0x51cb66 = _0x50e73,
          _0x3a796c = readerDiv[_0x51cb66(0xd1)](_0x51cb66(0xf7));
        _0x3a796c &&
          (_0x3a796c[_0x51cb66(0xd0)](_0x51cb66(0xe2), ""),
          _0x3a796c[_0x51cb66(0xd0)](_0x51cb66(0x11b), ""),
          _0x3a796c[_0x51cb66(0xd0)](_0x51cb66(0xeb), ""),
          _0x131e50[_0x51cb66(0xc4)]());
      });
      _0x131e50["observe"](readerDiv, { childList: !![], subtree: !![] });
    })
    ["catch"]((_0x3e3ebf) => {
      const _0x46efd5 = _0x107392;
      (resultadoDiv["innerHTML"] = _0x46efd5(0x105)), renderHistorial();
    });
}
function _0x7a8f() {
  const _0xa154f1 = [
    "prompt",
    "getImageData",
    "location",
    "block",
    "✅\x20Instalación\x20aceptada",
    "readAsDataURL",
    "</strong></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x20ms-md-2\x22>Precio:\x20$",
    "EAN_8",
    "unshift",
    "parse",
    "map",
    "SKU\x20desconocido",
    "CODE_128",
    "d-none",
    "controllerchange",
    "Fecha\x20desconocida",
    "remove",
    "then",
    "resultado",
    "smooth",
    "30nqbUWN",
    "DATOS",
    "load",
    "trim",
    "CODE_39",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>",
    "toDataURL",
    "scrollIntoView",
    "</strong></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x20ms-md-2\x22>SKU:\x20<strong>",
    "replace",
    "565285JlQyQO",
    "preventDefault",
    "2605786uGCJSu",
    "onload",
    "service-worker.js",
    "upc_e_reader",
    "src",
    "❌\x20Error\x20al\x20registrar\x20SW:",
    "reload",
    "3106208IKRboj",
    "ayuda",
    "submit",
    "historial",
    "372mgvzmP",
    "disconnect",
    "update",
    "decodeSingle",
    "length",
    "9784647AhlgyX",
    "add",
    "NOMBRE",
    "width",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "SKU",
    "❌\x20Instalación\x20rechazada",
    "setAttribute",
    "querySelector",
    "application/x-www-form-urlencoded;\x20charset=UTF-8",
    "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span><strong>",
    ";\x20expires=",
    "click",
    "PRECIO",
    "accepted",
    "placeholder",
    "getUserMedia",
    "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>",
    "value",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontró\x20el\x20código\x20ingresado</div>",
    "change",
    "cookie",
    "reader",
    "catch",
    "getRegistrations",
    "playsinline",
    "error",
    "files",
    "addEventListener",
    "getTracks",
    "environment",
    "userChoice",
    "getElementById",
    "createElement",
    "muted",
    "height",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20detectó\x20código,\x20recorta\x20la\x20imagen\x20o\x20prueba\x20con\x20otra</div>",
    "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "key",
    "limpiarHistorialBtn",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Ocurrió\x20un\x20error\x20al\x20consultar\x20el\x20producto</div>",
    "UPC_E",
    "UPC_A",
    "register",
    "classList",
    "video",
    "srcObject",
    "upc_reader",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "XMLHttpRequest",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara:\x20",
    "innerHTML",
    "Enter",
    "code",
    "toISOString",
    "installBtn",
    "CODIGO",
    "1965726lNkYVN",
    "stop",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20autoriza\x20el\x20acceso\x20a\x20la\x20cámara</div>",
    "toLocaleString",
    "</span><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x22>Escaneado:\x20",
    "code_39_reader",
    "clear",
    "ean_8_reader",
    "json",
    "applyConstraints",
    "result",
    "putImageData",
    "formulario",
    "beforeinstallprompt",
    "data",
    "target",
    "application/json,\x20text/javascript,\x20*/*;\x20q=0.01",
    "</strong></span><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-bold\x22>Precio:\x20$",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "display",
    "log",
    "requestSubmit",
    "83035vxWwwf",
    "FECHA_ESCANEO",
    "autoplay",
    "none",
    ";\x20path=/",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x20ms-md-2\x22>Escaneado:\x20",
    "7fautXD",
    "mediaDevices",
    "POST",
    "now",
    "serviceWorker",
    "stringify",
    "8915226EUukag",
    "getVideoTracks",
    "toUTCString",
    "split",
    "shift",
    "forEach",
    "style",
    "focus",
    "fileInput",
    "codeResult",
    "pop",
  ];
  _0x7a8f = function () {
    return _0xa154f1;
  };
  return _0x7a8f();
}
const fileInput = document["getElementById"](_0x403975(0x12e));
fileInput["addEventListener"](_0x403975(0xdd), async (_0x446e95) => {
  const _0x115860 = _0x403975,
    _0x7650be = _0x446e95[_0x115860(0x112)][_0x115860(0xe4)][0x0];
  if (!_0x7650be) return;
  resultadoDiv[_0x115860(0xfd)] =
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>";
  const _0x5fdd90 = new FileReader();
  (_0x5fdd90[_0x115860(0x152)] = function (_0x574dce) {
    const _0x49aff6 = _0x115860,
      _0x2aeeb4 = new Image();
    (_0x2aeeb4[_0x49aff6(0x152)] = function () {
      const _0x243fe0 = _0x49aff6,
        _0x356a22 = document[_0x243fe0(0xea)]("canvas"),
        _0x2b491e = _0x356a22["getContext"]("2d");
      (_0x356a22["width"] = _0x2aeeb4[_0x243fe0(0xcb)]),
        (_0x356a22[_0x243fe0(0xec)] = _0x2aeeb4["height"]),
        _0x2b491e["drawImage"](_0x2aeeb4, 0x0, 0x0);
      const _0xd6ec09 = _0x2b491e[_0x243fe0(0x132)](
          0x0,
          0x0,
          _0x356a22[_0x243fe0(0xcb)],
          _0x356a22[_0x243fe0(0xec)]
        ),
        _0x4ff4ca = _0xd6ec09[_0x243fe0(0x111)];
      for (
        let _0x3bc784 = 0x0;
        _0x3bc784 < _0x4ff4ca["length"];
        _0x3bc784 += 0x4
      ) {
        const _0x407b9d =
            (_0x4ff4ca[_0x3bc784] +
              _0x4ff4ca[_0x3bc784 + 0x1] +
              _0x4ff4ca[_0x3bc784 + 0x2]) /
            0x3,
          _0x33799a = _0x407b9d > 0x80 ? 0xff : 0x0;
        _0x4ff4ca[_0x3bc784] =
          _0x4ff4ca[_0x3bc784 + 0x1] =
          _0x4ff4ca[_0x3bc784 + 0x2] =
            _0x33799a;
      }
      _0x2b491e[_0x243fe0(0x10e)](_0xd6ec09, 0x0, 0x0);
      const _0x5301c3 = _0x356a22[_0x243fe0(0x14b)]();
      Quagga[_0x243fe0(0xc6)](
        {
          src: _0x5301c3,
          numOfWorkers: 0x0,
          locate: !![],
          inputStream: { size: 0x320 },
          decoder: {
            readers: [
              "ean_reader",
              _0x243fe0(0x10a),
              "code_128_reader",
              _0x243fe0(0xf9),
              _0x243fe0(0xbb),
              _0x243fe0(0x108),
            ],
          },
        },
        function (_0x223e3d) {
          const _0x430973 = _0x243fe0;
          _0x223e3d && _0x223e3d[_0x430973(0x12f)]
            ? ((inputCodigo["value"] = _0x223e3d["codeResult"][_0x430973(0xff)]
                [_0x430973(0x148)]()
                [_0x430973(0x14e)](/\s+$/, "")),
              form[_0x430973(0x118)]())
            : ((resultadoDiv[_0x430973(0xfd)] = _0x430973(0xee)),
              renderHistorial()),
            (fileInput[_0x430973(0xdb)] = "");
        }
      );
    }),
      (_0x2aeeb4[_0x49aff6(0xbc)] =
        _0x574dce[_0x49aff6(0x112)][_0x49aff6(0x10d)]);
  }),
    _0x5fdd90[_0x115860(0x136)](_0x7650be);
});
_0x403975(0x124) in navigator &&
  window[_0x403975(0xe5)](_0x403975(0x147), () => {
    const _0x48631d = _0x403975;
    navigator[_0x48631d(0x124)]
      [_0x48631d(0xf5)](_0x48631d(0x153))
      [_0x48631d(0x142)]((_0x5cc71f) =>
        console[_0x48631d(0x117)](
          "✅\x20Service\x20Worker\x20registrado:",
          _0x5cc71f["scope"]
        )
      )
      [_0x48631d(0xe0)]((_0x23c9d1) =>
        console[_0x48631d(0xe3)](_0x48631d(0xbd), _0x23c9d1)
      );
  });
window[_0x403975(0xe5)](_0x403975(0x110), (_0x5809d1) => {
  const _0x1faef5 = _0x403975;
  _0x5809d1[_0x1faef5(0x150)](),
    (deferredPrompt = _0x5809d1),
    installBtn &&
      installBtn[_0x1faef5(0xf6)][_0x1faef5(0x141)](_0x1faef5(0x13e));
}),
  installBtn["addEventListener"](_0x403975(0xd5), (_0x28ae1e) => {
    const _0x326b3e = _0x403975;
    deferredPrompt &&
      (deferredPrompt[_0x326b3e(0x131)](),
      deferredPrompt[_0x326b3e(0xe8)][_0x326b3e(0x142)]((_0x6b697b) => {
        const _0x456ecf = _0x326b3e;
        _0x6b697b["outcome"] === _0x456ecf(0xd7)
          ? console["log"](_0x456ecf(0x135))
          : console[_0x456ecf(0x117)](_0x456ecf(0xcf)),
          (deferredPrompt = null),
          installBtn[_0x456ecf(0xf6)][_0x456ecf(0xc9)](_0x456ecf(0x13e));
      }));
  });
"serviceWorker" in navigator &&
  (navigator[_0x403975(0x124)]
    [_0x403975(0xe1)]()
    [_0x403975(0x142)](function (_0x5b561b) {
      const _0x300381 = _0x403975;
      for (let _0x261de9 of _0x5b561b) {
        _0x261de9[_0x300381(0xc5)]();
      }
    }),
  navigator[_0x403975(0x124)]["addEventListener"](
    _0x403975(0x13f),
    function () {
      const _0x356de5 = _0x403975;
      window[_0x356de5(0x133)][_0x356de5(0xbe)]();
    }
  ));
renderHistorial();
