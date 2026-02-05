var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
import "./DsnmJJEf.js";
import { b2 as zi, bE as Ri, bI as Ei, bk as Pn, t as se, b as C, bJ as Ti, u as Xe, g as c, h as J, Z as x, _ as H, be as Ii, X as Qr, p as Ye, f as j, d as k, r as S, s as N, c as Ke, a5 as ke, m as dr, ag as Tr, e as De, a as oe, Y as Sa, bK as Pi, bj as Mi, al as Mn, bh as lt, j as Oi, F as ji, b8 as Ui, b7 as nn, b9 as Li, bi as Ba, aj as ia, ai as sa } from "./Cerututf.js";
import { s as Re, a as yt, o as On, b as jn } from "./C-CTaGP6.js";
import { i as ye } from "./DIL41Api.js";
import { s as bt, d as Ir, A as Bi, w as Ut, g as _t, b as Zr, o as Pr, f as Mr, a as Di, c as mt, S as Hi, B as oa, q as Ni, r as Vi, C as Zi } from "./CD9opEPd.js";
import { p as O, r as kt, b as vt, s as Da, c as Ue } from "./IOctRI-n.js";
import { c as sn, s as Fi } from "./XZEhH6UG.js";
import { F as qi, g as Wi, d as ca, h as Gi, e as Xi, f as Yi, a as Ki } from "./BPNiD34A.js";
import { f as $i, h as Ji, c as Un, S as Qi, a as es, r as ts, s as rs, b as as, e as on, d as ns } from "./BjdZBxxB.js";
import { g as la } from "./C1832kSX.js";
import { E as Dr, o as is, n as cn, c as ss, e as os, s as ua, F as er, I as da, a as Ur, T as cs, b as ls, d as us, _ as ln } from "./yShKUf46.js";
import { a as ds } from "./Dp3AfHhX.js";
import { g as St } from "./CsOUNaBs.js";
import { c as hs } from "./DxXagp48.js";
import { _ as un } from "./PPVm8Dsz.js";
import { a as fs } from "./C_KZSe7P.js";
let xf;
let __tla = (async () => {
  var _e, _t2, _a2, _e2, _e3, _t3, _e4, _t4, _e5, _t5, _a3, _n2, _r2, _s2, _i2, _e6, _t6, _a4, _n3, _r3, _s3, _i3, _c2, _l2, _u2, _d2, _h2, _f, _o2, _e7, _t7, _a5, _n4, _r4, _s4, _i4;
  const ps = [];
  function ms(t, e = false, r = false) {
    return Hr(t, /* @__PURE__ */ new Map(), "", ps, null, r);
  }
  function Hr(t, e, r, a, i = null, n = false) {
    if (typeof t == "object" && t !== null) {
      var s = e.get(t);
      if (s !== void 0) return s;
      if (t instanceof Map) return new Map(t);
      if (t instanceof Set) return new Set(t);
      if (zi(t)) {
        var o = Array(t.length);
        e.set(t, o), i !== null && e.set(i, o);
        for (var l = 0; l < t.length; l += 1) {
          var u = t[l];
          l in t && (o[l] = Hr(u, e, r, a, null, n));
        }
        return o;
      }
      if (Ri(t) === Ei) {
        o = {}, e.set(t, o), i !== null && e.set(i, o);
        for (var d in t) o[d] = Hr(t[d], e, r, a, null, n);
        return o;
      }
      if (t instanceof Date) return structuredClone(t);
      if (typeof t.toJSON == "function" && !n) return Hr(t.toJSON(), e, r, a, t);
    }
    if (t instanceof EventTarget) return t;
    try {
      return structuredClone(t);
    } catch {
      return t;
    }
  }
  var dn = $i({
    createFileStreamFromSource: vs,
    getImageSize: gs,
    getPlaceholderBase64: _s,
    resize: bs
  }, (t) => {
    if (typeof t == "string") throw new Error("createImage(string) is not supported on this platform");
  });
  async function vs(t, e) {
    return qi.createFromBlob(t, e);
  }
  function Ha(t) {
    return new Promise((e, r) => {
      const a = new Image();
      a.onload = () => {
        e(a), URL.revokeObjectURL(a.src);
      }, a.onerror = () => {
        r(new Error("Failed to load image")), URL.revokeObjectURL(a.src);
      }, a.src = URL.createObjectURL(t);
    });
  }
  async function gs(t) {
    const e = await Ha(t);
    return {
      width: e.width,
      height: e.height
    };
  }
  async function _s(t) {
    const e = await Ha(t), { width: r, height: a } = ys(e.width, e.height, 8), i = document.createElement("canvas");
    i.width = r, i.height = a;
    const n = i.getContext("2d");
    if (!n) throw new Error("Failed to get context");
    return n.drawImage(e, 0, 0, r, a), i.toDataURL("image/png");
  }
  var ys = (t, e, r) => {
    if (t <= r && e <= r) return {
      width: t,
      height: e
    };
    const a = t / e;
    return t >= e ? {
      width: r,
      height: Math.round(r / a)
    } : {
      width: Math.round(r * a),
      height: r
    };
  };
  async function bs(t, e, r) {
    const a = t.type, i = await Ha(t), n = document.createElement("canvas");
    n.width = e, n.height = r;
    const s = n.getContext("2d");
    if (!s) throw new Error("Failed to get context");
    return s.drawImage(i, 0, 0, e, r), new Promise((o, l) => {
      n.toBlob((u) => {
        if (!u) {
          l(new Error("Failed to convert canvas to blob"));
          return;
        }
        o(u);
      }, a, 0.8);
    });
  }
  var xs = Pn('<svg width="15px" height="15px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g fill="none" class="nc-icon-wrapper" stroke-linejoin="miter" stroke-linecap="butt"><path d="M3 7H3.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M3 11H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 15H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 19H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 23H3.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M3 27H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 7H7.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 11H7.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 15H7.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 19H7.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 23H7.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 27H7.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 7H11.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 11H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 15H11.01" stroke="rgba(197, 216, 253, 0.5215686274509804)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M11 19H11.01" stroke="rgba(197, 216, 253, 0.5215686274509804)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M11 23H11.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M10.99 27H11" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 7H15.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 11H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 15H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 19H15.01" stroke="rgba(197, 216, 253, 0.5215686274509804)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M15 23H15.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 27H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 7H19.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 11H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 15H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 19H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 23H19.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 27H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 7H23.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 11H23.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 3H7.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M3 3H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 3H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 3H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 3H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 3H23.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 3H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 15H23.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 19H23.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 23H23.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 27H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 27H23.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 7H27.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 11H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 15H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 19H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 23H27.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path></g></svg>');
  function ha(t, e) {
    var r = xs();
    se(() => bt(r, 0, Ir(e.class))), C(t, r);
  }
  var ws = Pn('<svg width="15px" height="15px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g fill="none" class="nc-icon-wrapper" stroke-linejoin="miter" stroke-linecap="butt"><path d="M3 7H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 11H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 15H3.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M3 19H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 23H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 27H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 7H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 11H7.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 15H7.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 19H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 23H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 27H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 7H11.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 11H11.01" stroke="rgba(197, 216, 253, 0.52)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M11 15H11.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 19H11.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 23H11.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 27H11.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 7H15.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 11H15.01" stroke="rgba(197, 216, 253, 0.52)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M15 15H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 19H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 23H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 27H15.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 7H19.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 11H19.01" stroke="rgba(197, 216, 253, 0.52)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M19 15H19.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 19H19.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 23H19.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 27H19.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 7H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 11H23.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 3H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 3H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 3H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 3H15.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 3H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 3H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 3H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 15H23.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 19H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 23H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 27H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 27H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 7H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 11H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 15H27.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 19H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 23H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path></g></svg>');
  function fa(t, e) {
    var r = ws();
    se(() => bt(r, 0, Ir(e.class))), C(t, r);
  }
  const ks = () => "Center", Ss = () => "\u30BB\u30F3\u30FC\u30BF", Cs = (t = {}, e = {}) => (e.locale ?? St()) === "en" ? ks() : Ss(), As = () => "Crop", zs = () => "\u30C8\u30EA\u30E0", Rs = (t = {}, e = {}) => (e.locale ?? St()) === "en" ? As() : zs(), Es = () => "Fill", Ts = () => "\u30D5\u30A3\u30EB", Is = (t = {}, e = {}) => (e.locale ?? St()) === "en" ? Es() : Ts(), Ps = () => "Dither", Ms = () => "\u30C7\u30A3\u30B6", Os = (t = {}, e = {}) => (e.locale ?? St()) === "en" ? Ps() : Ms(), js = () => "Save Card", Us = () => "\u30AB\u30FC\u30C9\u3092\u4FDD\u5B58", Ls = (t = {}, e = {}) => (e.locale ?? St()) === "en" ? js() : Us(), Bs = () => "Big Stretch", Ds = () => "\u5927\u304D\u306A\u30B9\u30C8\u30EC\u30C3\u30C1", Hs = (t = {}, e = {}) => (e.locale ?? St()) === "en" ? Bs() : Ds(), Ns = () => "Neck, Back, etc.", Vs = () => "\u9996, \u80CC\u4E2D, \u301C", Zs = (t = {}, e = {}) => (e.locale ?? St()) === "en" ? Ns() : Vs(), Fs = () => "Additional notes on how the stretch is done", qs = () => "\u30B9\u30C8\u30EC\u30C3\u30C1\u3092\u3069\u3046\u3084\u3063\u305F\u3089\u3044\u3044", Ws = (t = {}, e = {}) => (e.locale ?? St()) === "en" ? Fs() : qs();
  function Gs(t) {
    return typeof t == "function";
  }
  function Ln(t, e) {
    if (Gs(t)) {
      const a = t();
      return a === void 0 ? e : a;
    }
    return t === void 0 ? e : t;
  }
  function Xs(t, e, r = {}) {
    const { window: a = Bi } = r;
    let i;
    const n = J(() => {
      const o = Ln(t);
      return new Set(o ? Array.isArray(o) ? o : [
        o
      ] : []);
    }), s = Ti(() => {
      Xe(() => {
        if (!(!c(n).size || !a)) {
          i = new a.ResizeObserver(e);
          for (const o of c(n)) i.observe(o, r);
          return () => {
            i == null ? void 0 : i.disconnect(), i = void 0;
          };
        }
      });
    });
    return Xe(() => s), {
      stop: s
    };
  }
  function Ys(t, e = {}) {
    const { immediate: r = true, immediateCallback: a = false, callback: i } = e;
    let n = H(null), s = H(0);
    const o = J(() => Ln(t)), l = J(() => c(n) !== null);
    function u() {
      Ii(s), i == null ? void 0 : i(c(s));
    }
    function d() {
      x(n, setInterval(u, c(o)), true);
    }
    const h = () => {
      c(n) !== null && (clearInterval(c(n)), x(n, null));
    }, f = () => {
      c(n) === null && (a && u(), d());
    };
    return r && f(), Ut(() => c(o), () => {
      c(l) && (h(), d());
    }), Xe(() => h), {
      pause: h,
      resume: f,
      reset: () => x(s, 0),
      get isActive() {
        return c(l);
      },
      get counter() {
        return c(s);
      }
    };
  }
  var Ks = j('<div class="flex place-items-center gap-0.5 rounded-md bg-foreground p-1 text-[14px] font-normal text-black uppercase ring-offset-background transition-all hover:cursor-default aria-selected:bg-secondary/90 aria-selected:ring-2 aria-selected:ring-ring aria-selected:ring-offset-2"><span class="inline align-baseline text-box-trim!"> </span> <button class="cursor-pointer" type="button" aria-label="remove"><!></button></div>');
  function $s(t, e) {
    Ye(e, true);
    var r = Ks(), a = k(r), i = k(a, true);
    S(a);
    var n = N(a, 2);
    n.__click = () => e.onDelete(e.value);
    var s = k(n);
    Dr(s, {
      class: "size-3.5"
    }), S(n), S(r), se(() => {
      _t(r, "aria-selected", e.active), Re(i, e.value), n.disabled = e.disabled;
    }), C(t, r), Ke();
  }
  Qr([
    "click"
  ]);
  var Js = j('<div role="textbox" tabindex="-1"><!> <input/></div>');
  function Qs(t, e) {
    Ye(e, true);
    const r = (E, Q) => {
      const ae = E.trim();
      if (ae.length !== 0 && !Q.find((T) => ae === T)) return ae;
    };
    let a = O(e, "value", 31, () => ke([])), i = O(e, "disabled", 3, false), n = O(e, "validate", 3, r), s = kt(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "value",
      "placeholder",
      "class",
      "disabled",
      "validate",
      "onValueChange"
    ]), o = H(""), l = H(void 0), u = H(false), d = H(false);
    Xe(() => {
      c(o), dr(() => {
        x(u, false);
      });
    });
    const h = 5, f = () => {
      var _a6;
      if (c(d)) return;
      if (a().length >= h) {
        x(u, true);
        return;
      }
      const E = n()(c(o), a());
      if (!E) {
        x(u, true);
        return;
      }
      a([
        ...a(),
        E
      ]), (_a6 = e.onValueChange) == null ? void 0 : _a6.call(e, a()), x(o, "");
    }, p = () => {
      x(d, true);
    }, y = () => {
      x(d, false);
    }, g = (E) => {
      const Q = E.target;
      if (E.key === "Enter") {
        if (E.preventDefault(), c(d)) return;
        f();
        return;
      }
      const ae = Q.selectionStart === 0 && Q.selectionEnd === 0;
      let T = true;
      if (E.key === "Backspace" && ae) {
        if (E.preventDefault(), c(l) !== void 0) {
          R(c(l));
          const Oe = c(l) - 1;
          Oe < 0 ? x(l, void 0) : x(l, Oe);
        } else x(l, a().length - 1);
        T = false;
      }
      if (E.key === "Delete" && ae && c(o).length === 0 && c(l) !== void 0 && (E.preventDefault(), R(c(l)), a().length === 0 && x(l, void 0), T = false), ae) {
        if (E.key === "ArrowLeft") {
          if (c(l) !== void 0) {
            const Oe = c(l) - 1;
            Oe < 0 ? x(l, 0) : x(l, Oe);
          } else x(l, a().length - 1);
          T = false;
        }
        if (c(o).length === 0 && E.key === "ArrowRight" && c(l) !== void 0) {
          const Oe = c(l) + 1;
          Oe > a().length - 1 ? x(l, void 0) : x(l, Oe), T = false;
        }
      }
      T && x(l, void 0);
    }, _ = (E) => {
      const Q = a().indexOf(E);
      Q !== -1 && R(Q);
    }, R = (E) => {
      var _a6;
      a([
        ...a().slice(0, E),
        ...a().slice(E + 1)
      ]), (_a6 = e.onValueChange) == null ? void 0 : _a6.call(e, a());
    }, M = () => {
      x(l, void 0);
    };
    let V;
    const L = () => {
      V == null ? void 0 : V.focus();
    };
    var Z = Js();
    Z.__click = L;
    var de = k(Z);
    Zr(de, 18, a, (E) => E, (E, Q, ae) => {
      {
        let T = J(() => c(ae) === c(l));
        $s(E, {
          get value() {
            return Q;
          },
          get disabled() {
            return i();
          },
          onDelete: _,
          get active() {
            return c(T);
          }
        });
      }
    });
    var I = N(de, 2);
    Pr(I, () => ({
      ...s,
      onblur: M,
      oncompositionstart: p,
      oncompositionend: y,
      disabled: i(),
      placeholder: e.placeholder,
      "data-invalid": c(u),
      onkeydown: g,
      class: "field-sizing-content min-h-4 w-auto shrink basis-0 border-none bg-transparent px-2 text-right text-base text-black outline-hidden placeholder:text-muted-foreground focus:outline-hidden disabled:cursor-not-allowed data-[invalid=true]:text-red-500"
    }), void 0, void 0, void 0, void 0, true), vt(I, (E) => V = E, () => V), S(Z), se((E) => {
      bt(Z, 1, E), _t(Z, "aria-disabled", i());
    }, [
      () => Ir(Mr("flex w-full flex-wrap place-items-center justify-end gap-0.5 rounded-md py-2 pr-2 selection:bg-primary disabled:opacity-50 aria-disabled:cursor-not-allowed", e.class))
    ]), ds(I, () => c(o), (E) => x(o, E)), C(t, Z), Ke();
  }
  Qr([
    "click"
  ]);
  var eo = Object.create, Bn = Object.defineProperty, to = Object.getOwnPropertyDescriptor, Dn = Object.getOwnPropertyNames, ro = Object.getPrototypeOf, ao = Object.prototype.hasOwnProperty, Na = (t, e) => function() {
    return e || (0, t[Dn(t)[0]])((e = {
      exports: {}
    }).exports, e), e.exports;
  }, no = (t, e, r, a) => {
    if (e && typeof e == "object" || typeof e == "function") for (let i of Dn(e)) !ao.call(t, i) && i !== r && Bn(t, i, {
      get: () => e[i],
      enumerable: !(a = to(e, i)) || a.enumerable
    });
    return t;
  }, ea = (t, e, r) => (r = t != null ? eo(ro(t)) : {}, no(!t || !t.__esModule ? Bn(r, "default", {
    value: t,
    enumerable: true
  }) : r, t)), io = Na({
    "../../node_modules/.pnpm/iota-array@1.0.0/node_modules/iota-array/iota.js"(t, e) {
      function r(a) {
        for (var i = new Array(a), n = 0; n < a; ++n) i[n] = n;
        return i;
      }
      e.exports = r;
    }
  }), so = Na({
    "../../node_modules/.pnpm/is-buffer@1.1.6/node_modules/is-buffer/index.js"(t, e) {
      e.exports = function(i) {
        return i != null && (r(i) || a(i) || !!i._isBuffer);
      };
      function r(i) {
        return !!i.constructor && typeof i.constructor.isBuffer == "function" && i.constructor.isBuffer(i);
      }
      function a(i) {
        return typeof i.readFloatLE == "function" && typeof i.slice == "function" && r(i.slice(0, 0));
      }
    }
  }), ta = Na({
    "../../node_modules/.pnpm/ndarray@1.0.19/node_modules/ndarray/ndarray.js"(t, e) {
      var r = io(), a = so(), i = typeof Float64Array < "u";
      function n(h, f) {
        return h[0] - f[0];
      }
      function s() {
        var h = this.stride, f = new Array(h.length), p;
        for (p = 0; p < f.length; ++p) f[p] = [
          Math.abs(h[p]),
          p
        ];
        f.sort(n);
        var y = new Array(f.length);
        for (p = 0; p < y.length; ++p) y[p] = f[p][1];
        return y;
      }
      function o(h, f) {
        var p = [
          "View",
          f,
          "d",
          h
        ].join("");
        f < 0 && (p = "View_Nil" + h);
        var y = h === "generic";
        if (f === -1) {
          var g = "function " + p + "(a){this.data=a;};var proto=" + p + ".prototype;proto.dtype='" + h + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + p + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + p + "(a){return new " + p + "(a);}", ae = new Function(g);
          return ae();
        } else if (f === 0) {
          var g = "function " + p + "(a,d) {this.data = a;this.offset = d};var proto=" + p + ".prototype;proto.dtype='" + h + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + p + "_copy() {return new " + p + "(this.data,this.offset)};proto.pick=function " + p + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + p + "_get(){return " + (y ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + p + "_set(v){return " + (y ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + p + "(a,b,c,d){return new " + p + "(a,d)}", ae = new Function("TrivialArray", g);
          return ae(u[h][0]);
        }
        var g = [
          "'use strict'"
        ], _ = r(f), R = _.map(function(T) {
          return "i" + T;
        }), M = "this.offset+" + _.map(function(T) {
          return "this.stride[" + T + "]*i" + T;
        }).join("+"), V = _.map(function(T) {
          return "b" + T;
        }).join(","), L = _.map(function(T) {
          return "c" + T;
        }).join(",");
        g.push("function " + p + "(a," + V + "," + L + ",d){this.data=a", "this.shape=[" + V + "]", "this.stride=[" + L + "]", "this.offset=d|0}", "var proto=" + p + ".prototype", "proto.dtype='" + h + "'", "proto.dimension=" + f), g.push("Object.defineProperty(proto,'size',{get:function " + p + "_size(){return " + _.map(function(T) {
          return "this.shape[" + T + "]";
        }).join("*"), "}})"), f === 1 ? g.push("proto.order=[0]") : (g.push("Object.defineProperty(proto,'order',{get:"), f < 4 ? (g.push("function " + p + "_order(){"), f === 2 ? g.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : f === 3 && g.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : g.push("ORDER})")), g.push("proto.set=function " + p + "_set(" + R.join(",") + ",v){"), y ? g.push("return this.data.set(" + M + ",v)}") : g.push("return this.data[" + M + "]=v}"), g.push("proto.get=function " + p + "_get(" + R.join(",") + "){"), y ? g.push("return this.data.get(" + M + ")}") : g.push("return this.data[" + M + "]}"), g.push("proto.index=function " + p + "_index(", R.join(), "){return " + M + "}"), g.push("proto.hi=function " + p + "_hi(" + R.join(",") + "){return new " + p + "(this.data," + _.map(function(T) {
          return [
            "(typeof i",
            T,
            "!=='number'||i",
            T,
            "<0)?this.shape[",
            T,
            "]:i",
            T,
            "|0"
          ].join("");
        }).join(",") + "," + _.map(function(T) {
          return "this.stride[" + T + "]";
        }).join(",") + ",this.offset)}");
        var Z = _.map(function(T) {
          return "a" + T + "=this.shape[" + T + "]";
        }), de = _.map(function(T) {
          return "c" + T + "=this.stride[" + T + "]";
        });
        g.push("proto.lo=function " + p + "_lo(" + R.join(",") + "){var b=this.offset,d=0," + Z.join(",") + "," + de.join(","));
        for (var I = 0; I < f; ++I) g.push("if(typeof i" + I + "==='number'&&i" + I + ">=0){d=i" + I + "|0;b+=c" + I + "*d;a" + I + "-=d}");
        g.push("return new " + p + "(this.data," + _.map(function(T) {
          return "a" + T;
        }).join(",") + "," + _.map(function(T) {
          return "c" + T;
        }).join(",") + ",b)}"), g.push("proto.step=function " + p + "_step(" + R.join(",") + "){var " + _.map(function(T) {
          return "a" + T + "=this.shape[" + T + "]";
        }).join(",") + "," + _.map(function(T) {
          return "b" + T + "=this.stride[" + T + "]";
        }).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
        for (var I = 0; I < f; ++I) g.push("if(typeof i" + I + "==='number'){d=i" + I + "|0;if(d<0){c+=b" + I + "*(a" + I + "-1);a" + I + "=ceil(-a" + I + "/d)}else{a" + I + "=ceil(a" + I + "/d)}b" + I + "*=d}");
        g.push("return new " + p + "(this.data," + _.map(function(T) {
          return "a" + T;
        }).join(",") + "," + _.map(function(T) {
          return "b" + T;
        }).join(",") + ",c)}");
        for (var E = new Array(f), Q = new Array(f), I = 0; I < f; ++I) E[I] = "a[i" + I + "]", Q[I] = "b[i" + I + "]";
        g.push("proto.transpose=function " + p + "_transpose(" + R + "){" + R.map(function(T, Oe) {
          return T + "=(" + T + "===undefined?" + Oe + ":" + T + "|0)";
        }).join(";"), "var a=this.shape,b=this.stride;return new " + p + "(this.data," + E.join(",") + "," + Q.join(",") + ",this.offset)}"), g.push("proto.pick=function " + p + "_pick(" + R + "){var a=[],b=[],c=this.offset");
        for (var I = 0; I < f; ++I) g.push("if(typeof i" + I + "==='number'&&i" + I + ">=0){c=(c+this.stride[" + I + "]*i" + I + ")|0}else{a.push(this.shape[" + I + "]);b.push(this.stride[" + I + "])}");
        g.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), g.push("return function construct_" + p + "(data,shape,stride,offset){return new " + p + "(data," + _.map(function(T) {
          return "shape[" + T + "]";
        }).join(",") + "," + _.map(function(T) {
          return "stride[" + T + "]";
        }).join(",") + ",offset)}");
        var ae = new Function("CTOR_LIST", "ORDER", g.join(`
`));
        return ae(u[h], s);
      }
      function l(h) {
        if (a(h)) return "buffer";
        if (i) switch (Object.prototype.toString.call(h)) {
          case "[object Float64Array]":
            return "float64";
          case "[object Float32Array]":
            return "float32";
          case "[object Int8Array]":
            return "int8";
          case "[object Int16Array]":
            return "int16";
          case "[object Int32Array]":
            return "int32";
          case "[object Uint8Array]":
            return "uint8";
          case "[object Uint16Array]":
            return "uint16";
          case "[object Uint32Array]":
            return "uint32";
          case "[object Uint8ClampedArray]":
            return "uint8_clamped";
          case "[object BigInt64Array]":
            return "bigint64";
          case "[object BigUint64Array]":
            return "biguint64";
        }
        return Array.isArray(h) ? "array" : "generic";
      }
      var u = {
        float32: [],
        float64: [],
        int8: [],
        int16: [],
        int32: [],
        uint8: [],
        uint16: [],
        uint32: [],
        array: [],
        uint8_clamped: [],
        bigint64: [],
        biguint64: [],
        buffer: [],
        generic: []
      };
      function d(h, f, p, y) {
        if (h === void 0) {
          var L = u.array[0];
          return L([]);
        } else typeof h == "number" && (h = [
          h
        ]);
        f === void 0 && (f = [
          h.length
        ]);
        var g = f.length;
        if (p === void 0) {
          p = new Array(g);
          for (var _ = g - 1, R = 1; _ >= 0; --_) p[_] = R, R *= f[_];
        }
        if (y === void 0) {
          y = 0;
          for (var _ = 0; _ < g; ++_) p[_] < 0 && (y -= (f[_] - 1) * p[_]);
        }
        for (var M = l(h), V = u[M]; V.length <= g + 1; ) V.push(o(M, V.length - 1));
        var L = V[g + 1];
        return L(h, f, p, y);
      }
      e.exports = d;
    }
  }), oo = typeof global == "object" && global && global.Object === Object && global, co = oo, lo = typeof self == "object" && self && self.Object === Object && self, uo = co || lo || Function("return this")(), Va = uo, ho = Va.Symbol, Fr = ho, Hn = Object.prototype, fo = Hn.hasOwnProperty, po = Hn.toString, tr = Fr ? Fr.toStringTag : void 0;
  function mo(t) {
    var e = fo.call(t, tr), r = t[tr];
    try {
      t[tr] = void 0;
      var a = true;
    } catch {
    }
    var i = po.call(t);
    return a && (e ? t[tr] = r : delete t[tr]), i;
  }
  var vo = mo, go = Object.prototype, _o = go.toString;
  function yo(t) {
    return _o.call(t);
  }
  var bo = yo, xo = "[object Null]", wo = "[object Undefined]", hn = Fr ? Fr.toStringTag : void 0;
  function ko(t) {
    return t == null ? t === void 0 ? wo : xo : hn && hn in Object(t) ? vo(t) : bo(t);
  }
  var So = ko;
  function Co(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  var Nn = Co, Ao = "[object AsyncFunction]", zo = "[object Function]", Ro = "[object GeneratorFunction]", Eo = "[object Proxy]";
  function To(t) {
    if (!Nn(t)) return false;
    var e = So(t);
    return e == zo || e == Ro || e == Ao || e == Eo;
  }
  var Io = To, Po = Va["__core-js_shared__"], pa = Po, fn = (function() {
    var t = /[^.]+$/.exec(pa && pa.keys && pa.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  })();
  function Mo(t) {
    return !!fn && fn in t;
  }
  var Oo = Mo, jo = Function.prototype, Uo = jo.toString;
  function Lo(t) {
    if (t != null) {
      try {
        return Uo.call(t);
      } catch {
      }
      try {
        return t + "";
      } catch {
      }
    }
    return "";
  }
  var Bo = Lo, Do = /[\\^$.*+?()[\]{}|]/g, Ho = /^\[object .+?Constructor\]$/, No = Function.prototype, Vo = Object.prototype, Zo = No.toString, Fo = Vo.hasOwnProperty, qo = RegExp("^" + Zo.call(Fo).replace(Do, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function Wo(t) {
    if (!Nn(t) || Oo(t)) return false;
    var e = Io(t) ? qo : Ho;
    return e.test(Bo(t));
  }
  var Go = Wo;
  function Xo(t, e) {
    return t == null ? void 0 : t[e];
  }
  var Yo = Xo;
  function Ko(t, e) {
    var r = Yo(t, e);
    return Go(r) ? r : void 0;
  }
  var Vn = Ko, $o = Vn(Object, "create"), hr = $o;
  function Jo() {
    this.__data__ = hr ? hr(null) : {}, this.size = 0;
  }
  var Qo = Jo;
  function ec(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e;
  }
  var tc = ec, rc = "__lodash_hash_undefined__", ac = Object.prototype, nc = ac.hasOwnProperty;
  function ic(t) {
    var e = this.__data__;
    if (hr) {
      var r = e[t];
      return r === rc ? void 0 : r;
    }
    return nc.call(e, t) ? e[t] : void 0;
  }
  var sc = ic, oc = Object.prototype, cc = oc.hasOwnProperty;
  function lc(t) {
    var e = this.__data__;
    return hr ? e[t] !== void 0 : cc.call(e, t);
  }
  var uc = lc, dc = "__lodash_hash_undefined__";
  function hc(t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = hr && e === void 0 ? dc : e, this;
  }
  var fc = hc;
  function qt(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var a = t[e];
      this.set(a[0], a[1]);
    }
  }
  qt.prototype.clear = Qo;
  qt.prototype.delete = tc;
  qt.prototype.get = sc;
  qt.prototype.has = uc;
  qt.prototype.set = fc;
  var pn = qt;
  function pc() {
    this.__data__ = [], this.size = 0;
  }
  var mc = pc;
  function vc(t, e) {
    return t === e || t !== t && e !== e;
  }
  var gc = vc;
  function _c(t, e) {
    for (var r = t.length; r--; ) if (gc(t[r][0], e)) return r;
    return -1;
  }
  var ra = _c, yc = Array.prototype, bc = yc.splice;
  function xc(t) {
    var e = this.__data__, r = ra(e, t);
    if (r < 0) return false;
    var a = e.length - 1;
    return r == a ? e.pop() : bc.call(e, r, 1), --this.size, true;
  }
  var wc = xc;
  function kc(t) {
    var e = this.__data__, r = ra(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  var Sc = kc;
  function Cc(t) {
    return ra(this.__data__, t) > -1;
  }
  var Ac = Cc;
  function zc(t, e) {
    var r = this.__data__, a = ra(r, t);
    return a < 0 ? (++this.size, r.push([
      t,
      e
    ])) : r[a][1] = e, this;
  }
  var Rc = zc;
  function Wt(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var a = t[e];
      this.set(a[0], a[1]);
    }
  }
  Wt.prototype.clear = mc;
  Wt.prototype.delete = wc;
  Wt.prototype.get = Sc;
  Wt.prototype.has = Ac;
  Wt.prototype.set = Rc;
  var Ec = Wt, Tc = Vn(Va, "Map"), Ic = Tc;
  function Pc() {
    this.size = 0, this.__data__ = {
      hash: new pn(),
      map: new (Ic || Ec)(),
      string: new pn()
    };
  }
  var Mc = Pc;
  function Oc(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  var jc = Oc;
  function Uc(t, e) {
    var r = t.__data__;
    return jc(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
  }
  var aa = Uc;
  function Lc(t) {
    var e = aa(this, t).delete(t);
    return this.size -= e ? 1 : 0, e;
  }
  var Bc = Lc;
  function Dc(t) {
    return aa(this, t).get(t);
  }
  var Hc = Dc;
  function Nc(t) {
    return aa(this, t).has(t);
  }
  var Vc = Nc;
  function Zc(t, e) {
    var r = aa(this, t), a = r.size;
    return r.set(t, e), this.size += r.size == a ? 0 : 1, this;
  }
  var Fc = Zc;
  function Gt(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var a = t[e];
      this.set(a[0], a[1]);
    }
  }
  Gt.prototype.clear = Mc;
  Gt.prototype.delete = Bc;
  Gt.prototype.get = Hc;
  Gt.prototype.has = Vc;
  Gt.prototype.set = Fc;
  var Zn = Gt, qc = "Expected a function";
  function Za(t, e) {
    if (typeof t != "function" || e != null && typeof e != "function") throw new TypeError(qc);
    var r = function() {
      var a = arguments, i = e ? e.apply(this, a) : a[0], n = r.cache;
      if (n.has(i)) return n.get(i);
      var s = t.apply(this, a);
      return r.cache = n.set(i, s) || n, s;
    };
    return r.cache = new (Za.Cache || Zn)(), r;
  }
  Za.Cache = Zn;
  var Wc = Za, Fa = ea(ta()), Fn = class Ca {
    constructor(e, r) {
      this.type = "application/octet-stream", this.params = {}, this.type = e, this.params = r;
    }
    toString() {
      const e = [];
      for (const r in this.params) {
        const a = this.params[r];
        e.push(`${r}=${a}`);
      }
      return [
        this.type,
        ...e
      ].join(";");
    }
    static create(e, r) {
      return new Ca(e, r);
    }
    isIdentical(e) {
      return this.type === e.type && this.params === e.params;
    }
    isEqual(e) {
      return this.type === e.type;
    }
    static fromString(e) {
      const [r, ...a] = e.split(";"), i = {};
      for (const n of a) {
        const [s, o] = n.split("=");
        i[s.trim()] = o.trim();
      }
      return new Ca(r, i);
    }
  }, ma = ea(ta());
  async function Gc(t) {
    const e = Fn.fromString(t.type);
    switch (e.type) {
      case "image/x-alpha8": {
        const r = parseInt(e.params.width), a = parseInt(e.params.height);
        return (0, ma.default)(new Uint8Array(await t.arrayBuffer()), [
          a,
          r,
          1
        ]);
      }
      case "image/x-rgba8": {
        const r = parseInt(e.params.width), a = parseInt(e.params.height);
        return (0, ma.default)(new Uint8Array(await t.arrayBuffer()), [
          a,
          r,
          4
        ]);
      }
      case "application/octet-stream":
      case "image/png":
      case "image/jpeg":
      case "image/jpg":
      case "image/webp": {
        const r = await createImageBitmap(t), a = $c(r);
        return (0, ma.default)(new Uint8Array(a.data), [
          a.height,
          a.width,
          4
        ]);
      }
      default:
        throw new Error(`Invalid format: ${e.type} with params: ${e.params}`);
    }
  }
  async function Xc(t, e = 0.8, r = "image/png") {
    const [a, i, n] = t.shape;
    switch (r) {
      case "image/x-alpha8":
      case "image/x-rgba8": {
        const l = Fn.create(r, {
          width: i.toString(),
          height: a.toString()
        });
        return new Blob([
          t.data
        ], {
          type: l.toString()
        });
      }
      case "image/png":
      case "image/jpeg":
      case "image/webp": {
        const l = new ImageData(new Uint8ClampedArray(t.data), i, a);
        var s = qn(l.width, l.height), o = s.getContext("2d");
        return o.putImageData(l, 0, 0), s.convertToBlob({
          quality: e,
          type: r
        });
      }
      default:
        throw new Error(`Invalid format: ${r}`);
    }
  }
  function Yc(t) {
    return new RegExp("^(?:[a-z+]+:)?//", "i").test(t);
  }
  function Kc(t, e) {
    return Yc(t) ? t : new URL(t, e).href;
  }
  function $c(t) {
    var e = qn(t.width, t.height), r = e.getContext("2d");
    return r.drawImage(t, 0, 0), r.getImageData(0, 0, e.width, e.height);
  }
  function Jc(t) {
    if (typeof Uint8Array < "u") return new Uint8Array(t);
    if (typeof Uint8ClampedArray < "u") return new Uint8ClampedArray(t);
    if (typeof Uint16Array < "u") return new Uint16Array(t);
    if (typeof Uint32Array < "u") return new Uint32Array(t);
    if (typeof Float32Array < "u") return new Float32Array(t);
    if (typeof Float64Array < "u") return new Float64Array(t);
    throw new Error("TypedArray not supported");
  }
  function mn(t, e, r, a = false) {
    const [i, n, s] = t.shape;
    let o = n / e, l = i / r;
    a && (o = l = Math.max(o, l) > 1 ? Math.max(o, l) : Math.min(o, l));
    const u = (0, Fa.default)(Jc(s * e * r), [
      r,
      e,
      s
    ]);
    for (let d = 0; d < r; d++) for (let h = 0; h < e; h++) {
      const f = h * o, p = d * l, y = Math.max(Math.floor(f), 0), g = Math.min(Math.ceil(f), n - 1), _ = Math.max(Math.floor(p), 0), R = Math.min(Math.ceil(p), i - 1), M = f - y, V = p - _;
      for (let L = 0; L < s; L++) {
        const Z = t.get(_, y, L), de = t.get(_, g, L), I = t.get(R, y, L), E = t.get(R, g, L), Q = (1 - M) * (1 - V) * Z + M * (1 - V) * de + (1 - M) * V * I + M * V * E;
        u.set(d, h, L, Q);
      }
    }
    return u;
  }
  function Qc(t, e = [
    128,
    128,
    128
  ], r = [
    256,
    256,
    256
  ]) {
    var a = t.data;
    const [i, n, s] = t.shape, o = i * n, l = new Float32Array(3 * o);
    for (let u = 0, d = 0; u < a.length; u += 4, d += 1) l[d] = (a[u] - e[0]) / r[0], l[d + o] = (a[u + 1] - e[1]) / r[1], l[d + o + o] = (a[u + 2] - e[2]) / r[2];
    return (0, Fa.default)(l, [
      1,
      3,
      i,
      n
    ]);
  }
  async function el(t, e) {
    return typeof t == "string" && (t = Kc(t, e.publicPath), t = new URL(t)), t instanceof URL && (t = await (await fetch(t, {})).blob()), (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) && (t = new Blob([
      t
    ])), t instanceof Blob && (t = await Gc(t)), t;
  }
  function tl(t) {
    const e = new Uint8Array(t.data.length);
    for (let r = 0; r < t.data.length; r++) e[r] = t.data[r] * 255;
    return (0, Fa.default)(e, t.shape);
  }
  function qn(t, e) {
    let r;
    if (typeof OffscreenCanvas < "u" ? r = new OffscreenCanvas(t, e) : r = document.createElement("canvas"), !r) throw new Error("Canvas nor OffscreenCanvas are available in the current context.");
    return r;
  }
  var rl = ea(ta()), Wn = async () => navigator.gpu === void 0 ? false : await navigator.gpu.requestAdapter() !== null, al = () => navigator.hardwareConcurrency ?? 4;
  async function vn(t, e) {
    return URL.createObjectURL(await Gn(t, e));
  }
  async function Gn(t, e) {
    const r = new URL("resources.json", e.publicPath), a = await fetch(r);
    if (!a.ok) throw new Error("Resource metadata not found. Ensure that the config.publicPath is configured correctly.");
    const n = (await a.json())[t];
    if (!n) throw new Error(`Resource ${t} not found. Ensure that the config.publicPath is configured correctly.`);
    const s = n.chunks;
    let o = 0;
    const l = s.map(async (h) => {
      const f = h.offsets[1] - h.offsets[0], p = e.publicPath ? new URL(h.name, e.publicPath).toString() : h.name, g = await (await fetch(p, e.fetchArgs)).blob();
      if (f !== g.size) throw new Error(`Failed to fetch ${t} with size ${f} but got ${g.size}`);
      return e.progress && (o += f, e.progress(`fetch:${t}`, o, n.size)), g;
    }), u = await Promise.all(l), d = new Blob(u, {
      type: n.mime
    });
    if (d.size !== n.size) throw new Error(`Failed to fetch ${t} with size ${n.size} but got ${d.size}`);
    return d;
  }
  var rr = null, Xn = async (t) => (rr !== null || (t ? rr = (await un(async () => {
    const { default: e } = await import("./BaVy0CYb.js").then(async (m) => {
      await m.__tla;
      return m;
    });
    return {
      default: e
    };
  }, [], import.meta.url)).default : rr = (await un(async () => {
    const { default: e } = await import("./Bst0LrCM.js").then(async (m) => {
      await m.__tla;
      return m;
    });
    return {
      default: e
    };
  }, [], import.meta.url)).default), rr);
  async function nl(t, e) {
    const r = e.device === "gpu" && await Wn(), a = r && e.proxyToWorker, i = [
      r ? "webgpu" : "wasm"
    ], n = await Xn(r);
    e.debug && (console.debug("	Using WebGPU:", r), console.debug("	Proxy to Worker:", a), n.env.debug = true, n.env.logLevel = "verbose"), n.env.wasm.numThreads = al(), n.env.wasm.proxy = a;
    const s = r ? "/onnxruntime-web/ort-wasm-simd-threaded.jsep" : "/onnxruntime-web/ort-wasm-simd-threaded", o = await vn(`${s}.wasm`, e), l = await vn(`${s}.mjs`, e);
    n.env.wasm.wasmPaths = {
      mjs: l,
      wasm: o
    }, e.debug && console.debug("ort.env.wasm:", n.env.wasm);
    const u = {
      executionProviders: i,
      graphOptimizationLevel: "all",
      executionMode: "parallel",
      enableCpuMemArena: true
    };
    return await n.InferenceSession.create(t, u).catch((h) => {
      throw new Error(`Failed to create session: "${h}". Please check if the publicPath is set correctly.`);
    });
  }
  async function il(t, e, r, a) {
    const i = a.device === "gpu" && await Wn(), n = await Xn(i), s = {};
    for (const [u, d] of e) s[u] = new n.Tensor("float32", new Float32Array(d.data), d.shape);
    const o = await t.run(s, {}), l = [];
    for (const u of r) {
      const d = o[u], h = d.dims, f = d.data, p = (0, rl.default)(f, h);
      l.push(p);
    }
    return l;
  }
  var te;
  (function(t) {
    t.assertEqual = (i) => i;
    function e(i) {
    }
    t.assertIs = e;
    function r(i) {
      throw new Error();
    }
    t.assertNever = r, t.arrayToEnum = (i) => {
      const n = {};
      for (const s of i) n[s] = s;
      return n;
    }, t.getValidEnumValues = (i) => {
      const n = t.objectKeys(i).filter((o) => typeof i[i[o]] != "number"), s = {};
      for (const o of n) s[o] = i[o];
      return t.objectValues(s);
    }, t.objectValues = (i) => t.objectKeys(i).map(function(n) {
      return i[n];
    }), t.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
      const n = [];
      for (const s in i) Object.prototype.hasOwnProperty.call(i, s) && n.push(s);
      return n;
    }, t.find = (i, n) => {
      for (const s of i) if (n(s)) return s;
    }, t.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
    function a(i, n = " | ") {
      return i.map((s) => typeof s == "string" ? `'${s}'` : s).join(n);
    }
    t.joinValues = a, t.jsonStringifyReplacer = (i, n) => typeof n == "bigint" ? n.toString() : n;
  })(te || (te = {}));
  var Aa;
  (function(t) {
    t.mergeShapes = (e, r) => ({
      ...e,
      ...r
    });
  })(Aa || (Aa = {}));
  var z = te.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
  ]), pt = (t) => {
    switch (typeof t) {
      case "undefined":
        return z.undefined;
      case "string":
        return z.string;
      case "number":
        return isNaN(t) ? z.nan : z.number;
      case "boolean":
        return z.boolean;
      case "function":
        return z.function;
      case "bigint":
        return z.bigint;
      case "symbol":
        return z.symbol;
      case "object":
        return Array.isArray(t) ? z.array : t === null ? z.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? z.promise : typeof Map < "u" && t instanceof Map ? z.map : typeof Set < "u" && t instanceof Set ? z.set : typeof Date < "u" && t instanceof Date ? z.date : z.object;
      default:
        return z.unknown;
    }
  }, b = te.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
  ]), sl = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:"), nt = class Yn extends Error {
    get errors() {
      return this.issues;
    }
    constructor(e) {
      super(), this.issues = [], this.addIssue = (a) => {
        this.issues = [
          ...this.issues,
          a
        ];
      }, this.addIssues = (a = []) => {
        this.issues = [
          ...this.issues,
          ...a
        ];
      };
      const r = new.target.prototype;
      Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
    }
    format(e) {
      const r = e || function(n) {
        return n.message;
      }, a = {
        _errors: []
      }, i = (n) => {
        for (const s of n.issues) if (s.code === "invalid_union") s.unionErrors.map(i);
        else if (s.code === "invalid_return_type") i(s.returnTypeError);
        else if (s.code === "invalid_arguments") i(s.argumentsError);
        else if (s.path.length === 0) a._errors.push(r(s));
        else {
          let o = a, l = 0;
          for (; l < s.path.length; ) {
            const u = s.path[l];
            l === s.path.length - 1 ? (o[u] = o[u] || {
              _errors: []
            }, o[u]._errors.push(r(s))) : o[u] = o[u] || {
              _errors: []
            }, o = o[u], l++;
          }
        }
      };
      return i(this), a;
    }
    static assert(e) {
      if (!(e instanceof Yn)) throw new Error(`Not a ZodError: ${e}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, te.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = (r) => r.message) {
      const r = {}, a = [];
      for (const i of this.issues) i.path.length > 0 ? (r[i.path[0]] = r[i.path[0]] || [], r[i.path[0]].push(e(i))) : a.push(e(i));
      return {
        formErrors: a,
        fieldErrors: r
      };
    }
    get formErrors() {
      return this.flatten();
    }
  };
  nt.create = (t) => new nt(t);
  var Nt = (t, e) => {
    let r;
    switch (t.code) {
      case b.invalid_type:
        t.received === z.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
        break;
      case b.invalid_literal:
        r = `Invalid literal value, expected ${JSON.stringify(t.expected, te.jsonStringifyReplacer)}`;
        break;
      case b.unrecognized_keys:
        r = `Unrecognized key(s) in object: ${te.joinValues(t.keys, ", ")}`;
        break;
      case b.invalid_union:
        r = "Invalid input";
        break;
      case b.invalid_union_discriminator:
        r = `Invalid discriminator value. Expected ${te.joinValues(t.options)}`;
        break;
      case b.invalid_enum_value:
        r = `Invalid enum value. Expected ${te.joinValues(t.options)}, received '${t.received}'`;
        break;
      case b.invalid_arguments:
        r = "Invalid function arguments";
        break;
      case b.invalid_return_type:
        r = "Invalid function return type";
        break;
      case b.invalid_date:
        r = "Invalid date";
        break;
      case b.invalid_string:
        typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : te.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
        break;
      case b.too_small:
        t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
        break;
      case b.too_big:
        t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
        break;
      case b.custom:
        r = "Invalid input";
        break;
      case b.invalid_intersection_types:
        r = "Intersection results could not be merged";
        break;
      case b.not_multiple_of:
        r = `Number must be a multiple of ${t.multipleOf}`;
        break;
      case b.not_finite:
        r = "Number must be finite";
        break;
      default:
        r = e.defaultError, te.assertNever(t);
    }
    return {
      message: r
    };
  }, Kn = Nt;
  function ol(t) {
    Kn = t;
  }
  function qr() {
    return Kn;
  }
  var Wr = (t) => {
    const { data: e, path: r, errorMaps: a, issueData: i } = t, n = [
      ...r,
      ...i.path || []
    ], s = {
      ...i,
      path: n
    };
    if (i.message !== void 0) return {
      ...i,
      path: n,
      message: i.message
    };
    let o = "";
    const l = a.filter((u) => !!u).slice().reverse();
    for (const u of l) o = u(s, {
      data: e,
      defaultError: o
    }).message;
    return {
      ...i,
      path: n,
      message: o
    };
  }, cl = [];
  function A(t, e) {
    const r = qr(), a = Wr({
      issueData: e,
      data: t.data,
      path: t.path,
      errorMaps: [
        t.common.contextualErrorMap,
        t.schemaErrorMap,
        r,
        r === Nt ? void 0 : Nt
      ].filter((i) => !!i)
    });
    t.common.issues.push(a);
  }
  var We = class $n {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      this.value === "valid" && (this.value = "dirty");
    }
    abort() {
      this.value !== "aborted" && (this.value = "aborted");
    }
    static mergeArray(e, r) {
      const a = [];
      for (const i of r) {
        if (i.status === "aborted") return D;
        i.status === "dirty" && e.dirty(), a.push(i.value);
      }
      return {
        status: e.value,
        value: a
      };
    }
    static async mergeObjectAsync(e, r) {
      const a = [];
      for (const i of r) {
        const n = await i.key, s = await i.value;
        a.push({
          key: n,
          value: s
        });
      }
      return $n.mergeObjectSync(e, a);
    }
    static mergeObjectSync(e, r) {
      const a = {};
      for (const i of r) {
        const { key: n, value: s } = i;
        if (n.status === "aborted" || s.status === "aborted") return D;
        n.status === "dirty" && e.dirty(), s.status === "dirty" && e.dirty(), n.value !== "__proto__" && (typeof s.value < "u" || i.alwaysSet) && (a[n.value] = s.value);
      }
      return {
        status: e.value,
        value: a
      };
    }
  }, D = Object.freeze({
    status: "aborted"
  }), Dt = (t) => ({
    status: "dirty",
    value: t
  }), He = (t) => ({
    status: "valid",
    value: t
  }), za = (t) => t.status === "aborted", Ra = (t) => t.status === "dirty", Pt = (t) => t.status === "valid", fr = (t) => typeof Promise < "u" && t instanceof Promise;
  function Gr(t, e, r, a) {
    if (typeof e == "function" ? t !== e || true : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return e.get(t);
  }
  function Jn(t, e, r, a, i) {
    if (typeof e == "function" ? t !== e || true : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return e.set(t, r), r;
  }
  var P;
  (function(t) {
    t.errToObj = (e) => typeof e == "string" ? {
      message: e
    } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
  })(P || (P = {}));
  var sr, or, dt = class {
    constructor(t, e, r, a) {
      this._cachedPath = [], this.parent = t, this.data = e, this._path = r, this._key = a;
    }
    get path() {
      return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
    }
  }, gn = (t, e) => {
    if (Pt(e)) return {
      success: true,
      data: e.value
    };
    if (!t.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
      success: false,
      get error() {
        if (this._error) return this._error;
        const r = new nt(t.common.issues);
        return this._error = r, this._error;
      }
    };
  };
  function q(t) {
    if (!t) return {};
    const { errorMap: e, invalid_type_error: r, required_error: a, description: i } = t;
    if (e && (r || a)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e ? {
      errorMap: e,
      description: i
    } : {
      errorMap: (s, o) => {
        var l, u;
        const { message: d } = t;
        return s.code === "invalid_enum_value" ? {
          message: d ?? o.defaultError
        } : typeof o.data > "u" ? {
          message: (l = d ?? a) !== null && l !== void 0 ? l : o.defaultError
        } : s.code !== "invalid_type" ? {
          message: o.defaultError
        } : {
          message: (u = d ?? r) !== null && u !== void 0 ? u : o.defaultError
        };
      },
      description: i
    };
  }
  var X = class {
    get description() {
      return this._def.description;
    }
    _getType(t) {
      return pt(t.data);
    }
    _getOrReturnCtx(t, e) {
      return e || {
        common: t.parent.common,
        data: t.data,
        parsedType: pt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      };
    }
    _processInputParams(t) {
      return {
        status: new We(),
        ctx: {
          common: t.parent.common,
          data: t.data,
          parsedType: pt(t.data),
          schemaErrorMap: this._def.errorMap,
          path: t.path,
          parent: t.parent
        }
      };
    }
    _parseSync(t) {
      const e = this._parse(t);
      if (fr(e)) throw new Error("Synchronous parse encountered promise.");
      return e;
    }
    _parseAsync(t) {
      const e = this._parse(t);
      return Promise.resolve(e);
    }
    parse(t, e) {
      const r = this.safeParse(t, e);
      if (r.success) return r.data;
      throw r.error;
    }
    safeParse(t, e) {
      var r;
      const a = {
        common: {
          issues: [],
          async: (r = e == null ? void 0 : e.async) !== null && r !== void 0 ? r : false,
          contextualErrorMap: e == null ? void 0 : e.errorMap
        },
        path: (e == null ? void 0 : e.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: pt(t)
      }, i = this._parseSync({
        data: t,
        path: a.path,
        parent: a
      });
      return gn(a, i);
    }
    "~validate"(t) {
      var e, r;
      const a = {
        common: {
          issues: [],
          async: !!this["~standard"].async
        },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: pt(t)
      };
      if (!this["~standard"].async) try {
        const i = this._parseSync({
          data: t,
          path: [],
          parent: a
        });
        return Pt(i) ? {
          value: i.value
        } : {
          issues: a.common.issues
        };
      } catch (i) {
        !((r = (e = i == null ? void 0 : i.message) === null || e === void 0 ? void 0 : e.toLowerCase()) === null || r === void 0) && r.includes("encountered") && (this["~standard"].async = true), a.common = {
          issues: [],
          async: true
        };
      }
      return this._parseAsync({
        data: t,
        path: [],
        parent: a
      }).then((i) => Pt(i) ? {
        value: i.value
      } : {
        issues: a.common.issues
      });
    }
    async parseAsync(t, e) {
      const r = await this.safeParseAsync(t, e);
      if (r.success) return r.data;
      throw r.error;
    }
    async safeParseAsync(t, e) {
      const r = {
        common: {
          issues: [],
          contextualErrorMap: e == null ? void 0 : e.errorMap,
          async: true
        },
        path: (e == null ? void 0 : e.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: pt(t)
      }, a = this._parse({
        data: t,
        path: r.path,
        parent: r
      }), i = await (fr(a) ? a : Promise.resolve(a));
      return gn(r, i);
    }
    refine(t, e) {
      const r = (a) => typeof e == "string" || typeof e > "u" ? {
        message: e
      } : typeof e == "function" ? e(a) : e;
      return this._refinement((a, i) => {
        const n = t(a), s = () => i.addIssue({
          code: b.custom,
          ...r(a)
        });
        return typeof Promise < "u" && n instanceof Promise ? n.then((o) => o ? true : (s(), false)) : n ? true : (s(), false);
      });
    }
    refinement(t, e) {
      return this._refinement((r, a) => t(r) ? true : (a.addIssue(typeof e == "function" ? e(r, a) : e), false));
    }
    _refinement(t) {
      return new it({
        schema: this,
        typeName: B.ZodEffects,
        effect: {
          type: "refinement",
          refinement: t
        }
      });
    }
    superRefine(t) {
      return this._refinement(t);
    }
    constructor(t) {
      this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (e) => this["~validate"](e)
      };
    }
    optional() {
      return ut.create(this, this._def);
    }
    nullable() {
      return wt.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return Mt.create(this);
    }
    promise() {
      return Ft.create(this, this._def);
    }
    or(t) {
      return br.create([
        this,
        t
      ], this._def);
    }
    and(t) {
      return xr.create(this, t, this._def);
    }
    transform(t) {
      return new it({
        ...q(this._def),
        schema: this,
        typeName: B.ZodEffects,
        effect: {
          type: "transform",
          transform: t
        }
      });
    }
    default(t) {
      const e = typeof t == "function" ? t : () => t;
      return new Cr({
        ...q(this._def),
        innerType: this,
        defaultValue: e,
        typeName: B.ZodDefault
      });
    }
    brand() {
      return new qa({
        typeName: B.ZodBranded,
        type: this,
        ...q(this._def)
      });
    }
    catch(t) {
      const e = typeof t == "function" ? t : () => t;
      return new Ar({
        ...q(this._def),
        innerType: this,
        catchValue: e,
        typeName: B.ZodCatch
      });
    }
    describe(t) {
      const e = this.constructor;
      return new e({
        ...this._def,
        description: t
      });
    }
    pipe(t) {
      return Wa.create(this, t);
    }
    readonly() {
      return zr.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  }, ll = /^c[^\s-]{8,}$/i, ul = /^[0-9a-z]+$/, dl = /^[0-9A-HJKMNP-TV-Z]{26}$/i, hl = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, fl = /^[a-z0-9_-]{21}$/i, pl = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, ml = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, vl = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, gl = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", va, _l = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, yl = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, bl = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, xl = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, wl = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, kl = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Qn = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Sl = new RegExp(`^${Qn}$`);
  function ei(t) {
    let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`), e;
  }
  function Cl(t) {
    return new RegExp(`^${ei(t)}$`);
  }
  function ti(t) {
    let e = `${Qn}T${ei(t)}`;
    const r = [];
    return r.push(t.local ? "Z?" : "Z"), t.offset && r.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${r.join("|")})`, new RegExp(`^${e}$`);
  }
  function Al(t, e) {
    return !!((e === "v4" || !e) && _l.test(t) || (e === "v6" || !e) && bl.test(t));
  }
  function zl(t, e) {
    if (!pl.test(t)) return false;
    try {
      const [r] = t.split("."), a = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), i = JSON.parse(atob(a));
      return !(typeof i != "object" || i === null || !i.typ || !i.alg || e && i.alg !== e);
    } catch {
      return false;
    }
  }
  function Rl(t, e) {
    return !!((e === "v4" || !e) && yl.test(t) || (e === "v6" || !e) && xl.test(t));
  }
  var Vt = class cr extends X {
    _parse(e) {
      if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== z.string) {
        const n = this._getOrReturnCtx(e);
        return A(n, {
          code: b.invalid_type,
          expected: z.string,
          received: n.parsedType
        }), D;
      }
      const a = new We();
      let i;
      for (const n of this._def.checks) if (n.kind === "min") e.data.length < n.value && (i = this._getOrReturnCtx(e, i), A(i, {
        code: b.too_small,
        minimum: n.value,
        type: "string",
        inclusive: true,
        exact: false,
        message: n.message
      }), a.dirty());
      else if (n.kind === "max") e.data.length > n.value && (i = this._getOrReturnCtx(e, i), A(i, {
        code: b.too_big,
        maximum: n.value,
        type: "string",
        inclusive: true,
        exact: false,
        message: n.message
      }), a.dirty());
      else if (n.kind === "length") {
        const s = e.data.length > n.value, o = e.data.length < n.value;
        (s || o) && (i = this._getOrReturnCtx(e, i), s ? A(i, {
          code: b.too_big,
          maximum: n.value,
          type: "string",
          inclusive: true,
          exact: true,
          message: n.message
        }) : o && A(i, {
          code: b.too_small,
          minimum: n.value,
          type: "string",
          inclusive: true,
          exact: true,
          message: n.message
        }), a.dirty());
      } else if (n.kind === "email") vl.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "email",
        code: b.invalid_string,
        message: n.message
      }), a.dirty());
      else if (n.kind === "emoji") va || (va = new RegExp(gl, "u")), va.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "emoji",
        code: b.invalid_string,
        message: n.message
      }), a.dirty());
      else if (n.kind === "uuid") hl.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "uuid",
        code: b.invalid_string,
        message: n.message
      }), a.dirty());
      else if (n.kind === "nanoid") fl.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "nanoid",
        code: b.invalid_string,
        message: n.message
      }), a.dirty());
      else if (n.kind === "cuid") ll.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "cuid",
        code: b.invalid_string,
        message: n.message
      }), a.dirty());
      else if (n.kind === "cuid2") ul.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "cuid2",
        code: b.invalid_string,
        message: n.message
      }), a.dirty());
      else if (n.kind === "ulid") dl.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "ulid",
        code: b.invalid_string,
        message: n.message
      }), a.dirty());
      else if (n.kind === "url") try {
        new URL(e.data);
      } catch {
        i = this._getOrReturnCtx(e, i), A(i, {
          validation: "url",
          code: b.invalid_string,
          message: n.message
        }), a.dirty();
      }
      else n.kind === "regex" ? (n.regex.lastIndex = 0, n.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "regex",
        code: b.invalid_string,
        message: n.message
      }), a.dirty())) : n.kind === "trim" ? e.data = e.data.trim() : n.kind === "includes" ? e.data.includes(n.value, n.position) || (i = this._getOrReturnCtx(e, i), A(i, {
        code: b.invalid_string,
        validation: {
          includes: n.value,
          position: n.position
        },
        message: n.message
      }), a.dirty()) : n.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : n.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : n.kind === "startsWith" ? e.data.startsWith(n.value) || (i = this._getOrReturnCtx(e, i), A(i, {
        code: b.invalid_string,
        validation: {
          startsWith: n.value
        },
        message: n.message
      }), a.dirty()) : n.kind === "endsWith" ? e.data.endsWith(n.value) || (i = this._getOrReturnCtx(e, i), A(i, {
        code: b.invalid_string,
        validation: {
          endsWith: n.value
        },
        message: n.message
      }), a.dirty()) : n.kind === "datetime" ? ti(n).test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        code: b.invalid_string,
        validation: "datetime",
        message: n.message
      }), a.dirty()) : n.kind === "date" ? Sl.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        code: b.invalid_string,
        validation: "date",
        message: n.message
      }), a.dirty()) : n.kind === "time" ? Cl(n).test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        code: b.invalid_string,
        validation: "time",
        message: n.message
      }), a.dirty()) : n.kind === "duration" ? ml.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "duration",
        code: b.invalid_string,
        message: n.message
      }), a.dirty()) : n.kind === "ip" ? Al(e.data, n.version) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "ip",
        code: b.invalid_string,
        message: n.message
      }), a.dirty()) : n.kind === "jwt" ? zl(e.data, n.alg) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "jwt",
        code: b.invalid_string,
        message: n.message
      }), a.dirty()) : n.kind === "cidr" ? Rl(e.data, n.version) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "cidr",
        code: b.invalid_string,
        message: n.message
      }), a.dirty()) : n.kind === "base64" ? wl.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "base64",
        code: b.invalid_string,
        message: n.message
      }), a.dirty()) : n.kind === "base64url" ? kl.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "base64url",
        code: b.invalid_string,
        message: n.message
      }), a.dirty()) : te.assertNever(n);
      return {
        status: a.value,
        value: e.data
      };
    }
    _regex(e, r, a) {
      return this.refinement((i) => e.test(i), {
        validation: r,
        code: b.invalid_string,
        ...P.errToObj(a)
      });
    }
    _addCheck(e) {
      return new cr({
        ...this._def,
        checks: [
          ...this._def.checks,
          e
        ]
      });
    }
    email(e) {
      return this._addCheck({
        kind: "email",
        ...P.errToObj(e)
      });
    }
    url(e) {
      return this._addCheck({
        kind: "url",
        ...P.errToObj(e)
      });
    }
    emoji(e) {
      return this._addCheck({
        kind: "emoji",
        ...P.errToObj(e)
      });
    }
    uuid(e) {
      return this._addCheck({
        kind: "uuid",
        ...P.errToObj(e)
      });
    }
    nanoid(e) {
      return this._addCheck({
        kind: "nanoid",
        ...P.errToObj(e)
      });
    }
    cuid(e) {
      return this._addCheck({
        kind: "cuid",
        ...P.errToObj(e)
      });
    }
    cuid2(e) {
      return this._addCheck({
        kind: "cuid2",
        ...P.errToObj(e)
      });
    }
    ulid(e) {
      return this._addCheck({
        kind: "ulid",
        ...P.errToObj(e)
      });
    }
    base64(e) {
      return this._addCheck({
        kind: "base64",
        ...P.errToObj(e)
      });
    }
    base64url(e) {
      return this._addCheck({
        kind: "base64url",
        ...P.errToObj(e)
      });
    }
    jwt(e) {
      return this._addCheck({
        kind: "jwt",
        ...P.errToObj(e)
      });
    }
    ip(e) {
      return this._addCheck({
        kind: "ip",
        ...P.errToObj(e)
      });
    }
    cidr(e) {
      return this._addCheck({
        kind: "cidr",
        ...P.errToObj(e)
      });
    }
    datetime(e) {
      var r, a;
      return typeof e == "string" ? this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: e
      }) : this._addCheck({
        kind: "datetime",
        precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
        offset: (r = e == null ? void 0 : e.offset) !== null && r !== void 0 ? r : false,
        local: (a = e == null ? void 0 : e.local) !== null && a !== void 0 ? a : false,
        ...P.errToObj(e == null ? void 0 : e.message)
      });
    }
    date(e) {
      return this._addCheck({
        kind: "date",
        message: e
      });
    }
    time(e) {
      return typeof e == "string" ? this._addCheck({
        kind: "time",
        precision: null,
        message: e
      }) : this._addCheck({
        kind: "time",
        precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
        ...P.errToObj(e == null ? void 0 : e.message)
      });
    }
    duration(e) {
      return this._addCheck({
        kind: "duration",
        ...P.errToObj(e)
      });
    }
    regex(e, r) {
      return this._addCheck({
        kind: "regex",
        regex: e,
        ...P.errToObj(r)
      });
    }
    includes(e, r) {
      return this._addCheck({
        kind: "includes",
        value: e,
        position: r == null ? void 0 : r.position,
        ...P.errToObj(r == null ? void 0 : r.message)
      });
    }
    startsWith(e, r) {
      return this._addCheck({
        kind: "startsWith",
        value: e,
        ...P.errToObj(r)
      });
    }
    endsWith(e, r) {
      return this._addCheck({
        kind: "endsWith",
        value: e,
        ...P.errToObj(r)
      });
    }
    min(e, r) {
      return this._addCheck({
        kind: "min",
        value: e,
        ...P.errToObj(r)
      });
    }
    max(e, r) {
      return this._addCheck({
        kind: "max",
        value: e,
        ...P.errToObj(r)
      });
    }
    length(e, r) {
      return this._addCheck({
        kind: "length",
        value: e,
        ...P.errToObj(r)
      });
    }
    nonempty(e) {
      return this.min(1, P.errToObj(e));
    }
    trim() {
      return new cr({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind: "trim"
          }
        ]
      });
    }
    toLowerCase() {
      return new cr({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind: "toLowerCase"
          }
        ]
      });
    }
    toUpperCase() {
      return new cr({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind: "toUpperCase"
          }
        ]
      });
    }
    get isDatetime() {
      return !!this._def.checks.find((e) => e.kind === "datetime");
    }
    get isDate() {
      return !!this._def.checks.find((e) => e.kind === "date");
    }
    get isTime() {
      return !!this._def.checks.find((e) => e.kind === "time");
    }
    get isDuration() {
      return !!this._def.checks.find((e) => e.kind === "duration");
    }
    get isEmail() {
      return !!this._def.checks.find((e) => e.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((e) => e.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((e) => e.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((e) => e.kind === "uuid");
    }
    get isNANOID() {
      return !!this._def.checks.find((e) => e.kind === "nanoid");
    }
    get isCUID() {
      return !!this._def.checks.find((e) => e.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((e) => e.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((e) => e.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((e) => e.kind === "ip");
    }
    get isCIDR() {
      return !!this._def.checks.find((e) => e.kind === "cidr");
    }
    get isBase64() {
      return !!this._def.checks.find((e) => e.kind === "base64");
    }
    get isBase64url() {
      return !!this._def.checks.find((e) => e.kind === "base64url");
    }
    get minLength() {
      let e = null;
      for (const r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
      return e;
    }
    get maxLength() {
      let e = null;
      for (const r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
      return e;
    }
  };
  Vt.create = (t) => {
    var e;
    return new Vt({
      checks: [],
      typeName: B.ZodString,
      coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : false,
      ...q(t)
    });
  };
  function El(t, e) {
    const r = (t.toString().split(".")[1] || "").length, a = (e.toString().split(".")[1] || "").length, i = r > a ? r : a, n = parseInt(t.toFixed(i).replace(".", "")), s = parseInt(e.toFixed(i).replace(".", ""));
    return n % s / Math.pow(10, i);
  }
  var pr = class Ea extends X {
    constructor() {
      super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
    }
    _parse(e) {
      if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== z.number) {
        const n = this._getOrReturnCtx(e);
        return A(n, {
          code: b.invalid_type,
          expected: z.number,
          received: n.parsedType
        }), D;
      }
      let a;
      const i = new We();
      for (const n of this._def.checks) n.kind === "int" ? te.isInteger(e.data) || (a = this._getOrReturnCtx(e, a), A(a, {
        code: b.invalid_type,
        expected: "integer",
        received: "float",
        message: n.message
      }), i.dirty()) : n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (a = this._getOrReturnCtx(e, a), A(a, {
        code: b.too_small,
        minimum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: false,
        message: n.message
      }), i.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (a = this._getOrReturnCtx(e, a), A(a, {
        code: b.too_big,
        maximum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: false,
        message: n.message
      }), i.dirty()) : n.kind === "multipleOf" ? El(e.data, n.value) !== 0 && (a = this._getOrReturnCtx(e, a), A(a, {
        code: b.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), i.dirty()) : n.kind === "finite" ? Number.isFinite(e.data) || (a = this._getOrReturnCtx(e, a), A(a, {
        code: b.not_finite,
        message: n.message
      }), i.dirty()) : te.assertNever(n);
      return {
        status: i.value,
        value: e.data
      };
    }
    gte(e, r) {
      return this.setLimit("min", e, true, P.toString(r));
    }
    gt(e, r) {
      return this.setLimit("min", e, false, P.toString(r));
    }
    lte(e, r) {
      return this.setLimit("max", e, true, P.toString(r));
    }
    lt(e, r) {
      return this.setLimit("max", e, false, P.toString(r));
    }
    setLimit(e, r, a, i) {
      return new Ea({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind: e,
            value: r,
            inclusive: a,
            message: P.toString(i)
          }
        ]
      });
    }
    _addCheck(e) {
      return new Ea({
        ...this._def,
        checks: [
          ...this._def.checks,
          e
        ]
      });
    }
    int(e) {
      return this._addCheck({
        kind: "int",
        message: P.toString(e)
      });
    }
    positive(e) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: false,
        message: P.toString(e)
      });
    }
    negative(e) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: false,
        message: P.toString(e)
      });
    }
    nonpositive(e) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: true,
        message: P.toString(e)
      });
    }
    nonnegative(e) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: true,
        message: P.toString(e)
      });
    }
    multipleOf(e, r) {
      return this._addCheck({
        kind: "multipleOf",
        value: e,
        message: P.toString(r)
      });
    }
    finite(e) {
      return this._addCheck({
        kind: "finite",
        message: P.toString(e)
      });
    }
    safe(e) {
      return this._addCheck({
        kind: "min",
        inclusive: true,
        value: Number.MIN_SAFE_INTEGER,
        message: P.toString(e)
      })._addCheck({
        kind: "max",
        inclusive: true,
        value: Number.MAX_SAFE_INTEGER,
        message: P.toString(e)
      });
    }
    get minValue() {
      let e = null;
      for (const r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
      return e;
    }
    get maxValue() {
      let e = null;
      for (const r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
      return e;
    }
    get isInt() {
      return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && te.isInteger(e.value));
    }
    get isFinite() {
      let e = null, r = null;
      for (const a of this._def.checks) {
        if (a.kind === "finite" || a.kind === "int" || a.kind === "multipleOf") return true;
        a.kind === "min" ? (r === null || a.value > r) && (r = a.value) : a.kind === "max" && (e === null || a.value < e) && (e = a.value);
      }
      return Number.isFinite(r) && Number.isFinite(e);
    }
  };
  pr.create = (t) => new pr({
    checks: [],
    typeName: B.ZodNumber,
    coerce: (t == null ? void 0 : t.coerce) || false,
    ...q(t)
  });
  var mr = class Ta extends X {
    constructor() {
      super(...arguments), this.min = this.gte, this.max = this.lte;
    }
    _parse(e) {
      if (this._def.coerce) try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
      if (this._getType(e) !== z.bigint) return this._getInvalidInput(e);
      let a;
      const i = new We();
      for (const n of this._def.checks) n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (a = this._getOrReturnCtx(e, a), A(a, {
        code: b.too_small,
        type: "bigint",
        minimum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), i.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (a = this._getOrReturnCtx(e, a), A(a, {
        code: b.too_big,
        type: "bigint",
        maximum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), i.dirty()) : n.kind === "multipleOf" ? e.data % n.value !== BigInt(0) && (a = this._getOrReturnCtx(e, a), A(a, {
        code: b.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), i.dirty()) : te.assertNever(n);
      return {
        status: i.value,
        value: e.data
      };
    }
    _getInvalidInput(e) {
      const r = this._getOrReturnCtx(e);
      return A(r, {
        code: b.invalid_type,
        expected: z.bigint,
        received: r.parsedType
      }), D;
    }
    gte(e, r) {
      return this.setLimit("min", e, true, P.toString(r));
    }
    gt(e, r) {
      return this.setLimit("min", e, false, P.toString(r));
    }
    lte(e, r) {
      return this.setLimit("max", e, true, P.toString(r));
    }
    lt(e, r) {
      return this.setLimit("max", e, false, P.toString(r));
    }
    setLimit(e, r, a, i) {
      return new Ta({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind: e,
            value: r,
            inclusive: a,
            message: P.toString(i)
          }
        ]
      });
    }
    _addCheck(e) {
      return new Ta({
        ...this._def,
        checks: [
          ...this._def.checks,
          e
        ]
      });
    }
    positive(e) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: false,
        message: P.toString(e)
      });
    }
    negative(e) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: false,
        message: P.toString(e)
      });
    }
    nonpositive(e) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: true,
        message: P.toString(e)
      });
    }
    nonnegative(e) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: true,
        message: P.toString(e)
      });
    }
    multipleOf(e, r) {
      return this._addCheck({
        kind: "multipleOf",
        value: e,
        message: P.toString(r)
      });
    }
    get minValue() {
      let e = null;
      for (const r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
      return e;
    }
    get maxValue() {
      let e = null;
      for (const r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
      return e;
    }
  };
  mr.create = (t) => {
    var e;
    return new mr({
      checks: [],
      typeName: B.ZodBigInt,
      coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : false,
      ...q(t)
    });
  };
  var vr = class extends X {
    _parse(t) {
      if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== z.boolean) {
        const r = this._getOrReturnCtx(t);
        return A(r, {
          code: b.invalid_type,
          expected: z.boolean,
          received: r.parsedType
        }), D;
      }
      return He(t.data);
    }
  };
  vr.create = (t) => new vr({
    typeName: B.ZodBoolean,
    coerce: (t == null ? void 0 : t.coerce) || false,
    ...q(t)
  });
  var gr = class ri extends X {
    _parse(e) {
      if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== z.date) {
        const n = this._getOrReturnCtx(e);
        return A(n, {
          code: b.invalid_type,
          expected: z.date,
          received: n.parsedType
        }), D;
      }
      if (isNaN(e.data.getTime())) {
        const n = this._getOrReturnCtx(e);
        return A(n, {
          code: b.invalid_date
        }), D;
      }
      const a = new We();
      let i;
      for (const n of this._def.checks) n.kind === "min" ? e.data.getTime() < n.value && (i = this._getOrReturnCtx(e, i), A(i, {
        code: b.too_small,
        message: n.message,
        inclusive: true,
        exact: false,
        minimum: n.value,
        type: "date"
      }), a.dirty()) : n.kind === "max" ? e.data.getTime() > n.value && (i = this._getOrReturnCtx(e, i), A(i, {
        code: b.too_big,
        message: n.message,
        inclusive: true,
        exact: false,
        maximum: n.value,
        type: "date"
      }), a.dirty()) : te.assertNever(n);
      return {
        status: a.value,
        value: new Date(e.data.getTime())
      };
    }
    _addCheck(e) {
      return new ri({
        ...this._def,
        checks: [
          ...this._def.checks,
          e
        ]
      });
    }
    min(e, r) {
      return this._addCheck({
        kind: "min",
        value: e.getTime(),
        message: P.toString(r)
      });
    }
    max(e, r) {
      return this._addCheck({
        kind: "max",
        value: e.getTime(),
        message: P.toString(r)
      });
    }
    get minDate() {
      let e = null;
      for (const r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
      return e != null ? new Date(e) : null;
    }
    get maxDate() {
      let e = null;
      for (const r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
      return e != null ? new Date(e) : null;
    }
  };
  gr.create = (t) => new gr({
    checks: [],
    coerce: (t == null ? void 0 : t.coerce) || false,
    typeName: B.ZodDate,
    ...q(t)
  });
  var Xr = class extends X {
    _parse(t) {
      if (this._getType(t) !== z.symbol) {
        const r = this._getOrReturnCtx(t);
        return A(r, {
          code: b.invalid_type,
          expected: z.symbol,
          received: r.parsedType
        }), D;
      }
      return He(t.data);
    }
  };
  Xr.create = (t) => new Xr({
    typeName: B.ZodSymbol,
    ...q(t)
  });
  var _r = class extends X {
    _parse(t) {
      if (this._getType(t) !== z.undefined) {
        const r = this._getOrReturnCtx(t);
        return A(r, {
          code: b.invalid_type,
          expected: z.undefined,
          received: r.parsedType
        }), D;
      }
      return He(t.data);
    }
  };
  _r.create = (t) => new _r({
    typeName: B.ZodUndefined,
    ...q(t)
  });
  var yr = class extends X {
    _parse(t) {
      if (this._getType(t) !== z.null) {
        const r = this._getOrReturnCtx(t);
        return A(r, {
          code: b.invalid_type,
          expected: z.null,
          received: r.parsedType
        }), D;
      }
      return He(t.data);
    }
  };
  yr.create = (t) => new yr({
    typeName: B.ZodNull,
    ...q(t)
  });
  var Zt = class extends X {
    constructor() {
      super(...arguments), this._any = true;
    }
    _parse(t) {
      return He(t.data);
    }
  };
  Zt.create = (t) => new Zt({
    typeName: B.ZodAny,
    ...q(t)
  });
  var Tt = class extends X {
    constructor() {
      super(...arguments), this._unknown = true;
    }
    _parse(t) {
      return He(t.data);
    }
  };
  Tt.create = (t) => new Tt({
    typeName: B.ZodUnknown,
    ...q(t)
  });
  var gt = class extends X {
    _parse(t) {
      const e = this._getOrReturnCtx(t);
      return A(e, {
        code: b.invalid_type,
        expected: z.never,
        received: e.parsedType
      }), D;
    }
  };
  gt.create = (t) => new gt({
    typeName: B.ZodNever,
    ...q(t)
  });
  var Yr = class extends X {
    _parse(t) {
      if (this._getType(t) !== z.undefined) {
        const r = this._getOrReturnCtx(t);
        return A(r, {
          code: b.invalid_type,
          expected: z.void,
          received: r.parsedType
        }), D;
      }
      return He(t.data);
    }
  };
  Yr.create = (t) => new Yr({
    typeName: B.ZodVoid,
    ...q(t)
  });
  var Mt = class Nr extends X {
    _parse(e) {
      const { ctx: r, status: a } = this._processInputParams(e), i = this._def;
      if (r.parsedType !== z.array) return A(r, {
        code: b.invalid_type,
        expected: z.array,
        received: r.parsedType
      }), D;
      if (i.exactLength !== null) {
        const s = r.data.length > i.exactLength.value, o = r.data.length < i.exactLength.value;
        (s || o) && (A(r, {
          code: s ? b.too_big : b.too_small,
          minimum: o ? i.exactLength.value : void 0,
          maximum: s ? i.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: i.exactLength.message
        }), a.dirty());
      }
      if (i.minLength !== null && r.data.length < i.minLength.value && (A(r, {
        code: b.too_small,
        minimum: i.minLength.value,
        type: "array",
        inclusive: true,
        exact: false,
        message: i.minLength.message
      }), a.dirty()), i.maxLength !== null && r.data.length > i.maxLength.value && (A(r, {
        code: b.too_big,
        maximum: i.maxLength.value,
        type: "array",
        inclusive: true,
        exact: false,
        message: i.maxLength.message
      }), a.dirty()), r.common.async) return Promise.all([
        ...r.data
      ].map((s, o) => i.type._parseAsync(new dt(r, s, r.path, o)))).then((s) => We.mergeArray(a, s));
      const n = [
        ...r.data
      ].map((s, o) => i.type._parseSync(new dt(r, s, r.path, o)));
      return We.mergeArray(a, n);
    }
    get element() {
      return this._def.type;
    }
    min(e, r) {
      return new Nr({
        ...this._def,
        minLength: {
          value: e,
          message: P.toString(r)
        }
      });
    }
    max(e, r) {
      return new Nr({
        ...this._def,
        maxLength: {
          value: e,
          message: P.toString(r)
        }
      });
    }
    length(e, r) {
      return new Nr({
        ...this._def,
        exactLength: {
          value: e,
          message: P.toString(r)
        }
      });
    }
    nonempty(e) {
      return this.min(1, e);
    }
  };
  Mt.create = (t, e) => new Mt({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: B.ZodArray,
    ...q(e)
  });
  function Lt(t) {
    if (t instanceof Je) {
      const e = {};
      for (const r in t.shape) {
        const a = t.shape[r];
        e[r] = ut.create(Lt(a));
      }
      return new Je({
        ...t._def,
        shape: () => e
      });
    } else return t instanceof Mt ? new Mt({
      ...t._def,
      type: Lt(t.element)
    }) : t instanceof ut ? ut.create(Lt(t.unwrap())) : t instanceof wt ? wt.create(Lt(t.unwrap())) : t instanceof xt ? xt.create(t.items.map((e) => Lt(e))) : t;
  }
  var Je = class at extends X {
    constructor() {
      super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
    }
    _getCached() {
      if (this._cached !== null) return this._cached;
      const e = this._def.shape(), r = te.objectKeys(e);
      return this._cached = {
        shape: e,
        keys: r
      };
    }
    _parse(e) {
      if (this._getType(e) !== z.object) {
        const u = this._getOrReturnCtx(e);
        return A(u, {
          code: b.invalid_type,
          expected: z.object,
          received: u.parsedType
        }), D;
      }
      const { status: a, ctx: i } = this._processInputParams(e), { shape: n, keys: s } = this._getCached(), o = [];
      if (!(this._def.catchall instanceof gt && this._def.unknownKeys === "strip")) for (const u in i.data) s.includes(u) || o.push(u);
      const l = [];
      for (const u of s) {
        const d = n[u], h = i.data[u];
        l.push({
          key: {
            status: "valid",
            value: u
          },
          value: d._parse(new dt(i, h, i.path, u)),
          alwaysSet: u in i.data
        });
      }
      if (this._def.catchall instanceof gt) {
        const u = this._def.unknownKeys;
        if (u === "passthrough") for (const d of o) l.push({
          key: {
            status: "valid",
            value: d
          },
          value: {
            status: "valid",
            value: i.data[d]
          }
        });
        else if (u === "strict") o.length > 0 && (A(i, {
          code: b.unrecognized_keys,
          keys: o
        }), a.dirty());
        else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
      } else {
        const u = this._def.catchall;
        for (const d of o) {
          const h = i.data[d];
          l.push({
            key: {
              status: "valid",
              value: d
            },
            value: u._parse(new dt(i, h, i.path, d)),
            alwaysSet: d in i.data
          });
        }
      }
      return i.common.async ? Promise.resolve().then(async () => {
        const u = [];
        for (const d of l) {
          const h = await d.key, f = await d.value;
          u.push({
            key: h,
            value: f,
            alwaysSet: d.alwaysSet
          });
        }
        return u;
      }).then((u) => We.mergeObjectSync(a, u)) : We.mergeObjectSync(a, l);
    }
    get shape() {
      return this._def.shape();
    }
    strict(e) {
      return P.errToObj, new at({
        ...this._def,
        unknownKeys: "strict",
        ...e !== void 0 ? {
          errorMap: (r, a) => {
            var i, n, s, o;
            const l = (s = (n = (i = this._def).errorMap) === null || n === void 0 ? void 0 : n.call(i, r, a).message) !== null && s !== void 0 ? s : a.defaultError;
            return r.code === "unrecognized_keys" ? {
              message: (o = P.errToObj(e).message) !== null && o !== void 0 ? o : l
            } : {
              message: l
            };
          }
        } : {}
      });
    }
    strip() {
      return new at({
        ...this._def,
        unknownKeys: "strip"
      });
    }
    passthrough() {
      return new at({
        ...this._def,
        unknownKeys: "passthrough"
      });
    }
    extend(e) {
      return new at({
        ...this._def,
        shape: () => ({
          ...this._def.shape(),
          ...e
        })
      });
    }
    merge(e) {
      return new at({
        unknownKeys: e._def.unknownKeys,
        catchall: e._def.catchall,
        shape: () => ({
          ...this._def.shape(),
          ...e._def.shape()
        }),
        typeName: B.ZodObject
      });
    }
    setKey(e, r) {
      return this.augment({
        [e]: r
      });
    }
    catchall(e) {
      return new at({
        ...this._def,
        catchall: e
      });
    }
    pick(e) {
      const r = {};
      return te.objectKeys(e).forEach((a) => {
        e[a] && this.shape[a] && (r[a] = this.shape[a]);
      }), new at({
        ...this._def,
        shape: () => r
      });
    }
    omit(e) {
      const r = {};
      return te.objectKeys(this.shape).forEach((a) => {
        e[a] || (r[a] = this.shape[a]);
      }), new at({
        ...this._def,
        shape: () => r
      });
    }
    deepPartial() {
      return Lt(this);
    }
    partial(e) {
      const r = {};
      return te.objectKeys(this.shape).forEach((a) => {
        const i = this.shape[a];
        e && !e[a] ? r[a] = i : r[a] = i.optional();
      }), new at({
        ...this._def,
        shape: () => r
      });
    }
    required(e) {
      const r = {};
      return te.objectKeys(this.shape).forEach((a) => {
        if (e && !e[a]) r[a] = this.shape[a];
        else {
          let n = this.shape[a];
          for (; n instanceof ut; ) n = n._def.innerType;
          r[a] = n;
        }
      }), new at({
        ...this._def,
        shape: () => r
      });
    }
    keyof() {
      return ci(te.objectKeys(this.shape));
    }
  };
  Je.create = (t, e) => new Je({
    shape: () => t,
    unknownKeys: "strip",
    catchall: gt.create(),
    typeName: B.ZodObject,
    ...q(e)
  });
  Je.strictCreate = (t, e) => new Je({
    shape: () => t,
    unknownKeys: "strict",
    catchall: gt.create(),
    typeName: B.ZodObject,
    ...q(e)
  });
  Je.lazycreate = (t, e) => new Je({
    shape: t,
    unknownKeys: "strip",
    catchall: gt.create(),
    typeName: B.ZodObject,
    ...q(e)
  });
  var br = class extends X {
    _parse(t) {
      const { ctx: e } = this._processInputParams(t), r = this._def.options;
      function a(i) {
        for (const s of i) if (s.result.status === "valid") return s.result;
        for (const s of i) if (s.result.status === "dirty") return e.common.issues.push(...s.ctx.common.issues), s.result;
        const n = i.map((s) => new nt(s.ctx.common.issues));
        return A(e, {
          code: b.invalid_union,
          unionErrors: n
        }), D;
      }
      if (e.common.async) return Promise.all(r.map(async (i) => {
        const n = {
          ...e,
          common: {
            ...e.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: e.data,
            path: e.path,
            parent: n
          }),
          ctx: n
        };
      })).then(a);
      {
        let i;
        const n = [];
        for (const o of r) {
          const l = {
            ...e,
            common: {
              ...e.common,
              issues: []
            },
            parent: null
          }, u = o._parseSync({
            data: e.data,
            path: e.path,
            parent: l
          });
          if (u.status === "valid") return u;
          u.status === "dirty" && !i && (i = {
            result: u,
            ctx: l
          }), l.common.issues.length && n.push(l.common.issues);
        }
        if (i) return e.common.issues.push(...i.ctx.common.issues), i.result;
        const s = n.map((o) => new nt(o));
        return A(e, {
          code: b.invalid_union,
          unionErrors: s
        }), D;
      }
    }
    get options() {
      return this._def.options;
    }
  };
  br.create = (t, e) => new br({
    options: t,
    typeName: B.ZodUnion,
    ...q(e)
  });
  var ft = (t) => t instanceof wr ? ft(t.schema) : t instanceof it ? ft(t.innerType()) : t instanceof kr ? [
    t.value
  ] : t instanceof Or ? t.options : t instanceof Sr ? te.objectValues(t.enum) : t instanceof Cr ? ft(t._def.innerType) : t instanceof _r ? [
    void 0
  ] : t instanceof yr ? [
    null
  ] : t instanceof ut ? [
    void 0,
    ...ft(t.unwrap())
  ] : t instanceof wt ? [
    null,
    ...ft(t.unwrap())
  ] : t instanceof qa || t instanceof zr ? ft(t.unwrap()) : t instanceof Ar ? ft(t._def.innerType) : [], ai = class ni extends X {
    _parse(e) {
      const { ctx: r } = this._processInputParams(e);
      if (r.parsedType !== z.object) return A(r, {
        code: b.invalid_type,
        expected: z.object,
        received: r.parsedType
      }), D;
      const a = this.discriminator, i = r.data[a], n = this.optionsMap.get(i);
      return n ? r.common.async ? n._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }) : n._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      }) : (A(r, {
        code: b.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [
          a
        ]
      }), D);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(e, r, a) {
      const i = /* @__PURE__ */ new Map();
      for (const n of r) {
        const s = ft(n.shape[e]);
        if (!s.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
        for (const o of s) {
          if (i.has(o)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
          i.set(o, n);
        }
      }
      return new ni({
        typeName: B.ZodDiscriminatedUnion,
        discriminator: e,
        options: r,
        optionsMap: i,
        ...q(a)
      });
    }
  };
  function Ia(t, e) {
    const r = pt(t), a = pt(e);
    if (t === e) return {
      valid: true,
      data: t
    };
    if (r === z.object && a === z.object) {
      const i = te.objectKeys(e), n = te.objectKeys(t).filter((o) => i.indexOf(o) !== -1), s = {
        ...t,
        ...e
      };
      for (const o of n) {
        const l = Ia(t[o], e[o]);
        if (!l.valid) return {
          valid: false
        };
        s[o] = l.data;
      }
      return {
        valid: true,
        data: s
      };
    } else if (r === z.array && a === z.array) {
      if (t.length !== e.length) return {
        valid: false
      };
      const i = [];
      for (let n = 0; n < t.length; n++) {
        const s = t[n], o = e[n], l = Ia(s, o);
        if (!l.valid) return {
          valid: false
        };
        i.push(l.data);
      }
      return {
        valid: true,
        data: i
      };
    } else return r === z.date && a === z.date && +t == +e ? {
      valid: true,
      data: t
    } : {
      valid: false
    };
  }
  var xr = class extends X {
    _parse(t) {
      const { status: e, ctx: r } = this._processInputParams(t), a = (i, n) => {
        if (za(i) || za(n)) return D;
        const s = Ia(i.value, n.value);
        return s.valid ? ((Ra(i) || Ra(n)) && e.dirty(), {
          status: e.value,
          value: s.data
        }) : (A(r, {
          code: b.invalid_intersection_types
        }), D);
      };
      return r.common.async ? Promise.all([
        this._def.left._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        }),
        this._def.right._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        })
      ]).then(([i, n]) => a(i, n)) : a(this._def.left._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      }), this._def.right._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      }));
    }
  };
  xr.create = (t, e, r) => new xr({
    left: t,
    right: e,
    typeName: B.ZodIntersection,
    ...q(r)
  });
  var xt = class ii extends X {
    _parse(e) {
      const { status: r, ctx: a } = this._processInputParams(e);
      if (a.parsedType !== z.array) return A(a, {
        code: b.invalid_type,
        expected: z.array,
        received: a.parsedType
      }), D;
      if (a.data.length < this._def.items.length) return A(a, {
        code: b.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      }), D;
      !this._def.rest && a.data.length > this._def.items.length && (A(a, {
        code: b.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      }), r.dirty());
      const n = [
        ...a.data
      ].map((s, o) => {
        const l = this._def.items[o] || this._def.rest;
        return l ? l._parse(new dt(a, s, a.path, o)) : null;
      }).filter((s) => !!s);
      return a.common.async ? Promise.all(n).then((s) => We.mergeArray(r, s)) : We.mergeArray(r, n);
    }
    get items() {
      return this._def.items;
    }
    rest(e) {
      return new ii({
        ...this._def,
        rest: e
      });
    }
  };
  xt.create = (t, e) => {
    if (!Array.isArray(t)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new xt({
      items: t,
      typeName: B.ZodTuple,
      rest: null,
      ...q(e)
    });
  };
  var si = class Pa extends X {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      const { status: r, ctx: a } = this._processInputParams(e);
      if (a.parsedType !== z.object) return A(a, {
        code: b.invalid_type,
        expected: z.object,
        received: a.parsedType
      }), D;
      const i = [], n = this._def.keyType, s = this._def.valueType;
      for (const o in a.data) i.push({
        key: n._parse(new dt(a, o, a.path, o)),
        value: s._parse(new dt(a, a.data[o], a.path, o)),
        alwaysSet: o in a.data
      });
      return a.common.async ? We.mergeObjectAsync(r, i) : We.mergeObjectSync(r, i);
    }
    get element() {
      return this._def.valueType;
    }
    static create(e, r, a) {
      return r instanceof X ? new Pa({
        keyType: e,
        valueType: r,
        typeName: B.ZodRecord,
        ...q(a)
      }) : new Pa({
        keyType: Vt.create(),
        valueType: e,
        typeName: B.ZodRecord,
        ...q(r)
      });
    }
  }, Kr = class extends X {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(t) {
      const { status: e, ctx: r } = this._processInputParams(t);
      if (r.parsedType !== z.map) return A(r, {
        code: b.invalid_type,
        expected: z.map,
        received: r.parsedType
      }), D;
      const a = this._def.keyType, i = this._def.valueType, n = [
        ...r.data.entries()
      ].map(([s, o], l) => ({
        key: a._parse(new dt(r, s, r.path, [
          l,
          "key"
        ])),
        value: i._parse(new dt(r, o, r.path, [
          l,
          "value"
        ]))
      }));
      if (r.common.async) {
        const s = /* @__PURE__ */ new Map();
        return Promise.resolve().then(async () => {
          for (const o of n) {
            const l = await o.key, u = await o.value;
            if (l.status === "aborted" || u.status === "aborted") return D;
            (l.status === "dirty" || u.status === "dirty") && e.dirty(), s.set(l.value, u.value);
          }
          return {
            status: e.value,
            value: s
          };
        });
      } else {
        const s = /* @__PURE__ */ new Map();
        for (const o of n) {
          const l = o.key, u = o.value;
          if (l.status === "aborted" || u.status === "aborted") return D;
          (l.status === "dirty" || u.status === "dirty") && e.dirty(), s.set(l.value, u.value);
        }
        return {
          status: e.value,
          value: s
        };
      }
    }
  };
  Kr.create = (t, e, r) => new Kr({
    valueType: e,
    keyType: t,
    typeName: B.ZodMap,
    ...q(r)
  });
  var $r = class Ma extends X {
    _parse(e) {
      const { status: r, ctx: a } = this._processInputParams(e);
      if (a.parsedType !== z.set) return A(a, {
        code: b.invalid_type,
        expected: z.set,
        received: a.parsedType
      }), D;
      const i = this._def;
      i.minSize !== null && a.data.size < i.minSize.value && (A(a, {
        code: b.too_small,
        minimum: i.minSize.value,
        type: "set",
        inclusive: true,
        exact: false,
        message: i.minSize.message
      }), r.dirty()), i.maxSize !== null && a.data.size > i.maxSize.value && (A(a, {
        code: b.too_big,
        maximum: i.maxSize.value,
        type: "set",
        inclusive: true,
        exact: false,
        message: i.maxSize.message
      }), r.dirty());
      const n = this._def.valueType;
      function s(l) {
        const u = /* @__PURE__ */ new Set();
        for (const d of l) {
          if (d.status === "aborted") return D;
          d.status === "dirty" && r.dirty(), u.add(d.value);
        }
        return {
          status: r.value,
          value: u
        };
      }
      const o = [
        ...a.data.values()
      ].map((l, u) => n._parse(new dt(a, l, a.path, u)));
      return a.common.async ? Promise.all(o).then((l) => s(l)) : s(o);
    }
    min(e, r) {
      return new Ma({
        ...this._def,
        minSize: {
          value: e,
          message: P.toString(r)
        }
      });
    }
    max(e, r) {
      return new Ma({
        ...this._def,
        maxSize: {
          value: e,
          message: P.toString(r)
        }
      });
    }
    size(e, r) {
      return this.min(e, r).max(e, r);
    }
    nonempty(e) {
      return this.min(1, e);
    }
  };
  $r.create = (t, e) => new $r({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: B.ZodSet,
    ...q(e)
  });
  var oi = class Vr extends X {
    constructor() {
      super(...arguments), this.validate = this.implement;
    }
    _parse(e) {
      const { ctx: r } = this._processInputParams(e);
      if (r.parsedType !== z.function) return A(r, {
        code: b.invalid_type,
        expected: z.function,
        received: r.parsedType
      }), D;
      function a(o, l) {
        return Wr({
          data: o,
          path: r.path,
          errorMaps: [
            r.common.contextualErrorMap,
            r.schemaErrorMap,
            qr(),
            Nt
          ].filter((u) => !!u),
          issueData: {
            code: b.invalid_arguments,
            argumentsError: l
          }
        });
      }
      function i(o, l) {
        return Wr({
          data: o,
          path: r.path,
          errorMaps: [
            r.common.contextualErrorMap,
            r.schemaErrorMap,
            qr(),
            Nt
          ].filter((u) => !!u),
          issueData: {
            code: b.invalid_return_type,
            returnTypeError: l
          }
        });
      }
      const n = {
        errorMap: r.common.contextualErrorMap
      }, s = r.data;
      if (this._def.returns instanceof Ft) {
        const o = this;
        return He(async function(...l) {
          const u = new nt([]), d = await o._def.args.parseAsync(l, n).catch((p) => {
            throw u.addIssue(a(l, p)), u;
          }), h = await Reflect.apply(s, this, d);
          return await o._def.returns._def.type.parseAsync(h, n).catch((p) => {
            throw u.addIssue(i(h, p)), u;
          });
        });
      } else {
        const o = this;
        return He(function(...l) {
          const u = o._def.args.safeParse(l, n);
          if (!u.success) throw new nt([
            a(l, u.error)
          ]);
          const d = Reflect.apply(s, this, u.data), h = o._def.returns.safeParse(d, n);
          if (!h.success) throw new nt([
            i(d, h.error)
          ]);
          return h.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...e) {
      return new Vr({
        ...this._def,
        args: xt.create(e).rest(Tt.create())
      });
    }
    returns(e) {
      return new Vr({
        ...this._def,
        returns: e
      });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(e, r, a) {
      return new Vr({
        args: e || xt.create([]).rest(Tt.create()),
        returns: r || Tt.create(),
        typeName: B.ZodFunction,
        ...q(a)
      });
    }
  }, wr = class extends X {
    get schema() {
      return this._def.getter();
    }
    _parse(t) {
      const { ctx: e } = this._processInputParams(t);
      return this._def.getter()._parse({
        data: e.data,
        path: e.path,
        parent: e
      });
    }
  };
  wr.create = (t, e) => new wr({
    getter: t,
    typeName: B.ZodLazy,
    ...q(e)
  });
  var kr = class extends X {
    _parse(t) {
      if (t.data !== this._def.value) {
        const e = this._getOrReturnCtx(t);
        return A(e, {
          received: e.data,
          code: b.invalid_literal,
          expected: this._def.value
        }), D;
      }
      return {
        status: "valid",
        value: t.data
      };
    }
    get value() {
      return this._def.value;
    }
  };
  kr.create = (t, e) => new kr({
    value: t,
    typeName: B.ZodLiteral,
    ...q(e)
  });
  function ci(t, e) {
    return new Or({
      values: t,
      typeName: B.ZodEnum,
      ...q(e)
    });
  }
  var Or = class Oa extends X {
    constructor() {
      super(...arguments), sr.set(this, void 0);
    }
    _parse(e) {
      if (typeof e.data != "string") {
        const r = this._getOrReturnCtx(e), a = this._def.values;
        return A(r, {
          expected: te.joinValues(a),
          received: r.parsedType,
          code: b.invalid_type
        }), D;
      }
      if (Gr(this, sr) || Jn(this, sr, new Set(this._def.values)), !Gr(this, sr).has(e.data)) {
        const r = this._getOrReturnCtx(e), a = this._def.values;
        return A(r, {
          received: r.data,
          code: b.invalid_enum_value,
          options: a
        }), D;
      }
      return He(e.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const e = {};
      for (const r of this._def.values) e[r] = r;
      return e;
    }
    get Values() {
      const e = {};
      for (const r of this._def.values) e[r] = r;
      return e;
    }
    get Enum() {
      const e = {};
      for (const r of this._def.values) e[r] = r;
      return e;
    }
    extract(e, r = this._def) {
      return Oa.create(e, {
        ...this._def,
        ...r
      });
    }
    exclude(e, r = this._def) {
      return Oa.create(this.options.filter((a) => !e.includes(a)), {
        ...this._def,
        ...r
      });
    }
  };
  sr = /* @__PURE__ */ new WeakMap();
  Or.create = ci;
  var Sr = class extends X {
    constructor() {
      super(...arguments), or.set(this, void 0);
    }
    _parse(t) {
      const e = te.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
      if (r.parsedType !== z.string && r.parsedType !== z.number) {
        const a = te.objectValues(e);
        return A(r, {
          expected: te.joinValues(a),
          received: r.parsedType,
          code: b.invalid_type
        }), D;
      }
      if (Gr(this, or) || Jn(this, or, new Set(te.getValidEnumValues(this._def.values))), !Gr(this, or).has(t.data)) {
        const a = te.objectValues(e);
        return A(r, {
          received: r.data,
          code: b.invalid_enum_value,
          options: a
        }), D;
      }
      return He(t.data);
    }
    get enum() {
      return this._def.values;
    }
  };
  or = /* @__PURE__ */ new WeakMap();
  Sr.create = (t, e) => new Sr({
    values: t,
    typeName: B.ZodNativeEnum,
    ...q(e)
  });
  var Ft = class extends X {
    unwrap() {
      return this._def.type;
    }
    _parse(t) {
      const { ctx: e } = this._processInputParams(t);
      if (e.parsedType !== z.promise && e.common.async === false) return A(e, {
        code: b.invalid_type,
        expected: z.promise,
        received: e.parsedType
      }), D;
      const r = e.parsedType === z.promise ? e.data : Promise.resolve(e.data);
      return He(r.then((a) => this._def.type.parseAsync(a, {
        path: e.path,
        errorMap: e.common.contextualErrorMap
      })));
    }
  };
  Ft.create = (t, e) => new Ft({
    type: t,
    typeName: B.ZodPromise,
    ...q(e)
  });
  var it = class extends X {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === B.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(t) {
      const { status: e, ctx: r } = this._processInputParams(t), a = this._def.effect || null, i = {
        addIssue: (n) => {
          A(r, n), n.fatal ? e.abort() : e.dirty();
        },
        get path() {
          return r.path;
        }
      };
      if (i.addIssue = i.addIssue.bind(i), a.type === "preprocess") {
        const n = a.transform(r.data, i);
        if (r.common.async) return Promise.resolve(n).then(async (s) => {
          if (e.value === "aborted") return D;
          const o = await this._def.schema._parseAsync({
            data: s,
            path: r.path,
            parent: r
          });
          return o.status === "aborted" ? D : o.status === "dirty" || e.value === "dirty" ? Dt(o.value) : o;
        });
        {
          if (e.value === "aborted") return D;
          const s = this._def.schema._parseSync({
            data: n,
            path: r.path,
            parent: r
          });
          return s.status === "aborted" ? D : s.status === "dirty" || e.value === "dirty" ? Dt(s.value) : s;
        }
      }
      if (a.type === "refinement") {
        const n = (s) => {
          const o = a.refinement(s, i);
          if (r.common.async) return Promise.resolve(o);
          if (o instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          return s;
        };
        if (r.common.async === false) {
          const s = this._def.schema._parseSync({
            data: r.data,
            path: r.path,
            parent: r
          });
          return s.status === "aborted" ? D : (s.status === "dirty" && e.dirty(), n(s.value), {
            status: e.value,
            value: s.value
          });
        } else return this._def.schema._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        }).then((s) => s.status === "aborted" ? D : (s.status === "dirty" && e.dirty(), n(s.value).then(() => ({
          status: e.value,
          value: s.value
        }))));
      }
      if (a.type === "transform") if (r.common.async === false) {
        const n = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Pt(n)) return n;
        const s = a.transform(n.value, i);
        if (s instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return {
          status: e.value,
          value: s
        };
      } else return this._def.schema._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }).then((n) => Pt(n) ? Promise.resolve(a.transform(n.value, i)).then((s) => ({
        status: e.value,
        value: s
      })) : n);
      te.assertNever(a);
    }
  };
  it.create = (t, e, r) => new it({
    schema: t,
    typeName: B.ZodEffects,
    effect: e,
    ...q(r)
  });
  it.createWithPreprocess = (t, e, r) => new it({
    schema: e,
    effect: {
      type: "preprocess",
      transform: t
    },
    typeName: B.ZodEffects,
    ...q(r)
  });
  var ut = class extends X {
    _parse(t) {
      return this._getType(t) === z.undefined ? He(void 0) : this._def.innerType._parse(t);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ut.create = (t, e) => new ut({
    innerType: t,
    typeName: B.ZodOptional,
    ...q(e)
  });
  var wt = class extends X {
    _parse(t) {
      return this._getType(t) === z.null ? He(null) : this._def.innerType._parse(t);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  wt.create = (t, e) => new wt({
    innerType: t,
    typeName: B.ZodNullable,
    ...q(e)
  });
  var Cr = class extends X {
    _parse(t) {
      const { ctx: e } = this._processInputParams(t);
      let r = e.data;
      return e.parsedType === z.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
        data: r,
        path: e.path,
        parent: e
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  };
  Cr.create = (t, e) => new Cr({
    innerType: t,
    typeName: B.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...q(e)
  });
  var Ar = class extends X {
    _parse(t) {
      const { ctx: e } = this._processInputParams(t), r = {
        ...e,
        common: {
          ...e.common,
          issues: []
        }
      }, a = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: {
          ...r
        }
      });
      return fr(a) ? a.then((i) => ({
        status: "valid",
        value: i.status === "valid" ? i.value : this._def.catchValue({
          get error() {
            return new nt(r.common.issues);
          },
          input: r.data
        })
      })) : {
        status: "valid",
        value: a.status === "valid" ? a.value : this._def.catchValue({
          get error() {
            return new nt(r.common.issues);
          },
          input: r.data
        })
      };
    }
    removeCatch() {
      return this._def.innerType;
    }
  };
  Ar.create = (t, e) => new Ar({
    innerType: t,
    typeName: B.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...q(e)
  });
  var Jr = class extends X {
    _parse(t) {
      if (this._getType(t) !== z.nan) {
        const r = this._getOrReturnCtx(t);
        return A(r, {
          code: b.invalid_type,
          expected: z.nan,
          received: r.parsedType
        }), D;
      }
      return {
        status: "valid",
        value: t.data
      };
    }
  };
  Jr.create = (t) => new Jr({
    typeName: B.ZodNaN,
    ...q(t)
  });
  var Tl = Symbol("zod_brand"), qa = class extends X {
    _parse(t) {
      const { ctx: e } = this._processInputParams(t), r = e.data;
      return this._def.type._parse({
        data: r,
        path: e.path,
        parent: e
      });
    }
    unwrap() {
      return this._def.type;
    }
  }, Wa = class li extends X {
    _parse(e) {
      const { status: r, ctx: a } = this._processInputParams(e);
      if (a.common.async) return (async () => {
        const n = await this._def.in._parseAsync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return n.status === "aborted" ? D : n.status === "dirty" ? (r.dirty(), Dt(n.value)) : this._def.out._parseAsync({
          data: n.value,
          path: a.path,
          parent: a
        });
      })();
      {
        const i = this._def.in._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return i.status === "aborted" ? D : i.status === "dirty" ? (r.dirty(), {
          status: "dirty",
          value: i.value
        }) : this._def.out._parseSync({
          data: i.value,
          path: a.path,
          parent: a
        });
      }
    }
    static create(e, r) {
      return new li({
        in: e,
        out: r,
        typeName: B.ZodPipeline
      });
    }
  }, zr = class extends X {
    _parse(t) {
      const e = this._def.innerType._parse(t), r = (a) => (Pt(a) && (a.value = Object.freeze(a.value)), a);
      return fr(e) ? e.then((a) => r(a)) : r(e);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  zr.create = (t, e) => new zr({
    innerType: t,
    typeName: B.ZodReadonly,
    ...q(e)
  });
  function _n(t, e) {
    const r = typeof t == "function" ? t(e) : typeof t == "string" ? {
      message: t
    } : t;
    return typeof r == "string" ? {
      message: r
    } : r;
  }
  function ui(t, e = {}, r) {
    return t ? Zt.create().superRefine((a, i) => {
      var n, s;
      const o = t(a);
      if (o instanceof Promise) return o.then((l) => {
        var u, d;
        if (!l) {
          const h = _n(e, a), f = (d = (u = h.fatal) !== null && u !== void 0 ? u : r) !== null && d !== void 0 ? d : true;
          i.addIssue({
            code: "custom",
            ...h,
            fatal: f
          });
        }
      });
      if (!o) {
        const l = _n(e, a), u = (s = (n = l.fatal) !== null && n !== void 0 ? n : r) !== null && s !== void 0 ? s : true;
        i.addIssue({
          code: "custom",
          ...l,
          fatal: u
        });
      }
    }) : Zt.create();
  }
  var Il = {
    object: Je.lazycreate
  }, B;
  (function(t) {
    t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
  })(B || (B = {}));
  var Pl = (t, e = {
    message: `Input not instance of ${t.name}`
  }) => ui((r) => r instanceof t, e), di = Vt.create, hi = pr.create, Ml = Jr.create, Ol = mr.create, fi = vr.create, jl = gr.create, Ul = Xr.create, Ll = _r.create, Bl = yr.create, Dl = Zt.create, Hl = Tt.create, Nl = gt.create, Vl = Yr.create, Zl = Mt.create, Fl = Je.create, ql = Je.strictCreate, Wl = br.create, Gl = ai.create, Xl = xr.create, Yl = xt.create, Kl = si.create, $l = Kr.create, Jl = $r.create, Ql = oi.create, eu = wr.create, tu = kr.create, ru = Or.create, au = Sr.create, nu = Ft.create, yn = it.create, iu = ut.create, su = wt.create, ou = it.createWithPreprocess, cu = Wa.create, lu = () => di().optional(), uu = () => hi().optional(), du = () => fi().optional(), hu = {
    string: (t) => Vt.create({
      ...t,
      coerce: true
    }),
    number: (t) => pr.create({
      ...t,
      coerce: true
    }),
    boolean: (t) => vr.create({
      ...t,
      coerce: true
    }),
    bigint: (t) => mr.create({
      ...t,
      coerce: true
    }),
    date: (t) => gr.create({
      ...t,
      coerce: true
    })
  }, fu = D, Le = Object.freeze({
    __proto__: null,
    defaultErrorMap: Nt,
    setErrorMap: ol,
    getErrorMap: qr,
    makeIssue: Wr,
    EMPTY_PATH: cl,
    addIssueToContext: A,
    ParseStatus: We,
    INVALID: D,
    DIRTY: Dt,
    OK: He,
    isAborted: za,
    isDirty: Ra,
    isValid: Pt,
    isAsync: fr,
    get util() {
      return te;
    },
    get objectUtil() {
      return Aa;
    },
    ZodParsedType: z,
    getParsedType: pt,
    ZodType: X,
    datetimeRegex: ti,
    ZodString: Vt,
    ZodNumber: pr,
    ZodBigInt: mr,
    ZodBoolean: vr,
    ZodDate: gr,
    ZodSymbol: Xr,
    ZodUndefined: _r,
    ZodNull: yr,
    ZodAny: Zt,
    ZodUnknown: Tt,
    ZodNever: gt,
    ZodVoid: Yr,
    ZodArray: Mt,
    ZodObject: Je,
    ZodUnion: br,
    ZodDiscriminatedUnion: ai,
    ZodIntersection: xr,
    ZodTuple: xt,
    ZodRecord: si,
    ZodMap: Kr,
    ZodSet: $r,
    ZodFunction: oi,
    ZodLazy: wr,
    ZodLiteral: kr,
    ZodEnum: Or,
    ZodNativeEnum: Sr,
    ZodPromise: Ft,
    ZodEffects: it,
    ZodTransformer: it,
    ZodOptional: ut,
    ZodNullable: wt,
    ZodDefault: Cr,
    ZodCatch: Ar,
    ZodNaN: Jr,
    BRAND: Tl,
    ZodBranded: qa,
    ZodPipeline: Wa,
    ZodReadonly: zr,
    custom: ui,
    Schema: X,
    ZodSchema: X,
    late: Il,
    get ZodFirstPartyTypeKind() {
      return B;
    },
    coerce: hu,
    any: Dl,
    array: Zl,
    bigint: Ol,
    boolean: fi,
    date: jl,
    discriminatedUnion: Gl,
    effect: yn,
    enum: ru,
    function: Ql,
    instanceof: Pl,
    intersection: Xl,
    lazy: eu,
    literal: tu,
    map: $l,
    nan: Ml,
    nativeEnum: au,
    never: Nl,
    null: Bl,
    nullable: su,
    number: hi,
    object: Fl,
    oboolean: du,
    onumber: uu,
    optional: iu,
    ostring: lu,
    pipeline: cu,
    preprocess: ou,
    promise: nu,
    record: Kl,
    set: Jl,
    strictObject: ql,
    string: di,
    symbol: Ul,
    transformer: yn,
    tuple: Yl,
    undefined: Ll,
    union: Wl,
    unknown: Hl,
    void: Vl,
    NEVER: fu,
    ZodIssueCode: b,
    quotelessJson: sl,
    ZodError: nt
  }), bn = {
    name: "@imgly/background-removal",
    version: "1.7.0"
  }, pu = Le.object({
    publicPath: Le.string().optional().describe("The public path to the wasm files and the onnx model.").default("https://staticimgly.com/@imgly/background-removal-data/${PACKAGE_VERSION}/dist/").transform((t) => t.replace("${PACKAGE_NAME}", bn.name).replace("${PACKAGE_VERSION}", bn.version)),
    debug: Le.boolean().default(false).describe("Whether to enable debug logging."),
    rescale: Le.boolean().default(true).describe("Whether to rescale the image."),
    device: Le.enum([
      "cpu",
      "gpu"
    ]).default("cpu").describe("The device to run the model on."),
    proxyToWorker: Le.boolean().default(false).describe("Whether to proxy inference to a web worker."),
    fetchArgs: Le.any().default({}).describe("Arguments to pass to fetch when loading the model."),
    progress: Le.function().args(Le.string(), Le.number(), Le.number()).returns(Le.void()).describe("Progress callback.").optional(),
    model: Le.preprocess((t) => {
      switch (t) {
        case "large":
          return "isnet";
        case "small":
          return "isnet_quint8";
        case "medium":
          return "isnet_fp16";
        default:
          return t;
      }
    }, Le.enum([
      "isnet",
      "isnet_fp16",
      "isnet_quint8"
    ])).default("medium"),
    output: Le.object({
      format: Le.enum([
        "image/png",
        "image/jpeg",
        "image/webp",
        "image/x-rgba8",
        "image/x-alpha8"
      ]).default("image/png"),
      quality: Le.number().default(0.8)
    }).default({})
  }).default({}).transform((t) => (t.debug && console.log("Config:", t), t.debug && !t.progress && (t.progress = t.progress ?? ((e, r, a) => {
    console.debug(`Downloading ${e}: ${r} of ${a}`);
  }), crossOriginIsolated || t.debug && console.debug("Cross-Origin-Isolated is not enabled. Performance will be degraded. Please see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer.")), t));
  function mu(t) {
    return pu.parse(t ?? {});
  }
  var vu = ea(ta());
  async function gu(t) {
    t.debug && console.debug("Loading model...", t.model);
    const e = t.model, a = await (await Gn(`/models/${e}`, t)).arrayBuffer();
    return await nl(a, t);
  }
  async function _u(t) {
    t = mu(t);
    const e = await gu(t);
    return {
      config: t,
      session: {
        base: e
      }
    };
  }
  async function yu(t, e, r) {
    const [i, n, s] = t.shape, o = false;
    let l = mn(t, 1024, 1024, o);
    const u = Qc(l);
    let d = await il(r.base, [
      [
        "input",
        u
      ]
    ], [
      "output"
    ], e), h = (0, vu.default)(d[0].data, [
      1024,
      1024,
      1
    ]), f = tl(h);
    return e.rescale ? (f = mn(f, n, i, o), [
      f,
      t
    ]) : [
      f,
      l
    ];
  }
  var bu = Wc(_u, (t) => JSON.stringify(t));
  async function xu(t, e) {
    var _a6, _b, _c3, _d3;
    const { config: r, session: a } = await bu(e);
    r.progress && r.progress("compute:decode", 0, 4);
    const i = await el(t, r);
    (_a6 = r.progress) == null ? void 0 : _a6.call(r, "compute:inference", 1, 4);
    const [n, s] = await yu(i, r, a);
    (_b = r.progress) == null ? void 0 : _b.call(r, "compute:mask", 2, 4);
    const o = s, [l, u] = o.shape, d = l * u;
    for (let f = 0; f < d; f += 1) o.data[4 * f + 3] = n.data[f];
    (_c3 = r.progress) == null ? void 0 : _c3.call(r, "compute:encode", 3, 4);
    const h = await Xc(o, r.output.quality, r.output.format);
    return (_d3 = r.progress) == null ? void 0 : _d3.call(r, "compute:encode", 4, 4), h;
  }
  const wu = `#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`, xn = 1920 * 1080 * 4;
  class ku {
    constructor(e, r, a, i, n = 0, s = 0, o = 2, l = xn, u = []) {
      __publicField(this, "parentElement");
      __publicField(this, "canvasElement");
      __publicField(this, "gl");
      __publicField(this, "program", null);
      __publicField(this, "uniformLocations", {});
      __publicField(this, "fragmentShader");
      __publicField(this, "rafId", null);
      __publicField(this, "lastRenderTime", 0);
      __publicField(this, "currentFrame", 0);
      __publicField(this, "speed", 0);
      __publicField(this, "currentSpeed", 0);
      __publicField(this, "providedUniforms");
      __publicField(this, "mipmaps", []);
      __publicField(this, "hasBeenDisposed", false);
      __publicField(this, "resolutionChanged", true);
      __publicField(this, "textures", /* @__PURE__ */ new Map());
      __publicField(this, "minPixelRatio");
      __publicField(this, "maxPixelCount");
      __publicField(this, "isSafari", Au());
      __publicField(this, "uniformCache", {});
      __publicField(this, "textureUnitMap", /* @__PURE__ */ new Map());
      __publicField(this, "initProgram", () => {
        const e = Su(this.gl, wu, this.fragmentShader);
        e && (this.program = e);
      });
      __publicField(this, "setupPositionAttribute", () => {
        const e = this.gl.getAttribLocation(this.program, "a_position"), r = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, r);
        const a = [
          -1,
          -1,
          1,
          -1,
          -1,
          1,
          -1,
          1,
          1,
          -1,
          1,
          1
        ];
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(a), this.gl.STATIC_DRAW), this.gl.enableVertexAttribArray(e), this.gl.vertexAttribPointer(e, 2, this.gl.FLOAT, false, 0, 0);
      });
      __publicField(this, "setupUniforms", () => {
        const e = {
          u_time: this.gl.getUniformLocation(this.program, "u_time"),
          u_pixelRatio: this.gl.getUniformLocation(this.program, "u_pixelRatio"),
          u_resolution: this.gl.getUniformLocation(this.program, "u_resolution")
        };
        Object.entries(this.providedUniforms).forEach(([r, a]) => {
          if (e[r] = this.gl.getUniformLocation(this.program, r), a instanceof HTMLImageElement) {
            const i = `${r}AspectRatio`;
            e[i] = this.gl.getUniformLocation(this.program, i);
          }
        }), this.uniformLocations = e;
      });
      __publicField(this, "renderScale", 1);
      __publicField(this, "parentWidth", 0);
      __publicField(this, "parentHeight", 0);
      __publicField(this, "parentDevicePixelWidth", 0);
      __publicField(this, "parentDevicePixelHeight", 0);
      __publicField(this, "devicePixelsSupported", false);
      __publicField(this, "resizeObserver", null);
      __publicField(this, "setupResizeObserver", () => {
        this.resizeObserver = new ResizeObserver(([e]) => {
          var _a6;
          if (e == null ? void 0 : e.borderBoxSize[0]) {
            const r = (_a6 = e.devicePixelContentBoxSize) == null ? void 0 : _a6[0];
            r !== void 0 && (this.devicePixelsSupported = true, this.parentDevicePixelWidth = r.inlineSize, this.parentDevicePixelHeight = r.blockSize), this.parentWidth = e.borderBoxSize[0].inlineSize, this.parentHeight = e.borderBoxSize[0].blockSize;
          }
          this.handleResize();
        }), this.resizeObserver.observe(this.parentElement);
      });
      __publicField(this, "handleVisualViewportChange", () => {
        var _a6;
        (_a6 = this.resizeObserver) == null ? void 0 : _a6.disconnect(), this.setupResizeObserver();
      });
      __publicField(this, "handleResize", () => {
        let e = 0, r = 0;
        const a = Math.max(1, window.devicePixelRatio), i = (visualViewport == null ? void 0 : visualViewport.scale) ?? 1;
        if (this.devicePixelsSupported) {
          const d = Math.max(1, this.minPixelRatio / a);
          e = this.parentDevicePixelWidth * d * i, r = this.parentDevicePixelHeight * d * i;
        } else {
          let d = Math.max(a, this.minPixelRatio) * i;
          if (this.isSafari) {
            const h = zu();
            d *= Math.max(1, h);
          }
          e = Math.round(this.parentWidth) * d, r = Math.round(this.parentHeight) * d;
        }
        const n = Math.sqrt(this.maxPixelCount) / Math.sqrt(e * r), s = Math.min(1, n), o = Math.round(e * s), l = Math.round(r * s), u = o / Math.round(this.parentWidth);
        (this.canvasElement.width !== o || this.canvasElement.height !== l || this.renderScale !== u) && (this.renderScale = u, this.canvasElement.width = o, this.canvasElement.height = l, this.resolutionChanged = true, this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.render(performance.now()));
      });
      __publicField(this, "render", (e) => {
        if (this.hasBeenDisposed) return;
        if (this.program === null) {
          console.warn("Tried to render before program or gl was initialized");
          return;
        }
        const r = e - this.lastRenderTime;
        this.lastRenderTime = e, this.currentSpeed !== 0 && (this.currentFrame += r * this.currentSpeed), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.useProgram(this.program), this.gl.uniform1f(this.uniformLocations.u_time, this.currentFrame * 1e-3), this.resolutionChanged && (this.gl.uniform2f(this.uniformLocations.u_resolution, this.gl.canvas.width, this.gl.canvas.height), this.gl.uniform1f(this.uniformLocations.u_pixelRatio, this.renderScale), this.resolutionChanged = false), this.gl.drawArrays(this.gl.TRIANGLES, 0, 6), this.currentSpeed !== 0 ? this.requestRender() : this.rafId = null;
      });
      __publicField(this, "requestRender", () => {
        this.rafId !== null && cancelAnimationFrame(this.rafId), this.rafId = requestAnimationFrame(this.render);
      });
      __publicField(this, "setTextureUniform", (e, r) => {
        if (!r.complete || r.naturalWidth === 0) throw new Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);
        const a = this.textures.get(e);
        a && this.gl.deleteTexture(a), this.textureUnitMap.has(e) || this.textureUnitMap.set(e, this.textureUnitMap.size);
        const i = this.textureUnitMap.get(e);
        this.gl.activeTexture(this.gl.TEXTURE0 + i);
        const n = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, n), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, r), this.mipmaps.includes(e) && (this.gl.generateMipmap(this.gl.TEXTURE_2D), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR));
        const s = this.gl.getError();
        if (s !== this.gl.NO_ERROR || n === null) {
          console.error("Paper Shaders: WebGL error when uploading texture:", s);
          return;
        }
        this.textures.set(e, n);
        const o = this.uniformLocations[e];
        if (o) {
          this.gl.uniform1i(o, i);
          const l = `${e}AspectRatio`, u = this.uniformLocations[l];
          if (u) {
            const d = r.naturalWidth / r.naturalHeight;
            this.gl.uniform1f(u, d);
          }
        }
      });
      __publicField(this, "areUniformValuesEqual", (e, r) => e === r ? true : Array.isArray(e) && Array.isArray(r) && e.length === r.length ? e.every((a, i) => this.areUniformValuesEqual(a, r[i])) : false);
      __publicField(this, "setUniformValues", (e) => {
        this.gl.useProgram(this.program), Object.entries(e).forEach(([r, a]) => {
          let i = a;
          if (a instanceof HTMLImageElement && (i = `${a.src.slice(0, 200)}|${a.naturalWidth}x${a.naturalHeight}`), this.areUniformValuesEqual(this.uniformCache[r], i)) return;
          this.uniformCache[r] = i;
          const n = this.uniformLocations[r];
          if (!n) {
            console.warn(`Uniform location for ${r} not found`);
            return;
          }
          if (a instanceof HTMLImageElement) this.setTextureUniform(r, a);
          else if (Array.isArray(a)) {
            let s = null, o = null;
            if (a[0] !== void 0 && Array.isArray(a[0])) {
              const l = a[0].length;
              if (a.every((u) => u.length === l)) s = a.flat(), o = l;
              else {
                console.warn(`All child arrays must be the same length for ${r}`);
                return;
              }
            } else s = a, o = s.length;
            switch (o) {
              case 2:
                this.gl.uniform2fv(n, s);
                break;
              case 3:
                this.gl.uniform3fv(n, s);
                break;
              case 4:
                this.gl.uniform4fv(n, s);
                break;
              case 9:
                this.gl.uniformMatrix3fv(n, false, s);
                break;
              case 16:
                this.gl.uniformMatrix4fv(n, false, s);
                break;
              default:
                console.warn(`Unsupported uniform array length: ${o}`);
            }
          } else typeof a == "number" ? this.gl.uniform1f(n, a) : typeof a == "boolean" ? this.gl.uniform1i(n, a ? 1 : 0) : console.warn(`Unsupported uniform type for ${r}: ${typeof a}`);
        });
      });
      __publicField(this, "getCurrentFrame", () => this.currentFrame);
      __publicField(this, "setFrame", (e) => {
        this.currentFrame = e, this.lastRenderTime = performance.now(), this.render(performance.now());
      });
      __publicField(this, "setSpeed", (e = 1) => {
        this.speed = e, this.setCurrentSpeed(document.hidden ? 0 : e);
      });
      __publicField(this, "setCurrentSpeed", (e) => {
        this.currentSpeed = e, this.rafId === null && e !== 0 && (this.lastRenderTime = performance.now(), this.rafId = requestAnimationFrame(this.render)), this.rafId !== null && e === 0 && (cancelAnimationFrame(this.rafId), this.rafId = null);
      });
      __publicField(this, "setMaxPixelCount", (e = xn) => {
        this.maxPixelCount = e, this.handleResize();
      });
      __publicField(this, "setMinPixelRatio", (e = 2) => {
        this.minPixelRatio = e, this.handleResize();
      });
      __publicField(this, "setUniforms", (e) => {
        this.setUniformValues(e), this.providedUniforms = {
          ...this.providedUniforms,
          ...e
        }, this.render(performance.now());
      });
      __publicField(this, "handleDocumentVisibilityChange", () => {
        this.setCurrentSpeed(document.hidden ? 0 : this.speed);
      });
      __publicField(this, "dispose", () => {
        this.hasBeenDisposed = true, this.rafId !== null && (cancelAnimationFrame(this.rafId), this.rafId = null), this.gl && this.program && (this.textures.forEach((e) => {
          this.gl.deleteTexture(e);
        }), this.textures.clear(), this.gl.deleteProgram(this.program), this.program = null, this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.gl.getError()), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", this.handleVisualViewportChange), document.removeEventListener("visibilitychange", this.handleDocumentVisibilityChange), this.uniformLocations = {}, this.canvasElement.remove(), delete this.parentElement.paperShaderMount;
      });
      if (e instanceof HTMLElement) this.parentElement = e;
      else throw new Error("Paper Shaders: parent element must be an HTMLElement");
      if (!document.querySelector("style[data-paper-shader]")) {
        const f = document.createElement("style");
        f.innerHTML = Cu, f.setAttribute("data-paper-shader", ""), document.head.prepend(f);
      }
      const d = document.createElement("canvas");
      this.canvasElement = d, this.parentElement.prepend(d), this.fragmentShader = r, this.providedUniforms = a, this.mipmaps = u, this.currentFrame = s, this.minPixelRatio = o, this.maxPixelCount = l;
      const h = d.getContext("webgl2", i);
      if (!h) throw new Error("Paper Shaders: WebGL is not supported in this browser");
      this.gl = h, this.initProgram(), this.setupPositionAttribute(), this.setupUniforms(), this.setUniformValues(this.providedUniforms), this.setupResizeObserver(), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", this.handleVisualViewportChange), this.setSpeed(n), this.parentElement.setAttribute("data-paper-shader", ""), this.parentElement.paperShaderMount = this, document.addEventListener("visibilitychange", this.handleDocumentVisibilityChange);
    }
  }
  function wn(t, e, r) {
    const a = t.createShader(e);
    return a ? (t.shaderSource(a, r), t.compileShader(a), t.getShaderParameter(a, t.COMPILE_STATUS) ? a : (console.error("An error occurred compiling the shaders: " + t.getShaderInfoLog(a)), t.deleteShader(a), null)) : null;
  }
  function Su(t, e, r) {
    const a = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT), i = a ? a.precision : null;
    i && i < 23 && (e = e.replace(/precision\s+(lowp|mediump)\s+float;/g, "precision highp float;"), r = r.replace(/precision\s+(lowp|mediump)\s+float/g, "precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g, "$1 highp $3"));
    const n = wn(t, t.VERTEX_SHADER, e), s = wn(t, t.FRAGMENT_SHADER, r);
    if (!n || !s) return null;
    const o = t.createProgram();
    return o ? (t.attachShader(o, n), t.attachShader(o, s), t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS) ? (t.detachShader(o, n), t.detachShader(o, s), t.deleteShader(n), t.deleteShader(s), o) : (console.error("Unable to initialize the shader program: " + t.getProgramInfoLog(o)), t.deleteProgram(o), t.deleteShader(n), t.deleteShader(s), null)) : null;
  }
  const Cu = `@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;
  function Au() {
    const t = navigator.userAgent.toLowerCase();
    return t.includes("safari") && !t.includes("chrome") && !t.includes("android");
  }
  function zu() {
    const t = (visualViewport == null ? void 0 : visualViewport.scale) ?? 1, e = (visualViewport == null ? void 0 : visualViewport.width) ?? window.innerWidth, r = window.innerWidth - document.documentElement.clientWidth, a = t * e + r, i = outerWidth / a, n = Math.round(100 * i);
    return n % 5 === 0 ? n / 100 : n === 33 ? 1 / 3 : n === 67 ? 2 / 3 : n === 133 ? 4 / 3 : i;
  }
  const Ru = {
    fit: "contain",
    scale: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    originX: 0.5,
    originY: 0.5,
    worldWidth: 0,
    worldHeight: 0
  }, Eu = {
    none: 0,
    contain: 1,
    cover: 2
  }, Tu = `
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`, Iu = `
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`, Pu = {
    random: 1,
    "2x2": 2,
    "4x4": 3,
    "8x8": 4
  }, Mu = `#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;

uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_type;
uniform float u_pxSize;
uniform bool u_originalColors;
uniform bool u_inverted;
uniform float u_colorSteps;

out vec4 fragColor;


${Iu}
${Tu}

float getUvFrame(vec2 uv, vec2 pad) {
  float aa = 0.0001;

  float left   = smoothstep(-pad.x, -pad.x + aa, uv.x);
  float right  = smoothstep(1.0 + pad.x, 1.0 + pad.x - aa, uv.x);
  float bottom = smoothstep(-pad.y, -pad.y + aa, uv.y);
  float top    = smoothstep(1.0 + pad.y, 1.0 + pad.y - aa, uv.y);

  return left * right * bottom * top;
}

vec2 getImageUV(vec2 uv) {
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  float r = u_rotation * PI / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  vec2 imageUV = uv;
  imageUV *= imageBoxScale;
  imageUV += boxOrigin * (imageBoxScale - 1.);
  imageUV += graphicOffset;
  imageUV /= u_scale;
  imageUV.x *= u_imageAspectRatio;
  imageUV = graphicRotation * imageUV;
  imageUV.x /= u_imageAspectRatio;

  imageUV += .5;
  imageUV.y = 1. - imageUV.y;

  return imageUV;
}

const int bayer2x2[4] = int[4](0, 2, 3, 1);
const int bayer4x4[16] = int[16](
0, 8, 2, 10,
12, 4, 14, 6,
3, 11, 1, 9,
15, 7, 13, 5
);

