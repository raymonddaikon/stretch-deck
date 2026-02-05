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
var _t2, _t3, _e2, _t4, _e3, _t5, _t6, _t7, _e4;
import { k as H, y as tt, ak as N, bf as ht, x as ft, E as pt, bg as kt, aT as gt, aI as wt, ap as mt, C as et, B as O, a7 as vt, aZ as bt, j as Mt, h as b, g as w, Z as x, al as yt, bh as at, b8 as Et, b7 as rt, b9 as Ht, F as _t, u as qt, m as At, bi as R, p as _, e as M, a as y, b as m, c as q, f as I, d as L, ag as D, r as B, bj as St, bk as ot, s as xt, bl as Ct, t as Tt } from "./Cerututf.js";
import { j as T, k as v, l as V, m as Pt, n as z, o as C, p as j, b as Nt, i as Ot, s as Wt, d as Rt, f as F } from "./CD9opEPd.js";
import "./DsnmJJEf.js";
import { B as It, i as Lt, a as S } from "./C-CTaGP6.js";
import { p as g, r as A, c as G, s as U } from "./IOctRI-n.js";
import { i as Z } from "./DIL41Api.js";
function Dt(e, t, a, r, s, n) {
  let d = H;
  H && tt();
  var o = null;
  H && N.nodeType === ht && (o = N, tt());
  var c = H ? N : e, u = new It(c, false);
  ft(() => {
    const p = t() || null;
    var l = a || p === "svg" ? kt : null;
    if (p === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(p, (k) => {
      if (p) {
        if (o = H ? o : l ? document.createElementNS(l, p) : document.createElement(p), gt(o, o), r) {
          H && Lt(p) && o.append(document.createComment(""));
          var h = H ? wt(o) : o.appendChild(mt());
          H && (h === null ? et(false) : O(h)), r(o, h);
        }
        vt.nodes.end = o, k.before(o);
      }
      H && O(k);
    }), () => {
    };
  }, pt), bt(() => {
  }), d && (et(true), O(c));
}
function He(e) {
  Mt().then(e);
}
const Bt = 1, Vt = 9, zt = 11;
function W(e) {
  return T(e) && e.nodeType === Bt && typeof e.nodeName == "string";
}
function nt(e) {
  return T(e) && e.nodeType === Vt;
}
function jt(e) {
  var _a;
  return T(e) && ((_a = e.constructor) == null ? void 0 : _a.name) === "VisualViewport";
}
function Ft(e) {
  return T(e) && e.nodeType !== void 0;
}
function it(e) {
  return Ft(e) && e.nodeType === zt && "host" in e;
}
function _e(e, t) {
  var _a;
  if (!e || !t || !W(e) || !W(t)) return false;
  const a = (_a = t.getRootNode) == null ? void 0 : _a.call(t);
  if (e === t || e.contains(t)) return true;
  if (a && it(a)) {
    let r = t;
    for (; r; ) {
      if (e === r) return true;
      r = r.parentNode || r.host;
    }
  }
  return false;
}
function Gt(e) {
  return nt(e) ? e : jt(e) ? e.document : (e == null ? void 0 : e.ownerDocument) ?? document;
}
function Ut(e) {
  var _a;
  return it(e) ? Ut(e.host) : nt(e) ? e.defaultView ?? window : W(e) ? ((_a = e.ownerDocument) == null ? void 0 : _a.defaultView) ?? window : window;
}
function Zt(e) {
  let t = e.activeElement;
  for (; t == null ? void 0 : t.shadowRoot; ) {
    const a = t.shadowRoot.activeElement;
    if (a === t) break;
    t = a;
  }
  return t;
}
class Jt {
  constructor(t) {
    __publicField(this, "element");
    __privateAdd(this, _t2, b(() => this.element.current ? this.element.current.getRootNode() ?? document : document));
    __publicField(this, "getDocument", () => Gt(this.root));
    __publicField(this, "getWindow", () => this.getDocument().defaultView ?? window);
    __publicField(this, "getActiveElement", () => Zt(this.root));
    __publicField(this, "isActiveElement", (t) => t === this.getActiveElement());
    __publicField(this, "querySelector", (t) => this.root ? this.root.querySelector(t) : null);
    __publicField(this, "querySelectorAll", (t) => this.root ? this.root.querySelectorAll(t) : []);
    __publicField(this, "setTimeout", (t, a) => this.getWindow().setTimeout(t, a));
    __publicField(this, "clearTimeout", (t) => this.getWindow().clearTimeout(t));
    typeof t == "function" ? this.element = v(t) : this.element = t;
  }
  get root() {
    return w(__privateGet(this, _t2));
  }
  set root(t) {
    x(__privateGet(this, _t2), t);
  }
  getElementById(t) {
    return this.root.getElementById(t);
  }
}
_t2 = new WeakMap();
const Kt = typeof window < "u" ? window : void 0;
function Qt(e) {
  let t = e.activeElement;
  for (; t == null ? void 0 : t.shadowRoot; ) {
    const a = t.shadowRoot.activeElement;
    if (a === t) break;
    t = a;
  }
  return t;
}
class Xt {
  constructor(t = {}) {
    __privateAdd(this, _t3);
    __privateAdd(this, _e2);
    const { window: a = Kt, document: r = a == null ? void 0 : a.document } = t;
    a !== void 0 && (__privateSet(this, _t3, r), __privateSet(this, _e2, yt((s) => {
      const n = at(a, "focusin", s), d = at(a, "focusout", s);
      return () => {
        n(), d();
      };
    })));
  }
  get current() {
    var _a;
    return (_a = __privateGet(this, _e2)) == null ? void 0 : _a.call(this), __privateGet(this, _t3) ? Qt(__privateGet(this, _t3)) : null;
  }
}
_t3 = new WeakMap();
_e2 = new WeakMap();
new Xt();
class ct {
  constructor(t) {
    __privateAdd(this, _t4);
    __privateAdd(this, _e3);
    __privateSet(this, _t4, t), __privateSet(this, _e3, Symbol(t));
  }
  get key() {
    return __privateGet(this, _e3);
  }
  exists() {
    return Et(__privateGet(this, _e3));
  }
  get() {
    const t = rt(__privateGet(this, _e3));
    if (t === void 0) throw new Error(`Context "${__privateGet(this, _t4)}" not found`);
    return t;
  }
  getOr(t) {
    const a = rt(__privateGet(this, _e3));
    return a === void 0 ? t : a;
  }
  set(t) {
    return Ht(__privateGet(this, _e3), t);
  }
}
_t4 = new WeakMap();
_e3 = new WeakMap();
function Yt(e, t) {
  switch (e) {
    case "post":
      qt(t);
      break;
    case "pre":
      _t(t);
      break;
  }
}
function dt(e, t, a, r = {}) {
  const { lazy: s = false } = r;
  let n = !s, d = Array.isArray(e) ? [] : void 0;
  Yt(t, () => {
    const o = Array.isArray(e) ? e.map((u) => u()) : e();
    if (!n) {
      n = true, d = o;
      return;
    }
    const c = At(() => a(o, d));
    return d = o, c;
  });
}
function lt(e, t, a) {
  dt(e, "post", t, a);
}
function $t(e, t, a) {
  dt(e, "pre", t, a);
}
lt.pre = $t;
const qe = "ArrowDown", Ae = "ArrowLeft", Se = "ArrowRight", xe = "ArrowUp", Ce = "End", Te = "Enter", Pe = "Escape", Ne = "Home", Oe = "PageDown", We = "PageUp", Re = " ", Ie = "Tab", te = typeof document < "u", Le = ee();
function ee() {
  var _a, _b;
  return te && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function De(e) {
  return e instanceof HTMLElement;
}
function Be(e) {
  return e instanceof Element;
}
function Ve(e) {
  return e instanceof Element || e instanceof SVGElement;
}
function ze(e) {
  return e !== null;
}
function je(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Fe() {
}
const ae = new ct("BitsConfig");
function re() {
  const e = new se(null, {});
  return ae.getOr(e).opts;
}
class se {
  constructor(t, a) {
    __publicField(this, "opts");
    const r = oe(t, a);
    this.opts = { defaultPortalTo: r((s) => s.defaultPortalTo), defaultLocale: r((s) => s.defaultLocale) };
  }
}
function oe(e, t) {
  return (a) => v(() => {
    var _a, _b;
    const s = (_a = a(t)) == null ? void 0 : _a.current;
    if (s !== void 0) return s;
    if (e !== null) return (_b = a(e.opts)) == null ? void 0 : _b.current;
  });
}
function ut(e, t) {
  return (a) => {
    const r = re();
    return v(() => {
      const s = a();
      if (s !== void 0) return s;
      const n = e(r).current;
      return n !== void 0 ? n : t;
    });
  };
}
const Ge = ut((e) => e.defaultLocale, "en"), Ue = ut((e) => e.defaultPortalTo, "body");
function Ze(e, t) {
  const a = [];
  for (let r = 0; r < e.length; r += t) a.push(e.slice(r, r + t));
  return a;
}
function Je(e, t) {
  return e >= 0 && e < t.length;
}
function ne(e, t, a) {
  const r = t.toLowerCase();
  if (r.endsWith(" ")) {
    const l = r.slice(0, -1);
    if (e.filter((f) => f.toLowerCase().startsWith(l)).length <= 1) return ne(e, l, a);
    const h = a == null ? void 0 : a.toLowerCase();
    if (h && h.startsWith(l) && h.charAt(l.length) === " " && t.trim() === l) return a;
    const i = e.filter((f) => f.toLowerCase().startsWith(r));
    if (i.length > 0) {
      const f = a ? e.indexOf(a) : -1;
      return st(i, Math.max(f, 0)).find((P) => P !== a) || a;
    }
  }
  const n = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, d = n.toLowerCase(), o = a ? e.indexOf(a) : -1;
  let c = st(e, Math.max(o, 0));
  n.length === 1 && (c = c.filter((l) => l !== a));
  const p = c.find((l) => l == null ? void 0 : l.toLowerCase().startsWith(d));
  return p !== a ? p : void 0;
}
function st(e, t) {
  return e.map((a, r) => e[(t + r) % e.length]);
}
globalThis.bitsIdCounter ?? (globalThis.bitsIdCounter = { current: 0 });
function Ke(e = "bits") {
  return globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`;
}
const J = Pt({ component: "avatar", parts: ["root", "image", "fallback"] }), K = new ct("Avatar.Root");
const _Q = class _Q {
  constructor(t) {
    __publicField(this, "opts");
    __publicField(this, "domContext");
    __publicField(this, "attachment");
    __privateAdd(this, _t5, b(() => ({ id: this.opts.id.current, [J.root]: "", "data-status": this.opts.loadingStatus.current, ...this.attachment })));
    this.opts = t, this.domContext = new Jt(this.opts.ref), this.loadImage = this.loadImage.bind(this), this.attachment = V(this.opts.ref);
  }
  static create(t) {
    return K.set(new _Q(t));
  }
  loadImage(t, a, r) {
    if (this.opts.loadingStatus.current === "loaded") return;
    let s;
    const n = new Image();
    return n.src = t, a !== void 0 && (n.crossOrigin = a), r && (n.referrerPolicy = r), this.opts.loadingStatus.current = "loading", n.onload = () => {
      s = this.domContext.setTimeout(() => {
        this.opts.loadingStatus.current = "loaded";
      }, this.opts.delayMs.current);
    }, n.onerror = () => {
      this.opts.loadingStatus.current = "error";
    }, () => {
      s && this.domContext.clearTimeout(s);
    };
  }
  get props() {
    return w(__privateGet(this, _t5));
  }
  set props(t) {
    x(__privateGet(this, _t5), t);
  }
};
_t5 = new WeakMap();
let Q = _Q;
const _X = class _X {
  constructor(t, a) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t6, b(() => ({ id: this.opts.id.current, style: { display: this.root.opts.loadingStatus.current === "loaded" ? "block" : "none" }, "data-status": this.root.opts.loadingStatus.current, [J.image]: "", src: this.opts.src.current, crossorigin: this.opts.crossOrigin.current, referrerpolicy: this.opts.referrerPolicy.current, ...this.attachment })));
    this.opts = t, this.root = a, this.attachment = V(this.opts.ref), lt.pre([() => this.opts.src.current, () => this.opts.crossOrigin.current], ([r, s]) => {
      if (!r) {
        this.root.opts.loadingStatus.current = "error";
        return;
      }
      this.root.loadImage(r, s, this.opts.referrerPolicy.current);
    });
  }
  static create(t) {
    return new _X(t, K.get());
  }
  get props() {
    return w(__privateGet(this, _t6));
  }
  set props(t) {
    x(__privateGet(this, _t6), t);
  }
};
_t6 = new WeakMap();
let X = _X;
const _Y = class _Y {
  constructor(t, a) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t7, b(() => this.root.opts.loadingStatus.current === "loaded" ? { display: "none" } : void 0));
    __privateAdd(this, _e4, b(() => ({ style: this.style, "data-status": this.root.opts.loadingStatus.current, [J.fallback]: "", ...this.attachment })));
    this.opts = t, this.root = a, this.attachment = V(this.opts.ref);
  }
  static create(t) {
    return new _Y(t, K.get());
  }
  get style() {
    return w(__privateGet(this, _t7));
  }
  set style(t) {
    x(__privateGet(this, _t7), t);
  }
  get props() {
    return w(__privateGet(this, _e4));
  }
  set props(t) {
    x(__privateGet(this, _e4), t);
  }
};
_t7 = new WeakMap();
_e4 = new WeakMap();
let Y = _Y;
var ie = I("<div><!></div>");
function ce(e, t) {
  const a = R();
  _(t, true);
  let r = g(t, "delayMs", 3, 0), s = g(t, "loadingStatus", 15, "loading"), n = g(t, "id", 19, () => z(a)), d = g(t, "ref", 15, null), o = A(t, ["$$slots", "$$events", "$$legacy", "delayMs", "loadingStatus", "onLoadingStatusChange", "child", "children", "id", "ref"]);
  const c = Q.create({ delayMs: v(() => r()), loadingStatus: v(() => s(), (i) => {
    var _a;
    s() !== i && (s(i), (_a = t.onLoadingStatusChange) == null ? void 0 : _a.call(t, i));
  }), id: v(() => n()), ref: v(() => d(), (i) => d(i)) }), u = b(() => j(o, c.props));
  var p = M(), l = y(p);
  {
    var k = (i) => {
      var f = M(), E = y(f);
      S(E, () => t.child, () => ({ props: w(u) })), m(i, f);
    }, h = (i) => {
      var f = ie();
      C(f, () => ({ ...w(u) }));
      var E = L(f);
      S(E, () => t.children ?? D), B(f), m(i, f);
    };
    Z(l, (i) => {
      t.child ? i(k) : i(h, false);
    });
  }
  m(e, p), q();
}
var de = I("<img/>");
function le(e, t) {
  const a = R();
  _(t, true);
  let r = g(t, "id", 19, () => z(a)), s = g(t, "ref", 15, null), n = g(t, "crossorigin", 3, void 0), d = g(t, "referrerpolicy", 3, void 0), o = A(t, ["$$slots", "$$events", "$$legacy", "src", "child", "id", "ref", "crossorigin", "referrerpolicy"]);
  const c = X.create({ src: v(() => t.src), id: v(() => r()), ref: v(() => s(), (i) => s(i)), crossOrigin: v(() => n()), referrerPolicy: v(() => d()) }), u = b(() => j(o, c.props));
  var p = M(), l = y(p);
  {
    var k = (i) => {
      var f = M(), E = y(f);
      S(E, () => t.child, () => ({ props: w(u) })), m(i, f);
    }, h = (i) => {
      var f = de();
      C(f, () => ({ ...w(u), src: t.src })), St(f), m(i, f);
    };
    Z(l, (i) => {
      t.child ? i(k) : i(h, false);
    });
  }
  m(e, p), q();
}
var ue = I("<span><!></span>");
function he(e, t) {
  const a = R();
  _(t, true);
  let r = g(t, "id", 19, () => z(a)), s = g(t, "ref", 15, null), n = A(t, ["$$slots", "$$events", "$$legacy", "children", "child", "id", "ref"]);
  const d = Y.create({ id: v(() => r()), ref: v(() => s(), (k) => s(k)) }), o = b(() => j(n, d.props));
  var c = M(), u = y(c);
  {
    var p = (k) => {
      var h = M(), i = y(h);
      S(i, () => t.child, () => ({ props: w(o) })), m(k, h);
    }, l = (k) => {
      var h = ue();
      C(h, () => ({ ...w(o) }));
      var i = L(h);
      S(i, () => t.children ?? D), B(h), m(k, h);
    };
    Z(u, (k) => {
      t.child ? k(p) : k(l, false);
    });
  }
  m(e, c), q();
}
const fe = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };
const pe = (e) => {
  for (const t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return true;
  return false;
};
var ke = ot("<svg><!><!></svg>");
function Qe(e, t) {
  _(t, true);
  const a = g(t, "color", 3, "currentColor"), r = g(t, "size", 3, 24), s = g(t, "strokeWidth", 3, 2), n = g(t, "absoluteStrokeWidth", 3, false), d = g(t, "iconNode", 19, () => []), o = A(t, ["$$slots", "$$events", "$$legacy", "name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode", "children"]);
  var c = ke();
  C(c, (l, k) => ({ ...fe, ...l, ...o, width: r(), height: r(), stroke: a(), "stroke-width": k, class: ["lucide-icon lucide", t.name && `lucide-${t.name}`, t.class] }), [() => !t.children && !pe(o) && { "aria-hidden": "true" }, () => n() ? Number(s()) * 24 / Number(r()) : s()]);
  var u = L(c);
  Nt(u, 17, d, Ot, (l, k) => {
    var h = b(() => Ct(w(k), 2));
    let i = () => w(h)[0], f = () => w(h)[1];
    var E = M(), $ = y(E);
    Dt($, i, true, (P, we) => {
      C(P, () => ({ ...f() }));
    }), m(l, E);
  });
  var p = xt(u);
  S(p, () => t.children ?? D), B(c), m(e, c), q();
}
var ge = ot('<svg width="12px" height="12px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g fill="none" class="nc-icon-wrapper" stroke-linejoin="miter" stroke-linecap="butt"><path d="M3 7H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 11H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 15H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 19H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 23H3.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M3 27H3.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 7H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 11H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 15H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 19H7.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 23H7.01" stroke="rgba(197, 216, 253, 0.5215686274509804)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M7 27H7.01" stroke="rgba(197, 216, 253, 0.5215686274509804)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M11 7H11.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 11H11.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 15H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 19H11.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 23H11.01" stroke="rgba(197, 216, 253, 0.5215686274509804)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M11 27H11.01" stroke="rgba(197, 216, 253, 0.5215686274509804)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M15 7H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 11H15.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 19H15.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 15H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 23H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 27H15.01" stroke="rgba(197, 216, 253, 0.5215686274509804)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M19 7H19.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 11H19.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 15H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 19H19.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 23H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 27H19.01" stroke="rgba(197, 216, 253, 0.5215686274509804)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M23 7H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 11H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 3H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 3H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 3H11.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 3H15.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 3H19.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 3H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 3H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 15H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 19H23.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 23H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 27H27.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 27H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 7H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 11H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 15H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 19H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 23H27.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path></g></svg>');
function Xe(e, t) {
  var a = ge();
  Tt(() => Wt(a, 0, Rt(t.class))), m(e, a);
}
function Ye(e, t) {
  _(t, true);
  let a = g(t, "ref", 15, null), r = A(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var s = M(), n = y(s);
  {
    let d = b(() => F("relative flex size-8 shrink-0 overflow-hidden", t.class));
    G(n, () => ce, (o, c) => {
      c(o, U({ "data-slot": "avatar", get class() {
        return w(d);
      } }, () => r, { get ref() {
        return a();
      }, set ref(u) {
        a(u);
      } }));
    });
  }
  m(e, s), q();
}
function $e(e, t) {
  _(t, true);
  let a = g(t, "ref", 15, null), r = A(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var s = M(), n = y(s);
  {
    let d = b(() => F("flex size-full items-center justify-center bg-muted", t.class));
    G(n, () => he, (o, c) => {
      c(o, U({ "data-slot": "avatar-fallback", get class() {
        return w(d);
      } }, () => r, { get ref() {
        return a();
      }, set ref(u) {
        a(u);
      } }));
    });
  }
  m(e, s), q();
}
function ta(e, t) {
  _(t, true);
  let a = g(t, "ref", 15, null), r = A(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var s = M(), n = y(s);
  {
    let d = b(() => F("aspect-square size-full", t.class));
    G(n, () => le, (o, c) => {
      c(o, U({ "data-slot": "avatar-image", get class() {
        return w(d);
      } }, () => r, { get ref() {
        return a();
      }, set ref(u) {
        a(u);
      } }));
    });
  }
  m(e, s), q();
}
export {
  $e as A,
  Ve as B,
  ct as C,
  Jt as D,
  Te as E,
  Pe as F,
  _e as G,
  Ne as H,
  Qe as I,
  Le as J,
  ze as K,
  Xe as P,
  Re as S,
  Ie as T,
  Ye as a,
  ta as b,
  De as c,
  Je as d,
  Dt as e,
  He as f,
  Gt as g,
  qe as h,
  te as i,
  xe as j,
  Ae as k,
  Se as l,
  Ze as m,
  Fe as n,
  Kt as o,
  Ce as p,
  Ue as q,
  Ge as r,
  We as s,
  Oe as t,
  Ke as u,
  je as v,
  lt as w,
  ne as x,
  Ut as y,
  Be as z
};
