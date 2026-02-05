var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var _t2, _e2, _r2, _s2, _As_instances, n_fn, a_fn, _t3, _e3, _r3, _s3;
import { _ as it, bb as oe, P as je, g as Z, Z as et, bc as gt, bk as Me, t as Gt, b as $t, a5 as Xe, X as Ve, p as Ue, u as De, f as Ge, d as It, s as $e, r as Tt, c as We } from "./Cerututf.js";
import "./DsnmJJEf.js";
import { i as Ye } from "./DIL41Api.js";
import { s as Wt, d as Yt, w as Ke, f as Ze, c as Qe } from "./CD9opEPd.js";
import { b as Nt } from "./IOctRI-n.js";
function Je(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function tr(r) {
  if (Object.prototype.hasOwnProperty.call(r, "__esModule")) return r;
  var e = r.default;
  if (typeof e == "function") {
    var t = function s() {
      var a = false;
      try {
        a = this instanceof s;
      } catch {
      }
      return a ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: true }), Object.keys(r).forEach(function(s) {
    var a = Object.getOwnPropertyDescriptor(r, s);
    Object.defineProperty(t, s, a.get ? a : { enumerable: true, get: function() {
      return r[s];
    } });
  }), t;
}
const _As = class _As extends Map {
  constructor(e) {
    super();
    __privateAdd(this, _As_instances);
    __privateAdd(this, _t2, /* @__PURE__ */ new Map());
    __privateAdd(this, _e2, it(0));
    __privateAdd(this, _r2, it(0));
    __privateAdd(this, _s2, oe || -1);
    if (e) {
      for (var [t, s] of e) super.set(t, s);
      __privateGet(this, _r2).v = super.size;
    }
  }
  has(e) {
    var t = __privateGet(this, _t2), s = t.get(e);
    if (s === void 0) {
      var a = super.get(e);
      if (a !== void 0) s = __privateMethod(this, _As_instances, n_fn).call(this, 0), t.set(e, s);
      else return Z(__privateGet(this, _e2)), false;
    }
    return Z(s), true;
  }
  forEach(e, t) {
    __privateMethod(this, _As_instances, a_fn).call(this), super.forEach(e, t);
  }
  get(e) {
    var t = __privateGet(this, _t2), s = t.get(e);
    if (s === void 0) {
      var a = super.get(e);
      if (a !== void 0) s = __privateMethod(this, _As_instances, n_fn).call(this, 0), t.set(e, s);
      else {
        Z(__privateGet(this, _e2));
        return;
      }
    }
    return Z(s), super.get(e);
  }
  set(e, t) {
    var _a;
    var s = __privateGet(this, _t2), a = s.get(e), o = super.get(e), l = super.set(e, t), i = __privateGet(this, _e2);
    if (a === void 0) a = __privateMethod(this, _As_instances, n_fn).call(this, 0), s.set(e, a), et(__privateGet(this, _r2), super.size), gt(i);
    else if (o !== t) {
      gt(a);
      var n = i.reactions === null ? null : new Set(i.reactions), f = n === null || !((_a = a.reactions) == null ? void 0 : _a.every((h) => n.has(h)));
      f && gt(i);
    }
    return l;
  }
  delete(e) {
    var t = __privateGet(this, _t2), s = t.get(e), a = super.delete(e);
    return s !== void 0 && (t.delete(e), et(__privateGet(this, _r2), super.size), et(s, -1), gt(__privateGet(this, _e2))), a;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = __privateGet(this, _t2);
      et(__privateGet(this, _r2), 0);
      for (var t of e.values()) et(t, -1);
      gt(__privateGet(this, _e2)), e.clear();
    }
  }
  keys() {
    return Z(__privateGet(this, _e2)), super.keys();
  }
  values() {
    return __privateMethod(this, _As_instances, a_fn).call(this), super.values();
  }
  entries() {
    return __privateMethod(this, _As_instances, a_fn).call(this), super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    return Z(__privateGet(this, _r2)), super.size;
  }
};
_t2 = new WeakMap();
_e2 = new WeakMap();
_r2 = new WeakMap();
_s2 = new WeakMap();
_As_instances = new WeakSet();
n_fn = function(e) {
  return oe === __privateGet(this, _s2) ? it(e) : je(e);
};
a_fn = function() {
  Z(__privateGet(this, _e2));
  var e = __privateGet(this, _t2);
  if (__privateGet(this, _r2).v !== e.size) {
    for (var t of __superGet(_As.prototype, this, "keys").call(this)) if (!e.has(t)) {
      var s = __privateMethod(this, _As_instances, n_fn).call(this, 0);
      e.set(t, s);
    }
  }
  for ([, s] of __privateGet(this, _t2)) Z(s);
};
let As = _As;
var er = Me('<svg width="12px" height="12px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g fill="none" class="nc-icon-wrapper" stroke-linejoin="miter" stroke-linecap="butt"><path d="M3 7H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 11H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 15H3.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M3 19H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 23H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 27H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 7H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 11H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 15H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 19H7.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 23H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 27H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 7H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 11H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 15H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 19H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 23H11.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 27H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 7H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 11H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 15H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 19H15.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 23H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 27H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 7H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 11H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 15H19.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 19H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 23H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 27H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 11H23.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 3H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 3H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 3H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 3H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 3H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 3H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 7H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 3H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 15H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 19H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 23H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 27H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 27H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 7H27.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 11H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 15H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 19H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 23H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path></g></svg>');
function rr(r, e) {
  var t = er();
  Gt(() => Wt(t, 0, Yt(e.class))), $t(r, t);
}
var sr = Me('<svg width="12px" height="12px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g fill="none" class="nc-icon-wrapper" stroke-linejoin="miter" stroke-linecap="butt"><path d="M23 2.995L23 3.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 2.995L19 3.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 2.995L15 3.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 2.995L11 3.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 2.995L7 3.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 2.995L3 3.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 6.995L23 7.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 6.995L19 7.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 6.995L15 7.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 6.995L7 7.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M3 6.995L3 7.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 10.995L23 11.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 10.995L19 11.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 14.985L19 14.995" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 10.995L15 11.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 10.995L11 11.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 6.995L11 7.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M3 10.995L3 11.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 14.995L23 15.005" stroke="rgba(197, 216, 253, 0.5215686274509804)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M23 18.985L23 18.995" stroke="rgba(197, 216, 253, 0.5215686274509804)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M15 14.995L15 15.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 14.995L7 15.005" stroke="rgba(197, 216, 253, 0.5215686274509804)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M7 10.995L7 11.005" stroke="rgba(197, 216, 253, 0.5215686274509804)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M11 14.995L11 15.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M3 14.995L3 15.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 18.995L11 19.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 18.995L15 19.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 18.995L19 19.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 18.995L7 19.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 18.995L3 19.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 22.995L23 23.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 6.995L27 7.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 2.995L27 3.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 10.995L27 11.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 14.995L27 15.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 18.995L27 19.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 22.995L27 23.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 26.995L27 27.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 22.995L15 23.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 22.995L19 23.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 22.995L11 23.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 22.995L7 23.005" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M3 26.995L3 27.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 22.995L3 23.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 26.995L23 27.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 26.995L19 27.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 26.995L15 27.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 26.995L11 27.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 26.995L7 27.005" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path></g></svg>');
function nr(r, e) {
  var t = sr();
  Gt(() => Wt(t, 0, Yt(e.class))), $t(r, t);
}
const Kt = (r, e, t) => t > e ? e : t < r ? r : t;
let ar = () => {
};
const or = {}, ir = (r) => r, cr = (r, e) => (t) => e(r(t)), ve = (...r) => r.reduce(cr), lr = (r, e, t) => {
  const s = e - r;
  return s === 0 ? 1 : (t - r) / s;
}, xe = (r) => (e) => typeof e == "string" && e.startsWith(r), Es = xe("--"), ur = xe("var(--"), fr = (r) => ur(r) ? hr.test(r.split("/*")[0].trim()) : false, hr = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function _s(r) {
  return typeof r != "string" ? false : r.split("/*")[0].includes("var(--");
}
const Zt = { test: (r) => typeof r == "number", parse: parseFloat, transform: (r) => r }, ye = { ...Zt, transform: (r) => Kt(0, 1, r) }, Ls = { ...Zt, default: 1 }, mt = (r) => Math.round(r * 1e5) / 1e5, qe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function dr(r) {
  return r == null;
}
const pr = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Qt = (r, e) => (t) => !!(typeof t == "string" && pr.test(t) && t.startsWith(r) || e && !dr(t) && Object.prototype.hasOwnProperty.call(t, e)), ze = (r, e, t) => (s) => {
  if (typeof s != "string") return s;
  const [a, o, l, i] = s.match(qe);
  return { [r]: parseFloat(a), [e]: parseFloat(o), [t]: parseFloat(l), alpha: i !== void 0 ? parseFloat(i) : 1 };
}, kr = (r) => Kt(0, 255, r), Bt = { ...Zt, transform: (r) => Math.round(kr(r)) }, lt = { test: Qt("rgb", "red"), parse: ze("red", "green", "blue"), transform: ({ red: r, green: e, blue: t, alpha: s = 1 }) => "rgba(" + Bt.transform(r) + ", " + Bt.transform(e) + ", " + Bt.transform(t) + ", " + mt(ye.transform(s)) + ")" };
function gr(r) {
  let e = "", t = "", s = "", a = "";
  return r.length > 5 ? (e = r.substring(1, 3), t = r.substring(3, 5), s = r.substring(5, 7), a = r.substring(7, 9)) : (e = r.substring(1, 2), t = r.substring(2, 3), s = r.substring(3, 4), a = r.substring(4, 5), e += e, t += t, s += s, a += a), { red: parseInt(e, 16), green: parseInt(t, 16), blue: parseInt(s, 16), alpha: a ? parseInt(a, 16) / 255 : 1 };
}
const Xt = { test: Qt("#"), parse: gr, transform: lt.transform }, bt = (r) => ({ test: (e) => typeof e == "string" && e.endsWith(r) && e.split(" ").length === 1, parse: parseFloat, transform: (e) => `${e}${r}` }), Is = bt("deg"), wt = bt("%"), Ts = bt("px"), Ns = bt("vh"), Bs = bt("vw"), Hs = { ...wt, parse: (r) => wt.parse(r) / 100, transform: (r) => wt.transform(r * 100) }, pt = { test: Qt("hsl", "hue"), parse: ze("hue", "saturation", "lightness"), transform: ({ hue: r, saturation: e, lightness: t, alpha: s = 1 }) => "hsla(" + Math.round(r) + ", " + wt.transform(mt(e)) + ", " + wt.transform(mt(t)) + ", " + mt(ye.transform(s)) + ")" }, at = { test: (r) => lt.test(r) || Xt.test(r) || pt.test(r), parse: (r) => lt.test(r) ? lt.parse(r) : pt.test(r) ? pt.parse(r) : Xt.parse(r), transform: (r) => typeof r == "string" ? r : r.hasOwnProperty("red") ? lt.transform(r) : pt.transform(r), getAnimatableNone: (r) => {
  const e = at.parse(r);
  return e.alpha = 0, at.transform(e);
} }, mr = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function wr(r) {
  var _a, _b;
  return isNaN(r) && typeof r == "string" && (((_a = r.match(qe)) == null ? void 0 : _a.length) || 0) + (((_b = r.match(mr)) == null ? void 0 : _b.length) || 0) > 0;
}
const Se = "number", Ce = "color", br = "var", Mr = "var(", ie = "${}", vr = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function _t(r) {
  const e = r.toString(), t = [], s = { color: [], number: [], var: [] }, a = [];
  let o = 0;
  const i = e.replace(vr, (n) => (at.test(n) ? (s.color.push(o), a.push(Ce), t.push(at.parse(n))) : n.startsWith(Mr) ? (s.var.push(o), a.push(br), t.push(n)) : (s.number.push(o), a.push(Se), t.push(parseFloat(n))), ++o, ie)).split(ie);
  return { values: t, split: i, indexes: s, types: a };
}
function Pe(r) {
  return _t(r).values;
}
function Re(r) {
  const { split: e, types: t } = _t(r), s = e.length;
  return (a) => {
    let o = "";
    for (let l = 0; l < s; l++) if (o += e[l], a[l] !== void 0) {
      const i = t[l];
      i === Se ? o += mt(a[l]) : i === Ce ? o += at.transform(a[l]) : o += a[l];
    }
    return o;
  };
}
const xr = (r) => typeof r == "number" ? 0 : at.test(r) ? at.getAnimatableNone(r) : r;
function yr(r) {
  const e = Pe(r);
  return Re(r)(e.map(xr));
}
const qr = { test: wr, parse: Pe, createTransformer: Re, getAnimatableNone: yr };
function Ht(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * (2 / 3 - t) * 6 : r;
}
function zr({ hue: r, saturation: e, lightness: t, alpha: s }) {
  r /= 360, e /= 100, t /= 100;
  let a = 0, o = 0, l = 0;
  if (!e) a = o = l = t;
  else {
    const i = t < 0.5 ? t * (1 + e) : t + e - t * e, n = 2 * t - i;
    a = Ht(n, i, r + 1 / 3), o = Ht(n, i, r), l = Ht(n, i, r - 1 / 3);
  }
  return { red: Math.round(a * 255), green: Math.round(o * 255), blue: Math.round(l * 255), alpha: s };
}
function Lt(r, e) {
  return (t) => t > 0 ? e : r;
}
const Jt = (r, e, t) => r + (e - r) * t, Ot = (r, e, t) => {
  const s = r * r, a = t * (e * e - s) + s;
  return a < 0 ? 0 : Math.sqrt(a);
}, Sr = [Xt, lt, pt], Cr = (r) => Sr.find((e) => e.test(r));
function ce(r) {
  const e = Cr(r);
  if (!e) return false;
  let t = e.parse(r);
  return e === pt && (t = zr(t)), t;
}
const le = (r, e) => {
  const t = ce(r), s = ce(e);
  if (!t || !s) return Lt(r, e);
  const a = { ...t };
  return (o) => (a.red = Ot(t.red, s.red, o), a.green = Ot(t.green, s.green, o), a.blue = Ot(t.blue, s.blue, o), a.alpha = Jt(t.alpha, s.alpha, o), lt.transform(a));
}, Vt = /* @__PURE__ */ new Set(["none", "hidden"]);
function Pr(r, e) {
  return Vt.has(r) ? (t) => t <= 0 ? r : e : (t) => t >= 1 ? e : r;
}
function Rr(r, e) {
  return (t) => Jt(r, e, t);
}
function te(r) {
  return typeof r == "number" ? Rr : typeof r == "string" ? fr(r) ? Lt : at.test(r) ? le : _r : Array.isArray(r) ? Ae : typeof r == "object" ? at.test(r) ? le : Ar : Lt;
}
function Ae(r, e) {
  const t = [...r], s = t.length, a = r.map((o, l) => te(o)(o, e[l]));
  return (o) => {
    for (let l = 0; l < s; l++) t[l] = a[l](o);
    return t;
  };
}
function Ar(r, e) {
  const t = { ...r, ...e }, s = {};
  for (const a in t) r[a] !== void 0 && e[a] !== void 0 && (s[a] = te(r[a])(r[a], e[a]));
  return (a) => {
    for (const o in s) t[o] = s[o](a);
    return t;
  };
}
function Er(r, e) {
  const t = [], s = { color: 0, var: 0, number: 0 };
  for (let a = 0; a < e.values.length; a++) {
    const o = e.types[a], l = r.indexes[o][s[o]], i = r.values[l] ?? 0;
    t[a] = i, s[o]++;
  }
  return t;
}
const _r = (r, e) => {
  const t = qr.createTransformer(e), s = _t(r), a = _t(e);
  return s.indexes.var.length === a.indexes.var.length && s.indexes.color.length === a.indexes.color.length && s.indexes.number.length >= a.indexes.number.length ? Vt.has(r) && !a.values.length || Vt.has(e) && !s.values.length ? Pr(r, e) : ve(Ae(Er(s, a), a.values), t) : Lt(r, e);
};
function Lr(r, e, t) {
  return typeof r == "number" && typeof e == "number" && typeof t == "number" ? Jt(r, e, t) : te(r)(r, e);
}
function Ir(r, e, t) {
  const s = [], a = t || or.mix || Lr, o = r.length - 1;
  for (let l = 0; l < o; l++) {
    let i = a(r[l], r[l + 1]);
    if (e) {
      const n = Array.isArray(e) ? e[l] || ir : e;
      i = ve(n, i);
    }
    s.push(i);
  }
  return s;
}
function Os(r, e, { clamp: t = true, ease: s, mixer: a } = {}) {
  const o = r.length;
  if (ar(o === e.length), o === 1) return () => e[0];
  if (o === 2 && e[0] === e[1]) return () => e[1];
  const l = r[0] === r[1];
  r[0] > r[o - 1] && (r = [...r].reverse(), e = [...e].reverse());
  const i = Ir(e, s, a), n = i.length, f = (h) => {
    if (l && h < r[0]) return e[0];
    let c = 0;
    if (n > 1) for (; c < r.length - 2 && !(h < r[c + 1]); c++) ;
    const u = lr(r[c], r[c + 1], h);
    return i[c](u);
  };
  return t ? (h) => f(Kt(r[0], r[o - 1], h)) : f;
}
var Q = ((r) => (r[r.Border = -1] = "Border", r[r.Data = 0] = "Data", r[r.Function = 1] = "Function", r[r.Position = 2] = "Position", r[r.Timing = 3] = "Timing", r[r.Alignment = 4] = "Alignment", r))(Q || {}), Tr = Object.defineProperty, Nr = (r, e, t) => e in r ? Tr(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, xt = (r, e, t) => (Nr(r, typeof e != "symbol" ? e + "" : e, t), t);
const Br = [0, 1], Ee = [1, 0], _e = [2, 3], Le = [3, 2], Hr = { L: Br, M: Ee, Q: _e, H: Le }, Or = /^[0-9]*$/, Fr = /^[A-Z0-9 $%*+.\/:-]*$/, Ft = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", ee = 1, re = 40, ue = 3, jr = 3, yt = 40, Xr = 10, Ie = [[-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]], Te = [[-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25], [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]];
class Vr {
  constructor(e, t, s, a) {
    if (this.version = e, this.ecc = t, xt(this, "size"), xt(this, "mask"), xt(this, "modules", []), xt(this, "types", []), e < ee || e > re) throw new RangeError("Version value out of range");
    if (a < -1 || a > 7) throw new RangeError("Mask value out of range");
    this.size = e * 4 + 17;
    const o = Array.from({ length: this.size }, () => false);
    for (let i = 0; i < this.size; i++) this.modules.push(o.slice()), this.types.push(o.map(() => 0));
    this.drawFunctionPatterns();
    const l = this.addEccAndInterleave(s);
    if (this.drawCodewords(l), a === -1) {
      let i = 1e9;
      for (let n = 0; n < 8; n++) {
        this.applyMask(n), this.drawFormatBits(n);
        const f = this.getPenaltyScore();
        f < i && (a = n, i = f), this.applyMask(n);
      }
    }
    this.mask = a, this.applyMask(a), this.drawFormatBits(a);
  }
  getModule(e, t) {
    return e >= 0 && e < this.size && t >= 0 && t < this.size && this.modules[t][e];
  }
  drawFunctionPatterns() {
    for (let s = 0; s < this.size; s++) this.setFunctionModule(6, s, s % 2 === 0, Q.Timing), this.setFunctionModule(s, 6, s % 2 === 0, Q.Timing);
    this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
    const e = this.getAlignmentPatternPositions(), t = e.length;
    for (let s = 0; s < t; s++) for (let a = 0; a < t; a++) s === 0 && a === 0 || s === 0 && a === t - 1 || s === t - 1 && a === 0 || this.drawAlignmentPattern(e[s], e[a]);
    this.drawFormatBits(0), this.drawVersion();
  }
  drawFormatBits(e) {
    const t = this.ecc[1] << 3 | e;
    let s = t;
    for (let o = 0; o < 10; o++) s = s << 1 ^ (s >>> 9) * 1335;
    const a = (t << 10 | s) ^ 21522;
    for (let o = 0; o <= 5; o++) this.setFunctionModule(8, o, st(a, o));
    this.setFunctionModule(8, 7, st(a, 6)), this.setFunctionModule(8, 8, st(a, 7)), this.setFunctionModule(7, 8, st(a, 8));
    for (let o = 9; o < 15; o++) this.setFunctionModule(14 - o, 8, st(a, o));
    for (let o = 0; o < 8; o++) this.setFunctionModule(this.size - 1 - o, 8, st(a, o));
    for (let o = 8; o < 15; o++) this.setFunctionModule(8, this.size - 15 + o, st(a, o));
    this.setFunctionModule(8, this.size - 8, true);
  }
  drawVersion() {
    if (this.version < 7) return;
    let e = this.version;
    for (let s = 0; s < 12; s++) e = e << 1 ^ (e >>> 11) * 7973;
    const t = this.version << 12 | e;
    for (let s = 0; s < 18; s++) {
      const a = st(t, s), o = this.size - 11 + s % 3, l = Math.floor(s / 3);
      this.setFunctionModule(o, l, a), this.setFunctionModule(l, o, a);
    }
  }
  drawFinderPattern(e, t) {
    for (let s = -4; s <= 4; s++) for (let a = -4; a <= 4; a++) {
      const o = Math.max(Math.abs(a), Math.abs(s)), l = e + a, i = t + s;
      l >= 0 && l < this.size && i >= 0 && i < this.size && this.setFunctionModule(l, i, o !== 2 && o !== 4, Q.Position);
    }
  }
  drawAlignmentPattern(e, t) {
    for (let s = -2; s <= 2; s++) for (let a = -2; a <= 2; a++) this.setFunctionModule(e + a, t + s, Math.max(Math.abs(a), Math.abs(s)) !== 1, Q.Alignment);
  }
  setFunctionModule(e, t, s, a = Q.Function) {
    this.modules[t][e] = s, this.types[t][e] = a;
  }
  addEccAndInterleave(e) {
    const t = this.version, s = this.ecc;
    if (e.length !== qt(t, s)) throw new RangeError("Invalid argument");
    const a = Te[s[0]][t], o = Ie[s[0]][t], l = Math.floor(Ut(t) / 8), i = a - l % a, n = Math.floor(l / a), f = [], h = Qr(o);
    for (let u = 0, k = 0; u < a; u++) {
      const b = e.slice(k, k + n - o + (u < i ? 0 : 1));
      k += b.length;
      const L = Jr(b, h);
      u < i && b.push(0), f.push(b.concat(L));
    }
    const c = [];
    for (let u = 0; u < f[0].length; u++) f.forEach((k, b) => {
      (u !== n - o || b >= i) && c.push(k[u]);
    });
    return c;
  }
  drawCodewords(e) {
    if (e.length !== Math.floor(Ut(this.version) / 8)) throw new RangeError("Invalid argument");
    let t = 0;
    for (let s = this.size - 1; s >= 1; s -= 2) {
      s === 6 && (s = 5);
      for (let a = 0; a < this.size; a++) for (let o = 0; o < 2; o++) {
        const l = s - o, n = (s + 1 & 2) === 0 ? this.size - 1 - a : a;
        !this.types[n][l] && t < e.length * 8 && (this.modules[n][l] = st(e[t >>> 3], 7 - (t & 7)), t++);
      }
    }
  }
  applyMask(e) {
    if (e < 0 || e > 7) throw new RangeError("Mask value out of range");
    for (let t = 0; t < this.size; t++) for (let s = 0; s < this.size; s++) {
      let a;
      switch (e) {
        case 0:
          a = (s + t) % 2 === 0;
          break;
        case 1:
          a = t % 2 === 0;
          break;
        case 2:
          a = s % 3 === 0;
          break;
        case 3:
          a = (s + t) % 3 === 0;
          break;
        case 4:
          a = (Math.floor(s / 3) + Math.floor(t / 2)) % 2 === 0;
          break;
        case 5:
          a = s * t % 2 + s * t % 3 === 0;
          break;
        case 6:
          a = (s * t % 2 + s * t % 3) % 2 === 0;
          break;
        case 7:
          a = ((s + t) % 2 + s * t % 3) % 2 === 0;
          break;
        default:
          throw new Error("Unreachable");
      }
      !this.types[t][s] && a && (this.modules[t][s] = !this.modules[t][s]);
    }
  }
  getPenaltyScore() {
    let e = 0;
    for (let o = 0; o < this.size; o++) {
      let l = false, i = 0;
      const n = [0, 0, 0, 0, 0, 0, 0];
      for (let f = 0; f < this.size; f++) this.modules[o][f] === l ? (i++, i === 5 ? e += ue : i > 5 && e++) : (this.finderPenaltyAddHistory(i, n), l || (e += this.finderPenaltyCountPatterns(n) * yt), l = this.modules[o][f], i = 1);
      e += this.finderPenaltyTerminateAndCount(l, i, n) * yt;
    }
    for (let o = 0; o < this.size; o++) {
      let l = false, i = 0;
      const n = [0, 0, 0, 0, 0, 0, 0];
      for (let f = 0; f < this.size; f++) this.modules[f][o] === l ? (i++, i === 5 ? e += ue : i > 5 && e++) : (this.finderPenaltyAddHistory(i, n), l || (e += this.finderPenaltyCountPatterns(n) * yt), l = this.modules[f][o], i = 1);
      e += this.finderPenaltyTerminateAndCount(l, i, n) * yt;
    }
    for (let o = 0; o < this.size - 1; o++) for (let l = 0; l < this.size - 1; l++) {
      const i = this.modules[o][l];
      i === this.modules[o][l + 1] && i === this.modules[o + 1][l] && i === this.modules[o + 1][l + 1] && (e += jr);
    }
    let t = 0;
    for (const o of this.modules) t = o.reduce((l, i) => l + (i ? 1 : 0), t);
    const s = this.size * this.size, a = Math.ceil(Math.abs(t * 20 - s * 10) / s) - 1;
    return e += a * Xr, e;
  }
  getAlignmentPatternPositions() {
    if (this.version === 1) return [];
    {
      const e = Math.floor(this.version / 7) + 2, t = this.version === 32 ? 26 : Math.ceil((this.version * 4 + 4) / (e * 2 - 2)) * 2, s = [6];
      for (let a = this.size - 7; s.length < e; a -= t) s.splice(1, 0, a);
      return s;
    }
  }
  finderPenaltyCountPatterns(e) {
    const t = e[1], s = t > 0 && e[2] === t && e[3] === t * 3 && e[4] === t && e[5] === t;
    return (s && e[0] >= t * 4 && e[6] >= t ? 1 : 0) + (s && e[6] >= t * 4 && e[0] >= t ? 1 : 0);
  }
  finderPenaltyTerminateAndCount(e, t, s) {
    return e && (this.finderPenaltyAddHistory(t, s), t = 0), t += this.size, this.finderPenaltyAddHistory(t, s), this.finderPenaltyCountPatterns(s);
  }
  finderPenaltyAddHistory(e, t) {
    t[0] === 0 && (e += this.size), t.pop(), t.unshift(e);
  }
}
function nt(r, e, t) {
  if (e < 0 || e > 31 || r >>> e) throw new RangeError("Value out of range");
  for (let s = e - 1; s >= 0; s--) t.push(r >>> s & 1);
}
function st(r, e) {
  return (r >>> e & 1) !== 0;
}
class se {
  constructor(e, t, s) {
    if (this.mode = e, this.numChars = t, this.bitData = s, t < 0) throw new RangeError("Invalid argument");
    this.bitData = s.slice();
  }
  getData() {
    return this.bitData.slice();
  }
}
const Ur = [1, 10, 12, 14], Dr = [2, 9, 11, 13], Gr = [4, 8, 16, 16];
function Ne(r, e) {
  return r[Math.floor((e + 7) / 17) + 1];
}
function Be(r) {
  const e = [];
  for (const t of r) nt(t, 8, e);
  return new se(Gr, r.length, e);
}
function $r(r) {
  if (!He(r)) throw new RangeError("String contains non-numeric characters");
  const e = [];
  for (let t = 0; t < r.length; ) {
    const s = Math.min(r.length - t, 3);
    nt(Number.parseInt(r.substring(t, t + s), 10), s * 3 + 1, e), t += s;
  }
  return new se(Ur, r.length, e);
}
function Wr(r) {
  if (!Oe(r)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
  const e = [];
  let t;
  for (t = 0; t + 2 <= r.length; t += 2) {
    let s = Ft.indexOf(r.charAt(t)) * 45;
    s += Ft.indexOf(r.charAt(t + 1)), nt(s, 11, e);
  }
  return t < r.length && nt(Ft.indexOf(r.charAt(t)), 6, e), new se(Dr, r.length, e);
}
function Yr(r) {
  return r === "" ? [] : He(r) ? [$r(r)] : Oe(r) ? [Wr(r)] : [Be(Zr(r))];
}
function He(r) {
  return Or.test(r);
}
function Oe(r) {
  return Fr.test(r);
}
function Kr(r, e) {
  let t = 0;
  for (const s of r) {
    const a = Ne(s.mode, e);
    if (s.numChars >= 1 << a) return Number.POSITIVE_INFINITY;
    t += 4 + a + s.bitData.length;
  }
  return t;
}
function Zr(r) {
  r = encodeURI(r);
  const e = [];
  for (let t = 0; t < r.length; t++) r.charAt(t) !== "%" ? e.push(r.charCodeAt(t)) : (e.push(Number.parseInt(r.substring(t + 1, t + 3), 16)), t += 2);
  return e;
}
function Ut(r) {
  if (r < ee || r > re) throw new RangeError("Version number out of range");
  let e = (16 * r + 128) * r + 64;
  if (r >= 2) {
    const t = Math.floor(r / 7) + 2;
    e -= (25 * t - 10) * t - 55, r >= 7 && (e -= 36);
  }
  return e;
}
function qt(r, e) {
  return Math.floor(Ut(r) / 8) - Ie[e[0]][r] * Te[e[0]][r];
}
function Qr(r) {
  if (r < 1 || r > 255) throw new RangeError("Degree out of range");
  const e = [];
  for (let s = 0; s < r - 1; s++) e.push(0);
  e.push(1);
  let t = 1;
  for (let s = 0; s < r; s++) {
    for (let a = 0; a < e.length; a++) e[a] = Dt(e[a], t), a + 1 < e.length && (e[a] ^= e[a + 1]);
    t = Dt(t, 2);
  }
  return e;
}
function Jr(r, e) {
  const t = e.map((s) => 0);
  for (const s of r) {
    const a = s ^ t.shift();
    t.push(0), e.forEach((o, l) => t[l] ^= Dt(o, a));
  }
  return t;
}
function Dt(r, e) {
  if (r >>> 8 || e >>> 8) throw new RangeError("Byte out of range");
  let t = 0;
  for (let s = 7; s >= 0; s--) t = t << 1 ^ (t >>> 7) * 285, t ^= (e >>> s & 1) * r;
  return t;
}
function ts(r, e, t = 1, s = 40, a = -1, o = true) {
  if (!(ee <= t && t <= s && s <= re) || a < -1 || a > 7) throw new RangeError("Invalid value");
  let l, i;
  for (l = t; ; l++) {
    const c = qt(l, e) * 8, u = Kr(r, l);
    if (u <= c) {
      i = u;
      break;
    }
    if (l >= s) throw new RangeError("Data too long");
  }
  for (const c of [Ee, _e, Le]) o && i <= qt(l, c) * 8 && (e = c);
  const n = [];
  for (const c of r) {
    nt(c.mode[0], 4, n), nt(c.numChars, Ne(c.mode, l), n);
    for (const u of c.getData()) n.push(u);
  }
  const f = qt(l, e) * 8;
  nt(0, Math.min(4, f - n.length), n), nt(0, (8 - n.length % 8) % 8, n);
  for (let c = 236; n.length < f; c ^= 253) nt(c, 8, n);
  const h = Array.from({ length: Math.ceil(n.length / 8) }, () => 0);
  return n.forEach((c, u) => h[u >>> 3] |= c << 7 - (u & 7)), new Vr(l, e, h, a);
}
function Fe(r, e) {
  var _a;
  const { ecc: t = "L", boostEcc: s = false, minVersion: a = 1, maxVersion: o = 40, maskPattern: l = -1, border: i = 1 } = e || {}, n = typeof r == "string" ? Yr(r) : Array.isArray(r) ? [Be(r)] : void 0;
  if (!n) throw new Error(`uqr only supports encoding string and binary data, but got: ${typeof r}`);
  const f = ts(n, Hr[t], a, o, l, s), h = es({ version: f.version, maskPattern: f.mask, size: f.size, data: f.modules, types: f.types }, i);
  return (e == null ? void 0 : e.invert) && (h.data = h.data.map((c) => c.map((u) => !u))), (_a = e == null ? void 0 : e.onEncoded) == null ? void 0 : _a.call(e, h), h;
}
function es(r, e = 1) {
  if (!e) return r;
  const { size: t } = r, s = t + e * 2;
  r.size = s, r.data.forEach((o) => {
    for (let l = 0; l < e; l++) o.unshift(false), o.push(false);
  });
  for (let o = 0; o < e; o++) r.data.unshift(Array.from({ length: s }, (l) => false)), r.data.push(Array.from({ length: s }, (l) => false));
  const a = Q.Border;
  r.types.forEach((o) => {
    for (let l = 0; l < e; l++) o.unshift(a), o.push(a);
  });
  for (let o = 0; o < e; o++) r.types.unshift(Array.from({ length: s }, (l) => a)), r.types.push(Array.from({ length: s }, (l) => a));
  return r;
}
var zt = { exports: {} }, rs = zt.exports, fe;
function ss() {
  return fe || (fe = 1, (function(r) {
    (function(e, t, s) {
      function a(n) {
        var f = this, h = i();
        f.next = function() {
          var c = 2091639 * f.s0 + f.c * 23283064365386963e-26;
          return f.s0 = f.s1, f.s1 = f.s2, f.s2 = c - (f.c = c | 0);
        }, f.c = 1, f.s0 = h(" "), f.s1 = h(" "), f.s2 = h(" "), f.s0 -= h(n), f.s0 < 0 && (f.s0 += 1), f.s1 -= h(n), f.s1 < 0 && (f.s1 += 1), f.s2 -= h(n), f.s2 < 0 && (f.s2 += 1), h = null;
      }
      function o(n, f) {
        return f.c = n.c, f.s0 = n.s0, f.s1 = n.s1, f.s2 = n.s2, f;
      }
      function l(n, f) {
        var h = new a(n), c = f && f.state, u = h.next;
        return u.int32 = function() {
          return h.next() * 4294967296 | 0;
        }, u.double = function() {
          return u() + (u() * 2097152 | 0) * 11102230246251565e-32;
        }, u.quick = u, c && (typeof c == "object" && o(c, h), u.state = function() {
          return o(h, {});
        }), u;
      }
      function i() {
        var n = 4022871197, f = function(h) {
          h = String(h);
          for (var c = 0; c < h.length; c++) {
            n += h.charCodeAt(c);
            var u = 0.02519603282416938 * n;
            n = u >>> 0, u -= n, u *= n, n = u >>> 0, u -= n, n += u * 4294967296;
          }
          return (n >>> 0) * 23283064365386963e-26;
        };
        return f;
      }
      t && t.exports ? t.exports = l : this.alea = l;
    })(rs, r);
  })(zt)), zt.exports;
}
var St = { exports: {} }, ns = St.exports, he;
function as() {
  return he || (he = 1, (function(r) {
    (function(e, t, s) {
      function a(i) {
        var n = this, f = "";
        n.x = 0, n.y = 0, n.z = 0, n.w = 0, n.next = function() {
          var c = n.x ^ n.x << 11;
          return n.x = n.y, n.y = n.z, n.z = n.w, n.w ^= n.w >>> 19 ^ c ^ c >>> 8;
        }, i === (i | 0) ? n.x = i : f += i;
        for (var h = 0; h < f.length + 64; h++) n.x ^= f.charCodeAt(h) | 0, n.next();
      }
      function o(i, n) {
        return n.x = i.x, n.y = i.y, n.z = i.z, n.w = i.w, n;
      }
      function l(i, n) {
        var f = new a(i), h = n && n.state, c = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return c.double = function() {
          do
            var u = f.next() >>> 11, k = (f.next() >>> 0) / 4294967296, b = (u + k) / (1 << 21);
          while (b === 0);
          return b;
        }, c.int32 = f.next, c.quick = c, h && (typeof h == "object" && o(h, f), c.state = function() {
          return o(f, {});
        }), c;
      }
      t && t.exports ? t.exports = l : this.xor128 = l;
    })(ns, r);
  })(St)), St.exports;
}
var Ct = { exports: {} }, os = Ct.exports, de;
function is() {
  return de || (de = 1, (function(r) {
    (function(e, t, s) {
      function a(i) {
        var n = this, f = "";
        n.next = function() {
          var c = n.x ^ n.x >>> 2;
          return n.x = n.y, n.y = n.z, n.z = n.w, n.w = n.v, (n.d = n.d + 362437 | 0) + (n.v = n.v ^ n.v << 4 ^ (c ^ c << 1)) | 0;
        }, n.x = 0, n.y = 0, n.z = 0, n.w = 0, n.v = 0, i === (i | 0) ? n.x = i : f += i;
        for (var h = 0; h < f.length + 64; h++) n.x ^= f.charCodeAt(h) | 0, h == f.length && (n.d = n.x << 10 ^ n.x >>> 4), n.next();
      }
      function o(i, n) {
        return n.x = i.x, n.y = i.y, n.z = i.z, n.w = i.w, n.v = i.v, n.d = i.d, n;
      }
      function l(i, n) {
        var f = new a(i), h = n && n.state, c = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return c.double = function() {
          do
            var u = f.next() >>> 11, k = (f.next() >>> 0) / 4294967296, b = (u + k) / (1 << 21);
          while (b === 0);
          return b;
        }, c.int32 = f.next, c.quick = c, h && (typeof h == "object" && o(h, f), c.state = function() {
          return o(f, {});
        }), c;
      }
      t && t.exports ? t.exports = l : this.xorwow = l;
    })(os, r);
  })(Ct)), Ct.exports;
}
var Pt = { exports: {} }, cs = Pt.exports, pe;
function ls() {
  return pe || (pe = 1, (function(r) {
    (function(e, t, s) {
      function a(i) {
        var n = this;
        n.next = function() {
          var h = n.x, c = n.i, u, k;
          return u = h[c], u ^= u >>> 7, k = u ^ u << 24, u = h[c + 1 & 7], k ^= u ^ u >>> 10, u = h[c + 3 & 7], k ^= u ^ u >>> 3, u = h[c + 4 & 7], k ^= u ^ u << 7, u = h[c + 7 & 7], u = u ^ u << 13, k ^= u ^ u << 9, h[c] = k, n.i = c + 1 & 7, k;
        };
        function f(h, c) {
          var u, k = [];
          if (c === (c | 0)) k[0] = c;
          else for (c = "" + c, u = 0; u < c.length; ++u) k[u & 7] = k[u & 7] << 15 ^ c.charCodeAt(u) + k[u + 1 & 7] << 13;
          for (; k.length < 8; ) k.push(0);
          for (u = 0; u < 8 && k[u] === 0; ++u) ;
          for (u == 8 ? k[7] = -1 : k[u], h.x = k, h.i = 0, u = 256; u > 0; --u) h.next();
        }
        f(n, i);
      }
      function o(i, n) {
        return n.x = i.x.slice(), n.i = i.i, n;
      }
      function l(i, n) {
        i == null && (i = +/* @__PURE__ */ new Date());
        var f = new a(i), h = n && n.state, c = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return c.double = function() {
          do
            var u = f.next() >>> 11, k = (f.next() >>> 0) / 4294967296, b = (u + k) / (1 << 21);
          while (b === 0);
          return b;
        }, c.int32 = f.next, c.quick = c, h && (h.x && o(h, f), c.state = function() {
          return o(f, {});
        }), c;
      }
      t && t.exports ? t.exports = l : this.xorshift7 = l;
    })(cs, r);
  })(Pt)), Pt.exports;
}
var Rt = { exports: {} }, us = Rt.exports, ke;
function fs() {
  return ke || (ke = 1, (function(r) {
    (function(e, t, s) {
      function a(i) {
        var n = this;
        n.next = function() {
          var h = n.w, c = n.X, u = n.i, k, b;
          return n.w = h = h + 1640531527 | 0, b = c[u + 34 & 127], k = c[u = u + 1 & 127], b ^= b << 13, k ^= k << 17, b ^= b >>> 15, k ^= k >>> 12, b = c[u] = b ^ k, n.i = u, b + (h ^ h >>> 16) | 0;
        };
        function f(h, c) {
          var u, k, b, L, $, j = [], T = 128;
          for (c === (c | 0) ? (k = c, c = null) : (c = c + "\0", k = 0, T = Math.max(T, c.length)), b = 0, L = -32; L < T; ++L) c && (k ^= c.charCodeAt((L + 32) % c.length)), L === 0 && ($ = k), k ^= k << 10, k ^= k >>> 15, k ^= k << 4, k ^= k >>> 13, L >= 0 && ($ = $ + 1640531527 | 0, u = j[L & 127] ^= k + $, b = u == 0 ? b + 1 : 0);
          for (b >= 128 && (j[(c && c.length || 0) & 127] = -1), b = 127, L = 512; L > 0; --L) k = j[b + 34 & 127], u = j[b = b + 1 & 127], k ^= k << 13, u ^= u << 17, k ^= k >>> 15, u ^= u >>> 12, j[b] = k ^ u;
          h.w = $, h.X = j, h.i = b;
        }
        f(n, i);
      }
      function o(i, n) {
        return n.i = i.i, n.w = i.w, n.X = i.X.slice(), n;
      }
      function l(i, n) {
        i == null && (i = +/* @__PURE__ */ new Date());
        var f = new a(i), h = n && n.state, c = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return c.double = function() {
          do
            var u = f.next() >>> 11, k = (f.next() >>> 0) / 4294967296, b = (u + k) / (1 << 21);
          while (b === 0);
          return b;
        }, c.int32 = f.next, c.quick = c, h && (h.X && o(h, f), c.state = function() {
          return o(f, {});
        }), c;
      }
      t && t.exports ? t.exports = l : this.xor4096 = l;
    })(us, r);
  })(Rt)), Rt.exports;
}
var At = { exports: {} }, hs = At.exports, ge;
function ds() {
  return ge || (ge = 1, (function(r) {
    (function(e, t, s) {
      function a(i) {
        var n = this, f = "";
        n.next = function() {
          var c = n.b, u = n.c, k = n.d, b = n.a;
          return c = c << 25 ^ c >>> 7 ^ u, u = u - k | 0, k = k << 24 ^ k >>> 8 ^ b, b = b - c | 0, n.b = c = c << 20 ^ c >>> 12 ^ u, n.c = u = u - k | 0, n.d = k << 16 ^ u >>> 16 ^ b, n.a = b - c | 0;
        }, n.a = 0, n.b = 0, n.c = -1640531527, n.d = 1367130551, i === Math.floor(i) ? (n.a = i / 4294967296 | 0, n.b = i | 0) : f += i;
        for (var h = 0; h < f.length + 20; h++) n.b ^= f.charCodeAt(h) | 0, n.next();
      }
      function o(i, n) {
        return n.a = i.a, n.b = i.b, n.c = i.c, n.d = i.d, n;
      }
      function l(i, n) {
        var f = new a(i), h = n && n.state, c = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return c.double = function() {
          do
            var u = f.next() >>> 11, k = (f.next() >>> 0) / 4294967296, b = (u + k) / (1 << 21);
          while (b === 0);
          return b;
        }, c.int32 = f.next, c.quick = c, h && (typeof h == "object" && o(h, f), c.state = function() {
          return o(f, {});
        }), c;
      }
      t && t.exports ? t.exports = l : this.tychei = l;
    })(hs, r);
  })(At)), At.exports;
}
var Et = { exports: {} };
const ps = {}, ks = Object.freeze(Object.defineProperty({ __proto__: null, default: ps }, Symbol.toStringTag, { value: "Module" })), gs = tr(ks);
var ms = Et.exports, me;
function ws() {
  return me || (me = 1, (function(r) {
    (function(e, t, s) {
      var a = 256, o = 6, l = 52, i = "random", n = s.pow(a, o), f = s.pow(2, l), h = f * 2, c = a - 1, u;
      function k(w, g, z) {
        var d = [];
        g = g == true ? { entropy: true } : g || {};
        var P = j($(g.entropy ? [w, W(t)] : w ?? T(), 3), d), V = new b(d), U = function() {
          for (var X = V.g(o), O = n, J = 0; X < f; ) X = (X + J) * a, O *= a, J = V.g(1);
          for (; X >= h; ) X /= 2, O /= 2, J >>>= 1;
          return (X + J) / O;
        };
        return U.int32 = function() {
          return V.g(4) | 0;
        }, U.quick = function() {
          return V.g(4) / 4294967296;
        }, U.double = U, j(W(V.S), t), (g.pass || z || function(X, O, J, K) {
          return K && (K.S && L(K, V), X.state = function() {
            return L(V, {});
          }), J ? (s[i] = X, O) : X;
        })(U, P, "global" in g ? g.global : this == s, g.state);
      }
      function b(w) {
        var g, z = w.length, d = this, P = 0, V = d.i = d.j = 0, U = d.S = [];
        for (z || (w = [z++]); P < a; ) U[P] = P++;
        for (P = 0; P < a; P++) U[P] = U[V = c & V + w[P % z] + (g = U[P])], U[V] = g;
        (d.g = function(X) {
          for (var O, J = 0, K = d.i, ut = d.j, tt = d.S; X--; ) O = tt[K = c & K + 1], J = J * a + tt[c & (tt[K] = tt[ut = c & ut + O]) + (tt[ut] = O)];
          return d.i = K, d.j = ut, J;
        })(a);
      }
      function L(w, g) {
        return g.i = w.i, g.j = w.j, g.S = w.S.slice(), g;
      }
      function $(w, g) {
        var z = [], d = typeof w, P;
        if (g && d == "object") for (P in w) try {
          z.push($(w[P], g - 1));
        } catch {
        }
        return z.length ? z : d == "string" ? w : w + "\0";
      }
      function j(w, g) {
        for (var z = w + "", d, P = 0; P < z.length; ) g[c & P] = c & (d ^= g[c & P] * 19) + z.charCodeAt(P++);
        return W(g);
      }
      function T() {
        try {
          var w;
          return u && (w = u.randomBytes) ? w = w(a) : (w = new Uint8Array(a), (e.crypto || e.msCrypto).getRandomValues(w)), W(w);
        } catch {
          var g = e.navigator, z = g && g.plugins;
          return [+/* @__PURE__ */ new Date(), e, z, e.screen, W(t)];
        }
      }
      function W(w) {
        return String.fromCharCode.apply(0, w);
      }
      if (j(s.random(), t), r.exports) {
        r.exports = k;
        try {
          u = gs;
        } catch {
        }
      } else s["seed" + i] = k;
    })(typeof self < "u" ? self : ms, [], Math);
  })(Et)), Et.exports;
}
var jt, we;
function bs() {
  if (we) return jt;
  we = 1;
  var r = ss(), e = as(), t = is(), s = ls(), a = fs(), o = ds(), l = ws();
  return l.alea = r, l.xor128 = e, l.xorwow = t, l.xorshift7 = s, l.xor4096 = a, l.tychei = o, jt = l, jt;
}
var Ms = bs();
const vs = Je(Ms), xs = { text: "", ecc: "Q", margin: 0, scale: 20, lightColor: "#ffffff", darkColor: "#000000", pixelStyle: "square", markerStyle: "square", markerShape: "random", markerInnerShape: "plus", markerSub: "box", markers: [], maskPattern: -1, minVersion: 1, maxVersion: 40, boostECC: false, rotate: 0, invert: false, marginNoise: false, marginNoiseRate: 0.5, marginNoiseOpacity: 1, seed: Math.round(Math.random() * 1e6), marginNoiseSpace: "marker", renderPointsType: "all" };
class ys {
  constructor(e) {
    __privateAdd(this, _t3, it(Xe({ ...xs, seed: Math.round(Math.random() * 1e6) })));
    __privateAdd(this, _e3, it(null));
    __privateAdd(this, _r3, it(null));
    __privateAdd(this, _s3, it(null));
    e && (this.state = { ...this.state, ...e });
  }
  get state() {
    return Z(__privateGet(this, _t3));
  }
  set state(e) {
    et(__privateGet(this, _t3), e, true);
  }
  get qr() {
    return Z(__privateGet(this, _e3));
  }
  set qr(e) {
    et(__privateGet(this, _e3), e, true);
  }
  get canvas() {
    return Z(__privateGet(this, _r3));
  }
  set canvas(e) {
    et(__privateGet(this, _r3), e, true);
  }
  get ctx() {
    return Z(__privateGet(this, _s3));
  }
  set ctx(e) {
    et(__privateGet(this, _s3), e, true);
  }
  getInfo() {
    return this.canvas ? { width: this.canvas.width, height: this.canvas.height } : null;
  }
  async generate(e) {
    if (!e) return null;
    this.qr = this.createQrInstance();
    const { scale: t, rotate: s, margin: a, marginNoise: o, seed: l, marginNoiseRate: i, marginNoiseSpace: n, pixelStyle: f, markerSub: h, invert: c, renderPointsType: u } = this.state, k = this.resolveMargin(a), b = k.top, L = k.right, $ = k.bottom, j = k.left, T = t / 2, W = (this.qr.size + j + L) * t, w = (this.qr.size + b + $) * t;
    this.canvas = document.createElement("canvas"), this.canvas.width = W, this.canvas.height = w, this.canvas.style.imageRendering = "pixelated", this.canvas.style.imageRendering = "crisp-edges", this.ctx = this.canvas.getContext("2d", { willReadFrequently: true }), this.ctx.clearRect(0, 0, W, w), this.ctx.imageSmoothingEnabled = false;
    const g = this.qr, z = this.state, d = this.ctx, P = (m, p, R) => vs([l, R, m, p].join("|"))(), V = (m, p) => {
      if (typeof z.marginNoiseOpacity == "number") return z.marginNoiseOpacity;
      const [R, C] = z.marginNoiseOpacity;
      return P(m, p, "border-op") * (C - R) + R;
    }, U = (m) => {
      const p = (m === 0 ? z : z.markers[m - 1]) || z, { markerStyle: R, markerShape: C } = p;
      let S = p.markerInnerShape;
      return S === "auto" && (C === "circle" ? S = "circle" : C === "tiny-plus" ? S = "plus" : C === "octagon" ? S = "diamond" : S = "square"), { markerStyle: R, markerShape: C, markerInnerShape: S };
    }, X = (m, p) => m < 0 || p < 0 || m >= g.size || p >= g.size ? false : g.data[p][m], O = (m, p) => m < 0 || p < 0 || m >= g.size || p >= g.size ? Q.Border : g.types[p][m], J = (m, p) => {
      let R = n === "full" ? m < -1 || p < -1 || m > g.size || p > g.size : m < 0 || p < 0 || m >= g.size || p >= g.size, C = false, S = false;
      R && o ? S = P(m, p, "border-noise") < i : (S = X(m, p), (u === "data" && O(m, p) !== Q.Data || (u === "function" || u === "guide" || u === "marker") && O(m, p) < Q.Function) && (S = false, C = true)), u !== "data" && u !== "guide" && (n === "marker" ? (m >= -1 && m <= 7 && p >= -1 && p <= 7 || m >= -1 && m <= 7 && p >= g.size - 8 && p <= g.size || m >= g.size - 8 && m <= g.size && p >= -1 && p <= 7) && (R = false, C = false) : (n === "minimal" || n === "extreme") && (p >= 2 && p <= 4 && (m === -1 || m === g.size) || m >= 2 && m <= 4 && (p === -1 || p === g.size) || p >= g.size - 5 && p <= g.size - 3 && (m === -1 || m === 7) || m >= g.size - 5 && m <= g.size - 3 && (p === -1 || p === 7)) && (R = false, C = false));
      let x;
      const N = (v, M, q, kt = false) => {
        const ft = q === "sub" ? v === 2 && M === 2 : v >= 2 && v <= 4 && M >= 2 && M <= 4;
        return { x: v, y: M, position: q, isInner: ft, isBorder: !ft, isCenter: q === "sub" ? v === 2 && M === 2 : v === 3 && M === 3, isIgnored: C, isSubMarker: kt, style: U(q === "top-left" ? 0 : q === "top-right" ? 1 : q === "bottom-left" ? 2 : 3) };
      };
      if (m >= 0 && m < 7 && p >= 0 && p < 7) x = N(m, p, "top-left");
      else if (m >= 0 && m < 7 && p >= g.size - 7 && p < g.size) x = N(m, p - g.size + 7, "bottom-left");
      else if (m >= g.size - 7 && m < g.size && p >= 0 && p < 7) x = N(m - g.size + 7, p, "top-right");
      else if (O(m, p) === Q.Alignment) {
        let v = m, M = p;
        for (; O(v, M) === Q.Alignment; ) v -= 1;
        for (v += 1; O(v, M) === Q.Alignment; ) M -= 1;
        M += 1, x = N(m - v, p - M, "sub");
      }
      if (x) if (x.position !== "sub") {
        if (x.isBorder) {
          const { markerShape: v } = x.style;
          (v === "circle" || v === "octagon") && (S = false), v === "plus" ? x.x >= 2 && x.x <= 4 || x.y >= 2 && x.y <= 4 || (S = false) : v === "box" ? x.x >= 1 && x.x <= 5 || x.y >= 1 && x.y <= 5 || (S = false) : v === "random" ? x.x !== 3 && x.y !== 3 && S && (S = P(m, p, "marker") < 0.5) : v === "tiny-plus" && x.x !== 3 && x.y !== 3 && (S = false);
        }
        (x == null ? void 0 : x.isInner) && x.style.markerInnerShape === "plus" && x.x !== 3 && x.y !== 3 && (S = false);
      } else (x == null ? void 0 : x.position) === "sub" && (x.isBorder && (h === "circle" || h === "octagon") && (S = false), h === "plus" || h === "tiny-plus" ? x.x !== 2 && x.y !== 2 && (S = false) : h === "box" ? x.x >= 1 && x.x <= 3 || x.y >= 1 && x.y <= 3 || (S = false) : h === "random" && x.x !== 2 && x.y !== 2 && S && (S = P(m, p, "marker") < 0.5));
      const D = (v, M, q, kt) => {
        m >= v && m < v + q && p >= M && p < M + kt && (S = false, R = true, C = true);
      };
      n === "extreme" && (D(-1, -1, 3, 3), D(-1, 5, 3, 3), D(-1, g.size - 2, 3, 3), D(-1, g.size - 8, 3, 3), D(5, -1, 3, 3), D(5, 5, 3, 3), D(5, g.size - 2, 3, 3), D(5, g.size - 8, 3, 3), D(g.size - 2, -1, 3, 3), D(g.size - 2, 5, 3, 3), D(g.size - 8, -1, 3, 3), D(g.size - 8, 5, 3, 3));
      let Y = m, y = p;
      return m >= -1 && p >= -1 && m < g.size + 1 && p < g.size + 1 && (Y = m, y = p, s === 90 ? (Y = g.size - Y - 1, [Y, y] = [y, Y]) : s === 180 ? (Y = g.size - Y - 1, y = g.size - y - 1) : s === 270 && (y = g.size - y - 1, [Y, y] = [y, Y])), Y += j, y += b, u === "guide" && x && (S = false, C = true), u === "marker" && !x && (S = false, C = true), { isDark: S, isBorder: R, marker: x, isIgnored: C, x: Y, y };
    }, K = [];
    for (let m = -b; m < g.size + $; m++) for (let p = -j; p < g.size + L; p++) K.push(J(p, m));
    K.sort((m, p) => {
      const R = (C) => {
        var _a, _b, _c;
        return ((_a = C.marker) == null ? void 0 : _a.isBorder) ? 0 : ((_b = C.marker) == null ? void 0 : _b.isCenter) ? 1 : ((_c = C.marker) == null ? void 0 : _c.isInner) ? 2 : 4;
      };
      return R(m) - R(p);
    });
    const ut = c ? z.lightColor : z.darkColor;
    for (const { isDark: m, marker: p, x: R, y: C, isBorder: S, isIgnored: x } of K) {
      if (x) continue;
      let N = f;
      const D = S ? V(R, C) : 1, Y = D === 1 ? z.darkColor : ut + Math.round(D * 255).toString(16).padStart(2, "0"), y = c ? Y : z.lightColor, v = c ? z.lightColor : Y;
      d.fillStyle = v;
      const M = R * t + T, q = C * t + T;
      if (p && p.position !== "sub") {
        const _ = p.style.markerStyle === "auto" ? f : p.style.markerStyle, { markerShape: F } = p.style;
        if (N = _, u === "data") continue;
        if (F === "circle") {
          if (p.isBorder) continue;
          p.isCenter && (d.fillStyle = y, d.fillRect(M - t * 3.5, q - t * 3.5, t * 7, t * 7), d.beginPath(), d.fillStyle = v, d.arc(M, q, t * 3.5, 0, Math.PI * 2), d.fill(), d.beginPath(), d.fillStyle = y, d.arc(M, q, t * 2.5, 0, Math.PI * 2), d.fill(), d.fillStyle = v);
        } else if (F === "octagon") {
          if (p.isBorder) continue;
          if (p.isCenter) {
            d.fillStyle = y, d.fillRect(M - t * 3.5, q - t * 3.5, t * 7, t * 7);
            const A = (E, I) => [[E, I], [-E, I], [-I, E], [-I, -E], [-E, -I], [E, -I], [I, -E], [I, E]], B = (E) => {
              d.beginPath();
              const I = A(1.5 / 3.5 * E, E);
              if (N === "rounded") {
                const ht = A(0.42857142857142855 * (E - 1), E - 1), dt = [(I[0][0] + I[1][0]) / 2, (I[0][1] + I[1][1]) / 2];
                d.moveTo(M + dt[0] * t, q + dt[1] * t), [...I, I[0]].forEach(([ct, H], ot) => {
                  const rt = I.at(ot - 1), Mt = I.at((ot + 1) % I.length), ne = ht.at(ot % ht.length), ae = be(...ne, ...rt, ct, H), vt = be(...ne, ...Mt, ct, H);
                  d.lineTo(M + ae[0] * t, q + ae[1] * t), d.arcTo(M + ct * t, q + H * t, M + vt[0] * t, q + vt[1] * t, t), d.lineTo(M + vt[0] * t, q + vt[1] * t);
                });
              } else I.forEach(([ht, dt], ct) => {
                d[ct === 0 ? "moveTo" : "lineTo"](M + ht * t, q + dt * t);
              });
              d.closePath(), d.fill();
            };
            d.fillStyle = v, B(3.5), d.fillStyle = y, B(2.5), d.fillStyle = v;
          }
        }
        if (p.isInner) {
          const { markerInnerShape: A } = p.style;
          if (A === "circle") {
            p.isCenter && (d.fillStyle = y, d.fillRect(M - t * 1.5, q - t * 1.5, t * 3, t * 3), d.beginPath(), d.fillStyle = v, d.arc(M, q, t * 1.5, 0, Math.PI * 2), d.fill());
            continue;
          } else if (A === "eye") {
            p.isCenter && (d.fillStyle = y, d.fillRect(M - t * 1.5, q - t * 1.5, t * 3, t * 3), d.beginPath(), d.fillStyle = v, d.moveTo(M, q - t * 1.5), d.arcTo(M + t * 1.5, q, M, q + t * 1.5, t), d.lineTo(M, q + t * 1.5), d.arcTo(M - t * 1.5, q, M, q - t * 1.5, t), d.fill());
            continue;
          } else if (A === "diamond") {
            p.isCenter && (d.fillStyle = y, d.fillRect(M - t * 1.5, q - t * 1.5, t * 3, t * 3), d.beginPath(), d.fillStyle = v, d.moveTo(M, q - t * 1.5), d.lineTo(M + t * 1.5, q), d.lineTo(M, q + t * 1.5), d.lineTo(M - t * 1.5, q), d.fill());
            continue;
          }
        }
      }
      if ((p == null ? void 0 : p.position) === "sub") {
        if (u === "data") continue;
        if (h === "circle") {
          if (p.isBorder) continue;
          p.isCenter && (d.fillStyle = y, d.fillRect(M - t * 2.5, q - t * 2.5, t * 5, t * 5), d.beginPath(), d.fillStyle = v, d.arc(M, q, t * 2.5, 0, Math.PI * 2), d.fill(), d.beginPath(), d.fillStyle = y, d.arc(M, q, t * 1.5, 0, Math.PI * 2), d.fill(), d.fillStyle = v);
        }
      }
      const kt = (_ = m ? v : y) => {
        d.fillStyle = _, d.fillRect(R * t, C * t, t, t);
      }, ft = (_ = m ? v : y) => {
        d.strokeStyle = "none", d.fillStyle = _, d.beginPath(), d.arc(R * t + T, C * t + T, T, 0, Math.PI * 2), d.fill();
      }, G = (_, F) => {
        const A = [[0, 0, 0, 1, 1, 0], [0, 2, 0, 1, 1, 2], [2, 0, 2, 1, 1, 0], [2, 2, 2, 1, 1, 2]][_], B = [[R * t + T * A[0], C * t + T * A[1]], [R * t + T * A[2], C * t + T * A[3]], [R * t + T * A[4], C * t + T * A[5]]];
        d.strokeStyle = "none", F && (d.fillStyle = F), d.beginPath(), d.moveTo(...B[0]), d.lineTo(...B[1]), d.arcTo(...B[0], ...B[2], T + 2), d.lineTo(...B[0]), d.fill();
      };
      if (!(!m && z.backgroundImage && S)) if (N === "dot") ft();
      else if (N === "squircle") {
        ft();
        for (let _ = 0; _ < 4; _++) P(R, C, `squircle-${_}`) < 0.5 && G(_);
      } else if (N === "rounded" || N === "row" || N === "column") {
        const _ = (H, ot) => {
          const rt = K.find((Mt) => Mt.x === R + H && Mt.y === C + ot);
          return rt ? rt.isIgnored || rt.isBorder && !rt.isDark ? null : rt.isDark : true;
        }, F = _(0, -1), A = _(0, 1), B = _(-1, 0), E = _(1, 0), I = _(-1, -1), ht = _(1, -1), dt = _(-1, 1), ct = _(1, 1);
        if (m) {
          const H = [null, null, null, null];
          N !== "row" && (H[0] || (H[0] = F), H[2] || (H[2] = F)), N !== "row" && (H[1] || (H[1] = A), H[3] || (H[3] = A)), N !== "column" && (H[0] || (H[0] = B), H[1] || (H[1] = B)), N !== "column" && (H[2] || (H[2] = E), H[3] || (H[3] = E)), N === "rounded" && ((F == null && B != null || B == null && F != null) && (H[0] || (H[0] = true)), (F == null && E != null || E == null && F != null) && (H[2] || (H[2] = true)), (A == null && B != null || B == null && A != null) && (H[1] || (H[1] = true)), (A == null && E != null || E == null && A != null) && (H[3] || (H[3] = true))), H.forEach((ot, rt) => {
            ot != null && G(rt, ot ? v : y);
          });
        } else N === "rounded" ? ((F != null || B != null) && G(0, F && B && I && !S ? v : y), (F != null || E != null) && G(2, F && E && ht && !S ? v : y), (A != null || B != null) && G(1, A && B && dt && !S ? v : y), (A != null || E != null) && G(3, A && E && ct && !S ? v : y)) : N === "row" ? (B != null && (G(0, y), G(1, y)), E != null && (G(2, y), G(3, y))) : N === "column" && (F != null && (G(0, y), G(2, y)), A != null && (G(1, y), G(3, y)));
        ft();
      } else kt();
    }
    e.width = W, e.height = w;
    const tt = e.getContext("2d");
    return tt.save(), tt.fillStyle = c ? z.darkColor : z.lightColor, tt.fillRect(0, 0, W, w), tt.drawImage(this.canvas, 0, 0, W, w), tt.restore(), { width: W, height: w };
  }
  resolveMargin(e) {
    return typeof e == "number" ? { top: e, right: e, bottom: e, left: e } : e;
  }
  createQrInstance() {
    return Fe(this.state.text || "qrcode.antfu.me", { minVersion: this.state.minVersion, maxVersion: this.state.maxVersion, ecc: this.state.ecc, maskPattern: this.state.maskPattern, boostEcc: this.state.boostECC, border: 0 });
  }
}
_t3 = new WeakMap();
_e3 = new WeakMap();
_r3 = new WeakMap();
_s3 = new WeakMap();
function be(r, e, t, s, a, o) {
  const l = a - t, i = o - s, n = l * l + i * i, f = ((r - t) * l + (e - s) * i) / n, h = t + f * l, c = s + f * i;
  return [h, c];
}
var qs = Ge('<div><button class="qr-button pointer-events-auto relative z-100 flex aspect-square h-full w-full cursor-copy items-center justify-center svelte-10gkt5z" aria-label="Copy share link"><canvas class="qr-canvas svelte-10gkt5z"></canvas> <div class="qr-overlay absolute inset-0 flex items-center justify-center bg-foreground backdrop-blur-lg transition-opacity svelte-10gkt5z"><!></div></button></div>');
function Fs(r, e) {
  Ue(e, true);
  let t, s, a;
  const o = 2, l = new ys({ margin: o });
  function i(w) {
    const g = getComputedStyle(w), z = g.backgroundColor, d = g.borderColor;
    return { lightColor: z || "#ffffff", darkColor: d || "#000000" };
  }
  function n() {
    if (!t || !s || !a) return;
    const { darkColor: w, lightColor: g } = i(s), z = a.getBoundingClientRect(), d = Math.min(z.width, z.height);
    if (d === 0) return;
    const U = Fe(e.shareUrl || "placeholder", { ecc: "Q", border: 0 }).size + o * 2, X = window.devicePixelRatio || 1, O = d * X / U;
    l.state.text = e.shareUrl, l.state.darkColor = w, l.state.lightColor = g, l.state.scale = O, l.generate(t);
  }
  Ke(() => [t, s, a, e.shareUrl], () => {
    n();
  }), De(() => {
    if (!a) return;
    const w = new ResizeObserver(() => {
      n();
    });
    return w.observe(a), () => w.disconnect();
  });
  let f = it(false), h;
  function c(w) {
    w.stopPropagation(), navigator.clipboard.writeText(e.shareUrl), h && clearTimeout(h), et(f, true), h = setTimeout(() => {
      et(f, false);
    }, 3e3);
  }
  var u = qs();
  let k;
  var b = It(u);
  b.__click = c;
  var L = It(b);
  Nt(L, (w) => t = w, () => t);
  var $ = $e(L, 2), j = It($);
  {
    var T = (w) => {
      rr(w, { class: "size-6" });
    }, W = (w) => {
      nr(w, { class: "size-6" });
    };
    Ye(j, (w) => {
      Z(f) ? w(T) : w(W, false);
    });
  }
  Tt($), Tt(b), Nt(b, (w) => a = w, () => a), Tt(u), Nt(u, (w) => s = w, () => s), Gt((w) => {
    Wt(u, 1, w, "svelte-10gkt5z"), k = Qe(u, "", k, { "view-transition-name": e.viewTransitionName });
  }, [() => Yt(Ze("border border-border bg-background", e.class))]), $t(r, u), We();
}
Ve(["click"]);
export {
  or as M,
  Fs as Q,
  As as S,
  ar as a,
  ve as b,
  Kt as c,
  Lr as d,
  Zt as e,
  Ts as f,
  qr as g,
  fr as h,
  Os as i,
  wt as j,
  Is as k,
  Ns as l,
  Jt as m,
  ir as n,
  qe as o,
  lr as p,
  Hs as q,
  ye as r,
  Ls as s,
  at as t,
  _t as u,
  Bs as v,
  _s as w,
  Es as x
};