const int bayer8x8[64] = int[64](
0, 32, 8, 40, 2, 34, 10, 42,
48, 16, 56, 24, 50, 18, 58, 26,
12, 44, 4, 36, 14, 46, 6, 38,
60, 28, 52, 20, 62, 30, 54, 22,
3, 35, 11, 43, 1, 33, 9, 41,
51, 19, 59, 27, 49, 17, 57, 25,
15, 47, 7, 39, 13, 45, 5, 37,
63, 31, 55, 23, 61, 29, 53, 21
);

float getBayerValue(vec2 uv, int size) {
  ivec2 pos = ivec2(fract(uv / float(size)) * float(size));
  int index = pos.y * size + pos.x;

  if (size == 2) {
    return float(bayer2x2[index]) / 4.0;
  } else if (size == 4) {
    return float(bayer4x4[index]) / 16.0;
  } else if (size == 8) {
    return float(bayer8x8[index]) / 64.0;
  }
  return 0.0;
}


void main() {

  float pxSize = u_pxSize * u_pixelRatio;
  vec2 pxSizeUV = gl_FragCoord.xy - .5 * u_resolution;
  pxSizeUV /= pxSize;
  vec2 canvasPixelizedUV = (floor(pxSizeUV) + .5) * pxSize;
  vec2 normalizedUV = canvasPixelizedUV / u_resolution;

  vec2 imageUV = getImageUV(normalizedUV);
  vec2 ditheringNoiseUV = canvasPixelizedUV;
  vec4 image = texture(u_image, imageUV);
  float frame = getUvFrame(imageUV, pxSize / u_resolution);

  int type = int(floor(u_type));
  float dithering = 0.0;

  float lum = dot(vec3(.2126, .7152, .0722), image.rgb);
  lum = u_inverted ? (1. - lum) : lum;

  switch (type) {
    case 1: {
      dithering = step(hash21(ditheringNoiseUV), lum);
    } break;
    case 2:
    dithering = getBayerValue(pxSizeUV, 2);
    break;
    case 3:
    dithering = getBayerValue(pxSizeUV, 4);
    break;
    default :
    dithering = getBayerValue(pxSizeUV, 8);
    break;
  }

  float colorSteps = max(floor(u_colorSteps), 1.);
  vec3 color = vec3(0.0);
  float opacity = 1.;

  dithering -= .5;
  float brightness = clamp(lum + dithering / colorSteps, 0.0, 1.0);
  brightness = mix(0.0, brightness, frame);
  brightness = mix(0.0, brightness, image.a);
  float quantLum = floor(brightness * colorSteps + 0.5) / colorSteps;
  quantLum = mix(0.0, quantLum, frame);

  if (u_originalColors == true) {
    vec3 normColor = image.rgb / max(lum, 0.001);
    color = normColor * quantLum;

    float quantAlpha = floor(image.a * colorSteps + 0.5) / colorSteps;
    opacity = mix(quantLum, 1., quantAlpha);
  } else {
    vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
    float fgOpacity = u_colorFront.a;
    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    float bgOpacity = u_colorBack.a;
    vec3 hlColor = u_colorHighlight.rgb * u_colorHighlight.a;
    float hlOpacity = u_colorHighlight.a;

    fgColor = mix(fgColor, hlColor, step(1.02 - .02 * u_colorSteps, brightness));
    fgOpacity = mix(fgOpacity, hlOpacity, step(1.02 - .02 * u_colorSteps, brightness));

    color = fgColor * quantLum;
    opacity = fgOpacity * quantLum;
    color += bgColor * (1.0 - opacity);
    opacity += bgOpacity * (1.0 - opacity);
  }

  fragColor = vec4(color, opacity);
}
`;
  function ga(t) {
    if (Array.isArray(t)) return t.length === 4 ? t : t.length === 3 ? [
      ...t,
      1
    ] : _a;
    if (typeof t != "string") return _a;
    let e, r, a, i = 1;
    if (t.startsWith("#")) [e, r, a, i] = Ou(t);
    else if (t.startsWith("rgb")) [e, r, a, i] = ju(t);
    else if (t.startsWith("hsl")) [e, r, a, i] = Lu(Uu(t));
    else return console.error("Unsupported color format", t), _a;
    return [
      Lr(e, 0, 1),
      Lr(r, 0, 1),
      Lr(a, 0, 1),
      Lr(i, 0, 1)
    ];
  }
  function Ou(t) {
    t = t.replace(/^#/, ""), t.length === 3 && (t = t.split("").map((n) => n + n).join("")), t.length === 6 && (t = t + "ff");
    const e = parseInt(t.slice(0, 2), 16) / 255, r = parseInt(t.slice(2, 4), 16) / 255, a = parseInt(t.slice(4, 6), 16) / 255, i = parseInt(t.slice(6, 8), 16) / 255;
    return [
      e,
      r,
      a,
      i
    ];
  }
  function ju(t) {
    const e = t.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);
    return e ? [
      parseInt(e[1] ?? "0") / 255,
      parseInt(e[2] ?? "0") / 255,
      parseInt(e[3] ?? "0") / 255,
      e[4] === void 0 ? 1 : parseFloat(e[4])
    ] : [
      0,
      0,
      0,
      1
    ];
  }
  function Uu(t) {
    const e = t.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);
    return e ? [
      parseInt(e[1] ?? "0"),
      parseInt(e[2] ?? "0"),
      parseInt(e[3] ?? "0"),
      e[4] === void 0 ? 1 : parseFloat(e[4])
    ] : [
      0,
      0,
      0,
      1
    ];
  }
  function Lu(t) {
    const [e, r, a, i] = t, n = e / 360, s = r / 100, o = a / 100;
    let l, u, d;
    if (r === 0) l = u = d = o;
    else {
      const h = (y, g, _) => (_ < 0 && (_ += 1), _ > 1 && (_ -= 1), _ < 0.16666666666666666 ? y + (g - y) * 6 * _ : _ < 0.5 ? g : _ < 0.6666666666666666 ? y + (g - y) * (0.6666666666666666 - _) * 6 : y), f = o < 0.5 ? o * (1 + s) : o + s - o * s, p = 2 * o - f;
      l = h(p, f, n + 1 / 3), u = h(p, f, n), d = h(p, f, n - 1 / 3);
    }
    return [
      l,
      u,
      d,
      i
    ];
  }
  const Lr = (t, e, r) => Math.min(Math.max(t, e), r), _a = [
    0,
    0,
    0,
    1
  ];
  function Bu() {
    if (typeof window > "u") {
      console.warn("Paper Shaders: can\u2019t create an image on the server");
      return;
    }
    const t = new Image();
    return t.src = Du, t;
  }
  const Du = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  var Hu = j("<div><!></div>");
  function Nu(t, e) {
    Ye(e, true);
    let r = O(e, "speed", 3, 0), a = O(e, "frame", 3, 0), i = kt(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "fragmentShader",
      "uniforms",
      "webGlContextAttributes",
      "speed",
      "frame",
      "width",
      "height",
      "minPixelRatio",
      "maxPixelCount",
      "mipmaps",
      "style",
      "children"
    ]), n = null, s = H(false);
    async function o(f) {
      const p = {}, y = [], g = (R) => {
        try {
          return R.startsWith("/") || new URL(R), true;
        } catch {
          return false;
        }
      }, _ = (R) => {
        try {
          return R.startsWith("/") ? false : new URL(R, window.location.origin).origin !== window.location.origin;
        } catch {
          return false;
        }
      };
      return Object.entries(f).forEach(([R, M]) => {
        if (typeof M == "string") {
          if (!M) {
            p[R] = Bu();
            return;
          }
          if (!g(M)) {
            console.warn(`Uniform "${R}" has invalid URL "${M}". Skipping image loading.`);
            return;
          }
          const V = new Promise((L, Z) => {
            const de = new Image();
            _(M) && (de.crossOrigin = "anonymous"), de.onload = () => {
              p[R] = de, L();
            }, de.onerror = () => {
              console.error(`Could not set uniforms. Failed to load image at ${M}`), Z();
            }, de.src = M;
          });
          y.push(V);
        } else p[R] = M;
      }), await Promise.all(y), p;
    }
    function l() {
      if (e.width === void 0 && e.height === void 0) return typeof e.style == "string" ? e.style : void 0;
      const f = typeof e.width == "string" && !Number.isNaN(+e.width) ? `${+e.width}px` : typeof e.width == "number" ? `${e.width}px` : e.width, p = typeof e.height == "string" && !Number.isNaN(+e.height) ? `${+e.height}px` : typeof e.height == "number" ? `${e.height}px` : e.height;
      let y = "";
      return f && (y += `width: ${f};`), p && (y += `height: ${p};`), typeof e.style == "string" && (y += e.style), y || void 0;
    }
    const u = (f) => {
      let p = false;
      return (async () => {
        const g = await o(e.uniforms);
        p || (n = new ku(f, e.fragmentShader, g, e.webGlContextAttributes, r(), a(), e.minPixelRatio, e.maxPixelCount, e.mipmaps), x(s, true));
      })(), () => {
        p = true, n == null ? void 0 : n.dispose(), n = null, x(s, false);
      };
    };
    Ut(() => [
      e.uniforms,
      c(s)
    ], () => {
      if (!c(s) || !n) return;
      const f = e.uniforms;
      let p = false;
      return (async () => {
        const g = await o(f);
        !p && n && n.setUniforms(g);
      })(), () => {
        p = true;
      };
    }), Ut(() => [
      c(s),
      r()
    ], () => {
      n && c(s) && n.setSpeed(r());
    }), Ut(() => [
      c(s),
      e.maxPixelCount
    ], () => {
      n && c(s) && n.setMaxPixelCount(e.maxPixelCount);
    }), Ut(() => [
      c(s),
      e.minPixelRatio
    ], () => {
      n && c(s) && n.setMinPixelRatio(e.minPixelRatio);
    }), Ut(() => [
      c(s),
      a()
    ], () => {
      n && c(s) && n.setFrame(a());
    });
    var d = Hu();
    Pr(d, (f) => ({
      style: f,
      ...i
    }), [
      l
    ]);
    var h = k(d);
    yt(h, () => e.children ?? Tr), S(d), Di(d, () => u), C(t, d), Ke();
  }
  const je = {
    params: {
      ...Ru,
      fit: "cover",
      speed: 0,
      frame: 0,
      colorFront: "#94ffaf",
      colorBack: "#000c38",
      colorHighlight: "#eaff94",
      type: "8x8",
      size: 2,
      colorSteps: 2,
      originalColors: false
    }
  };
  function ya(t, e) {
    Ye(e, true);
    let r = O(e, "speed", 19, () => je.params.speed), a = O(e, "frame", 19, () => je.params.frame), i = O(e, "colorFront", 19, () => je.params.colorFront), n = O(e, "colorBack", 19, () => je.params.colorBack), s = O(e, "colorHighlight", 19, () => je.params.colorHighlight), o = O(e, "image", 3, ""), l = O(e, "type", 19, () => je.params.type), u = O(e, "colorSteps", 19, () => je.params.colorSteps), d = O(e, "originalColors", 19, () => je.params.originalColors), h = O(e, "size", 19, () => je.params.size), f = O(e, "fit", 19, () => je.params.fit), p = O(e, "scale", 19, () => je.params.scale), y = O(e, "rotation", 19, () => je.params.rotation), g = O(e, "originX", 19, () => je.params.originX), _ = O(e, "originY", 19, () => je.params.originY), R = O(e, "offsetX", 19, () => je.params.offsetX), M = O(e, "offsetY", 19, () => je.params.offsetY), V = O(e, "worldWidth", 19, () => je.params.worldWidth), L = O(e, "worldHeight", 19, () => je.params.worldHeight), Z = kt(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "speed",
      "frame",
      "colorFront",
      "colorBack",
      "colorHighlight",
      "image",
      "type",
      "colorSteps",
      "originalColors",
      "size",
      "fit",
      "scale",
      "rotation",
      "originX",
      "originY",
      "offsetX",
      "offsetY",
      "worldWidth",
      "worldHeight",
      "children"
    ]);
    const de = J(() => ({
      u_image: o(),
      u_colorFront: ga(i()),
      u_colorBack: ga(n()),
      u_colorHighlight: ga(s()),
      u_type: Pu[l()],
      u_pxSize: h(),
      u_colorSteps: u(),
      u_originalColors: d(),
      u_fit: Eu[f()],
      u_rotation: y(),
      u_scale: p(),
      u_offsetX: R(),
      u_offsetY: M(),
      u_originX: g(),
      u_originY: _(),
      u_worldWidth: V(),
      u_worldHeight: L()
    }));
    Nu(t, Da(() => Z, {
      get speed() {
        return r();
      },
      get frame() {
        return a();
      },
      get fragmentShader() {
        return Mu;
      },
      get uniforms() {
        return c(de);
      },
      children: (I, E) => {
        var Q = De(), ae = oe(Q);
        yt(ae, () => e.children ?? Tr), C(I, Q);
      },
      $$slots: {
        default: true
      }
    })), Ke();
  }
  function kn(t, e, r) {
    return t >= e * r ? {
      width: e * r,
      height: e
    } : {
      width: t,
      height: t / r
    };
  }
  function ba(t, e, r, a) {
    return {
      x: Sn(t.x, e.width, r.width, a),
      y: Sn(t.y, e.height, r.height, a)
    };
  }
  function Sn(t, e, r, a) {
    let i = e * a / 2 - r / 2;
    return a < 1 && (i = r / 2 - e * a / 2), Math.min(i, Math.max(t, -i));
  }
  function Cn(t, e) {
    return Math.sqrt((t.y - e.y) ** 2 + (t.x - e.x) ** 2);
  }
  function Vu(t, e, r, a, i, n = true) {
    const s = n ? Zu : Fu, o = {
      x: s(100, ((e.width - r.width / i) / 2 - t.x / i) / e.width * 100),
      y: s(100, ((e.height - r.height / i) / 2 - t.y / i) / e.height * 100),
      width: s(100, r.width / e.width * 100 / i),
      height: s(100, r.height / e.height * 100 / i)
    }, l = s(e.naturalWidth, o.width * e.naturalWidth / 100, true), u = s(e.naturalHeight, o.height * e.naturalHeight / 100, true), h = e.naturalWidth >= e.naturalHeight * a ? {
      width: Math.round(u * a),
      height: u
    } : {
      width: l,
      height: Math.round(l / a)
    }, f = {
      ...h,
      x: s(e.naturalWidth - h.width, o.x * e.naturalWidth / 100, true),
      y: s(e.naturalHeight - h.height, o.y * e.naturalHeight / 100, true)
    };
    return {
      croppedAreaPercentages: o,
      croppedAreaPixels: f
    };
  }
  function Zu(t, e, r = false) {
    const a = r ? Math.round(e) : e;
    return Math.min(t, Math.max(0, a));
  }
  function Fu(t, e) {
    return e;
  }
  function An(t, e) {
    return {
      x: (e.x + t.x) / 2,
      y: (e.y + t.y) / 2
    };
  }
  var qu = j('<div data-testid="cropper"></div>'), Wu = j('<div class="svelte-easy-crop-container svelte-ys88g2" role="button" data-testid="container"><img class="svelte-easy-crop-image svelte-ys88g2" alt=""/> <!></div>');
  function Gu(t, e) {
    Ye(e, true);
    let r = O(e, "crop", 31, () => ke({
      x: 0,
      y: 0
    })), a = O(e, "zoom", 15, 1), i = O(e, "minZoom", 11, 1), n = O(e, "maxZoom", 11, 3), s = O(e, "aspect", 3, 4 / 3), o = O(e, "cropSize", 3, null), l = O(e, "cropShape", 3, "rect"), u = O(e, "showGrid", 3, true), d = O(e, "zoomSpeed", 3, 1), h = O(e, "crossOrigin", 3, null), f = O(e, "restrictPosition", 3, true), p = O(e, "tabindex", 3, void 0), y = H(null), g = H(ke({
      width: 0,
      height: 0,
      naturalWidth: 0,
      naturalHeight: 0
    })), _ = H(null), R = H(null), M = H(null), V = H(ke({
      x: 0,
      y: 0
    })), L = H(ke({
      x: 0,
      y: 0
    })), Z = H(0), de = H(null), I = H(null);
    On(() => {
      var _a6;
      ((_a6 = c(M)) == null ? void 0 : _a6.complete) && ae(), c(_) && (c(_).addEventListener("gesturestart", E), c(_).addEventListener("gesturechange", E));
    }), jn(() => {
      c(_) && (c(_).removeEventListener("gesturestart", E), c(_).removeEventListener("gesturechange", E)), Q();
    });
    const E = (m) => m.preventDefault(), Q = () => {
      typeof document < "u" && (document.removeEventListener("mousemove", Ct), document.removeEventListener("mouseup", ct), document.removeEventListener("touchmove", ht), document.removeEventListener("touchend", ct));
    }, ae = () => {
      var _a6;
      Oe(), Ie(), (_a6 = e.onimgload) == null ? void 0 : _a6.call(e, c(g));
    }, T = () => o() ? o().width / o().height : s(), Oe = () => {
      c(M) && (x(g, {
        width: c(M).width,
        height: c(M).height,
        naturalWidth: c(M).naturalWidth,
        naturalHeight: c(M).naturalHeight
      }, true), x(y, o() ? o() : kn(c(M).width, c(M).height, s()), true)), c(_) && x(R, c(_).getBoundingClientRect(), true);
    }, st = (m) => ({
      x: Number(m.clientX),
      y: Number(m.clientY)
    }), Ne = (m) => ({
      x: Number(m.clientX),
      y: Number(m.clientY)
    }), ot = (m) => {
      m.preventDefault(), document.addEventListener("mousemove", Ct), document.addEventListener("mouseup", ct), At(st(m));
    }, Ct = (m) => zt(st(m)), Ot = (m) => {
      m.preventDefault(), document.addEventListener("touchmove", ht, {
        passive: false
      }), document.addEventListener("touchend", ct), m.touches.length === 2 ? W(m) : m.touches.length === 1 && At(Ne(m.touches[0]));
    }, ht = (m) => {
      m.preventDefault(), m.touches.length === 2 ? Y(m) : m.touches.length === 1 && zt(Ne(m.touches[0]));
    }, At = ({ x: m, y: w }) => {
      x(V, {
        x: m,
        y: w
      }, true), x(L, {
        x: r().x,
        y: r().y
      }, true);
    }, zt = ({ x: m, y: w }) => {
      c(de) && window.cancelAnimationFrame(c(de)), x(de, window.requestAnimationFrame(() => {
        if (m === void 0 || w === void 0 || !c(y)) return;
        const U = m - c(V).x, F = w - c(V).y, pe = {
          x: c(L).x + U,
          y: c(L).y + F
        };
        r(f() ? ba(pe, c(g), c(y), a()) : pe);
      }), true);
    }, ct = () => {
      Q(), Ie();
    }, W = (m) => {
      const w = Ne(m.touches[0]), U = Ne(m.touches[1]);
      x(Z, Cn(w, U), true), At(An(w, U));
    }, Y = (m) => {
      const w = Ne(m.touches[0]), U = Ne(m.touches[1]), F = An(w, U);
      zt(F), c(I) && window.cancelAnimationFrame(c(I)), x(I, window.requestAnimationFrame(() => {
        const pe = Cn(w, U), xe = a() * (pe / c(Z));
        Ee(xe, F), x(Z, pe, true);
      }), true);
    }, ie = (m) => {
      m.preventDefault();
      const w = st(m), U = a() - m.deltaY * d() / 200;
      Ee(U, w);
    }, ce = ({ x: m, y: w }) => {
      if (!c(R)) throw new Error("The Cropper is not mounted");
      return {
        x: c(R).width / 2 - (m - c(R).left),
        y: c(R).height / 2 - (w - c(R).top)
      };
    }, K = ({ x: m, y: w }) => ({
      x: (m + r().x) / a(),
      y: (w + r().y) / a()
    }), Ee = (m, w) => {
      if (!c(y)) return;
      const U = ce(w), F = K(U);
      a(Math.min(n(), Math.max(m, i())));
      const pe = {
        x: F.x * a() - U.x,
        y: F.y * a() - U.y
      };
      r(f() ? ba(pe, c(g), c(y), a()) : pe);
    }, Ie = () => {
      var _a6;
      if (!c(y) || c(y).width === 0) return;
      const m = f() ? ba(r(), c(g), c(y), a()) : r(), { croppedAreaPercentages: w, croppedAreaPixels: U } = Vu(m, c(g), c(y), T(), a(), f());
      (_a6 = e.oncropcomplete) == null ? void 0 : _a6.call(e, {
        percent: w,
        pixels: U
      });
    };
    Xe(() => {
      c(M) && x(y, o() ? o() : kn(c(M).width, c(M).height, s()), true);
    }), Xe(() => {
      a() && Ie();
    });
    const ve = (m) => {
      Xe(() => (m.addEventListener("touchstart", Ot), m.addEventListener("mousedown", ot), m.addEventListener("wheel", ie, {
        passive: false
      }), () => {
        m.removeEventListener("touchstart", Ot), m.removeEventListener("mousedown", ot), m.removeEventListener("wheel", ie);
      }));
    };
    var he = Wu();
    Sa("resize", Pi, Oe);
    var fe = k(he);
    vt(fe, (m) => x(M, m), () => c(M));
    var le = N(fe, 2);
    {
      var v = (m) => {
        var w = qu();
        let U;
        se(() => {
          U = bt(w, 1, "svelte-easy-crop-area svelte-ys88g2", null, U, {
            "svelte-easy-crop-round": l() === "round",
            "svelte-easy-crop-grid": u()
          }), mt(w, `width: ${c(y).width ?? ""}px; height: ${c(y).height ?? ""}px;`);
        }), C(m, w);
      };
      ye(le, (m) => {
        c(y) && m(v);
      });
    }
    S(he), vt(he, (m) => x(_, m), () => c(_)), fs(he, (m) => ve == null ? void 0 : ve(m)), se(() => {
      _t(he, "tabindex", p()), _t(fe, "src", e.image), mt(fe, `transform: translate(${r().x ?? ""}px, ${r().y ?? ""}px) scale(${a() ?? ""});`), _t(fe, "crossorigin", h());
    }), Sa("load", fe, ae), Mi(fe), C(t, he), Ke();
  }
  const Xu = (t) => new Promise((e, r) => {
    const a = new Image();
    a.addEventListener("load", () => e(a)), a.addEventListener("error", (i) => r(i)), a.setAttribute("crossOrigin", "anonymous"), a.src = t;
  }), Yu = (t) => t * Math.PI / 180, Ku = async (t, e, r = 0) => {
    const a = await Xu(t), i = document.createElement("canvas"), n = i.getContext("2d");
    if (!n) throw new Error("Error getting 2d rendering context");
    const o = 2 * (Math.max(a.width, a.height) / 2 * Math.sqrt(2));
    i.width = o, i.height = o, n.translate(o / 2, o / 2), n.rotate(Yu(r)), n.translate(-o / 2, -o / 2), n.drawImage(a, o / 2 - a.width * 0.5, o / 2 - a.height * 0.5);
    const l = n.getImageData(0, 0, o, o);
    return i.width = e.width, i.height = e.height, n.putImageData(l, Math.round(0 - o / 2 + a.width * 0.5 - e.x), Math.round(0 - o / 2 + a.height * 0.5 - e.y)), new Promise((u) => {
      i.toBlob((d) => {
        u(URL.createObjectURL(d));
      }, "image/png");
    });
  };
  var $u = j('<span class="inline-block w-[1ch] align-bottom"> </span>');
  function xa(t, e) {
    Ye(e, true);
    const r = [
      [
        "\u2801",
        "\u2802",
        "\u2804",
        "\u2840",
        "\u2880",
        "\u2820",
        "\u2810",
        "\u2808"
      ],
      [
        "\u28FE",
        "\u28FD",
        "\u28FB",
        "\u28BF",
        "\u287F",
        "\u28DF",
        "\u28EF",
        "\u28F7"
      ],
      [
        "\u2596",
        "\u2598",
        "\u259D",
        "\u2597"
      ],
      [
        "\u2581",
        "\u2582",
        "\u2583",
        "\u2584",
        "\u2585",
        "\u2586",
        "\u2587",
        "\u2588",
        "\u2587",
        "\u2586",
        "\u2585",
        "\u2584",
        "\u2583",
        "\u2581"
      ],
      [
        "\u2589",
        "\u258A",
        "\u258B",
        "\u258C",
        "\u258D",
        "\u258E",
        "\u258F",
        "\u258E",
        "\u258D",
        "\u258C",
        "\u258B",
        "\u258A",
        "\u2589"
      ],
      [
        "\u2190",
        "\u2196",
        "\u2191",
        "\u2197",
        "\u2192",
        "\u2198",
        "\u2193",
        "\u2199"
      ],
      [
        "\u2524",
        "\u2518",
        "\u2534",
        "\u2514",
        "\u251C",
        "\u250C",
        "\u252C",
        "\u2510"
      ],
      [
        "\u25E2",
        "\u25E3",
        "\u25E4",
        "\u25E5"
      ],
      [
        "\u25F0",
        "\u25F3",
        "\u25F2",
        "\u25F1"
      ],
      [
        "\u25F4",
        "\u25F7",
        "\u25F6",
        "\u25F5"
      ],
      [
        "\u25D0",
        "\u25D3",
        "\u25D1",
        "\u25D2"
      ]
    ];
    let a = H(0);
    const i = r[8].length;
    Ys(100, {
      immediate: true,
      callback: (o) => {
        x(a, o % i);
      }
    });
    var n = $u(), s = k(n, true);
    S(n), se(() => Re(s, r[8][c(a)])), C(t, n), Ke();
  }
  function Ju(t) {
    return typeof t == "function";
  }
  function Ga(t) {
    return t !== null && typeof t == "object";
  }
  const Qu = [
    "string",
    "number",
    "bigint",
    "boolean"
  ];
  function ja(t) {
    return t == null || Qu.includes(typeof t) ? true : Array.isArray(t) ? t.every((e) => ja(e)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : false;
  }
  const Rr = Symbol("box"), Xa = Symbol("is-writable");
  function ed(t) {
    return Ga(t) && Rr in t;
  }
  function td(t) {
    return $.isBox(t) && Xa in t;
  }
  function $(t) {
    let e = H(ke(t));
    return {
      [Rr]: true,
      [Xa]: true,
      get current() {
        return c(e);
      },
      set current(r) {
        x(e, r, true);
      }
    };
  }
  function rd(t, e) {
    const r = J(t);
    return e ? {
      [Rr]: true,
      [Xa]: true,
      get current() {
        return c(r);
      },
      set current(a) {
        e(a);
      }
    } : {
      [Rr]: true,
      get current() {
        return t();
      }
    };
  }
  function ad(t) {
    return $.isBox(t) ? t : Ju(t) ? $.with(t) : $(t);
  }
  function nd(t) {
    return Object.entries(t).reduce((e, [r, a]) => $.isBox(a) ? ($.isWritableBox(a) ? Object.defineProperty(e, r, {
      get() {
        return a.current;
      },
      set(i) {
        a.current = i;
      }
    }) : Object.defineProperty(e, r, {
      get() {
        return a.current;
      }
    }), e) : Object.assign(e, {
      [r]: a
    }), {});
  }
  function id(t) {
    return $.isWritableBox(t) ? {
      [Rr]: true,
      get current() {
        return t.current;
      }
    } : t;
  }
  $.from = ad;
  $.with = rd;
  $.flatten = nd;
  $.readonly = id;
  $.isBox = ed;
  $.isWritableBox = td;
  function sd(...t) {
    return function(e) {
      var _a6;
      for (const r of t) if (r) {
        if (e.defaultPrevented) return;
        typeof r == "function" ? r.call(this, e) : (_a6 = r.current) == null ? void 0 : _a6.call(this, e);
      }
    };
  }
  const od = /\d/, cd = [
    "-",
    "_",
    "/",
    "."
  ];
  function ld(t = "") {
    if (!od.test(t)) return t !== t.toLowerCase();
  }
  function ud(t) {
    const e = [];
    let r = "", a, i;
    for (const n of t) {
      const s = cd.includes(n);
      if (s === true) {
        e.push(r), r = "", a = void 0;
        continue;
      }
      const o = ld(n);
      if (i === false) {
        if (a === false && o === true) {
          e.push(r), r = n, a = o;
          continue;
        }
        if (a === true && o === false && r.length > 1) {
          const l = r.at(-1);
          e.push(r.slice(0, Math.max(0, r.length - 1))), r = l + n, a = o;
          continue;
        }
      }
      r += n, a = o, i = s;
    }
    return e.push(r), e;
  }
  function pi(t) {
    return t ? ud(t).map((e) => hd(e)).join("") : "";
  }
  function dd(t) {
    return fd(pi(t || ""));
  }
  function hd(t) {
    return t ? t[0].toUpperCase() + t.slice(1) : "";
  }
  function fd(t) {
    return t ? t[0].toLowerCase() + t.slice(1) : "";
  }
  function Br(t) {
    if (!t) return {};
    const e = {};
    function r(a, i) {
      if (a.startsWith("-moz-") || a.startsWith("-webkit-") || a.startsWith("-ms-") || a.startsWith("-o-")) {
        e[pi(a)] = i;
        return;
      }
      if (a.startsWith("--")) {
        e[a] = i;
        return;
      }
      e[dd(a)] = i;
    }
    return Hi(t, r), e;
  }
  function mi(...t) {
    return (...e) => {
      for (const r of t) typeof r == "function" && r(...e);
    };
  }
  function pd(t, e, r, a) {
    const i = Array.isArray(e) ? e : [
      e
    ];
    return i.forEach((n) => t.addEventListener(n, r, a)), () => {
      i.forEach((n) => t.removeEventListener(n, r, a));
    };
  }
  function md(t, e) {
    const r = RegExp(t, "g");
    return (a) => {
      if (typeof a != "string") throw new TypeError(`expected an argument of type string, but got ${typeof a}`);
      return a.match(r) ? a.replace(r, e) : a;
    };
  }
  const vd = md(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
  function gd(t) {
    if (!t || typeof t != "object" || Array.isArray(t)) throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
    return Object.keys(t).map((e) => `${vd(e)}: ${t[e]};`).join(`
