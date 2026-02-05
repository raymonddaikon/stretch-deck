import "../chunks/DsnmJJEf.js";
import { X as gt, p as xt, _ as f, a5 as vt, Z as n, u as we, g as e, h as de, f as g, d as r, s as o, r as a, t as V, b as c, c as _t, e as ke, a as Z, Y as Pe, aj as Ze } from "../chunks/Cerututf.js";
import { o as Dt, s as j } from "../chunks/C-CTaGP6.js";
import { i as w } from "../chunks/DIL41Api.js";
import { s as Ne, b as $t, h as It, r as Me, g as Rt, w as Et } from "../chunks/CD9opEPd.js";
import { b as At, a as Ae } from "../chunks/Dp3AfHhX.js";
import { b as ye } from "../chunks/IOctRI-n.js";
import { g as Pt, C as ut, a as Ft, D as Bt, M as Vt } from "../chunks/BPNiD34A.js";
import { g as je } from "../chunks/C1832kSX.js";
import { p as pt } from "../chunks/4zMF4u-F.js";
import { C as Tt } from "../chunks/ZpSw4bIb.js";
import { D as Ut } from "../chunks/BSmMqEvS.js";
import { g as Ke } from "../chunks/CsOUNaBs.js";
import { c as qt } from "../chunks/BjdZBxxB.js";
import { a as ft } from "../chunks/CBuXWW2l.js";
import { _ as ht } from "../chunks/PPVm8Dsz.js";
let Oa;
let __tla = (async () => {
  const Yt = () => "Camera", Xt = () => "\u30AB\u30E1\u30E9", Ot = (C = {}, y = {}) => (y.locale ?? Ke()) === "en" ? Yt() : Xt(), Gt = () => "Upload", Ht = () => "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9", Qt = (C = {}, y = {}) => (y.locale ?? Ke()) === "en" ? Gt() : Ht(), Wt = () => "or paste upload link", Nt = () => "\u307E\u305F\u306F\u62DB\u5F85\u30EA\u30F3\u30AF\u3092\u8CBC\u308A\u4ED8\u3051\u308B", Jt = (C = {}, y = {}) => (y.locale ?? Ke()) === "en" ? Wt() : Nt();
  async function Zt() {
    const C = await ht(() => import("../chunks/BxLt509m.js"), [], import.meta.url).then((i) => i.cv);
    await C.ready;
    const y = await ea(C);
    return {
      cv: C,
      qrcode_detector: y
    };
  }
  let Je;
  async function bt() {
    return Je || (Je = Zt()), Je;
  }
  async function Kt() {
    await bt();
  }
  async function mt(C, y = {}) {
    const { cv: i, qrcode_detector: I } = await bt(), d = i.imread(C, i.IMREAD_GRAYSCALE), T = new i.MatVector(), P = I.detectAndDecode(d, T), m = T.get(0), M = m ? {
      x: m.floatAt(0),
      y: m.floatAt(1),
      width: m.floatAt(4) - m.floatAt(0),
      height: m.floatAt(5) - m.floatAt(1)
    } : void 0;
    let R;
    if (M && y.includeRectCanvas) {
      R = document.createElement("canvas");
      const Q = d.roi(new i.Rect(M.x, M.y, M.width, M.height));
      i.imshow(R, Q), Q.delete();
    }
    return d.delete(), {
      text: P.get(0),
      rect: M,
      rectCanvas: R
    };
  }
  async function ea(C) {
    const y = await ht(() => import("../chunks/BxLt509m.js"), [], import.meta.url);
    return C.FS_createDataFile("/", "detect.prototxt", y.detect_prototxt, true, false, false), C.FS_createDataFile("/", "detect.caffemodel", y.detect_caffemodel, true, false, false), C.FS_createDataFile("/", "sr.prototxt", y.sr_prototxt, true, false, false), C.FS_createDataFile("/", "sr.caffemodel", y.sr_caffemodel, true, false, false), new C.wechat_qrcode_WeChatQRCode("detect.prototxt", "detect.caffemodel", "sr.prototxt", "sr.caffemodel");
  }
  var ta = g('<div class="flex items-center gap-2 rounded border border-red-500 bg-red-500/10 p-4 text-red-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd"></path></svg> <span> </span></div>'), aa = g('<div class="flex items-center gap-2 rounded border p-4 text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 animate-spin"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" opacity="0.25"></path><path d="M12 2a10 10 0 019.95 9h-2.02A8 8 0 0012 4V2z"></path></svg> <span>Loading scanner...</span></div>'), ra = g('<div class="flex items-center gap-2 rounded border border-red-500 bg-red-500/10 p-4 text-red-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd"></path></svg> <span> </span></div>'), sa = g('<video autoplay playsinline="" class="absolute inset-0 h-full w-full object-cover"></video> <canvas class="hidden"></canvas>', 3), na = g('<div class="absolute inset-0 flex items-center justify-center text-white/50"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 animate-spin"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" opacity="0.25"></path><path d="M12 2a10 10 0 019.95 9h-2.02A8 8 0 0012 4V2z"></path></svg></div>'), ia = g("<option> </option>"), oa = g('<div class="absolute top-2 right-2 left-2"><select class="w-full rounded border border-white/20 bg-black/50 px-2 py-1.5 text-sm text-white backdrop-blur-sm"></select></div>'), la = g('<div class="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-green-500/20 text-green-500 backdrop-blur backdrop-brightness-50"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path></svg> <div class="max-w-full px-4 text-center font-mono break-all"> </div> <button type="button" class="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600">Continue</button></div>'), ca = g('<div class="flex flex-col gap-4"><!> <div class="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded border bg-black"><!> <!> <!></div></div>'), da = g('<div class="flex flex-col gap-2"><span class="text-center text-sm text-muted-foreground">Detected QR Code</span> <div class="mx-auto flex aspect-square w-32 items-center justify-center rounded border"><canvas class="max-h-full max-w-full object-contain"></canvas></div></div>'), va = g('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd"></path></svg> <span> </span>', 1), ua = g('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 animate-spin"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" opacity="0.25"></path><path d="M12 2a10 10 0 019.95 9h-2.02A8 8 0 0012 4V2z"></path></svg> <span>Scanning...</span>', 1), pa = g('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 shrink-0"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path></svg> <span class="font-mono break-all"> </span>', 1), fa = g('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path></svg> <span>No QR code found</span>', 1), ma = g('<div class="grid grid-cols-2 gap-4"><div class="flex flex-col gap-2"><span class="text-center text-sm text-muted-foreground">Original</span> <div class="flex aspect-square items-center justify-center rounded border"><img alt="Uploaded" class="max-h-full max-w-full object-contain"/></div></div> <div class="flex flex-col gap-2"><span class="text-center text-sm text-muted-foreground">Processed</span> <div class="flex aspect-square items-center justify-center rounded border"><canvas class="max-h-full max-w-full object-contain"></canvas></div></div></div> <!> <div><!></div> <div class="flex flex-col gap-2 rounded border p-4"><span class="text-sm font-medium">Image Processing</span> <div class="flex items-center justify-between"><span class="text-sm">Grayscale</span> <input type="checkbox"/></div> <div class="flex items-center justify-between"><span class="text-sm">Contrast</span> <div class="flex items-center gap-2"><input type="range" min="0" max="1000" step="10" class="w-24"/> <span class="w-12 text-right text-sm"> </span></div></div> <div class="flex items-center justify-between"><span class="text-sm">Brightness</span> <div class="flex items-center gap-2"><input type="range" min="0" max="1000" step="10" class="w-24"/> <span class="w-12 text-right text-sm"> </span></div></div> <div class="flex items-center justify-between"><span class="text-sm">Blur</span> <div class="flex items-center gap-2"><input type="range" min="0" max="10" step="0.05" class="w-24"/> <span class="w-12 text-right text-sm"> </span></div></div> <div class="flex justify-end gap-2"><button type="button" class="text-sm text-muted-foreground hover:text-foreground">Reset Settings</button> <button type="button" class="text-sm text-red-500 hover:text-red-600">Clear Image</button></div></div>', 1), ga = g('<div class="flex flex-col gap-4"><div class="relative mx-auto flex aspect-square w-full max-w-md cursor-pointer flex-col items-center justify-center gap-2 rounded border-2 border-dashed p-8 transition-colors hover:border-primary hover:bg-muted/50" role="button" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-muted-foreground"><path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clip-rule="evenodd"></path></svg> <span class="text-sm text-muted-foreground">Click to upload or drag and drop an image</span> <span class="text-xs text-muted-foreground">PNG, JPG, or WebP</span> <input type="file" accept="image/png,image/jpeg,image/webp" class="hidden"/></div> <!></div>'), xa = g('<div class="flex flex-col"><!> <div class="flex"><button type="button"> </button> <button type="button"> </button></div> <!> <!></div>');
  function _a(C, y) {
    xt(y, true);
    let i = f(vt({
      grayscale: false,
      contrast: 100,
      brightness: 100,
      blur: 0,
      cameraSampleDelay: 100,
      cameraViewMode: "original",
      cameraMirror: false
    })), I = f("camera"), d = f(void 0), T = f(void 0), P = f(vt([])), m = f(void 0), M = null, R = f(false), Q = f(void 0), ne = f(void 0), fe = f(0), E = f(void 0), U = f(void 0), q = f(void 0), Y = f(void 0), S = f(void 0), W = f(void 0), me = f(false), ie = f(void 0), Se = f(false), Ce = f(void 0), ge = de(() => e(P).filter((t) => t.kind === "videoinput"));
    Dt(() => {
      Kt().then(() => {
        n(Se, true);
      }).catch((t) => {
        n(Ce, t, true);
      });
    }), we(() => {
      e(I) === "camera" && navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      }).then(() => navigator.mediaDevices.enumerateDevices()).then((t) => {
        n(P, t, true);
      }).catch((t) => {
        n(Q, t, true);
      });
    }), we(() => {
      var _a2;
      !e(m) && e(ge).length > 0 && n(m, (_a2 = e(ge)[0]) == null ? void 0 : _a2.deviceId, true);
    }), we(() => {
      e(m) && e(I) === "camera" && Fe();
    }), we(() => {
      e(I) === "upload" && oe();
    });
    function oe() {
      n(R, false), M == null ? void 0 : M.getTracks().forEach((t) => {
        t.stop();
      }), M = null;
    }
    function Fe() {
      oe(), navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: 512,
          height: 512,
          deviceId: e(m)
        }
      }).then((t) => {
        M = t, e(d) && (e(d).srcObject = M, e(d).onloadedmetadata = () => {
          var _a2;
          (_a2 = e(d)) == null ? void 0 : _a2.play(), ve();
        });
      }).catch((t) => {
        n(Q, t, true);
      });
    }
    async function K() {
      var _a2, _b, _c;
      if (!e(R)) return;
      if (!e(d) || !e(T) || e(d).videoWidth === 0 || e(d).videoHeight === 0) {
        setTimeout(K, e(i).cameraSampleDelay);
        return;
      }
      n(fe, e(fe) + 1);
      const t = e(T);
      t.width = e(d).videoWidth, t.height = e(d).videoHeight;
      const l = t.getContext("2d", {
        willReadFrequently: true
      });
      if (l) {
        l.filter = [
          e(i).grayscale ? "grayscale(1)" : "",
          `contrast(${e(i).contrast / 100})`,
          `brightness(${e(i).brightness / 100})`,
          `blur(${e(i).blur}px)`
        ].filter(Boolean).join(" "), l.drawImage(e(d), 0, 0, t.width, t.height);
        try {
          if (n(ne, await mt(t), true), (_a2 = e(ne)) == null ? void 0 : _a2.text) {
            (_b = e(d)) == null ? void 0 : _b.pause(), n(R, false), (_c = y.onScan) == null ? void 0 : _c.call(y, e(ne).text);
            return;
          }
        } catch (s) {
          console.error(s);
        }
        setTimeout(K, e(i).cameraSampleDelay);
      }
    }
    function ve() {
      var _a2;
      e(R) || (n(fe, 0), n(ne, void 0), (_a2 = e(d)) == null ? void 0 : _a2.play(), n(R, true), K());
    }
    function Be(t) {
      var _a2;
      const s = (_a2 = t.target.files) == null ? void 0 : _a2[0];
      if (s && (s.type === "image/png" || s.type === "image/jpeg" || s.type === "image/webp")) {
        const p = new FileReader();
        p.onload = () => {
          n(U, p.result, true), _e();
        }, p.readAsDataURL(s);
      }
    }
    function xe(t) {
      var _a2;
      t.preventDefault();
      const l = (_a2 = t.dataTransfer) == null ? void 0 : _a2.files[0];
      if (l && (l.type === "image/png" || l.type === "image/jpeg" || l.type === "image/webp")) {
        const s = new FileReader();
        s.onload = () => {
          n(U, s.result, true), _e();
        }, s.readAsDataURL(l);
      }
    }
    function De(t) {
      t.preventDefault();
    }
    async function _e() {
      if (!e(U)) return;
      const t = new Image(), l = new Promise((s) => {
        t.onload = s;
      });
      t.src = e(U), await l, n(E, t, true), await $e();
    }
    async function $e() {
      var _a2, _b, _c;
      if (!e(E) || !e(q)) return;
      n(S, void 0), n(W, void 0), n(me, true);
      const { width: t, height: l } = e(E), s = 500;
      let p = t, x = l;
      t > l ? l > s && (p = t * s / l, x = s) : t > s && (x = l * s / t, p = s), e(q).width = p, e(q).height = x;
      const h = e(q).getContext("2d");
      h && (h.filter = [
        e(i).grayscale ? "grayscale(1)" : "",
        `contrast(${e(i).contrast / 100})`,
        `brightness(${e(i).brightness / 100})`,
        `blur(${e(i).blur}px)`
      ].filter(Boolean).join(" "), h.drawImage(e(E), 0, 0, e(E).width, e(E).height, 0, 0, p, x));
      try {
        if (n(S, await mt(e(q), {
          includeRectCanvas: true
        }), true), ((_a2 = e(S)) == null ? void 0 : _a2.rectCanvas) && e(Y)) {
          e(Y).width = e(S).rectCanvas.width, e(Y).height = e(S).rectCanvas.height;
          const z = e(Y).getContext("2d");
          z == null ? void 0 : z.clearRect(0, 0, e(Y).width, e(Y).height), z == null ? void 0 : z.drawImage(e(S).rectCanvas, 0, 0);
        }
        ((_b = e(S)) == null ? void 0 : _b.text) && ((_c = y.onScan) == null ? void 0 : _c.call(y, e(S).text));
      } catch (z) {
        n(W, z, true);
      } finally {
        n(me, false);
      }
    }
    function Ve() {
      n(E, void 0), n(U, void 0), n(S, void 0), n(W, void 0), e(ie) && (e(ie).value = "");
    }
    function Te() {
      n(i, {
        grayscale: false,
        contrast: 100,
        brightness: 100,
        blur: 0,
        cameraSampleDelay: 100,
        cameraViewMode: "original",
        cameraMirror: false
      }, true);
    }
    we(() => (e(I) === "upload" && e(E) && (e(i).grayscale, e(i).contrast, e(i).brightness, e(i).blur, $e()), () => {
      oe();
    }));
    var v = xa(), u = r(v);
    {
      var F = (t) => {
        var l = ta(), s = o(r(l), 2), p = r(s);
        a(s), a(l), V(() => j(p, `Error loading scanner: ${e(Ce) ?? ""}`)), c(t, l);
      }, H = (t) => {
        var l = ke(), s = Z(l);
        {
          var p = (x) => {
            var h = aa();
            c(x, h);
          };
          w(s, (x) => {
            e(Se) || x(p);
          }, true);
        }
        c(t, l);
      };
      w(u, (t) => {
        e(Ce) ? t(F) : t(H, false);
      });
    }
    var ee = o(u, 2), B = r(ee);
    B.__click = () => n(I, "camera");
    var te = r(B, true);
    a(B);
    var X = o(B, 2);
    X.__click = () => n(I, "upload");
    var ae = r(X, true);
    a(X), a(ee);
    var re = o(ee, 2);
    {
      var N = (t) => {
        var l = ca(), s = r(l);
        {
          var p = (b) => {
            var k = ra(), L = o(r(k), 2), $ = r(L);
            a(L), a(k), V(() => j($, `Camera error: ${e(Q) ?? ""}`)), c(b, k);
          };
          w(s, (b) => {
            e(Q) && b(p);
          });
        }
        var x = o(s, 2), h = r(x);
        {
          var z = (b) => {
            var k = sa(), L = Z(k);
            L.muted = true, ye(L, (A) => n(d, A), () => e(d));
            var $ = o(L, 2);
            ye($, (A) => n(T, A), () => e(T)), c(b, k);
          }, le = (b) => {
            var k = ke(), L = Z(k);
            {
              var $ = (A) => {
                var G = na();
                c(A, G);
              };
              w(L, (A) => {
                e(Q) || A($);
              }, true);
            }
            c(b, k);
          };
          w(h, (b) => {
            e(m) ? b(z) : b(le, false);
          });
        }
        var ce = o(h, 2);
        {
          var O = (b) => {
            var k = oa(), L = r(k);
            $t(L, 21, () => e(ge), ($) => $.deviceId, ($, A) => {
              var G = ia(), Ue = r(G, true);
              a(G);
              var Ie = {};
              V(() => {
                j(Ue, e(A).label || "Camera"), Ie !== (Ie = e(A).deviceId) && (G.value = (G.__value = e(A).deviceId) ?? "");
              }), c($, G);
            }), a(L), a(k), It(L, () => e(m), ($) => n(m, $)), c(b, k);
          };
          w(ce, (b) => {
            e(ge).length > 1 && b(O);
          });
        }
        var J = o(ce, 2);
        {
          var ze = (b) => {
            var k = la(), L = o(r(k), 2), $ = r(L, true);
            a(L);
            var A = o(L, 2);
            A.__click = ve, a(k), V(() => j($, e(ne).text)), c(b, k);
          };
          w(J, (b) => {
            var _a2;
            ((_a2 = e(ne)) == null ? void 0 : _a2.text) && b(ze);
          });
        }
        a(x), a(l), c(t, l);
      };
      w(re, (t) => {
        e(I) === "camera" && t(N);
      });
    }
    var ue = o(re, 2);
    {
      var D = (t) => {
        var l = ga(), s = r(l);
        s.__click = () => {
          var _a2;
          return (_a2 = e(ie)) == null ? void 0 : _a2.click();
        }, s.__keydown = (z) => {
          var _a2;
          return z.key === "Enter" && ((_a2 = e(ie)) == null ? void 0 : _a2.click());
        };
        var p = o(r(s), 6);
        p.__change = Be, ye(p, (z) => n(ie, z), () => e(ie)), a(s);
        var x = o(s, 2);
        {
          var h = (z) => {
            var le = ma(), ce = Z(le), O = r(ce), J = o(r(O), 2), ze = r(J);
            a(J), a(O);
            var b = o(O, 2), k = o(r(b), 2), L = r(k);
            ye(L, (_) => n(q, _), () => e(q)), a(k), a(b), a(ce);
            var $ = o(ce, 2);
            {
              var A = (_) => {
                var se = da(), pe = o(r(se), 2), Le = r(pe);
                ye(Le, (We) => n(Y, We), () => e(Y)), a(pe), a(se), c(_, se);
              };
              w($, (_) => {
                var _a2;
                ((_a2 = e(S)) == null ? void 0 : _a2.rectCanvas) && _(A);
              });
            }
            var G = o($, 2), Ue = r(G);
            {
              var Ie = (_) => {
                var se = va(), pe = o(Z(se), 2), Le = r(pe);
                a(pe), V(() => j(Le, `Error: ${e(W) ?? ""}`)), c(_, se);
              }, wt = (_) => {
                var se = ke(), pe = Z(se);
                {
                  var Le = (he) => {
                    var Re = ua();
                    Ze(2), c(he, Re);
                  }, We = (he) => {
                    var Re = ke(), Lt = Z(Re);
                    {
                      var jt = (be) => {
                        var Ee = pa(), dt = o(Z(Ee), 2), St = r(dt, true);
                        a(dt), V(() => j(St, e(S).text)), c(be, Ee);
                      }, Mt = (be) => {
                        var Ee = fa();
                        Ze(2), c(be, Ee);
                      };
                      w(Lt, (be) => {
                        var _a2;
                        ((_a2 = e(S)) == null ? void 0 : _a2.text) ? be(jt) : be(Mt, false);
                      }, true);
                    }
                    c(he, Re);
                  };
                  w(pe, (he) => {
                    e(me) ? he(Le) : he(We, false);
                  }, true);
                }
                c(_, se);
              };
              w(Ue, (_) => {
                e(W) ? _(Ie) : _(wt, false);
              });
            }
            a(G);
            var et = o(G, 2), qe = o(r(et), 2), tt = o(r(qe), 2);
            Me(tt), a(qe);
            var Ye = o(qe, 2), at = o(r(Ye), 2), Xe = r(at);
            Me(Xe);
            var rt = o(Xe, 2), yt = r(rt);
            a(rt), a(at), a(Ye);
            var Oe = o(Ye, 2), st = o(r(Oe), 2), Ge = r(st);
            Me(Ge);
            var nt = o(Ge, 2), kt = r(nt);
            a(nt), a(st), a(Oe);
            var He = o(Oe, 2), it = o(r(He), 2), Qe = r(it);
            Me(Qe);
            var ot = o(Qe, 2), Ct = r(ot);
            a(ot), a(it), a(He);
            var lt = o(He, 2), ct = r(lt);
            ct.__click = Te;
            var zt = o(ct, 2);
            zt.__click = Ve, a(lt), a(et), V((_) => {
              var _a2;
              Rt(ze, "src", e(U)), Ne(G, 1, `flex items-center gap-2 rounded border p-4 ${e(W) ? "border-red-500 bg-red-500/10 text-red-500" : e(me) ? "text-muted-foreground" : ((_a2 = e(S)) == null ? void 0 : _a2.text) ? "border-green-500 bg-green-500/10 text-green-500" : "border-orange-500 bg-orange-500/10 text-orange-500"}`), j(yt, `${e(i).contrast ?? ""}%`), j(kt, `${e(i).brightness ?? ""}%`), j(Ct, `${_ ?? ""}px`);
            }, [
              () => e(i).blur.toFixed(2)
            ]), At(tt, () => e(i).grayscale, (_) => e(i).grayscale = _), Ae(Xe, () => e(i).contrast, (_) => e(i).contrast = _), Ae(Ge, () => e(i).brightness, (_) => e(i).brightness = _), Ae(Qe, () => e(i).blur, (_) => e(i).blur = _), c(z, le);
          };
          w(x, (z) => {
            e(U) && z(h);
          });
        }
        a(l), Pe("drop", s, xe), Pe("dragover", s, De), c(t, l);
      };
      w(ue, (t) => {
        e(I) === "upload" && t(D);
      });
    }
    a(v), V((t, l) => {
      Ne(B, 1, `flex-1 border px-4 py-1 text-left text-sm font-medium transition-colors ${e(I) === "camera" ? "border-primary bg-card-foreground text-black" : "bg-foreground text-black hover:bg-muted"}`), j(te, t), Ne(X, 1, `flex-1 border px-4 py-1 text-left text-sm font-medium transition-colors ${e(I) === "upload" ? "border-primary bg-card-foreground text-black" : "bg-foreground text-black hover:bg-muted"}`), j(ae, l);
    }, [
      () => Ot(),
      () => Qt()
    ]), c(C, v), _t();
  }
  gt([
    "click",
    "keydown",
    "change"
  ]);
  var ha = g('<div class="flex h-64 w-full items-center justify-center"><span class="text-muted-foreground">Loading preview...</span></div>'), ba = g('<div class="preview-container relative aspect-2/3 w-full max-w-90 flex-1 cursor-pointer svelte-j15r9w"><!></div>'), wa = g('<div class="preview-container relative aspect-2/3 w-full max-w-90 flex-1 overflow-visible px-3 svelte-j15r9w"><!></div>'), ya = g('<div class="flex h-64 w-full items-center justify-center"><span class="text-destructive">Could not load preview</span></div>'), ka = g('<p class="text-center text-sm text-destructive"> </p>'), Ca = g('<div class="flex w-full max-w-md flex-col items-center gap-4 overflow-visible"><!> <!> <div class="flex w-full gap-2"><button class="button-destructive flex-1"> </button> <button class="button flex-1"> </button></div></div>'), za = g('<p class="mt-2 text-center text-sm text-destructive"> </p>'), La = g('<p class="text-center text-sm text-destructive"> </p>'), ja = g('<div class="w-full max-w-md"><!> <!> <div class="mt-4 flex flex-col gap-2"><div class="flex items-center gap-2"><div class="h-px flex-1 bg-border"></div> <span class="text-xs text-muted-foreground"> </span> <div class="h-px flex-1 bg-border"></div></div> <form class="flex gap-2"><input type="text" placeholder="https://..." class="flex-1 rounded border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"/> <button type="submit" class="button h-full w-auto"> </button></form> <!></div></div>'), Ma = g('<div class="pointer-events-auto col-start-2 row-span-1 row-start-2 flex scrollbar-none flex-col items-center justify-center gap-4 overflow-x-visible overflow-y-auto px-3 md:row-span-2 md:row-start-2 md:justify-start md:py-4"><!></div>');
  Oa = function(C, y) {
    xt(y, true);
    const i = Pt(), I = de(() => {
      const v = pt.url.searchParams.get("type"), u = pt.url.searchParams.get("id");
      return v && u && (v === "card" || v === "deck") ? {
        type: v,
        id: u
      } : null;
    }), d = de(() => {
      var _a2;
      return ((_a2 = e(I)) == null ? void 0 : _a2.type) ?? null;
    }), T = de(() => {
      var _a2;
      return ((_a2 = e(I)) == null ? void 0 : _a2.id) ?? null;
    }), P = new ut(Ft, () => e(d) === "card" ? e(T) : void 0, {
      resolve: {
        thumbnails: true,
        activity: true
      }
    }), m = new ut(Bt, () => e(d) === "deck" ? e(T) : void 0, {
      resolve: {
        cards: {
          $each: {
            thumbnails: true,
            activity: true
          }
        },
        activity: true
      }
    });
    let M = f(false), R = f(null);
    async function Q() {
      var _a2, _b, _c;
      if (!(!((_a2 = i.me.current) == null ? void 0 : _a2.$isLoaded) || !e(d) || !e(T))) {
        n(M, true), n(R, null);
        try {
          const v = e(d) === "card" ? P.current : m.current;
          (v == null ? void 0 : v.$isLoaded) && (i.me.current.acceptInvite(v.$jazz.owner.$jazz.id, v.shareSecret), e(d) === "card" && ((_b = P.current) == null ? void 0 : _b.$isLoaded) ? (i.me.current.profile.cards.$jazz.push(P.current), je(`/deck/${P.current.$jazz.id}`)) : e(d) === "deck" && ((_c = m.current) == null ? void 0 : _c.$isLoaded) && (i.me.current.profile.decks.$jazz.push(m.current), je(`/deck/${m.current.$jazz.id}`)));
        } catch (v) {
          n(R, v instanceof Error ? v.message : "Failed to accept invite", true);
        } finally {
          n(M, false);
        }
      }
    }
    function ne() {
      n(R, null), je("/add", {
        replaceState: true
      });
    }
    function fe(v) {
      let u;
      try {
        u = new URL(v);
      } catch {
        return {
          success: false,
          error: "Invalid URL format"
        };
      }
      const F = u.searchParams.get("type"), H = u.searchParams.get("id");
      return F ? F !== "card" && F !== "deck" ? {
        success: false,
        error: 'Type must be "card" or "deck"'
      } : H ? {
        success: true,
        type: F,
        id: H
      } : {
        success: false,
        error: "Missing id parameter"
      } : {
        success: false,
        error: "Missing type parameter"
      };
    }
    const E = 8, U = new Vt("(pointer: coarse) and (hover: none)");
    let q = f(void 0), Y = f(false), S = f(0), W = f(0);
    we(() => {
      if (U.current) return i.subscribeOrientation();
    });
    const me = de(() => U.current ? i.getTilt(E).tiltX : e(S)), ie = de(() => U.current ? i.getTilt(E).tiltY : e(W));
    function Se(v) {
      if (U.current || !e(q)) return;
      const u = e(q).getBoundingClientRect(), F = v.clientX - u.x, H = v.clientY - u.y, ee = F / u.width - 0.5, B = H / u.height - 0.5, te = Math.max(-1, Math.min(1, ee * 2)), X = Math.max(-1, Math.min(1, B * 2));
      n(S, X * -1 * E), n(W, te * E);
    }
    function Ce() {
      n(S, 0), n(W, 0);
    }
    function ge() {
      n(Y, !e(Y));
    }
    let oe = f(null);
    function Fe(v) {
      n(oe, null);
      const u = fe(v);
      u.success ? je(`/add?type=${u.type}&id=${u.id}`, {
        replaceState: true
      }) : n(oe, u.error, true);
    }
    let K = f(""), ve = f(null);
    function Be() {
      n(ve, null);
      const v = e(K).trim();
      if (!v) return;
      const u = fe(v);
      u.success ? (n(K, ""), je(`/add?type=${u.type}&id=${u.id}`, {
        replaceState: true
      })) : n(ve, u.error, true);
    }
    const xe = de(() => e(d) !== null && e(T) !== null), De = de(() => {
      var _a2, _b;
      return e(xe) && (e(d) === "card" && !((_a2 = P.current) == null ? void 0 : _a2.$isLoaded) || e(d) === "deck" && !((_b = m.current) == null ? void 0 : _b.$isLoaded));
    });
    Et(() => [
      e(xe),
      m.current
    ], () => {
      e(xe) ? (i.title = `${e(d) === "card" ? P.current.$isLoaded ? P.current.name : "" : m.current.$isLoaded ? m.current.name : ""}`, i.subtitle = e(d) === "card" ? "" : m.current.$isLoaded ? m.current.description ?? "" : "") : (i.title = ft(), i.subtitle = "");
    });
    var _e = Ma(), $e = r(_e);
    {
      var Ve = (v) => {
        var u = Ca(), F = r(u);
        {
          var H = (D) => {
            var t = ha();
            c(D, t);
          }, ee = (D) => {
            var t = ke(), l = Z(t);
            {
              var s = (x) => {
                var h = ba();
                h.__pointermove = Se, h.__click = ge;
                var z = r(h);
                Tt(z, {
                  get card() {
                    return P.current;
                  },
                  index: 0,
                  progress: 0,
                  direction: 1,
                  totalCards: 1,
                  get tiltX() {
                    return e(me);
                  },
                  get tiltY() {
                    return e(ie);
                  },
                  tiltRange: E,
                  get isFlipped() {
                    return e(Y);
                  }
                }), a(h), ye(h, (le) => n(q, le), () => e(q)), Pe("pointerleave", h, Ce), c(x, h);
              }, p = (x) => {
                var h = ke(), z = Z(h);
                {
                  var le = (O) => {
                    var J = wa(), ze = r(J);
                    Ut(ze, {
                      tiltRange: E,
                      get deck() {
                        return m.current;
                      },
                      aligned: true,
                      showCompleteButton: false
                    }), a(J), c(O, J);
                  }, ce = (O) => {
                    var J = ya();
                    c(O, J);
                  };
                  w(z, (O) => {
                    var _a2;
                    e(d) === "deck" && ((_a2 = m.current) == null ? void 0 : _a2.$isLoaded) ? O(le) : O(ce, false);
                  }, true);
                }
                c(x, h);
              };
              w(l, (x) => {
                var _a2;
                e(d) === "card" && ((_a2 = P.current) == null ? void 0 : _a2.$isLoaded) ? x(s) : x(p, false);
              }, true);
            }
            c(D, t);
          };
          w(F, (D) => {
            e(De) ? D(H) : D(ee, false);
          });
        }
        var B = o(F, 2);
        {
          var te = (D) => {
            var t = ka(), l = r(t, true);
            a(t), V(() => j(l, e(R))), c(D, t);
          };
          w(B, (D) => {
            e(R) && D(te);
          });
        }
        var X = o(B, 2), ae = r(X);
        ae.__click = ne;
        var re = r(ae, true);
        a(ae);
        var N = o(ae, 2);
        N.__click = Q;
        var ue = r(N, true);
        a(N), a(X), a(u), V((D) => {
          ae.disabled = e(M), j(re, D), N.disabled = e(M) || e(De), j(ue, e(M) ? "Adding..." : "Add to Collection");
        }, [
          () => qt()
        ]), c(v, u);
      }, Te = (v) => {
        var u = ja(), F = r(u);
        _a(F, {
          onScan: Fe
        });
        var H = o(F, 2);
        {
          var ee = (s) => {
            var p = za(), x = r(p, true);
            a(p), V(() => j(x, e(oe))), c(s, p);
          };
          w(H, (s) => {
            e(oe) && s(ee);
          });
        }
        var B = o(H, 2), te = r(B), X = o(r(te), 2), ae = r(X, true);
        a(X), Ze(2), a(te);
        var re = o(te, 2), N = r(re);
        Me(N);
        var ue = o(N, 2), D = r(ue, true);
        a(ue), a(re);
        var t = o(re, 2);
        {
          var l = (s) => {
            var p = La(), x = r(p, true);
            a(p), V(() => j(x, e(ve))), c(s, p);
          };
          w(t, (s) => {
            e(ve) && s(l);
          });
        }
        a(B), a(u), V((s, p, x) => {
          j(ae, s), ue.disabled = p, j(D, x);
        }, [
          () => Jt(),
          () => !e(K).trim(),
          () => ft()
        ]), Pe("submit", re, (s) => {
          s.preventDefault(), Be();
        }), Ae(N, () => e(K), (s) => n(K, s)), c(v, u);
      };
      w($e, (v) => {
        e(xe) ? v(Ve) : v(Te, false);
      });
    }
    a(_e), c(C, _e), _t();
  };
  gt([
    "pointermove",
    "click"
  ]);
})();
export {
  __tla,
  Oa as component
};
