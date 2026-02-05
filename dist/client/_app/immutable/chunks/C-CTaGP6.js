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
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _e2, _i, _t2, _r, _a, _n, _s, _o, _c, _h, _u, _l, __, _d, _p, _g, _f, _E, _Xe_instances, w_fn, T_fn, m_fn, v_fn, b_fn, y_fn, _e3, _i2, _t3, _r2, _a2, _n2, _s2;
import { ak as _, k as u, al as se, a7 as w, x as $, y as q, am as M, H as ne, an as d, N as A, S as R, ao as T, ap as k, aq as ie, ar as V, as as L, at as B, au as ae, av as x, D as l, aw as z, ax as Y, ay as re, az as j, aA as oe, O as ce, g as le, aB as b, B as S, aj as fe, A as he, aC as H, aD as ue, E as G, aE as de, aF as _e, aG as pe, P as ge, aH as D, aI as X, aJ as ve, aK as be, aL as C, C as y, aM as me, aN as ye, aO as Ee, aP as we, aQ as U, aR as Te, aS as E, p as ke, aT as J, aU as Se, aV as Ae, c as Re, i as W, aW as xe, aX as De, aY as Ce, aZ as Ne, a_ as Me, a$ as Oe, b0 as m, u as Fe, b1 as Ie, b2 as Pe, b3 as K, aa as Ve, m as O, b4 as Le, V as Be, b5 as Ye, b6 as je, b7 as He, b8 as Ue, b9 as We, ba as $e, j as qe } from "./Cerututf.js";
var ze = G | de | _e;
function Ge(t, e, s) {
  new Xe(t, e, s);
}
class Xe {
  constructor(e, s, i) {
    __privateAdd(this, _Xe_instances);
    __publicField(this, "parent");
    __publicField(this, "is_pending", false);
    __privateAdd(this, _e2);
    __privateAdd(this, _i, u ? _ : null);
    __privateAdd(this, _t2);
    __privateAdd(this, _r);
    __privateAdd(this, _a);
    __privateAdd(this, _n, null);
    __privateAdd(this, _s, null);
    __privateAdd(this, _o, null);
    __privateAdd(this, _c, null);
    __privateAdd(this, _h, null);
    __privateAdd(this, _u, 0);
    __privateAdd(this, _l, 0);
    __privateAdd(this, __, false);
    __privateAdd(this, _d, false);
    __privateAdd(this, _p, /* @__PURE__ */ new Set());
    __privateAdd(this, _g, /* @__PURE__ */ new Set());
    __privateAdd(this, _f, null);
    __privateAdd(this, _E, se(() => (__privateSet(this, _f, ge(__privateGet(this, _u))), () => {
      __privateSet(this, _f, null);
    })));
    __privateSet(this, _e2, e), __privateSet(this, _t2, s), __privateSet(this, _r, i), this.parent = w.b, this.is_pending = !!__privateGet(this, _t2).pending, __privateSet(this, _a, $(() => {
      if (w.b = this, u) {
        const n = __privateGet(this, _i);
        q(), n.nodeType === M && n.data === ne ? __privateMethod(this, _Xe_instances, T_fn).call(this) : (__privateMethod(this, _Xe_instances, w_fn).call(this), __privateGet(this, _l) === 0 && (this.is_pending = false));
      } else {
        var a = __privateMethod(this, _Xe_instances, m_fn).call(this);
        try {
          __privateSet(this, _n, d(() => i(a)));
        } catch (n) {
          this.error(n);
        }
        __privateGet(this, _l) > 0 ? __privateMethod(this, _Xe_instances, b_fn).call(this) : this.is_pending = false;
      }
      return () => {
        var _a3;
        (_a3 = __privateGet(this, _h)) == null ? void 0 : _a3.remove();
      };
    }, ze)), u && __privateSet(this, _e2, _);
  }
  defer_effect(e) {
    ie(e, __privateGet(this, _p), __privateGet(this, _g));
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!__privateGet(this, _t2).pending;
  }
  update_pending_count(e) {
    __privateMethod(this, _Xe_instances, y_fn).call(this, e), __privateSet(this, _u, __privateGet(this, _u) + e), !(!__privateGet(this, _f) || __privateGet(this, __)) && (__privateSet(this, __, true), A(() => {
      __privateSet(this, __, false), __privateGet(this, _f) && ce(__privateGet(this, _f), __privateGet(this, _u));
    }));
  }
  get_effect_pending() {
    return __privateGet(this, _E).call(this), le(__privateGet(this, _f));
  }
  error(e) {
    var s = __privateGet(this, _t2).onerror;
    let i = __privateGet(this, _t2).failed;
    if (__privateGet(this, _d) || !s && !i) throw e;
    __privateGet(this, _n) && (b(__privateGet(this, _n)), __privateSet(this, _n, null)), __privateGet(this, _s) && (b(__privateGet(this, _s)), __privateSet(this, _s, null)), __privateGet(this, _o) && (b(__privateGet(this, _o)), __privateSet(this, _o, null)), u && (S(__privateGet(this, _i)), fe(), S(he()));
    var a = false, n = false;
    const r = () => {
      if (a) {
        pe();
        return;
      }
      a = true, n && ue(), R.ensure(), __privateSet(this, _u, 0), __privateGet(this, _o) !== null && T(__privateGet(this, _o), () => {
        __privateSet(this, _o, null);
      }), this.is_pending = this.has_pending_snippet(), __privateSet(this, _n, __privateMethod(this, _Xe_instances, v_fn).call(this, () => (__privateSet(this, _d, false), d(() => __privateGet(this, _r).call(this, __privateGet(this, _e2)))))), __privateGet(this, _l) > 0 ? __privateMethod(this, _Xe_instances, b_fn).call(this) : this.is_pending = false;
    };
    A(() => {
      try {
        n = true, s == null ? void 0 : s(e, r), n = false;
      } catch (o) {
        H(o, __privateGet(this, _a) && __privateGet(this, _a).parent);
      }
      i && __privateSet(this, _o, __privateMethod(this, _Xe_instances, v_fn).call(this, () => {
        R.ensure(), __privateSet(this, _d, true);
        try {
          return d(() => {
            i(__privateGet(this, _e2), () => e, () => r);
          });
        } catch (o) {
          return H(o, __privateGet(this, _a).parent), null;
        } finally {
          __privateSet(this, _d, false);
        }
      }));
    });
  }
}
_e2 = new WeakMap();
_i = new WeakMap();
_t2 = new WeakMap();
_r = new WeakMap();
_a = new WeakMap();
_n = new WeakMap();
_s = new WeakMap();
_o = new WeakMap();
_c = new WeakMap();
_h = new WeakMap();
_u = new WeakMap();
_l = new WeakMap();
__ = new WeakMap();
_d = new WeakMap();
_p = new WeakMap();
_g = new WeakMap();
_f = new WeakMap();
_E = new WeakMap();
_Xe_instances = new WeakSet();
w_fn = function() {
  try {
    __privateSet(this, _n, d(() => __privateGet(this, _r).call(this, __privateGet(this, _e2))));
  } catch (e) {
    this.error(e);
  }
};
T_fn = function() {
  const e = __privateGet(this, _t2).pending;
  e && (__privateSet(this, _s, d(() => e(__privateGet(this, _e2)))), A(() => {
    var s = __privateMethod(this, _Xe_instances, m_fn).call(this);
    __privateSet(this, _n, __privateMethod(this, _Xe_instances, v_fn).call(this, () => (R.ensure(), d(() => __privateGet(this, _r).call(this, s))))), __privateGet(this, _l) > 0 ? __privateMethod(this, _Xe_instances, b_fn).call(this) : (T(__privateGet(this, _s), () => {
      __privateSet(this, _s, null);
    }), this.is_pending = false);
  }));
};
m_fn = function() {
  var e = __privateGet(this, _e2);
  return this.is_pending && (__privateSet(this, _h, k()), __privateGet(this, _e2).before(__privateGet(this, _h)), e = __privateGet(this, _h)), e;
};
v_fn = function(e) {
  var s = w, i = x, a = l;
  V(__privateGet(this, _a)), L(__privateGet(this, _a)), B(__privateGet(this, _a).ctx);
  try {
    return e();
  } catch (n) {
    return ae(n), null;
  } finally {
    V(s), L(i), B(a);
  }
};
b_fn = function() {
  const e = __privateGet(this, _t2).pending;
  __privateGet(this, _n) !== null && (__privateSet(this, _c, document.createDocumentFragment()), __privateGet(this, _c).append(__privateGet(this, _h)), z(__privateGet(this, _n), __privateGet(this, _c))), __privateGet(this, _s) === null && __privateSet(this, _s, d(() => e(__privateGet(this, _e2))));
};
y_fn = function(e) {
  var _a3;
  if (!this.has_pending_snippet()) {
    this.parent && __privateMethod(_a3 = this.parent, _Xe_instances, y_fn).call(_a3, e);
    return;
  }
  if (__privateSet(this, _l, __privateGet(this, _l) + e), __privateGet(this, _l) === 0) {
    this.is_pending = false;
    for (const s of __privateGet(this, _p)) Y(s, re), j(s);
    for (const s of __privateGet(this, _g)) Y(s, oe), j(s);
    __privateGet(this, _p).clear(), __privateGet(this, _g).clear(), __privateGet(this, _s) && T(__privateGet(this, _s), () => {
      __privateSet(this, _s, null);
    }), __privateGet(this, _c) && (__privateGet(this, _e2).before(__privateGet(this, _c)), __privateSet(this, _c, null));
  }
};
function dt(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Je = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
function _t(t) {
  return Je.includes(t);
}
const Ke = { formnovalidate: "formNoValidate", ismap: "isMap", nomodule: "noModule", playsinline: "playsInline", readonly: "readOnly", defaultvalue: "defaultValue", defaultchecked: "defaultChecked", srcobject: "srcObject", novalidate: "noValidate", allowfullscreen: "allowFullscreen", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback" };
function pt(t) {
  return t = t.toLowerCase(), Ke[t] ?? t;
}
const Qe = ["touchstart", "touchmove"];
function Ze(t) {
  return Qe.includes(t);
}
const et = ["textarea", "script", "style", "title"];
function gt(t) {
  return et.includes(t);
}
function vt(t, e) {
  var s = e == null ? "" : typeof e == "object" ? e + "" : e;
  s !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = s, t.nodeValue = s + "");
}
function Q(t, e) {
  return Z(t, e);
}
function tt(t, e) {
  D(), e.intro = e.intro ?? false;
  const s = e.target, i = u, a = _;
  try {
    for (var n = X(s); n && (n.nodeType !== M || n.data !== ve); ) n = be(n);
    if (!n) throw C;
    y(true), S(n);
    const r = Z(t, { ...e, anchor: n });
    return y(false), r;
  } catch (r) {
    if (r instanceof Error && r.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/"))) throw r;
    return r !== C && console.warn("Failed to hydrate: ", r), e.recover === false && me(), D(), ye(s), y(false), Q(t, e);
  } finally {
    y(i), S(a);
  }
}
const v = /* @__PURE__ */ new Map();
function Z(t, { target: e, anchor: s, props: i = {}, events: a, context: n, intro: r = true }) {
  D();
  var o = /* @__PURE__ */ new Set(), h = (g) => {
    for (var f = 0; f < g.length; f++) {
      var c = g[f];
      if (!o.has(c)) {
        o.add(c);
        var I = Ze(c);
        e.addEventListener(c, E, { passive: I });
        var P = v.get(c);
        P === void 0 ? (document.addEventListener(c, E, { passive: I }), v.set(c, 1)) : v.set(c, P + 1);
      }
    }
  };
  h(Ee(we)), U.add(h);
  var p = void 0, te = Te(() => {
    var g = s ?? e.appendChild(k());
    return Ge(g, { pending: () => {
    } }, (f) => {
      if (n) {
        ke({});
        var c = l;
        c.c = n;
      }
      if (a && (i.$$events = a), u && J(f, null), p = t(f, i) || {}, u && (w.nodes.end = _, _ === null || _.nodeType !== M || _.data !== Se)) throw Ae(), C;
      n && Re();
    }), () => {
      var _a3;
      for (var f of o) {
        e.removeEventListener(f, E);
        var c = v.get(f);
        --c === 0 ? (document.removeEventListener(f, E), v.delete(f)) : v.set(f, c);
      }
      U.delete(h), g !== s && ((_a3 = g.parentNode) == null ? void 0 : _a3.removeChild(g));
    };
  });
  return N.set(p, te), p;
}
let N = /* @__PURE__ */ new WeakMap();
function st(t, e) {
  const s = N.get(t);
  return s ? (N.delete(t), s(e)) : Promise.resolve();
}
class nt {
  constructor(e, s = true) {
    __publicField(this, "anchor");
    __privateAdd(this, _e3, /* @__PURE__ */ new Map());
    __privateAdd(this, _i2, /* @__PURE__ */ new Map());
    __privateAdd(this, _t3, /* @__PURE__ */ new Map());
    __privateAdd(this, _r2, /* @__PURE__ */ new Set());
    __privateAdd(this, _a2, true);
    __privateAdd(this, _n2, () => {
      var e = W;
      if (__privateGet(this, _e3).has(e)) {
        var s = __privateGet(this, _e3).get(e), i = __privateGet(this, _i2).get(s);
        if (i) xe(i), __privateGet(this, _r2).delete(s);
        else {
          var a = __privateGet(this, _t3).get(s);
          a && (__privateGet(this, _i2).set(s, a.effect), __privateGet(this, _t3).delete(s), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), i = a.effect);
        }
        for (const [n, r] of __privateGet(this, _e3)) {
          if (__privateGet(this, _e3).delete(n), n === e) break;
          const o = __privateGet(this, _t3).get(r);
          o && (b(o.effect), __privateGet(this, _t3).delete(r));
        }
        for (const [n, r] of __privateGet(this, _i2)) {
          if (n === s || __privateGet(this, _r2).has(n)) continue;
          const o = () => {
            if (Array.from(__privateGet(this, _e3).values()).includes(n)) {
              var p = document.createDocumentFragment();
              z(r, p), p.append(k()), __privateGet(this, _t3).set(n, { effect: r, fragment: p });
            } else b(r);
            __privateGet(this, _r2).delete(n), __privateGet(this, _i2).delete(n);
          };
          __privateGet(this, _a2) || !i ? (__privateGet(this, _r2).add(n), T(r, o, false)) : o();
        }
      }
    });
    __privateAdd(this, _s2, (e) => {
      __privateGet(this, _e3).delete(e);
      const s = Array.from(__privateGet(this, _e3).values());
      for (const [i, a] of __privateGet(this, _t3)) s.includes(i) || (b(a.effect), __privateGet(this, _t3).delete(i));
    });
    this.anchor = e, __privateSet(this, _a2, s);
  }
  ensure(e, s) {
    var i = W, a = De();
    if (s && !__privateGet(this, _i2).has(e) && !__privateGet(this, _t3).has(e)) if (a) {
      var n = document.createDocumentFragment(), r = k();
      n.append(r), __privateGet(this, _t3).set(e, { effect: d(() => s(r)), fragment: n });
    } else __privateGet(this, _i2).set(e, d(() => s(this.anchor)));
    if (__privateGet(this, _e3).set(i, e), a) {
      for (const [o, h] of __privateGet(this, _i2)) o === e ? i.skipped_effects.delete(h) : i.skipped_effects.add(h);
      for (const [o, h] of __privateGet(this, _t3)) o === e ? i.skipped_effects.delete(h.effect) : i.skipped_effects.add(h.effect);
      i.oncommit(__privateGet(this, _n2)), i.ondiscard(__privateGet(this, _s2));
    } else u && (this.anchor = _), __privateGet(this, _n2).call(this);
  }
}
_e3 = new WeakMap();
_i2 = new WeakMap();
_t3 = new WeakMap();
_r2 = new WeakMap();
_a2 = new WeakMap();
_n2 = new WeakMap();
_s2 = new WeakMap();
function bt(t, e, ...s) {
  var i = new nt(t);
  $(() => {
    const a = e() ?? null;
    i.ensure(a, a && ((n) => a(n, ...s)));
  }, G);
}
function it(t) {
  return (e, ...s) => {
    var _a3;
    var i = t(...s), a;
    if (u) a = _, q();
    else {
      var n = i.render().trim(), r = Ce(n);
      a = X(r), e.before(a);
    }
    const o = (_a3 = i.setup) == null ? void 0 : _a3.call(i, a);
    J(a, a), typeof o == "function" && Ne(o);
  };
}
function at(t, e) {
  var _a3;
  if (Me(), u) {
    const s = (_a3 = window.__svelte) == null ? void 0 : _a3.h;
    if (s == null ? void 0 : s.has(t)) return s.get(t);
    Oe();
  }
  return e();
}
function rt() {
  var _a3;
  return x === null && Ie(), ((_a3 = x).ac ?? (_a3.ac = new AbortController())).signal;
}
function ee(t) {
  l === null && m(), Ve && l.l !== null ? F(l).m.push(t) : Fe(() => {
    const e = O(t);
    if (typeof e == "function") return e;
  });
}
function ot(t) {
  l === null && m(), ee(() => () => O(t));
}
function ct(t, e, { bubbles: s = false, cancelable: i = false } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: s, cancelable: i });
}
function lt() {
  const t = l;
  return t === null && m(), (e, s, i) => {
    var _a3;
    const a = (_a3 = t.s.$$events) == null ? void 0 : _a3[e];
    if (a) {
      const n = Pe(a) ? a.slice() : [a], r = ct(e, s, i);
      for (const o of n) o.call(t.x, r);
      return !r.defaultPrevented;
    }
    return true;
  };
}
function ft(t) {
  l === null && m(), l.l === null && K(), F(l).b.push(t);
}
function ht(t) {
  l === null && m(), l.l === null && K(), F(l).a.push(t);
}
function F(t) {
  var e = t.l;
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
const mt = Object.freeze(Object.defineProperty({ __proto__: null, afterUpdate: ht, beforeUpdate: ft, createContext: Le, createEventDispatcher: lt, createRawSnippet: it, flushSync: Be, fork: Ye, getAbortSignal: rt, getAllContexts: je, getContext: He, hasContext: Ue, hydratable: at, hydrate: tt, mount: Q, onDestroy: ot, onMount: ee, setContext: We, settled: $e, tick: qe, unmount: st, untrack: O }, Symbol.toStringTag, { value: "Module" }));
export {
  nt as B,
  bt as a,
  ot as b,
  dt as c,
  _t as d,
  mt as e,
  tt as h,
  gt as i,
  Q as m,
  pt as n,
  ee as o,
  vt as s,
  st as u
};
