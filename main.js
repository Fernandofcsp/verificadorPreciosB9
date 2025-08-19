const _0x3d7cac = _0x2e33;
(function (_0x4d9320, _0x3ed380) {
  const _0x3747db = _0x2e33,
    _0x58de8a = _0x4d9320();
  while (!![]) {
    try {
      const _0x298ee1 =
        parseInt(_0x3747db(0x101)) / 0x1 +
        (-parseInt(_0x3747db(0x9f)) / 0x2) *
          (-parseInt(_0x3747db(0x10a)) / 0x3) +
        (-parseInt(_0x3747db(0x113)) / 0x4) *
          (parseInt(_0x3747db(0xe7)) / 0x5) +
        -parseInt(_0x3747db(0x95)) / 0x6 +
        (parseInt(_0x3747db(0x117)) / 0x7) * (parseInt(_0x3747db(0xb9)) / 0x8) +
        (parseInt(_0x3747db(0xe9)) / 0x9) * (parseInt(_0x3747db(0x9d)) / 0xa) +
        (parseInt(_0x3747db(0xe4)) / 0xb) * (-parseInt(_0x3747db(0xd8)) / 0xc);
      if (_0x298ee1 === _0x3ed380) break;
      else _0x58de8a["push"](_0x58de8a["shift"]());
    } catch (_0x909ad2) {
      _0x58de8a["push"](_0x58de8a["shift"]());
    }
  }
})(_0x2484, 0x4044b);
const form = document[_0x3d7cac(0x102)](_0x3d7cac(0xa4)),
  inputCodigo = document[_0x3d7cac(0x102)](_0x3d7cac(0xed)),
  readerDiv = document[_0x3d7cac(0x102)](_0x3d7cac(0x100)),
  ayudaTexto = document[_0x3d7cac(0x102)](_0x3d7cac(0x121)),
  installBtn = document[_0x3d7cac(0x102)](_0x3d7cac(0xd3));
let scannerActivo = ![],
  deferredPrompt,
  puedeEscanear = !![],
  ultimoCodigoEscaneado = "";
function setCookie(_0x1f0e1c, _0x571d44, _0x439b09) {
  const _0x3049ac = _0x3d7cac,
    _0x48da35 = new Date(
      Date[_0x3049ac(0x9b)]() + _0x439b09 * 0x18 * 0x3c * 0x3c * 0x3e8
    )[_0x3049ac(0x10d)]();
  document[_0x3049ac(0xa7)] =
    _0x1f0e1c +
    "=" +
    encodeURIComponent(_0x571d44) +
    _0x3049ac(0x83) +
    _0x48da35 +
    _0x3049ac(0xf7);
}
function getCookie(_0xd914a2) {
  const _0x5e7bc4 = _0x3d7cac,
    _0x5df610 = ";\x20" + document[_0x5e7bc4(0xa7)],
    _0xe4da7e = _0x5df610[_0x5e7bc4(0xf9)](";\x20" + _0xd914a2 + "=");
  if (_0xe4da7e[_0x5e7bc4(0xba)] === 0x2)
    return decodeURIComponent(
      _0xe4da7e[_0x5e7bc4(0xa2)]()[_0x5e7bc4(0xf9)](";")["shift"]()
    );
  return null;
}
const historialDiv = document[_0x3d7cac(0x102)]("historial"),
  resultadoDiv = document[_0x3d7cac(0x102)](_0x3d7cac(0xbb));
let historial = [];
const historialCookie = getCookie(_0x3d7cac(0xfa));
if (historialCookie)
  try {
    historial = JSON[_0x3d7cac(0xf2)](historialCookie);
  } catch (_0x244c48) {
    historial = [];
  }
