var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _t2, _e, _a2, _r2, _n2, _ze_instances, s_fn, h_fn, u_fn, _o, _i, _l, _d, _c, f_fn, _p, _m, _t3, _e2, _a3, _r3, _n3, _s2, _h, _u, _o2, _i2, _l2, _d2, _c2, _t4, _e3, _a4, _t5, _e4, _t6, _e5, _t7, _t8, _t9, _t10, _t11, _t12, _t13, _e6, _a5, _r4, _n4, _t14, _e7, _a6, _r5, _n5, _s3;
import "./DsnmJJEf.js";
import { u as le, m as de, h as g, g as h, Z as H, _ as fr, a5 as pr, F as mr, p as S, e as w, a as k, b as f, c as $, f as q, d as A, ag as W, r as F, bi as st, ai as jt, t as J, bk as Ve, bH as vr, s as lt, aj as gr } from "./Cerututf.js";
import { v as Ca, m as kr, x as V, l as at, y as Pt, k as D, o as N, p as rt, n as ot, b as Mt, z as ue, s as Jt, d as Qt, f as Z } from "./CD9opEPd.js";
import { g as yr } from "./CsOUNaBs.js";
import { o as br, a as P, s as ct } from "./C-CTaGP6.js";
import { i as B } from "./DIL41Api.js";
import { p as v, r as I, c as O, s as X, b as Te } from "./IOctRI-n.js";
import { i as Le, c as Zt, w as zt, g as wr, d as He, f as pa, h as Pa, j as qa, k as Sa, l as $a, E as Mr, S as Dr, m as xr, C as Ia, u as Oa, D as _r, n as ma, r as Hr, I as Cr } from "./AqSr3-NM.js";
import { c as Fa, t as Pr } from "./XZEhH6UG.js";
const qr = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", transform: "translateX(-100%)" }, Sr = Ca(qr);
function Ce(e, t) {
  return e - t * Math.floor(e / t);
}
const Aa = 1721426;
function se(e, t, a, r) {
  t = Ue(e, t);
  let n = t - 1, s = -2;
  return a <= 2 ? s = 0 : ie(t) && (s = -1), Aa - 1 + 365 * n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400) + Math.floor((367 * a - 362) / 12 + s + r);
}
function ie(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function Ue(e, t) {
  return e === "BC" ? 1 - t : t;
}
function $r(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [t, e];
}
const Ir = { standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] };
class Ft {
  fromJulianDay(t) {
    let a = t, r = a - Aa, n = Math.floor(r / 146097), s = Ce(r, 146097), o = Math.floor(s / 36524), d = Ce(s, 36524), c = Math.floor(d / 1461), p = Ce(d, 1461), m = Math.floor(p / 365), b = n * 400 + o * 100 + c * 4 + m + (o !== 4 && m !== 4 ? 1 : 0), [l, i] = $r(b), u = a - se(l, i, 1, 1), M = 2;
    a < se(l, i, 3, 1) ? M = 0 : ie(i) && (M = 1);
    let x = Math.floor(((u + M) * 12 + 373) / 367), y = a - se(l, i, x, 1) + 1;
    return new _t(l, i, x, y);
  }
  toJulianDay(t) {
    return se(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return Ir[ie(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return ie(t.year) ? 366 : 365;
  }
  getYearsInEra(t) {
    return 9999;
  }
  getEras() {
    return ["BC", "AD"];
  }
  isInverseEra(t) {
    return t.era === "BC";
  }
  balanceDate(t) {
    t.year <= 0 && (t.era = t.era === "BC" ? "AD" : "BC", t.year = 1 - t.year);
  }
  constructor() {
    this.identifier = "gregory";
  }
}
const Or = { "001": 1, AD: 1, AE: 6, AF: 6, AI: 1, AL: 1, AM: 1, AN: 1, AR: 1, AT: 1, AU: 1, AX: 1, AZ: 1, BA: 1, BE: 1, BG: 1, BH: 6, BM: 1, BN: 1, BY: 1, CH: 1, CL: 1, CM: 1, CN: 1, CR: 1, CY: 1, CZ: 1, DE: 1, DJ: 6, DK: 1, DZ: 6, EC: 1, EE: 1, EG: 6, ES: 1, FI: 1, FJ: 1, FO: 1, FR: 1, GB: 1, GE: 1, GF: 1, GP: 1, GR: 1, HR: 1, HU: 1, IE: 1, IQ: 6, IR: 6, IS: 1, IT: 1, JO: 6, KG: 1, KW: 6, KZ: 1, LB: 1, LI: 1, LK: 1, LT: 1, LU: 1, LV: 1, LY: 6, MC: 1, MD: 1, ME: 1, MK: 1, MN: 1, MQ: 1, MV: 5, MY: 1, NL: 1, NO: 1, NZ: 1, OM: 6, PL: 1, QA: 6, RE: 1, RO: 1, RS: 1, RU: 1, SD: 6, SE: 1, SI: 1, SK: 1, SM: 1, SY: 6, TJ: 1, TM: 1, TR: 1, UA: 1, UY: 1, UZ: 1, VA: 1, VN: 1, XK: 1 };
function wt(e, t) {
  return t = et(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function fe(e, t) {
  return t = et(t, e.calendar), e = Ae(e), t = Ae(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Fr(e, t) {
  return Ea(e.calendar, t.calendar) && fe(e, t);
}
function Ea(e, t) {
  var a, r, n, s;
  return (s = (n = (a = e.isEqual) === null || a === void 0 ? void 0 : a.call(e, t)) !== null && n !== void 0 ? n : (r = t.isEqual) === null || r === void 0 ? void 0 : r.call(t, e)) !== null && s !== void 0 ? s : e.identifier === t.identifier;
}
function Ar(e, t) {
  return wt(e, Yr(t));
}
function Ya(e, t, a) {
  let r = e.calendar.toJulianDay(e), n = Lr(t), s = Math.ceil(r + 1 - n) % 7;
  return s < 0 && (s += 7), s;
}
function Er(e) {
  return pt(Date.now(), e);
}
function Yr(e) {
  return Nr(Er(e));
}
function Ba(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function Br(e, t) {
  return va(e) - va(t);
}
function va(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Pe = null;
function ft() {
  return Pe == null && (Pe = new Intl.DateTimeFormat().resolvedOptions().timeZone), Pe;
}
function Ae(e) {
  return e.subtract({ days: e.day - 1 });
}
function Vr(e) {
  return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
const ga = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map();
function Tr(e) {
  if (Intl.Locale) {
    let a = ga.get(e);
    return a || (a = new Intl.Locale(e).maximize().region, a && ga.set(e, a)), a;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function Lr(e) {
  let t = qe.get(e);
  if (!t) {
    if (Intl.Locale) {
      let r = new Intl.Locale(e);
      if ("getWeekInfo" in r && (t = r.getWeekInfo(), t)) return qe.set(e, t), t.firstDay;
    }
    let a = Tr(e);
    if (e.includes("-fw-")) {
      let r = e.split("-fw-")[1].split("-")[0];
      r === "mon" ? t = { firstDay: 1 } : r === "tue" ? t = { firstDay: 2 } : r === "wed" ? t = { firstDay: 3 } : r === "thu" ? t = { firstDay: 4 } : r === "fri" ? t = { firstDay: 5 } : r === "sat" ? t = { firstDay: 6 } : t = { firstDay: 0 };
    } else e.includes("-ca-iso8601") ? t = { firstDay: 1 } : t = { firstDay: a && Or[a] || 0 };
    qe.set(e, t);
  }
  return t.firstDay;
}
function Dt(e) {
  e = et(e, new Ft());
  let t = Ue(e.era, e.year);
  return Va(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function Va(e, t, a, r, n, s, o) {
  let d = /* @__PURE__ */ new Date();
  return d.setUTCHours(r, n, s, o), d.setUTCFullYear(e, t - 1, a), d.getTime();
}
function Kt(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === ft()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: r, day: n, hour: s, minute: o, second: d } = Ta(e, t);
  return Va(a, r, n, s, o, d, 0) - Math.floor(e / 1e3) * 1e3;
}
const ka = /* @__PURE__ */ new Map();
function Ta(e, t) {
  let a = ka.get(t);
  a || (a = new Intl.DateTimeFormat("en-US", { timeZone: t, hour12: false, era: "short", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }), ka.set(t, a));
  let r = a.formatToParts(new Date(e)), n = {};
  for (let s of r) s.type !== "literal" && (n[s.type] = s.value);
  return { year: n.era === "BC" || n.era === "B" ? -n.year + 1 : +n.year, month: +n.month, day: +n.day, hour: n.hour === "24" ? 0 : +n.hour, minute: +n.minute, second: +n.second };
}
const ce = 864e5;
function Ur(e, t) {
  let a = Dt(e), r = a - Kt(a - ce, t), n = a - Kt(a + ce, t);
  return La(e, t, r, n);
}
function La(e, t, a, r) {
  return (a === r ? [a] : [a, r]).filter((s) => Rr(e, t, s));
}
function Rr(e, t, a) {
  let r = Ta(a, t);
  return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function ut(e, t, a = "compatible") {
  let r = xt(e);
  if (t === "UTC") return Dt(r);
  if (t === ft() && a === "compatible") {
    r = et(r, new Ft());
    let c = /* @__PURE__ */ new Date(), p = Ue(r.era, r.year);
    return c.setFullYear(p, r.month - 1, r.day), c.setHours(r.hour, r.minute, r.second, r.millisecond), c.getTime();
  }
  let n = Dt(r), s = Kt(n - ce, t), o = Kt(n + ce, t), d = La(r, t, n - s, n - o);
  if (d.length === 1) return d[0];
  if (d.length > 1) switch (a) {
    case "compatible":
    case "earlier":
      return d[0];
    case "later":
      return d[d.length - 1];
    case "reject":
      throw new RangeError("Multiple possible absolute times found");
  }
  switch (a) {
    case "earlier":
      return Math.min(n - s, n - o);
    case "compatible":
    case "later":
      return Math.max(n - s, n - o);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function Ua(e, t, a = "compatible") {
  return new Date(ut(e, t, a));
}
function pt(e, t) {
  let a = Kt(e, t), r = new Date(e + a), n = r.getUTCFullYear(), s = r.getUTCMonth() + 1, o = r.getUTCDate(), d = r.getUTCHours(), c = r.getUTCMinutes(), p = r.getUTCSeconds(), m = r.getUTCMilliseconds();
  return new mt(n < 1 ? "BC" : "AD", n < 1 ? -n + 1 : n, s, o, t, a, d, c, p, m);
}
function Nr(e) {
  return new _t(e.calendar, e.era, e.year, e.month, e.day);
}
function xt(e, t) {
  let a = 0, r = 0, n = 0, s = 0;
  if ("timeZone" in e) ({ hour: a, minute: r, second: n, millisecond: s } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: a, minute: r, second: n, millisecond: s } = t), new kt(e.calendar, e.era, e.year, e.month, e.day, a, r, n, s);
}
function et(e, t) {
  if (Ea(e.calendar, t)) return e;
  let a = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
  return r.calendar = t, r.era = a.era, r.year = a.year, r.month = a.month, r.day = a.day, qt(r), r;
}
function Wr(e, t, a) {
  if (e instanceof mt) return e.timeZone === t ? e : Zr(e, t);
  let r = ut(e, t, a);
  return pt(r, t);
}
function jr(e) {
  let t = Dt(e) - e.offset;
  return new Date(t);
}
function Zr(e, t) {
  let a = Dt(e) - e.offset;
  return et(pt(a, t), e.calendar);
}
const Wt = 36e5;
function pe(e, t) {
  let a = e.copy(), r = "hour" in a ? Jr(a, t) : 0;
  Ee(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, Ye(a), Ra(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += r, zr(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
  let n = a.calendar.getYearsInEra(a);
  if (a.year > n) {
    var s, o;
    let c = (s = (o = a.calendar).isInverseEra) === null || s === void 0 ? void 0 : s.call(o, a);
    a.year = n, a.month = c ? 1 : a.calendar.getMonthsInYear(a), a.day = c ? 1 : a.calendar.getDaysInMonth(a);
  }
  a.month < 1 && (a.month = 1, a.day = 1);
  let d = a.calendar.getMonthsInYear(a);
  return a.month > d && (a.month = d, a.day = a.calendar.getDaysInMonth(a)), a.day = Math.max(1, Math.min(a.calendar.getDaysInMonth(a), a.day)), a;
}
function Ee(e, t) {
  var a, r;
  !((a = (r = e.calendar).isInverseEra) === null || a === void 0) && a.call(r, e) && (t = -t), e.year += t;
}
function Ye(e) {
  for (; e.month < 1; ) Ee(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); ) e.month -= t, Ee(e, 1);
}
function zr(e) {
  for (; e.day < 1; ) e.month--, Ye(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); ) e.day -= e.calendar.getDaysInMonth(e), e.month++, Ye(e);
}
function Ra(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function qt(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Ra(e);
}
function Na(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function Wa(e, t) {
  return pe(e, Na(t));
}
function Re(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), qt(a), a;
}
function he(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), Gr(a), a;
}
function Kr(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = oe(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = oe(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = oe(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = oe(e.hour, 24), t;
}
function Gr(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function oe(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function Jr(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, Kr(e);
}
function Ne(e, t, a, r) {
  let n = e.copy();
  switch (t) {
    case "era": {
      let d = e.calendar.getEras(), c = d.indexOf(e.era);
      if (c < 0) throw new Error("Invalid era: " + e.era);
      c = gt(c, a, 0, d.length - 1, r == null ? void 0 : r.round), n.era = d[c], qt(n);
      break;
    }
    case "year":
      var s, o;
      !((s = (o = n.calendar).isInverseEra) === null || s === void 0) && s.call(o, n) && (a = -a), n.year = gt(e.year, a, -1 / 0, 9999, r == null ? void 0 : r.round), n.year === -1 / 0 && (n.year = 1), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e);
      break;
    case "month":
      n.month = gt(e.month, a, 1, e.calendar.getMonthsInYear(e), r == null ? void 0 : r.round);
      break;
    case "day":
      n.day = gt(e.day, a, 1, e.calendar.getDaysInMonth(e), r == null ? void 0 : r.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(n), qt(n), n;
}
function ja(e, t, a, r) {
  let n = e.copy();
  switch (t) {
    case "hour": {
      let s = e.hour, o = 0, d = 23;
      if ((r == null ? void 0 : r.hourCycle) === 12) {
        let c = s >= 12;
        o = c ? 12 : 0, d = c ? 23 : 11;
      }
      n.hour = gt(s, a, o, d, r == null ? void 0 : r.round);
      break;
    }
    case "minute":
      n.minute = gt(e.minute, a, 0, 59, r == null ? void 0 : r.round);
      break;
    case "second":
      n.second = gt(e.second, a, 0, 59, r == null ? void 0 : r.round);
      break;
    case "millisecond":
      n.millisecond = gt(e.millisecond, a, 0, 999, r == null ? void 0 : r.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return n;
}
function gt(e, t, a, r, n = false) {
  if (n) {
    e += Math.sign(t), e < a && (e = r);
    let s = Math.abs(t);
    t > 0 ? e = Math.ceil(e / s) * s : e = Math.floor(e / s) * s, e > r && (e = a);
  } else e += t, e < a ? e = r - (a - e - 1) : e > r && (e = a + (e - r - 1));
  return e;
}
function Za(e, t) {
  let a;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let n = pe(xt(e), { years: t.years, months: t.months, weeks: t.weeks, days: t.days });
    a = ut(n, e.timeZone);
  } else a = Dt(e) - e.offset;
  a += t.milliseconds || 0, a += (t.seconds || 0) * 1e3, a += (t.minutes || 0) * 6e4, a += (t.hours || 0) * 36e5;
  let r = pt(a, e.timeZone);
  return et(r, e.calendar);
}
function Qr(e, t) {
  return Za(e, Na(t));
}
function Xr(e, t, a, r) {
  switch (t) {
    case "hour": {
      let n = 0, s = 23;
      if ((r == null ? void 0 : r.hourCycle) === 12) {
        let u = e.hour >= 12;
        n = u ? 12 : 0, s = u ? 23 : 11;
      }
      let o = xt(e), d = et(he(o, { hour: n }), new Ft()), c = [ut(d, e.timeZone, "earlier"), ut(d, e.timeZone, "later")].filter((u) => pt(u, e.timeZone).day === d.day)[0], p = et(he(o, { hour: s }), new Ft()), m = [ut(p, e.timeZone, "earlier"), ut(p, e.timeZone, "later")].filter((u) => pt(u, e.timeZone).day === p.day).pop(), b = Dt(e) - e.offset, l = Math.floor(b / Wt), i = b % Wt;
      return b = gt(l, a, Math.floor(c / Wt), Math.floor(m / Wt), r == null ? void 0 : r.round) * Wt + i, et(pt(b, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return ja(e, t, a, r);
    case "era":
    case "year":
    case "month":
    case "day": {
      let n = Ne(xt(e), t, a, r), s = ut(n, e.timeZone);
      return et(pt(s, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function tn(e, t, a) {
  let r = xt(e), n = he(Re(r, t), t);
  if (n.compare(r) === 0) return e;
  let s = ut(n, e.timeZone, a);
  return et(pt(s, e.timeZone), e.calendar);
}
const en = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/, an = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/, rn = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:([+-]\d{2})(?::?(\d{2}))?(?::?(\d{2}))?)?\[(.*?)\]$/, za = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/;
function Ka(e) {
  let t = e.match(en);
  if (!t) throw za.test(e) ? new Error(`Invalid ISO 8601 date string: ${e}. Use parseAbsolute() instead.`) : new Error("Invalid ISO 8601 date string: " + e);
  let a = new _t(R(t[1], 0, 9999), R(t[2], 1, 12), 1);
  return a.day = R(t[3], 1, a.calendar.getDaysInMonth(a)), a;
}
function Ga(e) {
  let t = e.match(an);
  if (!t) throw za.test(e) ? new Error(`Invalid ISO 8601 date time string: ${e}. Use parseAbsolute() instead.`) : new Error("Invalid ISO 8601 date time string: " + e);
  let a = R(t[1], -9999, 9999), r = a < 1 ? "BC" : "AD", n = new kt(r, a < 1 ? -a + 1 : a, R(t[2], 1, 12), 1, t[4] ? R(t[4], 0, 23) : 0, t[5] ? R(t[5], 0, 59) : 0, t[6] ? R(t[6], 0, 59) : 0, t[7] ? R(t[7], 0, 1 / 0) * 1e3 : 0);
  return n.day = R(t[3], 0, n.calendar.getDaysInMonth(n)), n;
}
function Ja(e, t) {
  let a = e.match(rn);
  if (!a) throw new Error("Invalid ISO 8601 date time string: " + e);
  let r = R(a[1], -9999, 9999), n = r < 1 ? "BC" : "AD", s = new mt(n, r < 1 ? -r + 1 : r, R(a[2], 1, 12), 1, a[11], 0, a[4] ? R(a[4], 0, 23) : 0, a[5] ? R(a[5], 0, 59) : 0, a[6] ? R(a[6], 0, 59) : 0, a[7] ? R(a[7], 0, 1 / 0) * 1e3 : 0);
  s.day = R(a[3], 0, s.calendar.getDaysInMonth(s));
  let o = xt(s), d;
  if (a[8]) {
    let m = R(a[8], -23, 23);
    var c, p;
    if (s.offset = Math.sign(m) * (Math.abs(m) * 36e5 + R((c = a[9]) !== null && c !== void 0 ? c : "0", 0, 59) * 6e4 + R((p = a[10]) !== null && p !== void 0 ? p : "0", 0, 59) * 1e3), d = Dt(s) - s.offset, !Ur(o, s.timeZone).includes(d)) throw new Error(`Offset ${Xa(s.offset)} is invalid for ${We(s)} in ${s.timeZone}`);
  } else d = ut(xt(o), s.timeZone, t);
  return pt(d, s.timeZone);
}
function R(e, t, a) {
  let r = Number(e);
  if (r < t || r > a) throw new RangeError(`Value out of range: ${t} <= ${r} <= ${a}`);
  return r;
}
function nn(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function Qa(e) {
  let t = et(e, new Ft()), a;
  return t.era === "BC" ? a = t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : a = String(t.year).padStart(4, "0"), `${a}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function We(e) {
  return `${Qa(e)}T${nn(e)}`;
}
function Xa(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let a = Math.floor(e / 36e5), r = Math.floor(e % 36e5 / 6e4), n = Math.floor(e % 36e5 % 6e4 / 1e3), s = `${t}${String(a).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
  return n !== 0 && (s += `:${String(n).padStart(2, "0")}`), s;
}
function sn(e) {
  return `${We(e)}${Xa(e.offset)}[${e.timeZone}]`;
}
function on(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function je(e, t, a) {
  on(e, t), t.set(e, a);
}
function Ze(e) {
  let t = typeof e[0] == "object" ? e.shift() : new Ft(), a;
  if (typeof e[0] == "string") a = e.shift();
  else {
    let o = t.getEras();
    a = o[o.length - 1];
  }
  let r = e.shift(), n = e.shift(), s = e.shift();
  return [t, a, r, n, s];
}
var ln = /* @__PURE__ */ new WeakMap();
class _t {
  copy() {
    return this.era ? new _t(this.calendar, this.era, this.year, this.month, this.day) : new _t(this.calendar, this.year, this.month, this.day);
  }
  add(t) {
    return pe(this, t);
  }
  subtract(t) {
    return Wa(this, t);
  }
  set(t) {
    return Re(this, t);
  }
  cycle(t, a, r) {
    return Ne(this, t, a, r);
  }
  toDate(t) {
    return Ua(this, t);
  }
  toString() {
    return Qa(this);
  }
  compare(t) {
    return Ba(this, t);
  }
  constructor(...t) {
    je(this, ln, { writable: true, value: void 0 });
    let [a, r, n, s, o] = Ze(t);
    this.calendar = a, this.era = r, this.year = n, this.month = s, this.day = o, qt(this);
  }
}
var dn = /* @__PURE__ */ new WeakMap();
class kt {
  copy() {
    return this.era ? new kt(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new kt(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  add(t) {
    return pe(this, t);
  }
  subtract(t) {
    return Wa(this, t);
  }
  set(t) {
    return Re(he(this, t), t);
  }
  cycle(t, a, r) {
    switch (t) {
      case "era":
      case "year":
      case "month":
      case "day":
        return Ne(this, t, a, r);
      default:
        return ja(this, t, a, r);
    }
  }
  toDate(t, a) {
    return Ua(this, t, a);
  }
  toString() {
    return We(this);
  }
  compare(t) {
    let a = Ba(this, t);
    return a === 0 ? Br(this, xt(t)) : a;
  }
  constructor(...t) {
    je(this, dn, { writable: true, value: void 0 });
    let [a, r, n, s, o] = Ze(t);
    this.calendar = a, this.era = r, this.year = n, this.month = s, this.day = o, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, qt(this);
  }
}
var cn = /* @__PURE__ */ new WeakMap();
class mt {
  copy() {
    return this.era ? new mt(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new mt(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  add(t) {
    return Za(this, t);
  }
  subtract(t) {
    return Qr(this, t);
  }
  set(t, a) {
    return tn(this, t, a);
  }
  cycle(t, a, r) {
    return Xr(this, t, a, r);
  }
  toDate() {
    return jr(this);
  }
  toString() {
    return sn(this);
  }
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  compare(t) {
    return this.toDate().getTime() - Wr(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    je(this, cn, { writable: true, value: void 0 });
    let [a, r, n, s, o] = Ze(t), d = t.shift(), c = t.shift();
    this.calendar = a, this.era = r, this.year = n, this.month = s, this.day = o, this.timeZone = d, this.offset = c, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, qt(this);
  }
}
let Se = /* @__PURE__ */ new Map();
class nt {
  format(t) {
    return this.formatter.format(t);
  }
  formatToParts(t) {
    return this.formatter.formatToParts(t);
  }
  formatRange(t, a) {
    if (typeof this.formatter.formatRange == "function") return this.formatter.formatRange(t, a);
    if (a < t) throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(t)} \u2013 ${this.formatter.format(a)}`;
  }
  formatRangeToParts(t, a) {
    if (typeof this.formatter.formatRangeToParts == "function") return this.formatter.formatRangeToParts(t, a);
    if (a < t) throw new RangeError("End date must be >= start date");
    let r = this.formatter.formatToParts(t), n = this.formatter.formatToParts(a);
    return [...r.map((s) => ({ ...s, source: "startRange" })), { type: "literal", value: " \u2013 ", source: "shared" }, ...n.map((s) => ({ ...s, source: "endRange" }))];
  }
  resolvedOptions() {
    let t = this.formatter.resolvedOptions();
    return fn() && (this.resolvedHourCycle || (this.resolvedHourCycle = pn(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, a = {}) {
    this.formatter = tr(t, a), this.options = a;
  }
}
const hn = { true: { ja: "h11" }, false: {} };
function tr(e, t = {}) {
  if (typeof t.hour12 == "boolean" && un()) {
    t = { ...t };
    let n = hn[String(t.hour12)][e.split("-")[0]], s = t.hour12 ? "h12" : "h23";
    t.hourCycle = n ?? s, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((n, s) => n[0] < s[0] ? -1 : 1).join() : "");
  if (Se.has(a)) return Se.get(a);
  let r = new Intl.DateTimeFormat(e, t);
  return Se.set(a, r), r;
}
let $e = null;
function un() {
  return $e == null && ($e = new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: false }).format(new Date(2020, 2, 3, 0)) === "24"), $e;
}
let Ie = null;
function fn() {
  return Ie == null && (Ie = new Intl.DateTimeFormat("fr", { hour: "numeric", hour12: false }).resolvedOptions().hourCycle === "h12"), Ie;
}
function pn(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = tr(e, { ...t, timeZone: void 0 }), r = parseInt(a.formatToParts(new Date(2020, 2, 3, 0)).find((s) => s.type === "hour").value, 10), n = parseInt(a.formatToParts(new Date(2020, 2, 3, 23)).find((s) => s.type === "hour").value, 10);
  if (r === 0 && n === 23) return "h23";
  if (r === 24 && n === 23) return "h24";
  if (r === 0 && n === 11) return "h11";
  if (r === 12 && n === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
function mn(e) {
  if (!Le || !e) return null;
  let t = e.querySelector("[data-bits-announcer]");
  const a = (n) => {
    const s = e.createElement("div");
    return s.role = "log", s.ariaLive = n, s.setAttribute("aria-relevant", "additions"), s;
  };
  if (!Zt(t)) {
    const n = e.createElement("div");
    n.style.cssText = Sr, n.setAttribute("data-bits-announcer", ""), n.appendChild(a("assertive")), n.appendChild(a("polite")), t = n, e.body.insertBefore(t, e.body.firstChild);
  }
  return { getLog: (n) => {
    if (!Zt(t)) return null;
    const s = t.querySelector(`[aria-live="${n}"]`);
    return Zt(s) ? s : null;
  } };
}
function ya(e) {
  const t = mn(e);
  function a(r, n = "assertive", s = 7500) {
    if (!t || !Le || !e) return;
    const o = t.getLog(n), d = e.createElement("div");
    return typeof r == "number" ? r = r.toString() : r === null ? r = "Empty" : r = r.trim(), d.innerText = r, n === "assertive" ? o == null ? void 0 : o.replaceChildren(d) : o == null ? void 0 : o.appendChild(d), setTimeout(() => {
      d.remove();
    }, s);
  }
  return { announce: a };
}
const vn = { defaultValue: void 0, granularity: "day" };
function gn(e) {
  const t = { ...vn, ...e }, { defaultValue: a, granularity: r, minValue: n, maxValue: s } = t;
  if (Array.isArray(a) && a.length) return a[a.length - 1];
  if (a && !Array.isArray(a)) return a;
  {
    let o = /* @__PURE__ */ new Date();
    n && o < n.toDate(ft()) ? o = n.toDate(ft()) : s && o > s.toDate(ft()) && (o = s.toDate(ft()));
    const d = o.getFullYear(), c = o.getMonth() + 1, p = o.getDate();
    return ["hour", "minute", "second"].includes(r ?? "day") ? new kt(d, c, p, 0, 0, 0) : new _t(d, c, p);
  }
}
function er(e, t) {
  let a;
  return t instanceof mt ? a = Ja(e) : t instanceof kt ? a = Ga(e) : a = Ka(e), a.calendar !== t.calendar ? et(a, t.calendar) : a;
}
function dt(e, t = ft()) {
  return e instanceof mt ? e.toDate() : e.toDate(t);
}
function kn(e) {
  if (e instanceof _t) return "date";
  if (e instanceof kt) return "datetime";
  if (e instanceof mt) return "zoneddatetime";
  throw new Error("Unknown date type");
}
function yn(e, t) {
  switch (t) {
    case "date":
      return Ka(e);
    case "datetime":
      return Ga(e);
    case "zoneddatetime":
      return Ja(e);
    default:
      throw new Error(`Unknown date type: ${t}`);
  }
}
function bn(e) {
  return e instanceof kt;
}
function ar(e) {
  return e instanceof mt;
}
function Be(e) {
  return bn(e) || ar(e);
}
function wn(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), a = e.getMonth() + 1;
    return new Date(t, a, 0).getDate();
  } else return e.set({ day: 100 }).day;
}
function Gt(e, t) {
  return e.compare(t) < 0;
}
function Mn(e, t) {
  return e.compare(t) > 0;
}
function ba(e, t, a) {
  const r = Ya(e, a);
  return t > r ? e.subtract({ days: r + 7 - t }) : t === r ? e : e.subtract({ days: r - t });
}
function wa(e, t, a) {
  const r = Ya(e, a), n = t === 0 ? 6 : t - 1;
  return r === n ? e : r > n ? e.add({ days: 7 - r + n }) : e.add({ days: n - r });
}
const Dn = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
function xn(e) {
  let t = e.initialLocale;
  function a(i) {
    t = i;
  }
  function r() {
    return t;
  }
  function n(i, u) {
    return new nt(t, u).format(i);
  }
  function s(i, u = true) {
    return Be(i) && u ? n(dt(i), { dateStyle: "long", timeStyle: "long" }) : n(dt(i), { dateStyle: "long" });
  }
  function o(i) {
    if (typeof e.monthFormat.current != "function" && typeof e.yearFormat.current != "function") return new nt(t, { month: e.monthFormat.current, year: e.yearFormat.current }).format(i);
    const u = typeof e.monthFormat.current == "function" ? e.monthFormat.current(i.getMonth() + 1) : new nt(t, { month: e.monthFormat.current }).format(i), M = typeof e.yearFormat.current == "function" ? e.yearFormat.current(i.getFullYear()) : new nt(t, { year: e.yearFormat.current }).format(i);
    return `${u} ${M}`;
  }
  function d(i) {
    return new nt(t, { month: "long" }).format(i);
  }
  function c(i) {
    return new nt(t, { year: "numeric" }).format(i);
  }
  function p(i, u) {
    return ar(i) ? new nt(t, { ...u, timeZone: i.timeZone }).formatToParts(dt(i)) : new nt(t, u).formatToParts(dt(i));
  }
  function m(i, u = "narrow") {
    return new nt(t, { weekday: u }).format(i);
  }
  function b(i, u = void 0) {
    var _a7;
    return ((_a7 = new nt(t, { hour: "numeric", minute: "numeric", hourCycle: u === 24 ? "h23" : void 0 }).formatToParts(i).find((y) => y.type === "dayPeriod")) == null ? void 0 : _a7.value) === "PM" ? "PM" : "AM";
  }
  function l(i, u, M = {}) {
    const x = { ...Dn, ...M }, _ = p(i, x).find((C) => C.type === u);
    return _ ? _.value : "";
  }
  return { setLocale: a, getLocale: r, fullMonth: d, fullYear: c, fullMonthAndYear: o, toParts: p, custom: n, part: l, dayPeriod: b, selectedDate: s, dayOfWeek: m };
}
function _n(e) {
  return !(!Zt(e) || !e.hasAttribute("data-bits-day"));
}
function Ma(e, t) {
  const a = [];
  let r = e.add({ days: 1 });
  const n = t;
  for (; r.compare(n) < 0; ) a.push(r), r = r.add({ days: 1 });
  return a;
}
function Oe(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: r, locale: n } = e, s = wn(t), o = Array.from({ length: s }, (x, y) => t.set({ day: y + 1 })), d = Ae(t), c = Vr(t), p = a !== void 0 ? ba(d, a, "en-US") : ba(d, 0, n), m = a !== void 0 ? wa(c, a, "en-US") : wa(c, 0, n), b = Ma(p.subtract({ days: 1 }), d), l = Ma(c, m.add({ days: 1 })), i = b.length + o.length + l.length;
  if (r && i < 42) {
    const x = 42 - i;
    let y = l[l.length - 1];
    y || (y = t.add({ months: 1 }).set({ day: 1 }));
    let _ = x;
    l.length === 0 && (_ = x - 1, l.push(y));
    const C = Array.from({ length: _ }, (z, L) => {
      const E = L + 1;
      return y.add({ days: E });
    });
    l.push(...C);
  }
  const u = b.concat(o, l), M = xr(u, 7);
  return { value: t, dates: u, weeks: M };
}
function Xt(e) {
  const { numberOfMonths: t, dateObj: a, ...r } = e, n = [];
  if (!t || t === 1) return n.push(Oe({ ...r, dateObj: a })), n;
  n.push(Oe({ ...r, dateObj: a }));
  for (let s = 1; s < t; s++) {
    const o = a.add({ months: s });
    n.push(Oe({ ...r, dateObj: o }));
  }
  return n;
}
function Fe(e) {
  return e ? Array.from(e.querySelectorAll("[data-bits-day]:not([data-disabled]):not([data-outside-visible-months])")).filter((a) => Zt(a)) : [];
}
function Da(e, t) {
  const a = e.getAttribute("data-value");
  a && (t.current = er(a, t.current));
}
function Hn({ node: e, add: t, placeholder: a, calendarNode: r, isPrevButtonDisabled: n, isNextButtonDisabled: s, months: o, numberOfMonths: d }) {
  var _a7, _b;
  const c = Fe(r);
  if (!c.length) return;
  const m = c.indexOf(e) + t;
  if (He(m, c)) {
    const b = c[m];
    return Da(b, a), b.focus();
  }
  if (m < 0) {
    if (n) return;
    const b = (_a7 = o[0]) == null ? void 0 : _a7.value;
    if (!b) return;
    a.current = b.subtract({ months: d }), pa(() => {
      const l = Fe(r);
      if (!l.length) return;
      const i = l.length - Math.abs(m);
      if (He(i, l)) {
        const u = l[i];
        return Da(u, a), u.focus();
      }
    });
  }
  if (m >= c.length) {
    if (s) return;
    const b = (_b = o[0]) == null ? void 0 : _b.value;
    if (!b) return;
    a.current = b.add({ months: d }), pa(() => {
      const l = Fe(r);
      if (!l.length) return;
      const i = m - c.length;
      if (He(i, l)) return l[i].focus();
    });
  }
}
const xa = [Pa, qa, Sa, $a], _a = [Mr, Dr];
function Cn({ event: e, handleCellClick: t, shiftFocus: a, placeholderValue: r }) {
  const n = e.target;
  if (!_n(n) || !xa.includes(e.key) && !_a.includes(e.key)) return;
  e.preventDefault();
  const s = { [Pa]: 7, [qa]: -7, [Sa]: -1, [$a]: 1 };
  if (xa.includes(e.key)) {
    const o = s[e.key];
    o !== void 0 && a(n, o);
  }
  if (_a.includes(e.key)) {
    const o = n.getAttribute("data-value");
    if (!o) return;
    t(e, er(o, r));
  }
}
function Pn({ months: e, setMonths: t, numberOfMonths: a, pagedNavigation: r, weekStartsOn: n, locale: s, fixedWeeks: o, setPlaceholder: d }) {
  var _a7;
  const c = (_a7 = e[0]) == null ? void 0 : _a7.value;
  if (c) if (r) d(c.add({ months: a }));
  else {
    const p = c.add({ months: 1 }), m = Xt({ dateObj: p, weekStartsOn: n, locale: s, fixedWeeks: o, numberOfMonths: a });
    d(p), t(m);
  }
}
function qn({ months: e, setMonths: t, numberOfMonths: a, pagedNavigation: r, weekStartsOn: n, locale: s, fixedWeeks: o, setPlaceholder: d }) {
  var _a7;
  const c = (_a7 = e[0]) == null ? void 0 : _a7.value;
  if (c) if (r) d(c.subtract({ months: a }));
  else {
    const p = c.subtract({ months: 1 }), m = Xt({ dateObj: p, weekStartsOn: n, locale: s, fixedWeeks: o, numberOfMonths: a });
    d(p), t(m);
  }
}
function Sn({ months: e, formatter: t, weekdayFormat: a }) {
  if (!e.length) return [];
  const n = e[0].weeks[0];
  return n ? n.map((s) => t.dayOfWeek(dt(s), a)) : [];
}
function $n(e) {
  le(() => {
    const t = e.weekStartsOn.current, a = e.locale.current, r = e.fixedWeeks.current, n = e.numberOfMonths.current;
    de(() => {
      const s = e.placeholder.current;
      if (!s) return;
      const o = { weekStartsOn: t, locale: a, fixedWeeks: r, numberOfMonths: n };
      e.setMonths(Xt({ ...o, dateObj: s }));
    });
  });
}
function In({ calendarNode: e, label: t, accessibleHeadingId: a }) {
  const r = wr(e), n = r.createElement("div");
  n.style.cssText = Ca({ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "1px" });
  const s = r.createElement("div");
  return s.textContent = t, s.id = a, s.role = "heading", s.ariaLevel = "2", e.insertBefore(n, e.firstChild), n.appendChild(s), () => {
    var _a7;
    const o = r.getElementById(a);
    o && ((_a7 = n.parentElement) == null ? void 0 : _a7.removeChild(n), o.remove());
  };
}
function On({ placeholder: e, getVisibleMonths: t, weekStartsOn: a, locale: r, fixedWeeks: n, numberOfMonths: s, setMonths: o }) {
  le(() => {
    e.current, de(() => {
      if (t().some((c) => fe(c, e.current))) return;
      const d = { weekStartsOn: a.current, locale: r.current, fixedWeeks: n.current, numberOfMonths: s.current };
      o(Xt({ ...d, dateObj: e.current }));
    });
  });
}
function Fn({ maxValue: e, months: t, disabled: a }) {
  var _a7;
  if (!e || !t.length) return false;
  if (a) return true;
  const r = (_a7 = t[t.length - 1]) == null ? void 0 : _a7.value;
  if (!r) return false;
  const n = r.add({ months: 1 }).set({ day: 1 });
  return Mn(n, e);
}
function An({ minValue: e, months: t, disabled: a }) {
  var _a7;
  if (!e || !t.length) return false;
  if (a) return true;
  const r = (_a7 = t[0]) == null ? void 0 : _a7.value;
  if (!r) return false;
  const n = r.subtract({ months: 1 }).set({ day: 35 });
  return Gt(n, e);
}
function En({ months: e, locale: t, formatter: a }) {
  if (!e.length) return "";
  if (t !== a.getLocale() && a.setLocale(t), e.length === 1) {
    const m = dt(e[0].value);
    return `${a.fullMonthAndYear(m)}`;
  }
  const r = dt(e[0].value), n = dt(e[e.length - 1].value), s = a.fullMonth(r), o = a.fullMonth(n), d = a.fullYear(r), c = a.fullYear(n);
  return d === c ? `${s} - ${o} ${c}` : `${s} ${d} - ${o} ${c}`;
}
function Yn({ fullCalendarLabel: e, id: t, isInvalid: a, disabled: r, readonly: n }) {
  return { id: t, role: "application", "aria-label": e, "data-invalid": V(a), "data-disabled": V(r), "data-readonly": V(n) };
}
function Bn(e) {
  if (!Le) return;
  const t = Array.from(e.querySelectorAll("[data-bits-day]:not([aria-disabled=true])"));
  if (t.length === 0) return;
  const a = t[0], r = a == null ? void 0 : a.getAttribute("data-value"), n = a == null ? void 0 : a.getAttribute("data-type");
  if (!(!r || !n)) return yn(r, n);
}
function Vn({ ref: e, placeholder: t, defaultPlaceholder: a, minValue: r, maxValue: n, isDateDisabled: s }) {
  function o(d) {
    return !!(s.current(d) || r.current && Gt(d, r.current) || n.current && Gt(n.current, d));
  }
  zt(() => e.current, () => {
    e.current && t.current && wt(t.current, a) && o(a) && (t.current = Bn(e.current) ?? a);
  });
}
function Tn(e, t) {
  return !e || !t ? e : Be(e) && Be(t) ? e.set({ hour: t.hour, minute: t.minute, millisecond: t.millisecond, second: t.second }) : e;
}
const Ln = kr({ component: "calendar", parts: ["root", "grid", "cell", "next-button", "prev-button", "day", "grid-body", "grid-head", "grid-row", "head-cell", "header", "heading", "month-select", "year-select"] });
function Un(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear(), a = Math.max(e.placeholderYear, t);
  let r, n;
  if (e.minValue) r = e.minValue.year;
  else {
    const o = a - 100;
    r = e.placeholderYear < o ? e.placeholderYear - 10 : o;
  }
  e.maxValue ? n = e.maxValue.year : n = a + 10, r > n && (r = n);
  const s = n - r + 1;
  return Array.from({ length: s }, (o, d) => r + d);
}
const it = new Ia("Calendar.Root | RangeCalender.Root");
const _ze = class _ze {
  constructor(t) {
    __privateAdd(this, _ze_instances);
    __publicField(this, "opts");
    __privateAdd(this, _t2, g(() => this.months.map((t) => t.value)));
    __publicField(this, "formatter");
    __publicField(this, "accessibleHeadingId", Oa());
    __publicField(this, "domContext");
    __publicField(this, "attachment");
    __privateAdd(this, _e, fr(pr([])));
    __publicField(this, "announcer");
    __privateAdd(this, _a2, g(() => Sn({ months: this.months, formatter: this.formatter, weekdayFormat: this.opts.weekdayFormat.current })));
    __privateAdd(this, _r2, g(() => de(() => this.opts.placeholder.current.year)));
    __privateAdd(this, _n2, g(() => Un({ minValue: this.opts.minValue.current, maxValue: this.opts.maxValue.current, placeholderYear: this.initialPlaceholderYear })));
    __privateAdd(this, _o, g(() => Fn({ maxValue: this.opts.maxValue.current, months: this.months, disabled: this.opts.disabled.current })));
    __privateAdd(this, _i, g(() => An({ minValue: this.opts.minValue.current, months: this.months, disabled: this.opts.disabled.current })));
    __privateAdd(this, _l, g(() => {
      const t = this.opts.value.current, a = this.opts.isDateDisabled.current, r = this.opts.isDateUnavailable.current;
      if (Array.isArray(t)) {
        if (!t.length) return false;
        for (const n of t) if (a(n) || r(n)) return true;
      } else {
        if (!t) return false;
        if (a(t) || r(t)) return true;
      }
      return false;
    }));
    __privateAdd(this, _d, g(() => (this.opts.monthFormat.current, this.opts.yearFormat.current, En({ months: this.months, formatter: this.formatter, locale: this.opts.locale.current }))));
    __privateAdd(this, _c, g(() => `${this.opts.calendarLabel.current} ${this.headingValue}`));
    __privateAdd(this, _p, g(() => ({ months: this.months, weekdays: this.weekdays })));
    __publicField(this, "getBitsAttr", (t) => Ln.getAttr(t));
    __privateAdd(this, _m, g(() => ({ ...Yn({ fullCalendarLabel: this.fullCalendarLabel, id: this.opts.id.current, isInvalid: this.isInvalid, disabled: this.opts.disabled.current, readonly: this.opts.readonly.current }), [this.getBitsAttr("root")]: "", onkeydown: this.onkeydown, ...this.attachment })));
    this.opts = t, this.attachment = at(this.opts.ref), this.domContext = new _r(t.ref), this.announcer = ya(null), this.formatter = xn({ initialLocale: this.opts.locale.current, monthFormat: this.opts.monthFormat, yearFormat: this.opts.yearFormat }), this.setMonths = this.setMonths.bind(this), this.nextPage = this.nextPage.bind(this), this.prevPage = this.prevPage.bind(this), this.prevYear = this.prevYear.bind(this), this.nextYear = this.nextYear.bind(this), this.setYear = this.setYear.bind(this), this.setMonth = this.setMonth.bind(this), this.isOutsideVisibleMonths = this.isOutsideVisibleMonths.bind(this), this.isDateDisabled = this.isDateDisabled.bind(this), this.isDateSelected = this.isDateSelected.bind(this), this.shiftFocus = this.shiftFocus.bind(this), this.handleCellClick = this.handleCellClick.bind(this), this.handleMultipleUpdate = this.handleMultipleUpdate.bind(this), this.handleSingleUpdate = this.handleSingleUpdate.bind(this), this.onkeydown = this.onkeydown.bind(this), this.getBitsAttr = this.getBitsAttr.bind(this), br(() => {
      this.announcer = ya(this.domContext.getDocument());
    }), this.months = Xt({ dateObj: this.opts.placeholder.current, weekStartsOn: this.opts.weekStartsOn.current, locale: this.opts.locale.current, fixedWeeks: this.opts.fixedWeeks.current, numberOfMonths: this.opts.numberOfMonths.current }), __privateMethod(this, _ze_instances, s_fn).call(this), __privateMethod(this, _ze_instances, h_fn).call(this), __privateMethod(this, _ze_instances, u_fn).call(this), On({ placeholder: this.opts.placeholder, getVisibleMonths: () => this.visibleMonths, weekStartsOn: this.opts.weekStartsOn, locale: this.opts.locale, fixedWeeks: this.opts.fixedWeeks, numberOfMonths: this.opts.numberOfMonths, setMonths: (a) => this.months = a }), $n({ fixedWeeks: this.opts.fixedWeeks, locale: this.opts.locale, numberOfMonths: this.opts.numberOfMonths, placeholder: this.opts.placeholder, setMonths: this.setMonths, weekStartsOn: this.opts.weekStartsOn }), zt(() => this.fullCalendarLabel, (a) => {
      const r = this.domContext.getElementById(this.accessibleHeadingId);
      r && (r.textContent = a);
    }), zt(() => this.opts.value.current, () => {
      const a = this.opts.value.current;
      if (Array.isArray(a) && a.length) {
        const r = a[a.length - 1];
        r && this.opts.placeholder.current !== r && (this.opts.placeholder.current = r);
      } else !Array.isArray(a) && a && this.opts.placeholder.current !== a && (this.opts.placeholder.current = a);
    }), Vn({ placeholder: t.placeholder, defaultPlaceholder: t.defaultPlaceholder, isDateDisabled: t.isDateDisabled, maxValue: t.maxValue, minValue: t.minValue, ref: t.ref });
  }
  static create(t) {
    return it.set(new _ze(t));
  }
  get visibleMonths() {
    return h(__privateGet(this, _t2));
  }
  set visibleMonths(t) {
    H(__privateGet(this, _t2), t);
  }
  get months() {
    return h(__privateGet(this, _e));
  }
  set months(t) {
    H(__privateGet(this, _e), t, true);
  }
  setMonths(t) {
    this.months = t;
  }
  get weekdays() {
    return h(__privateGet(this, _a2));
  }
  set weekdays(t) {
    H(__privateGet(this, _a2), t);
  }
  get initialPlaceholderYear() {
    return h(__privateGet(this, _r2));
  }
  set initialPlaceholderYear(t) {
    H(__privateGet(this, _r2), t);
  }
  get defaultYears() {
    return h(__privateGet(this, _n2));
  }
  set defaultYears(t) {
    H(__privateGet(this, _n2), t);
  }
  nextPage() {
    Pn({ fixedWeeks: this.opts.fixedWeeks.current, locale: this.opts.locale.current, numberOfMonths: this.opts.numberOfMonths.current, pagedNavigation: this.opts.pagedNavigation.current, setMonths: this.setMonths, setPlaceholder: (t) => this.opts.placeholder.current = t, weekStartsOn: this.opts.weekStartsOn.current, months: this.months });
  }
  prevPage() {
    qn({ fixedWeeks: this.opts.fixedWeeks.current, locale: this.opts.locale.current, numberOfMonths: this.opts.numberOfMonths.current, pagedNavigation: this.opts.pagedNavigation.current, setMonths: this.setMonths, setPlaceholder: (t) => this.opts.placeholder.current = t, weekStartsOn: this.opts.weekStartsOn.current, months: this.months });
  }
  nextYear() {
    this.opts.placeholder.current = this.opts.placeholder.current.add({ years: 1 });
  }
  prevYear() {
    this.opts.placeholder.current = this.opts.placeholder.current.subtract({ years: 1 });
  }
  setYear(t) {
    this.opts.placeholder.current = this.opts.placeholder.current.set({ year: t });
  }
  setMonth(t) {
    this.opts.placeholder.current = this.opts.placeholder.current.set({ month: t });
  }
  get isNextButtonDisabled() {
    return h(__privateGet(this, _o));
  }
  set isNextButtonDisabled(t) {
    H(__privateGet(this, _o), t);
  }
  get isPrevButtonDisabled() {
    return h(__privateGet(this, _i));
  }
  set isPrevButtonDisabled(t) {
    H(__privateGet(this, _i), t);
  }
  get isInvalid() {
    return h(__privateGet(this, _l));
  }
  set isInvalid(t) {
    H(__privateGet(this, _l), t);
  }
  get headingValue() {
    return h(__privateGet(this, _d));
  }
  set headingValue(t) {
    H(__privateGet(this, _d), t);
  }
  get fullCalendarLabel() {
    return h(__privateGet(this, _c));
  }
  set fullCalendarLabel(t) {
    H(__privateGet(this, _c), t);
  }
  isOutsideVisibleMonths(t) {
    return !this.visibleMonths.some((a) => fe(t, a));
  }
  isDateDisabled(t) {
    if (this.opts.isDateDisabled.current(t) || this.opts.disabled.current) return true;
    const a = this.opts.minValue.current, r = this.opts.maxValue.current;
    return !!(a && Gt(t, a) || r && Gt(r, t));
  }
  isDateSelected(t) {
    const a = this.opts.value.current;
    return Array.isArray(a) ? a.some((r) => wt(r, t)) : a ? wt(a, t) : false;
  }
  shiftFocus(t, a) {
    return Hn({ node: t, add: a, placeholder: this.opts.placeholder, calendarNode: this.opts.ref.current, isPrevButtonDisabled: this.isPrevButtonDisabled, isNextButtonDisabled: this.isNextButtonDisabled, months: this.months, numberOfMonths: this.opts.numberOfMonths.current });
  }
  handleCellClick(t, a) {
    var _a7, _b, _c3, _d3, _e8, _f;
    if (this.opts.readonly.current || ((_b = (_a7 = this.opts.isDateDisabled).current) == null ? void 0 : _b.call(_a7, a)) || ((_d3 = (_c3 = this.opts.isDateUnavailable).current) == null ? void 0 : _d3.call(_c3, a))) return;
    const r = this.opts.value.current;
    if (this.opts.type.current === "multiple") (Array.isArray(r) || r === void 0) && (this.opts.value.current = this.handleMultipleUpdate(r, a));
    else if (!Array.isArray(r)) {
      const s = this.handleSingleUpdate(r, a);
      s ? this.announcer.announce(`Selected Date: ${this.formatter.selectedDate(s, false)}`, "polite") : this.announcer.announce("Selected date is now empty.", "polite", 5e3), this.opts.value.current = Tn(s, r), s !== void 0 && ((_f = (_e8 = this.opts.onDateSelect) == null ? void 0 : _e8.current) == null ? void 0 : _f.call(_e8));
    }
  }
  handleMultipleUpdate(t, a) {
    if (!t) {
      const s = [a];
      return __privateMethod(this, _ze_instances, f_fn).call(this, s) ? s : [a];
    }
    if (!Array.isArray(t)) return;
    const r = t.findIndex((s) => wt(s, a)), n = this.opts.preventDeselect.current;
    if (r === -1) {
      const s = [...t, a];
      return __privateMethod(this, _ze_instances, f_fn).call(this, s) ? s : [a];
    } else {
      if (n) return t;
      {
        const s = t.filter((o) => !wt(o, a));
        if (!s.length) {
          this.opts.placeholder.current = a;
          return;
        }
        return s;
      }
    }
  }
  handleSingleUpdate(t, a) {
    if (!t) return a;
    if (!this.opts.preventDeselect.current && wt(t, a)) {
      this.opts.placeholder.current = a;
      return;
    }
    return a;
  }
  onkeydown(t) {
    Cn({ event: t, handleCellClick: this.handleCellClick, shiftFocus: this.shiftFocus, placeholderValue: this.opts.placeholder.current });
  }
  get snippetProps() {
    return h(__privateGet(this, _p));
  }
  set snippetProps(t) {
    H(__privateGet(this, _p), t);
  }
  get props() {
    return h(__privateGet(this, _m));
  }
  set props(t) {
    H(__privateGet(this, _m), t);
  }
};
_t2 = new WeakMap();
_e = new WeakMap();
_a2 = new WeakMap();
_r2 = new WeakMap();
_n2 = new WeakMap();
_ze_instances = new WeakSet();
s_fn = function() {
  le(() => {
    var _a7;
    if (de(() => this.opts.initialFocus.current)) {
      const a = (_a7 = this.opts.ref.current) == null ? void 0 : _a7.querySelector("[data-focused]");
      a && a.focus();
    }
  });
};
h_fn = function() {
  le(() => this.opts.ref.current ? In({ calendarNode: this.opts.ref.current, label: this.fullCalendarLabel, accessibleHeadingId: this.accessibleHeadingId }) : void 0);
};
u_fn = function() {
  mr(() => {
    this.formatter.getLocale() !== this.opts.locale.current && this.formatter.setLocale(this.opts.locale.current);
  });
};
_o = new WeakMap();
_i = new WeakMap();
_l = new WeakMap();
_d = new WeakMap();
_c = new WeakMap();
f_fn = function(t) {
  if (this.opts.type.current !== "multiple" || !this.opts.maxDays.current) return true;
  const a = t.length;
  return !(this.opts.maxDays.current && a > this.opts.maxDays.current);
};
_p = new WeakMap();
_m = new WeakMap();
let ze = _ze;
const rr = new Ia("Calendar.Cell | RangeCalendar.Cell");
const _Ke = class _Ke {
  constructor(t, a) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __privateAdd(this, _t3, g(() => dt(this.opts.date.current)));
    __privateAdd(this, _e2, g(() => this.root.opts.isDateUnavailable.current(this.opts.date.current)));
    __privateAdd(this, _a3, g(() => Ar(this.opts.date.current, ft())));
    __privateAdd(this, _r3, g(() => !fe(this.opts.date.current, this.opts.month.current)));
    __privateAdd(this, _n3, g(() => this.root.isOutsideVisibleMonths(this.opts.date.current)));
    __privateAdd(this, _s2, g(() => this.root.isDateDisabled(this.opts.date.current) || this.isOutsideMonth && this.root.opts.disableDaysOutsideMonth.current));
    __privateAdd(this, _h, g(() => wt(this.opts.date.current, this.root.opts.placeholder.current)));
    __privateAdd(this, _u, g(() => this.root.isDateSelected(this.opts.date.current)));
    __privateAdd(this, _o2, g(() => this.root.formatter.custom(this.cellDate, { weekday: "long", month: "long", day: "numeric", year: "numeric" })));
    __publicField(this, "attachment");
    __privateAdd(this, _i2, g(() => ({ disabled: this.isDisabled, unavailable: this.isUnavailable, selected: this.isSelectedDate, day: `${this.opts.date.current.day}` })));
    __privateAdd(this, _l2, g(() => this.isDisabled || this.isOutsideMonth && this.root.opts.disableDaysOutsideMonth.current || this.isUnavailable));
    __privateAdd(this, _d2, g(() => ({ "data-unavailable": V(this.isUnavailable), "data-today": this.isDateToday ? "" : void 0, "data-outside-month": this.isOutsideMonth ? "" : void 0, "data-outside-visible-months": this.isOutsideVisibleMonths ? "" : void 0, "data-focused": this.isFocusedDate ? "" : void 0, "data-selected": V(this.isSelectedDate), "data-value": this.opts.date.current.toString(), "data-type": kn(this.opts.date.current), "data-disabled": V(this.isDisabled || this.isOutsideMonth && this.root.opts.disableDaysOutsideMonth.current) })));
    __privateAdd(this, _c2, g(() => ({ id: this.opts.id.current, role: "gridcell", "aria-selected": Pt(this.isSelectedDate), "aria-disabled": Pt(this.ariaDisabled), ...this.sharedDataAttrs, [this.root.getBitsAttr("cell")]: "", ...this.attachment })));
    this.opts = t, this.root = a, this.attachment = at(this.opts.ref);
  }
  static create(t) {
    return rr.set(new _Ke(t, it.get()));
  }
  get cellDate() {
    return h(__privateGet(this, _t3));
  }
  set cellDate(t) {
    H(__privateGet(this, _t3), t);
  }
  get isUnavailable() {
    return h(__privateGet(this, _e2));
  }
  set isUnavailable(t) {
    H(__privateGet(this, _e2), t);
  }
  get isDateToday() {
    return h(__privateGet(this, _a3));
  }
  set isDateToday(t) {
    H(__privateGet(this, _a3), t);
  }
  get isOutsideMonth() {
    return h(__privateGet(this, _r3));
  }
  set isOutsideMonth(t) {
    H(__privateGet(this, _r3), t);
  }
  get isOutsideVisibleMonths() {
    return h(__privateGet(this, _n3));
  }
  set isOutsideVisibleMonths(t) {
    H(__privateGet(this, _n3), t);
  }
  get isDisabled() {
    return h(__privateGet(this, _s2));
  }
  set isDisabled(t) {
    H(__privateGet(this, _s2), t);
  }
  get isFocusedDate() {
    return h(__privateGet(this, _h));
  }
  set isFocusedDate(t) {
    H(__privateGet(this, _h), t);
  }
  get isSelectedDate() {
    return h(__privateGet(this, _u));
  }
  set isSelectedDate(t) {
    H(__privateGet(this, _u), t);
  }
  get labelText() {
    return h(__privateGet(this, _o2));
  }
  set labelText(t) {
    H(__privateGet(this, _o2), t);
  }
  get snippetProps() {
    return h(__privateGet(this, _i2));
  }
  set snippetProps(t) {
    H(__privateGet(this, _i2), t);
  }
  get ariaDisabled() {
    return h(__privateGet(this, _l2));
  }
  set ariaDisabled(t) {
    H(__privateGet(this, _l2), t);
  }
  get sharedDataAttrs() {
    return h(__privateGet(this, _d2));
  }
  set sharedDataAttrs(t) {
    H(__privateGet(this, _d2), t);
  }
  get props() {
    return h(__privateGet(this, _c2));
  }
  set props(t) {
    H(__privateGet(this, _c2), t);
  }
};
_t3 = new WeakMap();
_e2 = new WeakMap();
_a3 = new WeakMap();
_r3 = new WeakMap();
_n3 = new WeakMap();
_s2 = new WeakMap();
_h = new WeakMap();
_u = new WeakMap();
_o2 = new WeakMap();
_i2 = new WeakMap();
_l2 = new WeakMap();
_d2 = new WeakMap();
_c2 = new WeakMap();
let Ke = _Ke;
const _Ge = class _Ge {
  constructor(t, a) {
    __publicField(this, "opts");
    __publicField(this, "cell");
    __publicField(this, "attachment");
    __privateAdd(this, _t4, g(() => this.cell.isOutsideMonth && this.cell.root.opts.disableDaysOutsideMonth.current || this.cell.isDisabled ? void 0 : this.cell.isFocusedDate ? 0 : -1));
    __privateAdd(this, _e3, g(() => ({ disabled: this.cell.isDisabled, unavailable: this.cell.isUnavailable, selected: this.cell.isSelectedDate, day: `${this.cell.opts.date.current.day}` })));
    __privateAdd(this, _a4, g(() => ({ id: this.opts.id.current, role: "button", "aria-label": this.cell.labelText, "aria-disabled": Pt(this.cell.ariaDisabled), ...this.cell.sharedDataAttrs, tabindex: h(__privateGet(this, _t4)), [this.cell.root.getBitsAttr("day")]: "", "data-bits-day": "", onclick: this.onclick, ...this.attachment })));
    this.opts = t, this.cell = a, this.onclick = this.onclick.bind(this), this.attachment = at(this.opts.ref);
  }
  static create(t) {
    return new _Ge(t, rr.get());
  }
  onclick(t) {
    this.cell.isDisabled || this.cell.root.handleCellClick(t, this.cell.opts.date.current);
  }
  get snippetProps() {
    return h(__privateGet(this, _e3));
  }
  set snippetProps(t) {
    H(__privateGet(this, _e3), t);
  }
  get props() {
    return h(__privateGet(this, _a4));
  }
  set props(t) {
    H(__privateGet(this, _a4), t);
  }
};
_t4 = new WeakMap();
_e3 = new WeakMap();
_a4 = new WeakMap();
let Ge = _Ge;
const _Je = class _Je {
  constructor(t, a) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __privateAdd(this, _t5, g(() => this.root.isNextButtonDisabled));
    __publicField(this, "attachment");
    __privateAdd(this, _e4, g(() => ({ id: this.opts.id.current, role: "button", type: "button", "aria-label": "Next", "aria-disabled": Pt(this.isDisabled), "data-disabled": V(this.isDisabled), disabled: this.isDisabled, [this.root.getBitsAttr("next-button")]: "", onclick: this.onclick, ...this.attachment })));
    this.opts = t, this.root = a, this.onclick = this.onclick.bind(this), this.attachment = at(this.opts.ref);
  }
  static create(t) {
    return new _Je(t, it.get());
  }
  get isDisabled() {
    return h(__privateGet(this, _t5));
  }
  set isDisabled(t) {
    H(__privateGet(this, _t5), t);
  }
  onclick(t) {
    this.isDisabled || this.root.nextPage();
  }
  get props() {
    return h(__privateGet(this, _e4));
  }
  set props(t) {
    H(__privateGet(this, _e4), t);
  }
};
_t5 = new WeakMap();
_e4 = new WeakMap();
let Je = _Je;
const _Qe = class _Qe {
  constructor(t, a) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __privateAdd(this, _t6, g(() => this.root.isPrevButtonDisabled));
    __publicField(this, "attachment");
    __privateAdd(this, _e5, g(() => ({ id: this.opts.id.current, role: "button", type: "button", "aria-label": "Previous", "aria-disabled": Pt(this.isDisabled), "data-disabled": V(this.isDisabled), disabled: this.isDisabled, [this.root.getBitsAttr("prev-button")]: "", onclick: this.onclick, ...this.attachment })));
    this.opts = t, this.root = a, this.onclick = this.onclick.bind(this), this.attachment = at(this.opts.ref);
  }
  static create(t) {
    return new _Qe(t, it.get());
  }
  get isDisabled() {
    return h(__privateGet(this, _t6));
  }
  set isDisabled(t) {
    H(__privateGet(this, _t6), t);
  }
  onclick(t) {
    this.isDisabled || this.root.prevPage();
  }
  get props() {
    return h(__privateGet(this, _e5));
  }
  set props(t) {
    H(__privateGet(this, _e5), t);
  }
};
_t6 = new WeakMap();
_e5 = new WeakMap();
let Qe = _Qe;
const _Xe = class _Xe {
  constructor(t, a) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t7, g(() => ({ id: this.opts.id.current, tabindex: -1, role: "grid", "aria-readonly": Pt(this.root.opts.readonly.current), "aria-disabled": Pt(this.root.opts.disabled.current), "data-readonly": V(this.root.opts.readonly.current), "data-disabled": V(this.root.opts.disabled.current), [this.root.getBitsAttr("grid")]: "", ...this.attachment })));
    this.opts = t, this.root = a, this.attachment = at(this.opts.ref);
  }
  static create(t) {
    return new _Xe(t, it.get());
  }
  get props() {
    return h(__privateGet(this, _t7));
  }
  set props(t) {
    H(__privateGet(this, _t7), t);
  }
};
_t7 = new WeakMap();
let Xe = _Xe;
const _ta = class _ta {
  constructor(t, a) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t8, g(() => ({ id: this.opts.id.current, "data-disabled": V(this.root.opts.disabled.current), "data-readonly": V(this.root.opts.readonly.current), [this.root.getBitsAttr("grid-body")]: "", ...this.attachment })));
    this.opts = t, this.root = a, this.attachment = at(this.opts.ref);
  }
  static create(t) {
    return new _ta(t, it.get());
  }
  get props() {
    return h(__privateGet(this, _t8));
  }
  set props(t) {
    H(__privateGet(this, _t8), t);
  }
};
_t8 = new WeakMap();
let ta = _ta;
const _ea = class _ea {
  constructor(t, a) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t9, g(() => ({ id: this.opts.id.current, "data-disabled": V(this.root.opts.disabled.current), "data-readonly": V(this.root.opts.readonly.current), [this.root.getBitsAttr("grid-head")]: "", ...this.attachment })));
    this.opts = t, this.root = a, this.attachment = at(this.opts.ref);
  }
  static create(t) {
    return new _ea(t, it.get());
  }
  get props() {
    return h(__privateGet(this, _t9));
  }
  set props(t) {
    H(__privateGet(this, _t9), t);
  }
};
_t9 = new WeakMap();
let ea = _ea;
const _aa = class _aa {
  constructor(t, a) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t10, g(() => ({ id: this.opts.id.current, "data-disabled": V(this.root.opts.disabled.current), "data-readonly": V(this.root.opts.readonly.current), [this.root.getBitsAttr("grid-row")]: "", ...this.attachment })));
    this.opts = t, this.root = a, this.attachment = at(this.opts.ref);
  }
  static create(t) {
    return new _aa(t, it.get());
  }
  get props() {
    return h(__privateGet(this, _t10));
  }
  set props(t) {
    H(__privateGet(this, _t10), t);
  }
};
_t10 = new WeakMap();
let aa = _aa;
const _ra = class _ra {
  constructor(t, a) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t11, g(() => ({ id: this.opts.id.current, "data-disabled": V(this.root.opts.disabled.current), "data-readonly": V(this.root.opts.readonly.current), [this.root.getBitsAttr("head-cell")]: "", ...this.attachment })));
    this.opts = t, this.root = a, this.attachment = at(this.opts.ref);
  }
  static create(t) {
    return new _ra(t, it.get());
  }
  get props() {
    return h(__privateGet(this, _t11));
  }
  set props(t) {
    H(__privateGet(this, _t11), t);
  }
};
_t11 = new WeakMap();
let ra = _ra;
const _na = class _na {
  constructor(t, a) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t12, g(() => ({ id: this.opts.id.current, "data-disabled": V(this.root.opts.disabled.current), "data-readonly": V(this.root.opts.readonly.current), [this.root.getBitsAttr("header")]: "", ...this.attachment })));
    this.opts = t, this.root = a, this.attachment = at(this.opts.ref);
  }
  static create(t) {
    return new _na(t, it.get());
  }
  get props() {
    return h(__privateGet(this, _t12));
  }
  set props(t) {
    H(__privateGet(this, _t12), t);
  }
};
_t12 = new WeakMap();
let na = _na;
const _sa = class _sa {
  constructor(t, a) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t13, g(() => {
      this.root.opts.locale.current;
      const t = this.opts.months.current, a = this.opts.monthFormat.current, r = [];
      for (const n of t) {
        const s = this.root.opts.placeholder.current.set({ month: n });
        let o;
        typeof a == "function" ? o = a(n) : o = this.root.formatter.custom(dt(s), { month: a }), r.push({ value: n, label: o });
      }
      return r;
    }));
    __privateAdd(this, _e6, g(() => this.root.opts.placeholder.current.month));
    __privateAdd(this, _a5, g(() => this.root.opts.disabled.current || this.opts.disabled.current));
    __privateAdd(this, _r4, g(() => ({ monthItems: this.monthItems, selectedMonthItem: this.monthItems.find((t) => t.value === this.currentMonth) })));
    __privateAdd(this, _n4, g(() => ({ id: this.opts.id.current, value: this.currentMonth, disabled: this.isDisabled, "data-disabled": V(this.isDisabled), [this.root.getBitsAttr("month-select")]: "", onchange: this.onchange, ...this.attachment })));
    this.opts = t, this.root = a, this.onchange = this.onchange.bind(this), this.attachment = at(this.opts.ref);
  }
  static create(t) {
    return new _sa(t, it.get());
  }
  get monthItems() {
    return h(__privateGet(this, _t13));
  }
  set monthItems(t) {
    H(__privateGet(this, _t13), t);
  }
  get currentMonth() {
    return h(__privateGet(this, _e6));
  }
  set currentMonth(t) {
    H(__privateGet(this, _e6), t);
  }
  get isDisabled() {
    return h(__privateGet(this, _a5));
  }
  set isDisabled(t) {
    H(__privateGet(this, _a5), t);
  }
  get snippetProps() {
    return h(__privateGet(this, _r4));
  }
  set snippetProps(t) {
    H(__privateGet(this, _r4), t);
  }
  onchange(t) {
    if (this.isDisabled) return;
    const a = t.target, r = parseInt(a.value, 10);
    isNaN(r) || (this.root.opts.placeholder.current = this.root.opts.placeholder.current.set({ month: r }));
  }
  get props() {
    return h(__privateGet(this, _n4));
  }
  set props(t) {
    H(__privateGet(this, _n4), t);
  }
};
_t13 = new WeakMap();
_e6 = new WeakMap();
_a5 = new WeakMap();
_r4 = new WeakMap();
_n4 = new WeakMap();
let sa = _sa;
const _oa = class _oa {
  constructor(t, a) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t14, g(() => this.opts.years.current && this.opts.years.current.length ? this.opts.years.current : this.root.defaultYears));
    __privateAdd(this, _e7, g(() => {
      this.root.opts.locale.current;
      const t = this.opts.yearFormat.current, a = [];
      for (const r of this.years) {
        const n = this.root.opts.placeholder.current.set({ year: r });
        let s;
        typeof t == "function" ? s = t(r) : s = this.root.formatter.custom(dt(n), { year: t }), a.push({ value: r, label: s });
      }
      return a;
    }));
    __privateAdd(this, _a6, g(() => this.root.opts.placeholder.current.year));
    __privateAdd(this, _r5, g(() => this.root.opts.disabled.current || this.opts.disabled.current));
    __privateAdd(this, _n5, g(() => ({ yearItems: this.yearItems, selectedYearItem: this.yearItems.find((t) => t.value === this.currentYear) })));
    __privateAdd(this, _s3, g(() => ({ id: this.opts.id.current, value: this.currentYear, disabled: this.isDisabled, "data-disabled": V(this.isDisabled), [this.root.getBitsAttr("year-select")]: "", onchange: this.onchange, ...this.attachment })));
    this.opts = t, this.root = a, this.onchange = this.onchange.bind(this), this.attachment = at(this.opts.ref);
  }
  static create(t) {
    return new _oa(t, it.get());
  }
  get years() {
    return h(__privateGet(this, _t14));
  }
  set years(t) {
    H(__privateGet(this, _t14), t);
  }
  get yearItems() {
    return h(__privateGet(this, _e7));
  }
  set yearItems(t) {
    H(__privateGet(this, _e7), t);
  }
  get currentYear() {
    return h(__privateGet(this, _a6));
  }
  set currentYear(t) {
    H(__privateGet(this, _a6), t);
  }
  get isDisabled() {
    return h(__privateGet(this, _r5));
  }
  set isDisabled(t) {
    H(__privateGet(this, _r5), t);
  }
  get snippetProps() {
    return h(__privateGet(this, _n5));
  }
  set snippetProps(t) {
    H(__privateGet(this, _n5), t);
  }
  onchange(t) {
    if (this.isDisabled) return;
    const a = t.target, r = parseInt(a.value, 10);
    isNaN(r) || (this.root.opts.placeholder.current = this.root.opts.placeholder.current.set({ year: r }));
  }
  get props() {
    return h(__privateGet(this, _s3));
  }
  set props(t) {
    H(__privateGet(this, _s3), t);
  }
};
_t14 = new WeakMap();
_e7 = new WeakMap();
_a6 = new WeakMap();
_r5 = new WeakMap();
_n5 = new WeakMap();
_s3 = new WeakMap();
let oa = _oa;
var Rn = q("<div><!></div>");
function Nn(e, t) {
  S(t, true);
  let a = v(t, "id", 19, Oa), r = v(t, "ref", 15, null), n = v(t, "value", 15), s = v(t, "onValueChange", 3, ma), o = v(t, "placeholder", 15), d = v(t, "onPlaceholderChange", 3, ma), c = v(t, "weekdayFormat", 3, "narrow"), p = v(t, "pagedNavigation", 3, false), m = v(t, "isDateDisabled", 3, () => false), b = v(t, "isDateUnavailable", 3, () => false), l = v(t, "fixedWeeks", 3, false), i = v(t, "numberOfMonths", 3, 1), u = v(t, "calendarLabel", 3, "Event"), M = v(t, "disabled", 3, false), x = v(t, "readonly", 3, false), y = v(t, "minValue", 3, void 0), _ = v(t, "maxValue", 3, void 0), C = v(t, "preventDeselect", 3, false), z = v(t, "disableDaysOutsideMonth", 3, true), L = v(t, "initialFocus", 3, false), E = v(t, "monthFormat", 3, "long"), Y = v(t, "yearFormat", 3, "numeric"), U = I(t, ["$$slots", "$$events", "$$legacy", "child", "children", "id", "ref", "value", "onValueChange", "placeholder", "onPlaceholderChange", "weekdayFormat", "weekStartsOn", "pagedNavigation", "isDateDisabled", "isDateUnavailable", "fixedWeeks", "numberOfMonths", "locale", "calendarLabel", "disabled", "readonly", "minValue", "maxValue", "preventDeselect", "type", "disableDaysOutsideMonth", "initialFocus", "maxDays", "monthFormat", "yearFormat"]);
  const K = gn({ defaultValue: n(), minValue: y(), maxValue: _() });
  function Q() {
    o() === void 0 && o(K);
  }
  Q(), zt.pre(() => o(), () => {
    Q();
  });
  function T() {
    n() === void 0 && n(t.type === "single" ? void 0 : []);
  }
  T(), zt.pre(() => n(), () => {
    T();
  });
  const j = ze.create({ id: D(() => a()), ref: D(() => r(), (G) => r(G)), weekdayFormat: D(() => c()), weekStartsOn: D(() => t.weekStartsOn), pagedNavigation: D(() => p()), isDateDisabled: D(() => m()), isDateUnavailable: D(() => b()), fixedWeeks: D(() => l()), numberOfMonths: D(() => i()), locale: Hr(() => t.locale), calendarLabel: D(() => u()), readonly: D(() => x()), disabled: D(() => M()), minValue: D(() => y()), maxValue: D(() => _()), disableDaysOutsideMonth: D(() => z()), initialFocus: D(() => L()), maxDays: D(() => t.maxDays), placeholder: D(() => o(), (G) => {
    o(G), d()(G);
  }), preventDeselect: D(() => C()), value: D(() => n(), (G) => {
    n(G), s()(G);
  }), type: D(() => t.type), monthFormat: D(() => E()), yearFormat: D(() => Y()), defaultPlaceholder: K }), tt = g(() => rt(U, j.props));
  var ht = w(), me = k(ht);
  {
    var te = (G) => {
      var vt = w(), At = k(vt);
      {
        let ia = g(() => ({ props: h(tt), ...j.snippetProps }));
        P(At, () => t.child, () => h(ia));
      }
      f(G, vt);
    }, ve = (G) => {
      var vt = Rn();
      N(vt, () => ({ ...h(tt) }));
      var At = A(vt);
      P(At, () => t.children ?? W, () => j.snippetProps), F(vt), f(G, vt);
    };
    B(me, (G) => {
      t.child ? G(te) : G(ve, false);
    });
  }
  f(e, ht), $();
}
var Wn = q("<div><!></div>");
function jn(e, t) {
  const a = st();
  S(t, true);
  let r = v(t, "ref", 15, null), n = v(t, "id", 19, () => ot(a)), s = I(t, ["$$slots", "$$events", "$$legacy", "children", "child", "ref", "id"]);
  const o = Ge.create({ id: D(() => n()), ref: D(() => r(), (l) => r(l)) }), d = g(() => rt(s, o.props));
  var c = w(), p = k(c);
  {
    var m = (l) => {
      var i = w(), u = k(i);
      {
        let M = g(() => ({ props: h(d), ...o.snippetProps }));
        P(u, () => t.child, () => h(M));
      }
      f(l, i);
    }, b = (l) => {
      var i = Wn();
      N(i, () => ({ ...h(d) }));
      var u = A(i);
      {
        var M = (y) => {
          var _ = w(), C = k(_);
          P(C, () => t.children ?? W, () => o.snippetProps), f(y, _);
        }, x = (y) => {
          var _ = jt();
          J(() => ct(_, o.cell.opts.date.current.day)), f(y, _);
        };
        B(u, (y) => {
          t.children ? y(M) : y(x, false);
        });
      }
      F(i), f(l, i);
    };
    B(p, (l) => {
      t.child ? l(m) : l(b, false);
    });
  }
  f(e, c), $();
}
var Zn = q("<table><!></table>");
function zn(e, t) {
  const a = st();
  S(t, true);
  let r = v(t, "ref", 15, null), n = v(t, "id", 19, () => ot(a)), s = I(t, ["$$slots", "$$events", "$$legacy", "children", "child", "ref", "id"]);
  const o = Xe.create({ id: D(() => n()), ref: D(() => r(), (l) => r(l)) }), d = g(() => rt(s, o.props));
  var c = w(), p = k(c);
  {
    var m = (l) => {
      var i = w(), u = k(i);
      P(u, () => t.child, () => ({ props: h(d) })), f(l, i);
    }, b = (l) => {
      var i = Zn();
      N(i, () => ({ ...h(d) }));
      var u = A(i);
      P(u, () => t.children ?? W), F(i), f(l, i);
    };
    B(p, (l) => {
      t.child ? l(m) : l(b, false);
    });
  }
  f(e, c), $();
}
var Kn = q("<tbody><!></tbody>");
function Gn(e, t) {
  const a = st();
  S(t, true);
  let r = v(t, "ref", 15, null), n = v(t, "id", 19, () => ot(a)), s = I(t, ["$$slots", "$$events", "$$legacy", "children", "child", "ref", "id"]);
  const o = ta.create({ id: D(() => n()), ref: D(() => r(), (l) => r(l)) }), d = g(() => rt(s, o.props));
  var c = w(), p = k(c);
  {
    var m = (l) => {
      var i = w(), u = k(i);
      P(u, () => t.child, () => ({ props: h(d) })), f(l, i);
    }, b = (l) => {
      var i = Kn();
      N(i, () => ({ ...h(d) }));
      var u = A(i);
      P(u, () => t.children ?? W), F(i), f(l, i);
    };
    B(p, (l) => {
      t.child ? l(m) : l(b, false);
    });
  }
  f(e, c), $();
}
var Jn = q("<td><!></td>");
function Qn(e, t) {
  const a = st();
  S(t, true);
  let r = v(t, "ref", 15, null), n = v(t, "id", 19, () => ot(a)), s = I(t, ["$$slots", "$$events", "$$legacy", "children", "child", "ref", "id", "date", "month"]);
  const o = Ke.create({ id: D(() => n()), ref: D(() => r(), (l) => r(l)), date: D(() => t.date), month: D(() => t.month) }), d = g(() => rt(s, o.props));
  var c = w(), p = k(c);
  {
    var m = (l) => {
      var i = w(), u = k(i);
      {
        let M = g(() => ({ props: h(d), ...o.snippetProps }));
        P(u, () => t.child, () => h(M));
      }
      f(l, i);
    }, b = (l) => {
      var i = Jn();
      N(i, () => ({ ...h(d) }));
      var u = A(i);
      P(u, () => t.children ?? W, () => o.snippetProps), F(i), f(l, i);
    };
    B(p, (l) => {
      t.child ? l(m) : l(b, false);
    });
  }
  f(e, c), $();
}
var Xn = q("<thead><!></thead>");
function ts(e, t) {
  const a = st();
  S(t, true);
  let r = v(t, "ref", 15, null), n = v(t, "id", 19, () => ot(a)), s = I(t, ["$$slots", "$$events", "$$legacy", "children", "child", "ref", "id"]);
  const o = ea.create({ id: D(() => n()), ref: D(() => r(), (l) => r(l)) }), d = g(() => rt(s, o.props));
  var c = w(), p = k(c);
  {
    var m = (l) => {
      var i = w(), u = k(i);
      P(u, () => t.child, () => ({ props: h(d) })), f(l, i);
    }, b = (l) => {
      var i = Xn();
      N(i, () => ({ ...h(d) }));
      var u = A(i);
      P(u, () => t.children ?? W), F(i), f(l, i);
    };
    B(p, (l) => {
      t.child ? l(m) : l(b, false);
    });
  }
  f(e, c), $();
}
var es = q("<th><!></th>");
function as(e, t) {
  const a = st();
  S(t, true);
  let r = v(t, "ref", 15, null), n = v(t, "id", 19, () => ot(a)), s = I(t, ["$$slots", "$$events", "$$legacy", "children", "child", "ref", "id"]);
  const o = ra.create({ id: D(() => n()), ref: D(() => r(), (l) => r(l)) }), d = g(() => rt(s, o.props));
  var c = w(), p = k(c);
  {
    var m = (l) => {
      var i = w(), u = k(i);
      P(u, () => t.child, () => ({ props: h(d) })), f(l, i);
    }, b = (l) => {
      var i = es();
      N(i, () => ({ ...h(d) }));
      var u = A(i);
      P(u, () => t.children ?? W), F(i), f(l, i);
    };
    B(p, (l) => {
      t.child ? l(m) : l(b, false);
    });
  }
  f(e, c), $();
}
var rs = q("<tr><!></tr>");
function ns(e, t) {
  const a = st();
  S(t, true);
  let r = v(t, "ref", 15, null), n = v(t, "id", 19, () => ot(a)), s = I(t, ["$$slots", "$$events", "$$legacy", "children", "child", "ref", "id"]);
  const o = aa.create({ id: D(() => n()), ref: D(() => r(), (l) => r(l)) }), d = g(() => rt(s, o.props));
  var c = w(), p = k(c);
  {
    var m = (l) => {
      var i = w(), u = k(i);
      P(u, () => t.child, () => ({ props: h(d) })), f(l, i);
    }, b = (l) => {
      var i = rs();
      N(i, () => ({ ...h(d) }));
      var u = A(i);
      P(u, () => t.children ?? W), F(i), f(l, i);
    };
    B(p, (l) => {
      t.child ? l(m) : l(b, false);
    });
  }
  f(e, c), $();
}
var ss = q("<header><!></header>");
function os(e, t) {
  const a = st();
  S(t, true);
  let r = v(t, "ref", 15, null), n = v(t, "id", 19, () => ot(a)), s = I(t, ["$$slots", "$$events", "$$legacy", "children", "child", "ref", "id"]);
  const o = na.create({ id: D(() => n()), ref: D(() => r(), (l) => r(l)) }), d = g(() => rt(s, o.props));
  var c = w(), p = k(c);
  {
    var m = (l) => {
      var i = w(), u = k(i);
      P(u, () => t.child, () => ({ props: h(d) })), f(l, i);
    }, b = (l) => {
      var i = ss();
      N(i, () => ({ ...h(d) }));
      var u = A(i);
      P(u, () => t.children ?? W), F(i), f(l, i);
    };
    B(p, (l) => {
      t.child ? l(m) : l(b, false);
    });
  }
  f(e, c), $();
}
var is = q("<option> </option>"), ls = q("<!>", 1), ds = q("<select><!></select>");
function cs(e, t) {
  const a = st();
  S(t, true);
  let r = v(t, "ref", 15, null), n = v(t, "id", 19, () => ot(a)), s = v(t, "months", 19, () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), o = v(t, "monthFormat", 3, "long"), d = v(t, "disabled", 3, false), c = v(t, "aria-label", 3, "Select a month"), p = I(t, ["$$slots", "$$events", "$$legacy", "children", "child", "ref", "id", "months", "monthFormat", "disabled", "aria-label"]);
  const m = sa.create({ id: D(() => n()), ref: D(() => r(), (x) => r(x)), months: D(() => s()), monthFormat: D(() => o()), disabled: D(() => !!d()) }), b = g(() => rt(p, m.props, { "aria-label": c() }));
  var l = w(), i = k(l);
  {
    var u = (x) => {
      var y = w(), _ = k(y);
      {
        let C = g(() => ({ props: h(b), ...m.snippetProps }));
        P(_, () => t.child, () => h(C));
      }
      f(x, y);
    }, M = (x) => {
      var y = ds();
      N(y, () => ({ ...h(b) })), Fa(y, () => {
        var _ = A(y), C = ls(), z = k(C);
        {
          var L = (Y) => {
            var U = w(), K = k(U);
            P(K, () => t.children ?? W, () => m.snippetProps), f(Y, U);
          }, E = (Y) => {
            var U = w(), K = k(U);
            Mt(K, 17, () => m.monthItems, (Q) => Q.value, (Q, T) => {
              var j = is(), tt = A(j, true);
              F(j);
              var ht = {};
              J(() => {
                ue(j, h(T).value === m.currentMonth), ct(tt, h(T).label), ht !== (ht = h(T).value) && (j.value = (j.__value = h(T).value) ?? "");
              }), f(Q, j);
            }), f(Y, U);
          };
          B(z, (Y) => {
            t.children ? Y(L) : Y(E, false);
          });
        }
        f(_, C);
      }), f(x, y);
    };
    B(i, (x) => {
      t.child ? x(u) : x(M, false);
    });
  }
  f(e, l), $();
}
var hs = q("<button><!></button>");
function us(e, t) {
  const a = st();
  S(t, true);
  let r = v(t, "id", 19, () => ot(a)), n = v(t, "ref", 15, null), s = v(t, "tabindex", 3, 0), o = I(t, ["$$slots", "$$events", "$$legacy", "children", "child", "id", "ref", "tabindex"]);
  const d = Je.create({ id: D(() => r()), ref: D(() => n(), (i) => n(i)) }), c = g(() => rt(o, d.props, { tabindex: s() }));
  var p = w(), m = k(p);
  {
    var b = (i) => {
      var u = w(), M = k(u);
      P(M, () => t.child, () => ({ props: h(c) })), f(i, u);
    }, l = (i) => {
      var u = hs();
      N(u, () => ({ ...h(c) }));
      var M = A(u);
      P(M, () => t.children ?? W), F(u), f(i, u);
    };
    B(m, (i) => {
      t.child ? i(b) : i(l, false);
    });
  }
  f(e, p), $();
}
var fs = q("<button><!></button>");
function ps(e, t) {
  const a = st();
  S(t, true);
  let r = v(t, "id", 19, () => ot(a)), n = v(t, "ref", 15, null), s = v(t, "tabindex", 3, 0), o = I(t, ["$$slots", "$$events", "$$legacy", "children", "child", "id", "ref", "tabindex"]);
  const d = Qe.create({ id: D(() => r()), ref: D(() => n(), (i) => n(i)) }), c = g(() => rt(o, d.props, { tabindex: s() }));
  var p = w(), m = k(p);
  {
    var b = (i) => {
      var u = w(), M = k(u);
      P(M, () => t.child, () => ({ props: h(c) })), f(i, u);
    }, l = (i) => {
      var u = fs();
      N(u, () => ({ ...h(c) }));
      var M = A(u);
      P(M, () => t.children ?? W), F(u), f(i, u);
    };
    B(m, (i) => {
      t.child ? i(b) : i(l, false);
    });
  }
  f(e, p), $();
}
var ms = q("<option> </option>"), vs = q("<!>", 1), gs = q("<select><!></select>");
function ks(e, t) {
  const a = st();
  S(t, true);
  let r = v(t, "ref", 15, null), n = v(t, "id", 19, () => ot(a)), s = v(t, "yearFormat", 3, "numeric"), o = v(t, "disabled", 3, false), d = v(t, "aria-label", 3, "Select a year"), c = I(t, ["$$slots", "$$events", "$$legacy", "children", "child", "ref", "id", "years", "yearFormat", "disabled", "aria-label"]);
  const p = oa.create({ id: D(() => n()), ref: D(() => r(), (M) => r(M)), years: D(() => t.years), yearFormat: D(() => s()), disabled: D(() => !!o()) }), m = g(() => rt(c, p.props, { "aria-label": d() }));
  var b = w(), l = k(b);
  {
    var i = (M) => {
      var x = w(), y = k(x);
      {
        let _ = g(() => ({ props: h(m), ...p.snippetProps }));
        P(y, () => t.child, () => h(_));
      }
      f(M, x);
    }, u = (M) => {
      var x = gs();
      N(x, () => ({ ...h(m) })), Fa(x, () => {
        var y = A(x), _ = vs(), C = k(_);
        {
          var z = (E) => {
            var Y = w(), U = k(Y);
            P(U, () => t.children ?? W, () => p.snippetProps), f(E, Y);
          }, L = (E) => {
            var Y = w(), U = k(Y);
            Mt(U, 17, () => p.yearItems, (K) => K.value, (K, Q) => {
              var T = ms(), j = A(T, true);
              F(T);
              var tt = {};
              J(() => {
                ue(T, h(Q).value === p.currentYear), ct(j, h(Q).label), tt !== (tt = h(Q).value) && (T.value = (T.__value = h(Q).value) ?? "");
              }), f(K, T);
            }), f(E, Y);
          };
          B(C, (E) => {
            t.children ? E(z) : E(L, false);
          });
        }
        f(y, _);
      }), f(M, x);
    };
    B(l, (M) => {
      t.child ? M(i) : M(u, false);
    });
  }
  f(e, b), $();
}
var ys = Ve('<svg width="12px" height="12px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g fill="none" class="nc-icon-wrapper" stroke-linejoin="miter" stroke-linecap="butt"><path d="M27.01 7H27" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27.01 11H27" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27.01 15H27" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27.01 19H27" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27.01 23H27" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27.01 27H27" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23.01 7H23" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23.01 11H23" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23.01 15H23" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23.01 19H23" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23.01 23H23" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23.01 27H23" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19.01 7H19" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19.01 11H19" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19.01 15H19" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19.01 19H19" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19.01 23H19" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19.01 27H19" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15.01 7H15" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15.01 11H15" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15.01 19H15" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15.01 15H15" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15.01 23H15" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15.01 27H15" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11.01 7H11" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11.01 11H11" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11.01 15H11" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11.01 19H11" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11.01 23H11" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11.01 27H11" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7.01001 7H7.00001" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7.01001 11H7.00001" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23.01 3H23" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27.01 3H27" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19.01 3H19" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15.01 3H15" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11.01 3H11" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7.01001 3H7.00001" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3.01001 3H3.00001" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7.01001 15H7.00001" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7.01001 19H7.00001" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7.01001 23H7.00001" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3.01001 27H3.00001" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7.01001 27H7.00001" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3.01001 7H3.00001" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3.01001 11H3.00001" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3.01001 15H3.00001" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3.01001 19H3.00001" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3.01001 23H3.00001" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path></g></svg>');
function bs(e, t) {
  var a = ys();
  J(() => Jt(a, 0, Qt(t.class))), f(e, a);
}
var ws = Ve('<svg width="12px" height="12px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g fill="none" class="nc-icon-wrapper" stroke-linejoin="miter" stroke-linecap="butt"><path d="M3 7H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 11H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 15H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 19H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 23H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 27H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 7H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 11H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 15H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 19H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 23H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 27H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 7H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 11H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 19H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 23H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 27H11.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 7H15.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 11H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 19H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 15H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M10.99 15H11" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 23H15.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 27H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 7H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 11H19.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 15H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 19H19.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 23H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 27H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 7H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 11H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 3H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 3H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 3H11.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 3H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 3H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 3H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 3H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 15H23.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 19H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 23H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 27H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 27H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 7H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 11H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 15H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 19H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 23H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path></g></svg>');
function Ms(e, t) {
  var a = ws();
  J(() => Jt(a, 0, Qt(t.class))), f(e, a);
}
var Ds = Ve('<svg width="12px" height="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke-linejoin="miter" fill="none" stroke-linecap="butt" class="nc-icon-wrapper"><path d="M3 7H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 11H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 15H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 19H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 23H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 27H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 7H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 11H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 15H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 19H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 23H7.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 27H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 7H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 11H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 15H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 19H11.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 23H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 27H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 7H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 11H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 15H15.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 19H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 23H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 27H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 7H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 11H19.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 15H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 19H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 23H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 27H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 7H23.01" stroke="rgba(0, 0, 0, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 11H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 3H7.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 3H3.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 3H11.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 3H15.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M19 3H19.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 3H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 3H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 15H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 19H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 23H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 27H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 27H23.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 7H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 11H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 15H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 19H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 23H27.01" stroke="#1c1f2100" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path></g></svg>');
function mo(e, t) {
  var a = Ds();
  J(() => Jt(a, 0, Qt(t.class))), f(e, a);
}
function nr(e, t, a) {
  return new Intl.PluralRules(e, a).select(Number(t));
}
const xs = (e) => {
  const t = nr("en", e == null ? void 0 : e.count, {});
  return t == "one" ? `${e == null ? void 0 : e.count} user completed` : t == "other" ? `${e == null ? void 0 : e.count} users completed` : "completion_count";
}, _s = (e) => {
  const t = nr("jp", e == null ? void 0 : e.count, {});
  return t == "one" ? `${e == null ? void 0 : e.count}\u4EBA\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F` : t == "other" ? `${e == null ? void 0 : e.count}\u4EBA\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F` : "completion_count";
}, vo = (e, t = {}) => (t.locale ?? yr()) === "en" ? xs(e) : _s(e);
var Hs = q('<td><div class="relative w-full pt-[100%]"><div class="absolute inset-0"><!></div></div></td>');
function Cs(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var n = w(), s = k(n);
  {
    const o = (c, p) => {
      let m = () => p == null ? void 0 : p().props, b = () => vr(p == null ? void 0 : p(), ["props"]);
      var l = Hs();
      N(l, () => ({ ...m() }));
      var i = A(l), u = A(i), M = A(u);
      P(M, () => t.children ?? W, b), F(u), F(i), F(l), f(c, l);
    };
    let d = g(() => Z("relative p-0 text-center text-sm focus-within:z-20 [&:first-child[data-selected]_[data-bits-day]]:rounded-s-md [&:last-child[data-selected]_[data-bits-day]]:rounded-e-md", t.class));
    O(s, () => Qn, (c, p) => {
      p(c, X({ get class() {
        return h(d);
      } }, () => r, { get ref() {
        return a();
      }, set ref(m) {
        a(m);
      }, child: o, $$slots: { child: true } }));
    });
  }
  f(e, n), $();
}
function Ps(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var n = w(), s = k(n);
  {
    let o = g(() => Z("flex size-full flex-col items-center justify-center gap-1 p-0 leading-none font-normal whitespace-nowrap select-none", "[&[data-today]:not([data-selected])]:border-2 [&[data-today]:not([data-selected])]:border-border [&[data-today][data-disabled]]:text-muted-foreground", "data-selected:border-2 data-selected:border-black", "data-disabled:pointer-events-none data-disabled:text-muted-foreground data-disabled:opacity-50", "data-unavailable:text-muted-foreground data-unavailable:line-through", "focus:relative focus:border-ring focus:ring-ring/50", "[&>span]:text-xs [&>span]:opacity-70", t.class));
    O(s, () => jn, (d, c) => {
      c(d, X({ get class() {
        return h(o);
      }, onclick: (p) => p.stopPropagation() }, () => r, { get ref() {
        return a();
      }, set ref(p) {
        a(p);
      } }));
    });
  }
  f(e, n), $();
}
function qs(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var n = w(), s = k(n);
  {
    let o = g(() => Z("w-full table-fixed border-collapse", t.class));
    O(s, () => zn, (d, c) => {
      c(d, X({ get class() {
        return h(o);
      } }, () => r, { get ref() {
        return a();
      }, set ref(p) {
        a(p);
      } }));
    });
  }
  f(e, n), $();
}
function Ss(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var n = w(), s = k(n);
  {
    let o = g(() => Z("flex w-full items-center justify-between gap-1.5 px-1 py-2 text-sm font-medium", t.class));
    O(s, () => os, (d, c) => {
      c(d, X({ get class() {
        return h(o);
      } }, () => r, { get ref() {
        return a();
      }, set ref(p) {
        a(p);
      } }));
    });
  }
  f(e, n), $();
}
var $s = q("<div><!></div>");
function Is(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children"]);
  var n = $s();
  N(n, (o) => ({ class: o, ...r }), [() => Z("relative flex w-full flex-col gap-4 md:flex-row", t.class)]);
  var s = A(n);
  P(s, () => t.children ?? W), F(n), Te(n, (o) => a(o), () => a()), f(e, n), $();
}
function Ha(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var n = w(), s = k(n);
  {
    let o = g(() => Z(t.class));
    O(s, () => ns, (d, c) => {
      c(d, X({ get class() {
        return h(o);
      } }, () => r, { get ref() {
        return a();
      }, set ref(p) {
        a(p);
      } }));
    });
  }
  f(e, n), $();
}
function Os(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var n = w(), s = k(n);
  {
    let o = g(() => Z(t.class));
    O(s, () => Gn, (d, c) => {
      c(d, X({ get class() {
        return h(o);
      } }, () => r, { get ref() {
        return a();
      }, set ref(p) {
        a(p);
      } }));
    });
  }
  f(e, n), $();
}
function Fs(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var n = w(), s = k(n);
  {
    let o = g(() => Z(t.class));
    O(s, () => ts, (d, c) => {
      c(d, X({ get class() {
        return h(o);
      } }, () => r, { get ref() {
        return a();
      }, set ref(p) {
        a(p);
      } }));
    });
  }
  f(e, n), $();
}
function As(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var n = w(), s = k(n);
  {
    let o = g(() => Z("rounded-md text-center text-[0.8rem] font-normal text-muted-foreground", t.class));
    O(s, () => as, (d, c) => {
      c(d, X({ get class() {
        return h(o);
      } }, () => r, { get ref() {
        return a();
      }, set ref(p) {
        a(p);
      } }));
    });
  }
  f(e, n), $();
}
const sr = Pr({ base: "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:border-ring focus-visible:ring-ring/50 relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-md text-sm font-medium whitespace-nowrap outline-hidden transition-all select-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", variants: { variant: { default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xs", destructive: "bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 text-white shadow-2xs", outline: "bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 border shadow-2xs", secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-2xs", ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2 has-[>svg]:px-3", sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5", lg: "h-10 rounded-md px-6 has-[>svg]:px-4", icon: "size-9" } }, defaultVariants: { variant: "default", size: "default" } });
function Es(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = v(t, "variant", 3, "ghost"), n = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children", "variant"]);
  var s = w(), o = k(s);
  {
    let d = g(() => Z(sr({ variant: r() }), "size-2.5 bg-transparent p-0 select-none disabled:opacity-50 rtl:rotate-180", t.class));
    O(o, () => us, (c, p) => {
      p(c, X({ get class() {
        return h(d);
      }, onclick: (m) => m.stopPropagation() }, () => n, { get ref() {
        return a();
      }, set ref(m) {
        a(m);
      }, children: (m, b) => {
        var l = w(), i = k(l);
        {
          var u = (x) => {
            var y = w(), _ = k(y);
            P(_, () => t.children), f(x, y);
          }, M = (x) => {
            Ms(x, { class: "size-2.5" });
          };
          B(i, (x) => {
            t.children ? x(u) : x(M, false);
          });
        }
        f(m, l);
      }, $$slots: { default: true } }));
    });
  }
  f(e, s), $();
}
function Ys(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = v(t, "variant", 3, "ghost"), n = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children", "variant"]);
  var s = w(), o = k(s);
  {
    let d = g(() => Z(sr({ variant: r() }), "size-2.5 bg-transparent p-0 select-none disabled:opacity-50 rtl:rotate-180", t.class));
    O(o, () => ps, (c, p) => {
      p(c, X({ get class() {
        return h(d);
      }, onclick: (m) => m.stopPropagation() }, () => n, { get ref() {
        return a();
      }, set ref(m) {
        a(m);
      }, children: (m, b) => {
        var l = w(), i = k(l);
        {
          var u = (x) => {
            var y = w(), _ = k(y);
            P(_, () => t.children), f(x, y);
          }, M = (x) => {
            bs(x, { class: "size-2.5" });
          };
          B(i, (x) => {
            t.children ? x(u) : x(M, false);
          });
        }
        f(m, l);
      }, $$slots: { default: true } }));
    });
  }
  f(e, s), $();
}
function or(e, t) {
  S(t, true);
  let a = I(t, ["$$slots", "$$events", "$$legacy"]);
  const r = [["path", { d: "m6 9 6 6 6-6" }]];
  Cr(e, X({ name: "chevron-down" }, () => a, { get iconNode() {
    return r;
  }, children: (n, s) => {
    var o = w(), d = k(o);
    P(d, () => t.children ?? W), f(n, o);
  }, $$slots: { default: true } })), $();
}
var Bs = q("<option> </option>"), Vs = q('<select></select> <span class="flex h-8 items-center gap-1 rounded-md ps-2 pe-1 text-sm font-medium select-none [&amp;>svg]:size-3.5 [&amp;>svg]:text-muted-foreground" aria-hidden="true"> <!></span>', 1), Ts = q("<span><!></span>");
function Ls(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "value", "onchange"]);
  var n = Ts(), s = A(n);
  {
    const o = (d, c) => {
      let p = () => c == null ? void 0 : c().props, m = () => c == null ? void 0 : c().monthItems, b = () => c == null ? void 0 : c().selectedMonthItem;
      var l = Vs(), i = k(l);
      N(i, () => ({ ...p(), value: t.value, onchange: t.onchange })), Mt(i, 21, m, (y) => y.value, (y, _) => {
        var C = Bs(), z = A(C, true);
        F(C);
        var L = {};
        J(() => {
          ue(C, t.value !== void 0 ? h(_).value === t.value : h(_).value === b().value), ct(z, h(_).label), L !== (L = h(_).value) && (C.value = (C.__value = h(_).value) ?? "");
        }), f(y, C);
      }), F(i);
      var u = lt(i, 2), M = A(u), x = lt(M);
      or(x, { class: "size-4" }), F(u), J((y) => ct(M, `${y ?? ""} `), [() => {
        var _a7;
        return ((_a7 = m().find((y) => y.value === t.value)) == null ? void 0 : _a7.label) || b().label;
      }]), f(d, l);
    };
    O(s, () => cs, (d, c) => {
      c(d, X({ class: "absolute inset-0 opacity-0" }, () => r, { get ref() {
        return a();
      }, set ref(p) {
        a(p);
      }, child: o, $$slots: { child: true } }));
    });
  }
  F(n), J((o) => Jt(n, 1, o), [() => Qt(Z("relative flex rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50", t.class))]), f(e, n), $();
}
var Us = q("<option> </option>"), Rs = q('<select></select> <span class="flex h-8 items-center gap-1 rounded-md ps-2 pe-1 text-sm font-medium select-none [&amp;>svg]:size-3.5 [&amp;>svg]:text-muted-foreground" aria-hidden="true"> <!></span>', 1), Ns = q("<span><!></span>");
function Ws(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);
  var n = Ns(), s = A(n);
  {
    const o = (d, c) => {
      let p = () => c == null ? void 0 : c().props, m = () => c == null ? void 0 : c().yearItems, b = () => c == null ? void 0 : c().selectedYearItem;
      var l = Rs(), i = k(l);
      N(i, () => ({ ...p(), value: t.value })), Mt(i, 21, m, (y) => y.value, (y, _) => {
        var C = Us(), z = A(C, true);
        F(C);
        var L = {};
        J(() => {
          ue(C, t.value !== void 0 ? h(_).value === t.value : h(_).value === b().value), ct(z, h(_).label), L !== (L = h(_).value) && (C.value = (C.__value = h(_).value) ?? "");
        }), f(y, C);
      }), F(i);
      var u = lt(i, 2), M = A(u), x = lt(M);
      or(x, { class: "size-4" }), F(u), J((y) => ct(M, `${y ?? ""} `), [() => {
        var _a7;
        return ((_a7 = m().find((y) => y.value === t.value)) == null ? void 0 : _a7.label) || b().label;
      }]), f(d, l);
    };
    O(s, () => ks, (d, c) => {
      c(d, X({ class: "absolute inset-0 opacity-0" }, () => r, { get ref() {
        return a();
      }, set ref(p) {
        a(p);
      }, child: o, $$slots: { child: true } }));
    });
  }
  F(n), J((o) => Jt(n, 1, o), [() => Qt(Z("relative flex rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50", t.class))]), f(e, n), $();
}
var js = q("<div><!></div>");
function Zs(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children"]);
  var n = js();
  N(n, (o) => ({ ...r, class: o }), [() => Z("flex w-full flex-col", t.class)]);
  var s = A(n);
  P(s, () => t.children ?? W), F(n), Te(n, (o) => a(o), () => a()), f(e, n), $();
}
var zs = q("<nav><!></nav>");
function Ks(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = I(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children"]);
  var n = zs();
  N(n, (o) => ({ ...r, class: o }), [() => Z("flex items-center gap-1", t.class)]);
  var s = A(n);
  P(s, () => t.children ?? W), F(n), Te(n, (o) => a(o), () => a()), f(e, n), $();
}
var Gs = q("<!> <!>", 1), Js = q("<!> <!>", 1), Qs = q("<!> <!>", 1);
function Xs(e, t) {
  S(t, true);
  const a = (l) => {
    Ls(l, { get months() {
      return t.months;
    }, get monthFormat() {
      return t.monthFormat;
    }, get value() {
      return t.month.month;
    }, onchange: (i) => {
      if (!n()) return;
      const u = Number.parseInt(i.currentTarget.value), M = n().set({ month: u });
      n(M.subtract({ months: s() }));
    } });
  }, r = (l) => {
    Ws(l, { get years() {
      return t.years;
    }, get yearFormat() {
      return t.yearFormat;
    }, get value() {
      return t.month.year;
    } });
  };
  let n = v(t, "placeholder", 15), s = v(t, "monthIndex", 3, 0);
  function o(l) {
    const i = l.toDate(ft());
    return typeof t.yearFormat == "function" ? t.yearFormat(i.getFullYear()) : new nt(t.locale, { year: t.yearFormat }).format(i);
  }
  function d(l) {
    const i = l.toDate(ft());
    return typeof t.monthFormat == "function" ? t.monthFormat(i.getMonth() + 1) : new nt(t.locale, { month: t.monthFormat }).format(i);
  }
  var c = w(), p = k(c);
  {
    var m = (l) => {
      var i = Gs(), u = k(i);
      a(u);
      var M = lt(u, 2);
      r(M), f(l, i);
    }, b = (l) => {
      var i = w(), u = k(i);
      {
        var M = (y) => {
          var _ = Js(), C = k(_);
          a(C);
          var z = lt(C, 2);
          {
            var L = (E) => {
              var Y = jt();
              J((U) => ct(Y, U), [() => o(n())]), f(E, Y);
            };
            B(z, (E) => {
              n() && E(L);
            });
          }
          f(y, _);
        }, x = (y) => {
          var _ = w(), C = k(_);
          {
            var z = (E) => {
              var Y = Qs(), U = k(Y);
              {
                var K = (T) => {
                  var j = jt();
                  J((tt) => ct(j, tt), [() => d(n())]), f(T, j);
                };
                B(U, (T) => {
                  n() && T(K);
                });
              }
              var Q = lt(U, 2);
              r(Q), f(E, Y);
            }, L = (E) => {
              var Y = jt();
              J((U, K) => ct(Y, `${U ?? ""} ${K ?? ""}`), [() => d(t.month), () => o(t.month)]), f(E, Y);
            };
            B(C, (E) => {
              t.captionLayout === "dropdown-years" ? E(z) : E(L, false);
            }, true);
          }
          f(y, _);
        };
        B(u, (y) => {
          t.captionLayout === "dropdown-months" ? y(M) : y(x, false);
        }, true);
      }
      f(l, i);
    };
    B(p, (l) => {
      t.captionLayout === "dropdown" ? l(m) : l(b, false);
    });
  }
  f(e, c), $();
}
var to = q("<!> <!>", 1), eo = q("<!> <!>", 1), ao = q("<!> <!>", 1), ro = q("<!> <!>", 1);
function go(e, t) {
  S(t, true);
  let a = v(t, "ref", 15, null), r = v(t, "value", 15), n = v(t, "placeholder", 15), s = v(t, "weekdayFormat", 3, "short"), o = v(t, "buttonVariant", 3, "ghost"), d = v(t, "captionLayout", 3, "label"), c = v(t, "locale", 3, "en-US"), p = v(t, "yearFormat", 3, "numeric"), m = v(t, "disableDaysOutsideMonth", 3, false), b = I(t, ["$$slots", "$$events", "$$legacy", "ref", "value", "placeholder", "class", "weekdayFormat", "buttonVariant", "captionLayout", "headerClass", "locale", "months", "years", "monthFormat", "yearFormat", "day", "disableDaysOutsideMonth"]);
  const l = g(() => t.monthFormat ? t.monthFormat : d().startsWith("dropdown") ? "short" : "long");
  var i = w(), u = k(i);
  {
    const M = (y, _) => {
      let C = () => _ == null ? void 0 : _().months, z = () => _ == null ? void 0 : _().weekdays;
      var L = w(), E = k(L);
      O(E, () => Is, (Y, U) => {
        U(Y, { children: (K, Q) => {
          var T = w(), j = k(T);
          Mt(j, 18, C, (tt) => tt, (tt, ht, me) => {
            var te = w(), ve = k(te);
            O(ve, () => Zs, (G, vt) => {
              vt(G, { children: (At, ia) => {
                var la = ro(), da = k(la);
                {
                  let ge = g(() => Z("px-2 text-black uppercase", t.headerClass));
                  O(da, () => Ss, (ke, ye) => {
                    ye(ke, { get class() {
                      return h(ge);
                    }, children: (ca, be) => {
                      var Et = eo(), ee = k(Et);
                      O(ee, () => Xs, (Ht, Ct) => {
                        Ct(Ht, { get captionLayout() {
                          return d();
                        }, get months() {
                          return t.months;
                        }, get monthFormat() {
                          return h(l);
                        }, get years() {
                          return t.years;
                        }, get yearFormat() {
                          return p();
                        }, get month() {
                          return ht.value;
                        }, get locale() {
                          return c();
                        }, get monthIndex() {
                          return h(me);
                        }, get placeholder() {
                          return n();
                        }, set placeholder(Bt) {
                          n(Bt);
                        } });
                      });
                      var Yt = lt(ee, 2);
                      O(Yt, () => Ks, (Ht, Ct) => {
                        Ct(Ht, { children: (Bt, St) => {
                          var $t = to(), yt = k($t);
                          O(yt, () => Ys, (bt, It) => {
                            It(bt, { get variant() {
                              return o();
                            } });
                          });
                          var Vt = lt(yt, 2);
                          O(Vt, () => Es, (bt, It) => {
                            It(bt, { get variant() {
                              return o();
                            } });
                          }), f(Bt, $t);
                        }, $$slots: { default: true } });
                      }), f(ca, Et);
                    }, $$slots: { default: true } });
                  });
                }
                var ir = lt(da, 2);
                O(ir, () => qs, (ge, ke) => {
                  ke(ge, { children: (ye, ca) => {
                    var be = ao(), Et = k(be);
                    O(Et, () => Fs, (Yt, Ht) => {
                      Ht(Yt, { children: (Ct, Bt) => {
                        var St = w(), $t = k(St);
                        O($t, () => Ha, (yt, Vt) => {
                          Vt(yt, { class: "select-none", children: (bt, It) => {
                            var ae = w(), we = k(ae);
                            Mt(we, 16, z, (Tt) => Tt, (Tt, ha) => {
                              var Lt = w(), Me = k(Lt);
                              O(Me, () => As, (Ut, Rt) => {
                                Rt(Ut, { children: (re, ua) => {
                                  gr();
                                  var ne = jt();
                                  J((De) => ct(ne, De), [() => ha.slice(0, 2)]), f(re, ne);
                                }, $$slots: { default: true } });
                              }), f(Tt, Lt);
                            }), f(bt, ae);
                          }, $$slots: { default: true } });
                        }), f(Ct, St);
                      }, $$slots: { default: true } });
                    });
                    var ee = lt(Et, 2);
                    O(ee, () => Os, (Yt, Ht) => {
                      Ht(Yt, { children: (Ct, Bt) => {
                        var St = w(), $t = k(St);
                        Mt($t, 16, () => ht.weeks, (yt) => yt, (yt, Vt) => {
                          var bt = w(), It = k(bt);
                          O(It, () => Ha, (ae, we) => {
                            we(ae, { class: "w-full", children: (Tt, ha) => {
                              var Lt = w(), Me = k(Lt);
                              Mt(Me, 16, () => Vt, (Ut) => Ut, (Ut, Rt) => {
                                var re = w(), ua = k(re);
                                O(ua, () => Cs, (ne, De) => {
                                  De(ne, { get date() {
                                    return Rt;
                                  }, get month() {
                                    return ht.value;
                                  }, children: (lr, no) => {
                                    var fa = w(), dr = k(fa);
                                    {
                                      var cr = (Ot) => {
                                        var Nt = w(), xe = k(Nt);
                                        {
                                          let _e8 = g(() => ({ day: Rt, outsideMonth: !Fr(Rt, ht.value) }));
                                          P(xe, () => t.day, () => h(_e8));
                                        }
                                        f(Ot, Nt);
                                      }, hr = (Ot) => {
                                        var Nt = w(), xe = k(Nt);
                                        O(xe, () => Ps, (_e8, ur) => {
                                          ur(_e8, {});
                                        }), f(Ot, Nt);
                                      };
                                      B(dr, (Ot) => {
                                        t.day ? Ot(cr) : Ot(hr, false);
                                      });
                                    }
                                    f(lr, fa);
                                  }, $$slots: { default: true } });
                                }), f(Ut, re);
                              }), f(Tt, Lt);
                            }, $$slots: { default: true } });
                          }), f(yt, bt);
                        }), f(Ct, St);
                      }, $$slots: { default: true } });
                    }), f(ye, be);
                  }, $$slots: { default: true } });
                }), f(At, la);
              }, $$slots: { default: true } });
            }), f(tt, te);
          }), f(K, T);
        }, $$slots: { default: true } });
      }), f(y, L);
    };
    let x = g(() => Z("group/calendar w-full bg-background in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent", t.class));
    O(u, () => Nn, (y, _) => {
      _(y, X({ get weekdayFormat() {
        return s();
      }, get disableDaysOutsideMonth() {
        return m();
      }, get class() {
        return h(x);
      }, fixedWeeks: true, get locale() {
        return c();
      }, get monthFormat() {
        return h(l);
      }, get yearFormat() {
        return p();
      } }, () => b, { get value() {
        return r();
      }, set value(C) {
        r(C);
      }, get ref() {
        return a();
      }, set ref(C) {
        a(C);
      }, get placeholder() {
        return n();
      }, set placeholder(C) {
        n(C);
      }, children: M, $$slots: { default: true } }));
    });
  }
  f(e, i), $();
}
export {
  Yr as $,
  go as C,
  mo as S,
  ft as a,
  Ps as b,
  vo as c,
  nr as p
};
