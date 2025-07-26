const _0xf918a2 = _0x1dcd;
(function (_0x43d518, _0x36596c) {
  const _0x4dec7e = _0x1dcd,
    _0x2ea92b = _0x43d518();
  while (!![]) {
    try {
      const _0x474250 =
        (parseInt(_0x4dec7e(0xbc)) / 0x1) * (-parseInt(_0x4dec7e(0xdc)) / 0x2) +
        -parseInt(_0x4dec7e(0xc9)) / 0x3 +
        -parseInt(_0x4dec7e(0x10f)) / 0x4 +
        parseInt(_0x4dec7e(0x96)) / 0x5 +
        (-parseInt(_0x4dec7e(0x9a)) / 0x6) *
          (parseInt(_0x4dec7e(0x125)) / 0x7) +
        (-parseInt(_0x4dec7e(0xf3)) / 0x8) *
          (-parseInt(_0x4dec7e(0x101)) / 0x9) +
        (parseInt(_0x4dec7e(0xe1)) / 0xa) * (parseInt(_0x4dec7e(0x11c)) / 0xb);
      if (_0x474250 === _0x36596c) break;
      else _0x2ea92b["push"](_0x2ea92b["shift"]());
    } catch (_0x2ce49f) {
      _0x2ea92b["push"](_0x2ea92b["shift"]());
    }
  }
})(_0x43a0, 0x502bb);
const form = document[_0xf918a2(0xd7)]("formulario"),
  inputCodigo = document[_0xf918a2(0xd7)](_0xf918a2(0xff)),
  readerDiv = document[_0xf918a2(0xd7)](_0xf918a2(0xa5)),
  ayudaTexto = document[_0xf918a2(0xd7)](_0xf918a2(0xc1)),
  installBtn = document[_0xf918a2(0xd7)]("installBtn");
let scannerActivo = ![],
  deferredPrompt;
function setCookie(_0x2d9650, _0x13f3ab, _0x4d6b36) {
  const _0xbb160f = _0xf918a2,
    _0x459950 = new Date(
      Date[_0xbb160f(0x109)]() + _0x4d6b36 * 0x18 * 0x3c * 0x3c * 0x3e8
    )["toUTCString"]();
  document[_0xbb160f(0x119)] =
    _0x2d9650 +
    "=" +
    encodeURIComponent(_0x13f3ab) +
    _0xbb160f(0x124) +
    _0x459950 +
    _0xbb160f(0xc6);
}
function getCookie(_0xa324e8) {
  const _0x2f8708 = _0xf918a2,
    _0x1706c6 = ";\x20" + document[_0x2f8708(0x119)],
    _0x54d84a = _0x1706c6[_0x2f8708(0xe4)](";\x20" + _0xa324e8 + "=");
  if (_0x54d84a["length"] === 0x2)
    return decodeURIComponent(
      _0x54d84a[_0x2f8708(0x10b)]()[_0x2f8708(0xe4)](";")["shift"]()
    );
  return null;
}
const historialDiv = document[_0xf918a2(0xd7)](_0xf918a2(0xa3)),
  resultadoDiv = document[_0xf918a2(0xd7)](_0xf918a2(0xf7));
let historial = [];
const historialCookie = getCookie(_0xf918a2(0xa3));
if (historialCookie)
  try {
    historial = JSON[_0xf918a2(0xcf)](historialCookie);
  } catch (_0x3beb14) {
    historial = [];
  }
