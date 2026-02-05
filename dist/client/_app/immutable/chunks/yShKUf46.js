var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _e2;
import "./DsnmJJEf.js";
import { h as ce, g as W, Z as xt, bi as Ct, p as M, e as B, a as G, b as I, c as R, f as H, d as we, ag as ue, r as be, bk as Mt, t as Rt, bm as Dt } from "./Cerututf.js";
import { l as Ft, m as Ut, n as Jt, k as Pe, o as q, p as qt, s as Ht, d as Lt, f as A } from "./CD9opEPd.js";
import { g as Qe } from "./CsOUNaBs.js";
import { t as Vt } from "./XZEhH6UG.js";
import { a as K } from "./C-CTaGP6.js";
import { p as O, r as D, b as Y, c as Wt, s as et } from "./IOctRI-n.js";
import { i as tt } from "./DIL41Api.js";
import { c as Bt, a as ge } from "./Dp3AfHhX.js";
function u(e, t, n) {
  function r(i, c) {
    if (i._zod || Object.defineProperty(i, "_zod", { value: { def: c, constr: a, traits: /* @__PURE__ */ new Set() }, enumerable: false }), i._zod.traits.has(e)) return;
    i._zod.traits.add(e), t(i, c);
    const l = a.prototype, f = Object.keys(l);
    for (let m = 0; m < f.length; m++) {
      const d = f[m];
      d in i || (i[d] = l[d].bind(i));
    }
  }
  const o = (n == null ? void 0 : n.Parent) ?? Object;
  class s extends o {
  }
  Object.defineProperty(s, "name", { value: e });
  function a(i) {
    var c;
    const l = (n == null ? void 0 : n.Parent) ? new s() : this;
    r(l, i), (c = l._zod).deferred ?? (c.deferred = []);
    for (const f of l._zod.deferred) f();
    return l;
  }
  return Object.defineProperty(a, "init", { value: r }), Object.defineProperty(a, Symbol.hasInstance, { value: (i) => {
    var _a2, _b;
    return (n == null ? void 0 : n.Parent) && i instanceof n.Parent ? true : (_b = (_a2 = i == null ? void 0 : i._zod) == null ? void 0 : _a2.traits) == null ? void 0 : _b.has(e);
  } }), Object.defineProperty(a, "name", { value: e }), a;
}
class J extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class nt extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const rt = {};
function x(e) {
  return rt;
}
function ot(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, o]) => t.indexOf(+r) === -1).map(([r, o]) => o);
}
function _e(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function ye(e) {
  return { get value() {
    {
      const t = e();
      return Object.defineProperty(this, "value", { value: t }), t;
    }
  } };
}
function ze(e) {
  return e == null;
}
function Ze(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function Gt(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = t.toString();
  let o = (r.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(r)) {
    const c = r.match(/\d?e-(\d?)/);
    (c == null ? void 0 : c[1]) && (o = Number.parseInt(c[1]));
  }
  const s = n > o ? n : o, a = Number.parseInt(e.toFixed(s).replace(".", "")), i = Number.parseInt(t.toFixed(s).replace(".", ""));
  return a % i / 10 ** s;
}
const Te = Symbol("evaluating");
function g(e, t, n) {
  let r;
  Object.defineProperty(e, t, { get() {
    if (r !== Te) return r === void 0 && (r = Te, r = n()), r;
  }, set(o) {
    Object.defineProperty(e, t, { value: o });
  }, configurable: true });
}
function F(e, t, n) {
  Object.defineProperty(e, t, { value: n, writable: true, enumerable: true, configurable: true });
}
function N(...e) {
  const t = {};
  for (const n of e) {
    const r = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function Ne(e) {
  return JSON.stringify(e);
}
function Kt(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const at = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function oe(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Yt = ye(() => {
  var _a2;
  if (typeof navigator < "u" && ((_a2 = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a2.includes("Cloudflare"))) return false;
  try {
    const e = Function;
    return new e(""), true;
  } catch {
    return false;
  }
});
function X(e) {
  if (oe(e) === false) return false;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function") return true;
  const n = t.prototype;
  return !(oe(n) === false || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === false);
}
function st(e) {
  return X(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const Xt = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function le(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function j(e, t, n) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || (n == null ? void 0 : n.parent)) && (r._zod.parent = e), r;
}
function h(e) {
  const t = e;
  if (!t) return {};
  if (typeof t == "string") return { error: () => t };
  if ((t == null ? void 0 : t.message) !== void 0) {
    if ((t == null ? void 0 : t.error) !== void 0) throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function Qt(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const en = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] };
function tn(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
  const s = N(e._zod.def, { get shape() {
    const a = {};
    for (const i in t) {
      if (!(i in n.shape)) throw new Error(`Unrecognized key: "${i}"`);
      t[i] && (a[i] = n.shape[i]);
    }
    return F(this, "shape", a), a;
  }, checks: [] });
  return j(e, s);
}
function nn(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
  const s = N(e._zod.def, { get shape() {
    const a = { ...e._zod.def.shape };
    for (const i in t) {
      if (!(i in n.shape)) throw new Error(`Unrecognized key: "${i}"`);
      t[i] && delete a[i];
    }
    return F(this, "shape", a), a;
  }, checks: [] });
  return j(e, s);
}
function rn(e, t) {
  if (!X(t)) throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const s = e._zod.def.shape;
    for (const a in t) if (Object.getOwnPropertyDescriptor(s, a) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const o = N(e._zod.def, { get shape() {
    const s = { ...e._zod.def.shape, ...t };
    return F(this, "shape", s), s;
  } });
  return j(e, o);
}
function on(e, t) {
  if (!X(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = N(e._zod.def, { get shape() {
    const r = { ...e._zod.def.shape, ...t };
    return F(this, "shape", r), r;
  } });
  return j(e, n);
}
function an(e, t) {
  const n = N(e._zod.def, { get shape() {
    const r = { ...e._zod.def.shape, ...t._zod.def.shape };
    return F(this, "shape", r), r;
  }, get catchall() {
    return t._zod.def.catchall;
  }, checks: [] });
  return j(e, n);
}
function sn(e, t, n) {
  const o = t._zod.def.checks;
  if (o && o.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
  const a = N(t._zod.def, { get shape() {
    const i = t._zod.def.shape, c = { ...i };
    if (n) for (const l in n) {
      if (!(l in i)) throw new Error(`Unrecognized key: "${l}"`);
      n[l] && (c[l] = e ? new e({ type: "optional", innerType: i[l] }) : i[l]);
    }
    else for (const l in i) c[l] = e ? new e({ type: "optional", innerType: i[l] }) : i[l];
    return F(this, "shape", c), c;
  }, checks: [] });
  return j(t, a);
}
function cn(e, t, n) {
  const r = N(t._zod.def, { get shape() {
    const o = t._zod.def.shape, s = { ...o };
    if (n) for (const a in n) {
      if (!(a in s)) throw new Error(`Unrecognized key: "${a}"`);
      n[a] && (s[a] = new e({ type: "nonoptional", innerType: o[a] }));
    }
    else for (const a in o) s[a] = new e({ type: "nonoptional", innerType: o[a] });
    return F(this, "shape", s), s;
  } });
  return j(t, r);
}
function U(e, t = 0) {
  var _a2;
  if (e.aborted === true) return true;
  for (let n = t; n < e.issues.length; n++) if (((_a2 = e.issues[n]) == null ? void 0 : _a2.continue) !== true) return true;
  return false;
}
function it(e, t) {
  return t.map((n) => {
    var r;
    return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
  });
}
function te(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function C(e, t, n) {
  var _a2, _b, _c, _d, _e3, _f;
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const o = te((_c = (_b = (_a2 = e.inst) == null ? void 0 : _a2._zod.def) == null ? void 0 : _b.error) == null ? void 0 : _c.call(_b, e)) ?? te((_d = t == null ? void 0 : t.error) == null ? void 0 : _d.call(t, e)) ?? te((_e3 = n.customError) == null ? void 0 : _e3.call(n, e)) ?? te((_f = n.localeError) == null ? void 0 : _f.call(n, e)) ?? "Invalid input";
    r.message = o;
  }
  return delete r.inst, delete r.continue, (t == null ? void 0 : t.reportInput) || delete r.input, r;
}
function $e(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Q(...e) {
  const [t, n, r] = e;
  return typeof t == "string" ? { message: t, code: "custom", input: n, inst: r } : { ...t };
}
const ct = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", { value: e._zod, enumerable: false }), Object.defineProperty(e, "issues", { value: t, enumerable: false }), e.message = JSON.stringify(t, _e, 2), Object.defineProperty(e, "toString", { value: () => e.message, enumerable: false });
}, ut = u("$ZodError", ct), lt = u("$ZodError", ct, { Parent: Error });
function un(e, t = (n) => n.message) {
  const n = {}, r = [];
  for (const o of e.issues) o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
  return { formErrors: r, fieldErrors: n };
}
function ln(e, t = (n) => n.message) {
  const n = { _errors: [] }, r = (o) => {
    for (const s of o.issues) if (s.code === "invalid_union" && s.errors.length) s.errors.map((a) => r({ issues: a }));
    else if (s.code === "invalid_key") r({ issues: s.issues });
    else if (s.code === "invalid_element") r({ issues: s.issues });
    else if (s.path.length === 0) n._errors.push(t(s));
    else {
      let a = n, i = 0;
      for (; i < s.path.length; ) {
        const c = s.path[i];
        i === s.path.length - 1 ? (a[c] = a[c] || { _errors: [] }, a[c]._errors.push(t(s))) : a[c] = a[c] || { _errors: [] }, a = a[c], i++;
      }
    }
  };
  return r(e), n;
}
const Oe = (e) => (t, n, r, o) => {
  const s = r ? Object.assign(r, { async: false }) : { async: false }, a = t._zod.run({ value: n, issues: [] }, s);
  if (a instanceof Promise) throw new J();
  if (a.issues.length) {
    const i = new ((o == null ? void 0 : o.Err) ?? e)(a.issues.map((c) => C(c, s, x())));
    throw at(i, o == null ? void 0 : o.callee), i;
  }
  return a.value;
}, Se = (e) => async (t, n, r, o) => {
  const s = r ? Object.assign(r, { async: true }) : { async: true };
  let a = t._zod.run({ value: n, issues: [] }, s);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const i = new ((o == null ? void 0 : o.Err) ?? e)(a.issues.map((c) => C(c, s, x())));
    throw at(i, o == null ? void 0 : o.callee), i;
  }
  return a.value;
}, de = (e) => (t, n, r) => {
  const o = r ? { ...r, async: false } : { async: false }, s = t._zod.run({ value: n, issues: [] }, o);
  if (s instanceof Promise) throw new J();
  return s.issues.length ? { success: false, error: new (e ?? ut)(s.issues.map((a) => C(a, o, x()))) } : { success: true, data: s.value };
}, dn = de(lt), fe = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { async: true }) : { async: true };
  let s = t._zod.run({ value: n, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length ? { success: false, error: new e(s.issues.map((a) => C(a, o, x()))) } : { success: true, data: s.value };
}, fn = fe(lt), pn = (e) => (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Oe(e)(t, n, o);
}, hn = (e) => (t, n, r) => Oe(e)(t, n, r), mn = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Se(e)(t, n, o);
}, gn = (e) => async (t, n, r) => Se(e)(t, n, r), _n = (e) => (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return de(e)(t, n, o);
}, vn = (e) => (t, n, r) => de(e)(t, n, r), kn = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return fe(e)(t, n, o);
}, wn = (e) => async (t, n, r) => fe(e)(t, n, r), bn = /^[cC][^\s-]{8,}$/, yn = /^[0-9a-z]+$/, zn = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Zn = /^[0-9a-vA-V]{20}$/, $n = /^[A-Za-z0-9]{27}$/, On = /^[a-zA-Z0-9_-]{21}$/, Sn = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, In = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, je = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, En = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Pn = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Tn() {
  return new RegExp(Pn, "u");
}
const Nn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, jn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, An = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, xn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Cn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, dt = /^[A-Za-z0-9_-]*$/, Mn = /^\+[1-9]\d{6,14}$/, ft = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Rn = new RegExp(`^${ft}$`);
function pt(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Dn(e) {
  return new RegExp(`^${pt(e)}$`);
}
function Fn(e) {
  const t = pt({ precision: e.precision }), n = ["Z"];
  e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${t}(?:${n.join("|")})`;
  return new RegExp(`^${ft}T(?:${r})$`);
}
const Un = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Jn = /^-?\d+$/, qn = /^-?\d+(?:\.\d+)?$/, Hn = /^[^A-Z]*$/, Ln = /^[^a-z]*$/, S = u("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), ht = { number: "number", bigint: "bigint", object: "date" }, mt = u("$ZodCheckLessThan", (e, t) => {
  S.init(e, t);
  const n = ht[typeof t.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, s = (t.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < s && (t.inclusive ? o.maximum = t.value : o.exclusiveMaximum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({ origin: n, code: "too_big", maximum: typeof t.value == "object" ? t.value.getTime() : t.value, input: r.value, inclusive: t.inclusive, inst: e, continue: !t.abort });
  };
}), gt = u("$ZodCheckGreaterThan", (e, t) => {
  S.init(e, t);
  const n = ht[typeof t.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, s = (t.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > s && (t.inclusive ? o.minimum = t.value : o.exclusiveMinimum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({ origin: n, code: "too_small", minimum: typeof t.value == "object" ? t.value.getTime() : t.value, input: r.value, inclusive: t.inclusive, inst: e, continue: !t.abort });
  };
}), Vn = u("$ZodCheckMultipleOf", (e, t) => {
  S.init(e, t), e._zod.onattach.push((n) => {
    var r;
    (r = n._zod.bag).multipleOf ?? (r.multipleOf = t.value);
  }), e._zod.check = (n) => {
    if (typeof n.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : Gt(n.value, t.value) === 0) || n.issues.push({ origin: typeof n.value, code: "not_multiple_of", divisor: t.value, input: n.value, inst: e, continue: !t.abort });
  };
}), Wn = u("$ZodCheckNumberFormat", (e, t) => {
  var _a2;
  S.init(e, t), t.format = t.format || "float64";
  const n = (_a2 = t.format) == null ? void 0 : _a2.includes("int"), r = n ? "int" : "number", [o, s] = en[t.format];
  e._zod.onattach.push((a) => {
    const i = a._zod.bag;
    i.format = t.format, i.minimum = o, i.maximum = s, n && (i.pattern = Jn);
  }), e._zod.check = (a) => {
    const i = a.value;
    if (n) {
      if (!Number.isInteger(i)) {
        a.issues.push({ expected: r, format: t.format, code: "invalid_type", continue: false, input: i, inst: e });
        return;
      }
      if (!Number.isSafeInteger(i)) {
        i > 0 ? a.issues.push({ input: i, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e, origin: r, inclusive: true, continue: !t.abort }) : a.issues.push({ input: i, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e, origin: r, inclusive: true, continue: !t.abort });
        return;
      }
    }
    i < o && a.issues.push({ origin: "number", input: i, code: "too_small", minimum: o, inclusive: true, inst: e, continue: !t.abort }), i > s && a.issues.push({ origin: "number", input: i, code: "too_big", maximum: s, inclusive: true, inst: e, continue: !t.abort });
  };
}), Bn = u("$ZodCheckMaxLength", (e, t) => {
  var n;
  S.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !ze(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length <= t.maximum) return;
    const a = $e(o);
    r.issues.push({ origin: a, code: "too_big", maximum: t.maximum, inclusive: true, input: o, inst: e, continue: !t.abort });
  };
}), Gn = u("$ZodCheckMinLength", (e, t) => {
  var n;
  S.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !ze(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length >= t.minimum) return;
    const a = $e(o);
    r.issues.push({ origin: a, code: "too_small", minimum: t.minimum, inclusive: true, input: o, inst: e, continue: !t.abort });
  };
}), Kn = u("$ZodCheckLengthEquals", (e, t) => {
  var n;
  S.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !ze(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.minimum = t.length, o.maximum = t.length, o.length = t.length;
  }), e._zod.check = (r) => {
    const o = r.value, s = o.length;
    if (s === t.length) return;
    const a = $e(o), i = s > t.length;
    r.issues.push({ origin: a, ...i ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length }, inclusive: true, exact: true, input: r.value, inst: e, continue: !t.abort });
  };
}), pe = u("$ZodCheckStringFormat", (e, t) => {
  var n, r;
  S.init(e, t), e._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.format = t.format, t.pattern && (s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(t.pattern));
  }), t.pattern ? (n = e._zod).check ?? (n.check = (o) => {
    t.pattern.lastIndex = 0, !t.pattern.test(o.value) && o.issues.push({ origin: "string", code: "invalid_format", format: t.format, input: o.value, ...t.pattern ? { pattern: t.pattern.toString() } : {}, inst: e, continue: !t.abort });
  }) : (r = e._zod).check ?? (r.check = () => {
  });
}), Yn = u("$ZodCheckRegex", (e, t) => {
  pe.init(e, t), e._zod.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: n.value, pattern: t.pattern.toString(), inst: e, continue: !t.abort });
  };
}), Xn = u("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Hn), pe.init(e, t);
}), Qn = u("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Ln), pe.init(e, t);
}), er = u("$ZodCheckIncludes", (e, t) => {
  S.init(e, t);
  const n = le(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
  t.pattern = r, e._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(r);
  }), e._zod.check = (o) => {
    o.value.includes(t.includes, t.position) || o.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: t.includes, input: o.value, inst: e, continue: !t.abort });
  };
}), tr = u("$ZodCheckStartsWith", (e, t) => {
  S.init(e, t);
  const n = new RegExp(`^${le(t.prefix)}.*`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.startsWith(t.prefix) || r.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: t.prefix, input: r.value, inst: e, continue: !t.abort });
  };
}), nr = u("$ZodCheckEndsWith", (e, t) => {
  S.init(e, t);
  const n = new RegExp(`.*${le(t.suffix)}$`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.endsWith(t.suffix) || r.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: t.suffix, input: r.value, inst: e, continue: !t.abort });
  };
}), rr = u("$ZodCheckOverwrite", (e, t) => {
  S.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class or {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const r = t.split(`
`).filter((a) => a), o = Math.min(...r.map((a) => a.length - a.trimStart().length)), s = r.map((a) => a.slice(o)).map((a) => " ".repeat(this.indent * 2) + a);
    for (const a of s) this.content.push(a);
  }
  compile() {
    const t = Function, n = this == null ? void 0 : this.args, o = [...((this == null ? void 0 : this.content) ?? [""]).map((s) => `  ${s}`)];
    return new t(...n, o.join(`
`));
  }
}
const ar = { major: 4, minor: 3, patch: 6 }, k = u("$ZodType", (e, t) => {
  var _a2;
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = ar;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const o of r) for (const s of o._zod.onattach) s(e);
  if (r.length === 0) (n = e._zod).deferred ?? (n.deferred = []), (_a2 = e._zod.deferred) == null ? void 0 : _a2.push(() => {
    e._zod.run = e._zod.parse;
  });
  else {
    const o = (a, i, c) => {
      let l = U(a), f;
      for (const m of i) {
        if (m._zod.def.when) {
          if (!m._zod.def.when(a)) continue;
        } else if (l) continue;
        const d = a.issues.length, p = m._zod.check(a);
        if (p instanceof Promise && (c == null ? void 0 : c.async) === false) throw new J();
        if (f || p instanceof Promise) f = (f ?? Promise.resolve()).then(async () => {
          await p, a.issues.length !== d && (l || (l = U(a, d)));
        });
        else {
          if (a.issues.length === d) continue;
          l || (l = U(a, d));
        }
      }
      return f ? f.then(() => a) : a;
    }, s = (a, i, c) => {
      if (U(a)) return a.aborted = true, a;
      const l = o(i, r, c);
      if (l instanceof Promise) {
        if (c.async === false) throw new J();
        return l.then((f) => e._zod.parse(f, c));
      }
      return e._zod.parse(l, c);
    };
    e._zod.run = (a, i) => {
      if (i.skipChecks) return e._zod.parse(a, i);
      if (i.direction === "backward") {
        const l = e._zod.parse({ value: a.value, issues: [] }, { ...i, skipChecks: true });
        return l instanceof Promise ? l.then((f) => s(f, a, i)) : s(l, a, i);
      }
      const c = e._zod.parse(a, i);
      if (c instanceof Promise) {
        if (i.async === false) throw new J();
        return c.then((l) => o(l, r, i));
      }
      return o(c, r, i);
    };
  }
  g(e, "~standard", () => ({ validate: (o) => {
    var _a3;
    try {
      const s = dn(e, o);
      return s.success ? { value: s.data } : { issues: (_a3 = s.error) == null ? void 0 : _a3.issues };
    } catch {
      return fn(e, o).then((a) => {
        var _a4;
        return a.success ? { value: a.data } : { issues: (_a4 = a.error) == null ? void 0 : _a4.issues };
      });
    }
  }, vendor: "zod", version: 1 }));
}), Ie = u("$ZodString", (e, t) => {
  var _a2;
  k.init(e, t), e._zod.pattern = [...((_a2 = e == null ? void 0 : e._zod.bag) == null ? void 0 : _a2.patterns) ?? []].pop() ?? Un(e._zod.bag), e._zod.parse = (n, r) => {
    if (t.coerce) try {
      n.value = String(n.value);
    } catch {
    }
    return typeof n.value == "string" || n.issues.push({ expected: "string", code: "invalid_type", input: n.value, inst: e }), n;
  };
}), _ = u("$ZodStringFormat", (e, t) => {
  pe.init(e, t), Ie.init(e, t);
}), sr = u("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = In), _.init(e, t);
}), ir = u("$ZodUUID", (e, t) => {
  if (t.version) {
    const r = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
    if (r === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = je(r));
  } else t.pattern ?? (t.pattern = je());
  _.init(e, t);
}), cr = u("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = En), _.init(e, t);
}), ur = u("$ZodURL", (e, t) => {
  _.init(e, t), e._zod.check = (n) => {
    try {
      const r = n.value.trim(), o = new URL(r);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(o.hostname) || n.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: t.hostname.source, input: n.value, inst: e, continue: !t.abort })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || n.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: t.protocol.source, input: n.value, inst: e, continue: !t.abort })), t.normalize ? n.value = o.href : n.value = r;
      return;
    } catch {
      n.issues.push({ code: "invalid_format", format: "url", input: n.value, inst: e, continue: !t.abort });
    }
  };
}), lr = u("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Tn()), _.init(e, t);
}), dr = u("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = On), _.init(e, t);
}), fr = u("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = bn), _.init(e, t);
}), pr = u("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = yn), _.init(e, t);
}), hr = u("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = zn), _.init(e, t);
}), mr = u("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Zn), _.init(e, t);
}), gr = u("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = $n), _.init(e, t);
}), _r = u("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Fn(t)), _.init(e, t);
}), vr = u("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Rn), _.init(e, t);
}), kr = u("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Dn(t)), _.init(e, t);
}), wr = u("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Sn), _.init(e, t);
}), br = u("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Nn), _.init(e, t), e._zod.bag.format = "ipv4";
}), yr = u("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = jn), _.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
    try {
      new URL(`http://[${n.value}]`);
    } catch {
      n.issues.push({ code: "invalid_format", format: "ipv6", input: n.value, inst: e, continue: !t.abort });
    }
  };
}), zr = u("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = An), _.init(e, t);
}), Zr = u("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = xn), _.init(e, t), e._zod.check = (n) => {
    const r = n.value.split("/");
    try {
      if (r.length !== 2) throw new Error();
      const [o, s] = r;
      if (!s) throw new Error();
      const a = Number(s);
      if (`${a}` !== s) throw new Error();
      if (a < 0 || a > 128) throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      n.issues.push({ code: "invalid_format", format: "cidrv6", input: n.value, inst: e, continue: !t.abort });
    }
  };
});
function _t(e) {
  if (e === "") return true;
  if (e.length % 4 !== 0) return false;
  try {
    return atob(e), true;
  } catch {
    return false;
  }
}
const $r = u("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Cn), _.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
    _t(n.value) || n.issues.push({ code: "invalid_format", format: "base64", input: n.value, inst: e, continue: !t.abort });
  };
});
function Or(e) {
  if (!dt.test(e)) return false;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return _t(n);
}
const Sr = u("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = dt), _.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
    Or(n.value) || n.issues.push({ code: "invalid_format", format: "base64url", input: n.value, inst: e, continue: !t.abort });
  };
}), Ir = u("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Mn), _.init(e, t);
});
function Er(e, t = null) {
  try {
    const n = e.split(".");
    if (n.length !== 3) return false;
    const [r] = n;
    if (!r) return false;
    const o = JSON.parse(atob(r));
    return !("typ" in o && (o == null ? void 0 : o.typ) !== "JWT" || !o.alg || t && (!("alg" in o) || o.alg !== t));
  } catch {
    return false;
  }
}
const Pr = u("$ZodJWT", (e, t) => {
  _.init(e, t), e._zod.check = (n) => {
    Er(n.value, t.alg) || n.issues.push({ code: "invalid_format", format: "jwt", input: n.value, inst: e, continue: !t.abort });
  };
}), vt = u("$ZodNumber", (e, t) => {
  k.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? qn, e._zod.parse = (n, r) => {
    if (t.coerce) try {
      n.value = Number(n.value);
    } catch {
    }
    const o = n.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o)) return n;
    const s = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return n.issues.push({ expected: "number", code: "invalid_type", input: o, inst: e, ...s ? { received: s } : {} }), n;
  };
}), Tr = u("$ZodNumberFormat", (e, t) => {
  Wn.init(e, t), vt.init(e, t);
}), Nr = u("$ZodUnknown", (e, t) => {
  k.init(e, t), e._zod.parse = (n) => n;
}), jr = u("$ZodNever", (e, t) => {
  k.init(e, t), e._zod.parse = (n, r) => (n.issues.push({ expected: "never", code: "invalid_type", input: n.value, inst: e }), n);
});
function Ae(e, t, n) {
  e.issues.length && t.issues.push(...it(n, e.issues)), t.value[n] = e.value;
}
const Ar = u("$ZodArray", (e, t) => {
  k.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value;
    if (!Array.isArray(o)) return n.issues.push({ expected: "array", code: "invalid_type", input: o, inst: e }), n;
    n.value = Array(o.length);
    const s = [];
    for (let a = 0; a < o.length; a++) {
      const i = o[a], c = t.element._zod.run({ value: i, issues: [] }, r);
      c instanceof Promise ? s.push(c.then((l) => Ae(l, n, a))) : Ae(c, n, a);
    }
    return s.length ? Promise.all(s).then(() => n) : n;
  };
});
function ae(e, t, n, r, o) {
  if (e.issues.length) {
    if (o && !(n in r)) return;
    t.issues.push(...it(n, e.issues));
  }
  e.value === void 0 ? n in r && (t.value[n] = void 0) : t.value[n] = e.value;
}
function kt(e) {
  var _a2, _b, _c, _d;
  const t = Object.keys(e.shape);
  for (const r of t) if (!((_d = (_c = (_b = (_a2 = e.shape) == null ? void 0 : _a2[r]) == null ? void 0 : _b._zod) == null ? void 0 : _c.traits) == null ? void 0 : _d.has("$ZodType"))) throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const n = Qt(e.shape);
  return { ...e, keys: t, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(n) };
}
function wt(e, t, n, r, o, s) {
  const a = [], i = o.keySet, c = o.catchall._zod, l = c.def.type, f = c.optout === "optional";
  for (const m in t) {
    if (i.has(m)) continue;
    if (l === "never") {
      a.push(m);
      continue;
    }
    const d = c.run({ value: t[m], issues: [] }, r);
    d instanceof Promise ? e.push(d.then((p) => ae(p, n, m, t, f))) : ae(d, n, m, t, f);
  }
  return a.length && n.issues.push({ code: "unrecognized_keys", keys: a, input: t, inst: s }), e.length ? Promise.all(e).then(() => n) : n;
}
const xr = u("$ZodObject", (e, t) => {
  var _a2;
  if (k.init(e, t), !((_a2 = Object.getOwnPropertyDescriptor(t, "shape")) == null ? void 0 : _a2.get)) {
    const i = t.shape;
    Object.defineProperty(t, "shape", { get: () => {
      const c = { ...i };
      return Object.defineProperty(t, "shape", { value: c }), c;
    } });
  }
  const r = ye(() => kt(t));
  g(e._zod, "propValues", () => {
    const i = t.shape, c = {};
    for (const l in i) {
      const f = i[l]._zod;
      if (f.values) {
        c[l] ?? (c[l] = /* @__PURE__ */ new Set());
        for (const m of f.values) c[l].add(m);
      }
    }
    return c;
  });
  const o = oe, s = t.catchall;
  let a;
  e._zod.parse = (i, c) => {
    a ?? (a = r.value);
    const l = i.value;
    if (!o(l)) return i.issues.push({ expected: "object", code: "invalid_type", input: l, inst: e }), i;
    i.value = {};
    const f = [], m = a.shape;
    for (const d of a.keys) {
      const p = m[d], b = p._zod.optout === "optional", y = p._zod.run({ value: l[d], issues: [] }, c);
      y instanceof Promise ? f.push(y.then((ee) => ae(ee, i, d, l, b))) : ae(y, i, d, l, b);
    }
    return s ? wt(f, l, i, c, r.value, e) : f.length ? Promise.all(f).then(() => i) : i;
  };
}), Cr = u("$ZodObjectJIT", (e, t) => {
  xr.init(e, t);
  const n = e._zod.parse, r = ye(() => kt(t)), o = (d) => {
    var _a2, _b;
    const p = new or(["shape", "payload", "ctx"]), b = r.value, y = (T) => {
      const $ = Ne(T);
      return `shape[${$}]._zod.run({ value: input[${$}], issues: [] }, ctx)`;
    };
    p.write("const input = payload.value;");
    const ee = /* @__PURE__ */ Object.create(null);
    let Nt = 0;
    for (const T of b.keys) ee[T] = `key_${Nt++}`;
    p.write("const newResult = {};");
    for (const T of b.keys) {
      const $ = ee[T], P = Ne(T), At = ((_b = (_a2 = d[T]) == null ? void 0 : _a2._zod) == null ? void 0 : _b.optout) === "optional";
      p.write(`const ${$} = ${y(T)};`), At ? p.write(`
        if (${$}.issues.length) {
          if (${P} in input) {
            payload.issues = payload.issues.concat(${$}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${P}, ...iss.path] : [${P}]
            })));
          }
        }
        
        if (${$}.value === undefined) {
          if (${P} in input) {
            newResult[${P}] = undefined;
          }
        } else {
          newResult[${P}] = ${$}.value;
        }
        
      `) : p.write(`
        if (${$}.issues.length) {
          payload.issues = payload.issues.concat(${$}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${P}, ...iss.path] : [${P}]
          })));
        }
        
        if (${$}.value === undefined) {
          if (${P} in input) {
            newResult[${P}] = undefined;
          }
        } else {
          newResult[${P}] = ${$}.value;
        }
        
      `);
    }
    p.write("payload.value = newResult;"), p.write("return payload;");
    const jt = p.compile();
    return (T, $) => jt(d, T, $);
  };
  let s;
  const a = oe, i = !rt.jitless, l = i && Yt.value, f = t.catchall;
  let m;
  e._zod.parse = (d, p) => {
    m ?? (m = r.value);
    const b = d.value;
    return a(b) ? i && l && (p == null ? void 0 : p.async) === false && p.jitless !== true ? (s || (s = o(t.shape)), d = s(d, p), f ? wt([], b, d, p, m, e) : d) : n(d, p) : (d.issues.push({ expected: "object", code: "invalid_type", input: b, inst: e }), d);
  };
});
function xe(e, t, n, r) {
  for (const s of e) if (s.issues.length === 0) return t.value = s.value, t;
  const o = e.filter((s) => !U(s));
  return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({ code: "invalid_union", input: t.value, inst: n, errors: e.map((s) => s.issues.map((a) => C(a, r, x()))) }), t);
}
const Mr = u("$ZodUnion", (e, t) => {
  k.init(e, t), g(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), g(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), g(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values)) return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), g(e._zod, "pattern", () => {
    if (t.options.every((o) => o._zod.pattern)) {
      const o = t.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${o.map((s) => Ze(s.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1, r = t.options[0]._zod.run;
  e._zod.parse = (o, s) => {
    if (n) return r(o, s);
    let a = false;
    const i = [];
    for (const c of t.options) {
      const l = c._zod.run({ value: o.value, issues: [] }, s);
      if (l instanceof Promise) i.push(l), a = true;
      else {
        if (l.issues.length === 0) return l;
        i.push(l);
      }
    }
    return a ? Promise.all(i).then((c) => xe(c, o, e, s)) : xe(i, o, e, s);
  };
}), Rr = u("$ZodIntersection", (e, t) => {
  k.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value, s = t.left._zod.run({ value: o, issues: [] }, r), a = t.right._zod.run({ value: o, issues: [] }, r);
    return s instanceof Promise || a instanceof Promise ? Promise.all([s, a]).then(([c, l]) => Ce(n, c, l)) : Ce(n, s, a);
  };
});
function ve(e, t) {
  if (e === t) return { valid: true, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t) return { valid: true, data: e };
  if (X(e) && X(t)) {
    const n = Object.keys(t), r = Object.keys(e).filter((s) => n.indexOf(s) !== -1), o = { ...e, ...t };
    for (const s of r) {
      const a = ve(e[s], t[s]);
      if (!a.valid) return { valid: false, mergeErrorPath: [s, ...a.mergeErrorPath] };
      o[s] = a.data;
    }
    return { valid: true, data: o };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: false, mergeErrorPath: [] };
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], s = t[r], a = ve(o, s);
      if (!a.valid) return { valid: false, mergeErrorPath: [r, ...a.mergeErrorPath] };
      n.push(a.data);
    }
    return { valid: true, data: n };
  }
  return { valid: false, mergeErrorPath: [] };
}
function Ce(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  let o;
  for (const i of t.issues) if (i.code === "unrecognized_keys") {
    o ?? (o = i);
    for (const c of i.keys) r.has(c) || r.set(c, {}), r.get(c).l = true;
  } else e.issues.push(i);
  for (const i of n.issues) if (i.code === "unrecognized_keys") for (const c of i.keys) r.has(c) || r.set(c, {}), r.get(c).r = true;
  else e.issues.push(i);
  const s = [...r].filter(([, i]) => i.l && i.r).map(([i]) => i);
  if (s.length && o && e.issues.push({ ...o, keys: s }), U(e)) return e;
  const a = ve(t.value, n.value);
  if (!a.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return e.value = a.data, e;
}
const Dr = u("$ZodEnum", (e, t) => {
  k.init(e, t);
  const n = ot(t.entries), r = new Set(n);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${n.filter((o) => Xt.has(typeof o)).map((o) => typeof o == "string" ? le(o) : o.toString()).join("|")})$`), e._zod.parse = (o, s) => {
    const a = o.value;
    return r.has(a) || o.issues.push({ code: "invalid_value", values: n, input: a, inst: e }), o;
  };
}), Fr = u("$ZodTransform", (e, t) => {
  k.init(e, t), e._zod.parse = (n, r) => {
    if (r.direction === "backward") throw new nt(e.constructor.name);
    const o = t.transform(n.value, n);
    if (r.async) return (o instanceof Promise ? o : Promise.resolve(o)).then((a) => (n.value = a, n));
    if (o instanceof Promise) throw new J();
    return n.value = o, n;
  };
});
function Me(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const bt = u("$ZodOptional", (e, t) => {
  k.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", g(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), g(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${Ze(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, r) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(n, r);
      return o instanceof Promise ? o.then((s) => Me(s, n.value)) : Me(o, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, r);
  };
}), Ur = u("$ZodExactOptional", (e, t) => {
  bt.init(e, t), g(e._zod, "values", () => t.innerType._zod.values), g(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, r) => t.innerType._zod.run(n, r);
}), Jr = u("$ZodNullable", (e, t) => {
  k.init(e, t), g(e._zod, "optin", () => t.innerType._zod.optin), g(e._zod, "optout", () => t.innerType._zod.optout), g(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${Ze(n.source)}|null)$`) : void 0;
  }), g(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, r) => n.value === null ? n : t.innerType._zod.run(n, r);
}), qr = u("$ZodDefault", (e, t) => {
  k.init(e, t), e._zod.optin = "optional", g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward") return t.innerType._zod.run(n, r);
    if (n.value === void 0) return n.value = t.defaultValue, n;
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => Re(s, t)) : Re(o, t);
  };
});
function Re(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Hr = u("$ZodPrefault", (e, t) => {
  k.init(e, t), e._zod.optin = "optional", g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => (r.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, r));
}), Lr = u("$ZodNonOptional", (e, t) => {
  k.init(e, t), g(e._zod, "values", () => {
    const n = t.innerType._zod.values;
    return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (n, r) => {
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => De(s, e)) : De(o, e);
  };
});
function De(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: t }), e;
}
const Vr = u("$ZodCatch", (e, t) => {
  k.init(e, t), g(e._zod, "optin", () => t.innerType._zod.optin), g(e._zod, "optout", () => t.innerType._zod.optout), g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward") return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => (n.value = s.value, s.issues.length && (n.value = t.catchValue({ ...n, error: { issues: s.issues.map((a) => C(a, r, x())) }, input: n.value }), n.issues = []), n)) : (n.value = o.value, o.issues.length && (n.value = t.catchValue({ ...n, error: { issues: o.issues.map((s) => C(s, r, x())) }, input: n.value }), n.issues = []), n);
  };
}), Wr = u("$ZodPipe", (e, t) => {
  k.init(e, t), g(e._zod, "values", () => t.in._zod.values), g(e._zod, "optin", () => t.in._zod.optin), g(e._zod, "optout", () => t.out._zod.optout), g(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, r) => {
    if (r.direction === "backward") {
      const s = t.out._zod.run(n, r);
      return s instanceof Promise ? s.then((a) => ne(a, t.in, r)) : ne(s, t.in, r);
    }
    const o = t.in._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => ne(s, t.out, r)) : ne(o, t.out, r);
  };
});
function ne(e, t, n) {
  return e.issues.length ? (e.aborted = true, e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const Br = u("$ZodReadonly", (e, t) => {
  k.init(e, t), g(e._zod, "propValues", () => t.innerType._zod.propValues), g(e._zod, "values", () => t.innerType._zod.values), g(e._zod, "optin", () => {
    var _a2, _b;
    return (_b = (_a2 = t.innerType) == null ? void 0 : _a2._zod) == null ? void 0 : _b.optin;
  }), g(e._zod, "optout", () => {
    var _a2, _b;
    return (_b = (_a2 = t.innerType) == null ? void 0 : _a2._zod) == null ? void 0 : _b.optout;
  }), e._zod.parse = (n, r) => {
    if (r.direction === "backward") return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then(Fe) : Fe(o);
  };
});
function Fe(e) {
  return e.value = Object.freeze(e.value), e;
}
const Gr = u("$ZodCustom", (e, t) => {
  S.init(e, t), k.init(e, t), e._zod.parse = (n, r) => n, e._zod.check = (n) => {
    const r = n.value, o = t.fn(r);
    if (o instanceof Promise) return o.then((s) => Ue(s, n, r, e));
    Ue(o, n, r, e);
  };
});
function Ue(e, t, n, r) {
  if (!e) {
    const o = { code: "custom", input: n, inst: r, path: [...r._zod.def.path ?? []], continue: !r._zod.def.abort };
    r._zod.def.params && (o.params = r._zod.def.params), t.issues.push(Q(o));
  }
}
var Je;
class Kr {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...n) {
    const r = n[0];
    return this._map.set(t, r), r && typeof r == "object" && "id" in r && this._idmap.set(r.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const n = this._map.get(t);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(t), this;
  }
  get(t) {
    const n = t._zod.parent;
    if (n) {
      const r = { ...this.get(n) ?? {} };
      delete r.id;
      const o = { ...r, ...this._map.get(t) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Yr() {
  return new Kr();
}
(Je = globalThis).__zod_globalRegistry ?? (Je.__zod_globalRegistry = Yr());
const V = globalThis.__zod_globalRegistry;
function Xr(e, t) {
  return new e({ type: "string", ...h(t) });
}
function Qr(e, t) {
  return new e({ type: "string", format: "email", check: "string_format", abort: false, ...h(t) });
}
function qe(e, t) {
  return new e({ type: "string", format: "guid", check: "string_format", abort: false, ...h(t) });
}
function eo(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, ...h(t) });
}
function to(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...h(t) });
}
function no(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...h(t) });
}
function ro(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...h(t) });
}
function oo(e, t) {
  return new e({ type: "string", format: "url", check: "string_format", abort: false, ...h(t) });
}
function ao(e, t) {
  return new e({ type: "string", format: "emoji", check: "string_format", abort: false, ...h(t) });
}
function so(e, t) {
  return new e({ type: "string", format: "nanoid", check: "string_format", abort: false, ...h(t) });
}
function io(e, t) {
  return new e({ type: "string", format: "cuid", check: "string_format", abort: false, ...h(t) });
}
function co(e, t) {
  return new e({ type: "string", format: "cuid2", check: "string_format", abort: false, ...h(t) });
}
function uo(e, t) {
  return new e({ type: "string", format: "ulid", check: "string_format", abort: false, ...h(t) });
}
function lo(e, t) {
  return new e({ type: "string", format: "xid", check: "string_format", abort: false, ...h(t) });
}
function fo(e, t) {
  return new e({ type: "string", format: "ksuid", check: "string_format", abort: false, ...h(t) });
}
function po(e, t) {
  return new e({ type: "string", format: "ipv4", check: "string_format", abort: false, ...h(t) });
}
function ho(e, t) {
  return new e({ type: "string", format: "ipv6", check: "string_format", abort: false, ...h(t) });
}
function mo(e, t) {
  return new e({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...h(t) });
}
function go(e, t) {
  return new e({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...h(t) });
}
function _o(e, t) {
  return new e({ type: "string", format: "base64", check: "string_format", abort: false, ...h(t) });
}
function vo(e, t) {
  return new e({ type: "string", format: "base64url", check: "string_format", abort: false, ...h(t) });
}
function ko(e, t) {
  return new e({ type: "string", format: "e164", check: "string_format", abort: false, ...h(t) });
}
function wo(e, t) {
  return new e({ type: "string", format: "jwt", check: "string_format", abort: false, ...h(t) });
}
function bo(e, t) {
  return new e({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...h(t) });
}
function yo(e, t) {
  return new e({ type: "string", format: "date", check: "string_format", ...h(t) });
}
function zo(e, t) {
  return new e({ type: "string", format: "time", check: "string_format", precision: null, ...h(t) });
}
function Zo(e, t) {
  return new e({ type: "string", format: "duration", check: "string_format", ...h(t) });
}
function $o(e, t) {
  return new e({ type: "number", checks: [], ...h(t) });
}
function Oo(e, t) {
  return new e({ type: "number", check: "number_format", abort: false, format: "safeint", ...h(t) });
}
function So(e) {
  return new e({ type: "unknown" });
}
function Io(e, t) {
  return new e({ type: "never", ...h(t) });
}
function He(e, t) {
  return new mt({ check: "less_than", ...h(t), value: e, inclusive: false });
}
function he(e, t) {
  return new mt({ check: "less_than", ...h(t), value: e, inclusive: true });
}
function Le(e, t) {
  return new gt({ check: "greater_than", ...h(t), value: e, inclusive: false });
}
function me(e, t) {
  return new gt({ check: "greater_than", ...h(t), value: e, inclusive: true });
}
function Ve(e, t) {
  return new Vn({ check: "multiple_of", ...h(t), value: e });
}
function yt(e, t) {
  return new Bn({ check: "max_length", ...h(t), maximum: e });
}
function se(e, t) {
  return new Gn({ check: "min_length", ...h(t), minimum: e });
}
function zt(e, t) {
  return new Kn({ check: "length_equals", ...h(t), length: e });
}
function Eo(e, t) {
  return new Yn({ check: "string_format", format: "regex", ...h(t), pattern: e });
}
function Po(e) {
  return new Xn({ check: "string_format", format: "lowercase", ...h(e) });
}
function To(e) {
  return new Qn({ check: "string_format", format: "uppercase", ...h(e) });
}
function No(e, t) {
  return new er({ check: "string_format", format: "includes", ...h(t), includes: e });
}
function jo(e, t) {
  return new tr({ check: "string_format", format: "starts_with", ...h(t), prefix: e });
}
function Ao(e, t) {
  return new nr({ check: "string_format", format: "ends_with", ...h(t), suffix: e });
}
function L(e) {
  return new rr({ check: "overwrite", tx: e });
}
function xo(e) {
  return L((t) => t.normalize(e));
}
function Co() {
  return L((e) => e.trim());
}
function Mo() {
  return L((e) => e.toLowerCase());
}
function Ro() {
  return L((e) => e.toUpperCase());
}
function Do() {
  return L((e) => Kt(e));
}
function Fo(e, t, n) {
  return new e({ type: "array", element: t, ...h(n) });
}
function Uo(e, t, n) {
  return new e({ type: "custom", check: "custom", fn: t, ...h(n) });
}
function Jo(e) {
  const t = qo((n) => (n.addIssue = (r) => {
    if (typeof r == "string") n.issues.push(Q(r, n.value, t._zod.def));
    else {
      const o = r;
      o.fatal && (o.continue = false), o.code ?? (o.code = "custom"), o.input ?? (o.input = n.value), o.inst ?? (o.inst = t), o.continue ?? (o.continue = !t._zod.def.abort), n.issues.push(Q(o));
    }
  }, e(n.value, n)));
  return t;
}
function qo(e, t) {
  const n = new S({ check: "custom", ...h(t) });
  return n._zod.check = e, n;
}
function Zt(e) {
  let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), { processors: e.processors ?? {}, metadataRegistry: (e == null ? void 0 : e.metadata) ?? V, target: t, unrepresentable: (e == null ? void 0 : e.unrepresentable) ?? "throw", override: (e == null ? void 0 : e.override) ?? (() => {
  }), io: (e == null ? void 0 : e.io) ?? "output", counter: 0, seen: /* @__PURE__ */ new Map(), cycles: (e == null ? void 0 : e.cycles) ?? "ref", reused: (e == null ? void 0 : e.reused) ?? "inline", external: (e == null ? void 0 : e.external) ?? void 0 };
}
function z(e, t, n = { path: [], schemaPath: [] }) {
  var _a2, _b;
  var r;
  const o = e._zod.def, s = t.seen.get(e);
  if (s) return s.count++, n.schemaPath.includes(e) && (s.cycle = n.path), s.schema;
  const a = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, a);
  const i = (_b = (_a2 = e._zod).toJSONSchema) == null ? void 0 : _b.call(_a2);
  if (i) a.schema = i;
  else {
    const f = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, a.schema, f);
    else {
      const d = a.schema, p = t.processors[o.type];
      if (!p) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o.type}`);
      p(e, t, d, f);
    }
    const m = e._zod.parent;
    m && (a.ref || (a.ref = m), z(m, t, f), t.seen.get(m).isParent = true);
  }
  const c = t.metadataRegistry.get(e);
  return c && Object.assign(a.schema, c), t.io === "input" && Z(e) && (delete a.schema.examples, delete a.schema.default), t.io === "input" && a.schema._prefault && ((r = a.schema).default ?? (r.default = a.schema._prefault)), delete a.schema._prefault, t.seen.get(e).schema;
}
function $t(e, t) {
  var _a2, _b, _c, _d;
  const n = e.seen.get(t);
  if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = /* @__PURE__ */ new Map();
  for (const a of e.seen.entries()) {
    const i = (_a2 = e.metadataRegistry.get(a[0])) == null ? void 0 : _a2.id;
    if (i) {
      const c = r.get(i);
      if (c && c !== a[0]) throw new Error(`Duplicate schema id "${i}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r.set(i, a[0]);
    }
  }
  const o = (a) => {
    var _a3;
    const i = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const m = (_a3 = e.external.registry.get(a[0])) == null ? void 0 : _a3.id, d = e.external.uri ?? ((b) => b);
      if (m) return { ref: d(m) };
      const p = a[1].defId ?? a[1].schema.id ?? `schema${e.counter++}`;
      return a[1].defId = p, { defId: p, ref: `${d("__shared")}#/${i}/${p}` };
    }
    if (a[1] === n) return { ref: "#" };
    const l = `#/${i}/`, f = a[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: f, ref: l + f };
  }, s = (a) => {
    if (a[1].schema.$ref) return;
    const i = a[1], { ref: c, defId: l } = o(a);
    i.def = { ...i.schema }, l && (i.defId = l);
    const f = i.schema;
    for (const m in f) delete f[m];
    f.$ref = c;
  };
  if (e.cycles === "throw") for (const a of e.seen.entries()) {
    const i = a[1];
    if (i.cycle) throw new Error(`Cycle detected: #/${(_b = i.cycle) == null ? void 0 : _b.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
  }
  for (const a of e.seen.entries()) {
    const i = a[1];
    if (t === a[0]) {
      s(a);
      continue;
    }
    if (e.external) {
      const l = (_c = e.external.registry.get(a[0])) == null ? void 0 : _c.id;
      if (t !== a[0] && l) {
        s(a);
        continue;
      }
    }
    if ((_d = e.metadataRegistry.get(a[0])) == null ? void 0 : _d.id) {
      s(a);
      continue;
    }
    if (i.cycle) {
      s(a);
      continue;
    }
    if (i.count > 1 && e.reused === "ref") {
      s(a);
      continue;
    }
  }
}
function Ot(e, t) {
  var _a2, _b, _c;
  const n = e.seen.get(t);
  if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (a) => {
    const i = e.seen.get(a);
    if (i.ref === null) return;
    const c = i.def ?? i.schema, l = { ...c }, f = i.ref;
    if (i.ref = null, f) {
      r(f);
      const d = e.seen.get(f), p = d.schema;
      if (p.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (c.allOf = c.allOf ?? [], c.allOf.push(p)) : Object.assign(c, p), Object.assign(c, l), a._zod.parent === f) for (const y in c) y === "$ref" || y === "allOf" || y in l || delete c[y];
      if (p.$ref && d.def) for (const y in c) y === "$ref" || y === "allOf" || y in d.def && JSON.stringify(c[y]) === JSON.stringify(d.def[y]) && delete c[y];
    }
    const m = a._zod.parent;
    if (m && m !== f) {
      r(m);
      const d = e.seen.get(m);
      if ((d == null ? void 0 : d.schema.$ref) && (c.$ref = d.schema.$ref, d.def)) for (const p in c) p === "$ref" || p === "allOf" || p in d.def && JSON.stringify(c[p]) === JSON.stringify(d.def[p]) && delete c[p];
    }
    e.override({ zodSchema: a, jsonSchema: c, path: i.path ?? [] });
  };
  for (const a of [...e.seen.entries()].reverse()) r(a[0]);
  const o = {};
  if (e.target === "draft-2020-12" ? o.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? o.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? o.$schema = "http://json-schema.org/draft-04/schema#" : e.target, (_a2 = e.external) == null ? void 0 : _a2.uri) {
    const a = (_b = e.external.registry.get(t)) == null ? void 0 : _b.id;
    if (!a) throw new Error("Schema is missing an `id` property");
    o.$id = e.external.uri(a);
  }
  Object.assign(o, n.def ?? n.schema);
  const s = ((_c = e.external) == null ? void 0 : _c.defs) ?? {};
  for (const a of e.seen.entries()) {
    const i = a[1];
    i.def && i.defId && (s[i.defId] = i.def);
  }
  e.external || Object.keys(s).length > 0 && (e.target === "draft-2020-12" ? o.$defs = s : o.definitions = s);
  try {
    const a = JSON.parse(JSON.stringify(o));
    return Object.defineProperty(a, "~standard", { value: { ...t["~standard"], jsonSchema: { input: ie(t, "input", e.processors), output: ie(t, "output", e.processors) } }, enumerable: false, writable: false }), a;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function Z(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e)) return false;
  n.seen.add(e);
  const r = e._zod.def;
  if (r.type === "transform") return true;
  if (r.type === "array") return Z(r.element, n);
  if (r.type === "set") return Z(r.valueType, n);
  if (r.type === "lazy") return Z(r.getter(), n);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return Z(r.innerType, n);
  if (r.type === "intersection") return Z(r.left, n) || Z(r.right, n);
  if (r.type === "record" || r.type === "map") return Z(r.keyType, n) || Z(r.valueType, n);
  if (r.type === "pipe") return Z(r.in, n) || Z(r.out, n);
  if (r.type === "object") {
    for (const o in r.shape) if (Z(r.shape[o], n)) return true;
    return false;
  }
  if (r.type === "union") {
    for (const o of r.options) if (Z(o, n)) return true;
    return false;
  }
  if (r.type === "tuple") {
    for (const o of r.items) if (Z(o, n)) return true;
    return !!(r.rest && Z(r.rest, n));
  }
  return false;
}
const Ho = (e, t = {}) => (n) => {
  const r = Zt({ ...n, processors: t });
  return z(e, r), $t(r, e), Ot(r, e);
}, ie = (e, t, n = {}) => (r) => {
  const { libraryOptions: o, target: s } = r ?? {}, a = Zt({ ...o ?? {}, target: s, io: t, processors: n });
  return z(e, a), $t(a, e), Ot(a, e);
}, Lo = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }, Vo = (e, t, n, r) => {
  const o = n;
  o.type = "string";
  const { minimum: s, maximum: a, format: i, patterns: c, contentEncoding: l } = e._zod.bag;
  if (typeof s == "number" && (o.minLength = s), typeof a == "number" && (o.maxLength = a), i && (o.format = Lo[i] ?? i, o.format === "" && delete o.format, i === "time" && delete o.format), l && (o.contentEncoding = l), c && c.size > 0) {
    const f = [...c];
    f.length === 1 ? o.pattern = f[0].source : f.length > 1 && (o.allOf = [...f.map((m) => ({ ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {}, pattern: m.source }))]);
  }
}, Wo = (e, t, n, r) => {
  const o = n, { minimum: s, maximum: a, format: i, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: f } = e._zod.bag;
  typeof i == "string" && i.includes("int") ? o.type = "integer" : o.type = "number", typeof f == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.minimum = f, o.exclusiveMinimum = true) : o.exclusiveMinimum = f), typeof s == "number" && (o.minimum = s, typeof f == "number" && t.target !== "draft-04" && (f >= s ? delete o.minimum : delete o.exclusiveMinimum)), typeof l == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.maximum = l, o.exclusiveMaximum = true) : o.exclusiveMaximum = l), typeof a == "number" && (o.maximum = a, typeof l == "number" && t.target !== "draft-04" && (l <= a ? delete o.maximum : delete o.exclusiveMaximum)), typeof c == "number" && (o.multipleOf = c);
}, Bo = (e, t, n, r) => {
  n.not = {};
}, Go = (e, t, n, r) => {
}, Ko = (e, t, n, r) => {
  const o = e._zod.def, s = ot(o.entries);
  s.every((a) => typeof a == "number") && (n.type = "number"), s.every((a) => typeof a == "string") && (n.type = "string"), n.enum = s;
}, Yo = (e, t, n, r) => {
  if (t.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
}, Xo = (e, t, n, r) => {
  if (t.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
}, Qo = (e, t, n, r) => {
  const o = n, s = e._zod.def, { minimum: a, maximum: i } = e._zod.bag;
  typeof a == "number" && (o.minItems = a), typeof i == "number" && (o.maxItems = i), o.type = "array", o.items = z(s.element, t, { ...r, path: [...r.path, "items"] });
}, ea = (e, t, n, r) => {
  var _a2;
  const o = n, s = e._zod.def;
  o.type = "object", o.properties = {};
  const a = s.shape;
  for (const l in a) o.properties[l] = z(a[l], t, { ...r, path: [...r.path, "properties", l] });
  const i = new Set(Object.keys(a)), c = new Set([...i].filter((l) => {
    const f = s.shape[l]._zod;
    return t.io === "input" ? f.optin === void 0 : f.optout === void 0;
  }));
  c.size > 0 && (o.required = Array.from(c)), ((_a2 = s.catchall) == null ? void 0 : _a2._zod.def.type) === "never" ? o.additionalProperties = false : s.catchall ? s.catchall && (o.additionalProperties = z(s.catchall, t, { ...r, path: [...r.path, "additionalProperties"] })) : t.io === "output" && (o.additionalProperties = false);
}, ta = (e, t, n, r) => {
  const o = e._zod.def, s = o.inclusive === false, a = o.options.map((i, c) => z(i, t, { ...r, path: [...r.path, s ? "oneOf" : "anyOf", c] }));
  s ? n.oneOf = a : n.anyOf = a;
}, na = (e, t, n, r) => {
  const o = e._zod.def, s = z(o.left, t, { ...r, path: [...r.path, "allOf", 0] }), a = z(o.right, t, { ...r, path: [...r.path, "allOf", 1] }), i = (l) => "allOf" in l && Object.keys(l).length === 1, c = [...i(s) ? s.allOf : [s], ...i(a) ? a.allOf : [a]];
  n.allOf = c;
}, ra = (e, t, n, r) => {
  const o = e._zod.def, s = z(o.innerType, t, r), a = t.seen.get(e);
  t.target === "openapi-3.0" ? (a.ref = o.innerType, n.nullable = true) : n.anyOf = [s, { type: "null" }];
}, oa = (e, t, n, r) => {
  const o = e._zod.def;
  z(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType;
}, aa = (e, t, n, r) => {
  const o = e._zod.def;
  z(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType, n.default = JSON.parse(JSON.stringify(o.defaultValue));
}, sa = (e, t, n, r) => {
  const o = e._zod.def;
  z(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
}, ia = (e, t, n, r) => {
  const o = e._zod.def;
  z(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType;
  let a;
  try {
    a = o.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = a;
}, ca = (e, t, n, r) => {
  const o = e._zod.def, s = t.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
  z(s, t, r);
  const a = t.seen.get(e);
  a.ref = s;
}, ua = (e, t, n, r) => {
  const o = e._zod.def;
  z(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType, n.readOnly = true;
}, St = (e, t, n, r) => {
  const o = e._zod.def;
  z(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType;
}, la = u("ZodISODateTime", (e, t) => {
  _r.init(e, t), v.init(e, t);
});
function da(e) {
  return bo(la, e);
}
const fa = u("ZodISODate", (e, t) => {
  vr.init(e, t), v.init(e, t);
});
function pa(e) {
  return yo(fa, e);
}
const ha = u("ZodISOTime", (e, t) => {
  kr.init(e, t), v.init(e, t);
});
function ma(e) {
  return zo(ha, e);
}
const ga = u("ZodISODuration", (e, t) => {
  wr.init(e, t), v.init(e, t);
});
function _a(e) {
  return Zo(ga, e);
}
const va = (e, t) => {
  ut.init(e, t), e.name = "ZodError", Object.defineProperties(e, { format: { value: (n) => ln(e, n) }, flatten: { value: (n) => un(e, n) }, addIssue: { value: (n) => {
    e.issues.push(n), e.message = JSON.stringify(e.issues, _e, 2);
  } }, addIssues: { value: (n) => {
    e.issues.push(...n), e.message = JSON.stringify(e.issues, _e, 2);
  } }, isEmpty: { get() {
    return e.issues.length === 0;
  } } });
}, E = u("ZodError", va, { Parent: Error }), ka = Oe(E), wa = Se(E), ba = de(E), ya = fe(E), za = pn(E), Za = hn(E), $a = mn(E), Oa = gn(E), Sa = _n(E), Ia = vn(E), Ea = kn(E), Pa = wn(E), w = u("ZodType", (e, t) => (k.init(e, t), Object.assign(e["~standard"], { jsonSchema: { input: ie(e, "input"), output: ie(e, "output") } }), e.toJSONSchema = Ho(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(N(t, { checks: [...t.checks ?? [], ...n.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)] }), { parent: true }), e.with = e.check, e.clone = (n, r) => j(e, n, r), e.brand = () => e, e.register = ((n, r) => (n.add(e, r), e)), e.parse = (n, r) => ka(e, n, r, { callee: e.parse }), e.safeParse = (n, r) => ba(e, n, r), e.parseAsync = async (n, r) => wa(e, n, r, { callee: e.parseAsync }), e.safeParseAsync = async (n, r) => ya(e, n, r), e.spa = e.safeParseAsync, e.encode = (n, r) => za(e, n, r), e.decode = (n, r) => Za(e, n, r), e.encodeAsync = async (n, r) => $a(e, n, r), e.decodeAsync = async (n, r) => Oa(e, n, r), e.safeEncode = (n, r) => Sa(e, n, r), e.safeDecode = (n, r) => Ia(e, n, r), e.safeEncodeAsync = async (n, r) => Ea(e, n, r), e.safeDecodeAsync = async (n, r) => Pa(e, n, r), e.refine = (n, r) => e.check(zs(n, r)), e.superRefine = (n) => e.check(Zs(n)), e.overwrite = (n) => e.check(L(n)), e.optional = () => Ke(e), e.exactOptional = () => ls(e), e.nullable = () => Ye(e), e.nullish = () => Ke(Ye(e)), e.nonoptional = (n) => gs(e, n), e.array = () => es(e), e.or = (n) => rs([e, n]), e.and = (n) => as(e, n), e.transform = (n) => Xe(e, cs(n)), e.default = (n) => ps(e, n), e.prefault = (n) => ms(e, n), e.catch = (n) => vs(e, n), e.pipe = (n) => Xe(e, n), e.readonly = () => bs(e), e.describe = (n) => {
  const r = e.clone();
  return V.add(r, { description: n }), r;
}, Object.defineProperty(e, "description", { get() {
  var _a2;
  return (_a2 = V.get(e)) == null ? void 0 : _a2.description;
}, configurable: true }), e.meta = (...n) => {
  if (n.length === 0) return V.get(e);
  const r = e.clone();
  return V.add(r, n[0]), r;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (n) => n(e), e)), It = u("_ZodString", (e, t) => {
  Ie.init(e, t), w.init(e, t), e._zod.processJSONSchema = (r, o, s) => Vo(e, r, o);
  const n = e._zod.bag;
  e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...r) => e.check(Eo(...r)), e.includes = (...r) => e.check(No(...r)), e.startsWith = (...r) => e.check(jo(...r)), e.endsWith = (...r) => e.check(Ao(...r)), e.min = (...r) => e.check(se(...r)), e.max = (...r) => e.check(yt(...r)), e.length = (...r) => e.check(zt(...r)), e.nonempty = (...r) => e.check(se(1, ...r)), e.lowercase = (r) => e.check(Po(r)), e.uppercase = (r) => e.check(To(r)), e.trim = () => e.check(Co()), e.normalize = (...r) => e.check(xo(...r)), e.toLowerCase = () => e.check(Mo()), e.toUpperCase = () => e.check(Ro()), e.slugify = () => e.check(Do());
}), Ta = u("ZodString", (e, t) => {
  Ie.init(e, t), It.init(e, t), e.email = (n) => e.check(Qr(Na, n)), e.url = (n) => e.check(oo(ja, n)), e.jwt = (n) => e.check(wo(Ba, n)), e.emoji = (n) => e.check(ao(Aa, n)), e.guid = (n) => e.check(qe(We, n)), e.uuid = (n) => e.check(eo(re, n)), e.uuidv4 = (n) => e.check(to(re, n)), e.uuidv6 = (n) => e.check(no(re, n)), e.uuidv7 = (n) => e.check(ro(re, n)), e.nanoid = (n) => e.check(so(xa, n)), e.guid = (n) => e.check(qe(We, n)), e.cuid = (n) => e.check(io(Ca, n)), e.cuid2 = (n) => e.check(co(Ma, n)), e.ulid = (n) => e.check(uo(Ra, n)), e.base64 = (n) => e.check(_o(La, n)), e.base64url = (n) => e.check(vo(Va, n)), e.xid = (n) => e.check(lo(Da, n)), e.ksuid = (n) => e.check(fo(Fa, n)), e.ipv4 = (n) => e.check(po(Ua, n)), e.ipv6 = (n) => e.check(ho(Ja, n)), e.cidrv4 = (n) => e.check(mo(qa, n)), e.cidrv6 = (n) => e.check(go(Ha, n)), e.e164 = (n) => e.check(ko(Wa, n)), e.datetime = (n) => e.check(da(n)), e.date = (n) => e.check(pa(n)), e.time = (n) => e.check(ma(n)), e.duration = (n) => e.check(_a(n));
});
function Ks(e) {
  return Xr(Ta, e);
}
const v = u("ZodStringFormat", (e, t) => {
  _.init(e, t), It.init(e, t);
}), Na = u("ZodEmail", (e, t) => {
  cr.init(e, t), v.init(e, t);
}), We = u("ZodGUID", (e, t) => {
  sr.init(e, t), v.init(e, t);
}), re = u("ZodUUID", (e, t) => {
  ir.init(e, t), v.init(e, t);
}), ja = u("ZodURL", (e, t) => {
  ur.init(e, t), v.init(e, t);
}), Aa = u("ZodEmoji", (e, t) => {
  lr.init(e, t), v.init(e, t);
}), xa = u("ZodNanoID", (e, t) => {
  dr.init(e, t), v.init(e, t);
}), Ca = u("ZodCUID", (e, t) => {
  fr.init(e, t), v.init(e, t);
}), Ma = u("ZodCUID2", (e, t) => {
  pr.init(e, t), v.init(e, t);
}), Ra = u("ZodULID", (e, t) => {
  hr.init(e, t), v.init(e, t);
}), Da = u("ZodXID", (e, t) => {
  mr.init(e, t), v.init(e, t);
}), Fa = u("ZodKSUID", (e, t) => {
  gr.init(e, t), v.init(e, t);
}), Ua = u("ZodIPv4", (e, t) => {
  br.init(e, t), v.init(e, t);
}), Ja = u("ZodIPv6", (e, t) => {
  yr.init(e, t), v.init(e, t);
}), qa = u("ZodCIDRv4", (e, t) => {
  zr.init(e, t), v.init(e, t);
}), Ha = u("ZodCIDRv6", (e, t) => {
  Zr.init(e, t), v.init(e, t);
}), La = u("ZodBase64", (e, t) => {
  $r.init(e, t), v.init(e, t);
}), Va = u("ZodBase64URL", (e, t) => {
  Sr.init(e, t), v.init(e, t);
}), Wa = u("ZodE164", (e, t) => {
  Ir.init(e, t), v.init(e, t);
}), Ba = u("ZodJWT", (e, t) => {
  Pr.init(e, t), v.init(e, t);
}), Et = u("ZodNumber", (e, t) => {
  vt.init(e, t), w.init(e, t), e._zod.processJSONSchema = (r, o, s) => Wo(e, r, o), e.gt = (r, o) => e.check(Le(r, o)), e.gte = (r, o) => e.check(me(r, o)), e.min = (r, o) => e.check(me(r, o)), e.lt = (r, o) => e.check(He(r, o)), e.lte = (r, o) => e.check(he(r, o)), e.max = (r, o) => e.check(he(r, o)), e.int = (r) => e.check(Be(r)), e.safe = (r) => e.check(Be(r)), e.positive = (r) => e.check(Le(0, r)), e.nonnegative = (r) => e.check(me(0, r)), e.negative = (r) => e.check(He(0, r)), e.nonpositive = (r) => e.check(he(0, r)), e.multipleOf = (r, o) => e.check(Ve(r, o)), e.step = (r, o) => e.check(Ve(r, o)), e.finite = () => e;
  const n = e._zod.bag;
  e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5), e.isFinite = true, e.format = n.format ?? null;
});
function Ys(e) {
  return $o(Et, e);
}
const Ga = u("ZodNumberFormat", (e, t) => {
  Tr.init(e, t), Et.init(e, t);
});
function Be(e) {
  return Oo(Ga, e);
}
const Ka = u("ZodUnknown", (e, t) => {
  Nr.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => Go();
});
function Ge() {
  return So(Ka);
}
const Ya = u("ZodNever", (e, t) => {
  jr.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => Bo(e, n, r);
});
function Xa(e) {
  return Io(Ya, e);
}
const Qa = u("ZodArray", (e, t) => {
  Ar.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => Qo(e, n, r, o), e.element = t.element, e.min = (n, r) => e.check(se(n, r)), e.nonempty = (n) => e.check(se(1, n)), e.max = (n, r) => e.check(yt(n, r)), e.length = (n, r) => e.check(zt(n, r)), e.unwrap = () => e.element;
});
function es(e, t) {
  return Fo(Qa, e, t);
}
const ts = u("ZodObject", (e, t) => {
  Cr.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => ea(e, n, r, o), g(e, "shape", () => t.shape), e.keyof = () => ss(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Ge() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Ge() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Xa() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => rn(e, n), e.safeExtend = (n) => on(e, n), e.merge = (n) => an(e, n), e.pick = (n) => tn(e, n), e.omit = (n) => nn(e, n), e.partial = (...n) => sn(Pt, e, n[0]), e.required = (...n) => cn(Tt, e, n[0]);
});
function Xs(e, t) {
  const n = { type: "object", shape: e ?? {}, ...h(t) };
  return new ts(n);
}
const ns = u("ZodUnion", (e, t) => {
  Mr.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => ta(e, n, r, o), e.options = t.options;
});
function rs(e, t) {
  return new ns({ type: "union", options: e, ...h(t) });
}
const os = u("ZodIntersection", (e, t) => {
  Rr.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => na(e, n, r, o);
});
function as(e, t) {
  return new os({ type: "intersection", left: e, right: t });
}
const ke = u("ZodEnum", (e, t) => {
  Dr.init(e, t), w.init(e, t), e._zod.processJSONSchema = (r, o, s) => Ko(e, r, o), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (r, o) => {
    const s = {};
    for (const a of r) if (n.has(a)) s[a] = t.entries[a];
    else throw new Error(`Key ${a} not found in enum`);
    return new ke({ ...t, checks: [], ...h(o), entries: s });
  }, e.exclude = (r, o) => {
    const s = { ...t.entries };
    for (const a of r) if (n.has(a)) delete s[a];
    else throw new Error(`Key ${a} not found in enum`);
    return new ke({ ...t, checks: [], ...h(o), entries: s });
  };
});
function ss(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new ke({ type: "enum", entries: n, ...h(t) });
}
const is = u("ZodTransform", (e, t) => {
  Fr.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => Xo(e, n), e._zod.parse = (n, r) => {
    if (r.direction === "backward") throw new nt(e.constructor.name);
    n.addIssue = (s) => {
      if (typeof s == "string") n.issues.push(Q(s, n.value, t));
      else {
        const a = s;
        a.fatal && (a.continue = false), a.code ?? (a.code = "custom"), a.input ?? (a.input = n.value), a.inst ?? (a.inst = e), n.issues.push(Q(a));
      }
    };
    const o = t.transform(n.value, n);
    return o instanceof Promise ? o.then((s) => (n.value = s, n)) : (n.value = o, n);
  };
});
function cs(e) {
  return new is({ type: "transform", transform: e });
}
const Pt = u("ZodOptional", (e, t) => {
  bt.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => St(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function Ke(e) {
  return new Pt({ type: "optional", innerType: e });
}
const us = u("ZodExactOptional", (e, t) => {
  Ur.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => St(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function ls(e) {
  return new us({ type: "optional", innerType: e });
}
const ds = u("ZodNullable", (e, t) => {
  Jr.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => ra(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function Ye(e) {
  return new ds({ type: "nullable", innerType: e });
}
const fs = u("ZodDefault", (e, t) => {
  qr.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => aa(e, n, r, o), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function ps(e, t) {
  return new fs({ type: "default", innerType: e, get defaultValue() {
    return typeof t == "function" ? t() : st(t);
  } });
}
const hs = u("ZodPrefault", (e, t) => {
  Hr.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => sa(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function ms(e, t) {
  return new hs({ type: "prefault", innerType: e, get defaultValue() {
    return typeof t == "function" ? t() : st(t);
  } });
}
const Tt = u("ZodNonOptional", (e, t) => {
  Lr.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => oa(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function gs(e, t) {
  return new Tt({ type: "nonoptional", innerType: e, ...h(t) });
}
const _s = u("ZodCatch", (e, t) => {
  Vr.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => ia(e, n, r, o), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function vs(e, t) {
  return new _s({ type: "catch", innerType: e, catchValue: typeof t == "function" ? t : () => t });
}
const ks = u("ZodPipe", (e, t) => {
  Wr.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => ca(e, n, r, o), e.in = t.in, e.out = t.out;
});
function Xe(e, t) {
  return new ks({ type: "pipe", in: e, out: t });
}
const ws = u("ZodReadonly", (e, t) => {
  Br.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => ua(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function bs(e) {
  return new ws({ type: "readonly", innerType: e });
}
const ys = u("ZodCustom", (e, t) => {
  Gr.init(e, t), w.init(e, t), e._zod.processJSONSchema = (n, r, o) => Yo(e, n);
});
function zs(e, t = {}) {
  return Uo(ys, e, t);
}
function Zs(e) {
  return Jo(e);
}
const $s = Ut({ component: "label", parts: ["root"] });
const _Ee = class _Ee {
  constructor(t) {
    __publicField(this, "opts");
    __publicField(this, "attachment");
    __privateAdd(this, _e2, ce(() => ({ id: this.opts.id.current, [$s.root]: "", onmousedown: this.onmousedown, ...this.attachment })));
    this.opts = t, this.attachment = Ft(this.opts.ref), this.onmousedown = this.onmousedown.bind(this);
  }
  static create(t) {
    return new _Ee(t);
  }
  onmousedown(t) {
    t.detail > 1 && t.preventDefault();
  }
  get props() {
    return W(__privateGet(this, _e2));
  }
  set props(t) {
    xt(__privateGet(this, _e2), t);
  }
};
_e2 = new WeakMap();
let Ee = _Ee;
var Os = H("<label><!></label>");
function Ss(e, t) {
  const n = Ct();
  M(t, true);
  let r = O(t, "id", 19, () => Jt(n)), o = O(t, "ref", 15, null), s = D(t, ["$$slots", "$$events", "$$legacy", "children", "child", "id", "ref", "for"]);
  const a = Ee.create({ id: Pe(() => r()), ref: Pe(() => o(), (d) => o(d)) }), i = ce(() => qt(s, a.props, { for: t.for }));
  var c = B(), l = G(c);
  {
    var f = (d) => {
      var p = B(), b = G(p);
      K(b, () => t.child, () => ({ props: W(i) })), I(d, p);
    }, m = (d) => {
      var p = Os();
      q(p, () => ({ ...W(i), for: t.for }));
      var b = we(p);
      K(b, () => t.children ?? ue), be(p), I(d, p);
    };
    tt(l, (d) => {
      t.child ? d(f) : d(m, false);
    });
  }
  I(e, c), R();
}
var Is = Mt('<svg width="15px" height="15px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g fill="none" class="nc-icon-wrapper"><path d="M3 7H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 11H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 15H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 19H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 23H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 27H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 7H7.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 11H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 15H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 19H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 23H7.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 27H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 7H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 11H11.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 15H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 19H11.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 23H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 27H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 7H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 11H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 15H15.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 19H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 23H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 27H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 7H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 11H19.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 15H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 19H19.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 23H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 27H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 7H23.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 11H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 3H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 3H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 3H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 3H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 3H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 3H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 3H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 15H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 19H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 23H23.01" stroke="currentColor" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 27H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 27H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 7H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 11H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 15H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 19H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 23H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path></g></svg>');
function Qs(e, t) {
  var n = Is();
  Rt(() => Ht(n, 0, Lt(t.class))), I(e, n);
}
const Es = () => "Delete", Ps = () => "\u30C7\u30EA\u30FC\u30C8", ei = (e = {}, t = {}) => (t.locale ?? Qe()) === "en" ? Es() : Ps(), Ts = () => "This will delete the card from your collection as well as decks you have edit access to, other users that have access to this card will still have the card.", Ns = () => "\u3053\u308C\u306B\u3088\u308A\u3001\u3042\u306A\u305F\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u7DE8\u96C6\u30A2\u30AF\u30BB\u30B9\u6A29\u3092\u6301\u3064\u30C7\u30C3\u30AD\u304B\u3089\u30AB\u30FC\u30C9\u304C\u524A\u9664\u3055\u308C\u307E\u3059\u304C\u3001\u3053\u306E\u30AB\u30FC\u30C9\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u4ED6\u306E\u30E6\u30FC\u30B6\u30FC\u306F\u5F15\u304D\u7D9A\u304D\u30AB\u30FC\u30C9\u3092\u6240\u6709\u3057\u307E\u3059\u3002", ti = (e = {}, t = {}) => (t.locale ?? Qe()) === "en" ? Ts() : Ns(), js = Vt({ base: "group/field data-[invalid=true]:text-destructive flex w-full", variants: { orientation: { vertical: "flex-col [&>*]:w-full [&>.sr-only]:w-auto", horizontal: ["flex-row items-center", "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"], responsive: ["flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto", "@md/field-group:[&>[data-slot=field-label]]:flex-auto", "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"] } }, defaultVariants: { orientation: "vertical" } });
var As = H("<div><!></div>");
function ni(e, t) {
  M(t, true);
  let n = O(t, "ref", 15, null), r = O(t, "orientation", 3, "vertical"), o = D(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "orientation", "children"]);
  var s = As();
  q(s, (i) => ({ role: "group", "data-slot": "field", "data-orientation": r(), class: i, ...o }), [() => A(js({ orientation: r() }), t.class)]);
  var a = we(s);
  K(a, () => t.children ?? ue), be(s), Y(s, (i) => n(i), () => n()), I(e, s), R();
}
var xs = H("<div><!></div>");
function ri(e, t) {
  M(t, true);
  let n = O(t, "ref", 15, null), r = D(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children"]);
  var o = xs();
  q(o, (a) => ({ "data-slot": "field-group", class: a, ...r }), [() => A("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4", t.class)]);
  var s = we(o);
  K(s, () => t.children ?? ue), be(o), Y(o, (a) => n(a), () => n()), I(e, o), R();
}
function Cs(e, t) {
  M(t, true);
  let n = O(t, "ref", 15, null), r = D(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var o = B(), s = G(o);
  {
    let a = ce(() => A("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", t.class));
    Wt(s, () => Ss, (i, c) => {
      c(i, et({ "data-slot": "label", get class() {
        return W(a);
      } }, () => r, { get ref() {
        return n();
      }, set ref(l) {
        n(l);
      } }));
    });
  }
  I(e, o), R();
}
function oi(e, t) {
  M(t, true);
  let n = O(t, "ref", 15, null), r = D(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children"]);
  {
    let o = ce(() => A("group/field-label peer/field-label flex w-fit gap-2 leading-snug text-black text-box-trim group-data-[disabled=true]/field:opacity-50", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-4", "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10", t.class));
    Cs(e, et({ "data-slot": "field-label", get class() {
      return W(o);
    } }, () => r, { get ref() {
      return n();
    }, set ref(s) {
      n(s);
    }, children: (s, a) => {
      var i = B(), c = G(i);
      K(c, () => t.children ?? ue), I(s, i);
    }, $$slots: { default: true } }));
  }
  R();
}
var Ms = H("<input/>"), Rs = H("<input/>");
function ai(e, t) {
  M(t, true);
  let n = O(t, "ref", 15, null), r = O(t, "value", 15), o = O(t, "files", 15), s = O(t, "data-slot", 3, "input"), a = D(t, ["$$slots", "$$events", "$$legacy", "ref", "value", "type", "files", "class", "data-slot"]);
  var i = B(), c = G(i);
  {
    var l = (m) => {
      var d = Ms();
      q(d, (p) => ({ "data-slot": s(), class: p, type: "file", ...a }), [() => A("flex min-w-0 rounded-md bg-transparent p-0 text-sm font-medium ring-offset-background transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", t.class)], void 0, void 0, void 0, true), Y(d, (p) => n(p), () => n()), Bt(d, o), ge(d, r), I(m, d);
    }, f = (m) => {
      var d = Rs();
      q(d, (p) => ({ "data-slot": s(), class: p, type: t.type, ...a }), [() => A("flex min-w-0 rounded-md bg-transparent p-0 ring-offset-background transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", t.class)], void 0, void 0, void 0, true), Y(d, (p) => n(p), () => n()), ge(d, r), I(m, d);
    };
    tt(c, (m) => {
      t.type === "file" ? m(l) : m(f, false);
    });
  }
  I(e, i), R();
}
var Ds = H("<textarea></textarea>");
function si(e, t) {
  M(t, true);
  let n = O(t, "ref", 15, null), r = O(t, "value", 15), o = O(t, "data-slot", 3, "textarea"), s = D(t, ["$$slots", "$$events", "$$legacy", "ref", "value", "class", "data-slot"]);
  var a = Ds();
  Dt(a), q(a, (i) => ({ "data-slot": o(), class: i, ...s }), [() => A("flex field-sizing-content rounded-md bg-transparent transition-[color,box-shadow] outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", t.class)]), Y(a, (i) => n(i), () => n()), ge(a, r), I(e, a), R();
}
export {
  Qs as E,
  ni as F,
  ai as I,
  si as T,
  ei as _,
  oi as a,
  ri as b,
  ss as c,
  ti as d,
  es as e,
  Ys as n,
  Xs as o,
  Ks as s
};
