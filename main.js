//@2025 FERNANDO CESAR SANDOVAL PADILLA TODOS LOS DERECHOS RESERVADOS 
const _0x760667 = _0x2025;
function _0x2025(_0x5b94de, _0x42ce4c) {
  const _0xb560af = _0xb560();
  return (
    (_0x2025 = function (_0x202588, _0x56d634) {
      _0x202588 = _0x202588 - 0x1e8;
      let _0x5b7d2c = _0xb560af[_0x202588];
      return _0x5b7d2c;
    }),
    _0x2025(_0x5b94de, _0x42ce4c)
  );
}
(function (_0x2f9b39, _0x8ebb29) {
  const _0x5bb553 = _0x2025,
    _0x4dd778 = _0x2f9b39();
  while (!![]) {
    try {
      const _0x56f20f =
        -parseInt(_0x5bb553(0x229)) / 0x1 +
        (-parseInt(_0x5bb553(0x252)) / 0x2) *
          (parseInt(_0x5bb553(0x1f8)) / 0x3) +
        (-parseInt(_0x5bb553(0x20f)) / 0x4) *
          (parseInt(_0x5bb553(0x236)) / 0x5) +
        parseInt(_0x5bb553(0x249)) / 0x6 +
        parseInt(_0x5bb553(0x210)) / 0x7 +
        parseInt(_0x5bb553(0x1f7)) / 0x8 +
        -parseInt(_0x5bb553(0x230)) / 0x9;
      if (_0x56f20f === _0x8ebb29) break;
      else _0x4dd778["push"](_0x4dd778["shift"]());
    } catch (_0x3b6bc0) {
      _0x4dd778["push"](_0x4dd778["shift"]());
    }
  }
})(_0xb560, 0x81009);
const form = document["getElementById"](_0x760667(0x24a)),
  inputCodigo = document[_0x760667(0x247)](_0x760667(0x250)),
  readerDiv = document[_0x760667(0x247)](_0x760667(0x1f9)),
  ayudaTexto = document["getElementById"](_0x760667(0x205)),
  installBtn = document["getElementById"](_0x760667(0x203));
let scannerActivo = ![],
  deferredPrompt;
