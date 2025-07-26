const _0x154cd4 = _0x3e2f;
(function (_0x498c01, _0x50d428) {
  const _0x4a14f1 = _0x3e2f,
    _0x331b55 = _0x498c01();
  while (!![]) {
    try {
      const _0x2e7b4a =
        parseInt(_0x4a14f1(0x181)) / 0x1 +
        parseInt(_0x4a14f1(0x178)) / 0x2 +
        -parseInt(_0x4a14f1(0xfd)) / 0x3 +
        (parseInt(_0x4a14f1(0x179)) / 0x4) *
          (parseInt(_0x4a14f1(0x102)) / 0x5) +
        parseInt(_0x4a14f1(0x156)) / 0x6 +
        parseInt(_0x4a14f1(0x168)) / 0x7 +
        (parseInt(_0x4a14f1(0x108)) / 0x8) *
          (-parseInt(_0x4a14f1(0x14f)) / 0x9);
      if (_0x2e7b4a === _0x50d428) break;
      else _0x331b55["push"](_0x331b55["shift"]());
    } catch (_0x11394b) {
      _0x331b55["push"](_0x331b55["shift"]());
    }
  }
})(_0x22d9, 0xd27ba);
const form = document[_0x154cd4(0x144)](_0x154cd4(0x162)),
  inputCodigo = document[_0x154cd4(0x144)](_0x154cd4(0x190)),
  readerDiv = document["getElementById"]("reader"),
  ayudaTexto = document[_0x154cd4(0x144)](_0x154cd4(0x160)),
  installBtn = document[_0x154cd4(0x144)](_0x154cd4(0x165));
let scannerActivo = ![],
  deferredPrompt,
  puedeEscanear = !![];
function setCookie(_0x119d16, _0x4287d6, _0x144ac2) {
  const _0x2f2351 = _0x154cd4,
    _0x1cc376 = new Date(
      Date["now"]() + _0x144ac2 * 0x18 * 0x3c * 0x3c * 0x3e8
    )[_0x2f2351(0x142)]();
  document[_0x2f2351(0x117)] =
    _0x119d16 +
    "=" +
    encodeURIComponent(_0x4287d6) +
    _0x2f2351(0x173) +
    _0x1cc376 +
    ";\x20path=/";
}
function getCookie(_0x164eeb) {
  const _0x16574b = _0x154cd4,
    _0x33459f = ";\x20" + document[_0x16574b(0x117)],
    _0xad1e39 = _0x33459f[_0x16574b(0x159)](";\x20" + _0x164eeb + "=");
  if (_0xad1e39["length"] === 0x2)
    return decodeURIComponent(
      _0xad1e39[_0x16574b(0x131)]()[_0x16574b(0x159)](";")[_0x16574b(0x155)]()
    );
  return null;
}
const historialDiv = document[_0x154cd4(0x144)](_0x154cd4(0x137)),
  resultadoDiv = document[_0x154cd4(0x144)](_0x154cd4(0x107));
let historial = [];
const historialCookie = getCookie(_0x154cd4(0x137));
if (historialCookie)
  try {
    historial = JSON[_0x154cd4(0x10b)](historialCookie);
  } catch (_0x47a0ad) {
    historial = [];
  }
