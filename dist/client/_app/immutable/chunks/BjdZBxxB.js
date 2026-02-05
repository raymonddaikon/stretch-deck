var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _t, _e, _r, _s, _m_instances, a_fn, n_fn;
import { _ as g, bb as v, P as y, g as u, Z as d, bc as z } from "./Cerututf.js";
import { b as $, I as D } from "./BPNiD34A.js";
import { g as h } from "./CsOUNaBs.js";
var L = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"], b = ["difference", "intersection", "symmetricDifference", "union"], w = false;
const _m = class _m extends Set {
  constructor(e) {
    super();
    __privateAdd(this, _m_instances);
    __privateAdd(this, _t, /* @__PURE__ */ new Map());
    __privateAdd(this, _e, g(0));
    __privateAdd(this, _r, g(0));
    __privateAdd(this, _s, v || -1);
    if (e) {
      for (var r of e) super.add(r);
      __privateGet(this, _r).v = super.size;
    }
    w || __privateMethod(this, _m_instances, n_fn).call(this);
  }
  has(e) {
    var r = super.has(e), a = __privateGet(this, _t), n = a.get(e);
    if (n === void 0) {
      if (!r) return u(__privateGet(this, _e)), false;
      n = __privateMethod(this, _m_instances, a_fn).call(this, true), a.set(e, n);
    }
    return u(n), r;
  }
  add(e) {
    return super.has(e) || (super.add(e), d(__privateGet(this, _r), super.size), z(__privateGet(this, _e))), this;
  }
  delete(e) {
    var r = super.delete(e), a = __privateGet(this, _t), n = a.get(e);
    return n !== void 0 && (a.delete(e), d(n, false)), r && (d(__privateGet(this, _r), super.size), z(__privateGet(this, _e))), r;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = __privateGet(this, _t);
      for (var r of e.values()) d(r, false);
      e.clear(), d(__privateGet(this, _r), 0), z(__privateGet(this, _e));
    }
  }
  keys() {
    return this.values();
  }
  values() {
    return u(__privateGet(this, _e)), super.values();
  }
  entries() {
    return u(__privateGet(this, _e)), super.entries();
  }
  [Symbol.iterator]() {
    return this.keys();
  }
  get size() {
    return u(__privateGet(this, _r));
  }
};
_t = new WeakMap();
_e = new WeakMap();
_r = new WeakMap();
_s = new WeakMap();
_m_instances = new WeakSet();
a_fn = function(e) {
  return v === __privateGet(this, _s) ? g(e) : y(e);
};
n_fn = function() {
  w = true;
  var e = _m.prototype, r = Set.prototype;
  for (const a of L) e[a] = function(...n) {
    return u(__privateGet(this, _e)), r[a].apply(this, n);
  };
  for (const a of b) e[a] = function(...n) {
    u(__privateGet(this, _e));
    var i = r[a].apply(this, n);
    return new _m(i);
  };
};
let m = _m;
function J(t, e, r) {
  const a = t.$jazz.raw.keys().filter((s) => /^\d+x\d+$/.test(s)).map((s) => {
    const [l, f] = s.split("x").map(Number);
    return [l, f, s];
  });
  if (a.length === 0) return t.original.$isLoaded ? { width: t.originalSize[0], height: t.originalSize[1], image: t.original } : null;
  const n = a.map((s) => ({ size: s, match: j(s[0], s[1], e, r), isLoaded: x(t.$jazz.raw.get(s[2])) })).sort((s, l) => s.match - l.match), i = [...n].reverse().find((s) => s.isLoaded && p(t[s.size[2]])), o = n.find((s) => s.match > 0.95) || n.at(-1), c = t[o.size[2]];
  if (p(c)) return (c == null ? void 0 : c.$isLoaded) ? { width: o.size[0], height: o.size[1], image: c } : null;
  if (i) {
    p(c);
    const s = t[i.size[2]];
    return (s == null ? void 0 : s.$isLoaded) ? { width: i.size[0], height: i.size[1], image: s } : null;
  }
  for (let s of n) s.match <= o.match && p(t[s.size[2]]);
  return null;
}
function p(t) {
  if (!(!t || !t.$isLoaded)) return t.getChunks();
}
function j(t, e, r, a) {
  const n = t * e, i = r * a;
  return n / i;
}
function x(t) {
  return t ? !!$.getMe().$jazz.localNode.getLoaded(t) : false;
}
function K(t, e) {
  return (r, a) => (e == null ? void 0 : e(r), I(r, a ?? {}, t));
}
async function I(t, e, r) {
  const { width: a, height: n } = await r.getImageSize(t), i = { originalSize: [a, n], progressive: false, placeholderDataURL: void 0, files: {} };
  if ((e == null ? void 0 : e.placeholder) === "blur" && (i.placeholderDataURL = await r.getPlaceholderBase64(t)), (e == null ? void 0 : e.maxSize) === void 0) i.original = await r.createFileStreamFromSource(t, e == null ? void 0 : e.owner), i.files[`${a}x${n}`] = i.original;
  else if ((e == null ? void 0 : e.maxSize) >= a && (e == null ? void 0 : e.maxSize) >= n) i.original = await r.createFileStreamFromSource(t, e == null ? void 0 : e.owner), i.files[`${a}x${n}`] = i.original;
  else {
    const { width: c, height: s } = S(a, n, e.maxSize), l = await r.resize(t, c, s);
    i.originalSize = [c, s], i.original = await r.createFileStreamFromSource(l, e == null ? void 0 : e.owner), i.files[`${c}x${s}`] = i.original;
  }
  const o = D.create({ originalSize: i.originalSize, progressive: i.progressive, placeholderDataURL: i.placeholderDataURL, original: i.original, ...i.files }, e == null ? void 0 : e.owner);
  if (e == null ? void 0 : e.progressive) {
    o.$jazz.set("progressive", true);
    const c = [256, 512, 1024, 2048].filter((s) => s < Math.max(o.originalSize[0], o.originalSize[1]));
    for (const s of c) {
      const { width: l, height: f } = S(a, n, s), _ = await r.resize(t, l, f);
      o.$jazz.set(`${l}x${f}`, await r.createFileStreamFromSource(_, e == null ? void 0 : e.owner));
    }
  }
  return o;
}
var S = (t, e, r) => t > e ? { width: r, height: Math.round(r * (e / t)) } : { width: Math.round(r * (t / e)), height: r };
const R = () => "Are you sure?", M = () => "\u3044\u3044\u3067\u3059\u304B\uFF1F", Q = (t = {}, e = {}) => (e.locale ?? h()) === "en" ? R() : M(), k = () => "Cancel", F = () => "\u30AD\u30E3\u30F3\u30BB\u30EB", W = (t = {}, e = {}) => (e.locale ?? h()) === "en" ? k() : F(), A = () => "Areas", C = () => "\u30A8\u30EA\u30A2", X = (t = {}, e = {}) => (e.locale ?? h()) === "en" ? A() : C(), U = () => "Reps", N = () => "\u30EC\u30C3\u30D7", Y = (t = {}, e = {}) => (e.locale ?? h()) === "en" ? U() : N(), T = () => "Sets", P = () => "\u30BB\u30FC\u30C8", H = (t = {}, e = {}) => (e.locale ?? h()) === "en" ? T() : P(), q = () => "Description", E = () => "\u8A73\u7D30", O = (t = {}, e = {}) => (e.locale ?? h()) === "en" ? q() : E(), B = [{ minDays: 0, color: "hsl(0, 0%, 60%)", shape: "circle" }, { minDays: 5, color: "hsl(142, 71%, 45%)", shape: "triangle" }, { minDays: 15, color: "hsl(217, 91%, 60%)", shape: "square" }, { minDays: 35, color: "hsl(271, 81%, 56%)", shape: "pentagon" }, { minDays: 65, color: "hsl(25, 95%, 53%)", shape: "hexagon" }, { minDays: 100, color: "hsl(48, 96%, 53%)", shape: "octagon" }];
export {
  m as S,
  X as a,
  O as b,
  W as c,
  Q as d,
  B as e,
  K as f,
  J as h,
  Y as r,
  H as s
};