`);
  }
  function vi(t = {}) {
    return gd(t).replace(`
`, " ");
  }
  const _d = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: "0",
    transform: "translateX(-100%)"
  };
  vi(_d);
  const yd = [
    "onabort",
    "onanimationcancel",
    "onanimationend",
    "onanimationiteration",
    "onanimationstart",
    "onauxclick",
    "onbeforeinput",
    "onbeforetoggle",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncompositionend",
    "oncompositionstart",
    "oncompositionupdate",
    "oncontextlost",
    "oncontextmenu",
    "oncontextrestored",
    "oncopy",
    "oncuechange",
    "oncut",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "onfocusin",
    "onfocusout",
    "onformdata",
    "ongotpointercapture",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onlostpointercapture",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onpaste",
    "onpause",
    "onplay",
    "onplaying",
    "onpointercancel",
    "onpointerdown",
    "onpointerenter",
    "onpointerleave",
    "onpointermove",
    "onpointerout",
    "onpointerover",
    "onpointerup",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onscroll",
    "onscrollend",
    "onsecuritypolicyviolation",
    "onseeked",
    "onseeking",
    "onselect",
    "onselectionchange",
    "onselectstart",
    "onslotchange",
    "onstalled",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "ontoggle",
    "ontouchcancel",
    "ontouchend",
    "ontouchmove",
    "ontouchstart",
    "ontransitioncancel",
    "ontransitionend",
    "ontransitionrun",
    "ontransitionstart",
    "onvolumechange",
    "onwaiting",
    "onwebkitanimationend",
    "onwebkitanimationiteration",
    "onwebkitanimationstart",
    "onwebkittransitionend",
    "onwheel"
  ], bd = new Set(yd);
  function xd(t) {
    return bd.has(t);
  }
  function Ya(...t) {
    const e = {
      ...t[0]
    };
    for (let r = 1; r < t.length; r++) {
      const a = t[r];
      if (a) {
        for (const i of Object.keys(a)) {
          const n = e[i], s = a[i], o = typeof n == "function", l = typeof s == "function";
          if (o && xd(i)) {
            const u = n, d = s;
            e[i] = sd(u, d);
          } else if (o && l) e[i] = mi(n, s);
          else if (i === "class") {
            const u = ja(n), d = ja(s);
            u && d ? e[i] = oa(n, s) : u ? e[i] = oa(n) : d && (e[i] = oa(s));
          } else if (i === "style") {
            const u = typeof n == "object", d = typeof s == "object", h = typeof n == "string", f = typeof s == "string";
            if (u && d) e[i] = {
              ...n,
              ...s
            };
            else if (u && f) {
              const p = Br(s);
              e[i] = {
                ...n,
                ...p
              };
            } else if (h && d) {
              const p = Br(n);
              e[i] = {
                ...p,
                ...s
              };
            } else if (h && f) {
              const p = Br(n), y = Br(s);
              e[i] = {
                ...p,
                ...y
              };
            } else u ? e[i] = n : d ? e[i] = s : h ? e[i] = n : f && (e[i] = s);
          } else e[i] = s !== void 0 ? s : n;
        }
        for (const i of Object.getOwnPropertySymbols(a)) {
          const n = e[i], s = a[i];
          e[i] = s !== void 0 ? s : n;
        }
      }
    }
    return typeof e.style == "object" && (e.style = vi(e.style).replaceAll(`