function renderClearButton() {
  const _0x5be334 = _0x154cd4;
  return _0x5be334(0x12d);
}
function renderHistorial() {
  const _0x2bb152 = _0x154cd4;
  (historialDiv[_0x2bb152(0x15e)] =
    _0x2bb152(0x177) +
    (historial[_0x2bb152(0x10c)] > 0x0 ? renderClearButton() : "") +
    _0x2bb152(0x167) +
    (historial["length"] === 0x0
      ? _0x2bb152(0x172)
      : _0x2bb152(0x121) +
        historial[_0x2bb152(0x124)]((_0x37bb6f) => {
          const _0x3cd6a9 = _0x2bb152,
            _0x2ebdbe =
              _0x37bb6f[_0x3cd6a9(0x17f)] ||
              _0x37bb6f["SKU"] ||
              _0x3cd6a9(0x151),
            _0x62712b = _0x37bb6f[_0x3cd6a9(0x12e)]
              ? new Date(_0x37bb6f[_0x3cd6a9(0x12e)])[_0x3cd6a9(0x191)]()
              : _0x3cd6a9(0x104);
          return (
            "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span><strong>" +
            _0x37bb6f["NOMBRE"] +
            _0x3cd6a9(0x14d) +
            _0x2ebdbe +
            "</strong></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x20ms-md-2\x22>Precio:\x20$" +
            _0x37bb6f[_0x3cd6a9(0x189)] +
            _0x3cd6a9(0x154) +
            _0x62712b +
            _0x3cd6a9(0x13e)
          );
        })[_0x2bb152(0x17a)]("") +
        _0x2bb152(0x134)) +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20"),
    setCookie(_0x2bb152(0x137), JSON[_0x2bb152(0x15d)](historial), 0x1e);
  const _0x24134 = document[_0x2bb152(0x144)](_0x2bb152(0xf7));
  _0x24134 &&
    _0x24134[_0x2bb152(0x16f)](_0x2bb152(0x133), () => {
      const _0x81fd7b = _0x2bb152;
      (historial = []),
        setCookie(_0x81fd7b(0x137), JSON[_0x81fd7b(0x15d)](historial), 0x1e),
        renderHistorial();
    });
}
function _0x3e2f(_0x533209, _0x2a81dc) {
  const _0x22d9af = _0x22d9();
  return (
    (_0x3e2f = function (_0x3e2f21, _0x3924f1) {
      _0x3e2f21 = _0x3e2f21 - 0xf4;
      let _0xc0e581 = _0x22d9af[_0x3e2f21];
      return _0xc0e581;
    }),
    _0x3e2f(_0x533209, _0x2a81dc)
  );
}
inputCodigo[_0x154cd4(0x16a)](_0x154cd4(0x129), _0x154cd4(0x13f)),
  inputCodigo[_0x154cd4(0x16f)]("focus", function () {
    const _0x5d64e4 = _0x154cd4;
    inputCodigo["removeAttribute"](_0x5d64e4(0x129));
  }),
  inputCodigo[_0x154cd4(0x16f)]("blur", function () {
    const _0x3b474a = _0x154cd4;
    inputCodigo[_0x3b474a(0x16a)](_0x3b474a(0x129), _0x3b474a(0x13f));
  }),
  inputCodigo[_0x154cd4(0x16f)]("keydown", function (_0x50c381) {
    const _0x3969e7 = _0x154cd4;
    _0x50c381[_0x3969e7(0x157)] === _0x3969e7(0x175) &&
      (_0x50c381[_0x3969e7(0x145)](), form[_0x3969e7(0x12b)]());
  }),
  form[_0x154cd4(0x16f)](_0x154cd4(0x148), async (_0x11f5de) => {
    const _0x2085b5 = _0x154cd4;
    _0x11f5de[_0x2085b5(0x145)]();
    let _0x550b74 = inputCodigo["value"]
      [_0x2085b5(0xf9)]()
      [_0x2085b5(0x185)](/\s+$/, "");
    (inputCodigo[_0x2085b5(0x103)] = _0x550b74),
      (resultadoDiv[_0x2085b5(0x15e)] = "");
    if (!_0x550b74) {
      (resultadoDiv[_0x2085b5(0x15e)] = _0x2085b5(0xf5)),
        renderHistorial(),
        inputCodigo["focus"]();
      return;
    }
    (inputCodigo["placeholder"] = ""),
      (resultadoDiv[_0x2085b5(0x15e)] = _0x2085b5(0x14b));
    try {
      const _0x48bd63 = await fetch(_0x2085b5(0x169), {
          method: _0x2085b5(0x125),
          headers: {
            Accept: _0x2085b5(0x123),
            "Content-Type": _0x2085b5(0xfa),
            "X-Requested-With": _0x2085b5(0x10f),
          },
          body: _0x2085b5(0x16c) + _0x550b74,
        }),
        _0x4e4fa1 = await _0x48bd63[_0x2085b5(0x146)]();
      if (_0x4e4fa1?.[_0x2085b5(0xfe)]?.[_0x2085b5(0x187)]) {
        const _0x2f5397 = _0x4e4fa1[_0x2085b5(0xfe)];
        (_0x2f5397["CODIGO"] =
          _0x2f5397["CODIGO"] || _0x2f5397[_0x2085b5(0x182)] || _0x550b74),
          (_0x2f5397[_0x2085b5(0x12e)] = new Date()[_0x2085b5(0x16b)]()),
          historial[_0x2085b5(0x14c)](_0x2f5397);
        let _0x4b4f70 = "";
        if (
          _0x2f5397[_0x2085b5(0x111)] &&
          _0x2f5397[_0x2085b5(0x111)][_0x2085b5(0xf9)]() !== ""
        ) {
          if (_0x2f5397[_0x2085b5(0x111)][_0x2085b5(0x128)](_0x2085b5(0x12c)))
            _0x4b4f70 = _0x2f5397[_0x2085b5(0x111)];
          else {
            let _0x308460 = _0x2f5397[_0x2085b5(0x111)][_0x2085b5(0x185)](
              /^\.\.\//,
              ""
            );
            _0x4b4f70 =
              _0x2085b5(0x13c) + _0x308460[_0x2085b5(0x185)](/^\//, "");
          }
        }
        (resultadoDiv["innerHTML"] =
          _0x2085b5(0x174) +
          _0x2f5397[_0x2085b5(0x187)] +
          _0x2085b5(0x106) +
          _0x2f5397[_0x2085b5(0x17f)] +
          _0x2085b5(0x113) +
          _0x2f5397[_0x2085b5(0x189)] +
          _0x2085b5(0x140) +
          new Date(_0x2f5397[_0x2085b5(0x12e)])[_0x2085b5(0x191)]() +
          _0x2085b5(0x12f) +
          (_0x4b4f70
            ? "<div\x20style=\x22display:flex;\x20justify-content:center;\x20align-items:center;\x20width:100%;\x22><img\x20src=\x22" +
              _0x4b4f70 +
              _0x2085b5(0x15f)
            : "") +
          _0x2085b5(0x176)),
          (inputCodigo[_0x2085b5(0x103)] = ""),
          inputCodigo[_0x2085b5(0x171)]();
      } else
        (resultadoDiv[_0x2085b5(0x15e)] = _0x2085b5(0x152)),
          (inputCodigo[_0x2085b5(0x103)] = ""),
          inputCodigo[_0x2085b5(0x171)](),
          setTimeout(() => {
            const _0x333e5e = _0x2085b5;
            resultadoDiv[_0x333e5e(0x15e)] = "";
          }, 0x1388);
      renderHistorial();
    } catch (_0x151439) {
      (resultadoDiv[_0x2085b5(0x15e)] =
        "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Ocurrió\x20un\x20error\x20al\x20consultar\x20el\x20producto</div>"),
        inputCodigo[_0x2085b5(0x171)](),
        renderHistorial();
    }
  });
function iniciarScanner() {
  const _0x272f73 = _0x154cd4;
  if (scannerActivo) return;
  navigator["mediaDevices"]
    [_0x272f73(0x114)]({ video: !![] })
    [_0x272f73(0x188)]((_0x4580b7) => {
      const _0x528907 = _0x272f73;
      _0x4580b7[_0x528907(0x10d)]()[_0x528907(0x147)]((_0x5dd237) =>
        _0x5dd237[_0x528907(0x127)]()
      ),
        (scannerActivo = !![]),
        (readerDiv["style"][_0x528907(0x18a)] = _0x528907(0x180)),
        document["getElementById"](_0x528907(0xff))[_0x528907(0x11c)]({
          behavior: _0x528907(0x112),
          block: "center",
        }),
        (ayudaTexto["style"][_0x528907(0x18a)] = _0x528907(0x180));
      const _0x169700 = new Html5Qrcode(_0x528907(0xff)),
        _0xb12a86 = {
          fps: 0xa,
          videoConstraints: {
            width: { min: 0x190, ideal: 0x780 },
            height: { min: 0x190, ideal: 0x438 },
            facingMode: _0x528907(0x18d),
            advanced: [{ zoom: 0x2 }],
          },
          qrbox: function (_0xa726a5, _0x4fb028) {
            const _0x51fde1 = _0x528907,
              _0x31ff01 = Math[_0x51fde1(0x11b)](0x12c, _0xa726a5 * 0.9),
              _0x39ae51 = 0x64;
            return { width: _0x31ff01, height: _0x39ae51 };
          },
          rememberLastUsedCamera: !![],
          aspectRatio: 0x1,
          formatsToSupport: [
            Html5QrcodeSupportedFormats[_0x528907(0x14a)],
            Html5QrcodeSupportedFormats[_0x528907(0x153)],
            Html5QrcodeSupportedFormats["EAN_8"],
            Html5QrcodeSupportedFormats[_0x528907(0x11e)],
            Html5QrcodeSupportedFormats[_0x528907(0x170)],
            Html5QrcodeSupportedFormats[_0x528907(0x17b)],
          ],
          experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
        };
      function _0x1b9f33() {
        const _0x3bfbac = _0x528907;
        _0x169700[_0x3bfbac(0x12a)](
          { facingMode: _0x3bfbac(0x18d) },
          _0xb12a86,
          (_0xe7ab71) => {
            const _0x319b6d = _0x3bfbac;
            if (!puedeEscanear) return;
            (puedeEscanear = ![]),
              (inputCodigo[_0x319b6d(0x103)] = _0xe7ab71[_0x319b6d(0xf9)]()[
                _0x319b6d(0x185)
              ](/\s+$/, "")),
              form["requestSubmit"](),
              setTimeout(() => {
                puedeEscanear = !![];
              }, 0x7d0);
          },
          (_0x4575eb) => {}
        )
          [_0x3bfbac(0x188)](() => {
            setTimeout(() => {
              const _0x54e52c = _0x3e2f,
                _0x83fe71 = readerDiv[_0x54e52c(0x163)](_0x54e52c(0x13a));
              if (_0x83fe71) {
                const _0x293514 =
                  _0x83fe71[_0x54e52c(0x135)]["getVideoTracks"]()[0x0];
                _0x293514["applyConstraints"]({
                  focusMode: _0x54e52c(0x17c),
                  advanced: [{ zoom: 0x2 }],
                })
                  [_0x54e52c(0x188)](() => {})
                  [_0x54e52c(0xf6)]((_0x9f67e6) => {});
              }
            }, 0x7d0);
          })
          [_0x3bfbac(0xf6)]((_0x3f9351) => {
            const _0x5eeea2 = _0x3bfbac;
            (scannerActivo = ![]),
              (resultadoDiv[_0x5eeea2(0x15e)] =
                _0x5eeea2(0x130) + _0x3f9351 + _0x5eeea2(0x186)),
              renderHistorial();
          });
      }
      _0x1b9f33();
      const _0x5e6ccd = new MutationObserver(() => {
        const _0x5a0a08 = _0x528907,
          _0x379d24 = readerDiv[_0x5a0a08(0x163)](_0x5a0a08(0x13a));
        _0x379d24 &&
          (_0x379d24[_0x5a0a08(0x16a)](_0x5a0a08(0x109), ""),
          _0x379d24[_0x5a0a08(0x16a)](_0x5a0a08(0x13b), ""),
          _0x379d24["setAttribute"](_0x5a0a08(0x143), ""),
          _0x5e6ccd[_0x5a0a08(0x13d)]());
      });
      _0x5e6ccd[_0x528907(0x136)](readerDiv, {
        childList: !![],
        subtree: !![],
      });
    })
    [_0x272f73(0xf6)]((_0x1dc3e9) => {
      const _0x379a67 = _0x272f73;
      (resultadoDiv[_0x379a67(0x15e)] =
        "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20autoriza\x20el\x20acceso\x20a\x20la\x20cámara</div>"),
        renderHistorial();
    });
}
const fileInput = document[_0x154cd4(0x144)](_0x154cd4(0x17e));
fileInput[_0x154cd4(0x16f)](_0x154cd4(0x119), async (_0x579001) => {
  const _0x2798ad = _0x154cd4,
    _0x2c5fec = _0x579001[_0x2798ad(0x16e)][_0x2798ad(0x120)][0x0];
  if (!_0x2c5fec) return;
  resultadoDiv[_0x2798ad(0x15e)] = _0x2798ad(0x161);
  const _0x42c350 = new FileReader();
  (_0x42c350[_0x2798ad(0x18c)] = function (_0x350ff6) {
    const _0x392152 = _0x2798ad,
      _0x2c93aa = new Image();
    (_0x2c93aa[_0x392152(0x18c)] = function () {
      const _0x401d84 = _0x392152,
        _0x2ad21c = document[_0x401d84(0x184)](_0x401d84(0x141)),
        _0x5258a5 = _0x2ad21c[_0x401d84(0xfc)]("2d");
      (_0x2ad21c["width"] = _0x2c93aa["width"]),
        (_0x2ad21c[_0x401d84(0x138)] = _0x2c93aa[_0x401d84(0x138)]),
        _0x5258a5[_0x401d84(0x18e)](_0x2c93aa, 0x0, 0x0);
      const _0x30868f = _0x5258a5[_0x401d84(0x110)](
          0x0,
          0x0,
          _0x2ad21c[_0x401d84(0x18f)],
          _0x2ad21c[_0x401d84(0x138)]
        ),
        _0x23a620 = _0x30868f[_0x401d84(0x17d)];
      for (
        let _0x24aba3 = 0x0;
        _0x24aba3 < _0x23a620[_0x401d84(0x10c)];
        _0x24aba3 += 0x4
      ) {
        const _0x20129b =
            (_0x23a620[_0x24aba3] +
              _0x23a620[_0x24aba3 + 0x1] +
              _0x23a620[_0x24aba3 + 0x2]) /
            0x3,
          _0x3bba20 = _0x20129b > 0x80 ? 0xff : 0x0;
        _0x23a620[_0x24aba3] =
          _0x23a620[_0x24aba3 + 0x1] =
          _0x23a620[_0x24aba3 + 0x2] =
            _0x3bba20;
      }
      _0x5258a5["putImageData"](_0x30868f, 0x0, 0x0);
      const _0x4f807b = _0x2ad21c[_0x401d84(0x16d)]();
      Quagga[_0x401d84(0x192)](
        {
          src: _0x4f807b,
          numOfWorkers: 0x0,
          locate: !![],
          inputStream: { size: 0x320 },
          decoder: {
            readers: [
              _0x401d84(0x115),
              _0x401d84(0x183),
              _0x401d84(0x15c),
              _0x401d84(0x101),
              "upc_e_reader",
              _0x401d84(0x149),
            ],
          },
        },
        function (_0x5e210d) {
          const _0x4d43be = _0x401d84;
          _0x5e210d && _0x5e210d[_0x4d43be(0x139)]
            ? ((inputCodigo["value"] = _0x5e210d[_0x4d43be(0x139)][
                _0x4d43be(0x11f)
              ]
                [_0x4d43be(0xf9)]()
                [_0x4d43be(0x185)](/\s+$/, "")),
              form["requestSubmit"]())
            : ((resultadoDiv["innerHTML"] = _0x4d43be(0x15b)),
              renderHistorial()),
            (fileInput[_0x4d43be(0x103)] = "");
        }
      );
    }),
      (_0x2c93aa["src"] = _0x350ff6[_0x392152(0x16e)][_0x392152(0x10a)]);
  }),
    _0x42c350[_0x2798ad(0x122)](_0x2c5fec);
});
_0x154cd4(0x18b) in navigator &&
  window[_0x154cd4(0x16f)]("load", () => {
    const _0x595cda = _0x154cd4;
    navigator[_0x595cda(0x18b)]
      [_0x595cda(0x100)](_0x595cda(0x158))
      [_0x595cda(0x188)]((_0x3d258c) =>
        console[_0x595cda(0x150)](_0x595cda(0x164), _0x3d258c[_0x595cda(0x126)])
      )
      [_0x595cda(0xf6)]((_0x1f5e37) =>
        console[_0x595cda(0xf4)](_0x595cda(0x132), _0x1f5e37)
      );
  });
window["addEventListener"](_0x154cd4(0x193), (_0x474b33) => {
  const _0x1c3992 = _0x154cd4;
  _0x474b33["preventDefault"](),
    (deferredPrompt = _0x474b33),
    installBtn &&
      installBtn[_0x1c3992(0x11a)][_0x1c3992(0x15a)](_0x1c3992(0x10e));
}),
  installBtn[_0x154cd4(0x16f)](_0x154cd4(0x133), (_0x4c7d04) => {
    const _0x1f5d3a = _0x154cd4;
    deferredPrompt &&
      (deferredPrompt[_0x1f5d3a(0xfb)](),
      deferredPrompt["userChoice"][_0x1f5d3a(0x188)]((_0x4b1dbe) => {
        const _0x6be778 = _0x1f5d3a;
        _0x4b1dbe[_0x6be778(0x14e)] === "accepted"
          ? console[_0x6be778(0x150)]("✅\x20Instalación\x20aceptada")
          : console[_0x6be778(0x150)](_0x6be778(0x116)),
          (deferredPrompt = null),
          installBtn["classList"][_0x6be778(0x105)]("d-none");
      }));
  });
function _0x22d9() {
  const _0x163d29 = [
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontró\x20el\x20código\x20ingresado</div>",
    "EAN_13",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x20ms-md-2\x22>Escaneado:\x20",
    "shift",
    "8793348WvDLxo",
    "key",
    "service-worker.js",
    "split",
    "remove",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20detectó\x20código,\x20recorta\x20la\x20imagen\x20o\x20prueba\x20con\x20otra</div>",
    "code_128_reader",
    "stringify",
    "innerHTML",
    "\x22\x20alt=\x22Imagen\x20del\x20producto\x22\x20style=\x22width:180px;\x20height:180px;\x20object-fit:contain;\x20border-radius:10px;\x20box-shadow:0\x202px\x208px\x20rgba(0,0,0,0.1);\x20margin-top:10px;\x22></div>",
    "ayuda",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>",
    "formulario",
    "querySelector",
    "✅\x20Service\x20Worker\x20registrado:",
    "installBtn",
    "getRegistrations",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "3739568vJNnpo",
    "https://dvncloud.com/instancias/theback9golf/index.php?controller=theback9golf:consultar_precio&DVNUSERID=45&DVNSUCURSAL=1",
    "setAttribute",
    "toISOString",
    "codigo=",
    "toDataURL",
    "target",
    "addEventListener",
    "UPC_E",
    "focus",
    "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>",
    ";\x20expires=",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Producto\x20encontrado:</strong>\x20",
    "Enter",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "2607540yvNOtW",
    "316jHWZVE",
    "join",
    "CODE_39",
    "continuous",
    "data",
    "fileInput",
    "CODIGO",
    "block",
    "833140WfKQps",
    "SKU",
    "ean_8_reader",
    "createElement",
    "replace",
    "</div>",
    "NOMBRE",
    "then",
    "PRECIO",
    "display",
    "serviceWorker",
    "onload",
    "environment",
    "drawImage",
    "width",
    "codigo",
    "toLocaleString",
    "decodeSingle",
    "beforeinstallprompt",
    "error",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>",
    "catch",
    "limpiarHistorialBtn",
    "controllerchange",
    "trim",
    "application/x-www-form-urlencoded;\x20charset=UTF-8",
    "prompt",
    "getContext",
    "4728705AYZwHm",
    "DATOS",
    "reader",
    "register",
    "upc_reader",
    "49430qsnXLO",
    "value",
    "Fecha\x20desconocida",
    "add",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-secondary\x22>SKU:\x20<strong>",
    "resultado",
    "8wBXcLU",
    "playsinline",
    "result",
    "parse",
    "length",
    "getTracks",
    "d-none",
    "XMLHttpRequest",
    "getImageData",
    "URL_IMG",
    "smooth",
    "</strong></span><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-bold\x22>Precio:\x20$",
    "getUserMedia",
    "ean_reader",
    "❌\x20Instalación\x20rechazada",
    "cookie",
    "update",
    "change",
    "classList",
    "min",
    "scrollIntoView",
    "location",
    "UPC_A",
    "code",
    "files",
    "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "readAsDataURL",
    "application/json,\x20text/javascript,\x20*/*;\x20q=0.01",
    "map",
    "POST",
    "scope",
    "stop",
    "startsWith",
    "readonly",
    "start",
    "requestSubmit",
    "http",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "FECHA_ESCANEO",
    "</span><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara:\x20",
    "pop",
    "❌\x20Error\x20al\x20registrar\x20SW:",
    "click",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>",
    "srcObject",
    "observe",
    "historial",
    "height",
    "codeResult",
    "video",
    "autoplay",
    "https://dvncloud.com/",
    "disconnect",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "true",
    "</span><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x22>Escaneado:\x20",
    "canvas",
    "toUTCString",
    "muted",
    "getElementById",
    "preventDefault",
    "json",
    "forEach",
    "submit",
    "code_39_reader",
    "CODE_128",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>",
    "unshift",
    "</strong></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x20ms-md-2\x22>SKU:\x20<strong>",
    "outcome",
    "22313817hGolCS",
    "log",
    "SKU\x20desconocido",
  ];
  _0x22d9 = function () {
    return _0x163d29;
  };
  return _0x22d9();
}
_0x154cd4(0x18b) in navigator &&
  (navigator[_0x154cd4(0x18b)]
    [_0x154cd4(0x166)]()
    [_0x154cd4(0x188)](function (_0x43ffc4) {
      const _0x43dba2 = _0x154cd4;
      for (let _0xd72aae of _0x43ffc4) {
        _0xd72aae[_0x43dba2(0x118)]();
      }
    }),
  navigator[_0x154cd4(0x18b)]["addEventListener"](_0x154cd4(0xf8), function () {
    const _0x34f672 = _0x154cd4;
    window[_0x34f672(0x11d)]["reload"]();
  }));
renderHistorial();
