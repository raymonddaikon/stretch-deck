var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _e2, _t2, _r2;
import "./DsnmJJEf.js";
import { p as er, e as Xt, a as bt, g as v, h as L, b as M, c as rr, f as tt, d as z, r as T, ai as wr, t as st, F as en, u as Gi, m as dc, b8 as uc, b7 as Js, b9 as fc, al as No, _ as Rt, be as hc, ag as Zi, Z as V, X as Fo, s as mt, Y as bi, a5 as Mn, aj as _n, V as yr } from "./Cerututf.js";
import { a as Ji, s as Ot } from "./C-CTaGP6.js";
import { i as ot } from "./DIL41Api.js";
import { p as Zn, r as Qi, b as Vo, c as ke } from "./IOctRI-n.js";
import { o as Xo, f as Yo, b as Bo, i as pc, a as vc, c as $n, s as Ge, d as ts, w as gc, g as Qs } from "./CD9opEPd.js";
import { g as Ho, M as Uo, d as mc, D as to, e as yc, f as _c } from "./BPNiD34A.js";
import { S as bc, b as wc, d as xc, c as Sc } from "./BjdZBxxB.js";
import { S as kc } from "./D5Cy45eL.js";
import { g as li } from "./C1832kSX.js";
import { o as Oc, s as eo, F as ro, a as no, I as Dc, T as Ec, b as Pc, d as Mc, _ as io, E as $c } from "./yShKUf46.js";
import { C as Ko } from "./ZpSw4bIb.js";
import { D as Cc } from "./BSmMqEvS.js";
import { I as Ic } from "./Bwa2uxWR.js";
import { e as Tc } from "./AqSr3-NM.js";
import { g as Ae } from "./CsOUNaBs.js";
import { c as so } from "./CNcSoRr1.js";
import { e as zc } from "./BehKwuDT.js";
const Ac = () => "Save Deck", Wc = () => "\u30C7\u30C3\u30AD\u3092\u4FDD\u5B58", Rc = (t = {}, e = {}) => (e.locale ?? Ae()) === "en" ? Ac() : Wc(), jc = () => "What is this deck used for?", Lc = () => "\u3053\u306E\u30C7\u30C3\u30AD\u3092\u3069\u3046\u306A\u4F7F\u3048\u304B\u305F?", Nc = (t = {}, e = {}) => (e.locale ?? Ae()) === "en" ? jc() : Lc(), Fc = () => "Sort Deck", Vc = () => "\u30C7\u30C3\u30AD\u9806\u5E8F", Xc = (t = {}, e = {}) => (e.locale ?? Ae()) === "en" ? Fc() : Vc(), Yc = () => "Deck Name", Bc = () => "\u30C7\u30C3\u30AD\u306E\u540D\u524D", Hc = (t = {}, e = {}) => (e.locale ?? Ae()) === "en" ? Yc() : Bc(), Uc = () => "Name", Kc = () => "\u540D\u524D", qc = (t = {}, e = {}) => (e.locale ?? Ae()) === "en" ? Uc() : Kc(), Gc = () => "Select cards to add to your deck.", Zc = () => "\u30C7\u30C3\u30AD\u306B\u5165\u308C\u305F\u3044\u30AB\u30C3\u30C9\u3092\u9078\u3079", Jc = (t = {}, e = {}) => (e.locale ?? Ae()) === "en" ? Gc() : Zc(), Qc = () => "Done Sorting", td = () => "\u4E26\u3079\u66FF\u3048\u5B8C\u4E86", ed = (t = {}, e = {}) => (e.locale ?? Ae()) === "en" ? Qc() : td();
var rd = tt("<li> </li>"), nd = tt('<ul class="ms-4 flex list-disc flex-col gap-1"></ul>'), id = tt("<div><!></div>");
function oo(t, e) {
  er(e, true);
  let r = Zn(e, "ref", 15, null), n = Qi(e, ["$$slots", "$$events", "$$legacy", "ref", "class", "children", "errors"]);
  const i = L(() => {
    var _a2;
    return e.children ? true : !(!e.errors || e.errors.length === 1 && !((_a2 = e.errors[0]) == null ? void 0 : _a2.message));
  }), s = L(() => e.errors && e.errors.length > 1), o = L(() => {
    var _a2;
    return e.errors && e.errors.length === 1 && ((_a2 = e.errors[0]) == null ? void 0 : _a2.message);
  });
  var a = Xt(), c = bt(a);
  {
    var h = (d) => {
      var l = id();
      Xo(l, (b) => ({ role: "alert", "data-slot": "field-error", class: b, ...n }), [() => Yo("text-destructive text-sm font-normal", e.class)]);
      var f = z(l);
      {
        var u = (b) => {
          var x = Xt(), w = bt(x);
          Ji(w, () => e.children), M(b, x);
        }, p = (b) => {
          var x = Xt(), w = bt(x);
          {
            var m = (_) => {
              var y = wr();
              st(() => Ot(y, v(o))), M(_, y);
            }, g = (_) => {
              var y = Xt(), A = bt(y);
              {
                var k = (D) => {
                  var C = nd();
                  Bo(C, 21, () => e.errors ?? [], pc, (I, J) => {
                    var lt = Xt(), ht = bt(lt);
                    {
                      var ct = (ie) => {
                        var be = rd(), we = z(be, true);
                        T(be), st(() => Ot(we, v(J).message)), M(ie, be);
                      };
                      ot(ht, (ie) => {
                        var _a2;
                        ((_a2 = v(J)) == null ? void 0 : _a2.message) && ie(ct);
                      });
                    }
                    M(I, lt);
                  }), T(C), M(D, C);
                };
                ot(A, (D) => {
                  v(s) && D(k);
                }, true);
              }
              M(_, y);
            };
            ot(w, (_) => {
              v(o) ? _(m) : _(g, false);
            }, true);
          }
          M(b, x);
        };
        ot(f, (b) => {
          e.children ? b(u) : b(p, false);
        });
      }
      T(l), Vo(l, (b) => r(b), () => r()), M(d, l);
    };
    ot(c, (d) => {
      v(i) && d(h);
    });
  }
  M(t, a), rr();
}
var sd = Symbol.for("preact-signals");
function Jn() {
  if (ye > 1) ye--;
  else {
    for (var t, e = false; jr !== void 0; ) {
      var r = jr;
      for (jr = void 0, wi++; r !== void 0; ) {
        var n = r.o;
        if (r.o = void 0, r.f &= -3, !(8 & r.f) && Go(r)) try {
          r.c();
        } catch (i) {
          e || (t = i, e = true);
        }
        r = n;
      }
    }
    if (wi = 0, ye--, e) throw t;
  }
}
function at(t) {
  if (ye > 0) return t();
  ye++;
  try {
    return t();
  } finally {
    Jn();
  }
}
var X = void 0;
function U(t) {
  var e = X;
  X = void 0;
  try {
    return t();
  } finally {
    X = e;
  }
}
var jr = void 0, ye = 0, wi = 0, Ln = 0;
function qo(t) {
  if (X !== void 0) {
    var e = t.n;
    if (e === void 0 || e.t !== X) return e = { i: 0, S: t, p: X.s, n: void 0, t: X, e: void 0, x: void 0, r: e }, X.s !== void 0 && (X.s.n = e), X.s = e, t.n = e, 32 & X.f && t.S(e), e;
    if (e.i === -1) return e.i = 0, e.n !== void 0 && (e.n.p = e.p, e.p !== void 0 && (e.p.n = e.n), e.p = X.s, e.n = void 0, X.s.n = e, X.s = e), e;
  }
}
function At(t, e) {
  this.v = t, this.i = 0, this.n = void 0, this.t = void 0, this.W = e == null ? void 0 : e.watched, this.Z = e == null ? void 0 : e.unwatched, this.name = e == null ? void 0 : e.name;
}
At.prototype.brand = sd;
At.prototype.h = function() {
  return true;
};
At.prototype.S = function(t) {
  var e = this, r = this.t;
  r !== t && t.e === void 0 && (t.x = r, this.t = t, r !== void 0 ? r.e = t : U(function() {
    var n;
    (n = e.W) == null || n.call(e);
  }));
};
At.prototype.U = function(t) {
  var e = this;
  if (this.t !== void 0) {
    var r = t.e, n = t.x;
    r !== void 0 && (r.x = n, t.e = void 0), n !== void 0 && (n.e = r, t.x = void 0), t === this.t && (this.t = n, n === void 0 && U(function() {
      var i;
      (i = e.Z) == null || i.call(e);
    }));
  }
};
At.prototype.subscribe = function(t) {
  var e = this;
  return Nt(function() {
    var r = e.value, n = X;
    X = void 0;
    try {
      t(r);
    } finally {
      X = n;
    }
  }, { name: "sub" });
};
At.prototype.valueOf = function() {
  return this.value;
};
At.prototype.toString = function() {
  return this.value + "";
};
At.prototype.toJSON = function() {
  return this.value;
};
At.prototype.peek = function() {
  var t = X;
  X = void 0;
  try {
    return this.value;
  } finally {
    X = t;
  }
};
Object.defineProperty(At.prototype, "value", { get: function() {
  var t = qo(this);
  return t !== void 0 && (t.i = this.i), this.v;
}, set: function(t) {
  if (t !== this.v) {
    if (wi > 100) throw new Error("Cycle detected");
    this.v = t, this.i++, Ln++, ye++;
    try {
      for (var e = this.t; e !== void 0; e = e.x) e.t.N();
    } finally {
      Jn();
    }
  }
} });
function rn(t, e) {
  return new At(t, e);
}
function Go(t) {
  for (var e = t.s; e !== void 0; e = e.n) if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i) return true;
  return false;
}
function Zo(t) {
  for (var e = t.s; e !== void 0; e = e.n) {
    var r = e.S.n;
    if (r !== void 0 && (e.r = r), e.S.n = e, e.i = -1, e.n === void 0) {
      t.s = e;
      break;
    }
  }
}
function Jo(t) {
  for (var e = t.s, r = void 0; e !== void 0; ) {
    var n = e.p;
    e.i === -1 ? (e.S.U(e), n !== void 0 && (n.n = e.n), e.n !== void 0 && (e.n.p = n)) : r = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = n;
  }
  t.s = r;
}
function We(t, e) {
  At.call(this, void 0), this.x = t, this.s = void 0, this.g = Ln - 1, this.f = 4, this.W = e == null ? void 0 : e.watched, this.Z = e == null ? void 0 : e.unwatched, this.name = e == null ? void 0 : e.name;
}
We.prototype = new At();
We.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return false;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Ln)) return true;
  if (this.g = Ln, this.f |= 1, this.i > 0 && !Go(this)) return this.f &= -2, true;
  var t = X;
  try {
    Zo(this), X = this;
    var e = this.x();
    (16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
  } catch (r) {
    this.v = r, this.f |= 16, this.i++;
  }
  return X = t, Jo(this), this.f &= -2, true;
};
We.prototype.S = function(t) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var e = this.s; e !== void 0; e = e.n) e.S.S(e);
  }
  At.prototype.S.call(this, t);
};
We.prototype.U = function(t) {
  if (this.t !== void 0 && (At.prototype.U.call(this, t), this.t === void 0)) {
    this.f &= -33;
    for (var e = this.s; e !== void 0; e = e.n) e.S.U(e);
  }
};
We.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var t = this.t; t !== void 0; t = t.x) t.t.N();
  }
};
Object.defineProperty(We.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var t = qo(this);
  if (this.h(), t !== void 0 && (t.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function ao(t, e) {
  return new We(t, e);
}
function Qo(t) {
  var e = t.u;
  if (t.u = void 0, typeof e == "function") {
    ye++;
    var r = X;
    X = void 0;
    try {
      e();
    } catch (n) {
      throw t.f &= -2, t.f |= 8, es(t), n;
    } finally {
      X = r, Jn();
    }
  }
}
function es(t) {
  for (var e = t.s; e !== void 0; e = e.n) e.S.U(e);
  t.x = void 0, t.s = void 0, Qo(t);
}
function od(t) {
  if (X !== this) throw new Error("Out-of-order effect");
  Jo(this), X = t, this.f &= -2, 8 & this.f && es(this), Jn();
}
function nr(t, e) {
  this.x = t, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32, this.name = e == null ? void 0 : e.name;
}
nr.prototype.c = function() {
  var t = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var e = this.x();
    typeof e == "function" && (this.u = e);
  } finally {
    t();
  }
};
nr.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, Qo(this), Zo(this), ye++;
  var t = X;
  return X = this, od.bind(this, t);
};
nr.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = jr, jr = this);
};
nr.prototype.d = function() {
  this.f |= 8, 1 & this.f || es(this);
};
nr.prototype.dispose = function() {
  this.d();
};
function Nt(t, e) {
  var r = new nr(t, e);
  try {
    r.c();
  } catch (i) {
    throw r.d(), i;
  }
  var n = r.d.bind(r);
  return n[Symbol.dispose] = n, n;
}
var ad = Object.create, rs = Object.defineProperty, ld = Object.defineProperties, cd = Object.getOwnPropertyDescriptor, dd = Object.getOwnPropertyDescriptors, lo = Object.getOwnPropertySymbols, ud = Object.prototype.hasOwnProperty, fd = Object.prototype.propertyIsEnumerable, hd = (t, e) => (e = Symbol[t]) ? e : Symbol.for("Symbol." + t), ir = (t) => {
  throw TypeError(t);
}, xi = (t, e, r) => e in t ? rs(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, pd = (t, e) => {
  for (var r in e || (e = {})) ud.call(e, r) && xi(t, r, e[r]);
  if (lo) for (var r of lo(e)) fd.call(e, r) && xi(t, r, e[r]);
  return t;
}, vd = (t, e) => ld(t, dd(e)), co = (t, e) => rs(t, "name", { value: e, configurable: true }), gd = (t) => {
  var e;
  return [, , , ad((e = void 0) != null ? e : null)];
}, ta = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], xr = (t) => t !== void 0 && typeof t != "function" ? ir("Function expected") : t, md = (t, e, r, n, i) => ({ kind: ta[t], name: e, metadata: n, addInitializer: (s) => r._ ? ir("Already initialized") : i.push(xr(s || null)) }), ea = (t, e) => xi(e, hd("metadata"), t[3]), Oe = (t, e, r, n) => {
  for (var i = 0, s = t[e >> 1], o = s && s.length; i < o; i++) e & 1 ? s[i].call(r) : n = s[i].call(r, n);
  return n;
}, sr = (t, e, r, n, i, s) => {
  var o, a, c, h, d, l = e & 7, f = !!(e & 8), u = !!(e & 16), p = l > 3 ? t.length + 1 : l ? f ? 1 : 2 : 0, b = ta[l + 5], x = l > 3 && (t[p - 1] = []), w = t[p] || (t[p] = []), m = l && (!u && !f && (i = i.prototype), l < 5 && (l > 3 || !u) && cd(l < 4 ? i : { get [r]() {
    return Yt(this, s);
  }, set [r](_) {
    return pe(this, s, _);
  } }, r));
  l ? u && l < 4 && co(s, (l > 2 ? "set " : l > 1 ? "get " : "") + r) : co(i, r);
  for (var g = n.length - 1; g >= 0; g--) h = md(l, r, c = {}, t[3], w), l && (h.static = f, h.private = u, d = h.access = { has: u ? (_) => yd(i, _) : (_) => r in _ }, l ^ 3 && (d.get = u ? (_) => (l ^ 1 ? Yt : _d)(_, i, l ^ 4 ? s : m.get) : (_) => _[r]), l > 2 && (d.set = u ? (_, y) => pe(_, i, y, l ^ 4 ? s : m.set) : (_, y) => _[r] = y)), a = (0, n[g])(l ? l < 4 ? u ? s : m[b] : l > 4 ? void 0 : { get: m.get, set: m.set } : i, h), c._ = 1, l ^ 4 || a === void 0 ? xr(a) && (l > 4 ? x.unshift(a) : l ? u ? s = a : m[b] = a : i = a) : typeof a != "object" || a === null ? ir("Object expected") : (xr(o = a.get) && (m.get = o), xr(o = a.set) && (m.set = o), xr(o = a.init) && x.unshift(o));
  return l || ea(t, i), m && rs(i, r, m), u ? l ^ 4 ? s : m : i;
}, ns = (t, e, r) => e.has(t) || ir("Cannot " + r), yd = (t, e) => Object(e) !== e ? ir('Cannot use the "in" operator on this value') : t.has(e), Yt = (t, e, r) => (ns(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Sr = (t, e, r) => e.has(t) ? ir("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), pe = (t, e, r, n) => (ns(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), _d = (t, e, r) => (ns(t, e, "access private method"), r);
function Yr(t, e) {
  if (e) {
    let r;
    return ao(() => {
      const n = t();
      return n && r && e(r, n) ? r : (r = n, n);
    });
  }
  return ao(t);
}
function Te(t, e) {
  if (Object.is(t, e)) return true;
  if (t === null || e === null) return false;
  if (typeof t == "function" && typeof e == "function") return t === e;
  if (t instanceof Set && e instanceof Set) {
    if (t.size !== e.size) return false;
    for (const r of t) if (!e.has(r)) return false;
    return true;
  }
  if (Array.isArray(t)) return !Array.isArray(e) || t.length !== e.length ? false : !t.some((n, i) => !Te(n, e[i]));
  if (typeof t == "object" && typeof e == "object") {
    const r = Object.keys(t), n = Object.keys(e);
    return r.length !== n.length ? false : !r.some((s) => !Te(t[s], e[s]));
  }
  return false;
}
function W({ get: t }, e) {
  return { init(r) {
    return rn(r);
  }, get() {
    return t.call(this).value;
  }, set(r) {
    const n = t.call(this);
    n.peek() !== r && (n.value = r);
  } };
}
function Mt(t, e) {
  const r = /* @__PURE__ */ new WeakMap();
  return function() {
    let n = r.get(this);
    return n || (n = Yr(t.bind(this)), r.set(this, n)), n.value;
  };
}
function ci(t = true) {
  return function(e, r) {
    r.addInitializer(function() {
      const n = r.kind === "field" ? this : r.static ? this : Object.getPrototypeOf(this), i = Object.getOwnPropertyDescriptor(n, r.name);
      i && Object.defineProperty(n, r.name, vd(pd({}, i), { enumerable: t }));
    });
  };
}
function nn(...t) {
  const e = t.map(Nt);
  return () => e.forEach((r) => r());
}
var ra, na, ia, sa, oa, aa, Tt, is, di, Si, ki, Et, ss, ui, la, Oi, os, fi, Di, Ei;
aa = [W], oa = [W], sa = [W], ia = [ci()], na = [ci()], ra = [ci()];
var or = class {
  constructor(t, e = Object.is) {
    this.defaultValue = t, this.equals = e, Oe(Tt, 5, this), Sr(this, Et), Sr(this, is, Oe(Tt, 8, this)), Oe(Tt, 11, this), Sr(this, ss, Oe(Tt, 12, this)), Oe(Tt, 15, this), Sr(this, os, Oe(Tt, 16, this)), Oe(Tt, 19, this), this.reset = this.reset.bind(this), this.reset();
  }
  get current() {
    return Yt(this, Et, Di);
  }
  get initial() {
    return Yt(this, Et, Si);
  }
  get previous() {
    return Yt(this, Et, la);
  }
  set current(t) {
    const e = U(() => Yt(this, Et, Di));
    t && e && this.equals(e, t) || at(() => {
      Yt(this, Et, Si) || pe(this, Et, t, ki), pe(this, Et, e, Oi), pe(this, Et, t, Ei);
    });
  }
  reset(t = this.defaultValue) {
    at(() => {
      pe(this, Et, void 0, Oi), pe(this, Et, t, ki), pe(this, Et, t, Ei);
    });
  }
};
Tt = gd();
is = /* @__PURE__ */ new WeakMap();
Et = /* @__PURE__ */ new WeakSet();
ss = /* @__PURE__ */ new WeakMap();
os = /* @__PURE__ */ new WeakMap();
di = sr(Tt, 20, "#initial", aa, Et, is), Si = di.get, ki = di.set;
ui = sr(Tt, 20, "#previous", oa, Et, ss), la = ui.get, Oi = ui.set;
fi = sr(Tt, 20, "#current", sa, Et, os), Di = fi.get, Ei = fi.set;
sr(Tt, 2, "current", ia, or);
sr(Tt, 2, "initial", na, or);
sr(Tt, 2, "previous", ra, or);
ea(Tt, or);
function hi(t) {
  return U(() => {
    const e = {};
    for (const r in t) e[r] = t[r];
    return e;
  });
}
var De, bd = class {
  constructor() {
    Sr(this, De, /* @__PURE__ */ new WeakMap());
  }
  get(t, e) {
    var r;
    return t ? (r = Yt(this, De).get(t)) == null ? void 0 : r.get(e) : void 0;
  }
  set(t, e, r) {
    var n;
    if (t) return Yt(this, De).has(t) || Yt(this, De).set(t, /* @__PURE__ */ new Map()), (n = Yt(this, De).get(t)) == null ? void 0 : n.set(e, r);
  }
  clear(t) {
    var e;
    return t ? (e = Yt(this, De).get(t)) == null ? void 0 : e.clear() : void 0;
  }
};
De = /* @__PURE__ */ new WeakMap();
var wd = Object.create, ca = Object.defineProperty, xd = Object.getOwnPropertyDescriptor, uo = Object.getOwnPropertySymbols, Sd = Object.prototype.hasOwnProperty, kd = Object.prototype.propertyIsEnumerable, da = (t, e) => (e = Symbol[t]) ? e : Symbol.for("Symbol." + t), Qn = (t) => {
  throw TypeError(t);
}, fo = Math.pow, Pi = (t, e, r) => e in t ? ca(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, Od = (t, e) => {
  for (var r in e || (e = {})) Sd.call(e, r) && Pi(t, r, e[r]);
  if (uo) for (var r of uo(e)) kd.call(e, r) && Pi(t, r, e[r]);
  return t;
}, Dd = (t) => {
  var e;
  return [, , , wd((e = t == null ? void 0 : t[da("metadata")]) != null ? e : null)];
}, ua = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], fa = (t) => t !== void 0 && typeof t != "function" ? Qn("Function expected") : t, Ed = (t, e, r, n, i) => ({ kind: ua[t], name: e, metadata: n, addInitializer: (s) => r._ ? Qn("Already initialized") : i.push(fa(s || null)) }), Pd = (t, e) => Pi(e, da("metadata"), t[3]), Md = (t, e, r, n) => {
  for (var i = 0, s = t[e >> 1], o = s && s.length; i < o; i++) s[i].call(r);
  return n;
}, ha = (t, e, r, n, i, s) => {
  for (var o, a, c, h, d = e & 7, l = false, f = false, u = 2, p = ua[d + 5], b = t[u] || (t[u] = []), x = (i = i.prototype, xd(i, r)), w = n.length - 1; w >= 0; w--) c = Ed(d, r, a = {}, t[3], b), c.static = l, c.private = f, h = c.access = { has: (m) => r in m }, h.get = (m) => m[r], o = (0, n[w])(x[p], c), a._ = 1, fa(o) && (x[p] = o);
  return x && ca(i, r, x), i;
}, pa = (t, e, r) => e.has(t) || Qn("Cannot " + r), $d = (t, e, r) => (pa(t, e, "read from private field"), e.get(t)), Cd = (t, e, r) => e.has(t) ? Qn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Id = (t, e, r, n) => (pa(t, e, "write to private field"), e.set(t, r), r), Bt = class Mi {
  constructor(e, r) {
    this.x = e, this.y = r;
  }
  static delta(e, r) {
    return new Mi(e.x - r.x, e.y - r.y);
  }
  static distance(e, r) {
    return Math.hypot(e.x - r.x, e.y - r.y);
  }
  static equals(e, r) {
    return e.x === r.x && e.y === r.y;
  }
  static from({ x: e, y: r }) {
    return new Mi(e, r);
  }
}, le = class Ee {
  constructor(e, r, n, i) {
    this.left = e, this.top = r, this.width = n, this.height = i, this.scale = { x: 1, y: 1 };
  }
  get inverseScale() {
    return { x: 1 / this.scale.x, y: 1 / this.scale.y };
  }
  translate(e, r) {
    const { top: n, left: i, width: s, height: o, scale: a } = this, c = new Ee(i + e, n + r, s, o);
    return c.scale = Od({}, a), c;
  }
  get boundingRectangle() {
    const { width: e, height: r, left: n, top: i, right: s, bottom: o } = this;
    return { width: e, height: r, left: n, top: i, right: s, bottom: o };
  }
  get center() {
    const { left: e, top: r, right: n, bottom: i } = this;
    return new Bt((e + n) / 2, (r + i) / 2);
  }
  get area() {
    const { width: e, height: r } = this;
    return e * r;
  }
  equals(e) {
    if (!(e instanceof Ee)) return false;
    const { left: r, top: n, width: i, height: s } = this;
    return r === e.left && n === e.top && i === e.width && s === e.height;
  }
  containsPoint(e) {
    const { top: r, left: n, bottom: i, right: s } = this;
    return r <= e.y && e.y <= i && n <= e.x && e.x <= s;
  }
  intersectionArea(e) {
    return e instanceof Ee ? Td(this, e) : 0;
  }
  intersectionRatio(e) {
    const { area: r } = this, n = this.intersectionArea(e);
    return n / (e.area + r - n);
  }
  get bottom() {
    const { top: e, height: r } = this;
    return e + r;
  }
  get right() {
    const { left: e, width: r } = this;
    return e + r;
  }
  get aspectRatio() {
    const { width: e, height: r } = this;
    return e / r;
  }
  get corners() {
    return [{ x: this.left, y: this.top }, { x: this.right, y: this.top }, { x: this.left, y: this.bottom }, { x: this.right, y: this.bottom }];
  }
  static from({ top: e, left: r, width: n, height: i }) {
    return new Ee(r, e, n, i);
  }
  static delta(e, r, n = { x: "center", y: "center" }) {
    const i = (s, o) => {
      const a = n[o], c = o === "x" ? s.left : s.top, h = o === "x" ? s.width : s.height;
      return a == "start" ? c : a == "end" ? c + h : c + h / 2;
    };
    return Bt.delta({ x: i(e, "x"), y: i(e, "y") }, { x: i(r, "x"), y: i(r, "y") });
  }
  static intersectionRatio(e, r) {
    return Ee.from(e).intersectionRatio(Ee.from(r));
  }
};
function Td(t, e) {
  const r = Math.max(e.top, t.top), n = Math.max(e.left, t.left), i = Math.min(e.left + e.width, t.left + t.width), s = Math.min(e.top + e.height, t.top + t.height), o = i - n, a = s - r;
  return n < i && r < s ? o * a : 0;
}
var va, ga, $i, Cn, sn, ti = class extends ($i = or, ga = [Mt], va = [Mt], $i) {
  constructor(t) {
    const e = Bt.from(t);
    super(e, (r, n) => Bt.equals(r, n)), Md(sn, 5, this), Cd(this, Cn, 0), this.velocity = { x: 0, y: 0 };
  }
  get delta() {
    return Bt.delta(this.current, this.initial);
  }
  get direction() {
    const { current: t, previous: e } = this;
    if (!e) return null;
    const r = { x: t.x - e.x, y: t.y - e.y };
    return !r.x && !r.y ? null : Math.abs(r.x) > Math.abs(r.y) ? r.x > 0 ? "right" : "left" : r.y > 0 ? "down" : "up";
  }
  get current() {
    return super.current;
  }
  set current(t) {
    const { current: e } = this, r = Bt.from(t), n = { x: r.x - e.x, y: r.y - e.y }, i = Date.now(), s = i - $d(this, Cn), o = (a) => Math.round(a / s * 100);
    at(() => {
      Id(this, Cn, i), this.velocity = { x: o(n.x), y: o(n.y) }, super.current = r;
    });
  }
  reset(t = this.defaultValue) {
    super.reset(Bt.from(t)), this.velocity = { x: 0, y: 0 };
  }
};
sn = Dd($i);
Cn = /* @__PURE__ */ new WeakMap();
ha(sn, 2, "delta", ga, ti);
ha(sn, 2, "direction", va, ti);
Pd(sn, ti);
function pi({ x: t, y: e }, r) {
  const n = Math.abs(t), i = Math.abs(e);
  return typeof r == "number" ? Math.sqrt(fo(n, 2) + fo(i, 2)) > r : "x" in r && "y" in r ? n > r.x && i > r.y : "x" in r ? n > r.x : "y" in r ? i > r.y : false;
}
var ma = ((t) => (t.Horizontal = "x", t.Vertical = "y", t))(ma || {}), ya = Object.values(ma), zd = Object.create, as = Object.defineProperty, Ad = Object.defineProperties, Wd = Object.getOwnPropertyDescriptor, Rd = Object.getOwnPropertyDescriptors, Nn = Object.getOwnPropertySymbols, _a = Object.prototype.hasOwnProperty, ba = Object.prototype.propertyIsEnumerable, wa = (t, e) => (e = Symbol[t]) ? e : Symbol.for("Symbol." + t), ar = (t) => {
  throw TypeError(t);
}, Ci = (t, e, r) => e in t ? as(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, xa = (t, e) => {
  for (var r in e || (e = {})) _a.call(e, r) && Ci(t, r, e[r]);
  if (Nn) for (var r of Nn(e)) ba.call(e, r) && Ci(t, r, e[r]);
  return t;
}, Sa = (t, e) => Ad(t, Rd(e)), ho = (t, e) => as(t, "name", { value: e, configurable: true }), ka = (t, e) => {
  var r = {};
  for (var n in t) _a.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && Nn) for (var n of Nn(t)) e.indexOf(n) < 0 && ba.call(t, n) && (r[n] = t[n]);
  return r;
}, lr = (t) => {
  var e;
  return [, , , zd((e = t == null ? void 0 : t[wa("metadata")]) != null ? e : null)];
}, Oa = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], kr = (t) => t !== void 0 && typeof t != "function" ? ar("Function expected") : t, jd = (t, e, r, n, i) => ({ kind: Oa[t], name: e, metadata: n, addInitializer: (s) => r._ ? ar("Already initialized") : i.push(kr(s || null)) }), Re = (t, e) => Ci(e, wa("metadata"), t[3]), E = (t, e, r, n) => {
  for (var i = 0, s = t[e >> 1], o = s && s.length; i < o; i++) e & 1 ? s[i].call(r) : n = s[i].call(r, n);
  return n;
}, R = (t, e, r, n, i, s) => {
  var o, a, c, h, d, l = e & 7, f = !!(e & 8), u = !!(e & 16), p = l > 3 ? t.length + 1 : l ? f ? 1 : 2 : 0, b = Oa[l + 5], x = l > 3 && (t[p - 1] = []), w = t[p] || (t[p] = []), m = l && (!u && !f && (i = i.prototype), l < 5 && (l > 3 || !u) && Wd(l < 4 ? i : { get [r]() {
    return _t(this, s);
  }, set [r](_) {
    return Gt(this, s, _);
  } }, r));
  l ? u && l < 4 && ho(s, (l > 2 ? "set " : l > 1 ? "get " : "") + r) : ho(i, r);
  for (var g = n.length - 1; g >= 0; g--) h = jd(l, r, c = {}, t[3], w), l && (h.static = f, h.private = u, d = h.access = { has: u ? (_) => Ld(i, _) : (_) => r in _ }, l ^ 3 && (d.get = u ? (_) => (l ^ 1 ? _t : Nd)(_, i, l ^ 4 ? s : m.get) : (_) => _[r]), l > 2 && (d.set = u ? (_, y) => Gt(_, i, y, l ^ 4 ? s : m.set) : (_, y) => _[r] = y)), a = (0, n[g])(l ? l < 4 ? u ? s : m[b] : l > 4 ? void 0 : { get: m.get, set: m.set } : i, h), c._ = 1, l ^ 4 || a === void 0 ? kr(a) && (l > 4 ? x.unshift(a) : l ? u ? s = a : m[b] = a : i = a) : typeof a != "object" || a === null ? ar("Object expected") : (kr(o = a.get) && (m.get = o), kr(o = a.set) && (m.set = o), kr(o = a.init) && x.unshift(o));
  return l || Re(t, i), m && as(i, r, m), u ? l ^ 4 ? s : m : i;
}, ls = (t, e, r) => e.has(t) || ar("Cannot " + r), Ld = (t, e) => Object(e) !== e ? ar('Cannot use the "in" operator on this value') : t.has(e), _t = (t, e, r) => (ls(t, e, "read from private field"), r ? r.call(t) : e.get(t)), q = (t, e, r) => e.has(t) ? ar("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Gt = (t, e, r, n) => (ls(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Nd = (t, e, r) => (ls(t, e, "access private method"), r);
function Da(t, e) {
  return { plugin: t, options: e };
}
function cs(t) {
  return (e) => Da(t, e);
}
function ds(t) {
  return typeof t == "function" ? { plugin: t, options: void 0 } : t;
}
var Ea, Br, us, In;
Ea = [W];
var $t = class {
  constructor(t, e) {
    this.manager = t, this.options = e, q(this, us, E(Br, 8, this, false)), E(Br, 11, this), q(this, In, /* @__PURE__ */ new Set());
  }
  enable() {
    this.disabled = false;
  }
  disable() {
    this.disabled = true;
  }
  isDisabled() {
    return U(() => this.disabled);
  }
  configure(t) {
    this.options = t;
  }
  registerEffect(t) {
    const e = Nt(t.bind(this));
    return _t(this, In).add(e), e;
  }
  destroy() {
    _t(this, In).forEach((t) => t());
  }
  static configure(t) {
    return Da(this, t);
  }
};
Br = lr(null);
us = /* @__PURE__ */ new WeakMap();
In = /* @__PURE__ */ new WeakMap();
R(Br, 4, "disabled", Ea, $t, us);
Re(Br, $t);
var ei = class extends $t {
}, Tn, vi = class {
  constructor(t) {
    this.manager = t, this.instances = /* @__PURE__ */ new Map(), q(this, Tn, []);
  }
  get values() {
    return Array.from(this.instances.values());
  }
  set values(t) {
    const e = t.map(ds).reduceRight((n, i) => n.some(({ plugin: s }) => s === i.plugin) ? n : [i, ...n], []), r = e.map(({ plugin: n }) => n);
    for (const n of _t(this, Tn)) if (!r.includes(n)) {
      if (n.prototype instanceof ei) continue;
      this.unregister(n);
    }
    for (const { plugin: n, options: i } of e) this.register(n, i);
    Gt(this, Tn, r);
  }
  get(t) {
    return this.instances.get(t);
  }
  register(t, e) {
    const r = this.instances.get(t);
    if (r) return r.options !== e && (r.options = e), r;
    const n = new t(this.manager, e);
    return this.instances.set(t, n), n;
  }
  unregister(t) {
    const e = this.instances.get(t);
    e && (e.destroy(), this.instances.delete(t));
  }
  destroy() {
    for (const t of this.instances.values()) t.destroy();
    this.instances.clear();
  }
};
Tn = /* @__PURE__ */ new WeakMap();
function Fd(t, e) {
  return t.priority === e.priority ? t.type === e.type ? e.value - t.value : e.type - t.type : e.priority - t.priority;
}
var bn = [], Xe, Ye, Vd = class extends $t {
  constructor(t) {
    super(t), q(this, Xe), q(this, Ye), this.computeCollisions = this.computeCollisions.bind(this), Gt(this, Ye, rn(bn)), this.destroy = nn(() => {
      const e = this.computeCollisions(), r = U(() => this.manager.dragOperation.position.current);
      if (e !== bn) {
        const n = _t(this, Xe);
        if (Gt(this, Xe, r), n && r.x == n.x && r.y == n.y) return;
      } else Gt(this, Xe, void 0);
      _t(this, Ye).value = e;
    }, () => {
      const { dragOperation: e } = this.manager;
      e.status.initialized && this.forceUpdate();
    });
  }
  forceUpdate(t = true) {
    U(() => {
      t ? _t(this, Ye).value = this.computeCollisions() : Gt(this, Xe, void 0);
    });
  }
  computeCollisions(t, e) {
    const { registry: r, dragOperation: n } = this.manager, { source: i, shape: s, status: o } = n;
    if (!o.initialized || !s) return bn;
    const a = [], c = [];
    for (const h of t ?? r.droppables) {
      if (h.disabled || i && !h.accepts(i)) continue;
      const d = e ?? h.collisionDetector;
      if (!d) continue;
      c.push(h), h.shape;
      const l = U(() => d({ droppable: h, dragOperation: n }));
      l && (h.collisionPriority != null && (l.priority = h.collisionPriority), a.push(l));
    }
    return c.length === 0 ? bn : (a.sort(Fd), a);
  }
  get collisions() {
    return _t(this, Ye).value;
  }
};
Xe = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakMap();
var Xd = class {
  constructor() {
    this.registry = /* @__PURE__ */ new Map();
  }
  addEventListener(t, e) {
    const { registry: r } = this, n = new Set(r.get(t));
    return n.add(e), r.set(t, n), () => this.removeEventListener(t, e);
  }
  removeEventListener(t, e) {
    const { registry: r } = this, n = new Set(r.get(t));
    n.delete(e), r.set(t, n);
  }
  dispatch(t, ...e) {
    const { registry: r } = this, n = r.get(t);
    if (n) for (const i of n) i(...e);
  }
}, Yd = class extends Xd {
  constructor(t) {
    super(), this.manager = t;
  }
  dispatch(t, e) {
    const r = [e, this.manager];
    super.dispatch(t, ...r);
  }
};
function zn(t, e = true) {
  let r = false;
  return Sa(xa({}, t), { cancelable: e, get defaultPrevented() {
    return r;
  }, preventDefault() {
    e && (r = true);
  } });
}
var Bd = class extends ei {
  constructor(t) {
    super(t);
    const e = (n, i) => n.map(({ id: s }) => s).join("") === i.map(({ id: s }) => s).join("");
    let r = [];
    this.destroy = nn(() => {
      const { dragOperation: n, collisionObserver: i } = t;
      n.status.initializing && (r = [], i.enable());
    }, () => {
      const { collisionObserver: n, monitor: i } = t, { collisions: s } = n;
      if (n.isDisabled()) return;
      const o = zn({ collisions: s });
      if (i.dispatch("collision", o), o.defaultPrevented || e(s, r)) return;
      r = s;
      const [a] = s;
      U(() => {
        var c;
        (a == null ? void 0 : a.id) !== ((c = t.dragOperation.target) == null ? void 0 : c.id) && (n.disable(), t.actions.setDropTarget(a == null ? void 0 : a.id).then(() => {
          n.enable();
        }));
      });
    });
  }
}, ri = ((t) => (t[t.Lowest = 0] = "Lowest", t[t.Low = 1] = "Low", t[t.Normal = 2] = "Normal", t[t.High = 3] = "High", t[t.Highest = 4] = "Highest", t))(ri || {}), ni = ((t) => (t[t.Collision = 0] = "Collision", t[t.ShapeIntersection = 1] = "ShapeIntersection", t[t.PointerIntersection = 2] = "PointerIntersection", t))(ni || {}), Pa, Ma, $a, Ca, Ia, Ta, za, Ut, fs;
za = [W], Ta = [Mt], Ia = [Mt], Ca = [Mt], $a = [Mt], Ma = [Mt], Pa = [Mt];
var ce = class {
  constructor() {
    E(Ut, 5, this), q(this, fs, E(Ut, 8, this, "idle")), E(Ut, 11, this);
  }
  get current() {
    return this.value;
  }
  get idle() {
    return this.value === "idle";
  }
  get initializing() {
    return this.value === "initializing";
  }
  get initialized() {
    const { value: t } = this;
    return t !== "idle" && t !== "initialization-pending";
  }
  get dragging() {
    return this.value === "dragging";
  }
  get dropped() {
    return this.value === "dropped";
  }
  set(t) {
    this.value = t;
  }
};
Ut = lr(null);
fs = /* @__PURE__ */ new WeakMap();
R(Ut, 4, "value", za, ce, fs);
R(Ut, 2, "current", Ta, ce);
R(Ut, 2, "idle", Ia, ce);
R(Ut, 2, "initializing", Ca, ce);
R(Ut, 2, "initialized", $a, ce);
R(Ut, 2, "dragging", Ma, ce);
R(Ut, 2, "dropped", Pa, ce);
Re(Ut, ce);
var Hd = class {
  constructor(t) {
    this.manager = t;
  }
  setDragSource(t) {
    const { dragOperation: e } = this.manager;
    e.sourceIdentifier = typeof t == "string" || typeof t == "number" ? t : t.id;
  }
  setDropTarget(t) {
    return U(() => {
      const { dragOperation: e } = this.manager, r = t ?? null;
      if (e.targetIdentifier === r) return Promise.resolve(false);
      e.targetIdentifier = r;
      const n = zn({ operation: e.snapshot() });
      return e.status.dragging && this.manager.monitor.dispatch("dragover", n), this.manager.renderer.rendering.then(() => n.defaultPrevented);
    });
  }
  start(t) {
    return U(() => {
      const { dragOperation: e } = this.manager;
      if (t.source != null && this.setDragSource(t.source), !e.source) throw new Error("Cannot start a drag operation without a drag source");
      if (!e.status.idle) throw new Error("Cannot start a drag operation while another is active");
      const n = new AbortController(), { event: i, coordinates: s } = t;
      at(() => {
        e.status.set("initialization-pending"), e.shape = null, e.canceled = false, e.activatorEvent = i ?? null, e.position.reset(s);
      });
      const o = zn({ operation: e.snapshot() });
      return this.manager.monitor.dispatch("beforedragstart", o), o.defaultPrevented ? (e.reset(), n.abort(), n) : (e.status.set("initializing"), e.controller = n, this.manager.renderer.rendering.then(() => {
        if (n.signal.aborted) return;
        const { status: a } = e;
        a.current === "initializing" && (e.status.set("dragging"), this.manager.monitor.dispatch("dragstart", { nativeEvent: i, operation: e.snapshot(), cancelable: false }));
      }), n);
    });
  }
  move(t) {
    return U(() => {
      var e, r;
      const { dragOperation: n } = this.manager, { status: i, controller: s } = n;
      if (!i.dragging || !s || s.signal.aborted) return;
      const o = zn({ nativeEvent: t.event, operation: n.snapshot(), by: t.by, to: t.to }, (e = t.cancelable) != null ? e : true);
      ((r = t.propagate) == null || r) && this.manager.monitor.dispatch("dragmove", o), queueMicrotask(() => {
        var a, c, h, d, l;
        if (o.defaultPrevented) return;
        const f = (l = t.to) != null ? l : { x: n.position.current.x + ((c = (a = t.by) == null ? void 0 : a.x) != null ? c : 0), y: n.position.current.y + ((d = (h = t.by) == null ? void 0 : h.y) != null ? d : 0) };
        n.position.current = f;
      });
    });
  }
  stop(t = {}) {
    return U(() => {
      var e, r;
      const { dragOperation: n } = this.manager, { controller: i } = n;
      if (!i || i.signal.aborted) return;
      let s;
      const o = () => {
        const c = { resume: () => {
        }, abort: () => {
        } };
        return s = new Promise((h, d) => {
          c.resume = h, c.abort = d;
        }), c;
      };
      i.abort();
      const a = () => {
        this.manager.renderer.rendering.then(() => {
          n.status.set("dropped");
          const c = U(() => {
            var d;
            return ((d = n.source) == null ? void 0 : d.status) === "dropping";
          }), h = () => {
            n.controller === i && (n.controller = void 0), n.reset();
          };
          if (c) {
            const { source: d } = n, l = Nt(() => {
              (d == null ? void 0 : d.status) === "idle" && (l(), h());
            });
          } else this.manager.renderer.rendering.then(h);
        });
      };
      n.canceled = (e = t.canceled) != null ? e : false, this.manager.monitor.dispatch("dragend", { nativeEvent: t.event, operation: n.snapshot(), canceled: (r = t.canceled) != null ? r : false, suspend: o }), s ? s.then(a).catch(() => n.reset()) : a();
    });
  }
}, Aa, Wa, Ra, ja, Lt, hs, ps, vs, gs;
ja = [W], Ra = [W], Wa = [W], Aa = [W];
var _e = class {
  constructor(t, e) {
    q(this, hs, E(Lt, 8, this)), E(Lt, 11, this), q(this, ps, E(Lt, 12, this)), E(Lt, 15, this), q(this, vs, E(Lt, 16, this)), E(Lt, 19, this), q(this, gs, E(Lt, 20, this)), E(Lt, 23, this);
    const { effects: r, id: n, data: i = {}, disabled: s = false, register: o = true } = t;
    let a = n;
    this.manager = e, this.id = n, this.data = i, this.disabled = s, this.effects = () => {
      var c;
      return [() => {
        const { id: h, manager: d } = this;
        if (h !== a) return d == null ? void 0 : d.registry.register(this), () => d == null ? void 0 : d.registry.unregister(this);
      }, ...(c = r == null ? void 0 : r()) != null ? c : []];
    }, this.register = this.register.bind(this), this.unregister = this.unregister.bind(this), this.destroy = this.destroy.bind(this), e && o && queueMicrotask(this.register);
  }
  register() {
    var t;
    return (t = this.manager) == null ? void 0 : t.registry.register(this);
  }
  unregister() {
    var t;
    (t = this.manager) == null || t.registry.unregister(this);
  }
  destroy() {
    var t;
    (t = this.manager) == null || t.registry.unregister(this);
  }
};
Lt = lr(null);
hs = /* @__PURE__ */ new WeakMap();
ps = /* @__PURE__ */ new WeakMap();
vs = /* @__PURE__ */ new WeakMap();
gs = /* @__PURE__ */ new WeakMap();
R(Lt, 4, "manager", ja, _e, hs);
R(Lt, 4, "id", Ra, _e, ps);
R(Lt, 4, "data", Wa, _e, vs);
R(Lt, 4, "disabled", Aa, _e, gs);
Re(Lt, _e);
var po = class {
  constructor() {
    this.map = rn(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (t, e) => {
      const r = this.map.peek(), n = r.get(t), i = () => this.unregister(t, e);
      if (n === e) return i;
      if (n) {
        const a = this.cleanupFunctions.get(n);
        a == null ? void 0 : a(), this.cleanupFunctions.delete(n);
      }
      const s = new Map(r);
      s.set(t, e), this.map.value = s;
      const o = nn(...e.effects());
      return this.cleanupFunctions.set(e, o), i;
    }, this.unregister = (t, e) => {
      const r = this.map.peek();
      if (r.get(t) !== e) return;
      const n = this.cleanupFunctions.get(e);
      n == null ? void 0 : n(), this.cleanupFunctions.delete(e);
      const i = new Map(r);
      i.delete(t), this.map.value = i;
    };
  }
  [Symbol.iterator]() {
    return this.map.peek().values();
  }
  get value() {
    return this.map.value.values();
  }
  has(t) {
    return this.map.value.has(t);
  }
  get(t) {
    return this.map.value.get(t);
  }
  destroy() {
    for (const t of this) {
      const e = this.cleanupFunctions.get(t);
      e == null ? void 0 : e(), t.destroy();
    }
    this.map.value = /* @__PURE__ */ new Map();
  }
}, La, Na, Fa, Va, Xa, Ya, Ii, zt, ms, ys, _s, ee = class extends (Ii = _e, Ya = [W], Xa = [W], Va = [W], Fa = [Mt], Na = [Mt], La = [Mt], Ii) {
  constructor(e, r) {
    var n = e, { modifiers: i, type: s, sensors: o } = n, a = ka(n, ["modifiers", "type", "sensors"]);
    super(a, r), E(zt, 5, this), q(this, ms, E(zt, 8, this)), E(zt, 11, this), q(this, ys, E(zt, 12, this)), E(zt, 15, this), q(this, _s, E(zt, 16, this, this.isDragSource ? "dragging" : "idle")), E(zt, 19, this), this.type = s, this.sensors = o, this.modifiers = i, this.alignment = a.alignment;
  }
  get isDropping() {
    return this.status === "dropping" && this.isDragSource;
  }
  get isDragging() {
    return this.status === "dragging" && this.isDragSource;
  }
  get isDragSource() {
    var e, r;
    return ((r = (e = this.manager) == null ? void 0 : e.dragOperation.source) == null ? void 0 : r.id) === this.id;
  }
};
zt = lr(Ii);
ms = /* @__PURE__ */ new WeakMap();
ys = /* @__PURE__ */ new WeakMap();
_s = /* @__PURE__ */ new WeakMap();
R(zt, 4, "type", Ya, ee, ms);
R(zt, 4, "modifiers", Xa, ee, ys);
R(zt, 4, "status", Va, ee, _s);
R(zt, 2, "isDropping", Fa, ee);
R(zt, 2, "isDragging", Na, ee);
R(zt, 2, "isDragSource", La, ee);
Re(zt, ee);
var Ba, Ha, Ua, Ka, qa, Ga, Ti, ft, bs, ws, xs, Ss, ks, re = class extends (Ti = _e, Ga = [W], qa = [W], Ka = [W], Ua = [W], Ha = [W], Ba = [Mt], Ti) {
  constructor(e, r) {
    var n = e, { accept: i, collisionDetector: s, collisionPriority: o, type: a } = n, c = ka(n, ["accept", "collisionDetector", "collisionPriority", "type"]);
    super(c, r), E(ft, 5, this), q(this, bs, E(ft, 8, this)), E(ft, 11, this), q(this, ws, E(ft, 12, this)), E(ft, 15, this), q(this, xs, E(ft, 16, this)), E(ft, 19, this), q(this, Ss, E(ft, 20, this)), E(ft, 23, this), q(this, ks, E(ft, 24, this)), E(ft, 27, this), this.accept = i, this.collisionDetector = s, this.collisionPriority = o, this.type = a;
  }
  accepts(e) {
    const { accept: r } = this;
    return r ? typeof r == "function" ? r(e) : e.type ? Array.isArray(r) ? r.includes(e.type) : e.type === r : false : true;
  }
  get isDropTarget() {
    var e, r;
    return ((r = (e = this.manager) == null ? void 0 : e.dragOperation.target) == null ? void 0 : r.id) === this.id;
  }
};
ft = lr(Ti);
bs = /* @__PURE__ */ new WeakMap();
ws = /* @__PURE__ */ new WeakMap();
xs = /* @__PURE__ */ new WeakMap();
Ss = /* @__PURE__ */ new WeakMap();
ks = /* @__PURE__ */ new WeakMap();
R(ft, 4, "accept", Ga, re, bs);
R(ft, 4, "type", qa, re, ws);
R(ft, 4, "collisionDetector", Ka, re, xs);
R(ft, 4, "collisionPriority", Ua, re, Ss);
R(ft, 4, "shape", Ha, re, ks);
R(ft, 2, "isDropTarget", Ba, re);
Re(ft, re);
var Je = class extends $t {
  constructor(t, e) {
    super(t, e), this.manager = t, this.options = e;
  }
}, vo = class extends $t {
  constructor(t, e) {
    super(t, e), this.manager = t, this.options = e;
  }
  apply(t) {
    return t.transform;
  }
}, Ud = class {
  constructor(t) {
    this.draggables = new po(), this.droppables = new po(), this.plugins = new vi(t), this.sensors = new vi(t), this.modifiers = new vi(t);
  }
  register(t, e) {
    if (t instanceof ee) return this.draggables.register(t.id, t);
    if (t instanceof re) return this.droppables.register(t.id, t);
    if (t.prototype instanceof vo) return this.modifiers.register(t, e);
    if (t.prototype instanceof Je) return this.sensors.register(t, e);
    if (t.prototype instanceof $t) return this.plugins.register(t, e);
    throw new Error("Invalid instance type");
  }
  unregister(t) {
    if (t instanceof _e) return t instanceof ee ? this.draggables.unregister(t.id, t) : t instanceof re ? this.droppables.unregister(t.id, t) : () => {
    };
    if (t.prototype instanceof vo) return this.modifiers.unregister(t);
    if (t.prototype instanceof Je) return this.sensors.unregister(t);
    if (t.prototype instanceof $t) return this.plugins.unregister(t);
    throw new Error("Invalid instance type");
  }
  destroy() {
    this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
  }
}, Za, Ja, Qa, tl, el, rl, nl, il, sl, Or, An, Be, nt, Os, Ds, Es, Ps, Ms, Dr;
sl = [Mt], il = [W], nl = [W], rl = [W], el = [W], tl = [W], Qa = [Mt], Ja = [Mt], Za = [Mt];
var Qt = class {
  constructor(t) {
    E(nt, 5, this), q(this, Or), q(this, An), q(this, Be, new or(void 0, (e, r) => e && r ? e.equals(r) : e === r)), this.status = new ce(), q(this, Os, E(nt, 8, this, false)), E(nt, 11, this), q(this, Ds, E(nt, 12, this, null)), E(nt, 15, this), q(this, Es, E(nt, 16, this, null)), E(nt, 19, this), q(this, Ps, E(nt, 20, this, null)), E(nt, 23, this), q(this, Ms, E(nt, 24, this, [])), E(nt, 27, this), this.position = new ti({ x: 0, y: 0 }), q(this, Dr, { x: 0, y: 0 }), Gt(this, Or, t);
  }
  get shape() {
    const { current: t, initial: e, previous: r } = _t(this, Be);
    return !t || !e ? null : { current: t, initial: e, previous: r };
  }
  set shape(t) {
    t ? _t(this, Be).current = t : _t(this, Be).reset();
  }
  get source() {
    var t;
    const e = this.sourceIdentifier;
    if (e == null) return null;
    const r = _t(this, Or).registry.draggables.get(e);
    return r && Gt(this, An, r), (t = r ?? _t(this, An)) != null ? t : null;
  }
  get target() {
    var t;
    const e = this.targetIdentifier;
    return e != null && (t = _t(this, Or).registry.droppables.get(e)) != null ? t : null;
  }
  get transform() {
    const { x: t, y: e } = this.position.delta;
    let r = { x: t, y: e };
    for (const n of this.modifiers) r = n.apply(Sa(xa({}, this.snapshot()), { transform: r }));
    return Gt(this, Dr, r), r;
  }
  snapshot() {
    return U(() => ({ source: this.source, target: this.target, activatorEvent: this.activatorEvent, transform: _t(this, Dr), shape: this.shape ? hi(this.shape) : null, position: hi(this.position), status: hi(this.status), canceled: this.canceled }));
  }
  reset() {
    at(() => {
      this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, _t(this, Be).reset(), this.position.reset({ x: 0, y: 0 }), Gt(this, Dr, { x: 0, y: 0 }), this.modifiers = [];
    });
  }
};
nt = lr(null);
Or = /* @__PURE__ */ new WeakMap();
An = /* @__PURE__ */ new WeakMap();
Be = /* @__PURE__ */ new WeakMap();
Os = /* @__PURE__ */ new WeakMap();
Ds = /* @__PURE__ */ new WeakMap();
Es = /* @__PURE__ */ new WeakMap();
Ps = /* @__PURE__ */ new WeakMap();
Ms = /* @__PURE__ */ new WeakMap();
Dr = /* @__PURE__ */ new WeakMap();
R(nt, 2, "shape", sl, Qt);
R(nt, 4, "canceled", il, Qt, Os);
R(nt, 4, "activatorEvent", nl, Qt, Ds);
R(nt, 4, "sourceIdentifier", rl, Qt, Es);
R(nt, 4, "targetIdentifier", el, Qt, Ps);
R(nt, 4, "modifiers", tl, Qt, Ms);
R(nt, 2, "source", Qa, Qt);
R(nt, 2, "target", Ja, Qt);
R(nt, 2, "transform", Za, Qt);
Re(nt, Qt);
var Kd = { get rendering() {
  return Promise.resolve();
} }, qd = class {
  constructor(e) {
    this.destroy = () => {
      this.dragOperation.status.idle || this.actions.stop({ canceled: true }), this.dragOperation.modifiers.forEach((d) => d.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
    };
    const { plugins: r = [], sensors: n = [], modifiers: i = [], renderer: s = Kd } = e ?? {}, o = new Yd(this), a = new Ud(this);
    this.registry = a, this.monitor = o, this.renderer = s, this.actions = new Hd(this), this.dragOperation = new Qt(this), this.collisionObserver = new Vd(this), this.plugins = [Bd, ...r], this.modifiers = i, this.sensors = n;
    const { destroy: c } = this, h = nn(() => {
      var d, l, f;
      const u = U(() => this.dragOperation.modifiers), p = this.modifiers;
      u !== p && u.forEach((b) => b.destroy()), this.dragOperation.modifiers = (f = (l = (d = this.dragOperation.source) == null ? void 0 : d.modifiers) == null ? void 0 : l.map((b) => {
        const { plugin: x, options: w } = ds(b);
        return new x(this, w);
      })) != null ? f : p;
    });
    this.destroy = () => {
      h(), c();
    };
  }
  get plugins() {
    return this.registry.plugins.values;
  }
  set plugins(e) {
    this.registry.plugins.values = e;
  }
  get modifiers() {
    return this.registry.modifiers.values;
  }
  set modifiers(e) {
    this.registry.modifiers.values = e;
  }
  get sensors() {
    return this.registry.sensors.values;
  }
  set sensors(e) {
    this.registry.sensors.values = e;
  }
}, ol = (t) => {
  throw TypeError(t);
}, $s = (t, e, r) => e.has(t) || ol("Cannot " + r), $ = (t, e, r) => ($s(t, e, "read from private field"), e.get(t)), jt = (t, e, r) => e.has(t) ? ol("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Vt = (t, e, r, n) => ($s(t, e, "write to private field"), e.set(t, r), r), al = (t, e, r) => ($s(t, e, "access private method"), r);
function ii(t) {
  return t ? t instanceof KeyframeEffect ? true : "getKeyframes" in t && typeof t.getKeyframes == "function" : false;
}
function ll(t, e) {
  const r = t.getAnimations();
  if (r.length > 0) for (const n of r) {
    if (n.playState !== "running") continue;
    const { effect: i } = n, o = (ii(i) ? i.getKeyframes() : []).filter(e);
    if (o.length > 0) return [o[o.length - 1], n];
  }
  return null;
}
function si(t) {
  const { width: e, height: r, top: n, left: i, bottom: s, right: o } = t.getBoundingClientRect();
  return { width: e, height: r, top: n, left: i, bottom: s, right: o };
}
var cl = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Cs(t) {
  const e = Object.prototype.toString.call(t);
  return e === "[object Window]" || e === "[object global]";
}
function Is(t) {
  return "nodeType" in t;
}
function de(t) {
  var e, r, n;
  return t ? Cs(t) ? t : Is(t) ? "defaultView" in t ? (e = t.defaultView) != null ? e : window : (n = (r = t.ownerDocument) == null ? void 0 : r.defaultView) != null ? n : window : window : window;
}
function dl(t) {
  const { Document: e } = de(t);
  return t instanceof e || "nodeType" in t && t.nodeType === Node.DOCUMENT_NODE;
}
function ze(t) {
  return !t || Cs(t) ? false : t instanceof de(t).HTMLElement || "namespaceURI" in t && typeof t.namespaceURI == "string" && t.namespaceURI.endsWith("html");
}
function ul(t) {
  return t instanceof de(t).SVGElement || "namespaceURI" in t && typeof t.namespaceURI == "string" && t.namespaceURI.endsWith("svg");
}
function ne(t) {
  return t ? Cs(t) ? t.document : Is(t) ? dl(t) ? t : ze(t) || ul(t) ? t.ownerDocument : document : document : document;
}
function Gd(t) {
  const { documentElement: e } = ne(t), r = e.clientWidth, n = e.clientHeight;
  return { top: 0, left: 0, right: r, bottom: n, width: r, height: n };
}
function Zd(t, e) {
  if (Jd(t) && t.open === false) return false;
  const { overflow: r, overflowX: n, overflowY: i } = getComputedStyle(t);
  return r === "visible" && n === "visible" && i === "visible";
}
function Jd(t) {
  return t.tagName === "DETAILS";
}
function Hr(t, e = t.getBoundingClientRect(), r = 0) {
  var n;
  let i = e;
  const { ownerDocument: s } = t, o = (n = s.defaultView) != null ? n : window;
  let a = t.parentElement;
  for (; a && a !== s.documentElement; ) {
    if (!Zd(a)) {
      const f = a.getBoundingClientRect(), u = r * (f.bottom - f.top), p = r * (f.right - f.left), b = r * (f.bottom - f.top), x = r * (f.right - f.left);
      i = { top: Math.max(i.top, f.top - u), right: Math.min(i.right, f.right + p), bottom: Math.min(i.bottom, f.bottom + b), left: Math.max(i.left, f.left - x), width: 0, height: 0 }, i.width = i.right - i.left, i.height = i.bottom - i.top;
    }
    a = a.parentElement;
  }
  const c = o.innerWidth, h = o.innerHeight, d = r * h, l = r * c;
  return i = { top: Math.max(i.top, 0 - d), right: Math.min(i.right, c + l), bottom: Math.min(i.bottom, h + d), left: Math.max(i.left, 0 - l), width: 0, height: 0 }, i.width = i.right - i.left, i.height = i.bottom - i.top, i.width < 0 && (i.width = 0), i.height < 0 && (i.height = 0), i;
}
function fl() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Qd(t) {
  const e = "input, textarea, select, canvas, [contenteditable]", r = t.cloneNode(true), n = Array.from(t.querySelectorAll(e));
  return Array.from(r.querySelectorAll(e)).forEach((s, o) => {
    const a = n[o];
    if (go(s) && go(a) && (s.type !== "file" && (s.value = a.value), s.type === "radio" && s.name && (s.name = `Cloned__${s.name}`)), mo(s) && mo(a) && a.width > 0 && a.height > 0) {
      const c = s.getContext("2d");
      c == null ? void 0 : c.drawImage(a, 0, 0);
    }
  }), r;
}
function go(t) {
  return "value" in t;
}
function mo(t) {
  return t.tagName === "CANVAS";
}
function hl(t, { x: e, y: r }) {
  const n = t.elementFromPoint(e, r);
  if (tu(n)) {
    const { contentDocument: i } = n;
    if (i) {
      const { left: s, top: o } = n.getBoundingClientRect();
      return hl(i, { x: e - s, y: r - o });
    }
  }
  return n;
}
function tu(t) {
  return (t == null ? void 0 : t.tagName) === "IFRAME";
}
var zi = /* @__PURE__ */ new WeakMap(), pl = class {
  constructor() {
    this.entries = /* @__PURE__ */ new Set(), this.clear = () => {
      for (const t of this.entries) {
        const [e, { type: r, listener: n, options: i }] = t;
        e.removeEventListener(r, n, i);
      }
      this.entries.clear();
    };
  }
  bind(t, e) {
    const r = Array.isArray(e) ? e : [e], n = [];
    for (const i of r) {
      const { type: s, listener: o, options: a } = i, c = [t, i];
      t.addEventListener(s, o, a), this.entries.add(c), n.push(c);
    }
    return function() {
      for (const [s, { type: o, listener: a, options: c }] of n) s.removeEventListener(o, a, c);
    };
  }
};
function Qe(t) {
  const e = t == null ? void 0 : t.ownerDocument.defaultView;
  if (e && e.self !== e.parent) return e.frameElement;
}
function eu(t) {
  const e = /* @__PURE__ */ new Set();
  let r = Qe(t);
  for (; r; ) e.add(r), r = Qe(r);
  return e;
}
function ru(t, e) {
  const r = setTimeout(t, e);
  return () => clearTimeout(r);
}
function vl(t, e) {
  const r = () => performance.now();
  let n, i;
  return function(...s) {
    const o = this;
    i ? (n == null ? void 0 : n(), n = ru(() => {
      t.apply(o, s), i = r();
    }, e - (r() - i))) : (t.apply(o, s), i = r());
  };
}
function nu(t, e) {
  return t === e ? true : !t || !e ? false : t.top == e.top && t.left == e.left && t.right == e.right && t.bottom == e.bottom;
}
function iu(t, e = t.getBoundingClientRect()) {
  const { width: r, height: n } = Hr(t, e);
  return r > 0 && n > 0;
}
var su = cl ? ResizeObserver : class {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
}, Wn, ou = class extends su {
  constructor(t) {
    super((e) => {
      if (!$(this, Wn)) {
        Vt(this, Wn, true);
        return;
      }
      t(e, this);
    }), jt(this, Wn, false);
  }
};
Wn = /* @__PURE__ */ new WeakMap();
var yo = Array.from({ length: 100 }, (t, e) => e / 100), gl = 75, Pe, Fn, fe, Me, Er, yt, Lr, Pr, Vn, ml, yl, _l = class {
  constructor(t, e, r = { debug: false, skipInitial: false }) {
    this.element = t, this.callback = e, jt(this, Vn), this.disconnect = () => {
      var s, o, a;
      Vt(this, Lr, true), (s = $(this, fe)) == null || s.disconnect(), (o = $(this, Me)) == null || o.disconnect(), $(this, Er).disconnect(), (a = $(this, yt)) == null || a.remove();
    }, jt(this, Pe, true), jt(this, Fn), jt(this, fe), jt(this, Me), jt(this, Er), jt(this, yt), jt(this, Lr, false), jt(this, Pr, vl(() => {
      var s, o, a;
      const { element: c } = this;
      if ((s = $(this, Me)) == null || s.disconnect(), $(this, Lr) || !$(this, Pe) || !c.isConnected) return;
      const h = (o = c.ownerDocument) != null ? o : document, { innerHeight: d, innerWidth: l } = (a = h.defaultView) != null ? a : window, f = c.getBoundingClientRect(), u = Hr(c, f), { top: p, left: b, bottom: x, right: w } = u, m = -Math.floor(p), g = -Math.floor(b), _ = -Math.floor(l - w), y = -Math.floor(d - x), A = `${m}px ${_}px ${y}px ${g}px`;
      this.boundingClientRect = f, Vt(this, Me, new IntersectionObserver((k) => {
        const [D] = k, { intersectionRect: C } = D;
        (D.intersectionRatio !== 1 ? D.intersectionRatio : le.intersectionRatio(C, Hr(c))) !== 1 && $(this, Pr).call(this);
      }, { threshold: yo, rootMargin: A, root: h })), $(this, Me).observe(c), al(this, Vn, ml).call(this);
    }, gl)), this.boundingClientRect = t.getBoundingClientRect(), Vt(this, Pe, iu(t, this.boundingClientRect));
    let n = true;
    this.callback = (s) => {
      n && (n = false, r.skipInitial) || e(s);
    };
    const i = t.ownerDocument;
    (r == null ? void 0 : r.debug) && (Vt(this, yt, document.createElement("div")), $(this, yt).style.background = "rgba(0,0,0,0.15)", $(this, yt).style.position = "fixed", $(this, yt).style.pointerEvents = "none", i.body.appendChild($(this, yt))), Vt(this, Er, new IntersectionObserver((s) => {
      var o, a;
      const c = s[s.length - 1], { boundingClientRect: h, isIntersecting: d } = c, { width: l, height: f } = h, u = $(this, Pe);
      Vt(this, Pe, d), !(!l && !f) && (u && !d ? ((o = $(this, Me)) == null || o.disconnect(), this.callback(null), (a = $(this, fe)) == null || a.disconnect(), Vt(this, fe, void 0), $(this, yt) && ($(this, yt).style.visibility = "hidden")) : $(this, Pr).call(this), d && !$(this, fe) && (Vt(this, fe, new ou($(this, Pr))), $(this, fe).observe(t)));
    }, { threshold: yo, root: i })), $(this, Pe) && !r.skipInitial && this.callback(this.boundingClientRect), $(this, Er).observe(t);
  }
};
Pe = /* @__PURE__ */ new WeakMap();
Fn = /* @__PURE__ */ new WeakMap();
fe = /* @__PURE__ */ new WeakMap();
Me = /* @__PURE__ */ new WeakMap();
Er = /* @__PURE__ */ new WeakMap();
yt = /* @__PURE__ */ new WeakMap();
Lr = /* @__PURE__ */ new WeakMap();
Pr = /* @__PURE__ */ new WeakMap();
Vn = /* @__PURE__ */ new WeakSet();
ml = function() {
  $(this, Lr) || (al(this, Vn, yl).call(this), !nu(this.boundingClientRect, $(this, Fn)) && (this.callback(this.boundingClientRect), Vt(this, Fn, this.boundingClientRect)));
};
yl = function() {
  if ($(this, yt)) {
    const { top: t, left: e, width: r, height: n } = Hr(this.element);
    $(this, yt).style.overflow = "hidden", $(this, yt).style.visibility = "visible", $(this, yt).style.top = `${Math.floor(t)}px`, $(this, yt).style.left = `${Math.floor(e)}px`, $(this, yt).style.width = `${Math.floor(r)}px`, $(this, yt).style.height = `${Math.floor(n)}px`;
  }
};
var wn = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new WeakMap();
function au(t, e) {
  let r = wn.get(t);
  return r || (r = { disconnect: new _l(t, (i) => {
    const s = wn.get(t);
    s && s.callbacks.forEach((o) => o(i));
  }, { skipInitial: true }).disconnect, callbacks: /* @__PURE__ */ new Set() }), r.callbacks.add(e), wn.set(t, r), () => {
    r.callbacks.delete(e), r.callbacks.size === 0 && (wn.delete(t), r.disconnect());
  };
}
function lu(t, e) {
  const r = /* @__PURE__ */ new Set();
  for (const n of t) {
    const i = au(n, e);
    r.add(i);
  }
  return () => r.forEach((n) => n());
}
function cu(t, e) {
  var r;
  const n = t.ownerDocument;
  if (!xn.has(n)) {
    const o = new AbortController(), a = /* @__PURE__ */ new Set();
    document.addEventListener("scroll", (c) => a.forEach((h) => h(c)), { capture: true, passive: true, signal: o.signal }), xn.set(n, { disconnect: () => o.abort(), listeners: a });
  }
  const { listeners: i, disconnect: s } = (r = xn.get(n)) != null ? r : {};
  return !i || !s ? () => {
  } : (i.add(e), () => {
    i.delete(e), i.size === 0 && (s(), xn.delete(n));
  });
}
var Mr, $r, Rn, Ai, du = class {
  constructor(t, e, r) {
    this.callback = e, jt(this, Mr), jt(this, $r, false), jt(this, Rn), jt(this, Ai, vl((o) => {
      if (!$(this, $r) && o.target && "contains" in o.target && typeof o.target.contains == "function") {
        for (const a of $(this, Rn)) if (o.target.contains(a)) {
          this.callback($(this, Mr).boundingClientRect);
          break;
        }
      }
    }, gl));
    const n = eu(t), i = lu(n, e), s = cu(t, $(this, Ai));
    Vt(this, Rn, n), Vt(this, Mr, new _l(t, e, r)), this.disconnect = () => {
      $(this, $r) || (Vt(this, $r, true), i(), s(), $(this, Mr).disconnect());
    };
  }
};
Mr = /* @__PURE__ */ new WeakMap();
$r = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Ai = /* @__PURE__ */ new WeakMap();
function Wi(t) {
  return "showPopover" in t && "hidePopover" in t && typeof t.showPopover == "function" && typeof t.hidePopover == "function";
}
function Ze(t) {
  try {
    Wi(t) && t.isConnected && t.hasAttribute("popover") && !t.matches(":popover-open") && t.showPopover();
  } catch {
  }
}
function _o(t) {
  return !cl || !t ? false : t === ne(t).scrollingElement;
}
function bl(t) {
  const e = de(t), r = _o(t) ? Gd(t) : si(t), n = _o(t) ? { height: e.innerHeight, width: e.innerWidth } : { height: t.clientHeight, width: t.clientWidth }, i = { current: { x: t.scrollLeft, y: t.scrollTop }, max: { x: t.scrollWidth - n.width, y: t.scrollHeight - n.height } }, s = i.current.y <= 0, o = i.current.x <= 0, a = i.current.y >= i.max.y, c = i.current.x >= i.max.x;
  return { rect: r, position: i, isTop: s, isLeft: o, isBottom: a, isRight: c };
}
function uu(t, e) {
  const { isTop: r, isBottom: n, isLeft: i, isRight: s, position: o } = bl(t), { x: a, y: c } = e ?? { x: 0, y: 0 }, h = !r && o.current.y + c > 0, d = !n && o.current.y + c < o.max.y, l = !i && o.current.x + a > 0, f = !s && o.current.x + a < o.max.x;
  return { top: h, bottom: d, left: l, right: f, x: l || f, y: h || d };
}
var Ts = class {
  constructor(e) {
    this.scheduler = e, this.pending = false, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
      const { tasks: r, resolvers: n } = this;
      this.pending = false, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
      for (const i of r) i();
      for (const i of n) i();
    };
  }
  schedule(e) {
    return this.tasks.add(e), this.pending || (this.pending = true, this.scheduler(this.flush)), new Promise((r) => this.resolvers.add(r));
  }
}, Xn = new Ts((t) => {
  typeof requestAnimationFrame == "function" ? requestAnimationFrame(t) : t();
}), fu = new Ts((t) => setTimeout(t, 50)), Yn = /* @__PURE__ */ new Map(), hu = Yn.clear.bind(Yn);
function Jt(t, e = false) {
  if (!e) return bo(t);
  let r = Yn.get(t);
  return r || (r = bo(t), Yn.set(t, r), fu.schedule(hu), r);
}
function bo(t) {
  return de(t).getComputedStyle(t);
}
function pu(t, e = Jt(t, true)) {
  return e.position === "fixed" || e.position === "sticky";
}
function vu(t, e = Jt(t, true)) {
  const r = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const s = e[i];
    return typeof s == "string" ? r.test(s) : false;
  });
}
var gu = { excludeElement: true };
function Ri(t, e = gu) {
  const { limit: r, excludeElement: n } = e, i = /* @__PURE__ */ new Set();
  function s(o) {
    if (r != null && i.size >= r || !o) return i;
    if (dl(o) && o.scrollingElement != null && !i.has(o.scrollingElement)) return i.add(o.scrollingElement), i;
    if (!ze(o)) return ul(o) ? s(o.parentElement) : i;
    if (i.has(o)) return i;
    const a = Jt(o, true);
    if (n && o === t || vu(o, a) && i.add(o), pu(o, a)) {
      const { scrollingElement: c } = o.ownerDocument;
      return c && i.add(c), i;
    }
    return s(o.parentNode);
  }
  return t ? s(t) : i;
}
function mu(t) {
  const [e] = Ri(t, { limit: 1 });
  return e ?? null;
}
function tr(t, e = window.frameElement) {
  const r = { x: 0, y: 0, scaleX: 1, scaleY: 1 };
  if (!t) return r;
  let n = Qe(t);
  for (; n; ) {
    if (n === e) return r;
    const i = si(n), { x: s, y: o } = yu(n, i);
    r.x = r.x + i.left, r.y = r.y + i.top, r.scaleX = r.scaleX * s, r.scaleY = r.scaleY * o, n = Qe(n);
  }
  return r;
}
function yu(t, e = si(t)) {
  const r = Math.round(e.width), n = Math.round(e.height);
  if (ze(t)) return { x: r / t.offsetWidth, y: n / t.offsetHeight };
  const i = Jt(t, true);
  return { x: (parseFloat(i.width) || r) / r, y: (parseFloat(i.height) || n) / n };
}
function _u(t) {
  if (t === "none") return null;
  const e = t.split(" "), r = parseFloat(e[0]), n = parseFloat(e[1]);
  return isNaN(r) && isNaN(n) ? null : { x: isNaN(r) ? n : r, y: isNaN(n) ? r : n };
}
function Ur(t) {
  if (t === "none") return null;
  const [e, r, n = "0"] = t.split(" "), i = { x: parseFloat(e), y: parseFloat(r), z: parseInt(n, 10) };
  return isNaN(i.x) && isNaN(i.y) ? null : { x: isNaN(i.x) ? 0 : i.x, y: isNaN(i.y) ? 0 : i.y, z: isNaN(i.z) ? 0 : i.z };
}
function zs(t) {
  var e, r, n, i, s, o, a, c, h;
  const { scale: d, transform: l, translate: f } = t, u = _u(d), p = Ur(f), b = bu(l);
  if (!b && !u && !p) return null;
  const x = { x: (e = u == null ? void 0 : u.x) != null ? e : 1, y: (r = u == null ? void 0 : u.y) != null ? r : 1 }, w = { x: (n = p == null ? void 0 : p.x) != null ? n : 0, y: (i = p == null ? void 0 : p.y) != null ? i : 0 }, m = { x: (s = b == null ? void 0 : b.x) != null ? s : 0, y: (o = b == null ? void 0 : b.y) != null ? o : 0, scaleX: (a = b == null ? void 0 : b.scaleX) != null ? a : 1, scaleY: (c = b == null ? void 0 : b.scaleY) != null ? c : 1 };
  return { x: w.x + m.x, y: w.y + m.y, z: (h = p == null ? void 0 : p.z) != null ? h : 0, scaleX: x.x * m.scaleX, scaleY: x.y * m.scaleY };
}
function bu(t) {
  if (t.startsWith("matrix3d(")) {
    const e = t.slice(9, -1).split(/, /);
    return { x: +e[12], y: +e[13], scaleX: +e[0], scaleY: +e[5] };
  } else if (t.startsWith("matrix(")) {
    const e = t.slice(7, -1).split(/, /);
    return { x: +e[4], y: +e[5], scaleX: +e[0], scaleY: +e[3] };
  }
  return null;
}
var Ht = ((t) => (t[t.Idle = 0] = "Idle", t[t.Forward = 1] = "Forward", t[t.Reverse = -1] = "Reverse", t))(Ht || {}), wu = { x: 0.2, y: 0.2 }, xu = { x: 10, y: 10 };
function Su(t, e, r, n = 25, i = wu, s = xu) {
  const { x: o, y: a } = e, { rect: c, isTop: h, isBottom: d, isLeft: l, isRight: f } = bl(t), u = tr(t), p = Jt(t, true), b = zs(p), x = b !== null ? (b == null ? void 0 : b.scaleX) < 0 : false, w = b !== null ? (b == null ? void 0 : b.scaleY) < 0 : false, m = new le(c.left * u.scaleX + u.x, c.top * u.scaleY + u.y, c.width * u.scaleX, c.height * u.scaleY), g = { x: 0, y: 0 }, _ = { x: 0, y: 0 }, y = { height: m.height * i.y, width: m.width * i.x };
  return (!h || w && !d) && a <= m.top + y.height && (r == null ? void 0 : r.y) !== 1 && o >= m.left - s.x && o <= m.right + s.x ? (g.y = w ? 1 : -1, _.y = n * Math.abs((m.top + y.height - a) / y.height)) : (!d || w && !h) && a >= m.bottom - y.height && (r == null ? void 0 : r.y) !== -1 && o >= m.left - s.x && o <= m.right + s.x && (g.y = w ? -1 : 1, _.y = n * Math.abs((m.bottom - y.height - a) / y.height)), (!f || x && !l) && o >= m.right - y.width && (r == null ? void 0 : r.x) !== -1 && a >= m.top - s.y && a <= m.bottom + s.y ? (g.x = x ? -1 : 1, _.x = n * Math.abs((m.right - y.width - o) / y.width)) : (!l || x && !f) && o <= m.left + y.width && (r == null ? void 0 : r.x) !== 1 && a >= m.top - s.y && a <= m.bottom + s.y && (g.x = x ? 1 : -1, _.x = n * Math.abs((m.left + y.width - o) / y.width)), { direction: g, speed: _ };
}
function ku(t) {
  return "scrollIntoViewIfNeeded" in t && typeof t.scrollIntoViewIfNeeded == "function";
}
function wl(t, e = false) {
  if (ku(t)) {
    t.scrollIntoViewIfNeeded(e);
    return;
  }
  if (!ze(t)) return t.scrollIntoView();
  var r = mu(t);
  if (!ze(r)) return;
  const n = Jt(r, true), i = parseInt(n.getPropertyValue("border-top-width")), s = parseInt(n.getPropertyValue("border-left-width")), o = t.offsetTop - r.offsetTop < r.scrollTop, a = t.offsetTop - r.offsetTop + t.clientHeight - i > r.scrollTop + r.clientHeight, c = t.offsetLeft - r.offsetLeft < r.scrollLeft, h = t.offsetLeft - r.offsetLeft + t.clientWidth - s > r.scrollLeft + r.clientWidth, d = o && !a;
  (o || a) && e && (r.scrollTop = t.offsetTop - r.offsetTop - r.clientHeight / 2 - i + t.clientHeight / 2), (c || h) && e && (r.scrollLeft = t.offsetLeft - r.offsetLeft - r.clientWidth / 2 - s + t.clientWidth / 2), (o || a || c || h) && !e && t.scrollIntoView(d);
}
function Ou(t, e, r) {
  const { scaleX: n, scaleY: i, x: s, y: o } = e, a = t.left + s + (1 - n) * parseFloat(r), c = t.top + o + (1 - i) * parseFloat(r.slice(r.indexOf(" ") + 1)), h = n ? t.width * n : t.width, d = i ? t.height * i : t.height;
  return { width: h, height: d, top: c, right: a + h, bottom: c + d, left: a };
}
function Du(t, e, r) {
  const { scaleX: n, scaleY: i, x: s, y: o } = e, a = t.left - s - (1 - n) * parseFloat(r), c = t.top - o - (1 - i) * parseFloat(r.slice(r.indexOf(" ") + 1)), h = n ? t.width / n : t.width, d = i ? t.height / i : t.height;
  return { width: h, height: d, top: c, right: a + h, bottom: c + d, left: a };
}
function xl({ element: t, keyframes: e, options: r }) {
  return t.animate(e, r).finished;
}
function wo(t, e = Jt(t).translate, r = true) {
  if (r) {
    const n = ll(t, (i) => "translate" in i);
    if (n) {
      const { translate: i = "" } = n[0];
      if (typeof i == "string") {
        const s = Ur(i);
        if (s) return s;
      }
    }
  }
  if (e) {
    const n = Ur(e);
    if (n) return n;
  }
  return { x: 0, y: 0, z: 0 };
}
var Eu = new Ts((t) => setTimeout(t, 0)), Nr = /* @__PURE__ */ new Map(), Pu = Nr.clear.bind(Nr);
function Mu(t) {
  const e = t.ownerDocument;
  let r = Nr.get(e);
  if (r) return r;
  r = e.getAnimations(), Nr.set(e, r), Eu.schedule(Pu);
  const n = r.filter((i) => ii(i.effect) && i.effect.target === t);
  return Nr.set(t, n), r;
}
function $u(t, e) {
  const r = Mu(t).filter((n) => {
    var i, s;
    if (ii(n.effect)) {
      const { target: o } = n.effect;
      if ((s = o && ((i = e.isValidTarget) == null ? void 0 : i.call(e, o))) != null ? s : true) return n.effect.getKeyframes().some((c) => {
        for (const h of e.properties) if (c[h]) return true;
      });
    }
  }).map((n) => {
    const { effect: i, currentTime: s } = n, o = i == null ? void 0 : i.getComputedTiming().duration;
    if (!(n.pending || n.playState === "finished") && typeof o == "number" && typeof s == "number" && s < o) return n.currentTime = o, () => {
      n.currentTime = s;
    };
  });
  if (r.length > 0) return () => r.forEach((n) => n == null ? void 0 : n());
}
var Kt = class extends le {
  constructor(t, e = {}) {
    var r, n, i, s;
    const { frameTransform: o = tr(t), ignoreTransforms: a, getBoundingClientRect: c = si } = e, h = $u(t, { properties: ["transform", "translate", "scale", "width", "height"], isValidTarget: (y) => (y !== t || fl()) && y.contains(t) }), d = c(t);
    let { top: l, left: f, width: u, height: p } = d, b;
    const x = Jt(t), w = zs(x), m = { x: (r = w == null ? void 0 : w.scaleX) != null ? r : 1, y: (n = w == null ? void 0 : w.scaleY) != null ? n : 1 }, g = Cu(t, x);
    h == null ? void 0 : h(), w && (b = Du(d, w, x.transformOrigin), (a || g) && (l = b.top, f = b.left, u = b.width, p = b.height));
    const _ = { width: (i = b == null ? void 0 : b.width) != null ? i : u, height: (s = b == null ? void 0 : b.height) != null ? s : p };
    if (g && !a && b) {
      const y = Ou(b, g, x.transformOrigin);
      l = y.top, f = y.left, u = y.width, p = y.height, m.x = g.scaleX, m.y = g.scaleY;
    }
    o && (a || (f *= o.scaleX, u *= o.scaleX, l *= o.scaleY, p *= o.scaleY), f += o.x, l += o.y), super(f, l, u, p), this.scale = m, this.intrinsicWidth = _.width, this.intrinsicHeight = _.height;
  }
};
function Cu(t, e) {
  var r;
  const n = t.getAnimations();
  let i = null;
  if (!n.length) return null;
  for (const s of n) {
    if (s.playState !== "running") continue;
    const o = ii(s.effect) ? s.effect.getKeyframes() : [], a = o[o.length - 1];
    if (!a) continue;
    const { transform: c, translate: h, scale: d } = a;
    if (c || h || d) {
      const l = zs({ transform: typeof c == "string" && c ? c : e.transform, translate: typeof h == "string" && h ? h : e.translate, scale: typeof d == "string" && d ? d : e.scale });
      l && (i = i ? { x: i.x + l.x, y: i.y + l.y, z: (r = i.z) != null ? r : l.z, scaleX: i.scaleX * l.scaleX, scaleY: i.scaleY * l.scaleY } : l);
    }
  }
  return i;
}
function Fr(t) {
  return "style" in t && typeof t.style == "object" && t.style !== null && "setProperty" in t.style && "removeProperty" in t.style && typeof t.style.setProperty == "function" && typeof t.style.removeProperty == "function";
}
var Iu = class {
  constructor(t) {
    this.element = t, this.initial = /* @__PURE__ */ new Map();
  }
  set(t, e = "") {
    const { element: r } = this;
    if (Fr(r)) for (const [n, i] of Object.entries(t)) {
      const s = `${e}${n}`;
      this.initial.has(s) || this.initial.set(s, r.style.getPropertyValue(s)), r.style.setProperty(s, typeof i == "string" ? i : `${i}px`);
    }
  }
  remove(t, e = "") {
    const { element: r } = this;
    if (Fr(r)) for (const n of t) {
      const i = `${e}${n}`;
      r.style.removeProperty(i);
    }
  }
  reset() {
    const { element: t } = this;
    if (Fr(t)) {
      for (const [e, r] of this.initial) t.style.setProperty(e, r);
      t.getAttribute("style") === "" && t.removeAttribute("style");
    }
  }
};
function on(t) {
  return t ? t instanceof de(t).Element || Is(t) && t.nodeType === Node.ELEMENT_NODE : false;
}
function Kr(t) {
  if (!t) return false;
  const { KeyboardEvent: e } = de(t.target);
  return t instanceof e;
}
function Tu(t) {
  if (!t) return false;
  const { PointerEvent: e } = de(t.target);
  return t instanceof e;
}
function zu(t) {
  if (!on(t)) return false;
  const { tagName: e } = t;
  return e === "INPUT" || e === "TEXTAREA" || Au(t);
}
function Au(t) {
  return t.hasAttribute("contenteditable") && t.getAttribute("contenteditable") !== "false";
}
var gi = {};
function ji(t) {
  const e = gi[t] == null ? 0 : gi[t] + 1;
  return gi[t] = e, `${t}-${e}`;
}
var Wu = ({ dragOperation: t, droppable: e }) => {
  const r = t.position.current;
  if (!r) return null;
  const { id: n } = e;
  if (!e.shape) return null;
  if (e.shape.containsPoint(r)) {
    const i = Bt.distance(e.shape.center, r);
    return { id: n, value: 1 / i, type: ni.PointerIntersection, priority: ri.High };
  }
  return null;
}, Ru = ({ dragOperation: t, droppable: e }) => {
  const { shape: r } = t;
  if (!e.shape || !(r == null ? void 0 : r.current)) return null;
  const n = r.current.intersectionArea(e.shape);
  if (n) {
    const { position: i } = t, s = Bt.distance(e.shape.center, i.current), a = n / (r.current.area + e.shape.area - n) / s;
    return { id: e.id, value: a, type: ni.ShapeIntersection, priority: ri.Normal };
  }
  return null;
}, Sl = (t) => {
  var e;
  return (e = Wu(t)) != null ? e : Ru(t);
}, ju = (t) => {
  const { dragOperation: e, droppable: r } = t, { shape: n, position: i } = e;
  if (!r.shape) return null;
  const s = n ? le.from(n.current.boundingRectangle).corners : void 0, a = le.from(r.shape.boundingRectangle).corners.reduce((c, h, d) => {
    var l;
    return c + Bt.distance(Bt.from(h), (l = s == null ? void 0 : s[d]) != null ? l : i.current);
  }, 0) / 4;
  return { id: r.id, value: 1 / a, type: ni.Collision, priority: ri.Normal };
}, Lu = Object.create, As = Object.defineProperty, Nu = Object.defineProperties, Fu = Object.getOwnPropertyDescriptor, Vu = Object.getOwnPropertyDescriptors, Bn = Object.getOwnPropertySymbols, kl = Object.prototype.hasOwnProperty, Ol = Object.prototype.propertyIsEnumerable, Dl = (t, e) => (e = Symbol[t]) ? e : Symbol.for("Symbol." + t), cr = (t) => {
  throw TypeError(t);
}, Li = (t, e, r) => e in t ? As(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, qr = (t, e) => {
  for (var r in e || (e = {})) kl.call(e, r) && Li(t, r, e[r]);
  if (Bn) for (var r of Bn(e)) Ol.call(e, r) && Li(t, r, e[r]);
  return t;
}, Ws = (t, e) => Nu(t, Vu(e)), xo = (t, e) => As(t, "name", { value: e, configurable: true }), El = (t, e) => {
  var r = {};
  for (var n in t) kl.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && Bn) for (var n of Bn(t)) e.indexOf(n) < 0 && Ol.call(t, n) && (r[n] = t[n]);
  return r;
}, an = (t) => {
  var e;
  return [, , , Lu((e = t == null ? void 0 : t[Dl("metadata")]) != null ? e : null)];
}, Pl = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Cr = (t) => t !== void 0 && typeof t != "function" ? cr("Function expected") : t, Xu = (t, e, r, n, i) => ({ kind: Pl[t], name: e, metadata: n, addInitializer: (s) => r._ ? cr("Already initialized") : i.push(Cr(s || null)) }), dr = (t, e) => Li(e, Dl("metadata"), t[3]), vt = (t, e, r, n) => {
  for (var i = 0, s = t[e >> 1], o = s && s.length; i < o; i++) e & 1 ? s[i].call(r) : n = s[i].call(r, n);
  return n;
}, ue = (t, e, r, n, i, s) => {
  var o, a, c, h, d, l = e & 7, f = !!(e & 8), u = !!(e & 16), p = l > 3 ? t.length + 1 : l ? f ? 1 : 2 : 0, b = Pl[l + 5], x = l > 3 && (t[p - 1] = []), w = t[p] || (t[p] = []), m = l && (!u && !f && (i = i.prototype), l < 5 && (l > 3 || !u) && Fu(l < 4 ? i : { get [r]() {
    return wt(this, s);
  }, set [r](_) {
    return Zt(this, s, _);
  } }, r));
  l ? u && l < 4 && xo(s, (l > 2 ? "set " : l > 1 ? "get " : "") + r) : xo(i, r);
  for (var g = n.length - 1; g >= 0; g--) h = Xu(l, r, c = {}, t[3], w), l && (h.static = f, h.private = u, d = h.access = { has: u ? (_) => Yu(i, _) : (_) => r in _ }, l ^ 3 && (d.get = u ? (_) => (l ^ 1 ? wt : Ni)(_, i, l ^ 4 ? s : m.get) : (_) => _[r]), l > 2 && (d.set = u ? (_, y) => Zt(_, i, y, l ^ 4 ? s : m.set) : (_, y) => _[r] = y)), a = (0, n[g])(l ? l < 4 ? u ? s : m[b] : l > 4 ? void 0 : { get: m.get, set: m.set } : i, h), c._ = 1, l ^ 4 || a === void 0 ? Cr(a) && (l > 4 ? x.unshift(a) : l ? u ? s = a : m[b] = a : i = a) : typeof a != "object" || a === null ? cr("Object expected") : (Cr(o = a.get) && (m.get = o), Cr(o = a.set) && (m.set = o), Cr(o = a.init) && x.unshift(o));
  return l || dr(t, i), m && As(i, r, m), u ? l ^ 4 ? s : m : i;
}, Rs = (t, e, r) => e.has(t) || cr("Cannot " + r), Yu = (t, e) => Object(e) !== e ? cr('Cannot use the "in" operator on this value') : t.has(e), wt = (t, e, r) => (Rs(t, e, "read from private field"), r ? r.call(t) : e.get(t)), xt = (t, e, r) => e.has(t) ? cr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Zt = (t, e, r, n) => (Rs(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Ni = (t, e, r) => (Rs(t, e, "access private method"), r), So = { role: "button", roleDescription: "draggable" }, Bu = "dnd-kit-description", Hu = "dnd-kit-announcement", Uu = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, Ku = { dragstart({ operation: { source: t } }) {
  if (t) return `Picked up draggable item ${t.id}.`;
}, dragover({ operation: { source: t, target: e } }) {
  if (!(!t || t.id === (e == null ? void 0 : e.id))) return e ? `Draggable item ${t.id} was moved over droppable target ${e.id}.` : `Draggable item ${t.id} is no longer over a droppable target.`;
}, dragend({ operation: { source: t, target: e }, canceled: r }) {
  if (t) return r ? `Dragging was cancelled. Draggable item ${t.id} was dropped.` : e ? `Draggable item ${t.id} was dropped over droppable target ${e.id}` : `Draggable item ${t.id} was dropped.`;
} };
function qu(t) {
  const e = t.tagName.toLowerCase();
  return ["input", "select", "textarea", "a", "button"].includes(e);
}
function Gu(t, e) {
  const r = document.createElement("div");
  return r.id = t, r.style.setProperty("display", "none"), r.textContent = e, r;
}
function Zu(t) {
  const e = document.createElement("div");
  return e.id = t, e.setAttribute("role", "status"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), e.style.setProperty("position", "fixed"), e.style.setProperty("width", "1px"), e.style.setProperty("height", "1px"), e.style.setProperty("margin", "-1px"), e.style.setProperty("border", "0"), e.style.setProperty("padding", "0"), e.style.setProperty("overflow", "hidden"), e.style.setProperty("clip", "rect(0 0 0 0)"), e.style.setProperty("clip-path", "inset(100%)"), e.style.setProperty("white-space", "nowrap"), e;
}
var Ju = ["dragover", "dragmove"], Qu = class extends $t {
  constructor(t, e) {
    super(t);
    const { id: r, idPrefix: { description: n = Bu, announcement: i = Hu } = {}, announcements: s = Ku, screenReaderInstructions: o = Uu, debounce: a = 500 } = e ?? {}, c = r ? `${n}-${r}` : ji(n), h = r ? `${i}-${r}` : ji(i);
    let d, l, f, u;
    const p = (y = u) => {
      !f || !y || (f == null ? void 0 : f.nodeValue) !== y && (f.nodeValue = y);
    }, b = () => Xn.schedule(p), x = tf(b, a), w = Object.entries(s).map(([y, A]) => this.manager.monitor.addEventListener(y, (k, D) => {
      const C = f;
      if (!C) return;
      const I = A == null ? void 0 : A(k, D);
      I && C.nodeValue !== I && (u = I, Ju.includes(y) ? x() : (b(), x.cancel()));
    })), m = () => {
      let y = [];
      (d == null ? void 0 : d.isConnected) || (d = Gu(c, o.draggable), y.push(d)), (l == null ? void 0 : l.isConnected) || (l = Zu(h), f = document.createTextNode(""), l.appendChild(f), y.push(l)), y.length > 0 && document.body.append(...y);
    }, g = /* @__PURE__ */ new Set();
    function _() {
      for (const y of g) y();
    }
    this.registerEffect(() => {
      var y;
      g.clear();
      for (const A of this.manager.registry.draggables.value) {
        const k = (y = A.handle) != null ? y : A.element;
        if (k) {
          (!d || !l) && g.add(m), (!qu(k) || fl()) && !k.hasAttribute("tabindex") && g.add(() => k.setAttribute("tabindex", "0")), !k.hasAttribute("role") && k.tagName.toLowerCase() !== "button" && g.add(() => k.setAttribute("role", So.role)), k.hasAttribute("aria-roledescription") || g.add(() => k.setAttribute("aria-roledescription", So.roleDescription)), k.hasAttribute("aria-describedby") || g.add(() => k.setAttribute("aria-describedby", c));
          for (const C of ["aria-pressed", "aria-grabbed"]) {
            const I = String(A.isDragging);
            k.getAttribute(C) !== I && g.add(() => k.setAttribute(C, I));
          }
          const D = String(A.disabled);
          k.getAttribute("aria-disabled") !== D && g.add(() => k.setAttribute("aria-disabled", D));
        }
      }
      g.size > 0 && Xn.schedule(_);
    }), this.destroy = () => {
      super.destroy(), d == null ? void 0 : d.remove(), l == null ? void 0 : l.remove(), w.forEach((y) => y());
    };
  }
};
function tf(t, e) {
  let r;
  const n = () => {
    clearTimeout(r), r = setTimeout(t, e);
  };
  return n.cancel = () => clearTimeout(r), n;
}
var ef = class extends $t {
  constructor(t, e) {
    super(t, e), this.manager = t;
    const r = Yr(() => {
      var n;
      return ne((n = this.manager.dragOperation.source) == null ? void 0 : n.element);
    });
    this.destroy = Nt(() => {
      var n;
      const { dragOperation: i } = this.manager, { cursor: s = "grabbing", nonce: o } = (n = this.options) != null ? n : {};
      if (i.status.initialized) {
        const a = r.value, c = a.createElement("style");
        return o && c.setAttribute("nonce", o), c.textContent = `* { cursor: ${s} !important; }`, a.head.appendChild(c), () => c.remove();
      }
    });
  }
}, ln = "data-dnd-", Fi = `${ln}dropping`, Pt = "--dnd-", te = `${ln}dragging`, Hn = `${ln}placeholder`, rf = [te, Hn, "popover", "aria-pressed", "aria-grabbing"], nf = ["view-transition-name"], sf = `
  :root [${te}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${Pt}top, 0px) !important;
    left: var(${Pt}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${Pt}width, auto);
    max-width: var(${Pt}width, auto);
    height: var(${Pt}height, auto);
    max-height: var(${Pt}height, auto);
    transition: var(${Pt}transition) !important;
  }

  :root [${Hn}] {
    transition: none;
  }

  :root [${Hn}='hidden'] {
    visibility: hidden;
  }

  [${te}] * {
    pointer-events: none !important;
  }

  [${te}]:not([${Fi}]) {
    translate: var(${Pt}translate) !important;
  }

  [${te}][style*='${Pt}scale'] {
    scale: var(${Pt}scale) !important;
    transform-origin: var(${Pt}transform-origin) !important;
  }

  @layer {
    :where([${te}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${te}]::backdrop, [${ln}overlay]:not([${te}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function of(t, e = "hidden") {
  return U(() => {
    const { element: r, manager: n } = t;
    if (!r || !n) return;
    const i = af(r, n.registry.droppables), s = [], o = Qd(r), { remove: a } = o;
    return lf(i, o, s), cf(o, e), o.remove = () => {
      s.forEach((c) => c()), a.call(o);
    }, o;
  });
}
function af(t, e) {
  const r = /* @__PURE__ */ new Map();
  for (const n of e) if (n.element && (t === n.element || t.contains(n.element))) {
    const i = `${ln}${ji("dom-id")}`;
    n.element.setAttribute(i, ""), r.set(n, i);
  }
  return r;
}
function lf(t, e, r) {
  for (const [n, i] of t) {
    if (!n.element) continue;
    const s = `[${i}]`, o = e.matches(s) ? e : e.querySelector(s);
    if (n.element.removeAttribute(i), !o) continue;
    const a = n.element;
    n.proxy = o, o.removeAttribute(i), zi.set(a, o), r.push(() => {
      zi.delete(a), n.proxy = void 0;
    });
  }
}
function cf(t, e = "hidden") {
  t.setAttribute("inert", "true"), t.setAttribute("tab-index", "-1"), t.setAttribute("aria-hidden", "true"), t.setAttribute(Hn, e);
}
function ko(t, e) {
  return t === e ? true : Qe(t) === Qe(e);
}
function Oo(t) {
  const { target: e } = t;
  "newState" in t && t.newState === "closed" && on(e) && e.hasAttribute("popover") && requestAnimationFrame(() => Ze(e));
}
function Do(t) {
  return t.tagName === "TR";
}
var Un = /* @__PURE__ */ new Map(), Ml, Vi, Gr, js, jn, $l, Cl, Zr = class extends (Vi = $t, Ml = [W], Vi) {
  constructor(e, r) {
    super(e, r), xt(this, jn), xt(this, js, vt(Gr, 8, this)), vt(Gr, 11, this), this.state = { initial: {}, current: {} }, this.registerEffect(Ni(this, jn, Cl)), this.registerEffect(Ni(this, jn, $l));
  }
  destroy() {
    super.destroy();
    for (const [e, r] of Un.entries()) r.instances.has(this) && (r.instances.delete(this), r.instances.size === 0 && (r.cleanup(), Un.delete(e)));
  }
};
Gr = an(Vi);
js = /* @__PURE__ */ new WeakMap();
jn = /* @__PURE__ */ new WeakSet();
$l = function() {
  var t, e, r;
  const { state: n, manager: i, options: s } = this, { dragOperation: o } = i, { position: a, source: c, status: h } = o;
  if (h.idle) {
    n.current = {}, n.initial = {};
    return;
  }
  if (!c) return;
  const { element: d, feedback: l } = c;
  if (!d || l === "none" || !h.initialized || h.initializing) return;
  const { initial: f } = n, u = (t = this.overlay) != null ? t : d, p = tr(u), b = tr(d), x = !ko(d, u), w = new Kt(d, { frameTransform: x ? b : null, ignoreTransforms: !x }), m = { x: b.scaleX / p.scaleX, y: b.scaleY / p.scaleY };
  let { width: g, height: _, top: y, left: A } = w;
  x && (g = g / m.x, _ = _ / m.y);
  let k, D;
  const C = new Iu(u), { transition: I, translate: J, boxSizing: lt, paddingBlockStart: ht, paddingBlockEnd: ct, paddingInlineStart: ie, paddingInlineEnd: be, borderInlineStartWidth: we, borderInlineEndWidth: ai, borderBlockStartWidth: ur, borderBlockEndWidth: fr } = Jt(d), je = l === "clone", hr = lt === "content-box", pr = hr ? parseInt(ie) + parseInt(be) + parseInt(we) + parseInt(ai) : 0, fn = hr ? parseInt(ht) + parseInt(ct) + parseInt(ur) + parseInt(fr) : 0, Y = l !== "move" && !this.overlay ? of(c, je ? "clone" : "hidden") : null, vr = U(() => Kr(i.dragOperation.activatorEvent));
  if (J !== "none") {
    const P = Ur(J);
    P && !f.translate && (f.translate = P);
  }
  if (!f.transformOrigin) {
    const P = U(() => a.current);
    f.transformOrigin = { x: (P.x - A * p.scaleX - p.x) / (g * p.scaleX), y: (P.y - y * p.scaleY - p.y) / (_ * p.scaleY) };
  }
  const { transformOrigin: se } = f, hn = y * p.scaleY + p.y, pn = A * p.scaleX + p.x;
  if (!f.coordinates && (f.coordinates = { x: pn, y: hn }, m.x !== 1 || m.y !== 1)) {
    const { scaleX: P, scaleY: H } = b, { x: Q, y: et } = se;
    f.coordinates.x += (g * P - g) * Q, f.coordinates.y += (_ * H - _) * et;
  }
  f.dimensions || (f.dimensions = { width: g, height: _ }), f.frameTransform || (f.frameTransform = p);
  const vn = { x: f.coordinates.x - pn, y: f.coordinates.y - hn }, Le = { width: (f.dimensions.width * f.frameTransform.scaleX - g * p.scaleX) * se.x, height: (f.dimensions.height * f.frameTransform.scaleY - _ * p.scaleY) * se.y }, xe = { x: vn.x / p.scaleX + Le.width, y: vn.y / p.scaleY + Le.height }, gn = { left: A + xe.x, top: y + xe.y };
  u.setAttribute(te, "true");
  const mn = U(() => o.transform), yn = (e = f.translate) != null ? e : { x: 0, y: 0 }, S = mn.x * p.scaleX + yn.x, O = mn.y * p.scaleY + yn.y, N = `${S}px ${O}px 0`, j = I ? `${I}, translate 0ms linear` : "";
  C.set({ width: g - pr, height: _ - fn, top: gn.top, left: gn.left, translate: N, transition: j, scale: x ? `${m.x} ${m.y}` : "", "transform-origin": `${se.x * 100}% ${se.y * 100}%` }, Pt), Y && (d.insertAdjacentElement("afterend", Y), (s == null ? void 0 : s.rootElement) && (typeof s.rootElement == "function" ? s.rootElement(c) : s.rootElement).appendChild(d)), Wi(u) && (u.hasAttribute("popover") || u.setAttribute("popover", "manual"), Ze(u), u.addEventListener("beforetoggle", Oo));
  const B = new ResizeObserver(() => {
    if (!Y) return;
    const P = new Kt(Y, { frameTransform: p, ignoreTransforms: true }), H = se ?? { x: 1, y: 1 }, Q = (g - P.width) * H.x + xe.x, et = (_ - P.height) * H.y + xe.y;
    if (C.set({ width: P.width - pr, height: P.height - fn, top: y + et, left: A + Q }, Pt), k == null ? void 0 : k.takeRecords(), Do(d) && Do(Y)) {
      const G = Array.from(d.cells), Z = Array.from(Y.cells);
      for (const [rt, Wt] of G.entries()) {
        const ut = Z[rt];
        Wt.style.width = `${ut.offsetWidth}px`;
      }
    }
    o.shape = new Kt(u);
  }), it = new Kt(u);
  U(() => o.shape = it);
  const F = de(u), K = (P) => {
    this.manager.actions.stop({ event: P });
  };
  vr && F.addEventListener("resize", K), U(() => c.status) === "idle" && requestAnimationFrame(() => c.status = "dragging"), Y && (B.observe(Y), k = new MutationObserver((P) => {
    let H = false;
    for (const Q of P) {
      if (Q.target !== d) {
        H = true;
        continue;
      }
      if (Q.type !== "attributes") continue;
      const et = Q.attributeName;
      if (et.startsWith("aria-") || rf.includes(et)) continue;
      const G = d.getAttribute(et);
      if (et === "style") {
        if (Fr(d) && Fr(Y)) {
          const Z = d.style;
          for (const rt of Array.from(Y.style)) Z.getPropertyValue(rt) === "" && Y.style.removeProperty(rt);
          for (const rt of Array.from(Z)) {
            if (nf.includes(rt) || rt.startsWith(Pt)) continue;
            const Wt = Z.getPropertyValue(rt);
            Y.style.setProperty(rt, Wt);
          }
        }
      } else G !== null ? Y.setAttribute(et, G) : Y.removeAttribute(et);
    }
    H && je && (Y.innerHTML = d.innerHTML);
  }), k.observe(d, { attributes: true, subtree: true, childList: true }), D = new MutationObserver((P) => {
    for (const H of P) if (H.addedNodes.length !== 0) for (const Q of Array.from(H.addedNodes)) {
      if (Q.contains(d) && d.nextElementSibling !== Y) {
        d.insertAdjacentElement("afterend", Y), Ze(u);
        return;
      }
      if (Q.contains(Y) && Y.previousElementSibling !== d) {
        Y.insertAdjacentElement("beforebegin", d), Ze(u);
        return;
      }
    }
  }), D.observe(d.ownerDocument.body, { childList: true, subtree: true }));
  const dt = (r = i.dragOperation.source) == null ? void 0 : r.id, pt = () => {
    var P;
    if (!vr || dt == null) return;
    const H = i.registry.draggables.get(dt), Q = (P = H == null ? void 0 : H.handle) != null ? P : H == null ? void 0 : H.element;
    ze(Q) && Q.focus();
  }, Ct = () => {
    k == null ? void 0 : k.disconnect(), D == null ? void 0 : D.disconnect(), B.disconnect(), F.removeEventListener("resize", K), Wi(u) && (u.removeEventListener("beforetoggle", Oo), u.removeAttribute("popover")), u.removeAttribute(te), C.reset(), c.status = "idle";
    const P = n.current.translate != null;
    Y && (P || Y.parentElement !== u.parentElement) && u.isConnected && Y.replaceWith(u), Y == null ? void 0 : Y.remove();
  }, St = nn(() => {
    var P;
    const { transform: H, status: Q } = o;
    if (!(!H.x && !H.y && !n.current.translate) && Q.dragging) {
      const et = (P = f.translate) != null ? P : { x: 0, y: 0 }, G = { x: H.x / p.scaleX + et.x, y: H.y / p.scaleY + et.y }, Z = n.current.translate, rt = U(() => o.modifiers), Wt = U(() => {
        var kt;
        return (kt = o.shape) == null ? void 0 : kt.current;
      }), ut = vr ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear";
      if (C.set({ transition: `${I}, translate ${ut}`, translate: `${G.x}px ${G.y}px 0` }, Pt), k == null ? void 0 : k.takeRecords(), Wt && Wt !== it && Z && !rt.length) {
        const kt = Bt.delta(G, Z);
        o.shape = le.from(Wt.boundingRectangle).translate(kt.x * p.scaleX, kt.y * p.scaleY);
      } else o.shape = new Kt(u);
      n.current.translate = G;
    }
  }, function() {
    if (o.status.dropped) {
      this.dispose(), c.status = "dropping";
      let P = n.current.translate;
      const H = P != null;
      if (!P && d !== u && (P = { x: 0, y: 0 }), !P) {
        Ct();
        return;
      }
      const Q = () => {
        var et, G;
        {
          Ze(u);
          const [, Z] = (et = ll(u, (oe) => "translate" in oe)) != null ? et : [];
          Z == null ? void 0 : Z.pause();
          const rt = Y ?? d, Wt = { frameTransform: ko(u, rt) ? null : void 0 }, ut = new Kt(u, Wt), kt = (G = Ur(Jt(u).translate)) != null ? G : P, Ft = new Kt(rt, Wt), Ne = le.delta(ut, Ft, c.alignment), Fe = { x: kt.x - Ne.x, y: kt.y - Ne.y }, gt = Math.round(ut.intrinsicHeight) !== Math.round(Ft.intrinsicHeight) ? { minHeight: [`${ut.intrinsicHeight}px`, `${Ft.intrinsicHeight}px`], maxHeight: [`${ut.intrinsicHeight}px`, `${Ft.intrinsicHeight}px`] } : {}, It = Math.round(ut.intrinsicWidth) !== Math.round(Ft.intrinsicWidth) ? { minWidth: [`${ut.intrinsicWidth}px`, `${Ft.intrinsicWidth}px`], maxWidth: [`${ut.intrinsicWidth}px`, `${Ft.intrinsicWidth}px`] } : {};
          C.set({ transition: I }, Pt), u.setAttribute(Fi, ""), k == null ? void 0 : k.takeRecords(), xl({ element: u, keyframes: Ws(qr(qr({}, gt), It), { translate: [`${kt.x}px ${kt.y}px 0`, `${Fe.x}px ${Fe.y}px 0`] }), options: { duration: H || u !== d ? 250 : 0, easing: "ease" } }).then(() => {
            u.removeAttribute(Fi), Z == null ? void 0 : Z.finish(), Ct(), requestAnimationFrame(pt);
          });
        }
      };
      i.renderer.rendering.then(Q);
    }
  });
  return () => {
    Ct(), St();
  };
};
Cl = function() {
  var t, e, r;
  const { status: n, source: i, target: s } = this.manager.dragOperation, { nonce: o } = (t = this.options) != null ? t : {};
  if (n.initializing) {
    const a = ne((e = i == null ? void 0 : i.element) != null ? e : null), c = ne((r = s == null ? void 0 : s.element) != null ? r : null), h = /* @__PURE__ */ new Set([a, c]);
    for (const d of h) {
      let l = Un.get(d);
      if (!l) {
        const f = document.createElement("style");
        f.textContent = sf, o && f.setAttribute("nonce", o), d.head.prepend(f);
        const u = new MutationObserver((p) => {
          for (const b of p) if (b.type === "childList") {
            const x = Array.from(b.removedNodes);
            x.length > 0 && x.includes(f) && d.head.prepend(f);
          }
        });
        u.observe(d.head, { childList: true }), l = { cleanup: () => {
          u.disconnect(), f.remove();
        }, instances: /* @__PURE__ */ new Set() }, Un.set(d, l);
      }
      l.instances.add(this);
    }
  }
};
ue(Gr, 4, "overlay", Ml, Zr, js);
dr(Gr, Zr);
Zr.configure = cs(Zr);
var Il = Zr, _r = true, df = false, Tl, zl, Al, Wl, ve, Ls, Ns;
Wl = (Al = [W], Ht.Forward), zl = (Tl = [W], Ht.Reverse);
var Jr = class {
  constructor() {
    xt(this, Ls, vt(ve, 8, this, _r)), vt(ve, 11, this), xt(this, Ns, vt(ve, 12, this, _r)), vt(ve, 15, this);
  }
  isLocked(t) {
    return t === Ht.Idle ? false : t == null ? this[Ht.Forward] === _r && this[Ht.Reverse] === _r : this[t] === _r;
  }
  unlock(t) {
    t !== Ht.Idle && (this[t] = df);
  }
};
ve = an(null);
Ls = /* @__PURE__ */ new WeakMap();
Ns = /* @__PURE__ */ new WeakMap();
ue(ve, 4, Wl, Al, Jr, Ls);
ue(ve, 4, zl, Tl, Jr, Ns);
dr(ve, Jr);
var uf = [Ht.Forward, Ht.Reverse], Eo = class {
  constructor() {
    this.x = new Jr(), this.y = new Jr();
  }
  isLocked() {
    return this.x.isLocked() && this.y.isLocked();
  }
}, ff = class extends $t {
  constructor(t) {
    super(t);
    const e = rn(new Eo());
    let r = null;
    this.signal = e, Nt(() => {
      const { status: n } = t.dragOperation;
      if (!n.initialized) {
        r = null, e.value = new Eo();
        return;
      }
      const { delta: i } = t.dragOperation.position;
      if (r) {
        const s = { x: Po(i.x, r.x), y: Po(i.y, r.y) }, o = e.peek();
        at(() => {
          for (const a of ya) for (const c of uf) s[a] === c && o[a].unlock(c);
          e.value = o;
        });
      }
      r = i;
    });
  }
  get current() {
    return this.signal.peek();
  }
};
function Po(t, e) {
  return Math.sign(t - e);
}
var Rl, Xi, Qr, Fs, he, Yi, cn = class extends (Xi = ei, Rl = [W], Xi) {
  constructor(t) {
    super(t), xt(this, Fs, vt(Qr, 8, this, false)), vt(Qr, 11, this), xt(this, he), xt(this, Yi, () => {
      if (!wt(this, he)) return;
      const { element: s, by: o } = wt(this, he);
      o.y && (s.scrollTop += o.y), o.x && (s.scrollLeft += o.x);
    }), this.scroll = (s) => {
      var o;
      if (this.disabled) return false;
      const a = this.getScrollableElements();
      if (!a) return Zt(this, he, void 0), false;
      const { position: c } = this.manager.dragOperation, h = c == null ? void 0 : c.current;
      if (h) {
        const { by: d } = s ?? {}, l = d ? { x: Mo(d.x), y: Mo(d.y) } : void 0, f = l ? void 0 : this.scrollIntentTracker.current;
        if (f == null ? void 0 : f.isLocked()) return false;
        for (const u of a) {
          const p = uu(u, d);
          if (p.x || p.y) {
            const { speed: b, direction: x } = Su(u, h, l);
            if (f) for (const w of ya) f[w].isLocked(x[w]) && (b[w] = 0, x[w] = 0);
            if (x.x || x.y) {
              const { x: w, y: m } = d ?? x, g = w * b.x, _ = m * b.y;
              if (g || _) {
                const y = (o = wt(this, he)) == null ? void 0 : o.by;
                if (this.autoScrolling && y && (y.x && !g || y.y && !_)) continue;
                return Zt(this, he, { element: u, by: { x: g, y: _ } }), Xn.schedule(wt(this, Yi)), true;
              }
            }
          }
        }
      }
      return Zt(this, he, void 0), false;
    };
    let e = null, r = null;
    const n = Yr(() => {
      const { position: s, source: o } = t.dragOperation;
      if (!s) return null;
      const a = hl(ne(o == null ? void 0 : o.element), s.current);
      return a && (e = a), a ?? e;
    }), i = Yr(() => {
      const s = n.value, { documentElement: o } = ne(s);
      if (!s || s === o) {
        const { target: a } = t.dragOperation, c = a == null ? void 0 : a.element;
        if (c) {
          const h = Ri(c, { excludeElement: false });
          return r = h, h;
        }
      }
      if (s) {
        const a = Ri(s, { excludeElement: false });
        return this.autoScrolling && r && a.size < (r == null ? void 0 : r.size) ? r : (r = a, a);
      }
      return r = null, null;
    }, Te);
    this.getScrollableElements = () => i.value, this.scrollIntentTracker = new ff(t), this.destroy = t.monitor.addEventListener("dragmove", (s) => {
      this.disabled || s.defaultPrevented || !Kr(t.dragOperation.activatorEvent) || !s.by || this.scroll({ by: s.by }) && s.preventDefault();
    });
  }
};
Qr = an(Xi);
Fs = /* @__PURE__ */ new WeakMap();
he = /* @__PURE__ */ new WeakMap();
Yi = /* @__PURE__ */ new WeakMap();
ue(Qr, 4, "autoScrolling", Rl, cn, Fs);
dr(Qr, cn);
function Mo(t) {
  return t > 0 ? Ht.Forward : t < 0 ? Ht.Reverse : Ht.Idle;
}
var hf = class {
  constructor(t) {
    this.scheduler = t, this.pending = false, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
      const { tasks: e, resolvers: r } = this;
      this.pending = false, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
      for (const n of e) n();
      for (const n of r) n();
    };
  }
  schedule(t) {
    return this.tasks.add(t), this.pending || (this.pending = true, this.scheduler(this.flush)), new Promise((e) => this.resolvers.add(e));
  }
}, pf = new hf((t) => {
  typeof requestAnimationFrame == "function" ? requestAnimationFrame(t) : t();
}), vf = 10, jl = class extends $t {
  constructor(t, e) {
    super(t);
    const r = t.registry.plugins.get(cn);
    if (!r) throw new Error("AutoScroller plugin depends on Scroller plugin");
    this.destroy = Nt(() => {
      if (this.disabled) return;
      const { position: n, status: i } = t.dragOperation;
      if (i.dragging) if (r.scroll()) {
        r.autoScrolling = true;
        const o = setInterval(() => pf.schedule(r.scroll), vf);
        return () => {
          clearInterval(o);
        };
      } else r.autoScrolling = false;
    });
  }
}, $o = { capture: true, passive: true }, Ir, gf = class extends ei {
  constructor(t) {
    super(t), xt(this, Ir), this.handleScroll = () => {
      wt(this, Ir) == null && Zt(this, Ir, setTimeout(() => {
        this.manager.collisionObserver.forceUpdate(false), Zt(this, Ir, void 0);
      }, 50));
    };
    const { dragOperation: e } = this.manager;
    this.destroy = Nt(() => {
      var r, n, i;
      if (e.status.dragging) {
        const o = (i = (n = (r = e.source) == null ? void 0 : r.element) == null ? void 0 : n.ownerDocument) != null ? i : document;
        return o.addEventListener("scroll", this.handleScroll, $o), () => {
          o.removeEventListener("scroll", this.handleScroll, $o);
        };
      }
    });
  }
};
Ir = /* @__PURE__ */ new WeakMap();
var mf = class extends $t {
  constructor(t, e) {
    super(t, e), this.manager = t, this.destroy = Nt(() => {
      var r;
      const { dragOperation: n } = this.manager, { nonce: i } = (r = this.options) != null ? r : {};
      if (n.status.initialized) {
        const s = document.createElement("style");
        return i && s.setAttribute("nonce", i), s.textContent = "* { user-select: none !important; -webkit-user-select: none !important; }", document.head.appendChild(s), mi(), document.addEventListener("selectionchange", mi, { capture: true }), () => {
          document.removeEventListener("selectionchange", mi, { capture: true }), s.remove();
        };
      }
    });
  }
};
function mi() {
  var t;
  (t = document.getSelection()) == null || t.removeAllRanges();
}
var Tr = Object.freeze({ offset: 10, keyboardCodes: { start: ["Space", "Enter"], cancel: ["Escape"], end: ["Space", "Enter", "Tab"], up: ["ArrowUp"], down: ["ArrowDown"], left: ["ArrowLeft"], right: ["ArrowRight"] }, shouldActivate(t) {
  var e;
  const { event: r, source: n } = t, i = (e = n.handle) != null ? e : n.element;
  return r.target === i;
} }), He, Kn = class extends Je {
  constructor(e, r) {
    super(e), this.manager = e, this.options = r, xt(this, He, []), this.listeners = new pl(), this.handleSourceKeyDown = (n, i, s) => {
      if (this.disabled || n.defaultPrevented || !on(n.target) || i.disabled) return;
      const { keyboardCodes: o = Tr.keyboardCodes, shouldActivate: a = Tr.shouldActivate } = s ?? {};
      o.start.includes(n.code) && this.manager.dragOperation.status.idle && a({ event: n, source: i, manager: this.manager }) && this.handleStart(n, i, s);
    };
  }
  bind(e, r = this.options) {
    return Nt(() => {
      var i;
      const s = (i = e.handle) != null ? i : e.element, o = (a) => {
        Kr(a) && this.handleSourceKeyDown(a, e, r);
      };
      if (s) return s.addEventListener("keydown", o), () => {
        s.removeEventListener("keydown", o);
      };
    });
  }
  handleStart(e, r, n) {
    const { element: i } = r;
    if (!i) throw new Error("Source draggable does not have an associated element");
    e.preventDefault(), e.stopImmediatePropagation(), wl(i);
    const { center: s } = new Kt(i);
    if (this.manager.actions.start({ event: e, coordinates: { x: s.x, y: s.y }, source: r }).signal.aborted) return this.cleanup();
    this.sideEffects();
    const a = ne(i), c = [this.listeners.bind(a, [{ type: "keydown", listener: (h) => this.handleKeyDown(h, r, n), options: { capture: true } }])];
    wt(this, He).push(...c);
  }
  handleKeyDown(e, r, n) {
    const { keyboardCodes: i = Tr.keyboardCodes } = n ?? {};
    if (Ve(e, [...i.end, ...i.cancel])) {
      e.preventDefault();
      const s = Ve(e, i.cancel);
      this.handleEnd(e, s);
      return;
    }
    Ve(e, i.up) ? this.handleMove("up", e) : Ve(e, i.down) && this.handleMove("down", e), Ve(e, i.left) ? this.handleMove("left", e) : Ve(e, i.right) && this.handleMove("right", e);
  }
  handleEnd(e, r) {
    this.manager.actions.stop({ event: e, canceled: r }), this.cleanup();
  }
  handleMove(e, r) {
    var n, i;
    const { shape: s } = this.manager.dragOperation, o = r.shiftKey ? 5 : 1;
    let a = { x: 0, y: 0 }, c = (i = (n = this.options) == null ? void 0 : n.offset) != null ? i : Tr.offset;
    if (typeof c == "number" && (c = { x: c, y: c }), !!s) {
      switch (e) {
        case "up":
          a = { x: 0, y: -c.y * o };
          break;
        case "down":
          a = { x: 0, y: c.y * o };
          break;
        case "left":
          a = { x: -c.x * o, y: 0 };
          break;
        case "right":
          a = { x: c.x * o, y: 0 };
          break;
      }
      (a.x || a.y) && (r.preventDefault(), this.manager.actions.move({ event: r, by: a }));
    }
  }
  sideEffects() {
    const e = this.manager.registry.plugins.get(jl);
    (e == null ? void 0 : e.disabled) === false && (e.disable(), wt(this, He).push(() => {
      e.enable();
    }));
  }
  cleanup() {
    wt(this, He).forEach((e) => e()), Zt(this, He, []);
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
He = /* @__PURE__ */ new WeakMap();
Kn.configure = cs(Kn);
Kn.defaults = Tr;
var Ll = Kn;
function Ve(t, e) {
  return e.includes(t.code);
}
var Nl = Object.freeze({ activationConstraints(t, e) {
  var r;
  const { pointerType: n, target: i } = t;
  if (!(n === "mouse" && on(i) && (e.handle === i || (r = e.handle) != null && r.contains(i)))) return n === "touch" ? { delay: { value: 250, tolerance: 5 } } : zu(i) && !t.defaultPrevented ? { delay: { value: 200, tolerance: 0 } } : { delay: { value: 200, tolerance: 10 }, distance: { value: 5 } };
} }), Ue, Ke, qn = class extends Je {
  constructor(e, r) {
    super(e), this.manager = e, this.options = r, xt(this, Ue, /* @__PURE__ */ new Set()), xt(this, Ke), this.listeners = new pl(), this.latest = { event: void 0, coordinates: void 0 }, this.handleMove = () => {
      const { event: n, coordinates: i } = this.latest;
      !n || !i || this.manager.actions.move({ event: n, to: i });
    }, this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  activationConstraints(e, r) {
    var n;
    const { activationConstraints: i = Nl.activationConstraints } = (n = this.options) != null ? n : {};
    return typeof i == "function" ? i(e, r) : i;
  }
  bind(e, r = this.options) {
    return Nt(() => {
      var i;
      const s = new AbortController(), { signal: o } = s, a = (h) => {
        Tu(h) && this.handlePointerDown(h, e, r);
      };
      let c = [(i = e.handle) != null ? i : e.element];
      (r == null ? void 0 : r.activatorElements) && (Array.isArray(r.activatorElements) ? c = r.activatorElements : c = r.activatorElements(e));
      for (const h of c) h && (bf(h.ownerDocument.defaultView), h.addEventListener("pointerdown", a, { signal: o }));
      return () => s.abort();
    });
  }
  handlePointerDown(e, r, n = {}) {
    if (this.disabled || !e.isPrimary || e.button !== 0 || !on(e.target) || r.disabled || yf(e) || !this.manager.dragOperation.status.idle) return;
    const { target: i } = e, s = ze(i) && i.draggable && i.getAttribute("draggable") === "true", o = tr(r.element);
    this.initialCoordinates = { x: e.clientX * o.scaleX + o.x, y: e.clientY * o.scaleY + o.y };
    const a = this.activationConstraints(e, r);
    if (e.sensor = this, !(a == null ? void 0 : a.delay) && !(a == null ? void 0 : a.distance)) this.handleStart(r, e);
    else {
      const { delay: l } = a;
      if (l) {
        const f = setTimeout(() => this.handleStart(r, e), l.value);
        Zt(this, Ke, () => {
          clearTimeout(f), Zt(this, Ke, void 0);
        });
      }
    }
    const c = ne(e.target), h = this.listeners.bind(c, [{ type: "pointermove", listener: (l) => this.handlePointerMove(l, r) }, { type: "pointerup", listener: this.handlePointerUp, options: { capture: true } }, { type: "dragstart", listener: s ? this.handleCancel : Sn, options: { capture: true } }]), d = () => {
      var l;
      h(), (l = wt(this, Ke)) == null || l.call(this), this.initialCoordinates = void 0;
    };
    wt(this, Ue).add(d);
  }
  handlePointerMove(e, r) {
    const n = { x: e.clientX, y: e.clientY }, i = tr(r.element);
    if (n.x = n.x * i.scaleX + i.x, n.y = n.y * i.scaleY + i.y, this.manager.dragOperation.status.dragging) {
      e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, Xn.schedule(this.handleMove);
      return;
    }
    if (!this.initialCoordinates) return;
    const s = { x: n.x - this.initialCoordinates.x, y: n.y - this.initialCoordinates.y }, o = this.activationConstraints(e, r), { distance: a, delay: c } = o ?? {};
    if (a) {
      if (a.tolerance != null && pi(s, a.tolerance)) return this.handleCancel(e);
      if (pi(s, a.value)) return this.handleStart(r, e);
    }
    if (c && pi(s, c.tolerance)) return this.handleCancel(e);
  }
  handlePointerUp(e) {
    const { status: r } = this.manager.dragOperation;
    if (!r.idle) {
      e.preventDefault(), e.stopPropagation();
      const n = !r.initialized;
      this.manager.actions.stop({ event: e, canceled: n });
    }
    this.cleanup();
  }
  handleKeyDown(e) {
    e.key === "Escape" && (e.preventDefault(), this.handleCancel(e));
  }
  handleStart(e, r) {
    var n;
    const { manager: i, initialCoordinates: s } = this;
    if ((n = wt(this, Ke)) == null || n.call(this), !s || !i.dragOperation.status.idle || r.defaultPrevented) return;
    if (i.actions.start({ coordinates: s, event: r, source: e }).signal.aborted) return this.cleanup();
    r.preventDefault();
    const a = ne(r.target), c = a.body;
    c.setPointerCapture(r.pointerId);
    const h = this.listeners.bind(a, [{ type: "touchmove", listener: Sn, options: { passive: false } }, { type: "click", listener: Sn }, { type: "contextmenu", listener: Sn }, { type: "keydown", listener: this.handleKeyDown }, { type: "lostpointercapture", listener: (d) => {
      d.target === c && this.handlePointerUp(d);
    } }]);
    wt(this, Ue).add(h);
  }
  handleCancel(e) {
    const { dragOperation: r } = this.manager;
    r.status.initialized && this.manager.actions.stop({ event: e, canceled: true }), this.cleanup();
  }
  cleanup() {
    this.latest = { event: void 0, coordinates: void 0 }, wt(this, Ue).forEach((e) => e()), wt(this, Ue).clear();
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
Ue = /* @__PURE__ */ new WeakMap();
Ke = /* @__PURE__ */ new WeakMap();
qn.configure = cs(qn);
qn.defaults = Nl;
var Fl = qn;
function yf(t) {
  return "sensor" in t;
}
function Sn(t) {
  t.preventDefault();
}
function _f() {
}
var Co = /* @__PURE__ */ new WeakSet();
function bf(t) {
  !t || Co.has(t) || (t.addEventListener("touchmove", _f, { capture: false, passive: false }), Co.add(t));
}
var Vr = { modifiers: [], plugins: [Qu, jl, ef, Il, mf], sensors: [Fl, Ll] }, Vl = class extends qd {
  constructor(t = {}) {
    const { plugins: e = Vr.plugins, sensors: r = Vr.sensors, modifiers: n = [] } = t;
    super(Ws(qr({}, t), { plugins: [gf, cn, ...e], sensors: r, modifiers: n }));
  }
}, Xl, Yl, Bl, Bi, qt, Vs, Xs, Ys, dn = class extends (Bi = ee, Bl = [W], Yl = [W], Xl = [W], Bi) {
  constructor(t, e) {
    var r = t, { element: n, effects: i = () => [], handle: s, feedback: o = "default" } = r, a = El(r, ["element", "effects", "handle", "feedback"]);
    super(qr({ effects: () => [...i(), () => {
      var c, h;
      const { manager: d } = this;
      if (!d) return;
      const f = ((h = (c = this.sensors) == null ? void 0 : c.map(ds)) != null ? h : [...d.sensors]).map((u) => {
        const p = u instanceof Je ? u : d.registry.register(u.plugin), b = u instanceof Je ? void 0 : u.options;
        return p.bind(this, b);
      });
      return function() {
        f.forEach((p) => p());
      };
    }] }, a), e), xt(this, Vs, vt(qt, 8, this)), vt(qt, 11, this), xt(this, Xs, vt(qt, 12, this)), vt(qt, 15, this), xt(this, Ys, vt(qt, 16, this)), vt(qt, 19, this), this.element = n, this.handle = s, this.feedback = o;
  }
};
qt = an(Bi);
Vs = /* @__PURE__ */ new WeakMap();
Xs = /* @__PURE__ */ new WeakMap();
Ys = /* @__PURE__ */ new WeakMap();
ue(qt, 4, "handle", Bl, dn, Vs);
ue(qt, 4, "element", Yl, dn, Xs);
ue(qt, 4, "feedback", Xl, dn, Ys);
dr(qt, dn);
var Hl, Ul, Hi, ge, Bs, yi, Kl, ql, Xr, Hs, Us = class extends (Hi = re, Ul = [W], Hl = [W], Hi) {
  constructor(t, e) {
    var r = t, { element: n, effects: i = () => [] } = r, s = El(r, ["element", "effects"]);
    const { collisionDetector: o = Sl } = s, a = (h) => {
      const { manager: d, element: l } = this;
      if (!l || h === null) {
        this.shape = void 0;
        return;
      }
      if (!d) return;
      const f = new Kt(l), u = U(() => this.shape);
      return f && (u == null ? void 0 : u.equals(f)) ? u : (this.shape = f, f);
    }, c = rn(false);
    super(Ws(qr({}, s), { collisionDetector: o, effects: () => [...i(), () => {
      const { element: h, manager: d } = this;
      if (!d) return;
      const { dragOperation: l } = d, { source: f } = l;
      c.value = !!(f && l.status.initialized && h && !this.disabled && this.accepts(f));
    }, () => {
      const { element: h } = this;
      if (c.value && h) {
        const d = new du(h, a);
        return () => {
          d.disconnect(), this.shape = void 0;
        };
      }
    }, () => {
      var h;
      if ((h = this.manager) != null && h.dragOperation.status.initialized) return () => {
        this.shape = void 0;
      };
    }] }), e), xt(this, Xr), xt(this, Bs, vt(ge, 8, this)), vt(ge, 11, this), xt(this, Hs, vt(ge, 12, this)), vt(ge, 15, this), this.element = n, this.refreshShape = () => a();
  }
  set element(t) {
    Zt(this, Xr, t, ql);
  }
  get element() {
    var t;
    return (t = this.proxy) != null ? t : wt(this, Xr, Kl);
  }
};
ge = an(Hi);
Bs = /* @__PURE__ */ new WeakMap();
Xr = /* @__PURE__ */ new WeakSet();
Hs = /* @__PURE__ */ new WeakMap();
yi = ue(ge, 20, "#element", Ul, Xr, Bs), Kl = yi.get, ql = yi.set;
ue(ge, 4, "proxy", Hl, Us, Hs);
dr(ge, Us);
function wf(t, e) {
  switch (t) {
    case "post":
      Gi(e);
      break;
    case "pre":
      en(e);
      break;
  }
}
function Gl(t, e, r, n = {}) {
  const { lazy: i = false } = n;
  let s = !i, o = Array.isArray(t) ? [] : void 0;
  wf(e, () => {
    const a = Array.isArray(t) ? t.map((h) => h()) : t();
    if (!s) {
      s = true, o = a;
      return;
    }
    const c = dc(() => r(a, o));
    return o = a, c;
  });
}
function tn(t, e, r) {
  Gl(t, "post", e, r);
}
function xf(t, e, r) {
  Gl(t, "pre", e, r);
}
tn.pre = xf;
class Sf {
  constructor(e, r) {
    __privateAdd(this, _e2);
    __privateAdd(this, _t2);
    __privateAdd(this, _r2);
    __privateSet(this, _e2, e), __privateSet(this, _t2, Symbol(e)), __privateSet(this, _r2, r);
  }
  get key() {
    return __privateGet(this, _t2);
  }
  exists() {
    return uc(__privateGet(this, _t2));
  }
  get() {
    const e = Js(__privateGet(this, _t2));
    if (e === void 0) throw new Error(`Context "${__privateGet(this, _e2)}" not found`);
    return e;
  }
  getOr(e) {
    const r = Js(__privateGet(this, _t2));
    return r === void 0 ? e ?? __privateGet(this, _r2) : r;
  }
  set(e) {
    return fc(__privateGet(this, _t2), e);
  }
}
_e2 = new WeakMap();
_t2 = new WeakMap();
_r2 = new WeakMap();
function Ui(t) {
  return typeof t == "function" ? t() : t;
}
function kf(t) {
  const e = {}, r = Object.keys(t);
  for (let n = 0; n < r.length; n++) {
    const i = r[n], s = t[i];
    e[i] = typeof s == "function" ? s() : s;
  }
  return e;
}
function Ki(t) {
  return typeof t == "function" ? t : () => t;
}
const Io = Symbol("box"), Of = Symbol("is-writable-lens");
function Ce(t) {
  let e;
  const r = typeof t == "function" ? t : t.get, n = typeof t == "function" ? void 0 : t.set, i = L(() => {
    const s = r(e);
    return e = s, s;
  });
  return n ? { [Io]: true, [Of]: true, get current() {
    return v(i);
  }, set current(s) {
    n(s), e = s;
  } } : { [Io]: true, get current() {
    return v(i);
  } };
}
const Df = new Vl(), Ks = new Sf("DragDropContext", Ce(() => Df));
function Ef(t, e = false) {
  let r = t.peek();
  const n = No((i) => Nt(() => {
    const s = t.value;
    r !== s && (r = s, i());
  }));
  return { get value() {
    return n(), t.peek();
  } };
}
function Pf(t) {
  return Ef(Yr(t));
}
function Zl(t) {
  if (!t) return t;
  const e = /* @__PURE__ */ new Map(), r = No((n) => Nt(() => {
    for (const i of e) {
      const [s] = i, o = U(() => i[1]), a = t[s];
      o !== a && (n(), e.set(s, a));
    }
  }));
  return new Proxy(t, { get(n, i) {
    const s = n[i];
    return e.set(i, s), r(), s;
  } });
}
function _i(t, e) {
  let r = Ui(t);
  en(() => {
    const n = Ui(t);
    n !== r && (r = n, e(n));
  });
}
function Dt(t, e, r = tn, n = Object.is) {
  r(Ki(t), (i, s) => {
    n(i, s) || e(i, s);
  });
}
function Mf() {
  let t = Rt(0), e = null, r = null;
  return en(() => {
    v(t), r == null ? void 0 : r(), e = null;
  }), { renderer: { get rendering() {
    return e ?? Promise.resolve();
  } }, trackRendering(n) {
    e || (e = new Promise((i) => {
      r = i;
    })), n(), hc(t);
  } };
}
function $f(t, e) {
  er(e, true);
  let r = Qi(e, ["$$slots", "$$events", "$$legacy", "children", "onCollision", "onBeforeDragStart", "onDragStart", "onDragMove", "onDragOver", "onDragEnd"]);
  const { renderer: n, trackRendering: i } = Mf(), s = L(() => e.manager ?? new Vl(r));
  en(() => v(s).destroy);
  function o() {
    var _a2;
    const d = (_a2 = v(s).dragOperation.source) == null ? void 0 : _a2.element;
    d && Ze(d);
  }
  tn(() => v(s), () => {
    const d = v(s).monitor;
    v(s).renderer = n;
    const l = [d.addEventListener("beforedragstart", (f) => {
      const u = e.onBeforeDragStart;
      u && i(() => u(f, v(s)));
    }), d.addEventListener("dragstart", (f) => {
      var _a2;
      return (_a2 = e.onDragStart) == null ? void 0 : _a2.call(e, f, v(s));
    }), d.addEventListener("dragover", (f) => {
      const u = e.onDragOver;
      u && i(() => u(f, v(s))), o();
    }), d.addEventListener("dragmove", (f) => {
      const u = e.onDragMove;
      u && i(() => u(f, v(s))), o();
    }), d.addEventListener("dragend", (f) => {
      const u = e.onDragEnd;
      u && i(() => u(f, v(s)));
    }), d.addEventListener("collision", (f) => {
      var _a2;
      return (_a2 = e.onCollision) == null ? void 0 : _a2.call(e, f, v(s));
    })];
    return () => l.forEach((f) => f());
  });
  const a = [void 0, Te];
  Dt(() => e.plugins, (d) => {
    v(s) && (v(s).plugins = d ?? Vr.plugins);
  }, ...a), Dt(() => e.sensors, (d) => {
    v(s) && (v(s).sensors = d ?? Vr.sensors);
  }, ...a), Dt(() => e.modifiers, (d) => {
    v(s) && (v(s).modifiers = d ?? Vr.modifiers);
  }, ...a), Ks.set(Ce(() => v(s)));
  var c = Xt(), h = bt(c);
  Ji(h, () => e.children ?? Zi), M(t, c), rr();
}
function Cf(t) {
  return "isConnected" in t && t.isConnected;
}
function kn(t, e) {
  return (r) => (t[e] = r, () => {
    Cf(r) || (t[e] = void 0);
  });
}
function Jl() {
  return Ks.get();
}
function If(t) {
  const e = Jl(), r = t(e.current ?? void 0);
  return en(() => (r.manager !== e.current && (r.manager = e.current ?? void 0), r.register())), r;
}
function Tf() {
  return () => {
  };
}
function zf(t, e) {
  er(e, true);
  let r = Zn(e, "tag", 3, "div"), n = Rt(void 0);
  const i = Jl(), s = L(() => Pf(() => {
    var _a2;
    return (_a2 = i.current) == null ? void 0 : _a2.dragOperation.source;
  }).value ?? null), o = L(() => typeof e.disabled == "function" ? e.disabled(v(s)) : e.disabled);
  Gi(() => {
    const l = i.current, f = v(n), u = v(o);
    if (!l || !f || u) return;
    const p = l.plugins.find((b) => b instanceof Il);
    if (p) return p.overlay = f, () => {
      p.overlay = void 0;
    };
  });
  const a = Ce(() => {
    const l = i.current;
    if (!l) return l;
    const f = new Proxy(l.registry, { get(u, p) {
      return p === "register" || p === "unregister" ? Tf : u[p];
    } });
    return new Proxy(l, { get(u, p) {
      return p === "registry" ? f : u[p];
    } });
  });
  Ks.set(a);
  var c = Xt(), h = bt(c);
  {
    var d = (l) => {
      var f = Xt(), u = bt(f);
      Tc(u, r, false, (p, b) => {
        Vo(p, (m) => V(n, m, true), () => v(n)), Xo(p, () => ({ class: e.className, style: e.style, "data-dnd-overlay": true }));
        var x = Xt(), w = bt(x);
        {
          let m = L(() => Zl(v(s)));
          Ji(w, () => e.children ?? Zi, () => v(m));
        }
        M(b, x);
      }), M(l, f);
    };
    ot(h, (l) => {
      v(s) && l(d);
    });
  }
  M(t, c), rr();
}
var Af = Object.create, Ql = Object.defineProperty, Wf = Object.defineProperties, Rf = Object.getOwnPropertyDescriptor, jf = Object.getOwnPropertyDescriptors, Gn = Object.getOwnPropertySymbols, tc = Object.prototype.hasOwnProperty, ec = Object.prototype.propertyIsEnumerable, Lf = (t, e) => (e = Symbol[t]) ? e : Symbol.for("Symbol." + t), un = (t) => {
  throw TypeError(t);
}, qi = (t, e, r) => e in t ? Ql(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, Nf = (t, e) => {
  for (var r in e || (e = {})) tc.call(e, r) && qi(t, r, e[r]);
  if (Gn) for (var r of Gn(e)) ec.call(e, r) && qi(t, r, e[r]);
  return t;
}, Ff = (t, e) => Wf(t, jf(e)), Vf = (t, e) => {
  var r = {};
  for (var n in t) tc.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && Gn) for (var n of Gn(t)) e.indexOf(n) < 0 && ec.call(t, n) && (r[n] = t[n]);
  return r;
}, Xf = (t) => {
  var e;
  return [, , , Af((e = void 0) != null ? e : null)];
}, rc = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], zr = (t) => t !== void 0 && typeof t != "function" ? un("Function expected") : t, Yf = (t, e, r, n, i) => ({ kind: rc[t], name: e, metadata: n, addInitializer: (s) => r._ ? un("Already initialized") : i.push(zr(s || null)) }), Bf = (t, e) => qi(e, Lf("metadata"), t[3]), On = (t, e, r, n) => {
  for (var i = 0, s = t[e >> 1], o = s && s.length; i < o; i++) e & 1 ? s[i].call(r) : n = s[i].call(r, n);
  return n;
}, nc = (t, e, r, n, i, s) => {
  for (var o, a, c, h, d, l = e & 7, f = false, u = false, p = t.length + 1, b = rc[l + 5], x = t[p - 1] = [], w = t[p] || (t[p] = []), m = (i = i.prototype, Rf({ get [r]() {
    return Ar(this, s);
  }, set [r](_) {
    return $e(this, s, _);
  } }, r)), g = n.length - 1; g >= 0; g--) h = Yf(l, r, c = {}, t[3], w), h.static = f, h.private = u, d = h.access = { has: (_) => r in _ }, d.get = (_) => _[r], d.set = (_, y) => _[r] = y, a = (0, n[g])({ get: m.get, set: m.set }, h), c._ = 1, a === void 0 ? zr(a) && (m[b] = a) : typeof a != "object" || a === null ? un("Object expected") : (zr(o = a.get) && (m.get = o), zr(o = a.set) && (m.set = o), zr(o = a.init) && x.unshift(o));
  return m && Ql(i, r, m), i;
}, ic = (t, e, r) => e.has(t) || un("Cannot " + r), Ar = (t, e, r) => (ic(t, e, "read from private field"), e.get(t)), br = (t, e, r) => e.has(t) ? un("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), $e = (t, e, r, n) => (ic(t, e, "write to private field"), e.set(t, r), r);
function Ie(t) {
  return t instanceof Zs || t instanceof lc;
}
var Dn = 10, Hf = class extends $t {
  constructor(t) {
    super(t);
    const e = Nt(() => {
      const { dragOperation: n } = t;
      if (Kr(n.activatorEvent) && Ie(n.source) && n.status.initialized) {
        const i = t.registry.plugins.get(cn);
        if (i) return i.disable(), () => i.enable();
      }
    }), r = t.monitor.addEventListener("dragmove", (n, i) => {
      queueMicrotask(() => {
        if (this.disabled || n.defaultPrevented || !n.nativeEvent) return;
        const { dragOperation: s } = i;
        if (!Kr(n.nativeEvent) || !Ie(s.source) || !s.shape) return;
        const { actions: o, collisionObserver: a, registry: c } = i, { by: h } = n;
        if (!h) return;
        const d = Uf(h), { source: l, target: f } = s, { center: u } = s.shape.current, p = [], b = [];
        at(() => {
          for (const y of c.droppables) {
            const { id: A } = y;
            if (!y.accepts(l) || A === (f == null ? void 0 : f.id) && Ie(y) || !y.element) continue;
            let k = y.shape;
            const D = new Kt(y.element, { getBoundingClientRect: (C) => Hr(C, void 0, 0.2) });
            !D.height || !D.width || (d == "down" && u.y + Dn < D.center.y || d == "up" && u.y - Dn > D.center.y || d == "left" && u.x - Dn > D.center.x || d == "right" && u.x + Dn < D.center.x) && (p.push(y), y.shape = D, b.push(() => y.shape = k));
          }
        }), n.preventDefault(), a.disable();
        const x = a.computeCollisions(p, ju);
        at(() => b.forEach((y) => y()));
        const [w] = x;
        if (!w) return;
        const { id: m } = w, { index: g, group: _ } = l.sortable;
        o.setDropTarget(m).then(() => {
          const { source: y, target: A, shape: k } = s;
          if (!y || !Ie(y) || !k) return;
          const { index: D, group: C, target: I } = y.sortable, J = g !== D || _ !== C, lt = J ? I : A == null ? void 0 : A.element;
          if (!lt) return;
          wl(lt);
          const ht = new Kt(lt);
          if (!ht) return;
          const ct = le.delta(ht, le.from(k.current.boundingRectangle), y.alignment);
          o.move({ by: ct }), J ? o.setDropTarget(y.id).then(() => a.enable()) : a.enable();
        });
      });
    });
    this.destroy = () => {
      r(), e();
    };
  }
};
function Uf(t) {
  const { x: e, y: r } = t;
  if (e > 0) return "right";
  if (e < 0) return "left";
  if (r > 0) return "down";
  if (r < 0) return "up";
}
var Kf = Object.defineProperty, qf = Object.defineProperties, Gf = Object.getOwnPropertyDescriptors, To = Object.getOwnPropertySymbols, Zf = Object.prototype.hasOwnProperty, Jf = Object.prototype.propertyIsEnumerable, zo = (t, e, r) => e in t ? Kf(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r, Ao = (t, e) => {
  for (var r in e || (e = {})) Zf.call(e, r) && zo(t, r, e[r]);
  if (To) for (var r of To(e)) Jf.call(e, r) && zo(t, r, e[r]);
  return t;
}, Wo = (t, e) => qf(t, Gf(e));
function Qf(t, e, r) {
  if (e === r) return t;
  const n = t.slice();
  return n.splice(r, 0, n.splice(e, 1)[0]), n;
}
function th(t, e, r) {
  var n, i;
  const { source: s, target: o, canceled: a } = e.operation;
  if (!s || !o || a) return "preventDefault" in e && e.preventDefault(), t;
  const c = (g, _) => g === _ || typeof g == "object" && "id" in g && g.id === _;
  if (Array.isArray(t)) {
    const g = t.findIndex((y) => c(y, s.id)), _ = t.findIndex((y) => c(y, o.id));
    if (g === -1 || _ === -1) return t;
    if (!a && "index" in s && typeof s.index == "number") {
      const y = s.index;
      if (y !== g) return r(t, g, y);
    }
    return r(t, g, _);
  }
  const h = Object.entries(t);
  let d = -1, l, f = -1, u;
  for (const [g, _] of h) if (d === -1 && (d = _.findIndex((y) => c(y, s.id)), d !== -1 && (l = g)), f === -1 && (f = _.findIndex((y) => c(y, o.id)), f !== -1 && (u = g)), d !== -1 && f !== -1) break;
  if (!s.manager) return t;
  const { dragOperation: p } = s.manager, b = (i = (n = p.shape) == null ? void 0 : n.current.center) != null ? i : p.position.current;
  if (u == null && o.id in t) {
    const g = o.shape && b.y > o.shape.center.y ? t[o.id].length : 0;
    u = o.id, f = g;
  }
  if (l == null || u == null || l === u && d === f) return "preventDefault" in e && e.preventDefault(), t;
  if (l === u) return Wo(Ao({}, t), { [l]: r(t[l], d, f) });
  const w = o.shape && Math.round(b.y) > Math.round(o.shape.center.y) ? 1 : 0, m = t[l][d];
  return Wo(Ao({}, t), { [l]: [...t[l].slice(0, d), ...t[l].slice(d + 1)], [u]: [...t[u].slice(0, f + w), m, ...t[u].slice(f + w)] });
}
function eh(t, e) {
  return th(t, e, Qf);
}
var Ro = "__default__", rh = class extends $t {
  constructor(t) {
    super(t);
    const e = () => {
      const n = /* @__PURE__ */ new Map();
      for (const i of t.registry.droppables) if (i instanceof Zs) {
        const { sortable: s } = i, { group: o } = s;
        let a = n.get(o);
        a || (a = /* @__PURE__ */ new Set(), n.set(o, a)), a.add(s);
      }
      for (const [i, s] of n) n.set(i, new Set(En(s)));
      return n;
    }, r = [t.monitor.addEventListener("dragover", (n, i) => {
      if (this.disabled) return;
      const { dragOperation: s } = i, { source: o, target: a } = s;
      if (!Ie(o) || !Ie(a) || o.sortable === a.sortable) return;
      const c = e(), h = o.sortable.group === a.sortable.group, d = c.get(o.sortable.group), l = h ? d : c.get(a.sortable.group);
      !d || !l || queueMicrotask(() => {
        n.defaultPrevented || i.renderer.rendering.then(() => {
          var f, u, p;
          const b = e();
          for (const [I, J] of c.entries()) {
            const lt = Array.from(J).entries();
            for (const [ht, ct] of lt) if (ct.index !== ht || ct.group !== I || !((f = b.get(I)) != null && f.has(ct))) return;
          }
          const x = o.sortable.element, w = a.sortable.element;
          if (!w || !x || !h && a.id === o.sortable.group) return;
          const m = En(d), g = h ? m : En(l), _ = (u = o.sortable.group) != null ? u : Ro, y = (p = a.sortable.group) != null ? p : Ro, A = { [_]: m, [y]: g }, k = eh(A, n);
          if (A === k) return;
          const D = k[y].indexOf(o.sortable), C = k[y].indexOf(a.sortable);
          i.collisionObserver.disable(), jo(x, D, w, C), at(() => {
            for (const [I, J] of k[_].entries()) J.index = I;
            if (!h) for (const [I, J] of k[y].entries()) J.group = a.sortable.group, J.index = I;
          }), i.actions.setDropTarget(o.id).then(() => i.collisionObserver.enable());
        });
      });
    }), t.monitor.addEventListener("dragend", (n, i) => {
      if (!n.canceled) return;
      const { dragOperation: s } = i, { source: o } = s;
      Ie(o) && (o.sortable.initialIndex === o.sortable.index && o.sortable.initialGroup === o.sortable.group || queueMicrotask(() => {
        const a = e(), c = a.get(o.sortable.initialGroup);
        c && i.renderer.rendering.then(() => {
          for (const [u, p] of a.entries()) {
            const b = Array.from(p).entries();
            for (const [x, w] of b) if (w.index !== x || w.group !== u) return;
          }
          const h = En(c), d = o.sortable.element, l = h[o.sortable.initialIndex], f = l == null ? void 0 : l.element;
          !l || !f || !d || (jo(d, l.index, f, o.index), at(() => {
            for (const [u, p] of a.entries()) {
              const b = Array.from(p).values();
              for (const x of b) x.index = x.initialIndex, x.group = x.initialGroup;
            }
          }));
        });
      }));
    })];
    this.destroy = () => {
      for (const n of r) n();
    };
  }
};
function jo(t, e, r, n) {
  const i = n < e ? "afterend" : "beforebegin";
  r.insertAdjacentElement(i, t);
}
function nh(t, e) {
  return t.index - e.index;
}
function En(t) {
  return Array.from(t).sort(nh);
}
var ih = [Hf, rh], sc = { duration: 250, easing: "cubic-bezier(0.25, 1, 0.5, 1)", idle: false }, Pn = new bd(), oc, ac, me, qs, Wr, Rr, Gs, qe;
ac = [W], oc = [W];
var oi = class {
  constructor(t, e) {
    br(this, qs, On(me, 8, this)), On(me, 11, this), br(this, Wr), br(this, Rr), br(this, Gs, On(me, 12, this)), On(me, 15, this), br(this, qe), this.register = () => (at(() => {
      var l, f;
      (l = this.manager) == null || l.registry.register(this.droppable), (f = this.manager) == null || f.registry.register(this.draggable);
    }), () => this.unregister()), this.unregister = () => {
      at(() => {
        var l, f;
        (l = this.manager) == null || l.registry.unregister(this.droppable), (f = this.manager) == null || f.registry.unregister(this.draggable);
      });
    }, this.destroy = () => {
      at(() => {
        this.droppable.destroy(), this.draggable.destroy();
      });
    };
    var r = t, { effects: n = () => [], group: i, index: s, sensors: o, type: a, transition: c = sc, plugins: h = ih } = r, d = Vf(r, ["effects", "group", "index", "sensors", "type", "transition", "plugins"]);
    this.droppable = new Zs(d, e, this), this.draggable = new lc(Ff(Nf({}, d), { effects: () => [() => {
      var l, f, u;
      const p = (l = this.manager) == null ? void 0 : l.dragOperation.status;
      (p == null ? void 0 : p.initializing) && this.id === ((u = (f = this.manager) == null ? void 0 : f.dragOperation.source) == null ? void 0 : u.id) && Pn.clear(this.manager), (p == null ? void 0 : p.dragging) && Pn.set(this.manager, this.id, U(() => ({ initialIndex: this.index, initialGroup: this.group })));
    }, () => {
      const { index: l, group: f, manager: u } = this, p = Ar(this, Rr), b = Ar(this, Wr);
      (l !== p || f !== b) && ($e(this, Rr, l), $e(this, Wr, f), this.animate());
    }, () => {
      const { target: l } = this, { feedback: f, isDragSource: u } = this.draggable;
      f == "move" && u && (this.droppable.disabled = !l);
    }, () => {
      const { manager: l } = this;
      for (const f of h) l == null ? void 0 : l.registry.register(f);
    }, ...n()], type: a, sensors: o }), e, this), $e(this, qe, d.element), this.manager = e, this.index = s, $e(this, Rr, s), this.group = i, $e(this, Wr, i), this.type = a, this.transition = c;
  }
  get initialIndex() {
    var t, e;
    return (e = (t = Pn.get(this.manager, this.id)) == null ? void 0 : t.initialIndex) != null ? e : this.index;
  }
  get initialGroup() {
    var t, e;
    return (e = (t = Pn.get(this.manager, this.id)) == null ? void 0 : t.initialGroup) != null ? e : this.group;
  }
  animate() {
    U(() => {
      const { manager: t, transition: e } = this, { shape: r } = this.droppable;
      if (!t) return;
      const { idle: n } = t.dragOperation.status;
      !r || !e || n && !e.idle || t.renderer.rendering.then(() => {
        const { element: i } = this;
        if (!i) return;
        const s = this.refreshShape();
        if (!s) return;
        const o = { x: r.boundingRectangle.left - s.boundingRectangle.left, y: r.boundingRectangle.top - s.boundingRectangle.top }, { translate: a } = Jt(i), c = wo(i, a, false), h = wo(i, a);
        (o.x || o.y) && xl({ element: i, keyframes: { translate: [`${c.x + o.x}px ${c.y + o.y}px ${c.z}`, `${h.x}px ${h.y}px ${h.z}`] }, options: e }).then(() => {
          t.dragOperation.status.dragging || (this.droppable.shape = void 0);
        });
      });
    });
  }
  get manager() {
    return this.draggable.manager;
  }
  set manager(t) {
    at(() => {
      this.draggable.manager = t, this.droppable.manager = t;
    });
  }
  set element(t) {
    at(() => {
      const e = Ar(this, qe), r = this.droppable.element, n = this.draggable.element;
      (!r || r === e) && (this.droppable.element = t), (!n || n === e) && (this.draggable.element = t), $e(this, qe, t);
    });
  }
  get element() {
    var t, e;
    const r = Ar(this, qe);
    if (r) return (e = (t = zi.get(r)) != null ? t : r) != null ? e : this.droppable.element;
  }
  set target(t) {
    this.droppable.element = t;
  }
  get target() {
    return this.droppable.element;
  }
  set source(t) {
    this.draggable.element = t;
  }
  get source() {
    return this.draggable.element;
  }
  get disabled() {
    return this.draggable.disabled && this.droppable.disabled;
  }
  set feedback(t) {
    this.draggable.feedback = t;
  }
  set disabled(t) {
    at(() => {
      this.droppable.disabled = t, this.draggable.disabled = t;
    });
  }
  set data(t) {
    at(() => {
      this.droppable.data = t, this.draggable.data = t;
    });
  }
  set handle(t) {
    this.draggable.handle = t;
  }
  set id(t) {
    at(() => {
      this.droppable.id = t, this.draggable.id = t;
    });
  }
  get id() {
    return this.droppable.id;
  }
  set sensors(t) {
    this.draggable.sensors = t;
  }
  set modifiers(t) {
    this.draggable.modifiers = t;
  }
  set collisionPriority(t) {
    this.droppable.collisionPriority = t;
  }
  set collisionDetector(t) {
    this.droppable.collisionDetector = t ?? Sl;
  }
  set alignment(t) {
    this.draggable.alignment = t;
  }
  get alignment() {
    return this.draggable.alignment;
  }
  set type(t) {
    at(() => {
      this.droppable.type = t, this.draggable.type = t;
    });
  }
  get type() {
    return this.draggable.type;
  }
  set accept(t) {
    this.droppable.accept = t;
  }
  get accept() {
    return this.droppable.accept;
  }
  get isDropTarget() {
    return this.droppable.isDropTarget;
  }
  get isDragSource() {
    return this.draggable.isDragSource;
  }
  get isDragging() {
    return this.draggable.isDragging;
  }
  get isDropping() {
    return this.draggable.isDropping;
  }
  get status() {
    return this.draggable.status;
  }
  refreshShape() {
    return this.droppable.refreshShape();
  }
  accepts(t) {
    return this.droppable.accepts(t);
  }
};
me = Xf();
qs = /* @__PURE__ */ new WeakMap();
Wr = /* @__PURE__ */ new WeakMap();
Rr = /* @__PURE__ */ new WeakMap();
Gs = /* @__PURE__ */ new WeakMap();
qe = /* @__PURE__ */ new WeakMap();
nc(me, 4, "index", ac, oi, qs);
nc(me, 4, "group", oc, oi, Gs);
Bf(me, oi);
var lc = class extends dn {
  constructor(t, e, r) {
    super(t, e), this.sortable = r;
  }
  get index() {
    return this.sortable.index;
  }
}, Zs = class extends Us {
  constructor(t, e, r) {
    super(t, e), this.sortable = r;
  }
};
function sh(t) {
  const { accept: e, collisionDetector: r, collisionPriority: n, id: i, data: s, element: o, handle: a, index: c, group: h, disabled: d, feedback: l, modifiers: f, sensors: u, target: p, type: b } = t, x = L(() => ({ ...sc, ...Ui(t.transition) })), w = If((g) => new oi({ ...kf(t), transition: v(x), register: false }, g)), m = Zl(w);
  return Dt(i, (g) => w.id = g), tn.pre([Ki(h), Ki(c)], ([g, _]) => {
    at(() => {
      w.group = g, w.index = _;
    });
  }), Dt(b, (g) => w.type = g), Dt(e, (g) => w.accept = g, void 0, Te), Dt(s, (g) => {
    g && (w.data = g);
  }), Dt(c, () => {
    var _a2, _b;
    ((_a2 = w.manager) == null ? void 0 : _a2.dragOperation.status.idle) && ((_b = v(x)) == null ? void 0 : _b.idle) && w.refreshShape();
  }, tn.pre), _i(a, (g) => {
    w.handle = g;
  }), _i(o, (g) => {
    w.element = g;
  }), _i(p, (g) => {
    w.target = g;
  }), Dt(d, (g) => {
    w.disabled = g === true;
  }), Dt(u, (g) => {
    w.sensors = g;
  }), Dt(r, (g) => {
    w.collisionDetector = g;
  }), Dt(n, (g) => {
    w.collisionPriority = g;
  }), Dt(l, (g) => {
    w.feedback = g ?? "default";
  }), Dt(() => v(x), () => {
    w.transition = v(x);
  }, void 0, Te), Dt(f, (g) => {
    w.modifiers = g;
  }, void 0, Te), Dt(t.alignment, (g) => {
    w.alignment = g;
  }), { sortable: m, isDragging: Ce(() => m.isDragging), isDropping: Ce(() => m.isDropping), isDragSource: Ce(() => m.isDragSource), isDropTarget: Ce(() => m.isDropTarget), handleRef: kn(w, "handle"), ref: kn(w, "element"), sourceRef: kn(w, "source"), targetRef: kn(w, "target") };
}
var oh = tt('<div class="absolute inset-0 flex items-center justify-center"><div class="flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed border-orange-400 bg-orange-50/10"></div></div>'), ah = tt('<div class="sortable-card-wrapper relative h-full w-full select-none"><button><!></button> <!></div>');
function Lo(t, e) {
  er(e, true);
  let r = Zn(e, "isOverlay", 3, false), n = Qi(e, ["$$slots", "$$events", "$$legacy", "card", "isOverlay", "viewTransitionName"]);
  const { ref: i, isDragging: s, isDropping: o } = sh(n), a = Ho();
  let c = L(() => (s.current || o.current) && !r());
  const h = new Uo("(pointer: coarse) and (hover: none)");
  let d = Rt(0), l = Rt(0);
  const f = 10, u = L(() => h.current ? a.getTilt(f).tiltX : v(d)), p = L(() => h.current ? a.getTilt(f).tiltY : v(l));
  Gi(() => {
    if (h.current) return a.subscribeOrientation();
  });
  function b(k) {
    if (s.current || h.current) return;
    const C = k.currentTarget.getBoundingClientRect(), I = k.clientX - C.x, J = k.clientY - C.y, lt = I / C.width - 0.5, ht = J / C.height - 0.5, ct = Math.max(-1, Math.min(1, lt * 2)), ie = Math.max(-1, Math.min(1, ht * 2));
    V(d, ie * -f), V(l, ct * f);
  }
  function x() {
    h.current || (V(d, 0), V(l, 0));
  }
  var w = ah();
  let m;
  var g = z(w);
  g.__pointermove = b;
  var _ = z(g);
  Ko(_, { totalCards: 0, index: 0, progress: 0, direction: 1, get tiltX() {
    return v(u);
  }, get tiltY() {
    return v(p);
  }, isFlipped: false, shadow: true, class: "sortable-grid-card", get card() {
    return e.card;
  } }), T(g);
  var y = mt(g, 2);
  {
    var A = (k) => {
      var D = oh();
      M(k, D);
    };
    ot(y, (k) => {
      !r() && s.current && k(A);
    });
  }
  T(w), vc(w, () => i), st(() => {
    m = $n(w, "", m, { "view-transition-name": e.viewTransitionName ?? "none" }), Ge(g, 1, ts(["sortable-card-item relative h-full w-full overflow-visible rounded-md", { invisible: v(c) }]), "svelte-1bi1ocd");
  }), bi("pointerleave", g, x), M(t, w), rr();
}
Fo(["pointermove"]);
var lh = tt('<div class="sort-deck-item-wrapper @container relative scroll-mt-14 scroll-mb-8 transition svelte-2aira6"><div class="sort-deck-footer absolute bottom-0 left-0 -z-100 flex w-full items-end justify-start svelte-2aira6"><span class="-z-100 truncate bg-foreground px-2 py-1 text-center text-sm font-medium text-black"> </span></div> <div class="sort-deck-card-area z-10 border-2 border-dashed pb-5.5 svelte-2aira6"><!></div></div>'), ch = tt('<div class="overlay-card-container svelte-2aira6"><!></div>'), dh = tt('<div><div class="grid-wrapper scrollbar-none h-full w-full overflow-x-auto md:min-h-0 md:overflow-x-visible! md:overflow-y-auto md:pt-34 svelte-2aira6"><div class="sort-deck-grid grid w-fit gap-4 px-2.5 pt-4 pb-14 md:w-auto md:pr-[1ch] md:pb-4 md:pl-35 svelte-2aira6"></div></div></div> <!>', 1);
function uh(t, e) {
  er(e, true);
  let r = Zn(e, "minWidth", 3, "200px"), n = Rt(Mn(e.cards.map((c) => c.$isLoaded ? c == null ? void 0 : c.toJSON() : null)));
  const i = [Fl.configure({ activationConstraints: { distance: { value: 8 } } }), Ll];
  function s(c, h, d) {
    if (h === d) return c;
    const l = [...c], [f] = l.splice(h, 1);
    return l.splice(d, 0, f), l;
  }
  function o(c, h) {
    const { source: d, target: l } = h.dragOperation;
    if (!d || !l) return;
    const f = d.sortable, u = l.sortable;
    if (!f || !u || f.group !== "deck" || u.group !== "deck") return;
    const p = v(n).findIndex((x) => x.$jazz.id === d.id), b = v(n).findIndex((x) => x.$jazz.id === l.id);
    p === -1 || b === -1 || p !== b && V(n, s(v(n), p, b), true);
  }
  function a(c, h) {
    var _a2;
    (_a2 = e.onOrderChange) == null ? void 0 : _a2.call(e, v(n));
  }
  $f(t, { get sensors() {
    return i;
  }, onDragOver: o, onDragEnd: a, children: (c, h) => {
    var d = dh(), l = bt(d), f = z(l), u = z(f);
    let p;
    Bo(u, 23, () => v(n), (x) => x.$jazz.id, (x, w, m) => {
      const g = L(() => e.cards.find((ct) => ct.$jazz.id === v(w).$jazz.id)), _ = L(() => e.getViewTransitionName ? e.getViewTransitionName(v(w).$jazz.id) : void 0), y = L(() => v(n).length - v(m));
      var A = lh();
      let k;
      var D = z(A), C = z(D), I = z(C, true);
      T(C), T(D);
      var J = mt(D, 2), lt = z(J);
      {
        var ht = (ct) => {
          Lo(ct, { get card() {
            return v(g);
          }, get id() {
            return v(w).$jazz.id;
          }, index: () => v(m), group: "deck", data: { group: "deck" }, type: "card", get viewTransitionName() {
            return v(_);
          } });
        };
        ot(lt, (ct) => {
          var _a2;
          ((_a2 = v(g)) == null ? void 0 : _a2.$isLoaded) && ct(ht);
        });
      }
      T(J), T(A), st(() => {
        k = $n(A, "--grid-item-size: 100cqw;", k, { "z-index": v(y) }), Ot(I, v(m) + 1);
      }), M(x, A);
    }), T(u), T(f), T(l);
    var b = mt(l, 2);
    zf(b, { children: (w, m = Zi) => {
      const g = L(() => e.cards.find((D) => D.$jazz.id === m().id)), _ = L(() => {
        var _a2;
        return (_a2 = m().element) == null ? void 0 : _a2.getBoundingClientRect();
      });
      var y = Xt(), A = bt(y);
      {
        var k = (D) => {
          var C = ch();
          let I;
          var J = z(C);
          {
            var lt = (ht) => {
              Lo(ht, { get card() {
                return v(g);
              }, get id() {
                return v(g).$jazz.id;
              }, index: () => 0, isOverlay: true });
            };
            ot(J, (ht) => {
              v(g).$isLoaded && ht(lt);
            });
          }
          T(C), st(() => I = $n(C, "", I, { width: `${v(_).width ?? ""}px`, height: `${v(_).height ?? ""}px` })), M(D, C);
        };
        ot(A, (D) => {
          v(g) && v(_) && D(k);
        });
      }
      M(w, y);
    }, $$slots: { default: true } }), st(() => {
      Ge(l, 1, ts(["sort-deck-container flex h-full max-h-full flex-col items-center gap-3 overflow-hidden focus-visible:outline-0 md:overflow-x-visible", e.class]), "svelte-2aira6"), p = $n(u, "", p, { "--grid-min-size": r() });
    }), M(c, d);
  }, $$slots: { default: true } }), rr();
}
const fh = Oc({ name: eo().min(1, "Please enter a deck name."), description: eo() });
var hh = tt('<button class="pointer-events-auto absolute inset-0 z-10 h-full w-full cursor-pointer border-border text-black hover:border-2"> </button>'), ph = tt("<div><!></div>"), vh = tt('<div class="flex h-full w-full flex-col items-center justify-center text-center"><span class="text-sm text-gray-500"> </span></div>'), gh = tt("<!> <!> <!>", 1), mh = tt("<!> <!> <!>", 1), yh = tt("<!> <!>", 1), _h = tt('<button type="button" class="button-destructive flex-1"> </button>'), bh = tt('<form class="pointer-events-auto relative z-100 flex h-[calc(100%-3.375rem)] w-full flex-1 flex-col items-start justify-start pr-1 md:h-full md:gap-4 md:pt-4 md:pr-0"><!> <div class="flex w-full gap-2 md:flex-col"><!> <button type="submit" class="button flex-1"> </button></div></form>'), wh = tt('<div class="pointer-events-auto relative z-100 flex h-[calc(100%-3.375rem)] w-full flex-1 flex-col items-start justify-start gap-2 pr-1 md:h-full md:gap-4 md:pt-4 md:pr-0"><p class="text-base font-medium text-black"> </p> <p class="flex-1 text-sm font-medium text-black"> </p> <div class="flex w-full gap-2"><button class="button flex-1 rounded-md transition-colors"> </button> <button class="button-destructive flex-1 transition-colors"> </button></div></div>'), xh = tt('<div class="card-placeholder absolute inset-0 flex items-center justify-center rounded-lg border-2 border-dashed svelte-h7jc5e"><!></div>'), Sh = tt('<div class="card-wrapper h-full w-full svelte-h7jc5e"><!></div>'), kh = tt('<div class="flex h-full w-full items-center justify-center"><button><!></button></div>'), Oh = tt('<div><span class="truncate bg-foreground px-1 py-1 text-center text-sm font-medium text-black md:text-base"> </span></div>'), Dh = tt("<div><!></div>"), Eh = tt('<div class="deck-editor-container scrollbar-thin pointer-events-auto col-span-3 row-span-3 grid grid-cols-1 grid-rows-[220px_1fr] overflow-visible md:grid-cols-[150px_1fr_300px]"><div class="deck-preview-area pointer-events-none col-span-1 row-span-1 row-start-1 flex max-w-full flex-row-reverse items-end justify-end gap-x-0 overflow-visible px-3 pt-5 pb-0 md:col-start-3 md:row-span-3 md:flex-col md:items-center md:justify-start md:py-5 md:pr-2.5 md:pl-0 svelte-h7jc5e"><div class="deck-preview-wrapper pointer-events-none relative flex aspect-2/3 h-full flex-col items-center justify-center overflow-visible md:h-auto md:w-full"><div class="deck-preview pointer-events-none relative flex h-full w-full items-center justify-center overflow-visible rounded-lg border-2 border-dashed svelte-h7jc5e"><!> <!></div></div> <!></div>  <div class="relative z-0 col-span-1 row-span-1 row-start-2 overflow-visible md:col-span-2 md:row-span-3 md:row-start-1"><!> <!></div></div>');
function tp(t, e) {
  var _a2, _b, _c2;
  er(e, true);
  const r = new Uo("(min-width: 768px)"), n = L(() => r.current ? "200px" : "120px");
  let i = Rt(Mn(((_a2 = e.initialDeck) == null ? void 0 : _a2.name) ?? "")), s = Rt(Mn(((_b = e.initialDeck) == null ? void 0 : _b.description) ?? "")), o = Rt(void 0);
  const a = L(() => e.mode === "create" ? so() : Rc());
  let c = Rt(Mn(((_c2 = e.initialDeck) == null ? void 0 : _c2.cards.$isLoaded) ? e.initialDeck.cards.filter((S) => S.$jazz.loadingState !== "deleted").map((S) => S.$jazz.id) : [])), h = L(() => v(c).map((S) => e.cards.find((O) => O.$jazz.id === S)).filter(Boolean)), d = new kc(), l = new bc(), f = Rt(null), u = Rt("select");
  const p = Ho();
  gc(() => v(u), () => {
    v(u) === "select" ? p.title = e.initialDeck ? zc() : so() : p.title = Xc();
  });
  function b() {
    if (v(h).length !== 0) if (document.startViewTransition) {
      const S = document.createElement("style"), O = v(c).map((j) => `::view-transition-group(sort-card-${j}) { z-index: 1000; }`).join(`
`);
      S.textContent = O, document.head.appendChild(S), yr(() => {
        V(I, true);
      }), document.startViewTransition(async () => {
        yr(() => {
          V(u, "sort");
        });
      }).finished.then(() => {
        S.remove(), V(I, false);
      });
    } else V(u, "sort");
  }
  function x() {
    if (document.startViewTransition) {
      const S = document.createElement("style"), O = v(c).map((j) => `::view-transition-group(sort-card-${j}) { z-index: 1000; }`).join(`
`);
      S.textContent = O, document.head.appendChild(S), yr(() => {
        V(I, true);
      }), document.startViewTransition(async () => {
        yr(() => {
          V(u, "select");
        });
      }).finished.then(() => {
        S.remove(), V(I, false);
      }).catch(() => {
        S.remove(), V(I, false);
      });
    } else V(u, "select");
  }
  function w(S) {
    if (!(v(I) && v(u) === "select")) return `sort-card-${S}`;
  }
  function m(S) {
    V(c, S.map((O) => O.$jazz.id), true);
  }
  function g(S) {
    return v(c).includes(S);
  }
  function _(S) {
    const O = g(S);
    if (document.startViewTransition) {
      V(f, S, true), V(C, O ? "to-grid" : "to-deck", true);
      const N = document.createElement("style");
      N.textContent = `::view-transition-group(card-${S}) { z-index: 100; }`, document.head.appendChild(N), document.startViewTransition(() => {
        yr(() => {
          O ? V(c, v(c).filter((B) => B !== S), true) : V(c, [S, ...v(c)], true);
        });
      }).finished.then(() => {
        V(f, null), V(C, null), N.remove();
      });
    } else O ? V(c, v(c).filter((N) => N !== S), true) : V(c, [S, ...v(c)], true);
  }
  function y(S, O) {
    const j = O.currentTarget.getBoundingClientRect(), B = O.clientX - j.x, it = O.clientY - j.y, F = B / j.width - 0.5, K = it / j.height - 0.5, dt = Math.max(-1, Math.min(1, F * 2)), pt = Math.max(-1, Math.min(1, K * 2));
    d.set(S, { tiltX: pt * -10, tiltY: dt * 10 });
  }
  function A(S) {
    d.set(S, { tiltX: 0, tiltY: 0 });
  }
  function k(S) {
    return d.get(S) ?? { tiltX: 0, tiltY: 0 };
  }
  async function D(S) {
    S.preventDefault();
    const O = S.target, N = new FormData(O), j = { name: N.get("name"), description: N.get("description") }, B = fh.safeParse(j);
    if (!B.success) {
      V(o, B.error, true), console.log(v(o));
      return;
    }
    if (V(o, void 0), !p.me.current.$isLoaded) return;
    const it = v(c).map((F) => e.cards.find((K) => K.$jazz.id === F)).filter((F) => !!(F == null ? void 0 : F.$isLoaded));
    if (e.mode === "create") {
      const F = mc.group().create({ owner: p.me.current }).makePublic(), K = to.create({ name: B.data.name, description: B.data.description, cards: it, activity: yc.create([]), shareSecret: F.$jazz.createInvite("reader"), creator: p.me.current.profile }, { owner: F });
      p.me.current.profile.decks.$jazz.push(K), li("/decks");
    } else e.initialDeck && (e.initialDeck.$jazz.applyDiff({ name: B.data.name, description: B.data.description }), e.initialDeck.cards.$isLoaded && e.initialDeck.cards.$jazz.applyDiff(it), li("/decks"));
  }
  let C = Rt(null), I = Rt(false);
  function J(S) {
    if (v(I) && v(u) === "select") return `sort-card-${S.$jazz.id}`;
    if (v(u) !== "sort") return `card-${S.$jazz.id}`;
  }
  const lt = L(() => new Map(v(h).map((S) => [S.$jazz.id, S.$isLoaded ? J(S) : void 0])));
  function ht(S, O) {
    return v(lt).get(S.$jazz.id);
  }
  const ct = L(() => new Map(v(h).map((S) => [S.$jazz.id, w(S.$jazz.id)])));
  function ie(S) {
    return v(ct).get(S);
  }
  const be = L(() => v(i).trim().length > 0 && v(c).length > 0);
  let we = Rt(false);
  async function ai() {
    if (!e.initialDeck || !p.me.current.$isLoaded) return;
    (await p.me.current.profile.$jazz.ensureLoaded({ resolve: { cards: true, decks: true } })).decks.$jazz.remove((O) => O.$jazz.id === e.initialDeck.$jazz.id), await _c(to, e.initialDeck.$jazz.id, { resolve: { activity: { $each: true } } }), li("/decks");
  }
  var ur = Eh(), fr = z(ur), je = z(fr), hr = z(je), pr = z(hr);
  {
    var fn = (S) => {
      var O = hh();
      O.__click = x;
      var N = z(O, true);
      T(O), st((j) => Ot(N, j), [() => ed()]), M(S, O);
    };
    ot(pr, (S) => {
      v(u) === "sort" && S(fn);
    });
  }
  var Y = mt(pr, 2);
  {
    var vr = (S) => {
      var O = ph();
      let N;
      var j = z(O);
      Cc(j, { aligned: true, tiltRange: 8, get cards() {
        return v(h);
      }, getViewTransitionName: ht, get transitionKey() {
        return v(lt);
      }, onCardClick: b, class: "deck-preview-deck pointer-events-auto z-100" }), T(O), st(() => N = Ge(O, 1, "deck-preview-item pointer-events-auto relative h-full w-full overflow-visible svelte-h7jc5e", null, N, { invisible: v(u) === "sort" })), M(S, O);
    }, se = (S) => {
      var O = Xt(), N = bt(O);
      {
        var j = (B) => {
          var it = vh(), F = z(it), K = z(F, true);
          T(F), T(it), st((dt) => Ot(K, dt), [() => Jc()]), M(B, it);
        };
        ot(N, (B) => {
          v(u) === "select" && B(j);
        }, true);
      }
      M(S, O);
    };
    ot(Y, (S) => {
      v(h).length > 0 ? S(vr) : S(se, false);
    });
  }
  T(hr), T(je);
  var hn = mt(je, 2);
  {
    var pn = (S) => {
      var O = bh(), N = z(O);
      ke(N, () => Pc, (dt, pt) => {
        pt(dt, { class: "flex max-h-full w-full flex-1 flex-col gap-1 md:gap-2", children: (Ct, St) => {
          var P = yh(), H = bt(P);
          {
            let et = L(() => !!v(o));
            ke(H, () => ro, (G, Z) => {
              Z(G, { class: "flex min-w-0 gap-1", get "data-invalid"() {
                return v(et);
              }, children: (rt, Wt) => {
                var ut = gh(), kt = bt(ut);
                ke(kt, () => no, (gt, It) => {
                  It(gt, { class: "bg-foreground px-0.5 text-sm leading-snug font-normal text-black uppercase", children: (oe, gr) => {
                    _n();
                    var ae = wr();
                    st((Se) => Ot(ae, Se), [() => qc()]), M(oe, ae);
                  }, $$slots: { default: true } });
                });
                var Ft = mt(kt, 2);
                {
                  let gt = L(() => Hc());
                  Dc(Ft, { id: "deck-name", name: "name", type: "text", get placeholder() {
                    return v(gt);
                  }, class: "text-base text-black md:text-lg", get value() {
                    return v(i);
                  }, set value(It) {
                    V(i, It, true);
                  } });
                }
                var Ne = mt(Ft, 2);
                {
                  var Fe = (gt) => {
                    var It = Xt(), oe = bt(It);
                    ke(oe, () => oo, (gr, ae) => {
                      ae(gr, { children: (Se, cc) => {
                        _n();
                        var mr = wr();
                        st(() => Ot(mr, v(o).name)), M(Se, mr);
                      }, $$slots: { default: true } });
                    }), M(gt, It);
                  };
                  ot(Ne, (gt) => {
                    v(o) && gt(Fe);
                  });
                }
                M(rt, ut);
              }, $$slots: { default: true } });
            });
          }
          var Q = mt(H, 2);
          {
            let et = L(() => {
              var _a3;
              return !!((_a3 = v(o)) == null ? void 0 : _a3.message);
            });
            ke(Q, () => ro, (G, Z) => {
              Z(G, { class: "relative flex min-w-0 flex-1 gap-1", get "data-invalid"() {
                return v(et);
              }, children: (rt, Wt) => {
                var ut = mh(), kt = bt(ut);
                ke(kt, () => no, (gt, It) => {
                  It(gt, { class: "bg-foreground px-0.5 text-sm leading-snug font-normal text-black uppercase", children: (oe, gr) => {
                    _n();
                    var ae = wr();
                    st((Se) => Ot(ae, Se), [() => wc()]), M(oe, ae);
                  }, $$slots: { default: true } });
                });
                var Ft = mt(kt, 2);
                {
                  let gt = L(() => Nc());
                  Ec(Ft, { id: "deck-description", name: "description", get placeholder() {
                    return v(gt);
                  }, class: "max-h-full max-w-full flex-1 resize-none overflow-y-auto pt-1 text-sm text-black md:min-h-20 md:text-base", get value() {
                    return v(s);
                  }, set value(It) {
                    V(s, It, true);
                  } });
                }
                var Ne = mt(Ft, 2);
                {
                  var Fe = (gt) => {
                    var It = Xt(), oe = bt(It);
                    ke(oe, () => oo, (gr, ae) => {
                      ae(gr, { children: (Se, cc) => {
                        _n();
                        var mr = wr();
                        st(() => {
                          var _a3;
                          return Ot(mr, (_a3 = v(o)) == null ? void 0 : _a3.message);
                        }), M(Se, mr);
                      }, $$slots: { default: true } });
                    }), M(gt, It);
                  };
                  ot(Ne, (gt) => {
                    v(o) && gt(Fe);
                  });
                }
                M(rt, ut);
              }, $$slots: { default: true } });
            });
          }
          M(Ct, P);
        }, $$slots: { default: true } });
      });
      var j = mt(N, 2), B = z(j);
      {
        var it = (dt) => {
          var pt = _h();
          pt.__click = (St) => {
            St.preventDefault(), V(we, true);
          };
          var Ct = z(pt, true);
          T(pt), st((St) => Ot(Ct, St), [() => io()]), M(dt, pt);
        };
        ot(B, (dt) => {
          e.mode === "edit" && dt(it);
        });
      }
      var F = mt(B, 2), K = z(F, true);
      T(F), T(j), T(O), st(() => {
        F.disabled = !v(be), Ot(K, `${v(a)} [${v(h).length}]`);
      }), bi("submit", O, D), M(S, O);
    }, vn = (S) => {
      var O = wh(), N = z(O), j = z(N, true);
      T(N);
      var B = mt(N, 2), it = z(B, true);
      T(B);
      var F = mt(B, 2), K = z(F);
      K.__click = (St) => {
        St.preventDefault(), V(we, false);
      };
      var dt = z(K, true);
      T(K);
      var pt = mt(K, 2);
      pt.__click = ai;
      var Ct = z(pt, true);
      T(pt), T(F), T(O), st((St, P, H, Q) => {
        Ot(j, St), Ot(it, P), Ot(dt, H), Ot(Ct, Q);
      }, [() => xc(), () => Mc(), () => Sc(), () => io()]), M(S, O);
    };
    ot(hn, (S) => {
      v(we) ? S(vn, false) : S(pn);
    });
  }
  T(fr);
  var Le = mt(fr, 2), xe = z(Le);
  {
    var gn = (S) => {
      Ic(S, { get items() {
        return e.cards;
      }, searchProperty: "name", searchPlaceholder: "Search cards...", emptyTitle: "No cards found", onSelect: (j) => {
        _(j.$jazz.id);
      }, emptyDescription: "Try a different search term", get minWidth() {
        return v(n);
      }, class: "h-full w-full md:overflow-x-hidden! md:pl-35", children: (j, B) => {
        let it = () => B == null ? void 0 : B().item, F = () => B == null ? void 0 : B().highlighted;
        const K = L(() => it().$jazz.id), dt = L(() => k(v(K))), pt = L(() => g(v(K)));
        var Ct = kh(), St = z(Ct);
        let P;
        St.__pointermove = (G) => y(v(K), G);
        var H = z(St);
        {
          var Q = (G) => {
            var Z = xh(), rt = z(Z);
            $c(rt, { class: "size-15 text-border" }), T(Z), M(G, Z);
          }, et = (G) => {
            var Z = Sh(), rt = z(Z);
            {
              let Wt = L(() => l.has(v(K))), ut = L(() => `card-${v(K)}`);
              Ko(rt, { totalCards: 0, index: 0, progress: 0, direction: 1, tiltRange: 8, get tiltX() {
                return v(dt).tiltX;
              }, get tiltY() {
                return v(dt).tiltY;
              }, get isFlipped() {
                return v(Wt);
              }, shadow: true, class: "card-grid-card", get card() {
                return it();
              }, get viewTransitionName() {
                return v(ut);
              } });
            }
            T(Z), M(G, Z);
          };
          ot(H, (G) => {
            v(pt) ? G(Q) : G(et, false);
          });
        }
        T(St), T(Ct), st(() => P = Ge(St, 1, "card-grid-item relative h-full w-full overflow-visible rounded-md transition-all focus-visible:outline-none! svelte-h7jc5e", null, P, { "ring-2": F(), "ring-accent-500": F() })), bi("pointerleave", St, () => A(v(K))), M(j, Ct);
      }, footer: (j, B) => {
        let it = () => B == null ? void 0 : B().item;
        var F = Oh(), K = z(F), dt = z(K, true);
        T(K), T(F), st((pt, Ct) => {
          Qs(F, "data-selected", pt), Ge(F, 1, Ct, "svelte-h7jc5e"), Ot(dt, it().name);
        }, [() => g(it().$jazz.id), () => ts(Yo("deck-name-area transition-300 absolute bottom-0 left-0 z-100 flex w-full items-end justify-start opacity-0 data-[selected=true]:opacity-100"))]), M(j, F);
      }, $$slots: { default: true, footer: true } });
    };
    ot(xe, (S) => {
      v(u) === "select" && S(gn);
    });
  }
  var mn = mt(xe, 2);
  {
    var yn = (S) => {
      var O = Dh();
      let N;
      var j = z(O);
      uh(j, { get cards() {
        return v(h);
      }, onOrderChange: m, getViewTransitionName: ie, get minWidth() {
        return v(n);
      }, class: "pointer-events-auto z-100 h-full w-full md:overflow-x-visible" }), T(O), st(() => N = Ge(O, 1, "sort-grid-container h-full w-full md:overflow-x-visible svelte-h7jc5e", null, N, { invisible: v(u) !== "sort" })), M(S, O);
    };
    ot(mn, (S) => {
      (v(u) === "sort" || v(I)) && S(yn);
    });
  }
  T(Le), T(ur), st(() => Qs(Le, "data-mode", v(u))), M(t, ur), rr();
}
Fo(["click", "pointermove"]);
export {
  tp as D
};