`, " ")), e.hidden !== true && (e.hidden = void 0, delete e.hidden), e.disabled !== true && (e.disabled = void 0, delete e.disabled), e;
  }
  const wd = typeof window < "u" ? window : void 0;
  function kd(t) {
    let e = t.activeElement;
    for (; e == null ? void 0 : e.shadowRoot; ) {
      const r = e.shadowRoot.activeElement;
      if (r === e) break;
      e = r;
    }
    return e;
  }
  let Sd = (_a2 = class {
    constructor(e = {}) {
      __privateAdd(this, _e);
      __privateAdd(this, _t2);
      const { window: r = wd, document: a = r == null ? void 0 : r.document } = e;
      r !== void 0 && (__privateSet(this, _e, a), __privateSet(this, _t2, Mn((i) => {
        const n = lt(r, "focusin", i), s = lt(r, "focusout", i);
        return () => {
          n(), s();
        };
      })));
    }
    get current() {
      var _a6;
      return (_a6 = __privateGet(this, _t2)) == null ? void 0 : _a6.call(this), __privateGet(this, _e) ? kd(__privateGet(this, _e)) : null;
    }
  }, _e = new WeakMap(), _t2 = new WeakMap(), _a2);
  new Sd();
  function Cd(t) {
    Oi().then(t);
  }
  const Ad = 9;
  function zd(t) {
    return Ga(t) && t.nodeType === Ad;
  }
  function Rd(t) {
    var _a6;
    return Ga(t) && ((_a6 = t.constructor) == null ? void 0 : _a6.name) === "VisualViewport";
  }
  function Ed(t) {
    return zd(t) ? t : Rd(t) ? t.document : (t == null ? void 0 : t.ownerDocument) ?? document;
  }
  function Td(t) {
    let e = t.activeElement;
    for (; e == null ? void 0 : e.shadowRoot; ) {
      const r = e.shadowRoot.activeElement;
      if (r === e) break;
      e = r;
    }
    return e;
  }
  class Ka {
    constructor(e) {
      __publicField(this, "element");
      __privateAdd(this, _e2, J(() => this.element.current ? this.element.current.getRootNode() ?? document : document));
      __publicField(this, "getDocument", () => Ed(this.root));
      __publicField(this, "getWindow", () => this.getDocument().defaultView ?? window);
      __publicField(this, "getActiveElement", () => Td(this.root));
      __publicField(this, "isActiveElement", (e) => e === this.getActiveElement());
      __publicField(this, "querySelector", (e) => this.root ? this.root.querySelector(e) : null);
      __publicField(this, "querySelectorAll", (e) => this.root ? this.root.querySelectorAll(e) : []);
      __publicField(this, "setTimeout", (e, r) => this.getWindow().setTimeout(e, r));
      __publicField(this, "clearTimeout", (e) => this.getWindow().clearTimeout(e));
      typeof e == "function" ? this.element = $.with(e) : this.element = e;
    }
    get root() {
      return c(__privateGet(this, _e2));
    }
    set root(e) {
      x(__privateGet(this, _e2), e);
    }
    getElementById(e) {
      return this.root.getElementById(e);
    }
  }
  _e2 = new WeakMap();
  function $a(t, e) {
    return {
      [Ni()]: (r) => $.isBox(t) ? (t.current = r, dr(() => e == null ? void 0 : e(r)), () => {
        "isConnected" in r && r.isConnected || (t.current = null);
      }) : (t(r), dr(() => e == null ? void 0 : e(r)), () => {
        "isConnected" in r && r.isConnected || t(null);
      })
    };
  }
  function Id({ layout: t, panesArray: e, pivotIndices: r }) {
    let a = 0, i = 100, n = 0, s = 0;
    const o = r[0];
    for (let h = 0; h < e.length; h++) {
      const f = e[h].constraints, { maxSize: p = 100, minSize: y = 0 } = f;
      h === o ? (a = y, i = p) : (n += y, s += p);
    }
    const l = Math.min(i, 100 - n), u = Math.max(a, 100 - s), d = t[o];
    return {
      valueMax: l,
      valueMin: u,
      valueNow: d
    };
  }
  function be(t, e = "Assertion failed!") {
    if (!t) throw console.error(e), new Error(e);
  }
  const Pd = 100, Ja = 10;
  function qe(t, e, r = Ja) {
    return Er(t, e, r) === 0;
  }
  function Er(t, e, r = Ja) {
    const a = zn(t, r), i = zn(e, r);
    return Math.sign(a - i);
  }
  function ar(t, e) {
    if (t.length !== e.length) return false;
    for (let r = 0; r < t.length; r++) if (t[r] !== e[r]) return false;
    return true;
  }
  function zn(t, e) {
    return Number.parseFloat(t.toFixed(e));
  }
  const na = typeof document < "u";
  function Md(t) {
    return t instanceof HTMLElement;
  }
  function gi(t) {
    return t.type === "keydown";
  }
  function _i(t) {
    return t.type.startsWith("mouse");
  }
  function yi(t) {
    return t.type.startsWith("touch");
  }
  function Ht({ paneConstraints: t, paneIndex: e, initialSize: r }) {
    const a = t[e];
    be(a != null, "Pane constraints should not be null.");
    const { collapsedSize: i = 0, collapsible: n, maxSize: s = 100, minSize: o = 0 } = a;
    let l = r;
    return Er(l, o) < 0 && (l = Od(l, n, i, o)), l = Math.min(s, l), Number.parseFloat(l.toFixed(Ja));
  }
  function Od(t, e, r, a) {
    if (!e) return a;
    const i = (r + a) / 2;
    return Er(t, i) < 0 ? r : a;
  }
  function It() {
  }
  function jd({ groupId: t, layout: e, panesArray: r, domContext: a }) {
    const i = jr(t, a);
    for (let n = 0; n < r.length - 1; n++) {
      const { valueMax: s, valueMin: o, valueNow: l } = Id({
        layout: e,
        panesArray: r,
        pivotIndices: [
          n,
          n + 1
        ]
      }), u = i[n];
      if (Md(u)) {
        const d = r[n];
        u.setAttribute("aria-controls", d.opts.id.current), u.setAttribute("aria-valuemax", `${Math.round(s)}`), u.setAttribute("aria-valuemin", `${Math.round(o)}`), u.setAttribute("aria-valuenow", l != null ? `${Math.round(l)}` : "");
      }
    }
    return () => {
      for (const n of i) n.removeAttribute("aria-controls"), n.removeAttribute("aria-valuemax"), n.removeAttribute("aria-valuemin"), n.removeAttribute("aria-valuenow");
    };
  }
  function jr(t, e) {
    return na ? Array.from(e.querySelectorAll(`[data-pane-resizer-id][data-pane-group-id="${t}"]`)) : [];
  }
  function bi({ groupId: t, id: e, domContext: r }) {
    return na ? jr(t, r).findIndex((n) => n.getAttribute("data-pane-resizer-id") === e) ?? null : null;
  }
  function Rn({ groupId: t, dragHandleId: e, domContext: r }) {
    const a = bi({
      groupId: t,
      id: e,
      domContext: r
    });
    return a != null ? [
      a,
      a + 1
    ] : [
      -1,
      -1
    ];
  }
  function jt(t, e, r) {
    const a = t.map((u) => u.constraints), i = Bt(t, e), n = a[i], o = i === t.length - 1 ? [
      i - 1,
      i
    ] : [
      i,
      i + 1
    ], l = r[i];
    return {
      ...n,
      paneSize: l,
      pivotIndices: o
    };
  }
  function Bt(t, e) {
    return t.findIndex((r) => r.opts.id.current === e.opts.id.current);
  }
  function nr(t, e, r) {
    for (let a = 0; a < e.length; a++) {
      const i = e[a], n = t[a];
      be(n);
      const { collapsedSize: s = 0, collapsible: o } = n.constraints, l = r[n.opts.id.current];
      if (!(l == null || i !== l)) continue;
      r[n.opts.id.current] = i;
      const { onCollapse: u, onExpand: d, onResize: h } = n.callbacks;
      h == null ? void 0 : h(i, l), o && (u || d) && (d && (l == null || l === s) && i !== s && d(), u && (l == null || l !== s) && i === s && u());
    }
  }
  function Ud({ panesArray: t }) {
    const e = Array(t.length), r = t.map((n) => n.constraints);
    let a = 0, i = 100;
    for (let n = 0; n < t.length; n++) {
      const s = r[n];
      be(s);
      const { defaultSize: o } = s;
      o != null && (a++, e[n] = o, i -= o);
    }
    for (let n = 0; n < t.length; n++) {
      const s = r[n];
      be(s);
      const { defaultSize: o } = s;
      if (o != null) continue;
      const l = t.length - a, u = i / l;
      a++, e[n] = u, i -= u;
    }
    return e;
  }
  function Ld({ layout: t, paneConstraints: e }) {
    const r = [
      ...t
    ], a = r.reduce((n, s) => n + s, 0);
    if (r.length !== e.length) throw new Error(`Invalid ${e.length} pane layout: ${r.map((n) => `${n}%`).join(", ")}`);
    if (!qe(a, 100)) for (let n = 0; n < e.length; n++) {
      const s = r[n];
      be(s != null);
      const o = 100 / a * s;
      r[n] = o;
    }
    let i = 0;
    for (let n = 0; n < e.length; n++) {
      const s = r[n];
      be(s != null);
      const o = Ht({
        paneConstraints: e,
        paneIndex: n,
        initialSize: s
      });
      s !== o && (i += s - o, r[n] = o);
    }
    if (!qe(i, 0)) for (let n = 0; n < e.length; n++) {
      const s = r[n];
      be(s != null);
      const o = s + i, l = Ht({
        paneConstraints: e,
        paneIndex: n,
        initialSize: o
      });
      if (s !== l && (i -= l - s, r[n] = l, qe(i, 0))) break;
    }
    return r;
  }
  function Bd(t, e) {
    if (!na) return null;
    const r = e.querySelector(`[data-pane-group][data-pane-group-id="${t}"]`);
    return r || null;
  }
  function Qa(t, e) {
    if (!na) return null;
    const r = e.querySelector(`[data-pane-resizer-id="${t}"]`);
    return r || null;
  }
  function Dd({ event: t, dragHandleId: e, dir: r, initialDragState: a, domContext: i }) {
    const n = r === "horizontal", s = Qa(e, i);
    be(s);
    const o = s.getAttribute("data-pane-group-id");
    be(o);
    const { initialCursorPosition: l } = a, u = xi(r, t), d = Bd(o, i);
    be(d);
    const h = d.getBoundingClientRect(), f = n ? h.width : h.height;
    return (u - l) / f * 100;
  }
  function Hd({ event: t, dragHandleId: e, dir: r, initialDragState: a, keyboardResizeBy: i, domContext: n }) {
    if (gi(t)) {
      const s = r === "horizontal";
      let o = 0;
      t.shiftKey ? o = 100 : i != null ? o = i : o = 10;
      let l = 0;
      switch (t.key) {
        case "ArrowDown":
          l = s ? 0 : o;
          break;
        case "ArrowLeft":
          l = s ? -o : 0;
          break;
        case "ArrowRight":
          l = s ? o : 0;
          break;
        case "ArrowUp":
          l = s ? 0 : -o;
          break;
        case "End":
          l = 100;
          break;
        case "Home":
          l = -100;
          break;
      }
      return l;
    } else return a == null ? 0 : Dd({
      event: t,
      dragHandleId: e,
      dir: r,
      initialDragState: a,
      domContext: n
    });
  }
  function xi(t, e) {
    const r = t === "horizontal";
    if (_i(e)) return r ? e.clientX : e.clientY;
    if (yi(e)) {
      const a = e.touches[0];
      return be(a), r ? a.screenX : a.screenY;
    } else throw new Error(`Unsupported event type "${e.type}"`);
  }
  function Nd({ groupId: t, handleId: e, panesArray: r, domContext: a }) {
    var _a6, _b;
    const i = Qa(e, a), n = jr(t, a), s = i ? n.indexOf(i) : -1, o = ((_a6 = r[s]) == null ? void 0 : _a6.opts.id.current) ?? null, l = ((_b = r[s + 1]) == null ? void 0 : _b.opts.id.current) ?? null;
    return [
      o,
      l
    ];
  }
  const Vd = typeof window < "u" ? window : void 0;
  function Zd(t) {
    let e = t.activeElement;
    for (; e == null ? void 0 : e.shadowRoot; ) {
      const r = e.shadowRoot.activeElement;
      if (r === e) break;
      e = r;
    }
    return e;
  }
  class Fd {
    constructor(e = {}) {
      __privateAdd(this, _e3);
      __privateAdd(this, _t3);
      const { window: r = Vd, document: a = r == null ? void 0 : r.document } = e;
      r !== void 0 && (__privateSet(this, _e3, a), __privateSet(this, _t3, Mn((i) => {
        const n = lt(r, "focusin", i), s = lt(r, "focusout", i);
        return () => {
          n(), s();
        };
      })));
    }
    get current() {
      var _a6;
      return (_a6 = __privateGet(this, _t3)) == null ? void 0 : _a6.call(this), __privateGet(this, _e3) ? Zd(__privateGet(this, _e3)) : null;
    }
  }
  _e3 = new WeakMap();
  _t3 = new WeakMap();
  new Fd();
  function qd(t, e) {
    switch (t) {
      case "post":
        Xe(e);
        break;
      case "pre":
        ji(e);
        break;
    }
  }
  function wi(t, e, r, a = {}) {
    const { lazy: i = false } = a;
    let n = !i, s = Array.isArray(t) ? [] : void 0;
    qd(e, () => {
      const o = Array.isArray(t) ? t.map((u) => u()) : t();
      if (!n) {
        n = true, s = o;
        return;
      }
      const l = dr(() => r(o, s));
      return s = o, l;
    });
  }
  function ur(t, e, r) {
    wi(t, "post", e, r);
  }
  function Wd(t, e, r) {
    wi(t, "pre", e, r);
  }
  ur.pre = Wd;
  class Gd {
    constructor(e) {
      __privateAdd(this, _e4);
      __privateAdd(this, _t4);
      __privateSet(this, _e4, e), __privateSet(this, _t4, Symbol(e));
    }
    get key() {
      return __privateGet(this, _t4);
    }
    exists() {
      return Ui(__privateGet(this, _t4));
    }
    get() {
      const e = nn(__privateGet(this, _t4));
      if (e === void 0) throw new Error(`Context "${__privateGet(this, _e4)}" not found`);
      return e;
    }
    getOr(e) {
      const r = nn(__privateGet(this, _t4));
      return r === void 0 ? e : r;
    }
    set(e) {
      return Li(__privateGet(this, _t4), e);
    }
  }
  _e4 = new WeakMap();
  _t4 = new WeakMap();
  function ir({ delta: t, layout: e, paneConstraints: r, pivotIndices: a, trigger: i }) {
    if (qe(t, 0)) return e;
    const n = [
      ...e
    ], [s, o] = a;
    let l = 0;
    if (i === "keyboard") {
      {
        const d = t < 0 ? o : s, h = r[d];
        if (be(h), h.collapsible) {
          const f = e[d];
          be(f != null);
          const p = r[d];
          be(p);
          const { collapsedSize: y = 0, minSize: g = 0 } = p;
          if (qe(f, y)) {
            const _ = g - f;
            Er(_, Math.abs(t)) > 0 && (t = t < 0 ? 0 - _ : _);
          }
        }
      }
      {
        const d = t < 0 ? s : o, h = r[d];
        be(h);
        const { collapsible: f } = h;
        if (f) {
          const p = e[d];
          be(p != null);
          const y = r[d];
          be(y);
          const { collapsedSize: g = 0, minSize: _ = 0 } = y;
          if (qe(p, _)) {
            const R = p - g;
            Er(R, Math.abs(t)) > 0 && (t = t < 0 ? 0 - R : R);
          }
        }
      }
    }
    {
      const d = t < 0 ? 1 : -1;
      let h = t < 0 ? o : s, f = 0;
      for (; ; ) {
        const y = e[h];
        be(y != null);
        const _ = Ht({
          paneConstraints: r,
          paneIndex: h,
          initialSize: 100
        }) - y;
        if (f += _, h += d, h < 0 || h >= r.length) break;
      }
      const p = Math.min(Math.abs(t), Math.abs(f));
      t = t < 0 ? 0 - p : p;
    }
    {
      let h = t < 0 ? s : o;
      for (; h >= 0 && h < r.length; ) {
        const f = Math.abs(t) - Math.abs(l), p = e[h];
        be(p != null);
        const y = p - f, g = Ht({
          paneConstraints: r,
          paneIndex: h,
          initialSize: y
        });
        if (!qe(p, g) && (l += p - g, n[h] = g, l.toPrecision(3).localeCompare(Math.abs(t).toPrecision(3), void 0, {
          numeric: true
        }) >= 0)) break;
        t < 0 ? h-- : h++;
      }
    }
    if (qe(l, 0)) return e;
    {
      const d = t < 0 ? o : s, h = e[d];
      be(h != null);
      const f = h + l, p = Ht({
        paneConstraints: r,
        paneIndex: d,
        initialSize: f
      });
      if (n[d] = p, !qe(p, f)) {
        let y = f - p, _ = t < 0 ? o : s;
        for (; _ >= 0 && _ < r.length; ) {
          const R = n[_];
          be(R != null);
          const M = R + y, V = Ht({
            paneConstraints: r,
            paneIndex: _,
            initialSize: M
          });
          if (qe(R, V) || (y -= V - R, n[_] = V), qe(y, 0)) break;
          t > 0 ? _-- : _++;
        }
      }
    }
    const u = n.reduce((d, h) => h + d, 0);
    return qe(u, 100) ? n : e;
  }
  let Ua = null, Et = null;
  function ki(t) {
    switch (t) {
      case "horizontal":
        return "ew-resize";
      case "horizontal-max":
        return "w-resize";
      case "horizontal-min":
        return "e-resize";
      case "vertical":
        return "ns-resize";
      case "vertical-max":
        return "n-resize";
      case "vertical-min":
        return "s-resize";
    }
  }
  function Xd() {
    Et !== null && (document.head.removeChild(Et), Ua = null, Et = null);
  }
  function wa(t, e) {
    if (Ua === t) return;
    Ua = t;
    const r = ki(t);
    Et === null && (Et = e.createElement("style"), e.head.appendChild(Et)), Et.innerHTML = `*{cursor: ${r}!important;}`;
  }
  function Yd({ defaultSize: t, dragState: e, layout: r, panesArray: a, paneIndex: i, precision: n = 3 }) {
    const s = r[i];
    let o;
    return s == null ? o = t ?? "1" : a.length === 1 ? o = "1" : o = s.toPrecision(n), {
      flexBasis: 0,
      flexGrow: o,
      flexShrink: 1,
      overflow: "hidden",
      pointerEvents: e !== null ? "none" : void 0
    };
  }
  function En(t) {
    try {
      if (typeof localStorage > "u") throw new TypeError("localStorage is not supported in this environment");
      t.getItem = (e) => localStorage.getItem(e), t.setItem = (e, r) => localStorage.setItem(e, r);
    } catch (e) {
      console.error(e), t.getItem = () => null, t.setItem = () => {
      };
    }
  }
  function Si(t) {
    return `paneforge:${t}`;
  }
  function Ci(t) {
    return t.map((r) => r.opts.order.current ? `${r.opts.order.current}:${JSON.stringify(r.constraints)}` : JSON.stringify(r.constraints)).sort().join(",");
  }
  function Ai(t, e) {
    try {
      const r = Si(t), a = e.getItem(r), i = JSON.parse(a || "");
      if (typeof i == "object" && i !== null) return i;
    } catch {
    }
    return null;
  }
  function Kd(t, e, r) {
    const a = Ai(t, r) || {}, i = Ci(e);
    return a[i] || null;
  }
  function $d(t, e, r, a, i) {
    const n = Si(t), s = Ci(e), o = Ai(t, i) || {};
    o[s] = {
      expandToSizes: Object.fromEntries(r.entries()),
      layout: a
    };
    try {
      i.setItem(n, JSON.stringify(o));
    } catch (l) {
      console.error(l);
    }
  }
  const Tn = {};
  function Jd(t, e = 10) {
    let r = null;
    return (...i) => {
      r !== null && clearTimeout(r), r = setTimeout(() => {
        t(...i);
      }, e);
    };
  }
  function Qd({ autoSaveId: t, layout: e, storage: r, panesArray: a, paneSizeBeforeCollapse: i }) {
    if (e.length === 0 || e.length !== a.length) return;
    let n = Tn[t];
    n == null && (n = Jd($d, Pd), Tn[t] = n);
    const s = [
      ...a
    ], o = new Map(i);
    n(t, s, o, e, r);
  }
  const lr = {
    getItem: (t) => (En(lr), lr.getItem(t)),
    setItem: (t, e) => {
      En(lr), lr.setItem(t, e);
    }
  }, en = new Gd("PaneGroup");
  const _tn = class _tn {
    constructor(e) {
      __publicField(this, "opts");
      __publicField(this, "attachment");
      __publicField(this, "domContext");
      __privateAdd(this, _e5, H(null));
      __privateAdd(this, _t5, H([]));
      __privateAdd(this, _a3, H([]));
      __privateAdd(this, _n2, H(false));
      __privateAdd(this, _r2, H(ke({})));
      __publicField(this, "paneSizeBeforeCollapseMap", /* @__PURE__ */ new Map());
      __publicField(this, "prevDelta", 0);
      __publicField(this, "setLayout", (e) => {
        this.layout = e;
      });
      __publicField(this, "registerResizeHandle", (e) => (r) => {
        var _a6, _b;
        r.preventDefault();
        const a = this.opts.direction.current, i = this.dragState, n = this.opts.id.current, s = this.opts.keyboardResizeBy.current, o = this.layout, l = this.panesArray, { initialLayout: u } = i ?? {}, d = this.domContext.getDocument(), h = Rn({
          groupId: n,
          dragHandleId: e,
          domContext: this.domContext
        });
        let f = Hd({
          event: r,
          dragHandleId: e,
          dir: a,
          initialDragState: i,
          keyboardResizeBy: s,
          domContext: this.domContext
        });
        if (f === 0) return;
        const p = a === "horizontal";
        d.dir === "rtl" && p && (f = -f);
        const y = l.map((R) => R.constraints), g = ir({
          delta: f,
          layout: u ?? o,
          paneConstraints: y,
          pivotIndices: h,
          trigger: gi(r) ? "keyboard" : "mouse-or-touch"
        }), _ = !ar(o, g);
        (_i(r) || yi(r)) && this.prevDelta !== f && (this.prevDelta = f, wa(_ ? p ? "horizontal" : "vertical" : p ? f < 0 ? "horizontal-min" : "horizontal-max" : f < 0 ? "vertical-min" : "vertical-max", d)), _ && (this.setLayout(g), (_b = (_a6 = this.opts.onLayout).current) == null ? void 0 : _b.call(_a6, g), nr(l, g, this.paneIdToLastNotifiedSizeMap));
      });
      __publicField(this, "resizePane", (e, r) => {
        var _a6, _b;
        const a = this.layout, i = this.panesArray, n = i.map((h) => h.constraints), { paneSize: s, pivotIndices: o } = jt(i, e, a);
        be(s != null);
        const u = Bt(i, e) === i.length - 1 ? s - r : r - s, d = ir({
          delta: u,
          layout: a,
          paneConstraints: n,
          pivotIndices: o,
          trigger: "imperative-api"
        });
        ar(a, d) || (this.setLayout(d), (_b = (_a6 = this.opts.onLayout).current) == null ? void 0 : _b.call(_a6, d), nr(i, d, this.paneIdToLastNotifiedSizeMap));
      });
      __publicField(this, "startDragging", (e, r) => {
        const a = this.opts.direction.current, i = this.layout, n = Qa(e, this.domContext);
        be(n);
        const s = xi(a, r);
        this.dragState = {
          dragHandleId: e,
          dragHandleRect: n.getBoundingClientRect(),
          initialCursorPosition: s,
          initialLayout: i
        };
      });
      __publicField(this, "stopDragging", () => {
        Xd(), this.dragState = null;
      });
      __publicField(this, "isPaneCollapsed", (e) => {
        const r = this.panesArray, a = this.layout, { collapsedSize: i = 0, collapsible: n, paneSize: s } = jt(r, e, a);
        return typeof s != "number" || typeof i != "number" ? false : n === true && qe(s, i);
      });
      __publicField(this, "expandPane", (e) => {
        var _a6, _b;
        const r = this.layout, a = this.panesArray;
        if (!e.constraints.collapsible) return;
        const i = a.map((y) => y.constraints), { collapsedSize: n = 0, paneSize: s, minSize: o = 0, pivotIndices: l } = jt(a, e, r);
        if (s !== n) return;
        const u = this.paneSizeBeforeCollapseMap.get(e.opts.id.current), d = u != null && u >= o ? u : o, f = Bt(a, e) === a.length - 1 ? s - d : d - s, p = ir({
          delta: f,
          layout: r,
          paneConstraints: i,
          pivotIndices: l,
          trigger: "imperative-api"
        });
        ar(r, p) || (this.setLayout(p), (_b = (_a6 = this.opts.onLayout).current) == null ? void 0 : _b.call(_a6, p), nr(a, p, this.paneIdToLastNotifiedSizeMap));
      });
      __publicField(this, "collapsePane", (e) => {
        var _a6, _b;
        const r = this.layout, a = this.panesArray;
        if (!e.constraints.collapsible) return;
        const i = a.map((h) => h.constraints), { collapsedSize: n = 0, paneSize: s, pivotIndices: o } = jt(a, e, r);
        if (be(s != null), s === n) return;
        this.paneSizeBeforeCollapseMap.set(e.opts.id.current, s);
        const u = Bt(a, e) === a.length - 1 ? s - n : n - s, d = ir({
          delta: u,
          layout: r,
          paneConstraints: i,
          pivotIndices: o,
          trigger: "imperative-api"
        });
        ar(r, d) || (this.layout = d, (_b = (_a6 = this.opts.onLayout).current) == null ? void 0 : _b.call(_a6, d), nr(a, d, this.paneIdToLastNotifiedSizeMap));
      });
      __publicField(this, "getPaneSize", (e) => jt(this.panesArray, e, this.layout).paneSize);
      __publicField(this, "getPaneStyle", (e, r) => {
        const a = this.panesArray, i = this.layout, n = this.dragState, s = Bt(a, e);
        return Yd({
          defaultSize: r,
          dragState: n,
          layout: i,
          panesArray: a,
          paneIndex: s
        });
      });
      __publicField(this, "isPaneExpanded", (e) => {
        const { collapsedSize: r = 0, collapsible: a, paneSize: i } = jt(this.panesArray, e, this.layout);
        return !a || i > r;
      });
      __publicField(this, "registerPane", (e) => {
        const r = [
          ...this.panesArray,
          e
        ];
        return r.sort((a, i) => {
          const n = a.opts.order.current, s = i.opts.order.current;
          return n == null && s == null ? 0 : n == null ? -1 : s == null ? 1 : n - s;
        }), this.panesArray = r, this.panesArrayChanged = true, () => {
          const a = [
            ...this.panesArray
          ], i = Bt(this.panesArray, e);
          i < 0 || (a.splice(i, 1), this.panesArray = a, delete this.paneIdToLastNotifiedSizeMap[e.opts.id.current], this.panesArrayChanged = true);
        };
      });
      __privateAdd(this, _s2, () => {
        const e = this.opts.id.current, r = jr(e, this.domContext), a = this.panesArray, i = r.map((n) => {
          const s = n.getAttribute("data-pane-resizer-id");
          if (!s) return It;
          const [o, l] = Nd({
            groupId: e,
            handleId: s,
            panesArray: a,
            domContext: this.domContext
          });
          if (o == null || l == null) return It;
          const d = pd(n, "keydown", (h) => {
            if (h.defaultPrevented || h.key !== "Enter") return;
            h.preventDefault();
            const f = this.panesArray, p = f.findIndex((Z) => Z.opts.id.current === o);
            if (p < 0) return;
            const y = f[p];
            be(y);
            const g = this.layout, _ = g[p], { collapsedSize: R = 0, collapsible: M, minSize: V = 0 } = y.constraints;
            if (!(_ != null && M)) return;
            const L = ir({
              delta: qe(_, R) ? V - _ : R - _,
              layout: g,
              paneConstraints: f.map((Z) => Z.constraints),
              pivotIndices: Rn({
                groupId: e,
                dragHandleId: s,
                domContext: this.domContext
              }),
              trigger: "keyboard"
            });
            g !== L && (this.layout = L);
          });
          return () => {
            d();
          };
        });
        return () => {
          for (const n of i) n();
        };
      });
      __privateAdd(this, _i2, J(() => ({
        id: this.opts.id.current,
        "data-pane-group": "",
        "data-direction": this.opts.direction.current,
        "data-pane-group-id": this.opts.id.current,
        style: {
          display: "flex",
          flexDirection: this.opts.direction.current === "horizontal" ? "row" : "column",
          height: "100%",
          overflow: "hidden",
          width: "100%"
        },
        ...this.attachment
      })));
      this.opts = e, this.attachment = $a(this.opts.ref), this.domContext = new Ka(this.opts.ref), ur([
        () => this.opts.id.current,
        () => this.layout,
        () => this.panesArray
      ], () => jd({
        groupId: this.opts.id.current,
        layout: this.layout,
        panesArray: this.panesArray,
        domContext: this.domContext
      })), Xe(() => dr(() => __privateGet(this, _s2).call(this))), ur([
        () => this.opts.autoSaveId.current,
        () => this.layout,
        () => this.opts.storage.current
      ], () => {
        this.opts.autoSaveId.current && Qd({
          autoSaveId: this.opts.autoSaveId.current,
          layout: this.layout,
          storage: this.opts.storage.current,
          panesArray: this.panesArray,
          paneSizeBeforeCollapse: this.paneSizeBeforeCollapseMap
        });
      }), ur(() => this.panesArrayChanged, () => {
        var _a6, _b;
        if (!this.panesArrayChanged) return;
        this.panesArrayChanged = false;
        const r = this.layout;
        let a = null;
        if (this.opts.autoSaveId.current) {
          const n = Kd(this.opts.autoSaveId.current, this.panesArray, this.opts.storage.current);
          n && (this.paneSizeBeforeCollapseMap = new Map(Object.entries(n.expandToSizes)), a = n.layout);
        }
        a == null && (a = Ud({
          panesArray: this.panesArray
        }));
        const i = Ld({
          layout: a,
          paneConstraints: this.panesArray.map((n) => n.constraints)
        });
        ar(r, i) || (this.layout = i, (_b = (_a6 = this.opts.onLayout).current) == null ? void 0 : _b.call(_a6, i), nr(this.panesArray, i, this.paneIdToLastNotifiedSizeMap));
      });
    }
    static create(e) {
      return en.set(new _tn(e));
    }
    get dragState() {
      return c(__privateGet(this, _e5));
    }
    set dragState(e) {
      x(__privateGet(this, _e5), e);
    }
    get layout() {
      return c(__privateGet(this, _t5));
    }
    set layout(e) {
      x(__privateGet(this, _t5), e);
    }
    get panesArray() {
      return c(__privateGet(this, _a3));
    }
    set panesArray(e) {
      x(__privateGet(this, _a3), e);
    }
    get panesArrayChanged() {
      return c(__privateGet(this, _n2));
    }
    set panesArrayChanged(e) {
      x(__privateGet(this, _n2), e, true);
    }
    get paneIdToLastNotifiedSizeMap() {
      return c(__privateGet(this, _r2));
    }
    set paneIdToLastNotifiedSizeMap(e) {
      x(__privateGet(this, _r2), e, true);
    }
    get props() {
      return c(__privateGet(this, _i2));
    }
    set props(e) {
      x(__privateGet(this, _i2), e);
    }
  };
  _e5 = new WeakMap();
  _t5 = new WeakMap();
  _a3 = new WeakMap();
  _n2 = new WeakMap();
  _r2 = new WeakMap();
  _s2 = new WeakMap();
  _i2 = new WeakMap();
  let tn = _tn;
  const eh = [
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "End",
    "Home"
  ];
  const _rn = class _rn {
    constructor(e, r) {
      __publicField(this, "opts");
      __privateAdd(this, _e6);
      __publicField(this, "attachment");
      __publicField(this, "domContext");
      __privateAdd(this, _t6, J(() => {
        var _a6;
        return ((_a6 = __privateGet(this, _e6).dragState) == null ? void 0 : _a6.dragHandleId) === this.opts.id.current;
      }));
      __privateAdd(this, _a4, H(false));
      __publicField(this, "resizeHandler", null);
      __privateAdd(this, _n3, (e) => {
        e.preventDefault(), !this.opts.disabled.current && (__privateGet(this, _e6).startDragging(this.opts.id.current, e), this.opts.onDraggingChange.current(true));
      });
      __privateAdd(this, _r3, () => {
        const e = this.opts.ref.current;
        e && (e.blur(), __privateGet(this, _e6).stopDragging(), this.opts.onDraggingChange.current(false));
      });
      __privateAdd(this, _s3, (e) => {
        if (this.opts.disabled.current || !this.resizeHandler || e.defaultPrevented) return;
        if (eh.includes(e.key)) {
          e.preventDefault(), this.resizeHandler(e);
          return;
        }
        if (e.key !== "F6") return;
        e.preventDefault();
        const r = jr(__privateGet(this, _e6).opts.id.current, this.domContext), a = bi({
          groupId: __privateGet(this, _e6).opts.id.current,
          id: this.opts.id.current,
          domContext: this.domContext
        });
        if (a === null) return;
        let i = 0;
        e.shiftKey ? a > 0 ? i = a - 1 : i = r.length - 1 : a + 1 < r.length ? i = a + 1 : i = 0, r[i].focus();
      });
      __privateAdd(this, _i3, () => {
        x(__privateGet(this, _a4), false);
      });
      __privateAdd(this, _c2, () => {
        x(__privateGet(this, _a4), true);
      });
      __privateAdd(this, _l2, (e) => {
        __privateGet(this, _n3).call(this, e);
      });
      __privateAdd(this, _u2, () => {
        __privateGet(this, _r3).call(this);
      });
      __privateAdd(this, _d2, () => {
        __privateGet(this, _r3).call(this);
      });
      __privateAdd(this, _h2, () => {
        __privateGet(this, _r3).call(this);
      });
      __privateAdd(this, _f, (e) => {
        __privateGet(this, _n3).call(this, e);
      });
      __privateAdd(this, _o2, J(() => ({
        id: this.opts.id.current,
        role: "separator",
        "data-direction": __privateGet(this, _e6).opts.direction.current,
        "data-pane-group-id": __privateGet(this, _e6).opts.id.current,
        "data-active": c(__privateGet(this, _t6)) ? "pointer" : c(__privateGet(this, _a4)) ? "keyboard" : void 0,
        "data-enabled": !this.opts.disabled.current,
        "data-pane-resizer-id": this.opts.id.current,
        "data-pane-resizer": "",
        tabIndex: this.opts.tabIndex.current,
        style: {
          cursor: ki(__privateGet(this, _e6).opts.direction.current),
          touchAction: "none",
          userSelect: "none",
          "-webkit-user-select": "none",
          "-webkit-touch-callout": "none"
        },
        onkeydown: __privateGet(this, _s3),
        onblur: __privateGet(this, _i3),
        onfocus: __privateGet(this, _c2),
        onmousedown: __privateGet(this, _l2),
        onmouseup: __privateGet(this, _u2),
        ontouchcancel: __privateGet(this, _d2),
        ontouchend: __privateGet(this, _h2),
        ontouchstart: __privateGet(this, _f),
        ...this.attachment
      })));
      this.opts = e, __privateSet(this, _e6, r), this.attachment = $a(this.opts.ref), this.domContext = new Ka(this.opts.ref), Xe(() => {
        this.opts.disabled.current ? this.resizeHandler = null : this.resizeHandler = __privateGet(this, _e6).registerResizeHandle(this.opts.id.current);
      }), Xe(() => {
        const a = this.opts.ref.current;
        if (!a) return;
        const i = this.opts.disabled.current, n = this.resizeHandler, s = c(__privateGet(this, _t6));
        if (i || n === null || !s) return;
        const o = (f) => {
          n(f);
        }, l = (f) => {
          n(f);
        }, u = () => {
          a.blur(), __privateGet(this, _e6).stopDragging(), this.opts.onDraggingChange.current(false);
        }, d = this.domContext.getDocument().body, h = this.domContext.getWindow();
        return mi(lt(d, "contextmenu", u), lt(d, "mousemove", o), lt(d, "touchmove", o, {
          passive: false
        }), lt(d, "mouseleave", l), lt(h, "mouseup", u), lt(h, "touchend", u));
      });
    }
    static create(e) {
      return new _rn(e, en.get());
    }
    get props() {
      return c(__privateGet(this, _o2));
    }
    set props(e) {
      x(__privateGet(this, _o2), e);
    }
  };
  _e6 = new WeakMap();
  _t6 = new WeakMap();
  _a4 = new WeakMap();
  _n3 = new WeakMap();
  _r3 = new WeakMap();
  _s3 = new WeakMap();
  _i3 = new WeakMap();
  _c2 = new WeakMap();
  _l2 = new WeakMap();
  _u2 = new WeakMap();
  _d2 = new WeakMap();
  _h2 = new WeakMap();
  _f = new WeakMap();
  _o2 = new WeakMap();
  let rn = _rn;
  const _an = class _an {
    constructor(e, r) {
      __publicField(this, "opts");
      __publicField(this, "group");
      __publicField(this, "attachment");
      __publicField(this, "domContext");
      __privateAdd(this, _e7, H(""));
      __privateAdd(this, _t7, J(() => ({
        onCollapse: this.opts.onCollapse.current,
        onExpand: this.opts.onExpand.current,
        onResize: this.opts.onResize.current
      })));
      __privateAdd(this, _a5, J(() => ({
        collapsedSize: this.opts.collapsedSize.current,
        collapsible: this.opts.collapsible.current,
        defaultSize: this.opts.defaultSize.current,
        maxSize: this.opts.maxSize.current,
        minSize: this.opts.minSize.current
      })));
      __privateAdd(this, _n4, (e) => {
        x(__privateGet(this, _e7), e, true), Cd(() => {
          if (this.opts.ref.current) {
            const r = this.opts.ref.current;
            if (!(getComputedStyle(r).transitionDuration !== "0s")) {
              x(__privateGet(this, _e7), "");
              return;
            }
            const n = (s) => {
              s.propertyName === "flex-grow" && (x(__privateGet(this, _e7), ""), r.removeEventListener("transitionend", n));
            };
            r.addEventListener("transitionend", n);
          } else x(__privateGet(this, _e7), "");
        });
      });
      __publicField(this, "pane", {
        collapse: () => {
          __privateGet(this, _n4).call(this, "collapsing"), this.group.collapsePane(this);
        },
        expand: () => {
          __privateGet(this, _n4).call(this, "expanding"), this.group.expandPane(this);
        },
        getSize: () => this.group.getPaneSize(this),
        isCollapsed: () => this.group.isPaneCollapsed(this),
        isExpanded: () => this.group.isPaneExpanded(this),
        resize: (e) => this.group.resizePane(this, e),
        getId: () => this.opts.id.current
      });
      __privateAdd(this, _r4, J(() => this.group.isPaneCollapsed(this)));
      __privateAdd(this, _s4, J(() => c(__privateGet(this, _e7)) !== "" ? c(__privateGet(this, _e7)) : c(__privateGet(this, _r4)) ? "collapsed" : "expanded"));
      __privateAdd(this, _i4, J(() => ({
        id: this.opts.id.current,
        style: this.group.getPaneStyle(this, this.opts.defaultSize.current),
        "data-pane": "",
        "data-pane-id": this.opts.id.current,
        "data-pane-group-id": this.group.opts.id.current,
        "data-collapsed": c(__privateGet(this, _r4)) ? "" : void 0,
        "data-expanded": c(__privateGet(this, _r4)) ? void 0 : "",
        "data-pane-state": c(__privateGet(this, _s4)),
        ...this.attachment
      })));
      this.opts = e, this.group = r, this.attachment = $a(this.opts.ref), this.domContext = new Ka(this.opts.ref), On(() => this.group.registerPane(this)), ur(() => ms(this.constraints), () => {
        this.group.panesArrayChanged = true;
      });
    }
    static create(e) {
      return new _an(e, en.get());
    }
    get callbacks() {
      return c(__privateGet(this, _t7));
    }
    set callbacks(e) {
      x(__privateGet(this, _t7), e);
    }
    get constraints() {
      return c(__privateGet(this, _a5));
    }
    set constraints(e) {
      x(__privateGet(this, _a5), e);
    }
    get props() {
      return c(__privateGet(this, _i4));
    }
    set props(e) {
      x(__privateGet(this, _i4), e);
    }
  };
  _e7 = new WeakMap();
  _t7 = new WeakMap();
  _a5 = new WeakMap();
  _n4 = new WeakMap();
  _r4 = new WeakMap();
  _s4 = new WeakMap();
  _i4 = new WeakMap();
  let an = _an;
  var th = j("<div><!></div>");
  function rh(t, e) {
    const r = Ba();
    Ye(e, true);
    let a = O(e, "autoSaveId", 3, null), i = O(e, "id", 3, r), n = O(e, "keyboardResizeBy", 3, null), s = O(e, "onLayoutChange", 3, It), o = O(e, "storage", 3, lr), l = O(e, "ref", 15, null), u = kt(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "autoSaveId",
      "direction",
      "id",
      "keyboardResizeBy",
      "onLayoutChange",
      "storage",
      "ref",
      "child",
      "children"
    ]);
    const d = tn.create({
      id: $.with(() => i() ?? r),
      ref: $.with(() => l(), (L) => l(L)),
      autoSaveId: $.with(() => a()),
      direction: $.with(() => e.direction),
      keyboardResizeBy: $.with(() => n()),
      onLayout: $.with(() => s()),
      storage: $.with(() => o())
    }), h = () => d.layout, f = d.setLayout, p = () => d.opts.id.current, y = J(() => Ya(u, d.props));
    var g = {
      getLayout: h,
      setLayout: f,
      getId: p
    }, _ = De(), R = oe(_);
    {
      var M = (L) => {
        var Z = De(), de = oe(Z);
        yt(de, () => e.child, () => ({
          props: c(y)
        })), C(L, Z);
      }, V = (L) => {
        var Z = th();
        Pr(Z, () => ({
          ...c(y)
        }));
        var de = k(Z);
        yt(de, () => e.children ?? Tr), S(Z), C(L, Z);
      };
      ye(R, (L) => {
        e.child ? L(M) : L(V, false);
      });
    }
    return C(t, _), Ke(g);
  }
  var ah = j("<div><!></div>");
  function ka(t, e) {
    const r = Ba();
    Ye(e, true);
    let a = O(e, "id", 3, r), i = O(e, "ref", 15, null), n = O(e, "onCollapse", 3, It), s = O(e, "onExpand", 3, It), o = O(e, "onResize", 3, It), l = kt(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "id",
      "ref",
      "collapsedSize",
      "collapsible",
      "defaultSize",
      "maxSize",
      "minSize",
      "onCollapse",
      "onExpand",
      "onResize",
      "order",
      "child",
      "children"
    ]);
    const u = an.create({
      id: $.with(() => a()),
      ref: $.with(() => i(), (I) => i(I)),
      collapsedSize: $.with(() => e.collapsedSize),
      collapsible: $.with(() => e.collapsible),
      defaultSize: $.with(() => e.defaultSize),
      maxSize: $.with(() => e.maxSize),
      minSize: $.with(() => e.minSize),
      onCollapse: $.with(() => n()),
      onExpand: $.with(() => s()),
      onResize: $.with(() => o()),
      order: $.with(() => e.order)
    }), d = u.pane.collapse, h = u.pane.expand, f = u.pane.getSize, p = u.pane.isCollapsed, y = u.pane.isExpanded, g = u.pane.resize, _ = u.pane.getId, R = J(() => Ya(l, u.props));
    var M = {
      collapse: d,
      expand: h,
      getSize: f,
      isCollapsed: p,
      isExpanded: y,
      resize: g,
      getId: _
    }, V = De(), L = oe(V);
    {
      var Z = (I) => {
        var E = De(), Q = oe(E);
        yt(Q, () => e.child, () => ({
          props: c(R)
        })), C(I, E);
      }, de = (I) => {
        var E = ah();
        Pr(E, () => ({
          ...c(R)
        }));
        var Q = k(E);
        yt(Q, () => e.children ?? Tr), S(E), C(I, E);
      };
      ye(L, (I) => {
        e.child ? I(Z) : I(de, false);
      });
    }
    return C(t, V), Ke(M);
  }
  var nh = j("<div><!></div>");
  function ih(t, e) {
    const r = Ba();
    Ye(e, true);
    let a = O(e, "id", 3, r), i = O(e, "ref", 15, null), n = O(e, "disabled", 3, false), s = O(e, "onDraggingChange", 3, It), o = O(e, "tabindex", 3, 0), l = kt(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "id",
      "ref",
      "disabled",
      "onDraggingChange",
      "tabindex",
      "child",
      "children"
    ]);
    const u = rn.create({
      id: $.with(() => a()),
      ref: $.with(() => i(), (g) => i(g)),
      disabled: $.with(() => n()),
      onDraggingChange: $.with(() => s()),
      tabIndex: $.with(() => o())
    }), d = J(() => Ya(l, u.props));
    var h = De(), f = oe(h);
    {
      var p = (g) => {
        var _ = De(), R = oe(_);
        yt(R, () => e.child, () => ({
          props: c(d)
        })), C(g, _);
      }, y = (g) => {
        var _ = nh();
        Pr(_, () => ({
          ...c(d)
        }));
        var R = k(_);
        yt(R, () => e.children ?? Tr), S(_), C(g, _);
      };
      ye(f, (g) => {
        e.child ? g(p) : g(y, false);
      });
    }
    C(t, h), Ke();
  }
  var sh = j('<div class="z-10 flex h-4 w-3 items-center justify-center border bg-border"><span class="text-xs font-bold text-white select-none">\u283F</span></div>');
  function In(t, e) {
    Ye(e, true);
    let r = O(e, "ref", 15, null), a = O(e, "withHandle", 3, false), i = kt(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "ref",
      "class",
      "withHandle"
    ]);
    var n = De(), s = oe(n);
    {
      let o = J(() => Mr("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:start-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-hidden data-[direction=vertical]:h-px data-[direction=vertical]:w-full data-[direction=vertical]:after:start-0 data-[direction=vertical]:after:h-1 data-[direction=vertical]:after:w-full data-[direction=vertical]:after:translate-x-0 data-[direction=vertical]:after:-translate-y-1/2 [&[data-direction=vertical]>div]:rotate-90", e.class));
      Ue(s, () => ih, (l, u) => {
        u(l, Da({
          "data-slot": "resizable-handle",
          get class() {
            return c(o);
          }
        }, () => i, {
          get ref() {
            return r();
          },
          set ref(d) {
            r(d);
          },
          children: (d, h) => {
            var f = De(), p = oe(f);
            {
              var y = (g) => {
                var _ = sh();
                C(g, _);
              };
              ye(p, (g) => {
                a() && g(y);
              });
            }
            C(d, f);
          },
          $$slots: {
            default: true
          }
        }));
      });
    }
    C(t, n), Ke();
  }
  function oh(t, e) {
    Ye(e, true), O(e, "ref", 11, null);
    let r = O(e, "this", 15), a = kt(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "ref",
      "this",
      "class"
    ]);
    var i = De(), n = oe(i);
    {
      let s = J(() => Mr("flex h-full w-full data-[direction=vertical]:flex-col", e.class));
      Ue(n, () => rh, (o, l) => {
        vt(l(o, Da({
          "data-slot": "resizable-pane-group",
          get class() {
            return c(s);
          }
        }, () => a)), (u) => r(u), () => r());
      });
    }
    C(t, i), Ke();
  }
  var ch = j('<input type="file" accept="image/*" class="hidden"/>'), lh = j('<div class="absolute inset-0 z-20"><!></div> <div class="absolute bottom-2 z-30 flex flex-col gap-2"><button type="button" class="bg-black/70 px-px py-1 text-xs text-white uppercase hover:bg-black/90"> </button> <button type="button" class="bg-black/70 px-px py-1 text-xs text-white uppercase hover:bg-black/90"> </button> <button type="button" class="bg-black/70 px-px py-1 text-xs text-white uppercase hover:bg-black/90"> </button> <button type="button" class="bg-indigo-600 px-px py-1 text-xs text-white uppercase hover:bg-indigo-700"> </button></div>', 1), uh = j('<div class="h-full w-full"></div>'), dh = j('<div class="h-full w-full"><!></div>'), hh = j('<img class="h-full w-full object-cover" alt="Position 1"/>'), fh = j('<div class="absolute inset-0 z-20 flex items-center justify-center bg-black/60"><!></div>'), ph = j('<div class="absolute inset-y-0 left-0 h-full"><!></div> <div class="absolute top-1 left-1 z-10 flex flex-col gap-1"><button type="button" class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70" aria-label="Remove position 1"><!></button> <button type="button" class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70" aria-label="Re-crop position 1"><!></button></div> <!>', 1), mh = j('<button type="button" class="flex h-full w-full cursor-pointer items-center justify-center transition-colors" aria-label="Upload position 1"><div class="flex flex-col items-center justify-center gap-1 text-center"><div class="flex size-8 items-center justify-center border border-dashed border-border text-muted-foreground"><!></div></div></button>'), vh = j('<div class="relative h-full w-full overflow-hidden"><!></div>'), gh = j('<div class="h-full w-full"></div>'), _h = j('<div class="h-full w-full"><!></div>'), yh = j('<img class="h-full w-full object-cover" alt="Position 2"/>'), bh = j('<div class="absolute inset-0 z-20 flex items-center justify-center bg-black/60"><!></div>'), xh = j('<div class="absolute inset-y-0 h-full"><!></div> <div class="absolute top-1 left-1 z-10 flex flex-col gap-1"><button type="button" class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70" aria-label="Remove position 2"><!></button> <button type="button" class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70" aria-label="Re-crop position 2"><!></button></div> <!>', 1), wh = j('<button type="button" aria-label="Upload position 2" class="flex h-full w-full cursor-pointer items-center justify-center transition-colors"><div class="flex flex-col items-center justify-center gap-1 text-center"><div class="flex size-8 items-center justify-center border border-dashed border-border text-muted-foreground"><!></div></div></button>'), kh = j('<div class="relative h-full w-full overflow-hidden"><!></div>'), Sh = j('<div class="h-full w-full"></div>'), Ch = j('<div class="h-full w-full"><!></div>'), Ah = j('<img class="h-full w-full object-cover" alt="Position 3"/>'), zh = j('<div class="absolute inset-0 z-20 flex items-center justify-center bg-black/60"><!></div>'), Rh = j('<div class="absolute inset-y-0 h-full"><!></div> <div class="absolute top-1 right-1 z-10 flex flex-col gap-1"><button type="button" class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70" aria-label="Remove position 3"><!></button> <button type="button" class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70" aria-label="Re-crop position 3"><!></button></div> <!>', 1), Eh = j('<button aria-label="Upload position 3" type="button" class="flex h-full w-full cursor-pointer items-center justify-center transition-colors"><div class="flex flex-col items-center justify-center gap-1 text-center"><div class="flex size-8 items-center justify-center border border-dashed border-border text-muted-foreground"><!></div></div></button>'), Th = j('<div class="relative h-full w-full overflow-hidden"><!></div>'), Ih = j("<!> <!> <!> <!> <!>", 1), Ph = j('<button type="button" class="hidden bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-md hover:bg-black/70 disabled:opacity-50 md:flex"> </button>'), Mh = j('<div class="absolute right-2 bottom-2 z-60 flex gap-2"><button type="button"> </button> <!></div>'), Oh = j("<div><!> <!> <!> <!></div>");
  function jh(t, e) {
    Ye(e, true);
    let r = O(e, "class", 3, ""), a = [], i = J(() => {
      if (a.forEach((m) => {
        m.startsWith("blob:") && URL.revokeObjectURL(m);
      }), a = [], !e.initialThumbnails || e.initialThumbnails.length === 0) return [
        null,
        null,
        null
      ];
      const v = [
        null,
        null,
        null
      ];
      for (let m = 0; m < Math.min(e.initialThumbnails.length, 3); m++) {
        const w = e.initialThumbnails[m];
        if (!(w == null ? void 0 : w.$isLoaded)) continue;
        const U = Ji(w, 800, 800);
        if (!U) continue;
        const F = U.image.toBlob();
        if (F) {
          const pe = URL.createObjectURL(F);
          a.push(pe), v[m] = pe;
        }
      }
      return v;
    });
    jn(() => {
      a.forEach((v) => {
        v.startsWith("blob:") && URL.revokeObjectURL(v);
      });
    });
    let n = H(ke([
      null,
      null,
      null
    ]));
    Xe(() => {
      const v = c(i);
      v.some((m) => m !== null) && c(n).every((m) => m === null) && x(n, [
        ...v
      ], true);
    });
    let s = ke([
      void 0,
      void 0,
      void 0
    ]), o = ke([
      void 0,
      void 0,
      void 0
    ]), l = ke([
      void 0,
      void 0,
      void 0
    ]), u = ke([
      void 0,
      void 0,
      void 0
    ]), d = ke([
      void 0,
      void 0,
      void 0
    ]), h = H(null), f = H(ke({
      x: 0,
      y: 0
    })), p = H(1), y = H(null);
    function g(v) {
      x(y, {
        width: v.width,
        height: v.height
      }, true);
    }
    function _() {
      x(f, {
        x: 0,
        y: c(f).y
      }, true);
    }
    function R() {
      if (!c(y) || c(E) === 0 || c(Q) === 0) return;
      const { width: v, height: m } = c(y), w = v / m, U = c(E) / c(Q);
      w < U ? x(p, U / w) : x(p, 1), x(p, Math.max(0.1, Math.min(10, c(p))), true), x(f, {
        x: 0,
        y: 0
      }, true);
    }
    let M = H(null), V = ke(/* @__PURE__ */ new Set()), L = H(false), Z = ke([
      void 0,
      void 0,
      void 0
    ]);
    async function de() {
      if (!c(L)) return c(n);
      const v = [];
      for (let m = 0; m < 3; m++) {
        const w = c(n)[m];
        if (!w) {
          v.push(null);
          continue;
        }
        const U = Z[m];
        if (!U) {
          v.push(w);
          continue;
        }
        const F = U.querySelector("canvas");
        if (!F) {
          v.push(w);
          continue;
        }
        const pe = F.toDataURL("image/png");
        v.push(pe);
      }
      return v;
    }
    Xe(() => {
      var _a6;
      (_a6 = e.getImagesRef) == null ? void 0 : _a6.call(e, de);
    });
    let I = H(void 0), E = H(0), Q = H(0), ae = H(ke([
      33.33,
      33.34,
      33.33
    ])), T = ke([
      null,
      null,
      null
    ]);
    Xs(() => c(I), (v) => {
      const m = v[0];
      if (!m) return;
      const { width: w, height: U } = m.contentRect;
      x(E, w ?? 0, true), x(Q, U ?? 0, true);
    });
    let Oe = J(() => c(n).some((v) => !!v)), st = J(() => c(M) !== null), Ne = J(() => c(n).map((v, m) => v && !V.has(m) ? m + 1 : -1).filter((v) => v !== -1)), ot = J(() => [
      0,
      c(ae)[0] / 100 * c(E),
      (c(ae)[0] + c(ae)[1]) / 100 * c(E)
    ]), Ct = J(() => [
      c(ae)[0] / 100 * c(E),
      c(ae)[1] / 100 * c(E),
      c(ae)[2] / 100 * c(E)
    ]);
    function Ot(v, m) {
      var _a6;
      const w = m.target, U = (_a6 = w.files) == null ? void 0 : _a6[0];
      if (!U) return;
      const F = URL.createObjectURL(U);
      s[v] = F, o[v] && URL.revokeObjectURL(o[v]), o[v] = F, x(h, v, true), x(f, {
        x: 0,
        y: 0
      }, true), x(p, 1), x(y, null), w.value = "";
    }
    function ht(v) {
      return (m) => {
        l[v] = m.pixels;
      };
    }
    async function At(v) {
      var _a6;
      const m = s[v], w = l[v];
      if (!m || !w) return;
      const U = await Ku(m, w);
      u[v] = {
        ...c(f)
      }, d[v] = c(p), W && (URL.revokeObjectURL(W), W = null), c(n)[v] = U, s[v] = void 0, l[v] = void 0, x(h, null), (_a6 = e.onImagesChange) == null ? void 0 : _a6.call(e, c(n), v);
    }
    function zt(v) {
      W !== null ? (c(n)[v] = W, W = null) : s[v] && (URL.revokeObjectURL(s[v]), o[v] = void 0), s[v] = void 0, l[v] = void 0, x(h, null);
    }
    function ct(v) {
      var _a6;
      c(n)[v] && URL.revokeObjectURL(c(n)[v]), o[v] && (URL.revokeObjectURL(o[v]), o[v] = void 0), c(n)[v] = null, u[v] = void 0, d[v] = void 0, V.delete(v), (_a6 = e.onImagesChange) == null ? void 0 : _a6.call(e, c(n), v);
    }
    let W = null;
    function Y(v) {
      const m = o[v];
      m && (W = c(n)[v], s[v] = m, c(n)[v] = null, x(h, v, true), x(f, u[v] ? {
        ...u[v]
      } : {
        x: 0,
        y: 0
      }, true), x(p, d[v] ?? 1, true), x(y, null));
    }
    function ie(v) {
      var _a6;
      (_a6 = T[v]) == null ? void 0 : _a6.click();
    }
    async function ce() {
      var _a6;
      const v = c(n).map((m, w) => m && !V.has(w) ? w : -1).filter((m) => m !== -1);
      if (!(v.length === 0 || c(M) !== null)) {
        for (const m of v) {
          const w = c(n)[m];
          if (!w) continue;
          x(M, m, true);
          const U = {
            debug: false,
            device: "gpu",
            output: {
              quality: 0.8,
              format: "image/png"
            }
          };
          try {
            const F = await xu(w, U), pe = URL.createObjectURL(F);
            URL.revokeObjectURL(w), c(n)[m] = pe, V.add(m), (_a6 = e.onImagesChange) == null ? void 0 : _a6.call(e, c(n), m);
          } catch (F) {
            console.error(`Background removal failed for image ${m}:`, F);
          }
        }
        x(M, null);
      }
    }
    var K = Oh(), Ee = k(K);
    Zr(Ee, 16, () => [
      0,
      1,
      2
    ], (v) => v, (v, m) => {
      var w = ch();
      w.__change = (U) => Ot(m, U), vt(w, (U, F) => T[F] = U, (U) => T == null ? void 0 : T[U], () => [
        m
      ]), C(v, w);
    });
    var Ie = N(Ee, 2);
    {
      var ve = (v) => {
        var m = lh(), w = oe(m), U = k(w);
        {
          let Te = J(() => c(E) / c(Q)), re = J(() => ({
            width: c(E),
            height: c(Q)
          })), Ce = J(() => ht(c(h)));
          Gu(U, {
            get image() {
              return s[c(h)];
            },
            cropShape: "rect",
            get aspect() {
              return c(Te);
            },
            showGrid: true,
            minZoom: 0.1,
            maxZoom: 10,
            restrictPosition: false,
            get cropSize() {
              return c(re);
            },
            get oncropcomplete() {
              return c(Ce);
            },
            onimgload: g,
            get crop() {
              return c(f);
            },
            set crop(Pe) {
              x(f, Pe, true);
            },
            get zoom() {
              return c(p);
            },
            set zoom(Pe) {
              x(p, Pe, true);
            }
          });
        }
        S(w);
        var F = N(w, 2), pe = k(F);
        pe.__click = () => zt(c(h));
        var xe = k(pe, true);
        S(pe);
        var ge = N(pe, 2);
        ge.__click = _;
        var Be = k(ge, true);
        S(ge);
        var Ge = N(ge, 2);
        Ge.__click = R;
        var me = k(Ge, true);
        S(Ge);
        var ue = N(Ge, 2);
        ue.__click = () => At(c(h));
        var Se = k(ue, true);
        S(ue), S(F), se((Te, re, Ce, Pe) => {
          mt(w, `clip-path: inset(0 ${c(E) - c(ot)[c(h)] - c(Ct)[c(h)]}px 0 ${c(ot)[c(h)] ?? ""}px);`), mt(F, `left: ${c(ot)[c(h)] + c(Ct)[c(h)] / 2}px; transform: translateX(-50%);`), Re(xe, Te), Re(Be, re), Re(me, Ce), Re(Se, Pe);
        }, [
          () => Un(),
          () => Cs(),
          () => Is(),
          () => Rs()
        ]), C(v, m);
      };
      ye(Ie, (v) => {
        c(h) !== null && s[c(h)] && v(ve);
      });
    }
    var he = N(Ie, 2);
    Ue(he, () => oh, (v, m) => {
      m(v, {
        direction: "horizontal",
        class: "h-full w-full",
        onLayoutChange: (w) => {
          x(ae, w, true);
        },
        children: (w, U) => {
          var F = Ih(), pe = oe(F);
          Ue(pe, () => ka, (me, ue) => {
            ue(me, {
              defaultSize: 33.33,
              minSize: 15.5,
              children: (Se, Te) => {
                var re = vh(), Ce = k(re);
                {
                  var Pe = (G) => {
                    var we = uh();
                    C(G, we);
                  }, _e8 = (G) => {
                    var we = De(), Ve = oe(we);
                    {
                      var $e = (Me) => {
                        var Ae = ph(), ze = oe(Ae), Ze = k(ze);
                        {
                          var Qe = (ne) => {
                            var ee = dh(), rt = k(ee);
                            ya(rt, {
                              class: "h-full w-full",
                              get image() {
                                return c(n)[0];
                              },
                              colorBack: "#000c38",
                              colorFront: "#94ffaf",
                              colorHighlight: "#eaff94",
                              type: "8x8",
                              size: 2,
                              colorSteps: 2,
                              originalColors: true,
                              fit: "cover",
                              webGlContextAttributes: {
                                alpha: true,
                                premultipliedAlpha: false,
                                preserveDrawingBuffer: true
                              }
                            }), S(ee), vt(ee, (Qt) => Z[0] = Qt, () => Z == null ? void 0 : Z[0]), C(ne, ee);
                          }, Xt = (ne) => {
                            var ee = hh();
                            se(() => _t(ee, "src", c(n)[0])), C(ne, ee);
                          };
                          ye(Ze, (ne) => {
                            c(L) ? ne(Qe) : ne(Xt, false);
                          });
                        }
                        S(ze);
                        var et = N(ze, 2), Fe = k(et);
                        Fe.__click = () => ct(0);
                        var Yt = k(Fe);
                        Dr(Yt, {}), S(Fe);
                        var tt = N(Fe, 2);
                        tt.__click = () => Y(0);
                        var Kt = k(tt);
                        ha(Kt, {}), S(tt), S(et);
                        var $t = N(et, 2);
                        {
                          var Jt = (ne) => {
                            var ee = fh(), rt = k(ee);
                            xa(rt, {}), S(ee), C(ne, ee);
                          };
                          ye($t, (ne) => {
                            c(M) === 0 && ne(Jt);
                          });
                        }
                        se(() => mt(ze, `width: ${c(E) ?? ""}px;`)), C(Me, Ae);
                      }, Rt = (Me) => {
                        var Ae = mh();
                        Ae.__click = () => ie(0);
                        var ze = k(Ae), Ze = k(ze), Qe = k(Ze);
                        fa(Qe, {}), S(Ze), S(ze), S(Ae), C(Me, Ae);
                      };
                      ye(Ve, (Me) => {
                        c(n)[0] ? Me($e) : Me(Rt, false);
                      }, true);
                    }
                    C(G, we);
                  };
                  ye(Ce, (G) => {
                    c(h) === 0 ? G(Pe) : G(_e8, false);
                  });
                }
                S(re), C(Se, re);
              },
              $$slots: {
                default: true
              }
            });
          });
          var xe = N(pe, 2);
          Ue(xe, () => In, (me, ue) => {
            ue(me, {
              withHandle: true,
              class: "z-50"
            });
          });
          var ge = N(xe, 2);
          Ue(ge, () => ka, (me, ue) => {
            ue(me, {
              defaultSize: 33.34,
              minSize: 15.5,
              children: (Se, Te) => {
                var re = kh(), Ce = k(re);
                {
                  var Pe = (G) => {
                    var we = gh();
                    C(G, we);
                  }, _e8 = (G) => {
                    var we = De(), Ve = oe(we);
                    {
                      var $e = (Me) => {
                        var Ae = xh(), ze = oe(Ae), Ze = k(ze);
                        {
                          var Qe = (ne) => {
                            var ee = _h(), rt = k(ee);
                            ya(rt, {
                              class: "h-full w-full",
                              get image() {
                                return c(n)[1];
                              },
                              colorBack: "#000c38",
                              colorFront: "#94ffaf",
                              colorHighlight: "#eaff94",
                              type: "8x8",
                              size: 2,
                              colorSteps: 2,
                              originalColors: true,
                              fit: "cover",
                              webGlContextAttributes: {
                                alpha: true,
                                premultipliedAlpha: false,
                                preserveDrawingBuffer: true
                              }
                            }), S(ee), vt(ee, (Qt) => Z[1] = Qt, () => Z == null ? void 0 : Z[1]), C(ne, ee);
                          }, Xt = (ne) => {
                            var ee = yh();
                            se(() => _t(ee, "src", c(n)[1])), C(ne, ee);
                          };
                          ye(Ze, (ne) => {
                            c(L) ? ne(Qe) : ne(Xt, false);
                          });
                        }
                        S(ze);
                        var et = N(ze, 2), Fe = k(et);
                        Fe.__click = () => ct(1);
                        var Yt = k(Fe);
                        Dr(Yt, {}), S(Fe);
                        var tt = N(Fe, 2);
                        tt.__click = () => Y(1);
                        var Kt = k(tt);
                        ha(Kt, {}), S(tt), S(et);
                        var $t = N(et, 2);
                        {
                          var Jt = (ne) => {
                            var ee = bh(), rt = k(ee);
                            xa(rt, {}), S(ee), C(ne, ee);
                          };
                          ye($t, (ne) => {
                            c(M) === 1 && ne(Jt);
                          });
                        }
                        se(() => mt(ze, `width: ${c(E) ?? ""}px; left: -${c(ot)[1] ?? ""}px;`)), C(Me, Ae);
                      }, Rt = (Me) => {
                        var Ae = wh();
                        Ae.__click = () => ie(1);
                        var ze = k(Ae), Ze = k(ze), Qe = k(Ze);
                        fa(Qe, {}), S(Ze), S(ze), S(Ae), C(Me, Ae);
                      };
                      ye(Ve, (Me) => {
                        c(n)[1] ? Me($e) : Me(Rt, false);
                      }, true);
                    }
                    C(G, we);
                  };
                  ye(Ce, (G) => {
                    c(h) === 1 ? G(Pe) : G(_e8, false);
                  });
                }
                S(re), C(Se, re);
              },
              $$slots: {
                default: true
              }
            });
          });
          var Be = N(ge, 2);
          Ue(Be, () => In, (me, ue) => {
            ue(me, {
              withHandle: true,
              class: "z-50"
            });
          });
          var Ge = N(Be, 2);
          Ue(Ge, () => ka, (me, ue) => {
            ue(me, {
              defaultSize: 33.33,
              minSize: 15.5,
              children: (Se, Te) => {
                var re = Th(), Ce = k(re);
                {
                  var Pe = (G) => {
                    var we = Sh();
                    C(G, we);
                  }, _e8 = (G) => {
                    var we = De(), Ve = oe(we);
                    {
                      var $e = (Me) => {
                        var Ae = Rh(), ze = oe(Ae), Ze = k(ze);
                        {
                          var Qe = (ne) => {
                            var ee = Ch(), rt = k(ee);
                            ya(rt, {
                              class: "h-full w-full",
                              get image() {
                                return c(n)[2];
                              },
                              colorBack: "#000c38",
                              colorFront: "#94ffaf",
                              colorHighlight: "#eaff94",
                              type: "8x8",
                              size: 2,
                              colorSteps: 2,
                              originalColors: true,
                              fit: "cover",
                              webGlContextAttributes: {
                                alpha: true,
                                premultipliedAlpha: false,
                                preserveDrawingBuffer: true
                              }
                            }), S(ee), vt(ee, (Qt) => Z[2] = Qt, () => Z == null ? void 0 : Z[2]), C(ne, ee);
                          }, Xt = (ne) => {
                            var ee = Ah();
                            se(() => _t(ee, "src", c(n)[2])), C(ne, ee);
                          };
                          ye(Ze, (ne) => {
                            c(L) ? ne(Qe) : ne(Xt, false);
                          });
                        }
                        S(ze);
                        var et = N(ze, 2), Fe = k(et);
                        Fe.__click = () => ct(2);
                        var Yt = k(Fe);
                        Dr(Yt, {}), S(Fe);
                        var tt = N(Fe, 2);
                        tt.__click = () => Y(2);
                        var Kt = k(tt);
                        ha(Kt, {}), S(tt), S(et);
                        var $t = N(et, 2);
                        {
                          var Jt = (ne) => {
                            var ee = zh(), rt = k(ee);
                            xa(rt, {}), S(ee), C(ne, ee);
                          };
                          ye($t, (ne) => {
                            c(M) === 2 && ne(Jt);
                          });
                        }
                        se(() => mt(ze, `width: ${c(E) ?? ""}px; left: -${c(ot)[2] ?? ""}px;`)), C(Me, Ae);
                      }, Rt = (Me) => {
                        var Ae = Eh();
                        Ae.__click = () => ie(2);
                        var ze = k(Ae), Ze = k(ze), Qe = k(Ze);
                        fa(Qe, {}), S(Ze), S(ze), S(Ae), C(Me, Ae);
                      };
                      ye(Ve, (Me) => {
                        c(n)[2] ? Me($e) : Me(Rt, false);
                      }, true);
                    }
                    C(G, we);
                  };
                  ye(Ce, (G) => {
                    c(h) === 2 ? G(Pe) : G(_e8, false);
                  });
                }
                S(re), C(Se, re);
              },
              $$slots: {
                default: true
              }
            });
          }), C(w, F);
        },
        $$slots: {
          default: true
        }
      });
    });
    var fe = N(he, 2);
    {
      var le = (v) => {
        var m = Mh(), w = k(m);
        w.__click = () => x(L, !c(L));
        var U = k(w, true);
        S(w);
        var F = N(w, 2);
        {
          var pe = (xe) => {
            var ge = Ph();
            ge.__click = ce;
            var Be = k(ge, true);
            S(ge), se((Ge) => {
              ge.disabled = c(st), Re(Be, Ge);
            }, [
              () => c(st) ? "Removing..." : `Remove BG [${c(Ne).join(",")}]`
            ]), C(xe, ge);
          };
          ye(F, (xe) => {
            c(Ne).length > 0 && xe(pe);
          });
        }
        S(m), se((xe) => {
          bt(w, 1, `px-2 py-1 text-xs text-white backdrop-blur-md ${c(L) ? "bg-black ring-1 ring-border hover:bg-black/50" : "bg-black/50 hover:bg-black/70"}`), Re(U, xe);
        }, [
          () => Os()
        ]), C(v, m);
      };
      ye(fe, (v) => {
        c(Oe) && c(h) === null && v(le);
      });
    }
    S(K), vt(K, (v) => x(I, v), () => c(I)), se((v) => bt(K, 1, v), [
      () => Ir(Mr("relative h-full w-full overflow-hidden border", r()))
    ]), C(t, K), Ke();
  }
  Qr([
    "change",
    "click"
  ]);
  const La = [
    "seconds",
    "minutes",
    "reps"
  ], Uh = is({
    name: ua().min(1, "Please enter a card name."),
    tagsinput: os(ua()).min(1, "Please add at least one tag."),
    reps: cn().int(),
    units: ss(La, {
      message: "Please select a unit."
    }),
    sets: cn().int(),
    description: ua()
  });
  var Lh = j('<option selected class="svelte-rub0li"> </option>'), Bh = j('<option class="svelte-rub0li"> </option>'), Dh = j('<button aria-label="select units" class="svelte-rub0li"><div class="svelte-rub0li"><selectedcontent class="svelte-rub0li"></selectedcontent></div></button> <div class="scrollable gap-1 border-2 border-border bg-background *:text-sm *:text-black! svelte-rub0li"></div>', 1), Hh = j("<option selected> </option>"), Nh = j("<option> </option>"), Vh = j('<div class="flex size-9 flex-none items-center justify-center"><div><span> </span></div></div> <!>', 1), Zh = j('<span class="inline text-box-trim"> </span>'), Fh = j('<!> <!> <input type="hidden" name="tagsinput"/>', 1), qh = j("<!>", 1), Wh = j('<select id="units" name="units" class="custom-select h-[133.33%] flex-none border-l bg-transparent p-2.25 text-base font-normal text-black uppercase svelte-rub0li"><!></select>'), Gh = j("<!>", 1), Xh = j('<select id="units" name="units" class="h-[133.33%] flex-none border-l bg-transparent p-2.25 text-base font-normal text-black uppercase"><!></select>'), Yh = j('<!> <div class="relative flex h-8 origin-top-right translate-y-1 scale-75 items-center svelte-rub0li"><!> <!></div>', 1), Kh = j("<!> <!>", 1), $h = j('<!> <div class="relative w-full flex-1"><!></div>', 1), Jh = j('<!> <section class="col-span-6 row-span-5 grid grid-cols-subgrid grid-rows-subgrid gap-1 svelte-rub0li"><div class="card-header-container relative col-span-6 row-span-1 aspect-3/2 w-full overflow-hidden svelte-rub0li"><!></div> <div class="col-span-6 row-span-4 grid grid-cols-subgrid grid-rows-subgrid gap-0 divide-y border svelte-rub0li"><!> <!> <!> <!></div></section>', 1), Qh = j('<div class="card-front border-[0.5px] bg-background p-2 svelte-rub0li"><!></div>'), ef = j('<div class="absolute inset-0 z-10 flex items-center justify-center rounded-[6px] bg-background/80 backdrop-blur-sm"><div class="flex max-w-4/5 flex-col gap-4 p-6"><p class="text-base font-medium text-black"> </p> <p class="text-sm font-medium text-black"> </p> <div class="flex gap-2"><button class="button flex-1 rounded-md transition-colors"> </button> <button class="button-destructive flex-1 transition-colors"> </button></div></div></div>'), tf = j('<button class="button-destructive"> </button>'), rf = j('<div class="card-editor-container col-span-3 row-span-2 row-start-2 px-2 svelte-rub0li"><div class="card-wrapper pointer-events-auto flex flex-col gap-2 svelte-rub0li"><article class="card card-shadow svelte-rub0li"><form id="new-card" class="card-content p-1 svelte-rub0li"><!></form> <!></article> <button form="new-card" class="button" type="submit"> </button> <!></div></div>');
  xf = function(t, e) {
    var _a6, _b, _c3, _d3, _e8, _f2;
    Ye(e, true);
    const r = (W) => {
      var Y = Dh(), ie = oe(Y), ce = k(ie), K = k(ce);
      Fi(K, (Ie) => K = Ie), S(ce), S(ie);
      var Ee = N(ie, 2);
      Zr(Ee, 20, () => La, (Ie) => Ie, (Ie, ve) => {
        var he = De(), fe = oe(he);
        {
          var le = (m) => {
            var w = Lh(), U = k(w, true);
            S(w);
            var F = {};
            se(() => {
              Re(U, ve), F !== (F = ve) && (w.value = (w.__value = ve) ?? "");
            }), C(m, w);
          }, v = (m) => {
            var w = Bh(), U = k(w, true);
            S(w);
            var F = {};
            se(() => {
              Re(U, ve), F !== (F = ve) && (w.value = (w.__value = ve) ?? "");
            }), C(m, w);
          };
          ye(fe, (m) => {
            var _a7;
            ve === ((_a7 = e.initialCard) == null ? void 0 : _a7.units) ? m(le) : m(v, false);
          });
        }
        C(Ie, he);
      }), S(Ee), C(W, Y);
    }, a = (W) => {
      var Y = De(), ie = oe(Y);
      Zr(ie, 16, () => La, (ce) => ce, (ce, K) => {
        var Ee = De(), Ie = oe(Ee);
        {
          var ve = (fe) => {
            var le = Hh(), v = k(le, true);
            S(le);
            var m = {};
            se(() => {
              Re(v, K), m !== (m = K) && (le.value = (le.__value = K) ?? "");
            }), C(fe, le);
          }, he = (fe) => {
            var le = Nh(), v = k(le, true);
            S(le);
            var m = {};
            se(() => {
              Re(v, K), m !== (m = K) && (le.value = (le.__value = K) ?? "");
            }), C(fe, le);
          };
          ye(Ie, (fe) => {
            var _a7;
            K === ((_a7 = e.initialCard) == null ? void 0 : _a7.units) ? fe(ve) : fe(he, false);
          });
        }
        C(ce, Ee);
      }), C(W, Y);
    }, i = (W) => {
      var Y = Qh(), ie = k(Y);
      Ue(ie, () => ls, (ce, K) => {
        K(ce, {
          class: "relative z-1 box-border grid h-full w-full grid-cols-6 grid-rows-[auto_auto_auto_auto_auto_1fr] gap-1 border-4 border-double p-2",
          children: (Ee, Ie) => {
            var ve = Jh(), he = oe(ve);
            Ue(he, () => er, (xe, ge) => {
              ge(xe, {
                orientation: "horizontal",
                class: "relative col-span-6 row-span-1 flex items-center justify-start divide-x border text-base",
                children: (Be, Ge) => {
                  var me = Vh(), ue = oe(me), Se = k(ue);
                  let Te;
                  var re = k(Se), Ce = k(re, true);
                  S(re), S(Se), S(ue);
                  var Pe = N(ue, 2);
                  {
                    let _e9 = J(() => Hs());
                    da(Pe, {
                      type: "text",
                      id: "name",
                      name: "name",
                      class: "h-full flex-1 px-2 text-black uppercase select-none",
                      get placeholder() {
                        return c(_e9);
                      },
                      get value() {
                        return c(s);
                      },
                      set value(G) {
                        x(s, G, true);
                      }
                    });
                  }
                  se((_e9) => {
                    bt(Se, 1, `rarity-badge rarity-${c(Q).shape ?? ""}`, "svelte-rub0li"), Te = mt(Se, "", Te, {
                      "--rarity-color": c(Q).color
                    }), bt(re, 1, _e9, "svelte-rub0li"), Re(Ce, c(E));
                  }, [
                    () => Ir(Mr("rarity-value", (c(Q).shape === "triangle" || c(Q).shape === "pentagon") && "pt-1"))
                  ]), C(Be, me);
                },
                $$slots: {
                  default: true
                }
              });
            });
            var fe = N(he, 2), le = k(fe), v = k(le);
            {
              let xe = J(() => {
                var _a7;
                return ((_a7 = e.initialCard) == null ? void 0 : _a7.thumbnails.$isLoaded) ? e.initialCard.thumbnails : void 0;
              });
              jh(v, {
                get initialThumbnails() {
                  return c(xe);
                },
                onImagesChange: R,
                getImagesRef: (ge) => x(y, ge, true)
              });
            }
            S(le);
            var m = N(le, 2), w = k(m);
            Ue(w, () => er, (xe, ge) => {
              ge(xe, {
                orientation: "horizontal",
                class: "col-span-6 row-span-1 flex h-full w-full items-start justify-between gap-1 pt-2 pb-1",
                children: (Be, Ge) => {
                  var me = Fh(), ue = oe(me);
                  Ue(ue, () => Ur, (re, Ce) => {
                    Ce(re, {
                      class: "flex flex-none items-center px-2 pt-1 text-sm font-normal text-black uppercase",
                      children: (Pe, _e9) => {
                        var G = Zh(), we = k(G, true);
                        S(G), se((Ve) => Re(we, Ve), [
                          () => `${es()}:`
                        ]), C(Pe, G);
                      },
                      $$slots: {
                        default: true
                      }
                    });
                  });
                  var Se = N(ue, 2);
                  {
                    let re = J(() => c(o).length < 1 ? Zs() : "");
                    Qs(Se, {
                      class: "-mb-1 origin-top-right scale-75 bg-transparent py-0 text-right text-base",
                      get placeholder() {
                        return c(re);
                      },
                      get value() {
                        return c(o);
                      },
                      set value(Ce) {
                        x(o, Ce, true);
                      }
                    });
                  }
                  var Te = N(Se, 2);
                  Vi(Te), se((re) => Zi(Te, re), [
                    () => JSON.stringify(c(o))
                  ]), C(Be, me);
                },
                $$slots: {
                  default: true
                }
              });
            });
            var U = N(w, 2);
            Ue(U, () => er, (xe, ge) => {
              ge(xe, {
                orientation: "horizontal",
                class: "col-span-6 row-span-1 flex h-full w-full justify-between pl-2",
                children: (Be, Ge) => {
                  var me = Yh(), ue = oe(me);
                  Ue(ue, () => Ur, (_e9, G) => {
                    G(_e9, {
                      class: "flex flex-none text-sm font-normal text-black uppercase",
                      children: (we, Ve) => {
                        ia();
                        var $e = sa();
                        se((Rt) => Re($e, Rt), [
                          () => `${ts()}:`
                        ]), C(we, $e);
                      },
                      $$slots: {
                        default: true
                      }
                    });
                  });
                  var Se = N(ue, 2), Te = k(Se);
                  da(Te, {
                    type: "number",
                    id: "reps",
                    name: "reps",
                    class: "flex w-16 flex-none px-2 text-right text-base font-normal text-black uppercase tabular-nums",
                    placeholder: "5",
                    get value() {
                      return c(l);
                    },
                    set value(_e9) {
                      x(l, _e9, true);
                    }
                  });
                  var re = N(Te, 2);
                  {
                    var Ce = (_e9) => {
                      var G = Wh();
                      sn(G, () => {
                        var we = k(G), Ve = qh(), $e = oe(Ve);
                        r($e), C(we, Ve);
                      }), C(_e9, G);
                    }, Pe = (_e9) => {
                      var G = Xh();
                      sn(G, () => {
                        var we = k(G), Ve = Gh(), $e = oe(Ve);
                        a($e), C(we, Ve);
                      }), C(_e9, G);
                    };
                    ye(re, (_e9) => {
                      _ ? _e9(Ce) : _e9(Pe, false);
                    });
                  }
                  S(Se), C(Be, me);
                },
                $$slots: {
                  default: true
                }
              });
            });
            var F = N(U, 2);
            Ue(F, () => er, (xe, ge) => {
              ge(xe, {
                orientation: "horizontal",
                class: "col-span-6 row-span-1 flex h-full w-full justify-between pl-2",
                children: (Be, Ge) => {
                  var me = Kh(), ue = oe(me);
                  Ue(ue, () => Ur, (Te, re) => {
                    re(Te, {
                      class: "flex flex-none text-sm font-normal text-black uppercase",
                      children: (Ce, Pe) => {
                        ia();
                        var _e9 = sa();
                        se((G) => Re(_e9, G), [
                          () => `${rs()}:`
                        ]), C(Ce, _e9);
                      },
                      $$slots: {
                        default: true
                      }
                    });
                  });
                  var Se = N(ue, 2);
                  da(Se, {
                    type: "number",
                    id: "sets",
                    name: "sets",
                    class: "flex h-8 flex-none origin-top-right translate-y-1 scale-75 px-2 text-right text-base font-normal text-black uppercase tabular-nums",
                    placeholder: "3",
                    get value() {
                      return c(u);
                    },
                    set value(Te) {
                      x(u, Te, true);
                    }
                  }), C(Be, me);
                },
                $$slots: {
                  default: true
                }
              });
            });
            var pe = N(F, 2);
            Ue(pe, () => er, (xe, ge) => {
              ge(xe, {
                orientation: "horizontal",
                class: "col-span-6 row-span-1 flex h-full w-full flex-col items-start gap-1 px-2 pt-2 pb-1",
                children: (Be, Ge) => {
                  var me = $h(), ue = oe(me);
                  Ue(ue, () => Ur, (re, Ce) => {
                    Ce(re, {
                      class: "flex-none text-sm font-normal text-black uppercase",
                      children: (Pe, _e9) => {
                        ia();
                        var G = sa();
                        se((we) => Re(G, we), [
                          () => `${as()}:`
                        ]), C(Pe, G);
                      },
                      $$slots: {
                        default: true
                      }
                    });
                  });
                  var Se = N(ue, 2), Te = k(Se);
                  {
                    let re = J(() => Ws());
                    cs(Te, {
                      name: "description",
                      get placeholder() {
                        return c(re);
                      },
                      class: "scrollbar-thin field-sizing-fixed h-[133.33%] w-[133.33%] origin-top-left scale-75 resize-none text-base text-black",
                      get value() {
                        return c(d);
                      },
                      set value(Ce) {
                        x(d, Ce, true);
                      }
                    });
                  }
                  S(Se), C(Be, me);
                },
                $$slots: {
                  default: true
                }
              });
            }), S(m), S(fe), C(Ee, ve);
          },
          $$slots: {
            default: true
          }
        });
      }), S(Y), C(W, Y);
    }, n = Wi();
    let s = H(ke(((_a6 = e.initialCard) == null ? void 0 : _a6.name) ?? "")), o = H(ke(((_b = e.initialCard) == null ? void 0 : _b.areas) ?? [])), l = H(ke((_c3 = e.initialCard) == null ? void 0 : _c3.reps)), u = H(ke((_d3 = e.initialCard) == null ? void 0 : _d3.sets)), d = H(ke(((_e8 = e.initialCard) == null ? void 0 : _e8.description) ?? "")), h = new Qi(), f = H(ke([
      null,
      null,
      null
    ])), p = H(false), y = H(null), g = H(void 0);
    const _ = (_f2 = CSS.supports) == null ? void 0 : _f2.call(CSS, "appearance", "base-select");
    function R(W, Y) {
      x(f, W, true), h.add(Y);
    }
    const M = J(() => e.mode === "create" ? hs() : Ls()), V = J(() => c(s).trim().length > 0 && c(o).length > 0);
    async function L(W) {
      return (await fetch(W)).blob();
    }
    async function Z() {
      if (!e.initialCard || !n.me.current.$isLoaded) return;
      (await n.me.current.profile.$jazz.ensureLoaded({
        resolve: {
          cards: true,
          decks: {
            $each: {
              cards: true
            }
          }
        }
      })).cards.$jazz.remove((Y) => Y.$jazz.id === e.initialCard.$jazz.id), await Yi(Ki, e.initialCard.$jazz.id, {
        resolve: {
          thumbnails: {
            $each: {
              file: true
            }
          },
          activity: {
            $each: true
          }
        }
      }), la("/cards");
    }
    async function de(W) {
      W.preventDefault();
      const Y = W.target, ie = new FormData(Y), ce = {
        name: ie.get("name"),
        tagsinput: c(o),
        reps: Number(ie.get("reps")),
        units: ie.get("units"),
        sets: Number(ie.get("sets")),
        description: ie.get("description")
      }, K = Uh.safeParse(ce);
      if (!K.success) {
        x(g, K.error, true);
        return;
      }
      if (x(g, void 0), !n.me.current.$isLoaded) return;
      const Ee = ca.group().create({
        owner: n.me.current
      }).makePublic();
      if (e.mode === "create") {
        const ve = (c(y) ? await c(y)() : c(f)).filter((v) => v !== null), he = await Promise.all(ve.map((v) => L(v))), fe = await Promise.all(he.map((v) => dn(v, {
          owner: Ee,
          maxSize: 1024,
          placeholder: "blur",
          progressive: true
        }))), le = Gi.create({
          type: "stretch",
          name: K.data.name,
          areas: K.data.tagsinput,
          reps: K.data.reps,
          units: K.data.units,
          sets: K.data.sets,
          description: K.data.description,
          thumbnails: ca.list(ca.image()).create(fe),
          shareSecret: Ee.$jazz.createInvite("reader"),
          activity: Xi.create([]),
          creator: n.me.current.profile
        }, {
          owner: Ee
        });
        n.me.current.profile.cards.$jazz.push(le), la("/cards");
      } else if (e.initialCard) {
        if (e.initialCard.$jazz.applyDiff({
          name: K.data.name,
          description: K.data.description
        }), h.size > 0 && e.initialCard.thumbnails.$isLoaded) {
          const Ie = c(y) ? await c(y)() : c(f);
          for (const ve of h) {
            const he = Ie[ve];
            if (he) {
              const fe = await L(he), le = await dn(fe, {
                owner: Ee,
                maxSize: 1024,
                placeholder: "blur",
                progressive: true
              });
              e.initialCard.thumbnails.$jazz.set(ve, le);
            } else e.initialCard.thumbnails.$jazz.remove(ve);
          }
        }
        la("/cards");
      }
    }
    const I = J(() => {
      var _a7, _b2, _c4, _d4;
      const W = /* @__PURE__ */ new Map();
      if ((_b2 = (_a7 = e.initialCard) == null ? void 0 : _a7.activity) == null ? void 0 : _b2.$isLoaded) {
        for (const Y of Object.values(e.initialCard.activity.perAccount)) if (Y.value.$isLoaded) for (const ie of Y.all) {
          const ce = (_d4 = (_c4 = ie.by) == null ? void 0 : _c4.$jazz) == null ? void 0 : _d4.id;
          if (ce) {
            const K = W.get(ce) ?? [];
            K.push(ie), W.set(ce, K);
          }
        }
      }
      return W;
    }), E = J(() => {
      let W = 0;
      for (const Y of c(I).values()) {
        const ie = /* @__PURE__ */ new Set();
        for (const ce of Y) if (ce.madeAt) {
          const K = new Date(ce.madeAt).toDateString();
          ie.add(K);
        }
        W += ie.size;
      }
      return W;
    }), Q = J(() => {
      let W = on[0];
      for (const Y of on) c(E) >= Y.minDays && (W = Y);
      return W;
    });
    var ae = rf(), T = k(ae);
    let Oe;
    var st = k(T), Ne = k(st), ot = k(Ne);
    i(ot), S(Ne);
    var Ct = N(Ne, 2);
    {
      var Ot = (W) => {
        var Y = ef(), ie = k(Y), ce = k(ie), K = k(ce, true);
        S(ce);
        var Ee = N(ce, 2), Ie = k(Ee, true);
        S(Ee);
        var ve = N(Ee, 2), he = k(ve);
        he.__click = () => x(p, false);
        var fe = k(he, true);
        S(he);
        var le = N(he, 2);
        le.__click = Z;
        var v = k(le, true);
        S(le), S(ve), S(ie), S(Y), se((m, w, U, F) => {
          Re(K, m), Re(Ie, w), Re(fe, U), Re(v, F);
        }, [
          () => ns(),
          () => us(),
          () => Un(),
          () => ln()
        ]), C(W, Y);
      };
      ye(Ct, (W) => {
        c(p) && W(Ot);
      });
    }
    S(st);
    var ht = N(st, 2), At = k(ht, true);
    S(ht);
    var zt = N(ht, 2);
    {
      var ct = (W) => {
        var Y = tf();
        Y.__click = (ce) => {
          ce.preventDefault(), x(p, true);
        };
        var ie = k(Y, true);
        S(Y), se((ce) => Re(ie, ce), [
          () => ln()
        ]), C(W, Y);
      };
      ye(zt, (W) => {
        e.mode === "edit" && W(ct);
      });
    }
    S(T), S(ae), se(() => {
      Oe = mt(T, "", Oe, {
        "view-transition-name": e.initialCard ? `card-${e.initialCard.$jazz.id}` : void 0
      }), ht.disabled = !c(V), Re(At, c(M));
    }), Sa("submit", Ne, de), C(t, ae), Ke();
  };
  Qr([
    "click"
  ]);
})();
export {
  xf as C,
  __tla
};