function renderClearButton() {
  const _0x13a1e3 = _0x3d7cac;
  return _0x13a1e3(0x9a);
}
function renderHistorial() {
  const _0x3091b6 = _0x3d7cac;
  (historialDiv[_0x3091b6(0x118)] =
    _0x3091b6(0xb1) +
    (historial[_0x3091b6(0xba)] > 0x0 ? renderClearButton() : "") +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    (historial[_0x3091b6(0xba)] === 0x0
      ? _0x3091b6(0xe5)
      : _0x3091b6(0x11b) +
        historial[_0x3091b6(0x8e)]((_0x10418d) => {
          const _0x5e1c08 = _0x3091b6,
            _0x3df8c8 =
              _0x10418d[_0x5e1c08(0xb3)] ||
              _0x10418d[_0x5e1c08(0xa6)] ||
              _0x5e1c08(0xc4),
            _0x666790 = _0x10418d[_0x5e1c08(0xca)]
              ? new Date(_0x10418d["FECHA_ESCANEO"])["toLocaleString"]()
              : "Fecha\x20desconocida";
          return (
            "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>" +
            _0x10418d[_0x5e1c08(0x11d)] +
            _0x5e1c08(0x82) +
            _0x10418d[_0x5e1c08(0x11d)] +
            "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x20ms-md-2\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20<strong\x20class=\x22ms-1\x22>" +
            _0x3df8c8 +
            _0x5e1c08(0x8d) +
            _0x3df8c8 +
            _0x5e1c08(0x122) +
            _0x10418d[_0x5e1c08(0xac)] +
            _0x5e1c08(0x9c) +
            _0x666790 +
            _0x5e1c08(0xdf)
          );
        })[_0x3091b6(0x10e)]("") +
        _0x3091b6(0xd6)) +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20"),
    setCookie(_0x3091b6(0xfa), JSON[_0x3091b6(0xf3)](historial), 0x1e);
  const _0x20ea55 = document["getElementById"]("limpiarHistorialBtn");
  _0x20ea55 &&
    _0x20ea55[_0x3091b6(0xe3)](_0x3091b6(0xfb), () => {
      const _0x5dbf28 = _0x3091b6;
      (historial = []),
        setCookie("historial", JSON[_0x5dbf28(0xf3)](historial), 0x1e),
        renderHistorial();
    });
  const _0x444ba3 = historialDiv[_0x3091b6(0xbc)](".copiar-btn");
  _0x444ba3[_0x3091b6(0xc3)]((_0x431e6e) => {
    const _0x37756e = _0x3091b6;
    _0x431e6e[_0x37756e(0xe3)](_0x37756e(0xfb), function (_0x5f17) {
      const _0xc748bb = _0x37756e,
        _0x5b65f9 = _0x431e6e[_0xc748bb(0xd4)](_0xc748bb(0x114));
      navigator[_0xc748bb(0xad)] &&
        navigator[_0xc748bb(0xad)]
          ["writeText"](_0x5b65f9)
          [_0xc748bb(0xce)](() => {
            const _0x18599e = _0xc748bb;
            (_0x431e6e[_0x18599e(0x118)] = _0x18599e(0x87)),
              setTimeout(() => {
                const _0xf3fd6 = _0x18599e;
                _0x431e6e[_0xf3fd6(0x118)] =
                  "<i\x20class=\x22bi\x20bi-clipboard\x22></i>";
              }, 0x4b0);
          });
    });
  });
}
inputCodigo[_0x3d7cac(0xe3)](_0x3d7cac(0x7f), function (_0x2d7d4b) {
  const _0xe9e7d9 = _0x3d7cac;
  _0x2d7d4b[_0xe9e7d9(0x8a)] === "Enter" &&
    (_0x2d7d4b[_0xe9e7d9(0xcd)](), form[_0xe9e7d9(0xc0)]());
}),
  form["addEventListener"](_0x3d7cac(0x107), async (_0x1cdd31) => {
    const _0x2dd788 = _0x3d7cac;
    _0x1cdd31[_0x2dd788(0xcd)]();
    let _0x5dcbfa = inputCodigo["value"]
      [_0x2dd788(0xfe)]()
      ["replace"](/\s+$/, "");
    (inputCodigo[_0x2dd788(0xe8)] = _0x5dcbfa),
      (resultadoDiv[_0x2dd788(0x118)] = "");
    if (!_0x5dcbfa) {
      (resultadoDiv[_0x2dd788(0x118)] = _0x2dd788(0xfd)),
        renderHistorial(),
        inputCodigo["focus"]();
      return;
    }
    (inputCodigo[_0x2dd788(0x88)] = ""),
      (resultadoDiv[_0x2dd788(0x118)] = _0x2dd788(0x84));
    try {
      const _0x11be9e = await fetch(_0x2dd788(0xb7), {
          method: _0x2dd788(0xa0),
          headers: {
            Accept: _0x2dd788(0xcb),
            "Content-Type": _0x2dd788(0xcc),
            "X-Requested-With": _0x2dd788(0xec),
          },
          body: "codigo=" + _0x5dcbfa,
        }),
        _0x16ee6e = await _0x11be9e[_0x2dd788(0x92)]();
      if (_0x16ee6e?.[_0x2dd788(0xf0)]?.["NOMBRE"]) {
        const _0x3a9491 = _0x16ee6e[_0x2dd788(0xf0)];
        (_0x3a9491[_0x2dd788(0xb3)] =
          _0x3a9491[_0x2dd788(0xb3)] || _0x3a9491["SKU"] || _0x5dcbfa),
          (_0x3a9491["FECHA_ESCANEO"] = new Date()[_0x2dd788(0xbf)]()),
          historial[_0x2dd788(0xc5)](_0x3a9491);
        let _0x5deaa7 = "";
        if (
          _0x3a9491["URL_IMG"] &&
          _0x3a9491[_0x2dd788(0xa9)]["trim"]() !== ""
        ) {
          if (_0x3a9491[_0x2dd788(0xa9)][_0x2dd788(0x115)](_0x2dd788(0xf4)))
            _0x5deaa7 = _0x3a9491[_0x2dd788(0xa9)];
          else {
            let _0x30ccc7 = _0x3a9491[_0x2dd788(0xa9)][_0x2dd788(0xaf)](
              /^\.\.\//,
              ""
            );
            _0x5deaa7 = _0x2dd788(0xa5) + _0x30ccc7[_0x2dd788(0xaf)](/^\//, "");
          }
        }
        (resultadoDiv["innerHTML"] =
          _0x2dd788(0xff) +
          (_0x5deaa7 ? _0x2dd788(0xe0) + _0x5deaa7 + _0x2dd788(0x10b) : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-8\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22\x20style=\x22font-size:2rem;\x20color:#616161;\x22>" +
          _0x3a9491[_0x2dd788(0x11d)] +
          _0x2dd788(0xf1) +
          _0x3a9491["PRECIO"] +
          _0x2dd788(0xb0) +
          _0x3a9491[_0x2dd788(0xb3)] +
          _0x2dd788(0x119)),
          (inputCodigo["value"] = ""),
          inputCodigo["focus"]();
      } else
        (resultadoDiv[_0x2dd788(0x118)] = _0x2dd788(0x85)),
          (inputCodigo[_0x2dd788(0xe8)] = ""),
          inputCodigo[_0x2dd788(0xb4)](),
          setTimeout(() => {
            const _0x267dd2 = _0x2dd788;
            resultadoDiv[_0x267dd2(0x118)] = "";
          }, 0x1388);
      renderHistorial();
    } catch (_0x4c7299) {
      (resultadoDiv[_0x2dd788(0x118)] = _0x2dd788(0x86)),
        inputCodigo[_0x2dd788(0xb4)](),
        renderHistorial();
    }
  });
function _0x2484() {
  const _0x1d57f1 = [
    "canvas",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>",
    "block",
    "528180nwDqgo",
    "createElement",
    "appendChild",
    "target",
    "error",
    "outcome",
    "decodeSingle",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-4\x20d-flex\x20justify-content-center\x20mb-3\x20mb-lg-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "setAttribute",
    "✅\x20Service\x20Worker\x20registrado:",
    "addEventListener",
    "154IpYGoI",
    "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>",
    "reload",
    "21730HIlXrU",
    "value",
    "2031462JlhQyT",
    "getImageData",
    "change",
    "XMLHttpRequest",
    "codigo",
    "clear",
    "prompt",
    "DATOS",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-danger\x22\x20style=\x22font-size:4rem;\x22>$\x20",
    "parse",
    "stringify",
    "http",
    "CODE_128",
    "fileInput",
    ";\x20path=/",
    "querySelector",
    "split",
    "historial",
    "click",
    "src",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>",
    "trim",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20align-items-center\x20justify-content-center\x20g-0\x20mb-4\x22\x20style=\x22padding:\x200px\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "reader",
    "472098HjrPHr",
    "getElementById",
    "putImageData",
    "\x0a\x20\x20#reader\x20{\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20width:\x20320px;\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20background:\x20#000;\x0a\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.15);\x0a\x20\x20}\x0a\x20\x20#reader\x20video\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20width:\x20320px\x20!important;\x0a\x20\x20\x20\x20height:\x20120px\x20!important;\x0a\x20\x20\x20\x20object-fit:\x20cover;\x0a\x20\x20}\x0a",
    "scrollIntoView",
    "muted",
    "submit",
    "beforeinstallprompt",
    "disconnect",
    "4623tvYKGs",
    "\x22\x20alt=\x22Imagen\x20del\x20producto\x22\x20class=\x22img-fluid\x20rounded\x20shadow\x22\x20style=\x22max-width:220px;\x20background:#f5f5f5;\x20padding:10px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "applyConstraints",
    "toUTCString",
    "join",
    "d-none",
    "classList",
    "❌\x20Instalación\x20rechazada",
    "load",
    "340CrfmKT",
    "data-copiar",
    "startsWith",
    "upc_e_reader",
    "7DXhxUo",
    "innerHTML",
    "</b></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "onload",
    "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "playsinline",
    "NOMBRE",
    "UPC_A",
    "data",
    "scope",
    "ayuda",
    "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x20ms-md-2\x22>Precio:\x20$",
    "drawImage",
    "width",
    "keydown",
    "log",
    "head",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20descripción\x22\x20data-copiar=\x22",
    ";\x20expires=",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontró\x20el\x20código\x20ingresado</div>",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Ocurrió\x20un\x20error\x20al\x20consultar\x20el\x20producto</div>",
    "<i\x20class=\x22bi\x20bi-clipboard-check\x22></i>",
    "placeholder",
    "observe",
    "key",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>",
    "smooth",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20SKU\x22\x20data-copiar=\x22",
    "map",
    "stop",
    "add",
    "accepted",
    "json",
    "catch",
    "readAsDataURL",
    "141948QyMoZv",
    "upc_reader",
    "getUserMedia",
    "❌\x20Error\x20al\x20registrar\x20SW:",
    "height",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "now",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x20ms-md-2\x22>Escaneado:\x20",
    "10fbZwXD",
    "remove",
    "468syRqgL",
    "POST",
    "✅\x20Instalación\x20aceptada",
    "pop",
    "getContext",
    "formulario",
    "https://dvncloud.com/",
    "SKU",
    "cookie",
    "controllerchange",
    "URL_IMG",
    "environment",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20detectó\x20código,\x20recorta\x20la\x20imagen\x20o\x20prueba\x20con\x20otra</div>",
    "PRECIO",
    "clipboard",
    "ean_reader",
    "replace",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-secondary\x22\x20style=\x22font-size:1rem;\x22>SKU:\x20<b>",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "result",
    "CODIGO",
    "focus",
    "srcObject",
    "toDataURL",
    "https://dvncloud.com/instancias/theback9golf/index.php?controller=theback9golf:consultar_precio&DVNUSERID=45&DVNSUCURSAL=1",
    "serviceWorker",
    "1712888DHIlxp",
    "length",
    "resultado",
    "querySelectorAll",
    "getTracks",
    "display",
    "toISOString",
    "requestSubmit",
    "location",
    "style",
    "forEach",
    "SKU\x20desconocido",
    "unshift",
    "start",
    "codeResult",
    "CODE_39",
    "video",
    "FECHA_ESCANEO",
    "application/json,\x20text/javascript,\x20*/*;\x20q=0.01",
    "application/x-www-form-urlencoded;\x20charset=UTF-8",
    "preventDefault",
    "then",
    "EAN_8",
    "update",
    "getRegistrations",
    "</div>",
    "installBtn",
    "getAttribute",
  ];
  _0x2484 = function () {
    return _0x1d57f1;
  };
  return _0x2484();
}
function iniciarScanner() {
  const _0x32b50e = _0x3d7cac;
  if (scannerActivo) return;
  navigator["mediaDevices"]
    [_0x32b50e(0x97)]({ video: !![] })
    ["then"]((_0x5a3b72) => {
      const _0x28c79a = _0x32b50e;
      _0x5a3b72[_0x28c79a(0xbd)]()[_0x28c79a(0xc3)]((_0x457f4e) =>
        _0x457f4e[_0x28c79a(0x8f)]()
      ),
        (scannerActivo = !![]),
        (readerDiv[_0x28c79a(0xc2)][_0x28c79a(0xbe)] = _0x28c79a(0xd7)),
        document[_0x28c79a(0x102)](_0x28c79a(0x100))[_0x28c79a(0x105)]({
          behavior: _0x28c79a(0x8c),
          block: "center",
        }),
        (ayudaTexto[_0x28c79a(0xc2)]["display"] = _0x28c79a(0xd7));
      const _0x13b83e = new Html5Qrcode(_0x28c79a(0x100)),
        _0x18b93f = {
          fps: 0xa,
          videoConstraints: {
            width: { min: 0x190, ideal: 0x780 },
            height: { min: 0x190, ideal: 0x438 },
            facingMode: _0x28c79a(0xaa),
            advanced: [{ zoom: 0x2 }],
          },
          qrbox: function (_0x1aef86, _0x52e82b) {
            const _0x4f7eaf = Math["min"](0x12c, _0x1aef86 * 0.9),
              _0x1e368a = 0x64;
            return { width: _0x4f7eaf, height: _0x1e368a };
          },
          rememberLastUsedCamera: !![],
          aspectRatio: 0x1,
          formatsToSupport: [
            Html5QrcodeSupportedFormats[_0x28c79a(0xf5)],
            Html5QrcodeSupportedFormats["EAN_13"],
            Html5QrcodeSupportedFormats[_0x28c79a(0xcf)],
            Html5QrcodeSupportedFormats[_0x28c79a(0x11e)],
            Html5QrcodeSupportedFormats["UPC_E"],
            Html5QrcodeSupportedFormats[_0x28c79a(0xc8)],
          ],
          experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
        };
      _0x13b83e[_0x28c79a(0xc6)](
        { facingMode: _0x28c79a(0xaa) },
        _0x18b93f,
        (_0x2ea973) => {
          const _0x1b1c78 = _0x28c79a;
          (inputCodigo["value"] = _0x2ea973[_0x1b1c78(0xfe)]()[_0x1b1c78(0xaf)](
            /\s+$/,
            ""
          )),
            _0x13b83e[_0x1b1c78(0x8f)]()["then"](() => {
              const _0x295e01 = _0x1b1c78;
              (readerDiv[_0x295e01(0xc2)][_0x295e01(0xbe)] = "none"),
                (ayudaTexto["style"][_0x295e01(0xbe)] = "none"),
                (scannerActivo = ![]),
                _0x13b83e[_0x295e01(0xee)](),
                form[_0x295e01(0xc0)]();
            });
        },
        (_0x255c54) => {}
      )
        [_0x28c79a(0xce)](() => {
          setTimeout(() => {
            const _0x123f26 = _0x2e33,
              _0xafe5a = readerDiv[_0x123f26(0xf8)](_0x123f26(0xc9));
            if (_0xafe5a) {
              const _0x33b1dc =
                _0xafe5a[_0x123f26(0xb5)]["getVideoTracks"]()[0x0];
              _0x33b1dc[_0x123f26(0x10c)]({
                focusMode: "continuous",
                advanced: [{ zoom: 0x2 }],
              })
                [_0x123f26(0xce)](() => {})
                ["catch"]((_0x4216fc) => {});
            }
          }, 0x7d0);
        })
        [_0x28c79a(0x93)]((_0x573e21) => {
          const _0x200d69 = _0x28c79a;
          (scannerActivo = ![]),
            (resultadoDiv["innerHTML"] =
              "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara:\x20" +
              _0x573e21 +
              _0x200d69(0xd2)),
            renderHistorial();
        });
      const _0x1997e6 = new MutationObserver(() => {
        const _0x19763c = _0x28c79a,
          _0x56fb7e = readerDiv[_0x19763c(0xf8)](_0x19763c(0xc9));
        _0x56fb7e &&
          (_0x56fb7e[_0x19763c(0xe1)](_0x19763c(0x11c), ""),
          _0x56fb7e[_0x19763c(0xe1)]("autoplay", ""),
          _0x56fb7e[_0x19763c(0xe1)](_0x19763c(0x106), ""),
          _0x1997e6[_0x19763c(0x109)]());
      });
      _0x1997e6[_0x28c79a(0x89)](readerDiv, { childList: !![], subtree: !![] });
    })
    ["catch"]((_0x5bee5c) => {
      (resultadoDiv["innerHTML"] =
        "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20autoriza\x20el\x20acceso\x20a\x20la\x20cámara</div>"),
        renderHistorial();
    });
}
const fileInput = document[_0x3d7cac(0x102)](_0x3d7cac(0xf6));
fileInput[_0x3d7cac(0xe3)](_0x3d7cac(0xeb), async (_0x4504f3) => {
  const _0x33fe70 = _0x3d7cac,
    _0x49c395 = _0x4504f3[_0x33fe70(0xdb)]["files"][0x0];
  if (!_0x49c395) return;
  resultadoDiv["innerHTML"] = _0x33fe70(0x8b);
  const _0x52e6a7 = new FileReader();
  (_0x52e6a7[_0x33fe70(0x11a)] = function (_0x2f91a7) {
    const _0xa7fac = _0x33fe70,
      _0x29f872 = new Image();
    (_0x29f872[_0xa7fac(0x11a)] = function () {
      const _0x4a736a = _0xa7fac,
        _0x256706 = document[_0x4a736a(0xd9)](_0x4a736a(0xd5)),
        _0x28a1e0 = _0x256706[_0x4a736a(0xa3)]("2d");
      (_0x256706[_0x4a736a(0x7e)] = _0x29f872[_0x4a736a(0x7e)]),
        (_0x256706[_0x4a736a(0x99)] = _0x29f872[_0x4a736a(0x99)]),
        _0x28a1e0[_0x4a736a(0x7d)](_0x29f872, 0x0, 0x0);
      const _0x2f8e1b = _0x28a1e0[_0x4a736a(0xea)](
          0x0,
          0x0,
          _0x256706[_0x4a736a(0x7e)],
          _0x256706[_0x4a736a(0x99)]
        ),
        _0x461b57 = _0x2f8e1b[_0x4a736a(0x11f)];
      for (
        let _0x54ebb2 = 0x0;
        _0x54ebb2 < _0x461b57[_0x4a736a(0xba)];
        _0x54ebb2 += 0x4
      ) {
        const _0x4533a9 =
            (_0x461b57[_0x54ebb2] +
              _0x461b57[_0x54ebb2 + 0x1] +
              _0x461b57[_0x54ebb2 + 0x2]) /
            0x3,
          _0x56aef1 = _0x4533a9 > 0x80 ? 0xff : 0x0;
        _0x461b57[_0x54ebb2] =
          _0x461b57[_0x54ebb2 + 0x1] =
          _0x461b57[_0x54ebb2 + 0x2] =
            _0x56aef1;
      }
      _0x28a1e0[_0x4a736a(0x103)](_0x2f8e1b, 0x0, 0x0);
      const _0x20f522 = _0x256706[_0x4a736a(0xb6)]();
      Quagga[_0x4a736a(0xde)](
        {
          src: _0x20f522,
          numOfWorkers: 0x0,
          locate: !![],
          inputStream: { size: 0x320 },
          decoder: {
            readers: [
              _0x4a736a(0xae),
              "ean_8_reader",
              "code_128_reader",
              _0x4a736a(0x96),
              _0x4a736a(0x116),
              "code_39_reader",
            ],
          },
        },
        function (_0x10c289) {
          const _0x48eac7 = _0x4a736a;
          _0x10c289 && _0x10c289[_0x48eac7(0xc7)]
            ? ((inputCodigo[_0x48eac7(0xe8)] = _0x10c289["codeResult"]["code"]
                ["trim"]()
                [_0x48eac7(0xaf)](/\s+$/, "")),
              form[_0x48eac7(0xc0)]())
            : ((resultadoDiv[_0x48eac7(0x118)] = _0x48eac7(0xab)),
              renderHistorial()),
            (fileInput[_0x48eac7(0xe8)] = "");
        }
      );
    }),
      (_0x29f872[_0xa7fac(0xfc)] = _0x2f91a7[_0xa7fac(0xdb)][_0xa7fac(0xb2)]);
  }),
    _0x52e6a7[_0x33fe70(0x94)](_0x49c395);
});
_0x3d7cac(0xb8) in navigator &&
  window[_0x3d7cac(0xe3)](_0x3d7cac(0x112), () => {
    const _0x3b85f5 = _0x3d7cac;
    navigator[_0x3b85f5(0xb8)]
      ["register"]("service-worker.js")
      [_0x3b85f5(0xce)]((_0x978cae) =>
        console[_0x3b85f5(0x80)](_0x3b85f5(0xe2), _0x978cae[_0x3b85f5(0x120)])
      )
      [_0x3b85f5(0x93)]((_0x1e5977) =>
        console[_0x3b85f5(0xdc)](_0x3b85f5(0x98), _0x1e5977)
      );
  });
window[_0x3d7cac(0xe3)](_0x3d7cac(0x108), (_0x354a48) => {
  const _0x445bb1 = _0x3d7cac;
  _0x354a48[_0x445bb1(0xcd)](),
    (deferredPrompt = _0x354a48),
    installBtn && installBtn[_0x445bb1(0x110)][_0x445bb1(0x9e)]("d-none");
}),
  installBtn[_0x3d7cac(0xe3)](_0x3d7cac(0xfb), (_0x545b6c) => {
    const _0x1cd510 = _0x3d7cac;
    deferredPrompt &&
      (deferredPrompt[_0x1cd510(0xef)](),
      deferredPrompt["userChoice"][_0x1cd510(0xce)]((_0x21911d) => {
        const _0x97c484 = _0x1cd510;
        _0x21911d[_0x97c484(0xdd)] === _0x97c484(0x91)
          ? console[_0x97c484(0x80)](_0x97c484(0xa1))
          : console[_0x97c484(0x80)](_0x97c484(0x111)),
          (deferredPrompt = null),
          installBtn["classList"][_0x97c484(0x90)](_0x97c484(0x10f));
      }));
  });
"serviceWorker" in navigator &&
  (navigator[_0x3d7cac(0xb8)]
    [_0x3d7cac(0xd1)]()
    [_0x3d7cac(0xce)](function (_0x7f3432) {
      const _0x52d151 = _0x3d7cac;
      for (let _0x53945d of _0x7f3432) {
        _0x53945d[_0x52d151(0xd0)]();
      }
    }),
  navigator["serviceWorker"][_0x3d7cac(0xe3)](_0x3d7cac(0xa8), function () {
    const _0x3efd4d = _0x3d7cac;
    window[_0x3efd4d(0xc1)][_0x3efd4d(0xe6)]();
  }));
function _0x2e33(_0x1e6d1c, _0x4156b6) {
  const _0x2484a7 = _0x2484();
  return (
    (_0x2e33 = function (_0x2e3338, _0x471b51) {
      _0x2e3338 = _0x2e3338 - 0x7d;
      let _0x399965 = _0x2484a7[_0x2e3338];
      return _0x399965;
    }),
    _0x2e33(_0x1e6d1c, _0x4156b6)
  );
}
const style = document[_0x3d7cac(0xd9)](_0x3d7cac(0xc2));
(style[_0x3d7cac(0x118)] = _0x3d7cac(0x104)),
  document[_0x3d7cac(0x81)][_0x3d7cac(0xda)](style),
  renderHistorial();