function renderClearButton() {
  const _0x57303b = _0xf918a2;
  return _0x57303b(0xac);
}
function _0x1dcd(_0x195027, _0x5aef2a) {
  const _0x43a0b4 = _0x43a0();
  return (
    (_0x1dcd = function (_0x1dcdde, _0x9543fb) {
      _0x1dcdde = _0x1dcdde - 0x95;
      let _0x1037b6 = _0x43a0b4[_0x1dcdde];
      return _0x1037b6;
    }),
    _0x1dcd(_0x195027, _0x5aef2a)
  );
}
function renderHistorial() {
  const _0x126a31 = _0xf918a2;
  (historialDiv[_0x126a31(0xf0)] =
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    (historial[_0x126a31(0x113)] > 0x0 ? renderClearButton() : "") +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    (historial["length"] === 0x0
      ? _0x126a31(0x11e)
      : "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        historial[_0x126a31(0xa1)]((_0x122f36) => {
          const _0x5004b8 = _0x126a31,
            _0x58c79a =
              _0x122f36["CODIGO"] ||
              _0x122f36[_0x5004b8(0xb2)] ||
              _0x5004b8(0xb1),
            _0x37de96 = _0x122f36[_0x5004b8(0xca)]
              ? new Date(_0x122f36[_0x5004b8(0xca)])[_0x5004b8(0xa4)]()
              : _0x5004b8(0xe7);
          return (
            _0x5004b8(0x11a) +
            _0x122f36[_0x5004b8(0xf1)] +
            _0x5004b8(0x126) +
            _0x58c79a +
            _0x5004b8(0x127) +
            _0x122f36["PRECIO"] +
            _0x5004b8(0x98) +
            _0x37de96 +
            _0x5004b8(0x122)
          );
        })[_0x126a31(0xe9)]("") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>") +
    _0x126a31(0x10d)),
    setCookie(_0x126a31(0xa3), JSON[_0x126a31(0x108)](historial), 0x1e);
  const _0x18c2e4 = document[_0x126a31(0xd7)](_0x126a31(0x95));
  _0x18c2e4 &&
    _0x18c2e4[_0x126a31(0x97)](_0x126a31(0x107), () => {
      const _0x2da0b4 = _0x126a31;
      (historial = []),
        setCookie(_0x2da0b4(0xa3), JSON[_0x2da0b4(0x108)](historial), 0x1e),
        renderHistorial();
    });
}
inputCodigo[_0xf918a2(0xa6)](_0xf918a2(0xb4), _0xf918a2(0xe8)),
  inputCodigo[_0xf918a2(0x97)](_0xf918a2(0xcd), function () {
    const _0x4dd0fd = _0xf918a2;
    inputCodigo[_0x4dd0fd(0xc4)](_0x4dd0fd(0xb4));
  }),
  inputCodigo[_0xf918a2(0x97)](_0xf918a2(0xfe), function () {
    const _0x115553 = _0xf918a2;
    inputCodigo[_0x115553(0xa6)]("readonly", "true");
  }),
  inputCodigo[_0xf918a2(0x97)](_0xf918a2(0xc2), function (_0x1186a1) {
    const _0x346d5a = _0xf918a2;
    _0x1186a1[_0x346d5a(0xbf)] === "Enter" &&
      (_0x1186a1[_0x346d5a(0xaa)](), form[_0x346d5a(0xe2)]());
  }),
  form[_0xf918a2(0x97)](_0xf918a2(0x100), async (_0x4f7a0e) => {
    const _0x3e669f = _0xf918a2;
    _0x4f7a0e[_0x3e669f(0xaa)]();
    let _0x3a15cf = inputCodigo[_0x3e669f(0xf6)]
      [_0x3e669f(0x9e)]()
      [_0x3e669f(0x115)](/\s+$/, "");
    (inputCodigo["value"] = _0x3a15cf), (resultadoDiv[_0x3e669f(0xf0)] = "");
    if (!_0x3a15cf) {
      (resultadoDiv[_0x3e669f(0xf0)] = _0x3e669f(0xa2)),
        renderHistorial(),
        inputCodigo[_0x3e669f(0xcd)]();
      return;
    }
    (inputCodigo[_0x3e669f(0xd6)] = ""),
      (resultadoDiv["innerHTML"] = _0x3e669f(0xf2));
    try {
      const _0x57a404 = await fetch(
          "https://dvncloud.com/instancias/theback9golf/index.php?controller=theback9golf:consultar_precio&DVNUSERID=45&DVNSUCURSAL=1",
          {
            method: _0x3e669f(0xd2),
            headers: {
              Accept: "application/json,\x20text/javascript,\x20*/*;\x20q=0.01",
              "Content-Type": _0x3e669f(0xe6),
              "X-Requested-With": _0x3e669f(0xec),
            },
            body: _0x3e669f(0xe0) + _0x3a15cf,
          }
        ),
        _0x241c88 = await _0x57a404[_0x3e669f(0xa0)]();
      if (_0x241c88?.["DATOS"]?.[_0x3e669f(0xf1)]) {
        const _0x181b4a = _0x241c88[_0x3e669f(0xd9)];
        (_0x181b4a[_0x3e669f(0x105)] =
          _0x181b4a["CODIGO"] || _0x181b4a[_0x3e669f(0xb2)] || _0x3a15cf),
          (_0x181b4a[_0x3e669f(0xca)] = new Date()[_0x3e669f(0xda)]()),
          historial[_0x3e669f(0x120)](_0x181b4a);
        let _0x15c868 = "";
        if (
          _0x181b4a["URL_IMG"] &&
          _0x181b4a[_0x3e669f(0xb7)][_0x3e669f(0x9e)]() !== ""
        ) {
          if (_0x181b4a["URL_IMG"]["startsWith"](_0x3e669f(0xd8)))
            _0x15c868 = _0x181b4a["URL_IMG"];
          else {
            let _0x3a1b64 = _0x181b4a["URL_IMG"][_0x3e669f(0x115)](
              /^\.\.\//,
              ""
            );
            _0x15c868 =
              "https://dvncloud.com/" + _0x3a1b64[_0x3e669f(0x115)](/^\//, "");
          }
        }
        (resultadoDiv[_0x3e669f(0xf0)] =
          _0x3e669f(0x123) +
          _0x181b4a[_0x3e669f(0xf1)] +
          "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-secondary\x22>SKU:\x20<strong>" +
          _0x181b4a[_0x3e669f(0x105)] +
          _0x3e669f(0xb8) +
          _0x181b4a[_0x3e669f(0x116)] +
          "</span><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x22>Escaneado:\x20" +
          new Date(_0x181b4a[_0x3e669f(0xca)])["toLocaleString"]() +
          _0x3e669f(0x10e) +
          (_0x15c868
            ? _0x3e669f(0xfb) +
              _0x15c868 +
              "\x22\x20alt=\x22Imagen\x20del\x20producto\x22\x20style=\x22width:180px;\x20height:180px;\x20object-fit:contain;\x20border-radius:10px;\x20box-shadow:0\x202px\x208px\x20rgba(0,0,0,0.1);\x20margin-top:10px;\x22></div>"
            : "") +
          _0x3e669f(0xfc)),
          (inputCodigo["value"] = ""),
          inputCodigo[_0x3e669f(0xcd)]();
      } else
        (resultadoDiv[_0x3e669f(0xf0)] =
          "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontró\x20el\x20código\x20ingresado</div>"),
          (inputCodigo[_0x3e669f(0xf6)] = ""),
          inputCodigo[_0x3e669f(0xcd)](),
          setTimeout(() => {
            const _0x5c8654 = _0x3e669f;
            resultadoDiv[_0x5c8654(0xf0)] = "";
          }, 0x1388);
      renderHistorial();
    } catch (_0xefa152) {
      (resultadoDiv[_0x3e669f(0xf0)] = _0x3e669f(0xa7)),
        inputCodigo["focus"](),
        renderHistorial();
    }
  });
function iniciarScanner() {
  const _0x56bb4d = _0xf918a2;
  if (scannerActivo) return;
  navigator["mediaDevices"]
    [_0x56bb4d(0xc7)]({ video: !![] })
    [_0x56bb4d(0xc3)]((_0x36bc15) => {
      const _0xda4afd = _0x56bb4d;
      _0x36bc15[_0xda4afd(0xb9)]()[_0xda4afd(0x10a)]((_0xaee05c) =>
        _0xaee05c[_0xda4afd(0xd1)]()
      ),
        (scannerActivo = !![]),
        (readerDiv[_0xda4afd(0xd5)][_0xda4afd(0x104)] = _0xda4afd(0xd4)),
        document[_0xda4afd(0xd7)](_0xda4afd(0xa5))[_0xda4afd(0xd0)]({
          behavior: "smooth",
          block: _0xda4afd(0xee),
        }),
        (ayudaTexto[_0xda4afd(0xd5)]["display"] = "block");
      const _0x53ef62 = new Html5Qrcode(_0xda4afd(0xa5)),
        _0x70d095 = {
          fps: 0xa,
          videoConstraints: {
            width: { min: 0x190, ideal: 0x780 },
            height: { min: 0x190, ideal: 0x438 },
            facingMode: "environment",
            advanced: [{ zoom: 0x2 }],
          },
          qrbox: function (_0xa2d263, _0x22137a) {
            const _0x2dc852 = _0xda4afd,
              _0x383314 = Math[_0x2dc852(0xbb)](0x12c, _0xa2d263 * 0.9),
              _0x393937 = 0x64;
            return { width: _0x383314, height: _0x393937 };
          },
          rememberLastUsedCamera: !![],
          aspectRatio: 0x1,
          formatsToSupport: [
            Html5QrcodeSupportedFormats["CODE_128"],
            Html5QrcodeSupportedFormats[_0xda4afd(0x118)],
            Html5QrcodeSupportedFormats[_0xda4afd(0x121)],
            Html5QrcodeSupportedFormats["UPC_A"],
            Html5QrcodeSupportedFormats[_0xda4afd(0x106)],
            Html5QrcodeSupportedFormats[_0xda4afd(0xde)],
          ],
          experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
        };
      function _0x3fbfc7() {
        const _0x508bb1 = _0xda4afd;
        _0x53ef62[_0x508bb1(0x11b)](
          { facingMode: _0x508bb1(0xfa) },
          _0x70d095,
          (_0x30583d) => {
            const _0x10f5db = _0x508bb1;
            (inputCodigo[_0x10f5db(0xf6)] = _0x30583d[_0x10f5db(0x9e)]()[
              _0x10f5db(0x115)
            ](/\s+$/, "")),
              form["requestSubmit"]();
          },
          (_0x174bb9) => {}
        )
          [_0x508bb1(0xc3)](() => {
            setTimeout(() => {
              const _0x54b332 = _0x1dcd,
                _0x1a5872 = readerDiv[_0x54b332(0xa8)](_0x54b332(0xe5));
              if (_0x1a5872) {
                const _0x4ac371 =
                  _0x1a5872[_0x54b332(0x11d)]["getVideoTracks"]()[0x0];
                _0x4ac371[_0x54b332(0x10c)]({
                  focusMode: _0x54b332(0xa9),
                  advanced: [{ zoom: 0x2 }],
                })
                  [_0x54b332(0xc3)](() => {})
                  [_0x54b332(0xc8)]((_0x4d5e7e) => {});
              }
            }, 0x7d0);
          })
          [_0x508bb1(0xc8)]((_0x12df7b) => {
            const _0x53fdaf = _0x508bb1;
            (scannerActivo = ![]),
              (resultadoDiv[_0x53fdaf(0xf0)] =
                "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara:\x20" +
                _0x12df7b +
                "</div>"),
              renderHistorial();
          });
      }
      _0x3fbfc7();
      const _0x1d4cb4 = new MutationObserver(() => {
        const _0x1cdd5f = _0xda4afd,
          _0x5c4270 = readerDiv["querySelector"](_0x1cdd5f(0xe5));
        _0x5c4270 &&
          (_0x5c4270["setAttribute"](_0x1cdd5f(0x9d), ""),
          _0x5c4270[_0x1cdd5f(0xa6)](_0x1cdd5f(0xf5), ""),
          _0x5c4270["setAttribute"]("muted", ""),
          _0x1d4cb4["disconnect"]());
      });
      _0x1d4cb4[_0xda4afd(0xba)](readerDiv, { childList: !![], subtree: !![] });
    })
    [_0x56bb4d(0xc8)]((_0x5382c7) => {
      const _0x119c4a = _0x56bb4d;
      (resultadoDiv[_0x119c4a(0xf0)] = _0x119c4a(0xbd)), renderHistorial();
    });
}
const fileInput = document[_0xf918a2(0xd7)](_0xf918a2(0xce));
function _0x43a0() {
  const _0x5e39fc = [
    "display",
    "CODIGO",
    "UPC_E",
    "click",
    "stringify",
    "now",
    "forEach",
    "pop",
    "applyConstraints",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "</span><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "2340620VkDVZz",
    "decodeSingle",
    "height",
    "classList",
    "length",
    "scope",
    "replace",
    "PRECIO",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>",
    "EAN_13",
    "cookie",
    "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span><strong>",
    "start",
    "12176791MJtzns",
    "srcObject",
    "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>",
    "userChoice",
    "unshift",
    "EAN_8",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Producto\x20encontrado:</strong>\x20",
    ";\x20expires=",
    "21eBaMDA",
    "</strong></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x20ms-md-2\x22>SKU:\x20<strong>",
    "</strong></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x20ms-md-2\x22>Precio:\x20$",
    "drawImage",
    "limpiarHistorialBtn",
    "3027245FIsHPA",
    "addEventListener",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x20ms-md-2\x22>Escaneado:\x20",
    "outcome",
    "1242522DvLUug",
    "prompt",
    "d-none",
    "playsinline",
    "trim",
    "onload",
    "json",
    "map",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>",
    "historial",
    "toLocaleString",
    "reader",
    "setAttribute",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Ocurrió\x20un\x20error\x20al\x20consultar\x20el\x20producto</div>",
    "querySelector",
    "continuous",
    "preventDefault",
    "readAsDataURL",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "src",
    "getImageData",
    "load",
    "beforeinstallprompt",
    "SKU\x20desconocido",
    "SKU",
    "✅\x20Service\x20Worker\x20registrado:",
    "readonly",
    "target",
    "ean_8_reader",
    "URL_IMG",
    "</strong></span><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-bold\x22>Precio:\x20$",
    "getTracks",
    "observe",
    "min",
    "218935kRkpNc",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20autoriza\x20el\x20acceso\x20a\x20la\x20cámara</div>",
    "getRegistrations",
    "key",
    "✅\x20Instalación\x20aceptada",
    "ayuda",
    "keydown",
    "then",
    "removeAttribute",
    "log",
    ";\x20path=/",
    "getUserMedia",
    "catch",
    "1717188JGLpah",
    "FECHA_ESCANEO",
    "location",
    "code",
    "focus",
    "fileInput",
    "parse",
    "scrollIntoView",
    "stop",
    "POST",
    "❌\x20Error\x20al\x20registrar\x20SW:",
    "block",
    "style",
    "placeholder",
    "getElementById",
    "http",
    "DATOS",
    "toISOString",
    "codeResult",
    "2YRnxSl",
    "upc_e_reader",
    "CODE_39",
    "result",
    "codigo=",
    "10lpyITt",
    "requestSubmit",
    "change",
    "split",
    "video",
    "application/x-www-form-urlencoded;\x20charset=UTF-8",
    "Fecha\x20desconocida",
    "true",
    "join",
    "createElement",
    "width",
    "XMLHttpRequest",
    "code_128_reader",
    "center",
    "serviceWorker",
    "innerHTML",
    "NOMBRE",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>",
    "256QzLxSx",
    "ean_reader",
    "autoplay",
    "value",
    "resultado",
    "remove",
    "files",
    "environment",
    "<div\x20style=\x22display:flex;\x20justify-content:center;\x20align-items:center;\x20width:100%;\x22><img\x20src=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "reload",
    "blur",
    "codigo",
    "submit",
    "172602AwQLLD",
    "code_39_reader",
    "error",
  ];
  _0x43a0 = function () {
    return _0x5e39fc;
  };
  return _0x43a0();
}
fileInput["addEventListener"](_0xf918a2(0xe3), async (_0x1a3213) => {
  const _0x2257fd = _0xf918a2,
    _0x1f3ede = _0x1a3213[_0x2257fd(0xb5)][_0x2257fd(0xf9)][0x0];
  if (!_0x1f3ede) return;
  resultadoDiv["innerHTML"] = _0x2257fd(0x117);
  const _0x59d445 = new FileReader();
  (_0x59d445[_0x2257fd(0x9f)] = function (_0x5d89ac) {
    const _0x4f2e55 = _0x2257fd,
      _0x25e3ce = new Image();
    (_0x25e3ce["onload"] = function () {
      const _0x2aae90 = _0x1dcd,
        _0x3755d0 = document[_0x2aae90(0xea)]("canvas"),
        _0x39bb8e = _0x3755d0["getContext"]("2d");
      (_0x3755d0[_0x2aae90(0xeb)] = _0x25e3ce[_0x2aae90(0xeb)]),
        (_0x3755d0[_0x2aae90(0x111)] = _0x25e3ce[_0x2aae90(0x111)]),
        _0x39bb8e[_0x2aae90(0x128)](_0x25e3ce, 0x0, 0x0);
      const _0x23cc86 = _0x39bb8e[_0x2aae90(0xae)](
          0x0,
          0x0,
          _0x3755d0[_0x2aae90(0xeb)],
          _0x3755d0[_0x2aae90(0x111)]
        ),
        _0x1047af = _0x23cc86["data"];
      for (
        let _0x4479f3 = 0x0;
        _0x4479f3 < _0x1047af[_0x2aae90(0x113)];
        _0x4479f3 += 0x4
      ) {
        const _0x449f19 =
            (_0x1047af[_0x4479f3] +
              _0x1047af[_0x4479f3 + 0x1] +
              _0x1047af[_0x4479f3 + 0x2]) /
            0x3,
          _0x3d20a2 = _0x449f19 > 0x80 ? 0xff : 0x0;
        _0x1047af[_0x4479f3] =
          _0x1047af[_0x4479f3 + 0x1] =
          _0x1047af[_0x4479f3 + 0x2] =
            _0x3d20a2;
      }
      _0x39bb8e["putImageData"](_0x23cc86, 0x0, 0x0);
      const _0x3f3add = _0x3755d0["toDataURL"]();
      Quagga[_0x2aae90(0x110)](
        {
          src: _0x3f3add,
          numOfWorkers: 0x0,
          locate: !![],
          inputStream: { size: 0x320 },
          decoder: {
            readers: [
              _0x2aae90(0xf4),
              _0x2aae90(0xb6),
              _0x2aae90(0xed),
              "upc_reader",
              _0x2aae90(0xdd),
              _0x2aae90(0x102),
            ],
          },
        },
        function (_0x18061d) {
          const _0x54484d = _0x2aae90;
          _0x18061d && _0x18061d[_0x54484d(0xdb)]
            ? ((inputCodigo["value"] = _0x18061d["codeResult"][_0x54484d(0xcc)]
                ["trim"]()
                [_0x54484d(0x115)](/\s+$/, "")),
              form[_0x54484d(0xe2)]())
            : ((resultadoDiv[_0x54484d(0xf0)] =
                "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20detectó\x20código,\x20recorta\x20la\x20imagen\x20o\x20prueba\x20con\x20otra</div>"),
              renderHistorial()),
            (fileInput[_0x54484d(0xf6)] = "");
        }
      );
    }),
      (_0x25e3ce[_0x4f2e55(0xad)] =
        _0x5d89ac[_0x4f2e55(0xb5)][_0x4f2e55(0xdf)]);
  }),
    _0x59d445[_0x2257fd(0xab)](_0x1f3ede);
});
_0xf918a2(0xef) in navigator &&
  window[_0xf918a2(0x97)](_0xf918a2(0xaf), () => {
    const _0x35b74f = _0xf918a2;
    navigator[_0x35b74f(0xef)]
      ["register"]("service-worker.js")
      [_0x35b74f(0xc3)]((_0x3729b6) =>
        console[_0x35b74f(0xc5)](_0x35b74f(0xb3), _0x3729b6[_0x35b74f(0x114)])
      )
      [_0x35b74f(0xc8)]((_0x574395) =>
        console[_0x35b74f(0x103)](_0x35b74f(0xd3), _0x574395)
      );
  });
window[_0xf918a2(0x97)](_0xf918a2(0xb0), (_0x5cbfba) => {
  const _0x24dcae = _0xf918a2;
  _0x5cbfba[_0x24dcae(0xaa)](),
    (deferredPrompt = _0x5cbfba),
    installBtn && installBtn["classList"][_0x24dcae(0xf8)](_0x24dcae(0x9c));
}),
  installBtn[_0xf918a2(0x97)](_0xf918a2(0x107), (_0x4015d9) => {
    const _0x55a472 = _0xf918a2;
    deferredPrompt &&
      (deferredPrompt[_0x55a472(0x9b)](),
      deferredPrompt[_0x55a472(0x11f)]["then"]((_0x3ad79f) => {
        const _0x202e4f = _0x55a472;
        _0x3ad79f[_0x202e4f(0x99)] === "accepted"
          ? console[_0x202e4f(0xc5)](_0x202e4f(0xc0))
          : console[_0x202e4f(0xc5)]("❌\x20Instalación\x20rechazada"),
          (deferredPrompt = null),
          installBtn[_0x202e4f(0x112)]["add"](_0x202e4f(0x9c));
      }));
  });
_0xf918a2(0xef) in navigator &&
  (navigator["serviceWorker"][_0xf918a2(0xbe)]()["then"](function (_0x25c847) {
    for (let _0x5199b9 of _0x25c847) {
      _0x5199b9["update"]();
    }
  }),
  navigator[_0xf918a2(0xef)]["addEventListener"](
    "controllerchange",
    function () {
      const _0x3cd8bb = _0xf918a2;
      window[_0x3cd8bb(0xcb)][_0x3cd8bb(0xfd)]();
    }
  ));
renderHistorial();