form[_0x760667(0x21d)](_0x760667(0x257), async (_0x767203) => {
  const _0x4ecddb = _0x760667;
  _0x767203["preventDefault"]();
  const _0x191995 = inputCodigo["value"][_0x4ecddb(0x20b)]();
  if (!_0x191995) {
    Swal[_0x4ecddb(0x1ee)](
      _0x4ecddb(0x207),
      "Por\x20favor\x20ingresa\x20un\x20código",
      "warning"
    );
    return;
  }
  Swal[_0x4ecddb(0x234)]();
  try {
    const _0x6757f9 = await fetch(_0x4ecddb(0x241), {
        method: "POST",
        headers: {
          Accept: _0x4ecddb(0x225),
          "Content-Type": "application/x-www-form-urlencoded;\x20charset=UTF-8",
          "X-Requested-With": _0x4ecddb(0x1fa),
        },
        body: _0x4ecddb(0x21f) + _0x191995,
      }),
      _0x5bc750 = await _0x6757f9[_0x4ecddb(0x219)]();
    Swal[_0x4ecddb(0x209)]();
    if (_0x5bc750?.["DATOS"]?.["NOMBRE"]) {
      const _0x923f9b = _0x5bc750[_0x4ecddb(0x254)];
      Swal["fire"]({
        title: _0x923f9b[_0x4ecddb(0x1f0)],
        html: _0x4ecddb(0x240) + _0x923f9b[_0x4ecddb(0x20a)] + _0x4ecddb(0x23a),
        icon: _0x4ecddb(0x22e),
        confirmButtonText: "OK",
      });
    } else
      Swal[_0x4ecddb(0x1ee)](
        _0x4ecddb(0x1eb),
        _0x4ecddb(0x20e),
        _0x4ecddb(0x208)
      );
  } catch (_0x5f14a4) {
    Swal["close"](), Swal["fire"](_0x4ecddb(0x1f2), _0x4ecddb(0x237), "error");
  }
});
function _0xb560() {
  const _0x51d28b = [
    "json",
    "playsinline",
    "applyConstraints",
    "srcObject",
    "addEventListener",
    "stop",
    "codigo=",
    "readAsDataURL",
    "src",
    "✅\x20Constraints\x20aplicadas\x20después\x20de\x20iniciar",
    "remove",
    "drawImage",
    "application/json,\x20text/javascript,\x20*/*;\x20q=0.01",
    "setAttribute",
    "Por\x20favor\x20autoriza\x20el\x20acceso\x20a\x20la\x20cámara",
    "EAN_8",
    "351906KbWatc",
    "CODE_128",
    "recorta\x20la\x20imagen\x20o\x20prueba\x20con\x20otra",
    "getContext",
    "beforeinstallprompt",
    "success",
    "code_128_reader",
    "6714324ROgGey",
    "load",
    "d-none",
    "target",
    "showLoading",
    "accepted",
    "55wWGZhc",
    "Ocurrió\x20un\x20error\x20al\x20consultar\x20el\x20producto",
    "putImageData",
    "prompt",
    "<br>",
    "display",
    "center",
    "getTracks",
    "createElement",
    "click",
    "<strong>Precio:</strong>\x20$",
    "https://dvncloud.com/instancias/theback9golf/index.php?controller=theback9golf:consultar_precio&DVNUSERID=45&DVNSUCURSAL=1",
    "onload",
    "data",
    "warn",
    "getImageData",
    "UPC_A",
    "getElementById",
    "fileInput",
    "5758866NxgIQV",
    "formulario",
    "muted",
    "upc_reader",
    "classList",
    "ean_reader",
    "EAN_13",
    "codigo",
    "value",
    "392442RlfRUC",
    "scrollIntoView",
    "DATOS",
    "requestSubmit",
    "min",
    "submit",
    "preventDefault",
    "log",
    "❌\x20Error\x20al\x20registrar\x20SW:",
    "Producto\x20no\x20encontrado",
    "codeResult",
    "observe",
    "fire",
    "catch",
    "NOMBRE",
    "querySelector",
    "Error",
    "✅\x20Instalación\x20aceptada",
    "CODE_39",
    "environment",
    "block",
    "855272SYJwoF",
    "6nMEWes",
    "reader",
    "XMLHttpRequest",
    "❌\x20Instalación\x20rechazada",
    "UPC_E",
    "change",
    "serviceWorker",
    "files",
    "none",
    "userChoice",
    "height",
    "installBtn",
    "style",
    "ayuda",
    "toDataURL",
    "Código\x20vacío",
    "error",
    "close",
    "PRECIO",
    "trim",
    "width",
    "continuous",
    "No\x20se\x20encontró\x20el\x20código\x20ingresado",
    "1172VvaCXb",
    "6686960WaIIBS",
    "video",
    "No\x20se\x20detectó\x20código",
    "scope",
    "getUserMedia",
    "then",
    "register",
    "code_39_reader",
    "smooth",
  ];
  _0xb560 = function () {
    return _0x51d28b;
  };
  return _0xb560();
}
function iniciarScanner() {
  const _0x408b66 = _0x760667;
  if (scannerActivo) return;
  navigator["mediaDevices"]
    [_0x408b66(0x214)]({ video: !![] })
    [_0x408b66(0x215)]((_0x8ab09e) => {
      const _0x2b4fc5 = _0x408b66;
      _0x8ab09e[_0x2b4fc5(0x23d)]()["forEach"]((_0x41afaa) =>
        _0x41afaa[_0x2b4fc5(0x21e)]()
      ),
        (scannerActivo = !![]),
        (readerDiv[_0x2b4fc5(0x204)]["display"] = _0x2b4fc5(0x1f6)),
        document[_0x2b4fc5(0x247)](_0x2b4fc5(0x1f9))[_0x2b4fc5(0x253)]({
          behavior: _0x2b4fc5(0x218),
          block: _0x2b4fc5(0x23c),
        }),
        (ayudaTexto[_0x2b4fc5(0x204)]["display"] = _0x2b4fc5(0x1f6));
      const _0x3d7f9f = new Html5Qrcode(_0x2b4fc5(0x1f9)),
        _0x1e8153 = {
          fps: 0xa,
          videoConstraints: {
            width: { min: 0x190, ideal: 0x780 },
            height: { min: 0x190, ideal: 0x438 },
            facingMode: "environment",
            advanced: [{ zoom: 0x2 }],
          },
          qrbox: function (_0x5a515a, _0x5ba980) {
            const _0x188eb8 = _0x2b4fc5,
              _0xa41faf = Math[_0x188eb8(0x256)](0x12c, _0x5a515a * 0.9),
              _0x2b6929 = 0x64;
            return { width: _0xa41faf, height: _0x2b6929 };
          },
          rememberLastUsedCamera: !![],
          aspectRatio: 0x1,
          formatsToSupport: [
            Html5QrcodeSupportedFormats[_0x2b4fc5(0x22a)],
            Html5QrcodeSupportedFormats[_0x2b4fc5(0x24f)],
            Html5QrcodeSupportedFormats[_0x2b4fc5(0x228)],
            Html5QrcodeSupportedFormats[_0x2b4fc5(0x246)],
            Html5QrcodeSupportedFormats[_0x2b4fc5(0x1fc)],
            Html5QrcodeSupportedFormats[_0x2b4fc5(0x1f4)],
          ],
          experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
        };
      _0x3d7f9f["start"](
        { facingMode: _0x2b4fc5(0x1f5) },
        _0x1e8153,
        (_0x18da42) => {
          const _0x2941d2 = _0x2b4fc5;
          console[_0x2941d2(0x1e9)]("Código\x20leído:", _0x18da42),
            (inputCodigo[_0x2941d2(0x251)] = _0x18da42),
            _0x3d7f9f[_0x2941d2(0x21e)]()[_0x2941d2(0x215)](() => {
              const _0x218578 = _0x2941d2;
              (readerDiv[_0x218578(0x204)][_0x218578(0x23b)] = "none"),
                (ayudaTexto[_0x218578(0x204)]["display"] = _0x218578(0x200)),
                (scannerActivo = ![]),
                _0x3d7f9f["clear"](),
                form[_0x218578(0x255)]();
            });
        },
        (_0x3edeb3) => {}
      )
        [_0x2b4fc5(0x215)](() => {
          setTimeout(() => {
            const _0x338823 = _0x2025,
              _0x28e56a = readerDiv["querySelector"](_0x338823(0x211));
            if (_0x28e56a) {
              const _0x2ec793 =
                _0x28e56a[_0x338823(0x21c)]["getVideoTracks"]()[0x0];
              _0x2ec793[_0x338823(0x21b)]({
                focusMode: _0x338823(0x20d),
                advanced: [{ zoom: 0x2 }],
              })
                [_0x338823(0x215)](() => {
                  const _0x413db9 = _0x338823;
                  console["log"](_0x413db9(0x222));
                })
                ["catch"]((_0x3e7591) => {
                  const _0x4a38cf = _0x338823;
                  console[_0x4a38cf(0x244)](
                    "❌\x20No\x20se\x20pudieron\x20aplicar\x20constraints:",
                    _0x3e7591
                  );
                });
            }
          }, 0x7d0);
        })
        [_0x2b4fc5(0x1ef)]((_0xb854d5) => {
          const _0x53f904 = _0x2b4fc5;
          (scannerActivo = ![]),
            Swal[_0x53f904(0x1ee)](
              "Error\x20de\x20cámara",
              "No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara:\x20" +
                _0xb854d5,
              _0x53f904(0x208)
            );
        });
      const _0x263dfa = new MutationObserver(() => {
        const _0x5e449b = _0x2b4fc5,
          _0x49a321 = readerDiv[_0x5e449b(0x1f1)]("video");
        _0x49a321 &&
          (_0x49a321[_0x5e449b(0x226)](_0x5e449b(0x21a), ""),
          _0x49a321[_0x5e449b(0x226)]("autoplay", ""),
          _0x49a321[_0x5e449b(0x226)](_0x5e449b(0x24b), ""),
          _0x263dfa["disconnect"]());
      });
      _0x263dfa[_0x2b4fc5(0x1ed)](readerDiv, {
        childList: !![],
        subtree: !![],
      });
    })
    [_0x408b66(0x1ef)]((_0x1a352) => {
      const _0x52cf2e = _0x408b66;
      Swal["fire"](
        "Permiso\x20de\x20cámara\x20denegado",
        _0x52cf2e(0x227),
        _0x52cf2e(0x208)
      );
    });
}
const fileInput = document[_0x760667(0x247)](_0x760667(0x248));
fileInput[_0x760667(0x21d)](_0x760667(0x1fd), async (_0x1ea8c7) => {
  const _0x1464c1 = _0x760667,
    _0x40bace = _0x1ea8c7[_0x1464c1(0x233)][_0x1464c1(0x1ff)][0x0];
  if (!_0x40bace) return;
  Swal[_0x1464c1(0x234)]();
  const _0x35efd3 = new FileReader();
  (_0x35efd3[_0x1464c1(0x242)] = function (_0x3380f7) {
    const _0x3a1f3c = _0x1464c1,
      _0x4a5368 = new Image();
    (_0x4a5368["onload"] = function () {
      const _0x341690 = _0x2025,
        _0x4da72d = document[_0x341690(0x23e)]("canvas"),
        _0x1fa7d6 = _0x4da72d[_0x341690(0x22c)]("2d");
      (_0x4da72d[_0x341690(0x20c)] = _0x4a5368[_0x341690(0x20c)]),
        (_0x4da72d[_0x341690(0x202)] = _0x4a5368[_0x341690(0x202)]),
        _0x1fa7d6[_0x341690(0x224)](_0x4a5368, 0x0, 0x0);
      const _0x190d5f = _0x1fa7d6[_0x341690(0x245)](
          0x0,
          0x0,
          _0x4da72d[_0x341690(0x20c)],
          _0x4da72d[_0x341690(0x202)]
        ),
        _0x4511eb = _0x190d5f[_0x341690(0x243)];
      for (
        let _0xfd333 = 0x0;
        _0xfd333 < _0x4511eb["length"];
        _0xfd333 += 0x4
      ) {
        const _0x3faaeb =
            (_0x4511eb[_0xfd333] +
              _0x4511eb[_0xfd333 + 0x1] +
              _0x4511eb[_0xfd333 + 0x2]) /
            0x3,
          _0x270eda = _0x3faaeb > 0x80 ? 0xff : 0x0;
        _0x4511eb[_0xfd333] =
          _0x4511eb[_0xfd333 + 0x1] =
          _0x4511eb[_0xfd333 + 0x2] =
            _0x270eda;
      }
      _0x1fa7d6[_0x341690(0x238)](_0x190d5f, 0x0, 0x0);
      const _0x168fd5 = _0x4da72d[_0x341690(0x206)]();
      Quagga["decodeSingle"](
        {
          src: _0x168fd5,
          numOfWorkers: 0x0,
          locate: !![],
          inputStream: { size: 0x320 },
          decoder: {
            readers: [
              _0x341690(0x24e),
              "ean_8_reader",
              _0x341690(0x22f),
              _0x341690(0x24c),
              "upc_e_reader",
              _0x341690(0x217),
            ],
          },
        },
        function (_0x4b6928) {
          const _0x402e25 = _0x341690;
          Swal[_0x402e25(0x209)](),
            _0x4b6928 && _0x4b6928[_0x402e25(0x1ec)]
              ? ((inputCodigo[_0x402e25(0x251)] =
                  _0x4b6928["codeResult"]["code"]),
                form["requestSubmit"]())
              : Swal[_0x402e25(0x1ee)](
                  _0x402e25(0x212),
                  _0x402e25(0x22b),
                  "error"
                ),
            (fileInput[_0x402e25(0x251)] = "");
        }
      );
    }),
      (_0x4a5368[_0x3a1f3c(0x221)] = _0x3380f7[_0x3a1f3c(0x233)]["result"]);
  }),
    _0x35efd3[_0x1464c1(0x220)](_0x40bace);
});
_0x760667(0x1fe) in navigator &&
  window["addEventListener"](_0x760667(0x231), () => {
    const _0x1c6f7c = _0x760667;
    navigator[_0x1c6f7c(0x1fe)]
      [_0x1c6f7c(0x216)]("service-worker.js")
      [_0x1c6f7c(0x215)]((_0x2e9ab6) =>
        console[_0x1c6f7c(0x1e9)](
          "✅\x20Service\x20Worker\x20registrado:",
          _0x2e9ab6[_0x1c6f7c(0x213)]
        )
      )
      ["catch"]((_0xe50951) =>
        console[_0x1c6f7c(0x208)](_0x1c6f7c(0x1ea), _0xe50951)
      );
  });
window[_0x760667(0x21d)](_0x760667(0x22d), (_0x2ea110) => {
  const _0x4bad54 = _0x760667;
  _0x2ea110[_0x4bad54(0x1e8)](),
    (deferredPrompt = _0x2ea110),
    installBtn &&
      installBtn[_0x4bad54(0x24d)][_0x4bad54(0x223)](_0x4bad54(0x232));
}),
  installBtn["addEventListener"](_0x760667(0x23f), (_0x4915e7) => {
    const _0x1deb54 = _0x760667;
    deferredPrompt &&
      (deferredPrompt[_0x1deb54(0x239)](),
      deferredPrompt[_0x1deb54(0x201)][_0x1deb54(0x215)]((_0x4ef9b6) => {
        const _0x4ed818 = _0x1deb54;
        _0x4ef9b6["outcome"] === _0x4ed818(0x235)
          ? console[_0x4ed818(0x1e9)](_0x4ed818(0x1f3))
          : console[_0x4ed818(0x1e9)](_0x4ed818(0x1fb)),
          (deferredPrompt = null),
          installBtn[_0x4ed818(0x24d)]["add"]("d-none");
      }));
  });
