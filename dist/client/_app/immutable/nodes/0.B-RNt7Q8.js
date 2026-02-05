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
var _t2, _e2, _a2, _t3, _e3, _n2, _r2, _i2, _s2, _a3, _bs_instances, o_fn, c_fn, _t4, _e4, _t5, _e5, _n3, _r3, _i3, _Nc_instances, s_fn, _t6, _e6, _n4, _r4, _t7, _e7, _n5, _r5, _Kc_instances, i_fn, _t8, _e8, _n6, _r6, _i4, _s3, _a4, _o2, _t9, _e9, _t10, _e10, _dl_instances, n_fn, r_fn, _t11, _e11, _n7, _r7, _t12, _e12, _n8, _r8, _t13, _e13, _n9, _r9, _zl_instances, i_fn2, s_fn2, _t14, _e14, _t15, _e15, _t16, _e16, _n10, _r10, _i5, _mr_instances, s_fn3, a_fn, _o3, _c2, _t17, _e17, _t18, _gr_instances, e_fn, _n11, _t19, _e18, _t20, _e19, _t21, _e20, _t22, _e21, _n12, _r11, _i6, _s4, _a5, _o4, _c3, _br_instances, d_fn, _u2, _l2, _h2, _m2, _g, _p, _f2, y_fn, _v, _b, _t23, _e22, _t24, _e23, _n13, _t25, _e24, _n14, _r12, _i7, _Sr_instances, s_fn4, a_fn2, o_fn2, c_fn2, d_fn2, u_fn, l_fn, _t26, _Tr_instances, e_fn2, _n15, _r13, _t27, _e25, _n16, _r14, _du_instances, i_fn3, _t28, _e26, _n17, _r15, _t29, _e27, _n18, _r16, _i8, _s5, _a6, _o5, _c4, _d2, _u3, _l3, _h3, _m3, _g2, _p2, _f3, _y, _v2, _b2, _w, _x, _S, _T;
import "../chunks/DsnmJJEf.js";
import { k as ee, y as An, L as Go, x as Xi, t as Lt, a7 as Yo, bL as Xo, ak as Mn, am as Zi, aK as Cn, aV as Zo, aL as Jo, aT as Xr, B as kn, aY as Qo, aI as ye, ap as $o, bM as ta, C as Zr, p as W, a5 as xt, b9 as Jr, u as nt, m as ln, e as R, a as V, b as P, c as z, ag as Q, al as un, bh as X, F as bt, _ as N, g as p, Z as A, h as F, bJ as Fe, f as $, s as at, b6 as ea, bi as dn, d as rt, r as it, aj as Qr, ai as na, a4 as ra, Q as ia } from "../chunks/Cerututf.js";
import { B as sa, a as q, o as Ji, m as oa, u as aa, s as Qn } from "../chunks/C-CTaGP6.js";
import { g as fn, D as ca, E as la, F as Qi, k as O, G as ua, H as da, I as fa, J as ha, K as ne, l as Nt, L as $i, x as ts, y as es, m as ma, M as ga, p as kt, N as Mt, O as pa, P as ya, v as va, n as hn, o as jt, f as xe, b as ns, d as $r, s as ti, i as ba } from "../chunks/CD9opEPd.js";
import { i as Z } from "../chunks/DIL41Api.js";
import { a as wa } from "../chunks/D7IsHJFc.js";
import { J as xa, i as Sa, j as Ta, k as Aa, l as Ma, M as rs, g as is, L as Ca, s as ka, S as Pa, m as Oa } from "../chunks/BPNiD34A.js";
import { p as S, s as ht, r as ct, c as gt, b as Ea } from "../chunks/IOctRI-n.js";
import { o as Fa } from "../chunks/C1832kSX.js";
import { o as Da, j as Ge, l as $n, k as tr, h as Se, p as ss, c as Ot, H as os, f as Ct, w as ft, q as Va, i as Ra, s as Ia, t as _a, E as as, S as er, g as mn, v as Ba, n as J, x as Na, y as cs, z as Pn, C as Ht, D as nr, T as La, B as ls, F as Ka, G as Wa, u as rr, J as ei, K as za, I as Ha, a as qa, A as ja, P as Ua, b as Ga } from "../chunks/AqSr3-NM.js";
import { S as Ya, n as De, a as us, M as Kt, c as Te, m as ir, p as ds, i as Xa, b as Za, d as Ja, e as sr, f as E, g as Zt, h as fs, j as Qa, k as Rt, v as $a, l as tc, o as ec, q as ni, r as On, s as Le, t as mt, u as nc, w as ri, x as hs, Q as rc } from "../chunks/D5Cy45eL.js";
import { i as ms } from "../chunks/DonAveOq.js";
import { g as or, l as ic, i as sc, s as oc } from "../chunks/CsOUNaBs.js";
import { c as ac } from "../chunks/CNcSoRr1.js";
import { c as cc } from "../chunks/DxXagp48.js";
import { a as lc } from "../chunks/BUb5wkkL.js";
import { a as uc } from "../chunks/SDOva4gF.js";
import { a as dc } from "../chunks/CBuXWW2l.js";
import { a as fc } from "../chunks/C_KZSe7P.js";
function hc(e, t, n) {
  ee && An();
  var r = new sa(e), i = !Go();
  Xi(() => {
    var s = t();
    i && s !== null && typeof s == "object" && (s = {}), r.ensure(s, n);
  });
}
function gs(e, t, n = false, r = false, i = false) {
  var s = e, o = "";
  Lt(() => {
    var a = Yo;
    if (o === (o = t() ?? "")) {
      ee && An();
      return;
    }
    if (a.nodes !== null && (Xo(a.nodes.start, a.nodes.end), a.nodes = null), o !== "") {
      if (ee) {
        Mn.data;
        for (var c = An(), l = c; c !== null && (c.nodeType !== Zi || c.data !== ""); ) l = c, c = Cn(c);
        if (c === null) throw Zo(), Jo;
        Xr(Mn, l), s = kn(c);
        return;
      }
      var u = o + "";
      n ? u = `<svg>${u}</svg>` : r && (u = `<math>${u}</math>`);
      var d = Qo(u);
      if ((n || r) && (d = ye(d)), Xr(ye(d), d.lastChild), n || r) for (; ye(d); ) s.before(ye(d));
      else s.before(d);
    }
  });
}
function ps(e, t) {
  let n = null, r = ee;
  var i;
  if (ee) {
    n = Mn;
    for (var s = ye(document.head); s !== null && (s.nodeType !== Zi || s.data !== e); ) s = Cn(s);
    if (s === null) Zr(false);
    else {
      var o = Cn(s);
      s.remove(), kn(o);
    }
  }
  ee || (i = document.head.appendChild($o()));
  try {
    Xi(() => t(i), ta);
  } finally {
    r && (Zr(true), kn(n));
  }
}
const ii = { webManifest: { linkTag: '<link rel="manifest" href="./manifest.webmanifest">' } };
function mc(e, t) {
  W(t, true);
  const n = new xa({ useAnonymousFallback: t.enableSSR, authSecretStorageKey: t.authSecretStorageKey }), r = xt({ current: void 0 });
  Jr(Ta, r), Jr(Sa, n.getAuthSecretStorage()), nt(() => (t.sync.when, t.sync.peer, t.storage, t.guestMode, ln(() => {
    t.sync && n.createContext({ sync: t.sync, storage: t.storage, guestMode: t.guestMode, AccountSchema: t.AccountSchema, defaultProfileName: t.defaultProfileName, onAnonymousAccountDiscarded: t.onAnonymousAccountDiscarded, onLogOut: t.onLogOut }).catch((a) => {
      console.error("Error creating Jazz browser context:", a);
    });
  }))), nt(() => n.subscribe(() => {
    r.current = n.getCurrentValue();
  }));
  var i = R(), s = V(i);
  {
    var o = (a) => {
      var c = R(), l = V(c);
      q(l, () => t.children ?? Q), P(a, c);
    };
    Z(s, (a) => {
      r.current && a(o);
    });
  }
  P(e, i), z();
}
function gc(e, t) {
  W(t, true);
  const n = Aa(), r = Ma();
  if (t.betterAuthClient.jazz === void 0) throw new Error("Better Auth client has been initialized without the jazzPluginClient");
  nt(() => (n.current, t.betterAuthClient, t.betterAuthClient.jazz.setJazzContext(n.current), t.betterAuthClient.jazz.setAuthSecretStorage(r), t.betterAuthClient.useSession.subscribe(() => {
  })));
  var i = R(), s = V(i);
  {
    var o = (a) => {
      var c = R(), l = V(c);
      q(l, () => t.children), P(a, c);
    };
    Z(s, (a) => {
      t.children && a(o);
    });
  }
  P(e, i), z();
}
const ys = typeof window < "u" ? window : void 0;
function pc(e) {
  let t = e.activeElement;
  for (; t == null ? void 0 : t.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n;
  }
  return t;
}
let yc = (_a2 = class {
  constructor(t = {}) {
    __privateAdd(this, _t2);
    __privateAdd(this, _e2);
    const { window: n = ys, document: r = n == null ? void 0 : n.document } = t;
    n !== void 0 && (__privateSet(this, _t2, r), __privateSet(this, _e2, un((i) => {
      const s = X(n, "focusin", i), o = X(n, "focusout", i);
      return () => {
        s(), o();
      };
    })));
  }
  get current() {
    var _a7;
    return (_a7 = __privateGet(this, _e2)) == null ? void 0 : _a7.call(this), __privateGet(this, _t2) ? pc(__privateGet(this, _t2)) : null;
  }
}, _t2 = new WeakMap(), _e2 = new WeakMap(), _a2);
new yc();
function vc(e, t) {
  switch (e) {
    case "post":
      nt(t);
      break;
    case "pre":
      bt(t);
      break;
  }
}
function vs(e, t, n, r = {}) {
  const { lazy: i = false } = r;
  let s = !i, o = Array.isArray(e) ? [] : void 0;
  vc(t, () => {
    const a = Array.isArray(e) ? e.map((l) => l()) : e();
    if (!s) {
      s = true, o = a;
      return;
    }
    const c = ln(() => n(a, o));
    return o = a, c;
  });
}
function ar(e, t, n) {
  vs(e, "post", t, n);
}
function bc(e, t, n) {
  vs(e, "pre", t, n);
}
ar.pre = bc;
function wc(e, t) {
  switch (e) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage;
  }
}
class bs {
  constructor(t, n, r = {}) {
    __privateAdd(this, _bs_instances);
    __privateAdd(this, _t3);
    __privateAdd(this, _e3);
    __privateAdd(this, _n2);
    __privateAdd(this, _r2);
    __privateAdd(this, _i2);
    __privateAdd(this, _s2, N(0));
    __privateAdd(this, _a3, (t) => {
      t.key !== __privateGet(this, _e3) || t.newValue === null || (__privateSet(this, _t3, __privateMethod(this, _bs_instances, o_fn).call(this, t.newValue)), A(__privateGet(this, _s2), p(__privateGet(this, _s2)) + 1));
    });
    const { storage: i = "local", serializer: s = { serialize: JSON.stringify, deserialize: JSON.parse }, syncTabs: o = true, window: a = ys } = r;
    if (__privateSet(this, _t3, n), __privateSet(this, _e3, t), __privateSet(this, _n2, s), a === void 0) return;
    const c = wc(i, a);
    __privateSet(this, _r2, c);
    const l = c.getItem(t);
    l !== null ? __privateSet(this, _t3, __privateMethod(this, _bs_instances, o_fn).call(this, l)) : __privateMethod(this, _bs_instances, c_fn).call(this, n), o && i === "local" && __privateSet(this, _i2, un(() => X(a, "storage", __privateGet(this, _a3))));
  }
  get current() {
    var _a7, _b3;
    (_a7 = __privateGet(this, _i2)) == null ? void 0 : _a7.call(this), p(__privateGet(this, _s2));
    const t = __privateMethod(this, _bs_instances, o_fn).call(this, (_b3 = __privateGet(this, _r2)) == null ? void 0 : _b3.getItem(__privateGet(this, _e3))) ?? __privateGet(this, _t3), n = /* @__PURE__ */ new WeakMap(), r = (i) => {
      if (i === null || (i == null ? void 0 : i.constructor.name) === "Date" || typeof i != "object") return i;
      let s = n.get(i);
      return s || (s = new Proxy(i, { get: (o, a) => (p(__privateGet(this, _s2)), r(Reflect.get(o, a))), set: (o, a, c) => (A(__privateGet(this, _s2), p(__privateGet(this, _s2)) + 1), Reflect.set(o, a, c), __privateMethod(this, _bs_instances, c_fn).call(this, t), true) }), n.set(i, s)), s;
    };
    return r(t);
  }
  set current(t) {
    __privateMethod(this, _bs_instances, c_fn).call(this, t), A(__privateGet(this, _s2), p(__privateGet(this, _s2)) + 1);
  }
}
_t3 = new WeakMap();
_e3 = new WeakMap();
_n2 = new WeakMap();
_r2 = new WeakMap();
_i2 = new WeakMap();
_s2 = new WeakMap();
_a3 = new WeakMap();
_bs_instances = new WeakSet();
o_fn = function(t) {
  try {
    return __privateGet(this, _n2).deserialize(t);
  } catch (n) {
    console.error(`Error when parsing "${t}" from persisted store "${__privateGet(this, _e3)}"`, n);
    return;
  }
};
c_fn = function(t) {
  var _a7;
  try {
    t != null && ((_a7 = __privateGet(this, _r2)) == null ? void 0 : _a7.setItem(__privateGet(this, _e3), __privateGet(this, _n2).serialize(t)));
  } catch (n) {
    console.error(`Error when writing value from persisted store "${__privateGet(this, _e3)}" to ${__privateGet(this, _r2)}`, n);
  }
};
function si(e) {
  return e.filter((t) => t.length > 0);
}
const ws = { getItem: (e) => null, setItem: (e, t) => {
} }, Ve = typeof document < "u";
function xc(e) {
  return typeof e == "function";
}
function Sc(e) {
  return e !== null && typeof e == "object";
}
const Ae = Symbol("box"), cr = Symbol("is-writable");
function Tc(e) {
  return Sc(e) && Ae in e;
}
function Ac(e) {
  return tt.isBox(e) && cr in e;
}
function tt(e) {
  let t = N(xt(e));
  return { [Ae]: true, [cr]: true, get current() {
    return p(t);
  }, set current(n) {
    A(t, n, true);
  } };
}
function Mc(e, t) {
  const n = F(e);
  return t ? { [Ae]: true, [cr]: true, get current() {
    return p(n);
  }, set current(r) {
    t(r);
  } } : { [Ae]: true, get current() {
    return e();
  } };
}
function Cc(e) {
  return tt.isBox(e) ? e : xc(e) ? tt.with(e) : tt(e);
}
function kc(e) {
  return Object.entries(e).reduce((t, [n, r]) => tt.isBox(r) ? (tt.isWritableBox(r) ? Object.defineProperty(t, n, { get() {
    return r.current;
  }, set(i) {
    r.current = i;
  } }) : Object.defineProperty(t, n, { get() {
    return r.current;
  } }), t) : Object.assign(t, { [n]: r }), {});
}
function Pc(e) {
  return tt.isWritableBox(e) ? { [Ae]: true, get current() {
    return e.current;
  } } : e;
}
tt.from = Cc;
tt.with = Mc;
tt.flatten = kc;
tt.readonly = Pc;
tt.isBox = Tc;
tt.isWritableBox = Ac;
function Oc(e, t) {
  const n = RegExp(e, "g");
  return (r) => {
    if (typeof r != "string") throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, t) : r;
  };
}
const Ec = Oc(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function Fc(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map((t) => `${Ec(t)}: ${e[t]};`).join(`
`);
}
function Dc(e = {}) {
  return Fc(e).replace(`
`, " ");
}
const Vc = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", transform: "translateX(-100%)" };
Dc(Vc);
const Rc = typeof window < "u" ? window : void 0;
function Ic(e) {
  let t = e.activeElement;
  for (; t == null ? void 0 : t.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n;
  }
  return t;
}
class _c {
  constructor(t = {}) {
    __privateAdd(this, _t4);
    __privateAdd(this, _e4);
    const { window: n = Rc, document: r = n == null ? void 0 : n.document } = t;
    n !== void 0 && (__privateSet(this, _t4, r), __privateSet(this, _e4, un((i) => {
      const s = X(n, "focusin", i), o = X(n, "focusout", i);
      return () => {
        s(), o();
      };
    })));
  }
  get current() {
    var _a7;
    return (_a7 = __privateGet(this, _e4)) == null ? void 0 : _a7.call(this), __privateGet(this, _t4) ? Ic(__privateGet(this, _t4)) : null;
  }
}
_t4 = new WeakMap();
_e4 = new WeakMap();
new _c();
const Ut = tt("mode-watcher-mode"), Gt = tt("mode-watcher-theme"), Bc = ["dark", "light", "system"];
function En(e) {
  return typeof e != "string" ? false : Bc.includes(e);
}
class Nc {
  constructor() {
    __privateAdd(this, _Nc_instances);
    __privateAdd(this, _t5, "system");
    __privateAdd(this, _e5, Ve ? localStorage : ws);
    __privateAdd(this, _n3, __privateGet(this, _e5).getItem(Ut.current));
    __privateAdd(this, _r3, En(__privateGet(this, _n3)) ? __privateGet(this, _n3) : __privateGet(this, _t5));
    __privateAdd(this, _i3, N(xt(__privateMethod(this, _Nc_instances, s_fn).call(this))));
    Fe(() => ar.pre(() => Ut.current, (t, n) => {
      const r = p(__privateGet(this, _i3)).current;
      A(__privateGet(this, _i3), __privateMethod(this, _Nc_instances, s_fn).call(this, r), true), n && localStorage.removeItem(n);
    }));
  }
  get current() {
    return p(__privateGet(this, _i3)).current;
  }
  set current(t) {
    p(__privateGet(this, _i3)).current = t;
  }
}
_t5 = new WeakMap();
_e5 = new WeakMap();
_n3 = new WeakMap();
_r3 = new WeakMap();
_i3 = new WeakMap();
_Nc_instances = new WeakSet();
s_fn = function(t = __privateGet(this, _r3)) {
  return new bs(Ut.current, t, { serializer: { serialize: (n) => n, deserialize: (n) => En(n) ? n : __privateGet(this, _t5) } });
};
class Lc {
  constructor() {
    __privateAdd(this, _t6);
    __privateAdd(this, _e6, true);
    __privateAdd(this, _n4, N(xt(__privateGet(this, _t6))));
    __privateAdd(this, _r4, typeof window < "u" && typeof window.matchMedia == "function" ? new rs("prefers-color-scheme: light") : { current: false });
    Fe(() => {
      bt(() => {
        __privateGet(this, _e6) && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  query() {
    Ve && A(__privateGet(this, _n4), __privateGet(this, _r4).current ? "light" : "dark", true);
  }
  tracking(t) {
    __privateSet(this, _e6, t);
  }
  get current() {
    return p(__privateGet(this, _n4));
  }
}
_t6 = new WeakMap();
_e6 = new WeakMap();
_n4 = new WeakMap();
_r4 = new WeakMap();
const Fn = new Nc(), Dn = new Lc();
class Kc {
  constructor() {
    __privateAdd(this, _Kc_instances);
    __privateAdd(this, _t7, Ve ? localStorage : ws);
    __privateAdd(this, _e7, __privateGet(this, _t7).getItem(Gt.current));
    __privateAdd(this, _n5, __privateGet(this, _e7) === null || __privateGet(this, _e7) === void 0 ? "" : __privateGet(this, _e7));
    __privateAdd(this, _r5, N(xt(__privateMethod(this, _Kc_instances, i_fn).call(this))));
    Fe(() => ar.pre(() => Gt.current, (t, n) => {
      const r = p(__privateGet(this, _r5)).current;
      A(__privateGet(this, _r5), __privateMethod(this, _Kc_instances, i_fn).call(this, r), true), n && localStorage.removeItem(n);
    }));
  }
  get current() {
    return p(__privateGet(this, _r5)).current;
  }
  set current(t) {
    p(__privateGet(this, _r5)).current = t;
  }
}
_t7 = new WeakMap();
_e7 = new WeakMap();
_n5 = new WeakMap();
_r5 = new WeakMap();
_Kc_instances = new WeakSet();
i_fn = function(t = __privateGet(this, _n5)) {
  return new bs(Gt.current, t, { serializer: { serialize: (n) => typeof n != "string" ? "" : n, deserialize: (n) => n } });
};
const qe = new Kc();
let oi, ai, ci = false, fe = null;
function Wc() {
  return fe || (fe = document.createElement("style"), fe.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), fe);
}
function xs(e, t = false) {
  if (typeof document > "u") return;
  if (!ci) {
    ci = true, e();
    return;
  }
  if (typeof window < "u" && window.__vitest_worker__) {
    e();
    return;
  }
  clearTimeout(oi), clearTimeout(ai);
  const r = Wc(), i = () => document.head.appendChild(r), s = () => {
    r.parentNode && document.head.removeChild(r);
  };
  function o() {
    e(), window.requestAnimationFrame(s);
  }
  if (typeof window.requestAnimationFrame < "u") {
    i(), t ? o() : window.requestAnimationFrame(() => {
      o();
    });
    return;
  }
  i(), oi = window.setTimeout(() => {
    e(), ai = window.setTimeout(s, 16);
  }, 16);
}
const _t = tt(void 0), Ye = tt(true), Xe = tt(false), Vn = tt([]), Rn = tt([]);
function zc() {
  const e = F(() => {
    if (!Ve) return;
    const t = Fn.current === "system" ? Dn.current : Fn.current, n = si(Vn.current), r = si(Rn.current);
    function i() {
      const s = document.documentElement, o = document.querySelector('meta[name="theme-color"]');
      t === "light" ? (n.length && s.classList.remove(...n), r.length && s.classList.add(...r), s.style.colorScheme = "light", o && _t.current && o.setAttribute("content", _t.current.light)) : (r.length && s.classList.remove(...r), n.length && s.classList.add(...n), s.style.colorScheme = "dark", o && _t.current && o.setAttribute("content", _t.current.dark));
    }
    return Ye.current ? xs(i, Xe.current) : i(), t;
  });
  return { get current() {
    return p(e);
  } };
}
function Hc() {
  const e = F(() => {
    if (qe.current, !Ve) return;
    function t() {
      document.documentElement.setAttribute("data-theme", qe.current);
    }
    return Ye.current ? xs(t, ln(() => Xe.current)) : t(), qe.current;
  });
  return { get current() {
    return p(e);
  } };
}
const qc = zc(), jc = Hc();
function Uc(e) {
  Fn.current = e;
}
function Gc(e) {
  qe.current = e;
}
function Yc({ defaultMode: e = "system", themeColors: t, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: i = "", modeStorageKey: s = "mode-watcher-mode", themeStorageKey: o = "mode-watcher-theme" }) {
  const a = document.documentElement, c = localStorage.getItem(s) ?? e, l = localStorage.getItem(o) ?? i, u = c === "light" || c === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (u ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = u ? "light" : "dark", t) {
    const d = document.querySelector('meta[name="theme-color"]');
    d && d.setAttribute("content", c === "light" ? t.light : t.dark);
  }
  l && (a.setAttribute("data-theme", l), localStorage.setItem(o, l)), localStorage.setItem(s, c);
}
var Xc = $('<meta name="theme-color"/>');
function Zc(e, t) {
  W(t, true);
  var n = R(), r = V(n);
  {
    var i = (s) => {
      var o = Xc();
      Lt(() => fn(o, "content", t.themeColors.dark)), P(s, o);
    };
    Z(r, (s) => {
      t.themeColors && s(i);
    });
  }
  P(e, n), z();
}
var Jc = $('<meta name="theme-color"/>'), Qc = $("<!> <!>", 1);
function $c(e, t) {
  W(t, true);
  let n = S(t, "trueNonce", 3, "");
  ps("1funsus", (r) => {
    var i = Qc(), s = V(i);
    {
      var o = (c) => {
        var l = Jc();
        Lt(() => fn(l, "content", t.themeColors.dark)), P(c, l);
      };
      Z(s, (c) => {
        t.themeColors && c(o);
      });
    }
    var a = at(s, 2);
    gs(a, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + Yc.toString() + ")(" + JSON.stringify(t.initConfig) + ");<\/script>"), P(r, i);
  }), z();
}
function tl(e, t) {
  W(t, true);
  let n = S(t, "track", 3, true), r = S(t, "defaultMode", 3, "system"), i = S(t, "disableTransitions", 3, true), s = S(t, "darkClassNames", 19, () => ["dark"]), o = S(t, "lightClassNames", 19, () => []), a = S(t, "defaultTheme", 3, ""), c = S(t, "nonce", 3, ""), l = S(t, "themeStorageKey", 3, "mode-watcher-theme"), u = S(t, "modeStorageKey", 3, "mode-watcher-mode"), d = S(t, "disableHeadScriptInjection", 3, false), f = S(t, "synchronousModeChanges", 3, false);
  Ut.current = u(), Gt.current = l(), Vn.current = s(), Rn.current = o(), Ye.current = i(), _t.current = t.themeColors, Xe.current = f(), bt(() => {
    Xe.current = f();
  }), bt(() => {
    Ye.current = i();
  }), bt(() => {
    _t.current = t.themeColors;
  }), bt(() => {
    Vn.current = s();
  }), bt(() => {
    Rn.current = o();
  }), bt(() => {
    Ut.current = u();
  }), bt(() => {
    Gt.current = l();
  }), bt(() => {
    qc.current, Ut.current, Gt.current, jc.current;
  }), Ji(() => {
    Dn.tracking(n()), Dn.query();
    const x = localStorage.getItem(Ut.current);
    Uc(En(x) ? x : r());
    const b = localStorage.getItem(Gt.current);
    Gc(b || a());
  });
  const h = { defaultMode: r(), themeColors: t.themeColors, darkClassNames: s(), lightClassNames: o(), defaultTheme: a(), modeStorageKey: u(), themeStorageKey: l() }, m = F(() => typeof window > "u" ? c() : "");
  var g = R(), y = V(g);
  {
    var v = (x) => {
      Zc(x, { get themeColors() {
        return _t.current;
      } });
    }, T = (x) => {
      $c(x, { get trueNonce() {
        return p(m);
      }, get initConfig() {
        return h;
      }, get themeColors() {
        return _t.current;
      } });
    };
    Z(y, (x) => {
      d() ? x(v) : x(T, false);
    });
  }
  P(e, g), z();
}
const el = globalThis.__sveltekit_1cnfjqz.env, nl = "data:image/svg+xml,%3csvg%20width='128'%20height='128'%20viewBox='0%200%20128%20128'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='128'%20height='128'%20fill='white'/%3e%3cpath%20d='M31%2034.1365L48.4545%2027V36L36.8182%2039.9547V64V86.5001L49.5%2092.3183L48.4545%20100.5L31%2092.3183L31.5%2064L31%2034.1365Z'%20fill='black'/%3e%3cpath%20d='M101%2034.1365L83.5455%2027V36L95.1818%2039.9547V64V86.5001L82.5%2092.3183L83.5455%20100.5L101%2092.3183L100.5%2064L101%2034.1365Z'%20fill='black'/%3e%3c/svg%3e";
function $t(e) {
  let t = N(xt(e));
  return { [la]: true, [ca]: true, get current() {
    return p(t);
  }, set current(n) {
    A(t, n, true);
  } };
}
$t.from = Qi;
$t.with = O;
$t.flatten = ua;
$t.readonly = da;
$t.isBox = fa;
$t.isWritableBox = ha;
function Re(e) {
  nt(() => () => {
    e();
  });
}
function rl(e, t) {
  return setTimeout(t, e);
}
function il(e) {
  return typeof e == "function";
}
function li(e) {
  return il(e) ? e() : e;
}
class sl {
  constructor(t, n = { box: "border-box" }) {
    __privateAdd(this, _t8, { width: 0, height: 0 });
    __privateAdd(this, _e8, false);
    __privateAdd(this, _n6);
    __privateAdd(this, _r6);
    __privateAdd(this, _i4);
    __privateAdd(this, _s3, F(() => {
      var _a7;
      return (_a7 = p(__privateGet(this, _o2))) == null ? void 0 : _a7(), this.getSize().width;
    }));
    __privateAdd(this, _a4, F(() => {
      var _a7;
      return (_a7 = p(__privateGet(this, _o2))) == null ? void 0 : _a7(), this.getSize().height;
    }));
    __privateAdd(this, _o2, F(() => {
      const t = li(__privateGet(this, _r6));
      if (t) return un((n) => {
        if (!__privateGet(this, _i4)) return;
        const r = new (__privateGet(this, _i4)).ResizeObserver((i) => {
          __privateSet(this, _e8, true);
          for (const s of i) {
            const o = __privateGet(this, _n6).box === "content-box" ? s.contentBoxSize : s.borderBoxSize, a = Array.isArray(o) ? o : [o];
            __privateGet(this, _t8).width = a.reduce((c, l) => Math.max(c, l.inlineSize), 0), __privateGet(this, _t8).height = a.reduce((c, l) => Math.max(c, l.blockSize), 0);
          }
          n();
        });
        return r.observe(t), () => {
          __privateSet(this, _e8, false), r.disconnect();
        };
      });
    }));
    __privateSet(this, _i4, n.window ?? Da), __privateSet(this, _n6, n), __privateSet(this, _r6, t), __privateSet(this, _t8, { width: 0, height: 0 });
  }
  calculateSize() {
    const t = li(__privateGet(this, _r6));
    if (!t || !__privateGet(this, _i4)) return;
    const n = t.offsetWidth, r = t.offsetHeight;
    if (__privateGet(this, _n6).box === "border-box") return { width: n, height: r };
    const i = __privateGet(this, _i4).getComputedStyle(t), s = parseFloat(i.paddingLeft) + parseFloat(i.paddingRight), o = parseFloat(i.paddingTop) + parseFloat(i.paddingBottom), a = parseFloat(i.borderLeftWidth) + parseFloat(i.borderRightWidth), c = parseFloat(i.borderTopWidth) + parseFloat(i.borderBottomWidth), l = n - s - a, u = r - o - c;
    return { width: l, height: u };
  }
  getSize() {
    return __privateGet(this, _e8) ? __privateGet(this, _t8) : this.calculateSize() ?? __privateGet(this, _t8);
  }
  get current() {
    var _a7;
    return (_a7 = p(__privateGet(this, _o2))) == null ? void 0 : _a7(), this.getSize();
  }
  get width() {
    return p(__privateGet(this, _s3));
  }
  get height() {
    return p(__privateGet(this, _a4));
  }
}
_t8 = new WeakMap();
_e8 = new WeakMap();
_n6 = new WeakMap();
_r6 = new WeakMap();
_i4 = new WeakMap();
_s3 = new WeakMap();
_a4 = new WeakMap();
_o2 = new WeakMap();
function ol(e) {
  return window.getComputedStyle(e).getPropertyValue("direction");
}
function al(e = "ltr", t = "horizontal") {
  return { horizontal: e === "rtl" ? tr : $n, vertical: Se }[t];
}
function cl(e = "ltr", t = "horizontal") {
  return { horizontal: e === "rtl" ? $n : tr, vertical: Ge }[t];
}
function ll(e = "ltr", t = "horizontal") {
  return ["ltr", "rtl"].includes(e) || (e = "ltr"), ["horizontal", "vertical"].includes(t) || (t = "horizontal"), { nextKey: al(e, t), prevKey: cl(e, t) };
}
class ul {
  constructor(t) {
    __privateAdd(this, _t9);
    __privateAdd(this, _e9, $t(null));
    __privateSet(this, _t9, t);
  }
  getCandidateNodes() {
    return __privateGet(this, _t9).rootNode.current ? __privateGet(this, _t9).candidateSelector ? Array.from(__privateGet(this, _t9).rootNode.current.querySelectorAll(__privateGet(this, _t9).candidateSelector)) : __privateGet(this, _t9).candidateAttr ? Array.from(__privateGet(this, _t9).rootNode.current.querySelectorAll(`[${__privateGet(this, _t9).candidateAttr}]:not([data-disabled])`)) : [] : [];
  }
  focusFirstCandidate() {
    var _a7;
    const t = this.getCandidateNodes();
    t.length && ((_a7 = t[0]) == null ? void 0 : _a7.focus());
  }
  handleKeydown(t, n, r = false) {
    var _a7, _b3;
    const i = __privateGet(this, _t9).rootNode.current;
    if (!i || !t) return;
    const s = this.getCandidateNodes();
    if (!s.length) return;
    const o = s.indexOf(t), a = ol(i), { nextKey: c, prevKey: l } = ll(a, __privateGet(this, _t9).orientation.current), u = __privateGet(this, _t9).loop.current, d = { [c]: o + 1, [l]: o - 1, [os]: 0, [ss]: s.length - 1 };
    if (r) {
      const m = c === Se ? $n : Se, g = l === Ge ? tr : Ge;
      d[m] = o + 1, d[g] = o - 1;
    }
    let f = d[n.key];
    if (f === void 0) return;
    n.preventDefault(), f < 0 && u ? f = s.length - 1 : f === s.length && u && (f = 0);
    const h = s[f];
    if (h) return h.focus(), __privateGet(this, _e9).current = h.id, (_b3 = (_a7 = __privateGet(this, _t9)).onCandidateFocus) == null ? void 0 : _b3.call(_a7, h), h;
  }
  getTabIndex(t) {
    const n = this.getCandidateNodes(), r = __privateGet(this, _e9).current !== null;
    return t && !r && n[0] === t ? (__privateGet(this, _e9).current = t.id, 0) : (t == null ? void 0 : t.id) === __privateGet(this, _e9).current ? 0 : -1;
  }
  setCurrentTabStopId(t) {
    __privateGet(this, _e9).current = t;
  }
  focusCurrentTabStop() {
    var _a7;
    const t = __privateGet(this, _e9).current;
    if (!t) return;
    const n = (_a7 = __privateGet(this, _t9).rootNode.current) == null ? void 0 : _a7.querySelector(`#${t}`);
    !n || !Ot(n) || n.focus();
  }
}
_t9 = new WeakMap();
_e9 = new WeakMap();
class dl {
  constructor(t) {
    __privateAdd(this, _dl_instances);
    __privateAdd(this, _t10);
    __privateAdd(this, _e10, null);
    __privateSet(this, _t10, t), Re(() => __privateMethod(this, _dl_instances, n_fn).call(this));
  }
  run(t) {
    __privateMethod(this, _dl_instances, n_fn).call(this);
    const n = __privateGet(this, _t10).ref.current;
    if (n) {
      if (typeof n.getAnimations != "function") {
        __privateMethod(this, _dl_instances, r_fn).call(this, t);
        return;
      }
      __privateSet(this, _e10, window.requestAnimationFrame(() => {
        const r = n.getAnimations();
        if (r.length === 0) {
          __privateMethod(this, _dl_instances, r_fn).call(this, t);
          return;
        }
        Promise.allSettled(r.map((i) => i.finished)).then(() => {
          __privateMethod(this, _dl_instances, r_fn).call(this, t);
        });
      }));
    }
  }
}
_t10 = new WeakMap();
_e10 = new WeakMap();
_dl_instances = new WeakSet();
n_fn = function() {
  __privateGet(this, _e10) && (window.cancelAnimationFrame(__privateGet(this, _e10)), __privateSet(this, _e10, null));
};
r_fn = function(t) {
  const n = () => {
    t();
  };
  __privateGet(this, _t10).afterTick ? Ct(n) : n();
};
class fl {
  constructor(t) {
    __privateAdd(this, _t11);
    __privateAdd(this, _e11);
    __privateAdd(this, _n7);
    __privateAdd(this, _r7, N(false));
    __privateSet(this, _t11, t), A(__privateGet(this, _r7), t.open.current, true), __privateSet(this, _e11, t.enabled ?? true), __privateSet(this, _n7, new dl({ ref: __privateGet(this, _t11).ref, afterTick: __privateGet(this, _t11).open })), ft(() => __privateGet(this, _t11).open.current, (n) => {
      n && A(__privateGet(this, _r7), true), __privateGet(this, _e11) && __privateGet(this, _n7).run(() => {
        var _a7, _b3;
        n === __privateGet(this, _t11).open.current && (__privateGet(this, _t11).open.current || A(__privateGet(this, _r7), false), (_b3 = (_a7 = __privateGet(this, _t11)).onComplete) == null ? void 0 : _b3.call(_a7));
      });
    });
  }
  get shouldRender() {
    return p(__privateGet(this, _r7));
  }
}
_t11 = new WeakMap();
_e11 = new WeakMap();
_n7 = new WeakMap();
_r7 = new WeakMap();
function hl(e, t) {
  var n = R(), r = V(n);
  hc(r, () => t.children, (i) => {
    var s = R(), o = V(s);
    q(o, () => t.children ?? Q), P(i, s);
  }), P(e, n);
}
function ml(e, t) {
  W(t, true);
  const n = Va(() => t.to), r = ea();
  let i = F(s);
  function s() {
    if (!Ra || t.disabled) return null;
    let d = null;
    return typeof n.current == "string" ? d = document.querySelector(n.current) : d = n.current, d;
  }
  let o;
  function a() {
    o && (aa(o), o = null);
  }
  ft([() => p(i), () => t.disabled], ([d, f]) => {
    if (!d || f) {
      a();
      return;
    }
    return o = oa(hl, { target: d, props: { children: t.children }, context: r }), () => {
      a();
    };
  });
  var c = R(), l = V(c);
  {
    var u = (d) => {
      var f = R(), h = V(f);
      q(h, () => t.children ?? Q), P(d, f);
    };
    Z(l, (d) => {
      t.disabled && d(u);
    });
  }
  P(e, c), z();
}
class gl {
  constructor(t, n = { bubbles: true, cancelable: true }) {
    __publicField(this, "eventName");
    __publicField(this, "options");
    this.eventName = t, this.options = n;
  }
  createEvent(t) {
    return new CustomEvent(this.eventName, { ...this.options, detail: t });
  }
  dispatch(t, n) {
    const r = this.createEvent(n);
    return t.dispatchEvent(r), r;
  }
  listen(t, n, r) {
    const i = (s) => {
      n(s);
    };
    return X(t, this.eventName, i, r);
  }
}
function ui(e, t = 500) {
  let n = null;
  const r = (...i) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...i);
    }, t);
  };
  return r.destroy = () => {
    n !== null && (clearTimeout(n), n = null);
  }, r;
}
function Ss(e, t) {
  return e === t || e.contains(t);
}
function Ts(e) {
  return (e == null ? void 0 : e.ownerDocument) ?? document;
}
function pl(e, t) {
  const { clientX: n, clientY: r } = e, i = t.getBoundingClientRect();
  return n < i.left || n > i.right || r < i.top || r > i.bottom;
}
const yl = [as, er], vl = [Se, Ia, os], As = [Ge, _a, ss], bl = [...vl, ...As];
function wl(e) {
  return e === "indeterminate";
}
function xl(e) {
  return wl(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function di(e) {
  return e.pointerType === "mouse";
}
function Sl(e, { select: t = false } = {}) {
  if (!e || !e.focus) return;
  const n = mn(e);
  if (n.activeElement === e) return;
  const r = n.activeElement;
  e.focus({ preventScroll: true }), e !== r && Ba(e) && t && e.select();
}
function Tl(e, { select: t = false } = {}, n) {
  const r = n();
  for (const i of e) if (Sl(i, { select: t }), n() !== r) return true;
}
let he = N(false);
const _It = class _It {
  constructor() {
    nt(() => (_It._refs === 0 && (_It._cleanup = Fe(() => {
      const t = [], n = (i) => {
        A(he, false);
      }, r = (i) => {
        A(he, true);
      };
      return t.push(X(document, "pointerdown", n, { capture: true }), X(document, "pointermove", n, { capture: true }), X(document, "keydown", r, { capture: true })), ne(...t);
    })), _It._refs++, () => {
      var _a7;
      _It._refs--, _It._refs === 0 && (A(he, false), (_a7 = _It._cleanup) == null ? void 0 : _a7.call(_It));
    }));
  }
  get current() {
    return p(he);
  }
  set current(t) {
    A(he, t, true);
  }
};
__publicField(_It, "_refs", 0);
__publicField(_It, "_cleanup");
let It = _It;
var Ms = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Ze = Ms.join(","), Cs = typeof Element > "u", Jt = Cs ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Je = !Cs && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, Me = function(t, n) {
  var r;
  n === void 0 && (n = true);
  var i = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), s = i === "" || i === "true", o = s || n && t && Me(t.parentNode);
  return o;
}, Al = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, ks = function(t, n, r) {
  if (Me(t)) return [];
  var i = Array.prototype.slice.apply(t.querySelectorAll(Ze));
  return n && Jt.call(t, Ze) && i.unshift(t), i = i.filter(r), i;
}, Qe = function(t, n, r) {
  for (var i = [], s = Array.from(t); s.length; ) {
    var o = s.shift();
    if (!Me(o, false)) if (o.tagName === "SLOT") {
      var a = o.assignedElements(), c = a.length ? a : o.children, l = Qe(c, true, r);
      r.flatten ? i.push.apply(i, l) : i.push({ scopeParent: o, candidates: l });
    } else {
      var u = Jt.call(o, Ze);
      u && r.filter(o) && (n || !t.includes(o)) && i.push(o);
      var d = o.shadowRoot || typeof r.getShadowRoot == "function" && r.getShadowRoot(o), f = !Me(d, false) && (!r.shadowRootFilter || r.shadowRootFilter(o));
      if (d && f) {
        var h = Qe(d === true ? o.children : d.children, true, r);
        r.flatten ? i.push.apply(i, h) : i.push({ scopeParent: o, candidates: h });
      } else s.unshift.apply(s, o.children);
    }
  }
  return i;
}, Ps = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Os = function(t) {
  if (!t) throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Al(t)) && !Ps(t) ? 0 : t.tabIndex;
}, Ml = function(t, n) {
  var r = Os(t);
  return r < 0 && n && !Ps(t) ? 0 : r;
}, Cl = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Es = function(t) {
  return t.tagName === "INPUT";
}, kl = function(t) {
  return Es(t) && t.type === "hidden";
}, Pl = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Ol = function(t, n) {
  for (var r = 0; r < t.length; r++) if (t[r].checked && t[r].form === n) return t[r];
}, El = function(t) {
  if (!t.name) return true;
  var n = t.form || Je(t), r = function(a) {
    return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
  }, i;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") i = r(window.CSS.escape(t.name));
  else try {
    i = r(t.name);
  } catch (o) {
    return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), false;
  }
  var s = Ol(i, t.form);
  return !s || s === t;
}, Fl = function(t) {
  return Es(t) && t.type === "radio";
}, Dl = function(t) {
  return Fl(t) && !El(t);
}, Vl = function(t) {
  var n, r = t && Je(t), i = (n = r) === null || n === void 0 ? void 0 : n.host, s = false;
  if (r && r !== t) {
    var o, a, c;
    for (s = !!((o = i) !== null && o !== void 0 && (a = o.ownerDocument) !== null && a !== void 0 && a.contains(i) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !s && i; ) {
      var l, u, d;
      r = Je(i), i = (l = r) === null || l === void 0 ? void 0 : l.host, s = !!((u = i) !== null && u !== void 0 && (d = u.ownerDocument) !== null && d !== void 0 && d.contains(i));
    }
  }
  return s;
}, fi = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, i = n.height;
  return r === 0 && i === 0;
}, Rl = function(t, n) {
  var r = n.displayCheck, i = n.getShadowRoot;
  if (r === "full-native" && "checkVisibility" in t) {
    var s = t.checkVisibility({ checkOpacity: false, opacityProperty: false, contentVisibilityAuto: true, visibilityProperty: true, checkVisibilityCSS: true });
    return !s;
  }
  if (getComputedStyle(t).visibility === "hidden") return true;
  var o = Jt.call(t, "details>summary:first-of-type"), a = o ? t.parentElement : t;
  if (Jt.call(a, "details:not([open]) *")) return true;
  if (!r || r === "full" || r === "full-native" || r === "legacy-full") {
    if (typeof i == "function") {
      for (var c = t; t; ) {
        var l = t.parentElement, u = Je(t);
        if (l && !l.shadowRoot && i(l) === true) return fi(t);
        t.assignedSlot ? t = t.assignedSlot : !l && u !== t.ownerDocument ? t = u.host : t = l;
      }
      t = c;
    }
    if (Vl(t)) return !t.getClientRects().length;
    if (r !== "legacy-full") return true;
  } else if (r === "non-zero-area") return fi(t);
  return false;
}, Il = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName)) for (var n = t.parentElement; n; ) {
    if (n.tagName === "FIELDSET" && n.disabled) {
      for (var r = 0; r < n.children.length; r++) {
        var i = n.children.item(r);
        if (i.tagName === "LEGEND") return Jt.call(n, "fieldset[disabled] *") ? true : !i.contains(t);
      }
      return true;
    }
    n = n.parentElement;
  }
  return false;
}, $e = function(t, n) {
  return !(n.disabled || Me(n) || kl(n) || Rl(n, t) || Pl(n) || Il(n));
}, In = function(t, n) {
  return !(Dl(n) || Os(n) < 0 || !$e(t, n));
}, _l = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Fs = function(t) {
  var n = [], r = [];
  return t.forEach(function(i, s) {
    var o = !!i.scopeParent, a = o ? i.scopeParent : i, c = Ml(a, o), l = o ? Fs(i.candidates) : a;
    c === 0 ? o ? n.push.apply(n, l) : n.push(a) : r.push({ documentOrder: s, tabIndex: c, item: i, isScope: o, content: l });
  }), r.sort(Cl).reduce(function(i, s) {
    return s.isScope ? i.push.apply(i, s.content) : i.push(s.content), i;
  }, []).concat(n);
}, Ds = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Qe([t], n.includeContainer, { filter: In.bind(null, n), flatten: false, getShadowRoot: n.getShadowRoot, shadowRootFilter: _l }) : r = ks(t, n.includeContainer, In.bind(null, n)), Fs(r);
}, Vs = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Qe([t], n.includeContainer, { filter: $e.bind(null, n), flatten: true, getShadowRoot: n.getShadowRoot }) : r = ks(t, n.includeContainer, $e.bind(null, n)), r;
}, lr = function(t, n) {
  if (n = n || {}, !t) throw new Error("No node provided");
  return Jt.call(t, Ze) === false ? false : In(n, t);
}, Bl = Ms.concat("iframe").join(","), Rs = function(t, n) {
  if (n = n || {}, !t) throw new Error("No node provided");
  return Jt.call(t, Bl) === false ? false : $e(n, t);
};
function be() {
  return { getShadowRoot: true, displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none" };
}
function Nl(e, t) {
  if (!lr(e, be())) return Ll(e, t);
  const n = mn(e), r = Ds(n.body, be());
  t === "prev" && r.reverse();
  const i = r.indexOf(e);
  return i === -1 ? n.body : r.slice(i + 1)[0];
}
function Ll(e, t) {
  const n = mn(e);
  if (!Rs(e, be())) return n.body;
  const r = Vs(n.body, be());
  t === "prev" && r.reverse();
  const i = r.indexOf(e);
  return i === -1 ? n.body : r.slice(i + 1).find((o) => lr(o, be())) ?? n.body;
}
const Kl = { afterMs: 1e4, onChange: J };
function Is(e, t) {
  const { afterMs: n, onChange: r, getWindow: i } = { ...Kl, ...t };
  let s = null, o = N(xt(e));
  function a() {
    return i().setTimeout(() => {
      A(o, e, true), r == null ? void 0 : r(e);
    }, n);
  }
  return nt(() => () => {
    s && i().clearTimeout(s);
  }), O(() => p(o), (c) => {
    A(o, c, true), r == null ? void 0 : r(c), s && i().clearTimeout(s), s = a();
  });
}
class Wl {
  constructor(t) {
    __privateAdd(this, _t12);
    __privateAdd(this, _e12);
    __privateAdd(this, _n8, F(() => __privateGet(this, _t12).onMatch ? __privateGet(this, _t12).onMatch : (t) => t.focus()));
    __privateAdd(this, _r8, F(() => __privateGet(this, _t12).getCurrentItem ? __privateGet(this, _t12).getCurrentItem : __privateGet(this, _t12).getActiveElement));
    __privateSet(this, _t12, t), __privateSet(this, _e12, Is("", { afterMs: 1e3, getWindow: t.getWindow })), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(t, n) {
    var _a7, _b3;
    if (!n.length) return;
    __privateGet(this, _e12).current = __privateGet(this, _e12).current + t;
    const r = p(__privateGet(this, _r8))(), i = ((_b3 = (_a7 = n.find((c) => c === r)) == null ? void 0 : _a7.textContent) == null ? void 0 : _b3.trim()) ?? "", s = n.map((c) => {
      var _a8;
      return ((_a8 = c.textContent) == null ? void 0 : _a8.trim()) ?? "";
    }), o = Na(s, __privateGet(this, _e12).current, i), a = n.find((c) => {
      var _a8;
      return ((_a8 = c.textContent) == null ? void 0 : _a8.trim()) === o;
    });
    return a && p(__privateGet(this, _n8))(a), a;
  }
  resetTypeahead() {
    __privateGet(this, _e12).current = "";
  }
  get search() {
    return __privateGet(this, _e12).current;
  }
}
_t12 = new WeakMap();
_e12 = new WeakMap();
_n8 = new WeakMap();
_r8 = new WeakMap();
class zl {
  constructor(t) {
    __privateAdd(this, _zl_instances);
    __privateAdd(this, _t13);
    __privateAdd(this, _e13);
    __privateAdd(this, _n9);
    __privateAdd(this, _r9, N(null));
    __privateSet(this, _t13, t), __privateSet(this, _e13, F(() => __privateGet(this, _t13).enabled())), __privateSet(this, _n9, Is(false, { afterMs: t.transitTimeout ?? 300, onChange: (n) => {
      var _a7, _b3;
      p(__privateGet(this, _e13)) && ((_b3 = (_a7 = __privateGet(this, _t13)).setIsPointerInTransit) == null ? void 0 : _b3.call(_a7, n));
    }, getWindow: () => cs(__privateGet(this, _t13).triggerNode()) })), ft([t.triggerNode, t.contentNode, t.enabled], ([n, r, i]) => {
      if (!n || !r || !i) return;
      const s = (a) => {
        __privateMethod(this, _zl_instances, s_fn2).call(this, a, r);
      }, o = (a) => {
        __privateMethod(this, _zl_instances, s_fn2).call(this, a, n);
      };
      return ne(X(n, "pointerleave", s), X(r, "pointerleave", o));
    }), ft(() => p(__privateGet(this, _r9)), () => {
      const n = (i) => {
        var _a7, _b3;
        if (!p(__privateGet(this, _r9))) return;
        const s = i.target;
        if (!Pn(s)) return;
        const o = { x: i.clientX, y: i.clientY }, a = ((_a7 = t.triggerNode()) == null ? void 0 : _a7.contains(s)) || ((_b3 = t.contentNode()) == null ? void 0 : _b3.contains(s)), c = !Ul(o, p(__privateGet(this, _r9)));
        a ? __privateMethod(this, _zl_instances, i_fn2).call(this) : c && (__privateMethod(this, _zl_instances, i_fn2).call(this), t.onPointerExit());
      }, r = mn(t.triggerNode() ?? t.contentNode());
      if (r) return X(r, "pointermove", n);
    });
  }
}
_t13 = new WeakMap();
_e13 = new WeakMap();
_n9 = new WeakMap();
_r9 = new WeakMap();
_zl_instances = new WeakSet();
i_fn2 = function() {
  A(__privateGet(this, _r9), null), __privateGet(this, _n9).current = false;
};
s_fn2 = function(t, n) {
  const r = t.currentTarget;
  if (!Ot(r)) return;
  const i = { x: t.clientX, y: t.clientY }, s = Hl(i, r.getBoundingClientRect()), o = ql(i, s), a = jl(n.getBoundingClientRect()), c = Gl([...o, ...a]);
  A(__privateGet(this, _r9), c, true), __privateGet(this, _n9).current = true;
};
function Hl(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, s)) {
    case s:
      return "left";
    case i:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ql(e, t, n = 5) {
  const r = n * 1.5;
  switch (t) {
    case "top":
      return [{ x: e.x - n, y: e.y + n }, { x: e.x, y: e.y - r }, { x: e.x + n, y: e.y + n }];
    case "bottom":
      return [{ x: e.x - n, y: e.y - n }, { x: e.x, y: e.y + r }, { x: e.x + n, y: e.y - n }];
    case "left":
      return [{ x: e.x + n, y: e.y - n }, { x: e.x - r, y: e.y }, { x: e.x + n, y: e.y + n }];
    case "right":
      return [{ x: e.x - n, y: e.y - n }, { x: e.x + r, y: e.y }, { x: e.x - n, y: e.y + n }];
  }
}
function jl(e) {
  const { top: t, right: n, bottom: r, left: i } = e;
  return [{ x: i, y: t }, { x: n, y: t }, { x: n, y: r }, { x: i, y: r }];
}
function Ul(e, t) {
  const { x: n, y: r } = e;
  let i = false;
  for (let s = 0, o = t.length - 1; s < t.length; o = s++) {
    const a = t[s].x, c = t[s].y, l = t[o].x, u = t[o].y;
    c > r != u > r && n < (l - a) * (r - c) / (u - c) + a && (i = !i);
  }
  return i;
}
function Gl(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Yl(t);
}
function Yl(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], o = t[t.length - 2];
      if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], o = n[n.length - 2];
      if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x)) n.pop();
      else break;
    }
    n.push(i);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const Xl = "data-context-menu-trigger", Zl = "data-context-menu-content", Jl = new Ht("Menu.Root"), ur = new Ht("Menu.Root | Menu.Sub"), dr = new Ht("Menu.Content"), Ql = new Ht("Menu.Group | Menu.RadioGroup"), _s = new Ht("Menu.RadioGroup"), $l = new gl("bitsmenuopen", { bubbles: false, cancelable: true }), tu = ma({ component: "menu", parts: ["trigger", "content", "sub-trigger", "item", "group", "group-heading", "checkbox-group", "checkbox-item", "radio-group", "radio-item", "separator", "sub-content", "arrow"] });
const _fr = class _fr {
  constructor(t) {
    __publicField(this, "opts");
    __publicField(this, "isUsingKeyboard", new It());
    __privateAdd(this, _t14, N(false));
    __privateAdd(this, _e14, N(false));
    __publicField(this, "getBitsAttr", (t) => tu.getAttr(t, this.opts.variant.current));
    this.opts = t;
  }
  static create(t) {
    const n = new _fr(t);
    return Jl.set(n);
  }
  get ignoreCloseAutoFocus() {
    return p(__privateGet(this, _t14));
  }
  set ignoreCloseAutoFocus(t) {
    A(__privateGet(this, _t14), t, true);
  }
  get isPointerInTransit() {
    return p(__privateGet(this, _e14));
  }
  set isPointerInTransit(t) {
    A(__privateGet(this, _e14), t, true);
  }
};
_t14 = new WeakMap();
_e14 = new WeakMap();
let fr = _fr;
const _hr = class _hr {
  constructor(t, n, r) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "parentMenu");
    __publicField(this, "contentId", O(() => ""));
    __privateAdd(this, _t15, N(null));
    __publicField(this, "contentPresence");
    __privateAdd(this, _e15, N(null));
    this.opts = t, this.root = n, this.parentMenu = r, this.contentPresence = new fl({ ref: O(() => this.contentNode), open: this.opts.open, onComplete: () => {
      this.opts.onOpenChangeComplete.current(this.opts.open.current);
    } }), r && ft(() => r.opts.open.current, () => {
      r.opts.open.current || (this.opts.open.current = false);
    });
  }
  static create(t, n) {
    return ur.set(new _hr(t, n, null));
  }
  get contentNode() {
    return p(__privateGet(this, _t15));
  }
  set contentNode(t) {
    A(__privateGet(this, _t15), t, true);
  }
  get triggerNode() {
    return p(__privateGet(this, _e15));
  }
  set triggerNode(t) {
    A(__privateGet(this, _e15), t, true);
  }
  toggleOpen() {
    this.opts.open.current = !this.opts.open.current;
  }
  onOpen() {
    this.opts.open.current = true;
  }
  onClose() {
    this.opts.open.current = false;
  }
};
_t15 = new WeakMap();
_e15 = new WeakMap();
let hr = _hr;
const _mr = class _mr {
  constructor(t, n) {
    __privateAdd(this, _mr_instances);
    __publicField(this, "opts");
    __publicField(this, "parentMenu");
    __publicField(this, "rovingFocusGroup");
    __publicField(this, "domContext");
    __publicField(this, "attachment");
    __privateAdd(this, _t16, N(""));
    __privateAdd(this, _e16, 0);
    __privateAdd(this, _n10);
    __privateAdd(this, _r10, N(false));
    __privateAdd(this, _i5);
    __publicField(this, "onCloseAutoFocus", (t) => {
      var _a7, _b3;
      (_b3 = (_a7 = this.opts.onCloseAutoFocus).current) == null ? void 0 : _b3.call(_a7, t), !(t.defaultPrevented || __privateGet(this, _i5)) && this.parentMenu.triggerNode && lr(this.parentMenu.triggerNode) && (t.preventDefault(), this.parentMenu.triggerNode.focus());
    });
    __privateAdd(this, _o3, F(() => ({ open: this.parentMenu.opts.open.current })));
    __privateAdd(this, _c2, F(() => ({ id: this.opts.id.current, role: "menu", "aria-orientation": "vertical", [this.parentMenu.root.getBitsAttr("content")]: "", "data-state": $i(this.parentMenu.opts.open.current), onkeydown: this.onkeydown, onblur: this.onblur, onfocus: this.onfocus, dir: this.parentMenu.root.opts.dir.current, style: { pointerEvents: "auto", contain: "layout style paint" }, ...this.attachment })));
    __publicField(this, "popperProps", { onCloseAutoFocus: (t) => this.onCloseAutoFocus(t) });
    this.opts = t, this.parentMenu = n, this.domContext = new nr(t.ref), this.attachment = Nt(this.opts.ref, (r) => {
      this.parentMenu.contentNode !== r && (this.parentMenu.contentNode = r);
    }), n.contentId = t.id, __privateSet(this, _i5, t.isSub ?? false), this.onkeydown = this.onkeydown.bind(this), this.onblur = this.onblur.bind(this), this.onfocus = this.onfocus.bind(this), this.handleInteractOutside = this.handleInteractOutside.bind(this), new zl({ contentNode: () => this.parentMenu.contentNode, triggerNode: () => this.parentMenu.triggerNode, enabled: () => {
      var _a7;
      return this.parentMenu.opts.open.current && !!((_a7 = this.parentMenu.triggerNode) == null ? void 0 : _a7.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger")));
    }, onPointerExit: () => {
      this.parentMenu.opts.open.current = false;
    }, setIsPointerInTransit: (r) => {
      this.parentMenu.root.isPointerInTransit = r;
    } }), __privateSet(this, _n10, new Wl({ getActiveElement: () => this.domContext.getActiveElement(), getWindow: () => this.domContext.getWindow() }).handleTypeaheadSearch), this.rovingFocusGroup = new ul({ rootNode: O(() => this.parentMenu.contentNode), candidateAttr: this.parentMenu.root.getBitsAttr("item"), loop: this.opts.loop, orientation: O(() => "vertical") }), ft(() => this.parentMenu.contentNode, (r) => {
      if (!r) return;
      const i = () => {
        Ct(() => {
          this.parentMenu.root.isUsingKeyboard.current && this.rovingFocusGroup.focusFirstCandidate();
        });
      };
      return $l.listen(r, i);
    }), nt(() => {
      this.parentMenu.opts.open.current || this.domContext.getWindow().clearTimeout(__privateGet(this, _e16));
    });
  }
  static create(t) {
    return dr.set(new _mr(t, ur.get()));
  }
  get search() {
    return p(__privateGet(this, _t16));
  }
  set search(t) {
    A(__privateGet(this, _t16), t, true);
  }
  get mounted() {
    return p(__privateGet(this, _r10));
  }
  set mounted(t) {
    A(__privateGet(this, _r10), t, true);
  }
  handleTabKeyDown(t) {
    let n = this.parentMenu;
    for (; n.parentMenu !== null; ) n = n.parentMenu;
    if (!n.triggerNode) return;
    t.preventDefault();
    const r = Nl(n.triggerNode, t.shiftKey ? "prev" : "next");
    r ? (this.parentMenu.root.ignoreCloseAutoFocus = true, n.onClose(), Ct(() => {
      r.focus(), Ct(() => {
        this.parentMenu.root.ignoreCloseAutoFocus = false;
      });
    })) : this.domContext.getDocument().body.focus();
  }
  onkeydown(t) {
    var _a7, _b3;
    if (t.defaultPrevented) return;
    if (t.key === La) {
      this.handleTabKeyDown(t);
      return;
    }
    const n = t.target, r = t.currentTarget;
    if (!Ot(n) || !Ot(r)) return;
    const i = ((_a7 = n.closest(`[${this.parentMenu.root.getBitsAttr("content")}]`)) == null ? void 0 : _a7.id) === this.parentMenu.contentId.current, s = t.ctrlKey || t.altKey || t.metaKey, o = t.key.length === 1;
    if (this.rovingFocusGroup.handleKeydown(n, t) || t.code === "Space") return;
    const c = __privateMethod(this, _mr_instances, s_fn3).call(this);
    i && !s && o && __privateGet(this, _n10).call(this, t.key, c), ((_b3 = t.target) == null ? void 0 : _b3.id) === this.parentMenu.contentId.current && bl.includes(t.key) && (t.preventDefault(), As.includes(t.key) && c.reverse(), Tl(c, { select: false }, () => this.domContext.getActiveElement()));
  }
  onblur(t) {
    var _a7, _b3;
    Pn(t.currentTarget) && Pn(t.target) && (((_b3 = (_a7 = t.currentTarget).contains) == null ? void 0 : _b3.call(_a7, t.target)) || (this.domContext.getWindow().clearTimeout(__privateGet(this, _e16)), this.search = ""));
  }
  onfocus(t) {
    this.parentMenu.root.isUsingKeyboard.current && Ct(() => this.rovingFocusGroup.focusFirstCandidate());
  }
  onItemEnter() {
    return __privateMethod(this, _mr_instances, a_fn).call(this);
  }
  onItemLeave(t) {
    var _a7;
    if (t.currentTarget.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger")) || __privateMethod(this, _mr_instances, a_fn).call(this) || this.parentMenu.root.isUsingKeyboard.current) return;
    (_a7 = this.parentMenu.contentNode) == null ? void 0 : _a7.focus(), this.rovingFocusGroup.setCurrentTabStopId("");
  }
  onTriggerLeave() {
    return !!__privateMethod(this, _mr_instances, a_fn).call(this);
  }
  handleInteractOutside(t) {
    var _a7;
    if (!ls(t.target)) return;
    const n = (_a7 = this.parentMenu.triggerNode) == null ? void 0 : _a7.id;
    if (t.target.id === n) {
      t.preventDefault();
      return;
    }
    t.target.closest(`#${n}`) && t.preventDefault();
  }
  get shouldRender() {
    return this.parentMenu.contentPresence.shouldRender;
  }
  get snippetProps() {
    return p(__privateGet(this, _o3));
  }
  set snippetProps(t) {
    A(__privateGet(this, _o3), t);
  }
  get props() {
    return p(__privateGet(this, _c2));
  }
  set props(t) {
    A(__privateGet(this, _c2), t);
  }
};
_t16 = new WeakMap();
_e16 = new WeakMap();
_n10 = new WeakMap();
_r10 = new WeakMap();
_i5 = new WeakMap();
_mr_instances = new WeakSet();
s_fn3 = function() {
  const t = this.parentMenu.contentNode;
  return t ? Array.from(t.querySelectorAll(`[${this.parentMenu.root.getBitsAttr("item")}]:not([data-disabled])`)) : [];
};
a_fn = function() {
  return this.parentMenu.root.isPointerInTransit;
};
_o3 = new WeakMap();
_c2 = new WeakMap();
let mr = _mr;
class Bs {
  constructor(t, n) {
    __publicField(this, "opts");
    __publicField(this, "content");
    __publicField(this, "attachment");
    __privateAdd(this, _t17, N(false));
    __privateAdd(this, _e17, F(() => ({ id: this.opts.id.current, tabindex: -1, role: "menuitem", "aria-disabled": es(this.opts.disabled.current), "data-disabled": ts(this.opts.disabled.current), "data-highlighted": p(__privateGet(this, _t17)) ? "" : void 0, [this.content.parentMenu.root.getBitsAttr("item")]: "", onpointermove: this.onpointermove, onpointerleave: this.onpointerleave, onfocus: this.onfocus, onblur: this.onblur, ...this.attachment })));
    this.opts = t, this.content = n, this.attachment = Nt(this.opts.ref), this.onpointermove = this.onpointermove.bind(this), this.onpointerleave = this.onpointerleave.bind(this), this.onfocus = this.onfocus.bind(this), this.onblur = this.onblur.bind(this);
  }
  onpointermove(t) {
    if (!t.defaultPrevented && di(t)) if (this.opts.disabled.current) this.content.onItemLeave(t);
    else {
      if (this.content.onItemEnter()) return;
      const r = t.currentTarget;
      if (!Ot(r)) return;
      r.focus();
    }
  }
  onpointerleave(t) {
    t.defaultPrevented || di(t) && this.content.onItemLeave(t);
  }
  onfocus(t) {
    Ct(() => {
      t.defaultPrevented || this.opts.disabled.current || A(__privateGet(this, _t17), true);
    });
  }
  onblur(t) {
    Ct(() => {
      t.defaultPrevented || A(__privateGet(this, _t17), false);
    });
  }
  get props() {
    return p(__privateGet(this, _e17));
  }
  set props(t) {
    A(__privateGet(this, _e17), t);
  }
}
_t17 = new WeakMap();
_e17 = new WeakMap();
const _gr = class _gr {
  constructor(t, n) {
    __privateAdd(this, _gr_instances);
    __publicField(this, "opts");
    __publicField(this, "item");
    __publicField(this, "root");
    __privateAdd(this, _t18, false);
    __privateAdd(this, _n11, F(() => kt(this.item.props, { onclick: this.onclick, onpointerdown: this.onpointerdown, onpointerup: this.onpointerup, onkeydown: this.onkeydown })));
    this.opts = t, this.item = n, this.root = n.content.parentMenu.root, this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerup = this.onpointerup.bind(this);
  }
  static create(t) {
    const n = new Bs(t, dr.get());
    return new _gr(t, n);
  }
  onkeydown(t) {
    const n = this.item.content.search !== "";
    if (!(this.item.opts.disabled.current || n && t.key === er) && yl.includes(t.key)) {
      if (!Ot(t.currentTarget)) return;
      t.currentTarget.click(), t.preventDefault();
    }
  }
  onclick(t) {
    this.item.opts.disabled.current || __privateMethod(this, _gr_instances, e_fn).call(this);
  }
  onpointerup(t) {
    var _a7;
    if (!t.defaultPrevented && !__privateGet(this, _t18)) {
      if (!Ot(t.currentTarget)) return;
      (_a7 = t.currentTarget) == null ? void 0 : _a7.click();
    }
  }
  onpointerdown(t) {
    __privateSet(this, _t18, true);
  }
  get props() {
    return p(__privateGet(this, _n11));
  }
  set props(t) {
    A(__privateGet(this, _n11), t);
  }
};
_t18 = new WeakMap();
_gr_instances = new WeakSet();
e_fn = function() {
  if (this.item.opts.disabled.current) return;
  const t = new CustomEvent("menuitemselect", { bubbles: true, cancelable: true });
  if (this.opts.onSelect.current(t), t.defaultPrevented) {
    this.item.content.parentMenu.root.isUsingKeyboard.current = false;
    return;
  }
  this.opts.closeOnSelect.current && this.item.content.parentMenu.root.opts.onClose();
};
_n11 = new WeakMap();
let gr = _gr;
const _pr = class _pr {
  constructor(t, n) {
    __publicField(this, "opts");
    __publicField(this, "content");
    __publicField(this, "attachment");
    __privateAdd(this, _t19, N(null));
    __publicField(this, "root");
    __privateAdd(this, _e18, F(() => ({ id: this.opts.id.current, [this.root.getBitsAttr("radio-group")]: "", role: "group", "aria-labelledby": this.groupHeadingId, ...this.attachment })));
    this.opts = t, this.content = n, this.root = n.parentMenu.root, this.attachment = Nt(this.opts.ref);
  }
  static create(t) {
    return Ql.set(_s.set(new _pr(t, dr.get())));
  }
  get groupHeadingId() {
    return p(__privateGet(this, _t19));
  }
  set groupHeadingId(t) {
    A(__privateGet(this, _t19), t, true);
  }
  setValue(t) {
    this.opts.value.current = t;
  }
  get props() {
    return p(__privateGet(this, _e18));
  }
  set props(t) {
    A(__privateGet(this, _e18), t);
  }
};
_t19 = new WeakMap();
_e18 = new WeakMap();
let pr = _pr;
const _yr = class _yr {
  constructor(t, n, r) {
    __publicField(this, "opts");
    __publicField(this, "item");
    __publicField(this, "group");
    __publicField(this, "attachment");
    __privateAdd(this, _t20, F(() => this.group.opts.value.current === this.opts.value.current));
    __privateAdd(this, _e19, F(() => ({ [this.group.root.getBitsAttr("radio-item")]: "", ...this.item.props, role: "menuitemradio", "aria-checked": ga(this.isChecked), "data-state": xl(this.isChecked), ...this.attachment })));
    this.opts = t, this.item = n, this.group = r, this.attachment = Nt(this.opts.ref);
  }
  static create(t) {
    const n = _s.get(), r = new Bs(t, n.content), i = new gr(t, r);
    return new _yr(t, i, n);
  }
  get isChecked() {
    return p(__privateGet(this, _t20));
  }
  set isChecked(t) {
    A(__privateGet(this, _t20), t);
  }
  selectValue() {
    this.group.setValue(this.opts.value.current);
  }
  get props() {
    return p(__privateGet(this, _e19));
  }
  set props(t) {
    A(__privateGet(this, _e19), t);
  }
};
_t20 = new WeakMap();
_e19 = new WeakMap();
let yr = _yr;
const _vr = class _vr {
  constructor(t, n) {
    __publicField(this, "opts");
    __publicField(this, "parentMenu");
    __publicField(this, "attachment");
    __publicField(this, "onclick", (t) => {
      this.opts.disabled.current || t.detail !== 0 || (this.parentMenu.toggleOpen(), t.preventDefault());
    });
    __publicField(this, "onpointerdown", (t) => {
      if (!this.opts.disabled.current) {
        if (t.pointerType === "touch") return t.preventDefault();
        t.button === 0 && t.ctrlKey === false && (this.parentMenu.toggleOpen(), this.parentMenu.opts.open.current || t.preventDefault());
      }
    });
    __publicField(this, "onpointerup", (t) => {
      this.opts.disabled.current || t.pointerType === "touch" && (t.preventDefault(), this.parentMenu.toggleOpen());
    });
    __publicField(this, "onkeydown", (t) => {
      if (!this.opts.disabled.current) {
        if (t.key === er || t.key === as) {
          this.parentMenu.toggleOpen(), t.preventDefault();
          return;
        }
        t.key === Se && (this.parentMenu.onOpen(), t.preventDefault());
      }
    });
    __privateAdd(this, _t21, F(() => {
      if (this.parentMenu.opts.open.current && this.parentMenu.contentId.current) return this.parentMenu.contentId.current;
    }));
    __privateAdd(this, _e20, F(() => ({ id: this.opts.id.current, disabled: this.opts.disabled.current, "aria-haspopup": "menu", "aria-expanded": es(this.parentMenu.opts.open.current), "aria-controls": p(__privateGet(this, _t21)), "data-disabled": ts(this.opts.disabled.current), "data-state": $i(this.parentMenu.opts.open.current), [this.parentMenu.root.getBitsAttr("trigger")]: "", onclick: this.onclick, onpointerdown: this.onpointerdown, onpointerup: this.onpointerup, onkeydown: this.onkeydown, ...this.attachment })));
    this.opts = t, this.parentMenu = n, this.attachment = Nt(this.opts.ref, (r) => this.parentMenu.triggerNode = r);
  }
  static create(t) {
    return new _vr(t, ur.get());
  }
  get props() {
    return p(__privateGet(this, _e20));
  }
  set props(t) {
    A(__privateGet(this, _e20), t);
  }
};
_t21 = new WeakMap();
_e20 = new WeakMap();
let vr = _vr;
globalThis.bitsDismissableLayers ?? (globalThis.bitsDismissableLayers = /* @__PURE__ */ new Map());
const _br = class _br {
  constructor(t) {
    __privateAdd(this, _br_instances);
    __publicField(this, "opts");
    __privateAdd(this, _t22);
    __privateAdd(this, _e21);
    __privateAdd(this, _n12, { pointerdown: false });
    __privateAdd(this, _r11, false);
    __privateAdd(this, _i6, false);
    __privateAdd(this, _s4);
    __privateAdd(this, _a5);
    __privateAdd(this, _o4, J);
    __privateAdd(this, _c3, (t) => {
      t.defaultPrevented || this.opts.ref.current && Ct(() => {
        var _a7, _b3;
        !this.opts.ref.current || __privateGet(this, _p).call(this, t.target) || t.target && !__privateGet(this, _i6) && ((_b3 = (_a7 = __privateGet(this, _a5)).current) == null ? void 0 : _b3.call(_a7, t));
      });
    });
    __privateAdd(this, _u2, (t) => {
      let n = t;
      n.defaultPrevented && (n = hi(t)), __privateGet(this, _t22).current(t);
    });
    __privateAdd(this, _l2, ui((t) => {
      if (!this.opts.ref.current) {
        __privateGet(this, _o4).call(this);
        return;
      }
      const n = this.opts.isValidEvent.current(t, this.opts.ref.current) || ru(t, this.opts.ref.current);
      if (!__privateGet(this, _r11) || __privateMethod(this, _br_instances, y_fn).call(this) || !n) {
        __privateGet(this, _o4).call(this);
        return;
      }
      let r = t;
      if (r.defaultPrevented && (r = hi(r)), __privateGet(this, _e21).current !== "close" && __privateGet(this, _e21).current !== "defer-otherwise-close") {
        __privateGet(this, _o4).call(this);
        return;
      }
      t.pointerType === "touch" ? (__privateGet(this, _o4).call(this), __privateSet(this, _o4, X(__privateGet(this, _s4), "click", __privateGet(this, _u2), { once: true }))) : __privateGet(this, _t22).current(r);
    }, 10));
    __privateAdd(this, _h2, (t) => {
      __privateGet(this, _n12)[t.type] = true;
    });
    __privateAdd(this, _m2, (t) => {
      __privateGet(this, _n12)[t.type] = false;
    });
    __privateAdd(this, _g, () => {
      this.opts.ref.current && __privateSet(this, _r11, nu(this.opts.ref.current));
    });
    __privateAdd(this, _p, (t) => this.opts.ref.current ? Ss(this.opts.ref.current, t) : false);
    __privateAdd(this, _f2, ui(() => {
      for (const t in __privateGet(this, _n12)) __privateGet(this, _n12)[t] = false;
      __privateSet(this, _r11, false);
    }, 20));
    __privateAdd(this, _v, () => {
      __privateSet(this, _i6, true);
    });
    __privateAdd(this, _b, () => {
      __privateSet(this, _i6, false);
    });
    __publicField(this, "props", { onfocuscapture: __privateGet(this, _v), onblurcapture: __privateGet(this, _b) });
    this.opts = t, __privateSet(this, _e21, t.interactOutsideBehavior), __privateSet(this, _t22, t.onInteractOutside), __privateSet(this, _a5, t.onFocusOutside), nt(() => {
      __privateSet(this, _s4, Ts(this.opts.ref.current));
    });
    let n = J;
    const r = () => {
      __privateGet(this, _f2).call(this), globalThis.bitsDismissableLayers.delete(this), __privateGet(this, _l2).destroy(), n();
    };
    ft([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!(!this.opts.enabled.current || !this.opts.ref.current)) return rl(1, () => {
        this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, __privateGet(this, _e21)), n(), n = __privateMethod(this, _br_instances, d_fn).call(this));
      }), r;
    }), Re(() => {
      __privateGet(this, _f2).destroy(), globalThis.bitsDismissableLayers.delete(this), __privateGet(this, _l2).destroy(), __privateGet(this, _o4).call(this), n();
    });
  }
  static create(t) {
    return new _br(t);
  }
};
_t22 = new WeakMap();
_e21 = new WeakMap();
_n12 = new WeakMap();
_r11 = new WeakMap();
_i6 = new WeakMap();
_s4 = new WeakMap();
_a5 = new WeakMap();
_o4 = new WeakMap();
_c3 = new WeakMap();
_br_instances = new WeakSet();
d_fn = function() {
  return ne(X(__privateGet(this, _s4), "pointerdown", ne(__privateGet(this, _h2), __privateGet(this, _g)), { capture: true }), X(__privateGet(this, _s4), "pointerdown", ne(__privateGet(this, _m2), __privateGet(this, _l2))), X(__privateGet(this, _s4), "focusin", __privateGet(this, _c3)));
};
_u2 = new WeakMap();
_l2 = new WeakMap();
_h2 = new WeakMap();
_m2 = new WeakMap();
_g = new WeakMap();
_p = new WeakMap();
_f2 = new WeakMap();
y_fn = function() {
  return Object.values(__privateGet(this, _n12)).some(Boolean);
};
_v = new WeakMap();
_b = new WeakMap();
let br = _br;
function eu(e = [...globalThis.bitsDismissableLayers]) {
  return e.findLast(([t, { current: n }]) => n === "close" || n === "ignore");
}
function nu(e) {
  const t = [...globalThis.bitsDismissableLayers], n = eu(t);
  if (n) return n[0].opts.ref.current === e;
  const [r] = t[0];
  return r.opts.ref.current === e;
}
function ru(e, t) {
  const n = e.target;
  if (!ls(n)) return false;
  const r = !!n.closest(`[${Xl}]`);
  if ("button" in e && e.button > 0 && !r) return false;
  if ("button" in e && e.button === 0 && r) return true;
  const i = !!t.closest(`[${Zl}]`);
  return r && i ? false : Ts(n).documentElement.contains(n) && !Ss(t, n) && pl(e, t);
}
function hi(e) {
  const t = e.currentTarget, n = e.target;
  let r;
  e instanceof PointerEvent ? r = new PointerEvent(e.type, e) : r = new PointerEvent("pointerdown", e);
  let i = false;
  return new Proxy(r, { get: (o, a) => a === "currentTarget" ? t : a === "target" ? n : a === "preventDefault" ? () => {
    i = true, typeof o.preventDefault == "function" && o.preventDefault();
  } : a === "defaultPrevented" ? i : a in o ? o[a] : e[a] });
}
function iu(e, t) {
  W(t, true);
  let n = S(t, "interactOutsideBehavior", 3, "close"), r = S(t, "onInteractOutside", 3, J), i = S(t, "onFocusOutside", 3, J), s = S(t, "isValidEvent", 3, () => false);
  const o = br.create({ id: O(() => t.id), interactOutsideBehavior: O(() => n()), onInteractOutside: O(() => r()), enabled: O(() => t.enabled), onFocusOutside: O(() => i()), isValidEvent: O(() => s()), ref: t.ref });
  var a = R(), c = V(a);
  q(c, () => t.children ?? Q, () => ({ props: o.props })), P(e, a), z();
}
globalThis.bitsEscapeLayers ?? (globalThis.bitsEscapeLayers = /* @__PURE__ */ new Map());
const _wr = class _wr {
  constructor(t) {
    __publicField(this, "opts");
    __publicField(this, "domContext");
    __privateAdd(this, _t23, () => X(this.domContext.getDocument(), "keydown", __privateGet(this, _e22), { passive: false }));
    __privateAdd(this, _e22, (t) => {
      if (t.key !== Ka || !su(this)) return;
      const n = new KeyboardEvent(t.type, t);
      t.preventDefault();
      const r = this.opts.escapeKeydownBehavior.current;
      r !== "close" && r !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(n);
    });
    this.opts = t, this.domContext = new nr(this.opts.ref);
    let n = J;
    ft(() => t.enabled.current, (r) => (r && (globalThis.bitsEscapeLayers.set(this, t.escapeKeydownBehavior), n = __privateGet(this, _t23).call(this)), () => {
      n(), globalThis.bitsEscapeLayers.delete(this);
    }));
  }
  static create(t) {
    return new _wr(t);
  }
};
_t23 = new WeakMap();
_e22 = new WeakMap();
let wr = _wr;
function su(e) {
  const t = [...globalThis.bitsEscapeLayers], n = t.findLast(([i, { current: s }]) => s === "close" || s === "ignore");
  if (n) return n[0] === e;
  const [r] = t[0];
  return r === e;
}
function ou(e, t) {
  W(t, true);
  let n = S(t, "escapeKeydownBehavior", 3, "close"), r = S(t, "onEscapeKeydown", 3, J);
  wr.create({ escapeKeydownBehavior: O(() => n()), onEscapeKeydown: O(() => r()), enabled: O(() => t.enabled), ref: t.ref });
  var i = R(), s = V(i);
  q(s, () => t.children ?? Q), P(e, i), z();
}
const _xr = class _xr {
  constructor() {
    __privateAdd(this, _t24, Mt([]));
    __privateAdd(this, _e23, /* @__PURE__ */ new WeakMap());
    __privateAdd(this, _n13, /* @__PURE__ */ new WeakMap());
  }
  static getInstance() {
    return this.instance || (this.instance = new _xr()), this.instance;
  }
  register(t) {
    const n = this.getActive();
    n && n !== t && n.pause();
    const r = document.activeElement;
    r && r !== document.body && __privateGet(this, _n13).set(t, r), __privateGet(this, _t24).current = __privateGet(this, _t24).current.filter((i) => i !== t), __privateGet(this, _t24).current.unshift(t);
  }
  unregister(t) {
    __privateGet(this, _t24).current = __privateGet(this, _t24).current.filter((r) => r !== t);
    const n = this.getActive();
    n && n.resume();
  }
  getActive() {
    return __privateGet(this, _t24).current[0];
  }
  setFocusMemory(t, n) {
    __privateGet(this, _e23).set(t, n);
  }
  getFocusMemory(t) {
    return __privateGet(this, _e23).get(t);
  }
  isActiveScope(t) {
    return this.getActive() === t;
  }
  setPreFocusMemory(t, n) {
    __privateGet(this, _n13).set(t, n);
  }
  getPreFocusMemory(t) {
    return __privateGet(this, _n13).get(t);
  }
  clearPreFocusMemory(t) {
    __privateGet(this, _n13).delete(t);
  }
};
_t24 = new WeakMap();
_e23 = new WeakMap();
_n13 = new WeakMap();
__publicField(_xr, "instance");
let xr = _xr;
const _Sr = class _Sr {
  constructor(t) {
    __privateAdd(this, _Sr_instances);
    __privateAdd(this, _t25, false);
    __privateAdd(this, _e24, null);
    __privateAdd(this, _n14, xr.getInstance());
    __privateAdd(this, _r12, []);
    __privateAdd(this, _i7);
    __privateSet(this, _i7, t);
  }
  get paused() {
    return __privateGet(this, _t25);
  }
  pause() {
    __privateSet(this, _t25, true);
  }
  resume() {
    __privateSet(this, _t25, false);
  }
  mount(t) {
    __privateGet(this, _e24) && this.unmount(), __privateSet(this, _e24, t), __privateGet(this, _n14).register(this), __privateMethod(this, _Sr_instances, c_fn2).call(this), __privateMethod(this, _Sr_instances, a_fn2).call(this);
  }
  unmount() {
    __privateGet(this, _e24) && (__privateMethod(this, _Sr_instances, s_fn4).call(this), __privateMethod(this, _Sr_instances, o_fn2).call(this), __privateGet(this, _n14).unregister(this), __privateGet(this, _n14).clearPreFocusMemory(this), __privateSet(this, _e24, null));
  }
  static use(t) {
    let n = null;
    return ft([() => t.ref.current, () => t.enabled.current], ([r, i]) => {
      r && i ? (n || (n = new _Sr(t)), n.mount(r)) : n && (n.unmount(), n = null);
    }), Re(() => {
      n == null ? void 0 : n.unmount();
    }), { get props() {
      return { tabindex: -1 };
    } };
  }
};
_t25 = new WeakMap();
_e24 = new WeakMap();
_n14 = new WeakMap();
_r12 = new WeakMap();
_i7 = new WeakMap();
_Sr_instances = new WeakSet();
s_fn4 = function() {
  for (const t of __privateGet(this, _r12)) t();
  __privateSet(this, _r12, []);
};
a_fn2 = function() {
  if (!__privateGet(this, _e24)) return;
  const t = new CustomEvent("focusScope.onOpenAutoFocus", { bubbles: false, cancelable: true });
  __privateGet(this, _i7).onOpenAutoFocus.current(t), t.defaultPrevented || requestAnimationFrame(() => {
    if (!__privateGet(this, _e24)) return;
    const n = __privateMethod(this, _Sr_instances, u_fn).call(this);
    n ? (n.focus(), __privateGet(this, _n14).setFocusMemory(this, n)) : __privateGet(this, _e24).focus();
  });
};
o_fn2 = function() {
  var _a7, _b3;
  const t = new CustomEvent("focusScope.onCloseAutoFocus", { bubbles: false, cancelable: true });
  if ((_b3 = (_a7 = __privateGet(this, _i7).onCloseAutoFocus).current) == null ? void 0 : _b3.call(_a7, t), !t.defaultPrevented) {
    const n = __privateGet(this, _n14).getPreFocusMemory(this);
    if (n && document.contains(n)) try {
      n.focus();
    } catch {
      document.body.focus();
    }
  }
};
c_fn2 = function() {
  if (!__privateGet(this, _e24) || !__privateGet(this, _i7).trap.current) return;
  const t = __privateGet(this, _e24), n = t.ownerDocument, r = (o) => {
    if (__privateGet(this, _t25) || !__privateGet(this, _n14).isActiveScope(this)) return;
    const a = o.target;
    if (!a) return;
    if (t.contains(a)) __privateGet(this, _n14).setFocusMemory(this, a);
    else {
      const l = __privateGet(this, _n14).getFocusMemory(this);
      if (l && t.contains(l) && Rs(l)) o.preventDefault(), l.focus();
      else {
        const u = __privateMethod(this, _Sr_instances, u_fn).call(this), d = __privateMethod(this, _Sr_instances, l_fn).call(this)[0];
        (u || d || t).focus();
      }
    }
  }, i = (o) => {
    if (!__privateGet(this, _i7).loop || __privateGet(this, _t25) || o.key !== "Tab" || !__privateGet(this, _n14).isActiveScope(this)) return;
    const a = __privateMethod(this, _Sr_instances, d_fn2).call(this);
    if (a.length === 0) return;
    const c = a[0], l = a[a.length - 1];
    !o.shiftKey && n.activeElement === l ? (o.preventDefault(), c.focus()) : o.shiftKey && n.activeElement === c && (o.preventDefault(), l.focus());
  };
  __privateGet(this, _r12).push(X(n, "focusin", r, { capture: true }), X(t, "keydown", i));
  const s = new MutationObserver(() => {
    const o = __privateGet(this, _n14).getFocusMemory(this);
    if (o && !t.contains(o)) {
      const a = __privateMethod(this, _Sr_instances, u_fn).call(this), c = __privateMethod(this, _Sr_instances, l_fn).call(this)[0], l = a || c;
      l ? (l.focus(), __privateGet(this, _n14).setFocusMemory(this, l)) : t.focus();
    }
  });
  s.observe(t, { childList: true, subtree: true }), __privateGet(this, _r12).push(() => s.disconnect());
};
d_fn2 = function() {
  return __privateGet(this, _e24) ? Ds(__privateGet(this, _e24), { includeContainer: false, getShadowRoot: true }) : [];
};
u_fn = function() {
  return __privateMethod(this, _Sr_instances, d_fn2).call(this)[0] || null;
};
l_fn = function() {
  return __privateGet(this, _e24) ? Vs(__privateGet(this, _e24), { includeContainer: false, getShadowRoot: true }) : [];
};
let Sr = _Sr;
function au(e, t) {
  W(t, true);
  let n = S(t, "enabled", 3, false), r = S(t, "trapFocus", 3, false), i = S(t, "loop", 3, false), s = S(t, "onCloseAutoFocus", 3, J), o = S(t, "onOpenAutoFocus", 3, J);
  const a = Sr.use({ enabled: O(() => n()), trap: O(() => r()), loop: i(), onCloseAutoFocus: O(() => s()), onOpenAutoFocus: O(() => o()), ref: t.ref });
  var c = R(), l = V(c);
  q(l, () => t.focusScope ?? Q, () => ({ props: a.props })), P(e, c), z();
}
globalThis.bitsTextSelectionLayers ?? (globalThis.bitsTextSelectionLayers = /* @__PURE__ */ new Map());
const _Tr = class _Tr {
  constructor(t) {
    __privateAdd(this, _Tr_instances);
    __publicField(this, "opts");
    __publicField(this, "domContext");
    __privateAdd(this, _t26, J);
    __privateAdd(this, _n15, (t) => {
      const n = this.opts.ref.current, r = t.target;
      !Ot(n) || !Ot(r) || !this.opts.enabled.current || !lu(this) || !Wa(n, r) || (this.opts.onPointerDown.current(t), !t.defaultPrevented && __privateSet(this, _t26, cu(n, this.domContext.getDocument().body)));
    });
    __privateAdd(this, _r13, () => {
      __privateGet(this, _t26).call(this), __privateSet(this, _t26, J);
    });
    this.opts = t, this.domContext = new nr(t.ref);
    let n = J;
    ft(() => this.opts.enabled.current, (r) => (r && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), n(), n = __privateMethod(this, _Tr_instances, e_fn2).call(this)), () => {
      n(), __privateGet(this, _r13).call(this), globalThis.bitsTextSelectionLayers.delete(this);
    }));
  }
  static create(t) {
    return new _Tr(t);
  }
};
_t26 = new WeakMap();
_Tr_instances = new WeakSet();
e_fn2 = function() {
  return ne(X(this.domContext.getDocument(), "pointerdown", __privateGet(this, _n15)), X(this.domContext.getDocument(), "pointerup", pa(__privateGet(this, _r13), this.opts.onPointerUp.current)));
};
_n15 = new WeakMap();
_r13 = new WeakMap();
let Tr = _Tr;
const mi = (e) => e.style.userSelect || e.style.webkitUserSelect;
function cu(e, t) {
  const n = mi(t), r = mi(e);
  return Ke(t, "none"), Ke(e, "text"), () => {
    Ke(t, n), Ke(e, r);
  };
}
function Ke(e, t) {
  e.style.userSelect = t, e.style.webkitUserSelect = t;
}
function lu(e) {
  const t = [...globalThis.bitsTextSelectionLayers];
  if (!t.length) return false;
  const n = t.at(-1);
  return n ? n[0] === e : false;
}
function uu(e, t) {
  W(t, true);
  let n = S(t, "preventOverflowTextSelection", 3, true), r = S(t, "onPointerDown", 3, J), i = S(t, "onPointerUp", 3, J);
  Tr.create({ id: O(() => t.id), onPointerDown: O(() => r()), onPointerUp: O(() => i()), enabled: O(() => t.enabled && n()), ref: t.ref });
  var s = R(), o = V(s);
  q(o, () => t.children ?? Q), P(e, s), z();
}
class du {
  constructor(t) {
    __privateAdd(this, _du_instances);
    __privateAdd(this, _t27);
    __privateAdd(this, _e25, 0);
    __privateAdd(this, _n16, N());
    __privateAdd(this, _r14);
    __privateSet(this, _t27, t);
  }
  get(...t) {
    return __privateSet(this, _e25, __privateGet(this, _e25) + 1), p(__privateGet(this, _n16)) === void 0 && __privateSet(this, _r14, Fe(() => {
      A(__privateGet(this, _n16), __privateGet(this, _t27).call(this, ...t), true);
    })), nt(() => () => {
      __privateMethod(this, _du_instances, i_fn3).call(this);
    }), p(__privateGet(this, _n16));
  }
}
_t27 = new WeakMap();
_e25 = new WeakMap();
_n16 = new WeakMap();
_r14 = new WeakMap();
_du_instances = new WeakSet();
i_fn3 = function() {
  __privateSet(this, _e25, __privateGet(this, _e25) - 1), __privateGet(this, _r14) && __privateGet(this, _e25) <= 0 && (__privateGet(this, _r14).call(this), A(__privateGet(this, _n16), void 0), __privateSet(this, _r14, void 0));
};
const je = new Ya();
let We = N(null), bn = null, me = null, ge = false;
const gi = O(() => {
  for (const e of je.values()) if (e) return true;
  return false;
});
let wn = null;
const fu = new du(() => {
  function e() {
    document.body.setAttribute("style", p(We) ?? ""), document.body.style.removeProperty("--scrollbar-width"), ei && (bn == null ? void 0 : bn()), A(We, null);
  }
  function t() {
    me !== null && (window.clearTimeout(me), me = null);
  }
  function n(i, s) {
    t(), ge = true, wn = Date.now();
    const o = wn, a = () => {
      me = null, wn === o && (Ns(je) ? ge = false : (ge = false, s()));
    }, c = i === null ? 24 : i;
    me = window.setTimeout(a, c);
  }
  function r() {
    p(We) === null && je.size === 0 && !ge && A(We, document.body.getAttribute("style"), true);
  }
  return ft(() => gi.current, () => {
    var _a7, _b3;
    if (!gi.current) return;
    r(), ge = false;
    const i = getComputedStyle(document.documentElement), s = getComputedStyle(document.body), o = ((_a7 = i.scrollbarGutter) == null ? void 0 : _a7.includes("stable")) || ((_b3 = s.scrollbarGutter) == null ? void 0 : _b3.includes("stable")), a = window.innerWidth - document.documentElement.clientWidth, l = { padding: Number.parseInt(s.paddingRight ?? "0", 10) + a, margin: Number.parseInt(s.marginRight ?? "0", 10) };
    a > 0 && !o && (document.body.style.paddingRight = `${l.padding}px`, document.body.style.marginRight = `${l.margin}px`, document.body.style.setProperty("--scrollbar-width", `${a}px`)), document.body.style.overflow = "hidden", ei && (bn = X(document, "touchmove", (u) => {
      u.target === document.documentElement && (u.touches.length > 1 || u.preventDefault());
    }, { passive: false })), Ct(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }), Re(() => () => {
    bn == null ? void 0 : bn();
  }), { get lockMap() {
    return je;
  }, resetBodyStyle: e, scheduleCleanupIfNoNewLocks: n, cancelPendingCleanup: t, ensureInitialStyleCaptured: r };
});
class hu {
  constructor(t, n = () => null) {
    __privateAdd(this, _t28, rr());
    __privateAdd(this, _e26);
    __privateAdd(this, _n17, () => null);
    __privateAdd(this, _r15);
    __publicField(this, "locked");
    __privateSet(this, _e26, t), __privateSet(this, _n17, n), __privateSet(this, _r15, fu.get()), __privateGet(this, _r15) && (__privateGet(this, _r15).cancelPendingCleanup(), __privateGet(this, _r15).ensureInitialStyleCaptured(), __privateGet(this, _r15).lockMap.set(__privateGet(this, _t28), __privateGet(this, _e26) ?? false), this.locked = O(() => __privateGet(this, _r15).lockMap.get(__privateGet(this, _t28)) ?? false, (r) => __privateGet(this, _r15).lockMap.set(__privateGet(this, _t28), r)), Re(() => {
      if (__privateGet(this, _r15).lockMap.delete(__privateGet(this, _t28)), Ns(__privateGet(this, _r15).lockMap)) return;
      const r = __privateGet(this, _n17).call(this);
      __privateGet(this, _r15).scheduleCleanupIfNoNewLocks(r, () => {
        __privateGet(this, _r15).resetBodyStyle();
      });
    }));
  }
}
_t28 = new WeakMap();
_e26 = new WeakMap();
_n17 = new WeakMap();
_r15 = new WeakMap();
function Ns(e) {
  for (const [t, n] of e) if (n) return true;
  return false;
}
function pi(e, t) {
  W(t, true);
  let n = S(t, "preventScroll", 3, true), r = S(t, "restoreScrollDelay", 3, null);
  n() && new hu(n(), () => r()), z();
}
const mu = ["top", "right", "bottom", "left"], Wt = Math.min, lt = Math.max, tn = Math.round, ze = Math.floor, St = (e) => ({ x: e, y: e }), gu = { left: "right", right: "left", bottom: "top", top: "bottom" }, pu = { start: "end", end: "start" };
function _n(e, t, n) {
  return lt(e, Wt(t, n));
}
function Et(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ft(e) {
  return e.split("-")[0];
}
function se(e) {
  return e.split("-")[1];
}
function Ar(e) {
  return e === "x" ? "y" : "x";
}
function Mr(e) {
  return e === "y" ? "height" : "width";
}
const yu = /* @__PURE__ */ new Set(["top", "bottom"]);
function wt(e) {
  return yu.has(Ft(e)) ? "y" : "x";
}
function Cr(e) {
  return Ar(wt(e));
}
function vu(e, t, n) {
  n === void 0 && (n = false);
  const r = se(e), i = Cr(e), s = Mr(i);
  let o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (o = en(o)), [o, en(o)];
}
function bu(e) {
  const t = en(e);
  return [Bn(e), t, Bn(t)];
}
function Bn(e) {
  return e.replace(/start|end/g, (t) => pu[t]);
}
const yi = ["left", "right"], vi = ["right", "left"], wu = ["top", "bottom"], xu = ["bottom", "top"];
function Su(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? vi : yi : t ? yi : vi;
    case "left":
    case "right":
      return t ? wu : xu;
    default:
      return [];
  }
}
function Tu(e, t, n, r) {
  const i = se(e);
  let s = Su(Ft(e), n === "start", r);
  return i && (s = s.map((o) => o + "-" + i), t && (s = s.concat(s.map(Bn)))), s;
}
function en(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gu[t]);
}
function Au(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Ls(e) {
  return typeof e != "number" ? Au(e) : { top: e, right: e, bottom: e, left: e };
}
function nn(e) {
  const { x: t, y: n, width: r, height: i } = e;
  return { width: r, height: i, top: n, left: t, right: t + r, bottom: n + i, x: t, y: n };
}
function bi(e, t, n) {
  let { reference: r, floating: i } = e;
  const s = wt(t), o = Cr(t), a = Mr(o), c = Ft(t), l = s === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[a] / 2 - i[a] / 2;
  let h;
  switch (c) {
    case "top":
      h = { x: u, y: r.y - i.height };
      break;
    case "bottom":
      h = { x: u, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: d };
      break;
    case "left":
      h = { x: r.x - i.width, y: d };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (se(t)) {
    case "start":
      h[o] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      h[o] += f * (n && l ? -1 : 1);
      break;
  }
  return h;
}
const Mu = async (e, t, n) => {
  const { placement: r = "bottom", strategy: i = "absolute", middleware: s = [], platform: o } = n, a = s.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let l = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: u, y: d } = bi(l, r, c), f = r, h = {}, m = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: y, fn: v } = a[g], { x: T, y: x, data: b, reset: w } = await v({ x: u, y: d, initialPlacement: r, placement: f, strategy: i, middlewareData: h, rects: l, platform: o, elements: { reference: e, floating: t } });
    u = T ?? u, d = x ?? d, h = { ...h, [y]: { ...h[y], ...b } }, w && m <= 50 && (m++, typeof w == "object" && (w.placement && (f = w.placement), w.rects && (l = w.rects === true ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : w.rects), { x: u, y: d } = bi(l, f, c)), g = -1);
  }
  return { x: u, y: d, placement: f, strategy: i, middlewareData: h };
};
async function Ce(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: i, platform: s, rects: o, elements: a, strategy: c } = e, { boundary: l = "clippingAncestors", rootBoundary: u = "viewport", elementContext: d = "floating", altBoundary: f = false, padding: h = 0 } = Et(t, e), m = Ls(h), y = a[f ? d === "floating" ? "reference" : "floating" : d], v = nn(await s.getClippingRect({ element: (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)), boundary: l, rootBoundary: u, strategy: c })), T = d === "floating" ? { x: r, y: i, width: o.floating.width, height: o.floating.height } : o.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), b = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || { x: 1, y: 1 } : { x: 1, y: 1 }, w = nn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: a, rect: T, offsetParent: x, strategy: c }) : T);
  return { top: (v.top - w.top + m.top) / b.y, bottom: (w.bottom - v.bottom + m.bottom) / b.y, left: (v.left - w.left + m.left) / b.x, right: (w.right - v.right + m.right) / b.x };
}
const Cu = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: r, placement: i, rects: s, platform: o, elements: a, middlewareData: c } = t, { element: l, padding: u = 0 } = Et(e, t) || {};
  if (l == null) return {};
  const d = Ls(u), f = { x: n, y: r }, h = Cr(i), m = Mr(h), g = await o.getDimensions(l), y = h === "y", v = y ? "top" : "left", T = y ? "bottom" : "right", x = y ? "clientHeight" : "clientWidth", b = s.reference[m] + s.reference[h] - f[h] - s.floating[m], w = f[h] - s.reference[h], k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let C = k ? k[x] : 0;
  (!C || !await (o.isElement == null ? void 0 : o.isElement(k))) && (C = a.floating[x] || s.floating[m]);
  const M = b / 2 - w / 2, D = C / 2 - g[m] / 2 - 1, _ = Wt(d[v], D), B = Wt(d[T], D), j = _, U = C - g[m] - B, I = C / 2 - g[m] / 2 + M, L = _n(j, I, U), G = !c.arrow && se(i) != null && I !== L && s.reference[m] / 2 - (I < j ? _ : B) - g[m] / 2 < 0, K = G ? I < j ? I - j : I - U : 0;
  return { [h]: f[h] + K, data: { [h]: L, centerOffset: I - L - K, ...G && { alignmentOffset: K } }, reset: G };
} }), ku = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n, r;
    const { placement: i, middlewareData: s, rects: o, initialPlacement: a, platform: c, elements: l } = t, { mainAxis: u = true, crossAxis: d = true, fallbackPlacements: f, fallbackStrategy: h = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: g = true, ...y } = Et(e, t);
    if ((n = s.arrow) != null && n.alignmentOffset) return {};
    const v = Ft(i), T = wt(a), x = Ft(a) === a, b = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), w = f || (x || !g ? [en(a)] : bu(a)), k = m !== "none";
    !f && k && w.push(...Tu(a, g, m, b));
    const C = [a, ...w], M = await Ce(t, y), D = [];
    let _ = ((r = s.flip) == null ? void 0 : r.overflows) || [];
    if (u && D.push(M[v]), d) {
      const I = vu(i, o, b);
      D.push(M[I[0]], M[I[1]]);
    }
    if (_ = [..._, { placement: i, overflows: D }], !D.every((I) => I <= 0)) {
      var B, j;
      const I = (((B = s.flip) == null ? void 0 : B.index) || 0) + 1, L = C[I];
      if (L && (!(d === "alignment" ? T !== wt(L) : false) || _.every((H) => wt(H.placement) === T ? H.overflows[0] > 0 : true))) return { data: { index: I, overflows: _ }, reset: { placement: L } };
      let G = (j = _.filter((K) => K.overflows[0] <= 0).sort((K, H) => K.overflows[1] - H.overflows[1])[0]) == null ? void 0 : j.placement;
      if (!G) switch (h) {
        case "bestFit": {
          var U;
          const K = (U = _.filter((H) => {
            if (k) {
              const et = wt(H.placement);
              return et === T || et === "y";
            }
            return true;
          }).map((H) => [H.placement, H.overflows.filter((et) => et > 0).reduce((et, st) => et + st, 0)]).sort((H, et) => H[1] - et[1])[0]) == null ? void 0 : U[0];
          K && (G = K);
          break;
        }
        case "initialPlacement":
          G = a;
          break;
      }
      if (i !== G) return { reset: { placement: G } };
    }
    return {};
  } };
};
function wi(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function xi(e) {
  return mu.some((t) => e[t] >= 0);
}
const Pu = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) {
    const { rects: n } = t, { strategy: r = "referenceHidden", ...i } = Et(e, t);
    switch (r) {
      case "referenceHidden": {
        const s = await Ce(t, { ...i, elementContext: "reference" }), o = wi(s, n.reference);
        return { data: { referenceHiddenOffsets: o, referenceHidden: xi(o) } };
      }
      case "escaped": {
        const s = await Ce(t, { ...i, altBoundary: true }), o = wi(s, n.floating);
        return { data: { escapedOffsets: o, escaped: xi(o) } };
      }
      default:
        return {};
    }
  } };
}, Ks = /* @__PURE__ */ new Set(["left", "top"]);
async function Ou(e, t) {
  const { placement: n, platform: r, elements: i } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Ft(n), a = se(n), c = wt(n) === "y", l = Ks.has(o) ? -1 : 1, u = s && c ? -1 : 1, d = Et(t, e);
  let { mainAxis: f, crossAxis: h, alignmentAxis: m } = typeof d == "number" ? { mainAxis: d, crossAxis: 0, alignmentAxis: null } : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
  return a && typeof m == "number" && (h = a === "end" ? m * -1 : m), c ? { x: h * u, y: f * l } : { x: f * l, y: h * u };
}
const Eu = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    var n, r;
    const { x: i, y: s, placement: o, middlewareData: a } = t, c = await Ou(t, e);
    return o === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : { x: i + c.x, y: s + c.y, data: { ...c, placement: o } };
  } };
}, Fu = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: r, placement: i } = t, { mainAxis: s = true, crossAxis: o = false, limiter: a = { fn: (y) => {
      let { x: v, y: T } = y;
      return { x: v, y: T };
    } }, ...c } = Et(e, t), l = { x: n, y: r }, u = await Ce(t, c), d = wt(Ft(i)), f = Ar(d);
    let h = l[f], m = l[d];
    if (s) {
      const y = f === "y" ? "top" : "left", v = f === "y" ? "bottom" : "right", T = h + u[y], x = h - u[v];
      h = _n(T, h, x);
    }
    if (o) {
      const y = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", T = m + u[y], x = m - u[v];
      m = _n(T, m, x);
    }
    const g = a.fn({ ...t, [f]: h, [d]: m });
    return { ...g, data: { x: g.x - n, y: g.y - r, enabled: { [f]: s, [d]: o } } };
  } };
}, Du = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    const { x: n, y: r, placement: i, rects: s, middlewareData: o } = t, { offset: a = 0, mainAxis: c = true, crossAxis: l = true } = Et(e, t), u = { x: n, y: r }, d = wt(i), f = Ar(d);
    let h = u[f], m = u[d];
    const g = Et(a, t), y = typeof g == "number" ? { mainAxis: g, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...g };
    if (c) {
      const x = f === "y" ? "height" : "width", b = s.reference[f] - s.floating[x] + y.mainAxis, w = s.reference[f] + s.reference[x] - y.mainAxis;
      h < b ? h = b : h > w && (h = w);
    }
    if (l) {
      var v, T;
      const x = f === "y" ? "width" : "height", b = Ks.has(Ft(i)), w = s.reference[d] - s.floating[x] + (b && ((v = o.offset) == null ? void 0 : v[d]) || 0) + (b ? 0 : y.crossAxis), k = s.reference[d] + s.reference[x] + (b ? 0 : ((T = o.offset) == null ? void 0 : T[d]) || 0) - (b ? y.crossAxis : 0);
      m < w ? m = w : m > k && (m = k);
    }
    return { [f]: h, [d]: m };
  } };
}, Vu = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    var n, r;
    const { placement: i, rects: s, platform: o, elements: a } = t, { apply: c = () => {
    }, ...l } = Et(e, t), u = await Ce(t, l), d = Ft(i), f = se(i), h = wt(i) === "y", { width: m, height: g } = s.floating;
    let y, v;
    d === "top" || d === "bottom" ? (y = d, v = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = d, y = f === "end" ? "top" : "bottom");
    const T = g - u.top - u.bottom, x = m - u.left - u.right, b = Wt(g - u[y], T), w = Wt(m - u[v], x), k = !t.middlewareData.shift;
    let C = b, M = w;
    if ((n = t.middlewareData.shift) != null && n.enabled.x && (M = x), (r = t.middlewareData.shift) != null && r.enabled.y && (C = T), k && !f) {
      const _ = lt(u.left, 0), B = lt(u.right, 0), j = lt(u.top, 0), U = lt(u.bottom, 0);
      h ? M = m - 2 * (_ !== 0 || B !== 0 ? _ + B : lt(u.left, u.right)) : C = g - 2 * (j !== 0 || U !== 0 ? j + U : lt(u.top, u.bottom));
    }
    await c({ ...t, availableWidth: M, availableHeight: C });
    const D = await o.getDimensions(a.floating);
    return m !== D.width || g !== D.height ? { reset: { rects: true } } : {};
  } };
};
function gn() {
  return typeof window < "u";
}
function oe(e) {
  return Ws(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function dt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function At(e) {
  var t;
  return (t = (Ws(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ws(e) {
  return gn() ? e instanceof Node || e instanceof dt(e).Node : false;
}
function yt(e) {
  return gn() ? e instanceof Element || e instanceof dt(e).Element : false;
}
function Tt(e) {
  return gn() ? e instanceof HTMLElement || e instanceof dt(e).HTMLElement : false;
}
function Si(e) {
  return !gn() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof dt(e).ShadowRoot;
}
const Ru = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ie(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = vt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Ru.has(i);
}
const Iu = /* @__PURE__ */ new Set(["table", "td", "th"]);
function _u(e) {
  return Iu.has(oe(e));
}
const Bu = [":popover-open", ":modal"];
function pn(e) {
  return Bu.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return false;
    }
  });
}
const Nu = ["transform", "translate", "scale", "rotate", "perspective"], Lu = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ku = ["paint", "layout", "strict", "content"];
function kr(e) {
  const t = Pr(), n = yt(e) ? vt(e) : e;
  return Nu.some((r) => n[r] ? n[r] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !t && (n.filter ? n.filter !== "none" : false) || Lu.some((r) => (n.willChange || "").includes(r)) || Ku.some((r) => (n.contain || "").includes(r));
}
function Wu(e) {
  let t = zt(e);
  for (; Tt(t) && !ie(t); ) {
    if (kr(t)) return t;
    if (pn(t)) return null;
    t = zt(t);
  }
  return null;
}
function Pr() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
const zu = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ie(e) {
  return zu.has(oe(e));
}
function vt(e) {
  return dt(e).getComputedStyle(e);
}
function yn(e) {
  return yt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function zt(e) {
  if (oe(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Si(e) && e.host || At(e);
  return Si(t) ? t.host : t;
}
function zs(e) {
  const t = zt(e);
  return ie(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Tt(t) && Ie(t) ? t : zs(t);
}
function ke(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = true);
  const i = zs(e), s = i === ((r = e.ownerDocument) == null ? void 0 : r.body), o = dt(i);
  if (s) {
    const a = Nn(o);
    return t.concat(o, o.visualViewport || [], Ie(i) ? i : [], a && n ? ke(a) : []);
  }
  return t.concat(i, ke(i, [], n));
}
function Nn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Hs(e) {
  const t = vt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = Tt(e), s = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, a = tn(n) !== s || tn(r) !== o;
  return a && (n = s, r = o), { width: n, height: r, $: a };
}
function Or(e) {
  return yt(e) ? e : e.contextElement;
}
function re(e) {
  const t = Or(e);
  if (!Tt(t)) return St(1);
  const n = t.getBoundingClientRect(), { width: r, height: i, $: s } = Hs(t);
  let o = (s ? tn(n.width) : n.width) / r, a = (s ? tn(n.height) : n.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: o, y: a };
}
const Hu = St(0);
function qs(e) {
  const t = dt(e);
  return !Pr() || !t.visualViewport ? Hu : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function qu(e, t, n) {
  return t === void 0 && (t = false), !n || t && n !== dt(e) ? false : t;
}
function Qt(e, t, n, r) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  const i = e.getBoundingClientRect(), s = Or(e);
  let o = St(1);
  t && (r ? yt(r) && (o = re(r)) : o = re(e));
  const a = qu(s, n, r) ? qs(s) : St(0);
  let c = (i.left + a.x) / o.x, l = (i.top + a.y) / o.y, u = i.width / o.x, d = i.height / o.y;
  if (s) {
    const f = dt(s), h = r && yt(r) ? dt(r) : r;
    let m = f, g = Nn(m);
    for (; g && r && h !== m; ) {
      const y = re(g), v = g.getBoundingClientRect(), T = vt(g), x = v.left + (g.clientLeft + parseFloat(T.paddingLeft)) * y.x, b = v.top + (g.clientTop + parseFloat(T.paddingTop)) * y.y;
      c *= y.x, l *= y.y, u *= y.x, d *= y.y, c += x, l += b, m = dt(g), g = Nn(m);
    }
  }
  return nn({ width: u, height: d, x: c, y: l });
}
function vn(e, t) {
  const n = yn(e).scrollLeft;
  return t ? t.left + n : Qt(At(e)).left + n;
}
function js(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - vn(e, n), i = n.top + t.scrollTop;
  return { x: r, y: i };
}
function ju(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
  const s = i === "fixed", o = At(r), a = t ? pn(t.floating) : false;
  if (r === o || a && s) return n;
  let c = { scrollLeft: 0, scrollTop: 0 }, l = St(1);
  const u = St(0), d = Tt(r);
  if ((d || !d && !s) && ((oe(r) !== "body" || Ie(o)) && (c = yn(r)), Tt(r))) {
    const h = Qt(r);
    l = re(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const f = o && !d && !s ? js(o, c) : St(0);
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x, y: n.y * l.y - c.scrollTop * l.y + u.y + f.y };
}
function Uu(e) {
  return Array.from(e.getClientRects());
}
function Gu(e) {
  const t = At(e), n = yn(e), r = e.ownerDocument.body, i = lt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = lt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + vn(e);
  const a = -n.scrollTop;
  return vt(r).direction === "rtl" && (o += lt(t.clientWidth, r.clientWidth) - i), { width: i, height: s, x: o, y: a };
}
const Ti = 25;
function Yu(e, t) {
  const n = dt(e), r = At(e), i = n.visualViewport;
  let s = r.clientWidth, o = r.clientHeight, a = 0, c = 0;
  if (i) {
    s = i.width, o = i.height;
    const u = Pr();
    (!u || u && t === "fixed") && (a = i.offsetLeft, c = i.offsetTop);
  }
  const l = vn(r);
  if (l <= 0) {
    const u = r.ownerDocument, d = u.body, f = getComputedStyle(d), h = u.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(r.clientWidth - d.clientWidth - h);
    m <= Ti && (s -= m);
  } else l <= Ti && (s += l);
  return { width: s, height: o, x: a, y: c };
}
const Xu = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Zu(e, t) {
  const n = Qt(e, true, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, s = Tt(e) ? re(e) : St(1), o = e.clientWidth * s.x, a = e.clientHeight * s.y, c = i * s.x, l = r * s.y;
  return { width: o, height: a, x: c, y: l };
}
function Ai(e, t, n) {
  let r;
  if (t === "viewport") r = Yu(e, n);
  else if (t === "document") r = Gu(At(e));
  else if (yt(t)) r = Zu(t, n);
  else {
    const i = qs(e);
    r = { x: t.x - i.x, y: t.y - i.y, width: t.width, height: t.height };
  }
  return nn(r);
}
function Us(e, t) {
  const n = zt(e);
  return n === t || !yt(n) || ie(n) ? false : vt(n).position === "fixed" || Us(n, t);
}
function Ju(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ke(e, [], false).filter((a) => yt(a) && oe(a) !== "body"), i = null;
  const s = vt(e).position === "fixed";
  let o = s ? zt(e) : e;
  for (; yt(o) && !ie(o); ) {
    const a = vt(o), c = kr(o);
    !c && a.position === "fixed" && (i = null), (s ? !c && !i : !c && a.position === "static" && !!i && Xu.has(i.position) || Ie(o) && !c && Us(e, o)) ? r = r.filter((u) => u !== o) : i = a, o = zt(o);
  }
  return t.set(e, r), r;
}
function Qu(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const o = [...n === "clippingAncestors" ? pn(t) ? [] : Ju(t, this._c) : [].concat(n), r], a = o[0], c = o.reduce((l, u) => {
    const d = Ai(t, u, i);
    return l.top = lt(d.top, l.top), l.right = Wt(d.right, l.right), l.bottom = Wt(d.bottom, l.bottom), l.left = lt(d.left, l.left), l;
  }, Ai(t, a, i));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}
function $u(e) {
  const { width: t, height: n } = Hs(e);
  return { width: t, height: n };
}
function td(e, t, n) {
  const r = Tt(t), i = At(t), s = n === "fixed", o = Qt(e, true, s, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const c = St(0);
  function l() {
    c.x = vn(i);
  }
  if (r || !r && !s) if ((oe(t) !== "body" || Ie(i)) && (a = yn(t)), r) {
    const h = Qt(t, true, s, t);
    c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
  } else i && l();
  s && !r && i && l();
  const u = i && !r && !s ? js(i, a) : St(0), d = o.left + a.scrollLeft - c.x - u.x, f = o.top + a.scrollTop - c.y - u.y;
  return { x: d, y: f, width: o.width, height: o.height };
}
function xn(e) {
  return vt(e).position === "static";
}
function Mi(e, t) {
  if (!Tt(e) || vt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return At(e) === n && (n = n.ownerDocument.body), n;
}
function Gs(e, t) {
  const n = dt(e);
  if (pn(e)) return n;
  if (!Tt(e)) {
    let i = zt(e);
    for (; i && !ie(i); ) {
      if (yt(i) && !xn(i)) return i;
      i = zt(i);
    }
    return n;
  }
  let r = Mi(e, t);
  for (; r && _u(r) && xn(r); ) r = Mi(r, t);
  return r && ie(r) && xn(r) && !kr(r) ? n : r || Wu(e) || n;
}
const ed = async function(e) {
  const t = this.getOffsetParent || Gs, n = this.getDimensions, r = await n(e.floating);
  return { reference: td(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: r.width, height: r.height } };
};
function nd(e) {
  return vt(e).direction === "rtl";
}
const rd = { convertOffsetParentRelativeRectToViewportRelativeRect: ju, getDocumentElement: At, getClippingRect: Qu, getOffsetParent: Gs, getElementRects: ed, getClientRects: Uu, getDimensions: $u, getScale: re, isElement: yt, isRTL: nd };
function Ys(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function id(e, t) {
  let n = null, r;
  const i = At(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function o(a, c) {
    a === void 0 && (a = false), c === void 0 && (c = 1), s();
    const l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: h } = l;
    if (a || t(), !f || !h) return;
    const m = ze(d), g = ze(i.clientWidth - (u + f)), y = ze(i.clientHeight - (d + h)), v = ze(u), x = { rootMargin: -m + "px " + -g + "px " + -y + "px " + -v + "px", threshold: lt(0, Wt(1, c)) || 1 };
    let b = true;
    function w(k) {
      const C = k[0].intersectionRatio;
      if (C !== c) {
        if (!b) return o();
        C ? o(false, C) : r = setTimeout(() => {
          o(false, 1e-7);
        }, 1e3);
      }
      C === 1 && !Ys(l, e.getBoundingClientRect()) && o(), b = false;
    }
    try {
      n = new IntersectionObserver(w, { ...x, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(w, x);
    }
    n.observe(e);
  }
  return o(true), s;
}
function sd(e, t, n, r) {
  r === void 0 && (r = {});
  const { ancestorScroll: i = true, ancestorResize: s = true, elementResize: o = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: c = false } = r, l = Or(e), u = i || s ? [...l ? ke(l) : [], ...ke(t)] : [];
  u.forEach((v) => {
    i && v.addEventListener("scroll", n, { passive: true }), s && v.addEventListener("resize", n);
  });
  const d = l && a ? id(l, n) : null;
  let f = -1, h = null;
  o && (h = new ResizeObserver((v) => {
    let [T] = v;
    T && T.target === l && h && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), n();
  }), l && !c && h.observe(l), h.observe(t));
  let m, g = c ? Qt(e) : null;
  c && y();
  function y() {
    const v = Qt(e);
    g && !Ys(g, v) && n(), g = v, m = requestAnimationFrame(y);
  }
  return n(), () => {
    var v;
    u.forEach((T) => {
      i && T.removeEventListener("scroll", n), s && T.removeEventListener("resize", n);
    }), d == null ? void 0 : d(), (v = h) == null || v.disconnect(), h = null, c && cancelAnimationFrame(m);
  };
}
const od = Eu, ad = Fu, cd = ku, ld = Vu, ud = Pu, dd = Cu, fd = Du, hd = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = { platform: rd, ...n }, s = { ...i.platform, _c: r };
  return Mu(e, t, { ...i, platform: s });
};
function qt(e) {
  return typeof e == "function" ? e() : e;
}
function Xs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ci(e, t) {
  const n = Xs(e);
  return Math.round(t * n) / n;
}
function ki(e) {
  return { [`--bits-${e}-content-transform-origin`]: "var(--bits-floating-transform-origin)", [`--bits-${e}-content-available-width`]: "var(--bits-floating-available-width)", [`--bits-${e}-content-available-height`]: "var(--bits-floating-available-height)", [`--bits-${e}-anchor-width`]: "var(--bits-floating-anchor-width)", [`--bits-${e}-anchor-height`]: "var(--bits-floating-anchor-height)" };
}
function md(e) {
  const t = e.whileElementsMounted, n = F(() => qt(e.open) ?? true), r = F(() => qt(e.middleware)), i = F(() => qt(e.transform) ?? true), s = F(() => qt(e.placement) ?? "bottom"), o = F(() => qt(e.strategy) ?? "absolute"), a = F(() => qt(e.sideOffset) ?? 0), c = F(() => qt(e.alignOffset) ?? 0), l = e.reference;
  let u = N(0), d = N(0);
  const f = Mt(null);
  let h = N(xt(p(o))), m = N(xt(p(s))), g = N(xt({})), y = N(false);
  const v = F(() => {
    const C = f.current ? Ci(f.current, p(u)) : p(u), M = f.current ? Ci(f.current, p(d)) : p(d);
    return p(i) ? { position: p(h), left: "0", top: "0", transform: `translate(${C}px, ${M}px)`, ...f.current && Xs(f.current) >= 1.5 && { willChange: "transform" } } : { position: p(h), left: `${C}px`, top: `${M}px` };
  });
  let T;
  function x() {
    l.current === null || f.current === null || hd(l.current, f.current, { middleware: p(r), placement: p(s), strategy: p(o) }).then((C) => {
      if (!p(n) && p(u) !== 0 && p(d) !== 0) {
        const M = Math.max(Math.abs(p(a)), Math.abs(p(c)), 15);
        if (C.x <= M && C.y <= M) return;
      }
      A(u, C.x, true), A(d, C.y, true), A(h, C.strategy, true), A(m, C.placement, true), A(g, C.middlewareData, true), A(y, true);
    });
  }
  function b() {
    typeof T == "function" && (T(), T = void 0);
  }
  function w() {
    if (b(), t === void 0) {
      x();
      return;
    }
    l.current === null || f.current === null || (T = t(l.current, f.current, x));
  }
  function k() {
    p(n) || A(y, false);
  }
  return nt(x), nt(w), nt(k), nt(() => b), { floating: f, reference: l, get strategy() {
    return p(h);
  }, get placement() {
    return p(m);
  }, get middlewareData() {
    return p(g);
  }, get isPositioned() {
    return p(y);
  }, get floatingStyles() {
    return p(v);
  }, get update() {
    return x;
  } };
}
const gd = { top: "bottom", right: "left", bottom: "top", left: "right" }, Er = new Ht("Floating.Root"), Pi = new Ht("Floating.Content"), Fr = new Ht("Floating.Root");
class rn {
  constructor() {
    __publicField(this, "anchorNode", Mt(null));
    __publicField(this, "customAnchorNode", Mt(null));
    __publicField(this, "triggerNode", Mt(null));
    nt(() => {
      this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
    });
  }
  static create(t = false) {
    return t ? Fr.set(new rn()) : Er.set(new rn());
  }
}
const _sn = class _sn {
  constructor(t, n) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "contentRef", Mt(null));
    __publicField(this, "wrapperRef", Mt(null));
    __publicField(this, "arrowRef", Mt(null));
    __publicField(this, "contentAttachment", Nt(this.contentRef));
    __publicField(this, "wrapperAttachment", Nt(this.wrapperRef));
    __publicField(this, "arrowAttachment", Nt(this.arrowRef));
    __publicField(this, "arrowId", Mt(rr()));
    __privateAdd(this, _t29, F(() => {
      if (typeof this.opts.style == "string") return ya(this.opts.style);
      if (!this.opts.style) return {};
    }));
    __privateAdd(this, _e27);
    __privateAdd(this, _n18, new sl(() => this.arrowRef.current ?? void 0));
    __privateAdd(this, _r16, F(() => {
      var _a7;
      return ((_a7 = __privateGet(this, _n18)) == null ? void 0 : _a7.width) ?? 0;
    }));
    __privateAdd(this, _i8, F(() => {
      var _a7;
      return ((_a7 = __privateGet(this, _n18)) == null ? void 0 : _a7.height) ?? 0;
    }));
    __privateAdd(this, _s5, F(() => {
      var _a7;
      return ((_a7 = this.opts.side) == null ? void 0 : _a7.current) + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : "");
    }));
    __privateAdd(this, _a6, F(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]));
    __privateAdd(this, _o5, F(() => p(__privateGet(this, _a6)).length > 0));
    __privateAdd(this, _c4, F(() => ({ padding: this.opts.collisionPadding.current, boundary: p(__privateGet(this, _a6)).filter(za), altBoundary: this.hasExplicitBoundaries })));
    __privateAdd(this, _d2, N(void 0));
    __privateAdd(this, _u3, N(void 0));
    __privateAdd(this, _l3, N(void 0));
    __privateAdd(this, _h3, N(void 0));
    __privateAdd(this, _m3, F(() => [od({ mainAxis: this.opts.sideOffset.current + p(__privateGet(this, _i8)), alignmentAxis: this.opts.alignOffset.current }), this.opts.avoidCollisions.current && ad({ mainAxis: true, crossAxis: false, limiter: this.opts.sticky.current === "partial" ? fd() : void 0, ...this.detectOverflowOptions }), this.opts.avoidCollisions.current && cd({ ...this.detectOverflowOptions }), ld({ ...this.detectOverflowOptions, apply: ({ rects: t, availableWidth: n, availableHeight: r }) => {
      const { width: i, height: s } = t.reference;
      A(__privateGet(this, _d2), n, true), A(__privateGet(this, _u3), r, true), A(__privateGet(this, _l3), i, true), A(__privateGet(this, _h3), s, true);
    } }), this.arrowRef.current && dd({ element: this.arrowRef.current, padding: this.opts.arrowPadding.current }), pd({ arrowWidth: p(__privateGet(this, _r16)), arrowHeight: p(__privateGet(this, _i8)) }), this.opts.hideWhenDetached.current && ud({ strategy: "referenceHidden", ...this.detectOverflowOptions })].filter(Boolean)));
    __publicField(this, "floating");
    __privateAdd(this, _g2, F(() => yd(this.floating.placement)));
    __privateAdd(this, _p2, F(() => vd(this.floating.placement)));
    __privateAdd(this, _f3, F(() => {
      var _a7;
      return ((_a7 = this.floating.middlewareData.arrow) == null ? void 0 : _a7.x) ?? 0;
    }));
    __privateAdd(this, _y, F(() => {
      var _a7;
      return ((_a7 = this.floating.middlewareData.arrow) == null ? void 0 : _a7.y) ?? 0;
    }));
    __privateAdd(this, _v2, F(() => {
      var _a7;
      return ((_a7 = this.floating.middlewareData.arrow) == null ? void 0 : _a7.centerOffset) !== 0;
    }));
    __privateAdd(this, _b2, N());
    __privateAdd(this, _w, F(() => gd[this.placedSide]));
    __privateAdd(this, _x, F(() => {
      var _a7, _b3, _c5;
      return { id: this.opts.wrapperId.current, "data-bits-floating-content-wrapper": "", style: { ...this.floating.floatingStyles, transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: this.contentZIndex, "--bits-floating-transform-origin": `${(_a7 = this.floating.middlewareData.transformOrigin) == null ? void 0 : _a7.x} ${(_b3 = this.floating.middlewareData.transformOrigin) == null ? void 0 : _b3.y}`, "--bits-floating-available-width": `${p(__privateGet(this, _d2))}px`, "--bits-floating-available-height": `${p(__privateGet(this, _u3))}px`, "--bits-floating-anchor-width": `${p(__privateGet(this, _l3))}px`, "--bits-floating-anchor-height": `${p(__privateGet(this, _h3))}px`, ...((_c5 = this.floating.middlewareData.hide) == null ? void 0 : _c5.referenceHidden) && { visibility: "hidden", "pointer-events": "none" }, ...p(__privateGet(this, _t29)) }, dir: this.opts.dir.current, ...this.wrapperAttachment };
    }));
    __privateAdd(this, _S, F(() => ({ "data-side": this.placedSide, "data-align": this.placedAlign, style: va({ ...p(__privateGet(this, _t29)) }), ...this.contentAttachment })));
    __privateAdd(this, _T, F(() => ({ position: "absolute", left: this.arrowX ? `${this.arrowX}px` : void 0, top: this.arrowY ? `${this.arrowY}px` : void 0, [this.arrowBaseSide]: 0, "transform-origin": { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[this.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[this.placedSide], visibility: this.cannotCenterArrow ? "hidden" : void 0 })));
    this.opts = t, this.root = n, t.customAnchor && (this.root.customAnchorNode.current = t.customAnchor.current), ft(() => t.customAnchor.current, (r) => {
      this.root.customAnchorNode.current = r;
    }), this.floating = md({ strategy: () => this.opts.strategy.current, placement: () => p(__privateGet(this, _s5)), middleware: () => this.middleware, reference: this.root.anchorNode, whileElementsMounted: (...r) => {
      var _a7;
      return sd(...r, { animationFrame: ((_a7 = __privateGet(this, _e27)) == null ? void 0 : _a7.current) === "always" });
    }, open: () => this.opts.enabled.current, sideOffset: () => this.opts.sideOffset.current, alignOffset: () => this.opts.alignOffset.current }), nt(() => {
      var _a7;
      this.floating.isPositioned && ((_a7 = this.opts.onPlaced) == null ? void 0 : _a7.current());
    }), ft(() => this.contentRef.current, (r) => {
      if (!r) return;
      const i = cs(r);
      this.contentZIndex = i.getComputedStyle(r).zIndex;
    }), nt(() => {
      this.floating.floating.current = this.wrapperRef.current;
    });
  }
  static create(t, n = false) {
    return n ? Pi.set(new _sn(t, Fr.get())) : Pi.set(new _sn(t, Er.get()));
  }
  get hasExplicitBoundaries() {
    return p(__privateGet(this, _o5));
  }
  set hasExplicitBoundaries(t) {
    A(__privateGet(this, _o5), t);
  }
  get detectOverflowOptions() {
    return p(__privateGet(this, _c4));
  }
  set detectOverflowOptions(t) {
    A(__privateGet(this, _c4), t);
  }
  get middleware() {
    return p(__privateGet(this, _m3));
  }
  set middleware(t) {
    A(__privateGet(this, _m3), t);
  }
  get placedSide() {
    return p(__privateGet(this, _g2));
  }
  set placedSide(t) {
    A(__privateGet(this, _g2), t);
  }
  get placedAlign() {
    return p(__privateGet(this, _p2));
  }
  set placedAlign(t) {
    A(__privateGet(this, _p2), t);
  }
  get arrowX() {
    return p(__privateGet(this, _f3));
  }
  set arrowX(t) {
    A(__privateGet(this, _f3), t);
  }
  get arrowY() {
    return p(__privateGet(this, _y));
  }
  set arrowY(t) {
    A(__privateGet(this, _y), t);
  }
  get cannotCenterArrow() {
    return p(__privateGet(this, _v2));
  }
  set cannotCenterArrow(t) {
    A(__privateGet(this, _v2), t);
  }
  get contentZIndex() {
    return p(__privateGet(this, _b2));
  }
  set contentZIndex(t) {
    A(__privateGet(this, _b2), t, true);
  }
  get arrowBaseSide() {
    return p(__privateGet(this, _w));
  }
  set arrowBaseSide(t) {
    A(__privateGet(this, _w), t);
  }
  get wrapperProps() {
    return p(__privateGet(this, _x));
  }
  set wrapperProps(t) {
    A(__privateGet(this, _x), t);
  }
  get props() {
    return p(__privateGet(this, _S));
  }
  set props(t) {
    A(__privateGet(this, _S), t);
  }
  get arrowStyle() {
    return p(__privateGet(this, _T));
  }
  set arrowStyle(t) {
    A(__privateGet(this, _T), t);
  }
};
_t29 = new WeakMap();
_e27 = new WeakMap();
_n18 = new WeakMap();
_r16 = new WeakMap();
_i8 = new WeakMap();
_s5 = new WeakMap();
_a6 = new WeakMap();
_o5 = new WeakMap();
_c4 = new WeakMap();
_d2 = new WeakMap();
_u3 = new WeakMap();
_l3 = new WeakMap();
_h3 = new WeakMap();
_m3 = new WeakMap();
_g2 = new WeakMap();
_p2 = new WeakMap();
_f3 = new WeakMap();
_y = new WeakMap();
_v2 = new WeakMap();
_b2 = new WeakMap();
_w = new WeakMap();
_x = new WeakMap();
_S = new WeakMap();
_T = new WeakMap();
let sn = _sn;
class on {
  constructor(t, n) {
    __publicField(this, "opts");
    __publicField(this, "root");
    this.opts = t, this.root = n, t.virtualEl && t.virtualEl.current ? n.triggerNode = Qi(t.virtualEl.current) : n.triggerNode = t.ref;
  }
  static create(t, n = false) {
    return n ? new on(t, Fr.get()) : new on(t, Er.get());
  }
}
function pd(e) {
  return { name: "transformOrigin", options: e, fn(t) {
    var _a7, _b3, _c5;
    const { placement: n, rects: r, middlewareData: i } = t, o = ((_a7 = i.arrow) == null ? void 0 : _a7.centerOffset) !== 0, a = o ? 0 : e.arrowWidth, c = o ? 0 : e.arrowHeight, [l, u] = Dr(n), d = { start: "0%", center: "50%", end: "100%" }[u], f = (((_b3 = i.arrow) == null ? void 0 : _b3.x) ?? 0) + a / 2, h = (((_c5 = i.arrow) == null ? void 0 : _c5.y) ?? 0) + c / 2;
    let m = "", g = "";
    return l === "bottom" ? (m = o ? d : `${f}px`, g = `${-c}px`) : l === "top" ? (m = o ? d : `${f}px`, g = `${r.floating.height + c}px`) : l === "right" ? (m = `${-c}px`, g = o ? d : `${h}px`) : l === "left" && (m = `${r.floating.width + c}px`, g = o ? d : `${h}px`), { data: { x: m, y: g } };
  } };
}
function Dr(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function yd(e) {
  return Dr(e)[0];
}
function vd(e) {
  return Dr(e)[1];
}
function bd(e, t) {
  W(t, true);
  let n = S(t, "tooltip", 3, false);
  rn.create(n());
  var r = R(), i = V(r);
  q(i, () => t.children ?? Q), P(e, r), z();
}
function wd(e, t) {
  W(t, true);
  let n = S(t, "tooltip", 3, false);
  on.create({ id: O(() => t.id), virtualEl: O(() => t.virtualEl), ref: t.ref }, n());
  var r = R(), i = V(r);
  q(i, () => t.children ?? Q), P(e, r), z();
}
function xd(e, t) {
  W(t, true);
  let n = S(t, "side", 3, "bottom"), r = S(t, "sideOffset", 3, 0), i = S(t, "align", 3, "center"), s = S(t, "alignOffset", 3, 0), o = S(t, "arrowPadding", 3, 0), a = S(t, "avoidCollisions", 3, true), c = S(t, "collisionBoundary", 19, () => []), l = S(t, "collisionPadding", 3, 0), u = S(t, "hideWhenDetached", 3, false), d = S(t, "onPlaced", 3, () => {
  }), f = S(t, "sticky", 3, "partial"), h = S(t, "updatePositionStrategy", 3, "optimized"), m = S(t, "strategy", 3, "fixed"), g = S(t, "dir", 3, "ltr"), y = S(t, "style", 19, () => ({})), v = S(t, "wrapperId", 19, rr), T = S(t, "customAnchor", 3, null), x = S(t, "tooltip", 3, false);
  const b = sn.create({ side: O(() => n()), sideOffset: O(() => r()), align: O(() => i()), alignOffset: O(() => s()), id: O(() => t.id), arrowPadding: O(() => o()), avoidCollisions: O(() => a()), collisionBoundary: O(() => c()), collisionPadding: O(() => l()), hideWhenDetached: O(() => u()), onPlaced: O(() => d()), sticky: O(() => f()), updatePositionStrategy: O(() => h()), strategy: O(() => m()), dir: O(() => g()), style: O(() => y()), enabled: O(() => t.enabled), wrapperId: O(() => v()), customAnchor: O(() => T()) }, x()), w = F(() => kt(b.wrapperProps, { style: { pointerEvents: "auto" } }));
  var k = R(), C = V(k);
  q(C, () => t.content ?? Q, () => ({ props: b.props, wrapperProps: p(w) })), P(e, k), z();
}
function Sd(e, t) {
  W(t, true), Ji(() => {
    var _a7;
    (_a7 = t.onPlaced) == null ? void 0 : _a7.call(t);
  });
  var n = R(), r = V(n);
  q(r, () => t.content ?? Q, () => ({ props: {}, wrapperProps: {} })), P(e, n), z();
}
function Td(e, t) {
  let n = S(t, "isStatic", 3, false), r = ct(t, ["$$slots", "$$events", "$$legacy", "content", "isStatic", "onPlaced"]);
  var i = R(), s = V(i);
  {
    var o = (c) => {
      Sd(c, { get content() {
        return t.content;
      }, get onPlaced() {
        return t.onPlaced;
      } });
    }, a = (c) => {
      xd(c, ht({ get content() {
        return t.content;
      }, get onPlaced() {
        return t.onPlaced;
      } }, () => r));
    };
    Z(s, (c) => {
      n() ? c(o) : c(a, false);
    });
  }
  P(e, i);
}
var Ad = $("<!> <!>", 1);
function Zs(e, t) {
  W(t, true);
  let n = S(t, "interactOutsideBehavior", 3, "close"), r = S(t, "trapFocus", 3, true), i = S(t, "isValidEvent", 3, () => false), s = S(t, "customAnchor", 3, null), o = S(t, "isStatic", 3, false), a = S(t, "tooltip", 3, false), c = S(t, "contentPointerEvents", 3, "auto"), l = ct(t, ["$$slots", "$$events", "$$legacy", "popper", "onEscapeKeydown", "escapeKeydownBehavior", "preventOverflowTextSelection", "id", "onPointerDown", "onPointerUp", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "strategy", "dir", "preventScroll", "wrapperId", "style", "onPlaced", "onInteractOutside", "onCloseAutoFocus", "onOpenAutoFocus", "onFocusOutside", "interactOutsideBehavior", "loop", "trapFocus", "isValidEvent", "customAnchor", "isStatic", "enabled", "ref", "tooltip", "contentPointerEvents"]);
  Td(e, { get isStatic() {
    return o();
  }, get id() {
    return t.id;
  }, get side() {
    return t.side;
  }, get sideOffset() {
    return t.sideOffset;
  }, get align() {
    return t.align;
  }, get alignOffset() {
    return t.alignOffset;
  }, get arrowPadding() {
    return t.arrowPadding;
  }, get avoidCollisions() {
    return t.avoidCollisions;
  }, get collisionBoundary() {
    return t.collisionBoundary;
  }, get collisionPadding() {
    return t.collisionPadding;
  }, get sticky() {
    return t.sticky;
  }, get hideWhenDetached() {
    return t.hideWhenDetached;
  }, get updatePositionStrategy() {
    return t.updatePositionStrategy;
  }, get strategy() {
    return t.strategy;
  }, get dir() {
    return t.dir;
  }, get wrapperId() {
    return t.wrapperId;
  }, get style() {
    return t.style;
  }, get onPlaced() {
    return t.onPlaced;
  }, get customAnchor() {
    return s();
  }, get enabled() {
    return t.enabled;
  }, get tooltip() {
    return a();
  }, content: (d, f) => {
    let h = () => f == null ? void 0 : f().props, m = () => f == null ? void 0 : f().wrapperProps;
    var g = Ad(), y = V(g);
    {
      var v = (b) => {
        pi(b, { get preventScroll() {
          return t.preventScroll;
        } });
      }, T = (b) => {
        var w = R(), k = V(w);
        {
          var C = (M) => {
            pi(M, { get preventScroll() {
              return t.preventScroll;
            } });
          };
          Z(k, (M) => {
            t.forceMount || M(C);
          }, true);
        }
        P(b, w);
      };
      Z(y, (b) => {
        t.forceMount && t.enabled ? b(v) : b(T, false);
      });
    }
    var x = at(y, 2);
    au(x, { get onOpenAutoFocus() {
      return t.onOpenAutoFocus;
    }, get onCloseAutoFocus() {
      return t.onCloseAutoFocus;
    }, get loop() {
      return t.loop;
    }, get enabled() {
      return t.enabled;
    }, get trapFocus() {
      return r();
    }, get forceMount() {
      return t.forceMount;
    }, get ref() {
      return t.ref;
    }, focusScope: (w, k) => {
      let C = () => k == null ? void 0 : k().props;
      ou(w, { get onEscapeKeydown() {
        return t.onEscapeKeydown;
      }, get escapeKeydownBehavior() {
        return t.escapeKeydownBehavior;
      }, get enabled() {
        return t.enabled;
      }, get ref() {
        return t.ref;
      }, children: (M, D) => {
        iu(M, { get id() {
          return t.id;
        }, get onInteractOutside() {
          return t.onInteractOutside;
        }, get onFocusOutside() {
          return t.onFocusOutside;
        }, get interactOutsideBehavior() {
          return n();
        }, get isValidEvent() {
          return i();
        }, get enabled() {
          return t.enabled;
        }, get ref() {
          return t.ref;
        }, children: (B, j) => {
          let U = () => j == null ? void 0 : j().props;
          uu(B, { get id() {
            return t.id;
          }, get preventOverflowTextSelection() {
            return t.preventOverflowTextSelection;
          }, get onPointerDown() {
            return t.onPointerDown;
          }, get onPointerUp() {
            return t.onPointerUp;
          }, get enabled() {
            return t.enabled;
          }, get ref() {
            return t.ref;
          }, children: (I, L) => {
            var G = R(), K = V(G);
            {
              let H = F(() => ({ props: kt(l, h(), U(), C(), { style: { pointerEvents: c() } }), wrapperProps: m() }));
              q(K, () => t.popper ?? Q, () => p(H));
            }
            P(I, G);
          }, $$slots: { default: true } });
        }, $$slots: { default: true } });
      }, $$slots: { default: true } });
    }, $$slots: { focusScope: true } }), P(d, g);
  }, $$slots: { content: true } }), z();
}
function Md(e, t) {
  let n = S(t, "interactOutsideBehavior", 3, "close"), r = S(t, "trapFocus", 3, true), i = S(t, "isValidEvent", 3, () => false), s = S(t, "customAnchor", 3, null), o = S(t, "isStatic", 3, false), a = ct(t, ["$$slots", "$$events", "$$legacy", "popper", "open", "onEscapeKeydown", "escapeKeydownBehavior", "preventOverflowTextSelection", "id", "onPointerDown", "onPointerUp", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "strategy", "dir", "preventScroll", "wrapperId", "style", "onPlaced", "onInteractOutside", "onCloseAutoFocus", "onOpenAutoFocus", "onFocusOutside", "interactOutsideBehavior", "loop", "trapFocus", "isValidEvent", "customAnchor", "isStatic", "ref", "shouldRender"]);
  var c = R(), l = V(c);
  {
    var u = (d) => {
      Zs(d, ht({ get popper() {
        return t.popper;
      }, get onEscapeKeydown() {
        return t.onEscapeKeydown;
      }, get escapeKeydownBehavior() {
        return t.escapeKeydownBehavior;
      }, get preventOverflowTextSelection() {
        return t.preventOverflowTextSelection;
      }, get id() {
        return t.id;
      }, get onPointerDown() {
        return t.onPointerDown;
      }, get onPointerUp() {
        return t.onPointerUp;
      }, get side() {
        return t.side;
      }, get sideOffset() {
        return t.sideOffset;
      }, get align() {
        return t.align;
      }, get alignOffset() {
        return t.alignOffset;
      }, get arrowPadding() {
        return t.arrowPadding;
      }, get avoidCollisions() {
        return t.avoidCollisions;
      }, get collisionBoundary() {
        return t.collisionBoundary;
      }, get collisionPadding() {
        return t.collisionPadding;
      }, get sticky() {
        return t.sticky;
      }, get hideWhenDetached() {
        return t.hideWhenDetached;
      }, get updatePositionStrategy() {
        return t.updatePositionStrategy;
      }, get strategy() {
        return t.strategy;
      }, get dir() {
        return t.dir;
      }, get preventScroll() {
        return t.preventScroll;
      }, get wrapperId() {
        return t.wrapperId;
      }, get style() {
        return t.style;
      }, get onPlaced() {
        return t.onPlaced;
      }, get customAnchor() {
        return s();
      }, get isStatic() {
        return o();
      }, get enabled() {
        return t.open;
      }, get onInteractOutside() {
        return t.onInteractOutside;
      }, get onCloseAutoFocus() {
        return t.onCloseAutoFocus;
      }, get onOpenAutoFocus() {
        return t.onOpenAutoFocus;
      }, get interactOutsideBehavior() {
        return n();
      }, get loop() {
        return t.loop;
      }, get trapFocus() {
        return r();
      }, get isValidEvent() {
        return i();
      }, get onFocusOutside() {
        return t.onFocusOutside;
      }, forceMount: false, get ref() {
        return t.ref;
      } }, () => a));
    };
    Z(l, (d) => {
      t.shouldRender && d(u);
    });
  }
  P(e, c);
}
function Cd(e, t) {
  let n = S(t, "interactOutsideBehavior", 3, "close"), r = S(t, "trapFocus", 3, true), i = S(t, "isValidEvent", 3, () => false), s = S(t, "customAnchor", 3, null), o = S(t, "isStatic", 3, false), a = ct(t, ["$$slots", "$$events", "$$legacy", "popper", "onEscapeKeydown", "escapeKeydownBehavior", "preventOverflowTextSelection", "id", "onPointerDown", "onPointerUp", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "strategy", "dir", "preventScroll", "wrapperId", "style", "onPlaced", "onInteractOutside", "onCloseAutoFocus", "onOpenAutoFocus", "onFocusOutside", "interactOutsideBehavior", "loop", "trapFocus", "isValidEvent", "customAnchor", "isStatic", "enabled"]);
  Zs(e, ht({ get popper() {
    return t.popper;
  }, get onEscapeKeydown() {
    return t.onEscapeKeydown;
  }, get escapeKeydownBehavior() {
    return t.escapeKeydownBehavior;
  }, get preventOverflowTextSelection() {
    return t.preventOverflowTextSelection;
  }, get id() {
    return t.id;
  }, get onPointerDown() {
    return t.onPointerDown;
  }, get onPointerUp() {
    return t.onPointerUp;
  }, get side() {
    return t.side;
  }, get sideOffset() {
    return t.sideOffset;
  }, get align() {
    return t.align;
  }, get alignOffset() {
    return t.alignOffset;
  }, get arrowPadding() {
    return t.arrowPadding;
  }, get avoidCollisions() {
    return t.avoidCollisions;
  }, get collisionBoundary() {
    return t.collisionBoundary;
  }, get collisionPadding() {
    return t.collisionPadding;
  }, get sticky() {
    return t.sticky;
  }, get hideWhenDetached() {
    return t.hideWhenDetached;
  }, get updatePositionStrategy() {
    return t.updatePositionStrategy;
  }, get strategy() {
    return t.strategy;
  }, get dir() {
    return t.dir;
  }, get preventScroll() {
    return t.preventScroll;
  }, get wrapperId() {
    return t.wrapperId;
  }, get style() {
    return t.style;
  }, get onPlaced() {
    return t.onPlaced;
  }, get customAnchor() {
    return s();
  }, get isStatic() {
    return o();
  }, get enabled() {
    return t.enabled;
  }, get onInteractOutside() {
    return t.onInteractOutside;
  }, get onCloseAutoFocus() {
    return t.onCloseAutoFocus;
  }, get onOpenAutoFocus() {
    return t.onOpenAutoFocus;
  }, get interactOutsideBehavior() {
    return n();
  }, get loop() {
    return t.loop;
  }, get trapFocus() {
    return r();
  }, get isValidEvent() {
    return i();
  }, get onFocusOutside() {
    return t.onFocusOutside;
  } }, () => a, { forceMount: true }));
}
var kd = $("<div><!></div>");
function Pd(e, t) {
  const n = dn();
  W(t, true);
  let r = S(t, "ref", 15, null), i = S(t, "onSelect", 3, J), s = S(t, "id", 19, () => hn(n)), o = S(t, "disabled", 3, false), a = S(t, "closeOnSelect", 3, true), c = ct(t, ["$$slots", "$$events", "$$legacy", "children", "child", "ref", "value", "onSelect", "id", "disabled", "closeOnSelect"]);
  const l = yr.create({ value: O(() => t.value), id: O(() => s()), disabled: O(() => o()), onSelect: O(() => u), ref: O(() => r(), (y) => r(y)), closeOnSelect: O(() => a()) });
  function u(y) {
    i()(y), !y.defaultPrevented && l.selectValue();
  }
  const d = F(() => kt(c, l.props));
  var f = R(), h = V(f);
  {
    var m = (y) => {
      var v = R(), T = V(v);
      q(T, () => t.child, () => ({ props: p(d), checked: l.isChecked })), P(y, v);
    }, g = (y) => {
      var v = kd();
      jt(v, () => ({ ...p(d) }));
      var T = rt(v);
      q(T, () => t.children ?? Q, () => ({ checked: l.isChecked })), it(v), P(y, v);
    };
    Z(h, (y) => {
      t.child ? y(m) : y(g, false);
    });
  }
  P(e, f), z();
}
var Od = $("<div><!></div>");
function Ed(e, t) {
  const n = dn();
  W(t, true);
  let r = S(t, "id", 19, () => hn(n)), i = S(t, "ref", 15, null), s = S(t, "value", 15, ""), o = S(t, "onValueChange", 3, J), a = ct(t, ["$$slots", "$$events", "$$legacy", "id", "children", "child", "ref", "value", "onValueChange"]);
  const c = pr.create({ value: O(() => s(), (m) => {
    s(m), o()(m);
  }), ref: O(() => i(), (m) => i(m)), id: O(() => r()) }), l = F(() => kt(a, c.props));
  var u = R(), d = V(u);
  {
    var f = (m) => {
      var g = R(), y = V(g);
      q(y, () => t.child, () => ({ props: p(l) })), P(m, g);
    }, h = (m) => {
      var g = Od();
      jt(g, () => ({ ...p(l) }));
      var y = rt(g);
      q(y, () => t.children ?? Q), it(g), P(m, g);
    };
    Z(d, (m) => {
      t.child ? m(f) : m(h, false);
    });
  }
  P(e, u), z();
}
function Fd(e, t) {
  W(t, true);
  let n = S(t, "open", 15, false), r = S(t, "dir", 3, "ltr"), i = S(t, "onOpenChange", 3, J), s = S(t, "onOpenChangeComplete", 3, J), o = S(t, "_internal_variant", 3, "dropdown-menu");
  const a = fr.create({ variant: O(() => o()), dir: O(() => r()), onClose: () => {
    n(false), i()(false);
  } });
  hr.create({ open: O(() => n(), (c) => {
    n(c), i()(c);
  }), onOpenChangeComplete: O(() => s()) }, a), bd(e, { children: (c, l) => {
    var u = R(), d = V(u);
    q(d, () => t.children ?? Q), P(c, u);
  }, $$slots: { default: true } }), z();
}
var Dd = $("<div><div><!></div></div>"), Vd = $("<div><div><!></div></div>");
function Rd(e, t) {
  const n = dn();
  W(t, true);
  let r = S(t, "id", 19, () => hn(n)), i = S(t, "ref", 15, null), s = S(t, "loop", 3, true), o = S(t, "onInteractOutside", 3, J), a = S(t, "onEscapeKeydown", 3, J), c = S(t, "onCloseAutoFocus", 3, J), l = S(t, "forceMount", 3, false), u = S(t, "trapFocus", 3, false), d = ct(t, ["$$slots", "$$events", "$$legacy", "id", "child", "children", "ref", "loop", "onInteractOutside", "onEscapeKeydown", "onCloseAutoFocus", "forceMount", "trapFocus", "style"]);
  const f = mr.create({ id: O(() => r()), loop: O(() => s()), ref: O(() => i(), (b) => i(b)), onCloseAutoFocus: O(() => c()) }), h = F(() => kt(d, f.props));
  function m(b) {
    if (f.handleInteractOutside(b), !b.defaultPrevented && (o()(b), !b.defaultPrevented)) {
      if (b.target && b.target instanceof Element) {
        const w = `[${f.parentMenu.root.getBitsAttr("sub-content")}]`;
        if (b.target.closest(w)) return;
      }
      f.parentMenu.onClose();
    }
  }
  function g(b) {
    a()(b), !b.defaultPrevented && f.parentMenu.onClose();
  }
  var y = R(), v = V(y);
  {
    var T = (b) => {
      Cd(b, ht(() => p(h), () => f.popperProps, { get ref() {
        return f.opts.ref;
      }, get enabled() {
        return f.parentMenu.opts.open.current;
      }, onInteractOutside: m, onEscapeKeydown: g, get trapFocus() {
        return u();
      }, get loop() {
        return s();
      }, forceMount: true, get id() {
        return r();
      }, get shouldRender() {
        return f.shouldRender;
      }, popper: (k, C) => {
        let M = () => C == null ? void 0 : C().props, D = () => C == null ? void 0 : C().wrapperProps;
        const _ = F(() => kt(M(), { style: ki("dropdown-menu") }, { style: t.style }));
        var B = R(), j = V(B);
        {
          var U = (L) => {
            var G = R(), K = V(G);
            {
              let H = F(() => ({ props: p(_), wrapperProps: D(), ...f.snippetProps }));
              q(K, () => t.child, () => p(H));
            }
            P(L, G);
          }, I = (L) => {
            var G = Dd();
            jt(G, () => ({ ...D() }));
            var K = rt(G);
            jt(K, () => ({ ...p(_) }));
            var H = rt(K);
            q(H, () => t.children ?? Q), it(K), it(G), P(L, G);
          };
          Z(j, (L) => {
            t.child ? L(U) : L(I, false);
          });
        }
        P(k, B);
      }, $$slots: { popper: true } }));
    }, x = (b) => {
      var w = R(), k = V(w);
      {
        var C = (M) => {
          Md(M, ht(() => p(h), () => f.popperProps, { get ref() {
            return f.opts.ref;
          }, get open() {
            return f.parentMenu.opts.open.current;
          }, onInteractOutside: m, onEscapeKeydown: g, get trapFocus() {
            return u();
          }, get loop() {
            return s();
          }, forceMount: false, get id() {
            return r();
          }, get shouldRender() {
            return f.shouldRender;
          }, popper: (_, B) => {
            let j = () => B == null ? void 0 : B().props, U = () => B == null ? void 0 : B().wrapperProps;
            const I = F(() => kt(j(), { style: ki("dropdown-menu") }, { style: t.style }));
            var L = R(), G = V(L);
            {
              var K = (et) => {
                var st = R(), Vt = V(st);
                {
                  let te = F(() => ({ props: p(I), wrapperProps: U(), ...f.snippetProps }));
                  q(Vt, () => t.child, () => p(te));
                }
                P(et, st);
              }, H = (et) => {
                var st = Vd();
                jt(st, () => ({ ...U() }));
                var Vt = rt(st);
                jt(Vt, () => ({ ...p(I) }));
                var te = rt(Vt);
                q(te, () => t.children ?? Q), it(Vt), it(st), P(et, st);
              };
              Z(G, (et) => {
                t.child ? et(K) : et(H, false);
              });
            }
            P(_, L);
          }, $$slots: { popper: true } }));
        };
        Z(k, (M) => {
          l() || M(C);
        }, true);
      }
      P(b, w);
    };
    Z(v, (b) => {
      l() ? b(T) : b(x, false);
    });
  }
  P(e, y), z();
}
var Id = $("<button><!></button>");
function _d(e, t) {
  const n = dn();
  W(t, true);
  let r = S(t, "id", 19, () => hn(n)), i = S(t, "ref", 15, null), s = S(t, "disabled", 3, false), o = S(t, "type", 3, "button"), a = ct(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "child", "children", "disabled", "type"]);
  const c = vr.create({ id: O(() => r()), disabled: O(() => s() ?? false), ref: O(() => i(), (u) => i(u)) }), l = F(() => kt(a, c.props, { type: o() }));
  wd(e, { get id() {
    return r();
  }, get ref() {
    return c.opts.ref;
  }, children: (u, d) => {
    var f = R(), h = V(f);
    {
      var m = (y) => {
        var v = R(), T = V(v);
        q(T, () => t.child, () => ({ props: p(l) })), P(y, v);
      }, g = (y) => {
        var v = Id();
        jt(v, () => ({ ...p(l) }));
        var T = rt(v);
        q(T, () => t.children ?? Q), it(v), P(y, v);
      };
      Z(h, (y) => {
        t.child ? y(m) : y(g, false);
      });
    }
    P(u, f);
  }, $$slots: { default: true } }), z();
}
function Bd(e, t) {
  W(t, true), S(t, "open", 11, false);
  let n = ct(t, ["$$slots", "$$events", "$$legacy", "open", "children"]);
  var r = R(), i = V(r);
  gt(i, () => Fd, (s, o) => {
    o(s, ht(() => n, { children: (a, c) => {
      var l = R(), u = V(l);
      q(u, () => t.children ?? Q), P(a, l);
    }, $$slots: { default: true } }));
  }), P(e, r), z();
}
function Nd(e, t) {
  W(t, true);
  let n = S(t, "ref", 15, null), r = S(t, "sideOffset", 3, 4), i = ct(t, ["$$slots", "$$events", "$$legacy", "ref", "sideOffset", "portalProps", "class"]);
  var s = R(), o = V(s);
  gt(o, () => ml, (a, c) => {
    c(a, ht(() => t.portalProps, { children: (l, u) => {
      var d = R(), f = V(d);
      {
        let h = F(() => xe("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--bits-dropdown-menu-content-available-height) min-w-[8rem] origin-(--bits-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md outline-none", t.class));
        gt(f, () => Rd, (m, g) => {
          g(m, ht({ "data-slot": "dropdown-menu-content", get sideOffset() {
            return r();
          }, get class() {
            return p(h);
          } }, () => i, { get ref() {
            return n();
          }, set ref(y) {
            n(y);
          } }));
        });
      }
      P(l, d);
    }, $$slots: { default: true } }));
  }), P(e, s), z();
}
function Ld(e, t) {
  W(t, true);
  let n = S(t, "ref", 15, null), r = S(t, "value", 15), i = ct(t, ["$$slots", "$$events", "$$legacy", "ref", "value"]);
  var s = R(), o = V(s);
  gt(o, () => Ed, (a, c) => {
    c(a, ht({ "data-slot": "dropdown-menu-radio-group" }, () => i, { get ref() {
      return n();
    }, set ref(l) {
      n(l);
    }, get value() {
      return r();
    }, set value(l) {
      r(l);
    } }));
  }), P(e, s), z();
}
function Kd(e, t) {
  W(t, true);
  let n = ct(t, ["$$slots", "$$events", "$$legacy"]);
  const r = [["circle", { cx: "12", cy: "12", r: "10" }]];
  Ha(e, ht({ name: "circle" }, () => n, { get iconNode() {
    return r;
  }, children: (i, s) => {
    var o = R(), a = V(o);
    q(a, () => t.children ?? Q), P(i, o);
  }, $$slots: { default: true } })), z();
}
var Wd = $('<span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"><!></span> <!>', 1);
function zd(e, t) {
  W(t, true);
  let n = S(t, "ref", 15, null), r = ct(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children"]);
  var i = R(), s = V(i);
  {
    const o = (c, l) => {
      let u = () => l == null ? void 0 : l().checked;
      var d = Wd(), f = V(d), h = rt(f);
      {
        var m = (y) => {
          Kd(y, { class: "size-2 fill-current" });
        };
        Z(h, (y) => {
          u() && y(m);
        });
      }
      it(f);
      var g = at(f, 2);
      q(g, () => t.children ?? Q, () => ({ checked: u() })), P(c, d);
    };
    let a = F(() => xe("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t.class));
    gt(s, () => Pd, (c, l) => {
      l(c, ht({ "data-slot": "dropdown-menu-radio-item", get class() {
        return p(a);
      } }, () => r, { get ref() {
        return n();
      }, set ref(u) {
        n(u);
      }, children: o, $$slots: { default: true } }));
    });
  }
  P(e, i), z();
}
function Hd(e, t) {
  W(t, true);
  let n = S(t, "ref", 15, null), r = ct(t, ["$$slots", "$$events", "$$legacy", "ref"]);
  var i = R(), s = V(i);
  gt(s, () => _d, (o, a) => {
    a(o, ht({ "data-slot": "dropdown-menu-trigger" }, () => r, { get ref() {
      return n();
    }, set ref(c) {
      n(c);
    } }));
  }), P(e, i), z();
}
var qd = $('<svg class="size-3" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g fill="none" class="nc-icon-wrapper" stroke-linejoin="miter" stroke-linecap="butt"><path d="M3 7H3.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 11H3.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M3 15H3.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M3 19H3.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M3 23H3.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 27H3.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M7 7H7.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 11H7.01" stroke="rgba(255, 255, 255, 0.65)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M7 15H7.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 23H7.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 27H7.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 7H11.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 11H11.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M14.99 11H15" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 15H11.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 19H7.01" stroke="rgba(255, 255, 255, 0.65)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M11 19H11.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 27H11.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 7H15.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M18.99 7H19" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 15H15.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 23H15.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M11 23H11.01" stroke="rgba(255, 255, 255, 0.65)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M15 19H15.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M15 27H15.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 11H19.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 19H19.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 15H19.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 23H19.01" stroke="rgba(255, 255, 255, 0.65)" stroke-width="3" stroke-linecap="square" data-arcade-2="on"></path><path d="M19 27H19.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 7H23.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M7 3H7.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M3 3H3.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M11 3H11.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M15 3H15.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M19 3H19.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 3H23.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 3H27.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 15H23.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M23 11H23.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 19H23.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 23H23.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 27H27.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M23 27H23.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 7H27.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path><path d="M27 11H27.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 15H27.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 19H27.01" stroke="rgba(255, 255, 255, 1)" stroke-width="3" stroke-linecap="square" data-arcade-1="on"></path><path d="M27 23H27.01" stroke="rgba(28, 31, 33, 0)" stroke-width="3" stroke-linecap="square" data-arcade-3="on"></path></g></svg> <span class="sr-only">Change language</span>', 1), jd = $("<!> <!>", 1);
function Ud(e, t) {
  W(t, true);
  let n = S(t, "languages", 19, () => []), r = S(t, "value", 15, "");
  r() === "" && r(n()[0].code);
  const i = new rs("(min-width: 768px)");
  var s = R(), o = V(s);
  gt(o, () => Bd, (a, c) => {
    c(a, { children: (l, u) => {
      var d = jd(), f = V(d);
      {
        let m = F(() => xe("flex size-5.5 flex-none cursor-pointer items-center justify-center bg-black", t.class));
        gt(f, () => Hd, (g, y) => {
          y(g, { get class() {
            return p(m);
          }, "aria-label": "Change language", children: (v, T) => {
            var x = qd();
            Qr(2), P(v, x);
          }, $$slots: { default: true } });
        });
      }
      var h = at(f, 2);
      {
        let m = F(() => i.current ? "start" : "end"), g = F(() => i.current ? "right" : "top");
        gt(h, () => Nd, (y, v) => {
          v(y, { get align() {
            return p(m);
          }, get side() {
            return p(g);
          }, class: "pointer-events-auto z-200 bg-background", children: (T, x) => {
            var b = R(), w = V(b);
            gt(w, () => Ld, (k, C) => {
              C(k, { get onValueChange() {
                return t.onChange;
              }, get value() {
                return r();
              }, set value(M) {
                r(M);
              }, children: (M, D) => {
                var _ = R(), B = V(_);
                ns(B, 17, n, (j) => j.code, (j, U) => {
                  var I = R(), L = V(I);
                  gt(L, () => zd, (G, K) => {
                    K(G, { get value() {
                      return p(U).code;
                    }, children: (H, et) => {
                      Qr();
                      var st = na();
                      Lt(() => Qn(st, p(U).label)), P(H, st);
                    }, $$slots: { default: true } });
                  }), P(j, I);
                }), P(M, _);
              }, $$slots: { default: true } });
            }), P(T, b);
          }, $$slots: { default: true } });
        });
      }
      P(l, d);
    }, $$slots: { default: true } });
  }), P(e, s), z();
}
var Gd = $("<!> <!>", 1), Yd = $('<a href="/profile" class="sticky left-0 z-100"><!></a>');
function Xd(e, t) {
  W(t, false);
  const n = is();
  ms();
  var r = Yd(), i = rt(r);
  qa(i, { class: "size-5.5 rounded-none md:size-10", children: (s, o) => {
    var a = Gd(), c = V(a);
    {
      var l = (d) => {
        {
          let f = ra(() => {
            var _a7, _b3;
            return ((_b3 = (_a7 = n.me.current) == null ? void 0 : _a7.profile) == null ? void 0 : _b3.displayName) ?? n.me.current.profile.username ?? n.me.current.profile.name;
          });
          Ga(d, { get src() {
            return n.me.current.profile.imageUrl;
          }, get alt() {
            return p(f);
          }, referrerpolicy: "no-referrer" });
        }
      };
      Z(c, (d) => {
        n.me.current.$isLoaded && n.me.current.profile.$isLoaded && n.me.current.profile.imageUrl && d(l);
      });
    }
    var u = at(c, 2);
    ja(u, { class: "rounded-none", children: (d, f) => {
      Ua(d, {});
    }, $$slots: { default: true } }), P(s, a);
  }, $$slots: { default: true } }), it(r), P(e, r), z();
}
const Zd = () => "English", Jd = () => "English", Qd = (e = {}, t = {}) => (t.locale ?? or()) === "en" ? Zd() : Jd(), $d = () => "Japanese", tf = () => "\u65E5\u672C\u8A9E", ef = (e = {}, t = {}) => (t.locale ?? or()) === "en" ? $d() : tf();
function nf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Vr(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Js = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function rf(e) {
  return typeof e == "object" && e !== null;
}
const Qs = (e) => /^0[^.\s]+$/u.test(e);
function Rr(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
class $s {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return nf(this.subscriptions, t), () => Vr(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i) if (i === 1) this.subscriptions[0](t, n, r);
    else for (let s = 0; s < i; s++) {
      const o = this.subscriptions[s];
      o && o(t, n, r);
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Pt = (e) => e * 1e3, pt = (e) => e / 1e3;
function to(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const sf = (e, t, n) => {
  const r = t - e;
  return ((n - e) % r + r) % r + e;
}, eo = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, of = 1e-7, af = 12;
function cf(e, t, n, r, i) {
  let s, o, a = 0;
  do
    o = t + (n - t) / 2, s = eo(o, r, i) - e, s > 0 ? n = o : t = o;
  while (Math.abs(s) > of && ++a < af);
  return o;
}
function _e(e, t, n, r) {
  if (e === t && n === r) return De;
  const i = (s) => cf(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : eo(i(s), t, r);
}
const no = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, ro = (e) => (t) => 1 - e(1 - t), io = _e(0.33, 1.53, 0.69, 0.99), Ir = ro(io), so = no(Ir), oo = (e) => (e *= 2) < 1 ? 0.5 * Ir(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), _r = (e) => 1 - Math.sin(Math.acos(e)), lf = ro(_r), ao = no(_r), uf = _e(0.42, 0, 1, 1), df = _e(0, 0, 0.58, 1), co = _e(0.42, 0, 0.58, 1), lo = (e) => Array.isArray(e) && typeof e[0] != "number";
function uo(e, t) {
  return lo(e) ? e[sf(0, e.length, t)] : e;
}
const fo = (e) => Array.isArray(e) && typeof e[0] == "number", ff = { linear: De, easeIn: uf, easeInOut: co, easeOut: df, circIn: _r, circInOut: ao, circOut: lf, backIn: Ir, backInOut: so, backOut: io, anticipate: oo }, hf = (e) => typeof e == "string", Oi = (e) => {
  if (fo(e)) {
    us(e.length === 4);
    const [t, n, r, i] = e;
    return _e(t, n, r, i);
  } else if (hf(e)) return ff[e];
  return e;
}, He = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function mf(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = false, s = false;
  const o = /* @__PURE__ */ new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: false };
  function c(u) {
    o.has(u) && (l.schedule(u), e()), u(a);
  }
  const l = { schedule: (u, d = false, f = false) => {
    const m = f && i ? n : r;
    return d && o.add(u), m.has(u) || m.add(u), u;
  }, cancel: (u) => {
    r.delete(u), o.delete(u);
  }, process: (u) => {
    if (a = u, i) {
      s = true;
      return;
    }
    i = true, [n, r] = [r, n], n.forEach(c), n.clear(), i = false, s && (s = false, l.process(u));
  } };
  return l;
}
const gf = 40;
function ho(e, t) {
  let n = false, r = true;
  const i = { delta: 0, timestamp: 0, isProcessing: false }, s = () => n = true, o = He.reduce((x, b) => (x[b] = mf(s), x), {}), { setup: a, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: h, postRender: m } = o, g = () => {
    const x = Kt.useManualTiming ? i.timestamp : performance.now();
    n = false, Kt.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, gf), 1)), i.timestamp = x, i.isProcessing = true, a.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), h.process(i), m.process(i), i.isProcessing = false, n && t && (r = false, e(g));
  }, y = () => {
    n = true, r = true, i.isProcessing || e(g);
  };
  return { schedule: He.reduce((x, b) => {
    const w = o[b];
    return x[b] = (k, C = false, M = false) => (n || y(), w.schedule(k, C, M)), x;
  }, {}), cancel: (x) => {
    for (let b = 0; b < He.length; b++) o[He[b]].cancel(x);
  }, state: i, steps: o };
}
const { schedule: Dt, cancel: Ln, state: an } = ho(typeof requestAnimationFrame < "u" ? requestAnimationFrame : De, true);
let Ue;
function pf() {
  Ue = void 0;
}
const ut = { now: () => (Ue === void 0 && ut.set(an.isProcessing || Kt.useManualTiming ? an.timestamp : performance.now()), Ue), set: (e) => {
  Ue = e, queueMicrotask(pf);
} }, yf = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return { start: (n = true) => Dt.update(t, n), stop: () => Ln(t), now: () => an.isProcessing ? an.timestamp : ut.now() };
}, mo = (e, t, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < i; s++) r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, cn = 2e4;
function Br(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < cn; ) t += n, r = e.next(t);
  return t >= cn ? 1 / 0 : t;
}
function go(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), i = Math.min(Br(r), cn);
  return { type: "keyframes", ease: (s) => r.next(i * s).value / t, duration: pt(i) };
}
const vf = 5;
function po(e, t, n) {
  const r = Math.max(t - vf, 0);
  return to(n - e(r), t - r);
}
const Y = { stiffness: 100, damping: 10, mass: 1, velocity: 0, duration: 800, bounce: 0.3, visualDuration: 0.3, restSpeed: { granular: 0.01, default: 2 }, restDelta: { granular: 5e-3, default: 0.5 }, minDuration: 0.01, maxDuration: 10, minDamping: 0.05, maxDamping: 1 }, Sn = 1e-3;
function bf({ duration: e = Y.duration, bounce: t = Y.bounce, velocity: n = Y.velocity, mass: r = Y.mass }) {
  let i, s, o = 1 - t;
  o = Te(Y.minDamping, Y.maxDamping, o), e = Te(Y.minDuration, Y.maxDuration, pt(e)), o < 1 ? (i = (l) => {
    const u = l * o, d = u * e, f = u - n, h = Kn(l, o), m = Math.exp(-d);
    return Sn - f / h * m;
  }, s = (l) => {
    const d = l * o * e, f = d * n + n, h = Math.pow(o, 2) * Math.pow(l, 2) * e, m = Math.exp(-d), g = Kn(Math.pow(l, 2), o);
    return (-i(l) + Sn > 0 ? -1 : 1) * ((f - h) * m) / g;
  }) : (i = (l) => {
    const u = Math.exp(-l * e), d = (l - n) * e + 1;
    return -Sn + u * d;
  }, s = (l) => {
    const u = Math.exp(-l * e), d = (n - l) * (e * e);
    return u * d;
  });
  const a = 5 / e, c = xf(i, s, a);
  if (e = Pt(e), isNaN(c)) return { stiffness: Y.stiffness, damping: Y.damping, duration: e };
  {
    const l = Math.pow(c, 2) * r;
    return { stiffness: l, damping: o * 2 * Math.sqrt(r * l), duration: e };
  }
}
const wf = 12;
function xf(e, t, n) {
  let r = n;
  for (let i = 1; i < wf; i++) r = r - e(r) / t(r);
  return r;
}
function Kn(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Sf = ["duration", "bounce"], Tf = ["stiffness", "damping", "mass"];
function Ei(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Af(e) {
  let t = { velocity: Y.velocity, stiffness: Y.stiffness, damping: Y.damping, mass: Y.mass, isResolvedFromDuration: false, ...e };
  if (!Ei(e, Tf) && Ei(e, Sf)) if (e.visualDuration) {
    const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, s = 2 * Te(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
    t = { ...t, mass: Y.mass, stiffness: i, damping: s };
  } else {
    const n = bf(e);
    t = { ...t, ...n, mass: Y.mass }, t.isResolvedFromDuration = true;
  }
  return t;
}
function Pe(e = Y.visualDuration, t = Y.bounce) {
  const n = typeof e != "object" ? { visualDuration: e, keyframes: [0, 1], bounce: t } : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: false, value: s }, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: h } = Af({ ...n, velocity: -pt(n.velocity || 0) }), m = f || 0, g = l / (2 * Math.sqrt(c * u)), y = o - s, v = pt(Math.sqrt(c / u)), T = Math.abs(y) < 5;
  r || (r = T ? Y.restSpeed.granular : Y.restSpeed.default), i || (i = T ? Y.restDelta.granular : Y.restDelta.default);
  let x;
  if (g < 1) {
    const w = Kn(v, g);
    x = (k) => {
      const C = Math.exp(-g * v * k);
      return o - C * ((m + g * v * y) / w * Math.sin(w * k) + y * Math.cos(w * k));
    };
  } else if (g === 1) x = (w) => o - Math.exp(-v * w) * (y + (m + v * y) * w);
  else {
    const w = v * Math.sqrt(g * g - 1);
    x = (k) => {
      const C = Math.exp(-g * v * k), M = Math.min(w * k, 300);
      return o - C * ((m + g * v * y) * Math.sinh(M) + w * y * Math.cosh(M)) / w;
    };
  }
  const b = { calculatedDuration: h && d || null, next: (w) => {
    const k = x(w);
    if (h) a.done = w >= d;
    else {
      let C = w === 0 ? m : 0;
      g < 1 && (C = w === 0 ? Pt(m) : po(x, w, k));
      const M = Math.abs(C) <= r, D = Math.abs(o - k) <= i;
      a.done = M && D;
    }
    return a.value = a.done ? o : k, a;
  }, toString: () => {
    const w = Math.min(Br(b), cn), k = mo((C) => b.next(w * C).value, w, 30);
    return w + "ms " + k;
  }, toTransition: () => {
  } };
  return b;
}
Pe.applyToOptions = (e) => {
  const t = go(e, 100, Pe);
  return e.ease = t.ease, e.duration = Pt(t.duration), e.type = "keyframes", e;
};
function Wn({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: s = 500, modifyTarget: o, min: a, max: c, restDelta: l = 0.5, restSpeed: u }) {
  const d = e[0], f = { done: false, value: d }, h = (M) => a !== void 0 && M < a || c !== void 0 && M > c, m = (M) => a === void 0 ? c : c === void 0 || Math.abs(a - M) < Math.abs(c - M) ? a : c;
  let g = n * t;
  const y = d + g, v = o === void 0 ? y : o(y);
  v !== y && (g = v - d);
  const T = (M) => -g * Math.exp(-M / r), x = (M) => v + T(M), b = (M) => {
    const D = T(M), _ = x(M);
    f.done = Math.abs(D) <= l, f.value = f.done ? v : _;
  };
  let w, k;
  const C = (M) => {
    h(f.value) && (w = M, k = Pe({ keyframes: [f.value, m(f.value)], velocity: po(x, M, f.value), damping: i, stiffness: s, restDelta: l, restSpeed: u }));
  };
  return C(0), { calculatedDuration: null, next: (M) => {
    let D = false;
    return !k && w === void 0 && (D = true, b(M), C(M)), w !== void 0 && M >= w ? k.next(M - w) : (!D && b(M), f);
  } };
}
function yo(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = ds(0, t, r);
    e.push(ir(n, 1, i));
  }
}
function vo(e) {
  const t = [0];
  return yo(t, e.length - 1), t;
}
function Mf(e, t) {
  return e.map((n) => n * t);
}
function Cf(e, t) {
  return e.map(() => t || co).splice(0, e.length - 1);
}
function we({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = lo(r) ? r.map(Oi) : Oi(r), s = { done: false, value: t[0] }, o = Mf(n && n.length === t.length ? n : vo(t), e), a = Xa(o, t, { ease: Array.isArray(i) ? i : Cf(t, i) });
  return { calculatedDuration: e, next: (c) => (s.value = a(c), s.done = c >= e, s) };
}
const kf = (e) => e !== null;
function Nr(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const s = e.filter(kf), a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !a || r === void 0 ? s[a] : r;
}
const Pf = { decay: Wn, inertia: Wn, tween: we, keyframes: we, spring: Pe };
function bo(e) {
  typeof e.type == "string" && (e.type = Pf[e.type]);
}
class Lr {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const Of = (e) => e / 100;
class Kr extends Lr {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var _a7, _b3;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== ut.now() && this.tick(ut.now()), this.isStopped = true, this.state !== "idle" && (this.teardown(), (_b3 = (_a7 = this.options).onStop) == null ? void 0 : _b3.call(_a7));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === false && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    bo(t);
    const { type: n = we, repeat: r = 0, repeatDelay: i = 0, repeatType: s, velocity: o = 0 } = t;
    let { keyframes: a } = t;
    const c = n || we;
    c !== we && typeof a[0] != "number" && (this.mixKeyframes = Za(Of, Ja(a[0], a[1])), a = [0, 100]);
    const l = c({ ...t, keyframes: a });
    s === "mirror" && (this.mirroredGenerator = c({ ...t, keyframes: [...a].reverse(), velocity: -o })), l.calculatedDuration === null && (l.calculatedDuration = Br(l));
    const { calculatedDuration: u } = l;
    this.calculatedDuration = u, this.resolvedDuration = u + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = l;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = false) {
    const { generator: r, totalDuration: i, mixKeyframes: s, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: c } = this;
    if (this.startTime === null) return r.next(0);
    const { delay: l = 0, keyframes: u, repeat: d, repeatType: f, repeatDelay: h, type: m, onUpdate: g, finalKeyframe: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const v = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1), T = this.playbackSpeed >= 0 ? v < 0 : v > i;
    this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let x = this.currentTime, b = r;
    if (d) {
      const M = Math.min(this.currentTime, i) / a;
      let D = Math.floor(M), _ = M % 1;
      !_ && M >= 1 && (_ = 1), _ === 1 && D--, D = Math.min(D, d + 1), !!(D % 2) && (f === "reverse" ? (_ = 1 - _, h && (_ -= h / a)) : f === "mirror" && (b = o)), x = Te(0, 1, _) * a;
    }
    const w = T ? { done: false, value: u[0] } : b.next(x);
    s && (w.value = s(w.value));
    let { done: k } = w;
    !T && c !== null && (k = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && k);
    return C && m !== Wn && (w.value = Nr(u, this.options, y, this.speed)), g && g(w.value), C && this.finish(), w;
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return pt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + pt(t);
  }
  get time() {
    return pt(this.currentTime);
  }
  set time(t) {
    var _a7;
    t = Pt(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (_a7 = this.driver) == null ? void 0 : _a7.start(false);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(ut.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = pt(this.currentTime));
  }
  play() {
    var _a7, _b3;
    if (this.isStopped) return;
    const { driver: t = yf, startTime: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), (_b3 = (_a7 = this.options).onPlay) == null ? void 0 : _b3.call(_a7);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(ut.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var _a7, _b3;
    this.notifyFinished(), this.teardown(), this.state = "finished", (_b3 = (_a7 = this.options).onComplete) == null ? void 0 : _b3.call(_a7);
  }
  cancel() {
    var _a7, _b3;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (_b3 = (_a7 = this.options).onCancel) == null ? void 0 : _b3.call(_a7);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, true);
  }
  attachTimeline(t) {
    var _a7;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (_a7 = this.driver) == null ? void 0 : _a7.stop(), t.observe(this);
  }
}
function Ef(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const Yt = (e) => e * 180 / Math.PI, zn = (e) => {
  const t = Yt(Math.atan2(e[1], e[0]));
  return Hn(t);
}, Ff = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2, rotate: zn, rotateZ: zn, skewX: (e) => Yt(Math.atan(e[1])), skewY: (e) => Yt(Math.atan(e[2])), skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2 }, Hn = (e) => (e = e % 360, e < 0 && (e += 360), e), Fi = zn, Di = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Vi = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Df = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: Di, scaleY: Vi, scale: (e) => (Di(e) + Vi(e)) / 2, rotateX: (e) => Hn(Yt(Math.atan2(e[6], e[5]))), rotateY: (e) => Hn(Yt(Math.atan2(-e[2], e[0]))), rotateZ: Fi, rotate: Fi, skewX: (e) => Yt(Math.atan(e[4])), skewY: (e) => Yt(Math.atan(e[1])), skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2 };
function qn(e) {
  return e.includes("scale") ? 1 : 0;
}
function jn(e, t) {
  if (!e || e === "none") return qn(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) r = Df, i = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = Ff, i = a;
  }
  if (!i) return qn(t);
  const s = r[t], o = i[1].split(",").map(Rf);
  return typeof s == "function" ? s(o) : o[s];
}
const Vf = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return jn(n, t);
};
function Rf(e) {
  return parseFloat(e.trim());
}
const ae = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], ce = new Set(ae), Ri = (e) => e === sr || e === E, If = /* @__PURE__ */ new Set(["x", "y", "z"]), _f = ae.filter((e) => !If.has(e));
function Bf(e) {
  const t = [];
  return _f.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Bt = { width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n), height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n), top: (e, { top: t }) => parseFloat(t), left: (e, { left: t }) => parseFloat(t), bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min), right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min), x: (e, { transform: t }) => jn(t, "x"), y: (e, { transform: t }) => jn(t, "y") };
Bt.translateX = Bt.x;
Bt.translateY = Bt.y;
const Xt = /* @__PURE__ */ new Set();
let Un = false, Gn = false, Yn = false;
function wo() {
  if (Gn) {
    const e = Array.from(Xt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = Bf(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([s, o]) => {
        var _a7;
        (_a7 = r.getValue(s)) == null ? void 0 : _a7.set(o);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Gn = false, Un = false, Xt.forEach((e) => e.complete(Yn)), Xt.clear();
}
function xo() {
  Xt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Gn = true);
  });
}
function Nf() {
  Yn = true, xo(), wo(), Yn = false;
}
class Wr {
  constructor(t, n, r, i, s, o = false) {
    this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Xt.add(this), Un || (Un = true, Dt.read(xo), Dt.resolveKeyframes(wo))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    if (t[0] === null) {
      const s = i == null ? void 0 : i.get(), o = t[t.length - 1];
      if (s !== void 0) t[0] = s;
      else if (r && n) {
        const a = r.readValue(n, o);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0]);
    }
    Ef(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = false) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Xt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Xt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Lf = (e) => e.startsWith("--");
function Kf(e, t, n) {
  Lf(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const Wf = Rr(() => window.ScrollTimeline !== void 0), zf = {};
function Hf(e, t) {
  const n = Rr(e);
  return () => zf[t] ?? n();
}
const So = Hf(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return false;
  }
  return true;
}, "linearEasing"), ve = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Ii = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: ve([0, 0.65, 0.55, 1]), circOut: ve([0.55, 0, 1, 0.45]), backIn: ve([0.31, 0.01, 0.66, -0.59]), backOut: ve([0.33, 1.53, 0.69, 0.99]) };
function To(e, t) {
  if (e) return typeof e == "function" ? So() ? mo(e, t) : "ease-out" : fo(e) ? ve(e) : Array.isArray(e) ? e.map((n) => To(n, t) || Ii.easeOut) : Ii[e];
}
function qf(e, t, n, { delay: r = 0, duration: i = 300, repeat: s = 0, repeatType: o = "loop", ease: a = "easeOut", times: c } = {}, l = void 0) {
  const u = { [t]: n };
  c && (u.offset = c);
  const d = To(a, i);
  Array.isArray(d) && (u.easing = d);
  const f = { delay: r, duration: i, easing: Array.isArray(d) ? "linear" : d, fill: "both", iterations: s + 1, direction: o === "reverse" ? "alternate" : "normal" };
  return l && (f.pseudoElement = l), e.animate(u, f);
}
function zr(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function jf({ type: e, ...t }) {
  return zr(e) && So() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Uf extends Lr {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = false, this.manualStartTime = null, !t) return;
    const { element: n, name: r, keyframes: i, pseudoElement: s, allowFlatten: o = false, finalKeyframe: a, onComplete: c } = t;
    this.isPseudoElement = !!s, this.allowFlatten = o, this.options = t, us(typeof t.type != "string");
    const l = jf(t);
    this.animation = qf(n, r, i, l, s), l.autoplay === false && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !s) {
        const u = Nr(i, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : Kf(n, r, u), this.animation.cancel();
      }
      c == null ? void 0 : c(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var _a7, _b3;
    (_b3 = (_a7 = this.animation).finish) == null ? void 0 : _b3.call(_a7);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = true;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var _a7, _b3;
    this.isPseudoElement || ((_b3 = (_a7 = this.animation).commitStyles) == null ? void 0 : _b3.call(_a7));
  }
  get duration() {
    var _a7, _b3;
    const t = ((_b3 = (_a7 = this.animation.effect) == null ? void 0 : _a7.getComputedTiming) == null ? void 0 : _b3.call(_a7).duration) || 0;
    return pt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + pt(t);
  }
  get time() {
    return pt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = Pt(t);
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var _a7;
    return this.allowFlatten && ((_a7 = this.animation.effect) == null ? void 0 : _a7.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && Wf() ? (this.animation.timeline = t, De) : n(this);
  }
}
const Ao = { anticipate: oo, backInOut: so, circInOut: ao };
function Gf(e) {
  return e in Ao;
}
function Yf(e) {
  typeof e.ease == "string" && Gf(e.ease) && (e.ease = Ao[e.ease]);
}
const Tn = 10;
class Xf extends Uf {
  constructor(t) {
    Yf(t), bo(t), super(t), t.startTime !== void 0 && (this.startTime = t.startTime), this.options = t;
  }
  updateMotionValue(t) {
    const { motionValue: n, onUpdate: r, onComplete: i, element: s, ...o } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Kr({ ...o, autoplay: false }), c = Math.max(Tn, ut.now() - this.startTime), l = Te(0, Tn, c - Tn);
    n.setWithVelocity(a.sample(Math.max(0, c - l)).value, a.sample(c).value, l), a.stop();
  }
}
const _i = (e, t) => t === "zIndex" ? false : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Zt.test(e) || e === "0") && !e.startsWith("url("));
function Zf(e) {
  const t = e[0];
  if (e.length === 1) return true;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return true;
}
function Jf(e, t, n, r) {
  const i = e[0];
  if (i === null) return false;
  if (t === "display" || t === "visibility") return true;
  const s = e[e.length - 1], o = _i(i, t), a = _i(s, t);
  return !o || !a ? false : Zf(e) || (n === "spring" || zr(n)) && r;
}
function Xn(e) {
  e.duration = 0, e.type = "keyframes";
}
const Qf = /* @__PURE__ */ new Set(["opacity", "clipPath", "filter", "transform"]), $f = Rr(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function th(e) {
  var _a7;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: s, type: o } = e;
  if (!(((_a7 = t == null ? void 0 : t.owner) == null ? void 0 : _a7.current) instanceof HTMLElement)) return false;
  const { onUpdate: c, transformTemplate: l } = t.owner.getProps();
  return $f() && n && Qf.has(n) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && s !== 0 && o !== "inertia";
}
const eh = 40;
class nh extends Lr {
  constructor({ autoplay: t = true, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: o = "loop", keyframes: a, name: c, motionValue: l, element: u, ...d }) {
    var _a7;
    super(), this.stop = () => {
      var _a8, _b3;
      this._animation && (this._animation.stop(), (_a8 = this.stopTimeline) == null ? void 0 : _a8.call(this)), (_b3 = this.keyframeResolver) == null ? void 0 : _b3.cancel();
    }, this.createdAt = ut.now();
    const f = { autoplay: t, delay: n, type: r, repeat: i, repeatDelay: s, repeatType: o, name: c, motionValue: l, element: u, ...d }, h = (u == null ? void 0 : u.KeyframeResolver) || Wr;
    this.keyframeResolver = new h(a, (m, g, y) => this.onKeyframesResolved(m, g, f, !y), c, l, u), (_a7 = this.keyframeResolver) == null ? void 0 : _a7.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, i) {
    var _a7, _b3;
    this.keyframeResolver = void 0;
    const { name: s, type: o, velocity: a, delay: c, isHandoff: l, onUpdate: u } = r;
    this.resolvedAt = ut.now(), Jf(t, s, o, a) || ((Kt.instantAnimations || !c) && (u == null ? void 0 : u(Nr(t, r, n))), t[0] = t[t.length - 1], Xn(r), r.repeat = 0);
    const f = { startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > eh ? this.resolvedAt : this.createdAt : this.createdAt : void 0, finalKeyframe: n, ...r, keyframes: t }, h = !l && th(f), m = (_b3 = (_a7 = f.motionValue) == null ? void 0 : _a7.owner) == null ? void 0 : _b3.current, g = h ? new Xf({ ...f, element: m }) : new Kr(f);
    g.finished.then(() => {
      this.notifyFinished();
    }).catch(De), this.pendingTimeline && (this.stopTimeline = g.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = g;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    var _a7;
    return this._animation || ((_a7 = this.keyframeResolver) == null ? void 0 : _a7.resume(), Nf()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var _a7;
    this._animation && this.animation.cancel(), (_a7 = this.keyframeResolver) == null ? void 0 : _a7.cancel();
  }
}
class rh {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((t) => t.finished));
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => r.attachTimeline(t));
    return () => {
      n.forEach((r, i) => {
        r && r(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return Bi(this.animations, "duration");
  }
  get iterationDuration() {
    return Bi(this.animations, "iterationDuration");
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function Bi(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    const i = e[r][t];
    i !== null && i > n && (n = i);
  }
  return n;
}
class ih extends rh {
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
}
const sh = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function oh(e) {
  const t = sh.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Mo(e, t, n = 1) {
  const [r, i] = oh(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Js(o) ? parseFloat(o) : o;
  }
  return fs(i) ? Mo(i, t, n + 1) : i;
}
const ah = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, ch = (e) => ({ type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }), lh = { type: "keyframes", duration: 0.8 }, uh = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }, dh = (e, { keyframes: t }) => t.length > 2 ? lh : ce.has(e) ? e.startsWith("scale") ? ch(t[1]) : ah : uh, fh = (e) => e !== null;
function hh(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(fh), s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return i[s];
}
function Co(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
function mh({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: c, elapsed: l, ...u }) {
  return !!Object.keys(u).length;
}
const ko = (e, t, n, r = {}, i, s) => (o) => {
  const a = Co(r, e) || {}, c = a.delay || r.delay || 0;
  let { elapsed: l = 0 } = r;
  l = l - Pt(c);
  const u = { keyframes: Array.isArray(n) ? n : [null, n], ease: "easeOut", velocity: t.getVelocity(), ...a, delay: -l, onUpdate: (f) => {
    t.set(f), a.onUpdate && a.onUpdate(f);
  }, onComplete: () => {
    o(), a.onComplete && a.onComplete();
  }, name: e, motionValue: t, element: s ? void 0 : i };
  mh(a) || Object.assign(u, dh(e, u)), u.duration && (u.duration = Pt(u.duration)), u.repeatDelay && (u.repeatDelay = Pt(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let d = false;
  if ((u.type === false || u.duration === 0 && !u.repeatDelay) && (Xn(u), u.delay === 0 && (d = true)), (Kt.instantAnimations || Kt.skipAnimations) && (d = true, Xn(u), u.delay = 0), u.allowFlatten = !a.type && !a.ease, d && !s && t.get() !== void 0) {
    const f = hh(u.keyframes, a);
    if (f !== void 0) {
      Dt.update(() => {
        u.onUpdate(f), u.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Kr(u) : new nh(u);
};
function Ni(e) {
  const t = [{}, {}];
  return e == null ? void 0 : e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Po(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Ni(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, s] = Ni(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function gh(e, t, n) {
  const r = e.getProps();
  return Po(r, t, r.custom, e);
}
const Oo = /* @__PURE__ */ new Set(["width", "height", "top", "left", "right", "bottom", ...ae]), Li = 30, ph = (e) => !isNaN(parseFloat(e));
class yh {
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      var _a7;
      const i = ut.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((_a7 = this.events.change) == null ? void 0 : _a7.notify(this.current), this.dependents)) for (const s of this.dependents) s.dirty();
    }, this.hasAnimated = false, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = ut.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = ph(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new $s());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), Dt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  jump(t, n = true) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var _a7;
    (_a7 = this.events.change) == null ? void 0 : _a7.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = ut.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Li) return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Li);
    return to(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = true, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var _a7, _b3;
    (_a7 = this.dependents) == null ? void 0 : _a7.clear(), (_b3 = this.events.destroy) == null ? void 0 : _b3.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Oe(e, t) {
  return new yh(e, t);
}
const vh = (e) => Array.isArray(e);
function bh(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Oe(n));
}
function wh(e) {
  return vh(e) ? e[e.length - 1] || 0 : e;
}
function xh(e, t) {
  const n = gh(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = wh(s[o]);
    bh(e, o, a);
  }
}
const ot = (e) => !!(e && e.getVelocity);
function Sh(e) {
  return !!(ot(e) && e.add);
}
function Th(e, t) {
  const n = e.getValue("willChange");
  if (Sh(n)) return n.add(t);
  if (!n && Kt.WillChange) {
    const r = new Kt.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Hr(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const Ah = "framerAppearId", Mh = "data-" + Hr(Ah);
function Ch(e) {
  return e.props[Mh];
}
function kh({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== true;
  return t[n] = false, r;
}
function Ph(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: s = e.getDefaultTransition(), transitionEnd: o, ...a } = t;
  const c = s == null ? void 0 : s.reduceMotion;
  r && (s = r);
  const l = [], u = i && e.animationState && e.animationState.getState()[i];
  for (const d in a) {
    const f = e.getValue(d, e.latestValues[d] ?? null), h = a[d];
    if (h === void 0 || u && kh(u, d)) continue;
    const m = { delay: n, ...Co(s || {}, d) }, g = f.get();
    if (g !== void 0 && !f.isAnimating && !Array.isArray(h) && h === g && !m.velocity) continue;
    let y = false;
    if (window.MotionHandoffAnimation) {
      const x = Ch(e);
      if (x) {
        const b = window.MotionHandoffAnimation(x, d, Dt);
        b !== null && (m.startTime = b, y = true);
      }
    }
    Th(e, d);
    const v = c ?? e.shouldReduceMotion;
    f.start(ko(d, f, h, v && Oo.has(d) ? { type: false } : m, e, y));
    const T = f.animation;
    T && l.push(T);
  }
  return o && Promise.all(l).then(() => {
    Dt.update(() => {
      o && xh(e, o);
    });
  }), l;
}
const Oh = { test: (e) => e === "auto", parse: (e) => e }, Eo = (e) => (t) => t.test(e), Fo = [sr, E, Qa, Rt, $a, tc, Oh], Ki = (e) => Fo.find(Eo(e));
function Eh(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Qs(e) : true;
}
const Fh = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Dh(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(ec) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = Fh.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const Vh = /\b([a-z-]*)\(.*?\)/gu, Zn = { ...Zt, getAnimatableNone: (e) => {
  const t = e.match(Vh);
  return t ? t.map(Dh).join(" ") : e;
} }, Wi = { ...sr, transform: Math.round }, Rh = { rotate: Rt, rotateX: Rt, rotateY: Rt, rotateZ: Rt, scale: Le, scaleX: Le, scaleY: Le, scaleZ: Le, skew: Rt, skewX: Rt, skewY: Rt, distance: E, translateX: E, translateY: E, translateZ: E, x: E, y: E, z: E, perspective: E, transformPerspective: E, opacity: On, originX: ni, originY: ni, originZ: E }, qr = { borderWidth: E, borderTopWidth: E, borderRightWidth: E, borderBottomWidth: E, borderLeftWidth: E, borderRadius: E, borderTopLeftRadius: E, borderTopRightRadius: E, borderBottomRightRadius: E, borderBottomLeftRadius: E, width: E, maxWidth: E, height: E, maxHeight: E, top: E, right: E, bottom: E, left: E, inset: E, insetBlock: E, insetBlockStart: E, insetBlockEnd: E, insetInline: E, insetInlineStart: E, insetInlineEnd: E, padding: E, paddingTop: E, paddingRight: E, paddingBottom: E, paddingLeft: E, paddingBlock: E, paddingBlockStart: E, paddingBlockEnd: E, paddingInline: E, paddingInlineStart: E, paddingInlineEnd: E, margin: E, marginTop: E, marginRight: E, marginBottom: E, marginLeft: E, marginBlock: E, marginBlockStart: E, marginBlockEnd: E, marginInline: E, marginInlineStart: E, marginInlineEnd: E, fontSize: E, backgroundPositionX: E, backgroundPositionY: E, ...Rh, zIndex: Wi, fillOpacity: On, strokeOpacity: On, numOctaves: Wi }, Ih = { ...qr, color: mt, backgroundColor: mt, outlineColor: mt, fill: mt, stroke: mt, borderColor: mt, borderTopColor: mt, borderRightColor: mt, borderBottomColor: mt, borderLeftColor: mt, filter: Zn, WebkitFilter: Zn }, Do = (e) => Ih[e];
function Vo(e, t) {
  let n = Do(e);
  return n !== Zn && (n = Zt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const _h = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Bh(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !_h.has(s) && nc(s).values.length && (i = e[r]), r++;
  }
  if (i && n) for (const s of t) e[s] = Vo(n, i);
}
class Nh extends Wr {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, true);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let u = 0; u < t.length; u++) {
      let d = t[u];
      if (typeof d == "string" && (d = d.trim(), fs(d))) {
        const f = Mo(d, n.current);
        f !== void 0 && (t[u] = f), u === t.length - 1 && (this.finalKeyframe = d);
      }
    }
    if (this.resolveNoneKeyframes(), !Oo.has(r) || t.length !== 2) return;
    const [i, s] = t, o = Ki(i), a = Ki(s), c = ri(i), l = ri(s);
    if (c !== l && Bt[r]) {
      this.needsMeasurement = true;
      return;
    }
    if (o !== a) if (Ri(o) && Ri(a)) for (let u = 0; u < t.length; u++) {
      const d = t[u];
      typeof d == "string" && (t[u] = parseFloat(d));
    }
    else Bt[r] && (this.needsMeasurement = true);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || Eh(t[i])) && r.push(i);
    r.length && Bh(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Bt[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, false);
  }
  measureEndState() {
    var _a7;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, false);
    const s = r.length - 1, o = r[s];
    r[s] = Bt[n](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), ((_a7 = this.removedTransforms) == null ? void 0 : _a7.length) && this.removedTransforms.forEach(([a, c]) => {
      t.getValue(a).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function Lh(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let r = document;
    t && (r = t.current);
    const i = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const Ro = (e, t) => t && typeof e == "number" ? t.transform(e) : e, { schedule: Kh } = ho(queueMicrotask, false);
function Io(e) {
  return rf(e) && "ownerSVGElement" in e;
}
function Wh(e) {
  return Io(e) && e.tagName === "svg";
}
const zh = [...Fo, mt, Zt], Hh = (e) => zh.find(Eo(e)), zi = () => ({ min: 0, max: 0 }), jr = () => ({ x: zi(), y: zi() }), Jn = { current: null }, _o = { current: false }, qh = typeof window < "u";
function jh() {
  if (_o.current = true, !!qh) if (window.matchMedia) {
    const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Jn.current = e.matches;
    e.addEventListener("change", t), t();
  } else Jn.current = false;
}
const Ee = /* @__PURE__ */ new WeakMap();
function Uh(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Gh(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Yh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], Xh = ["initial", ...Yh];
function Bo(e) {
  return Uh(e.animate) || Xh.some((t) => Gh(e[t]));
}
function Zh(e) {
  return !!(Bo(e) || e.variants);
}
function Jh(e, t, n) {
  for (const r in t) {
    const i = t[r], s = n[r];
    if (ot(i)) e.addValue(r, i);
    else if (ot(s)) e.addValue(r, Oe(i, { owner: e }));
    else if (s !== i) if (e.hasValue(r)) {
      const o = e.getValue(r);
      o.liveStyle === true ? o.jump(i) : o.hasAnimated || o.set(i);
    } else {
      const o = e.getStaticValue(r);
      e.addValue(r, Oe(o !== void 0 ? o : i, { owner: e }));
    }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Hi = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let qi = {};
class No {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: o }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Wr, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = ut.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, Dt.render(this.render, false, true));
    };
    const { latestValues: c, renderState: l } = o;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = Bo(n), this.isVariantNode = Zh(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in d) {
      const h = d[f];
      c[f] !== void 0 && ot(h) && h.set(c[f]);
    }
  }
  mount(t) {
    var _a7;
    this.current = t, Ee.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = false : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = true : (_o.current || jh(), this.shouldReduceMotion = Jn.current), (_a7 = this.parent) == null ? void 0 : _a7.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    var _a7;
    this.projection && this.projection.unmount(), Ln(this.notifyUpdate), Ln(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (_a7 = this.parent) == null ? void 0 : _a7.removeChild(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = false);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = ce.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (o) => {
      this.latestValues[t] = o, this.props.onUpdate && Dt.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = true), this.scheduleRender();
    });
    let s;
    typeof window < "u" && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      i(), s && s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in qi) {
      const n = qi[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), s.isMounted = true);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : jr();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < Hi.length; r++) {
      const i = Hi[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const s = "on" + i, o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    this.prevMotionValues = Jh(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Oe(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (Js(r) || Qs(r)) ? r = parseFloat(r) : !Hh(r) && Zt.test(n) && (r = Vo(t, n)), this.setBaseTarget(t, ot(r) ? r.get() : r)), ot(r) ? r.get() : r;
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var _a7;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = Po(this.props, n, (_a7 = this.presenceContext) == null ? void 0 : _a7.custom);
      s && (r = s[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !ot(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new $s()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Kh.render(this.render);
  }
}
class Lo extends No {
  constructor() {
    super(...arguments), this.KeyframeResolver = Nh;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ot(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Qh({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function $h(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function tm(e, t) {
  return Qh($h(e.getBoundingClientRect(), t));
}
const em = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }, nm = ae.length;
function rm(e, t, n) {
  let r = "", i = true;
  for (let s = 0; s < nm; s++) {
    const o = ae[s], a = e[o];
    if (a === void 0) continue;
    let c = true;
    if (typeof a == "number") c = a === (o.startsWith("scale") ? 1 : 0);
    else {
      const l = parseFloat(a);
      c = o.startsWith("scale") ? l === 1 : l === 0;
    }
    if (!c || n) {
      const l = Ro(a, qr[o]);
      if (!c) {
        i = false;
        const u = em[o] || o;
        r += `${u}(${l}) `;
      }
      n && (t[o] = l);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function Ko(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = false, a = false;
  for (const c in t) {
    const l = t[c];
    if (ce.has(c)) {
      o = true;
      continue;
    } else if (hs(c)) {
      i[c] = l;
      continue;
    } else {
      const u = Ro(l, qr[c]);
      c.startsWith("origin") ? (a = true, s[c] = u) : r[c] = u;
    }
  }
  if (t.transform || (o || n ? r.transform = rm(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: c = "50%", originY: l = "50%", originZ: u = 0 } = s;
    r.transformOrigin = `${c} ${l} ${u}`;
  }
}
function Wo(e, { style: t, vars: n }, r, i) {
  const s = e.style;
  let o;
  for (o in t) s[o] = t[o];
  i == null ? void 0 : i.applyProjectionStyles(s, r);
  for (o in n) s.setProperty(o, n[o]);
}
function ji(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const pe = { correct: (e, t) => {
  if (!t.target) return e;
  if (typeof e == "string") if (E.test(e)) e = parseFloat(e);
  else return e;
  const n = ji(e, t.target.x), r = ji(e, t.target.y);
  return `${n}% ${r}%`;
} }, im = { correct: (e, { treeScale: t, projectionDelta: n }) => {
  const r = e, i = Zt.parse(e);
  if (i.length > 5) return r;
  const s = Zt.createTransformer(e), o = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, c = n.y.scale * t.y;
  i[0 + o] /= a, i[1 + o] /= c;
  const l = ir(a, c, 0.5);
  return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), s(i);
} }, sm = { borderRadius: { ...pe, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: pe, borderTopRightRadius: pe, borderBottomLeftRadius: pe, borderBottomRightRadius: pe, boxShadow: im };
function om(e, { layout: t, layoutId: n }) {
  return ce.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!sm[e] || e === "opacity");
}
function zo(e, t, n) {
  var _a7;
  const r = e.style, i = t == null ? void 0 : t.style, s = {};
  if (!r) return s;
  for (const o in r) (ot(r[o]) || i && ot(i[o]) || om(o, e) || ((_a7 = n == null ? void 0 : n.getValue(o)) == null ? void 0 : _a7.liveStyle) !== void 0) && (s[o] = r[o]);
  return s;
}
function am(e) {
  return window.getComputedStyle(e);
}
class cm extends Lo {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Wo;
  }
  readValueFromInstance(t, n) {
    var _a7;
    if (ce.has(n)) return ((_a7 = this.projection) == null ? void 0 : _a7.isProjecting) ? qn(n) : Vf(t, n);
    {
      const r = am(t), i = (hs(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return tm(t, n);
  }
  build(t, n, r) {
    Ko(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return zo(t, n, r);
  }
}
function lm(e, t) {
  return e in t;
}
class um extends No {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(t, n) {
    if (lm(n, t)) {
      const r = t[n];
      if (typeof r == "string" || typeof r == "number") return r;
    }
  }
  getBaseTargetFromProps() {
  }
  removeValueFromRenderState(t, n) {
    delete n.output[t];
  }
  measureInstanceViewportBox() {
    return jr();
  }
  build(t, n) {
    Object.assign(t.output, n);
  }
  renderInstance(t, { output: n }) {
    Object.assign(t, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
const dm = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, fm = { offset: "strokeDashoffset", array: "strokeDasharray" };
function hm(e, t, n = 1, r = 0, i = true) {
  e.pathLength = 1;
  const s = i ? dm : fm;
  e[s.offset] = `${-r}`, e[s.array] = `${t} ${n}`;
}
const mm = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function gm(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: s = 1, pathOffset: o = 0, ...a }, c, l, u) {
  if (Ko(e, a, l), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: f } = e;
  d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = (u == null ? void 0 : u.transformBox) ?? "fill-box", delete d.transformBox);
  for (const h of mm) d[h] !== void 0 && (f[h] = d[h], delete d[h]);
  t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && hm(d, i, s, o, false);
}
const Ho = /* @__PURE__ */ new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]), pm = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function ym(e, t, n, r) {
  Wo(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Ho.has(i) ? i : Hr(i), t.attrs[i]);
}
function vm(e, t, n) {
  const r = zo(e, t, n);
  for (const i in e) if (ot(e[i]) || ot(t[i])) {
    const s = ae.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
    r[s] = e[i];
  }
  return r;
}
class bm extends Lo {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = jr;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ce.has(n)) {
      const r = Do(n);
      return r && r.default || 0;
    }
    return n = Ho.has(n) ? n : Hr(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return vm(t, n, r);
  }
  build(t, n, r) {
    gm(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    ym(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = pm(t.tagName), super.mount(t);
  }
}
function wm(e, t, n) {
  const r = ot(e) ? e : Oe(e);
  return r.start(ko("", r, t, n)), r.animation;
}
function Ur(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function qo(e, t, n, r) {
  return e == null ? [] : typeof e == "string" && Ur(t) ? Lh(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter((i) => i != null) : [e];
}
function xm(e, t, n) {
  return e * (t + 1);
}
function Ui(e, t, n, r) {
  return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : t.startsWith("<") ? Math.max(0, n + parseFloat(t.slice(1))) : r.get(t) ?? e;
}
function Sm(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    i.at > t && i.at < n && (Vr(e, i), r--);
  }
}
function Tm(e, t, n, r, i, s) {
  Sm(e, i, s);
  for (let o = 0; o < t.length; o++) e.push({ value: t[o], at: ir(i, s, r[o]), easing: uo(n, o) });
}
function Am(e, t) {
  for (let n = 0; n < e.length; n++) e[n] = e[n] / (t + 1);
}
function Mm(e, t) {
  return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
const Cm = "easeInOut";
function km(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  const s = t.duration || 0.3, o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = {}, l = /* @__PURE__ */ new Map();
  let u = 0, d = 0, f = 0;
  for (let h = 0; h < e.length; h++) {
    const m = e[h];
    if (typeof m == "string") {
      l.set(m, d);
      continue;
    } else if (!Array.isArray(m)) {
      l.set(m.name, Ui(d, m.at, u, l));
      continue;
    }
    let [g, y, v = {}] = m;
    v.at !== void 0 && (d = Ui(d, v.at, u, l));
    let T = 0;
    const x = (b, w, k, C = 0, M = 0) => {
      const D = Pm(b), { delay: _ = 0, times: B = vo(D), type: j = t.type || "keyframes", repeat: U, repeatType: I, repeatDelay: L = 0, ...G } = w;
      let { ease: K = t.ease || "easeOut", duration: H } = w;
      const et = typeof _ == "function" ? _(C, M) : _, st = D.length, Vt = zr(j) ? j : i == null ? void 0 : i[j || "keyframes"];
      if (st <= 2 && Vt) {
        let le = 100;
        if (st === 2 && Fm(D)) {
          const ue = D[1] - D[0];
          le = Math.abs(ue);
        }
        const Be = { ...t, ...G };
        H !== void 0 && (Be.duration = Pt(H));
        const Ne = go(Be, le, Vt);
        K = Ne.ease, H = Ne.duration;
      }
      H ?? (H = s);
      const te = d + et;
      B.length === 1 && B[0] === 0 && (B[1] = 1);
      const Gr = B.length - D.length;
      if (Gr > 0 && yo(B, Gr), D.length === 1 && D.unshift(null), U) {
        H = xm(H, U);
        const le = [...D], Be = [...B];
        K = Array.isArray(K) ? [...K] : [K];
        const Ne = [...K];
        for (let ue = 0; ue < U; ue++) {
          D.push(...le);
          for (let de = 0; de < le.length; de++) B.push(Be[de] + (ue + 1)), K.push(de === 0 ? "linear" : uo(Ne, de - 1));
        }
        Am(B, U);
      }
      const Yr = te + H;
      Tm(k, D, K, B, te, Yr), T = Math.max(et + H, T), f = Math.max(Yr, f);
    };
    if (ot(g)) {
      const b = Gi(g, a);
      x(y, v, Yi("default", b));
    } else {
      const b = qo(g, y, r, c), w = b.length;
      for (let k = 0; k < w; k++) {
        y = y, v = v;
        const C = b[k], M = Gi(C, a);
        for (const D in y) x(y[D], Om(v, D), Yi(D, M), k, w);
      }
    }
    u = d, d += T;
  }
  return a.forEach((h, m) => {
    for (const g in h) {
      const y = h[g];
      y.sort(Mm);
      const v = [], T = [], x = [];
      for (let C = 0; C < y.length; C++) {
        const { at: M, value: D, easing: _ } = y[C];
        v.push(D), T.push(ds(0, f, M)), x.push(_ || "easeOut");
      }
      T[0] !== 0 && (T.unshift(0), v.unshift(v[0]), x.unshift(Cm)), T[T.length - 1] !== 1 && (T.push(1), v.push(null)), o.has(m) || o.set(m, { keyframes: {}, transition: {} });
      const b = o.get(m);
      b.keyframes[g] = v;
      const { type: w, ...k } = t;
      b.transition[g] = { ...k, duration: f, ease: x, times: T, ...n };
    }
  }), o;
}
function Gi(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function Yi(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function Pm(e) {
  return Array.isArray(e) ? e : [e];
}
function Om(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
const Em = (e) => typeof e == "number", Fm = (e) => e.every(Em);
function Dm(e) {
  const t = { presenceContext: null, props: {}, visualState: { renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} }, latestValues: {} } }, n = Io(e) && !Wh(e) ? new bm(t) : new cm(t);
  n.mount(e), Ee.set(e, n);
}
function Vm(e) {
  const t = { presenceContext: null, props: {}, visualState: { renderState: { output: {} }, latestValues: {} } }, n = new um(t);
  n.mount(e), Ee.set(e, n);
}
function Rm(e, t) {
  return ot(e) || typeof e == "number" || typeof e == "string" && !Ur(t);
}
function jo(e, t, n, r) {
  const i = [];
  if (Rm(e, t)) i.push(wm(e, Ur(t) && t.default || t, n && (n.default || n)));
  else {
    if (e == null) return i;
    const s = qo(e, t, r), o = s.length;
    for (let a = 0; a < o; a++) {
      const c = s[a], l = c instanceof Element ? Dm : Vm;
      Ee.has(c) || l(c);
      const u = Ee.get(c), d = { ...n };
      "delay" in d && typeof d.delay == "function" && (d.delay = d.delay(a, o)), i.push(...Ph(u, { ...t, transition: d }, {}));
    }
  }
  return i;
}
function Im(e, t, n) {
  const r = [];
  return km(e, t, n, { spring: Pe }).forEach(({ keyframes: s, transition: o }, a) => {
    r.push(...jo(a, s, o));
  }), r;
}
function _m(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function Bm(e = {}) {
  const { scope: t, reduceMotion: n } = e;
  function r(i, s, o) {
    let a = [], c;
    if (_m(i)) a = Im(i, n !== void 0 ? { reduceMotion: n, ...s } : s, t);
    else {
      const { onComplete: u, ...d } = o || {};
      typeof u == "function" && (c = u), a = jo(i, s, n !== void 0 ? { reduceMotion: n, ...d } : d, t);
    }
    const l = new ih(a);
    return c && l.finished.then(c), t && (t.animations.push(l), l.finished.then(() => {
      Vr(t.animations, l);
    })), l;
  }
  return r;
}
const Nm = Bm(), Uo = Symbol("funnel/voidReducer"), Lm = () => Uo;
function Km(e, { triggerAt: t = "end", minQuietPeriodMs: n, maxBurstDurationMs: r, minGapMs: i, reducer: s = Lm }) {
  let o, a, c, l, u = () => {
    let h = c;
    h !== void 0 && (c = void 0, h === Uo ? e() : e(h), i !== void 0 && (a = setTimeout(d, i)));
  }, d = () => {
    clearTimeout(a), a = void 0, o === void 0 && u();
  }, f = () => {
    clearTimeout(o), o = void 0, l = void 0, a === void 0 && u();
  };
  return { call: (...h) => {
    let m = o === void 0 && a === void 0;
    if ((t !== "start" || m) && (c = s(c, ...h)), !(o === void 0 && !m)) {
      if (n !== void 0 || r !== void 0 || i === void 0) {
        clearTimeout(o);
        let g = Date.now();
        l ?? (l = g);
        let y = r === void 0 ? n ?? 0 : Math.min(n ?? r, Math.max(0, r - (g - l)));
        o = setTimeout(f, y);
      }
      t !== "end" && m && u();
    }
  }, cancel: () => {
    clearTimeout(o), o = void 0, l = void 0, clearTimeout(a), a = void 0, c = void 0;
  }, flush: () => {
    f(), d();
  }, get isIdle() {
    return o === void 0 && a === void 0;
  } };
}
const Wm = (e, t = () => ({ speed: 60, characters: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", text: "", loop: false, delay: 0, deleteSpeed: 30, scrambleIterations: 5 })) => {
  let n = N("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"), r = N(void 0), i = N(""), s = N("idle"), o = N(""), a = true;
  const c = () => {
    p(r) && (p(r).stop(), A(r, void 0));
  }, l = () => p(n)[Math.floor(Math.random() * p(n).length)], u = (h, m) => {
    let g = 0;
    for (; g < h.length && g < m.length && h[g] === m[g]; ) g++;
    return g;
  }, d = (h, m, g, y) => {
    A(s, "deleting");
    const T = h.length - g;
    if (T <= 0) {
      y();
      return;
    }
    const x = h.slice(0, g), b = Km((w) => {
      const k = Math.ceil(w);
      A(i, x + h.slice(g, g + k)), e.innerText = p(i);
    }, { minGapMs: m, triggerAt: "both", reducer: (w, k) => k });
    A(r, Nm(T, 0, { duration: T * (m / 1e3), ease: "linear", onUpdate: (w) => {
      b.call(w);
    }, onComplete: () => {
      A(i, x, true), e.innerText = x, y();
    } }), true);
  }, f = (h, m, g, y, v, T = 0) => {
    A(s, "typing"), h.length;
    const x = h.slice(0, T), b = h.slice(T), w = b.length;
    if (w === 0) {
      A(i, h, true), e.innerText = h, A(s, "idle");
      return;
    }
    let k = false, C;
    const M = [], D = new Array(w).fill(-1), _ = m / (v + 1), B = () => {
      let I = x;
      for (let L = 0; L < w && D[L] !== -1; L++) D[L] === 0 ? I += b[L] : I += l();
      A(i, I, true), e.innerText = I;
    }, j = (I) => {
      if (k) return;
      D[I] = v;
      const L = setInterval(() => {
        if (k) {
          clearInterval(L);
          return;
        }
        D[I]--, B(), D[I] <= 0 && (clearInterval(L), I === w - 1 && D[I] === 0 && (A(i, h, true), e.innerText = h, A(s, "idle"), y && (C = setTimeout(() => {
          k || (D.fill(-1), A(i, ""), e.innerText = "", U());
        }, 500))));
      }, _);
      M.push(L), B();
    }, U = () => {
      let I = 0;
      const L = () => {
        k || I >= w || (j(I), I++, I < w && (C = setTimeout(L, m)));
      };
      L();
    };
    A(r, { stop: () => {
      k = true, C && clearTimeout(C), M.forEach((I) => {
        clearInterval(I);
      });
    }, cancel: () => {
      k = true, C && clearTimeout(C), M.forEach((I) => {
        clearInterval(I);
      });
    } }, true), g > 0 ? C = setTimeout(U, g) : U();
  };
  nt(() => {
    const { speed: h, characters: m, text: g, loop: y, delay: v, deleteSpeed: T, scrambleIterations: x } = t();
    ln(() => {
      A(n, m ?? "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", true);
      const b = h ?? 60, w = T ?? 30, k = x ?? 3;
      if (c(), a) a = false, A(o, g, true), f(g, b, v ?? 0, y ?? false, k, 0);
      else if (g !== p(o)) {
        const C = p(i) || p(o), M = u(C, g);
        A(o, g, true), C.length > M ? d(C, w, M, () => {
          f(g, b, 0, y ?? false, k, M);
        }) : f(g, b, v ?? 0, y ?? false, k, M);
      }
    });
  });
};
var zm = $("<p> </p>"), Hm = $('<div class="absolute top-[2ch] right-[1ch]"><div class="relative size-[6ch] md:size-[8ch]"><!></div></div>'), qm = $('<header class="pointer-events-auto flex flex-col items-start gap-0 px-1.5 pt-[2ch] [grid-area:header] md:gap-[0.5ch] md:px-0 md:pt-[1ch]"><h2></h2> <!> <!></header>');
function jm(e, t) {
  W(t, false);
  const n = is();
  let r = ia();
  ms();
  var i = qm(), s = rt(i);
  Ea(s, (u) => A(r, u), () => p(r)), fc(s, (u, d) => Wm == null ? void 0 : Wm(u, d), () => () => ({ text: n.title, duration: 0.5, speed: 50 }));
  var o = at(s, 2);
  {
    var a = (u) => {
      var d = zm(), f = rt(d, true);
      it(d), Lt((h) => {
        ti(d, 1, h), Qn(f, n.subtitle);
      }, [() => $r(xe("px-1 text-base text-black tabular-nums opacity-50 md:px-2.5 md:text-xl", n.qrLink && p(r).clientHeight > 40 ? "pr-17.5 md:pr-0" : "pr-0"))]), P(u, d);
    };
    Z(o, (u) => {
      n.subtitle && u(a);
    });
  }
  var c = at(o, 2);
  {
    var l = (u) => {
      var d = Hm(), f = rt(d), h = rt(f);
      rc(h, { get shareUrl() {
        return n.qrLink;
      }, class: "relative z-100" }), it(f), it(d), P(u, d);
    };
    Z(c, (u) => {
      n.qrLink && u(l);
    });
  }
  it(i), Lt((u) => ti(s, 1, u), [() => $r(xe("text-3xl leading-[1.3ch] text-black! select-none [word-spacing:-0.5ch] text-box-trim md:text-5xl md:leading-[1.44ch] md:-tracking-[0.15ch] md:text-box-normal", n.qrLink ? "pr-17.5 md:pr-22.5" : "pr-0"))]), P(e, i), z();
}
function Um(e, t) {
  W(t, true);
  const n = new Ca();
  ka(n);
  var r = R(), i = V(r);
  q(i, () => t.children), P(e, r), z();
}
const Gm = (e, t) => {
  let n = () => t == null ? void 0 : t().href, r = () => t == null ? void 0 : t().text;
  var i = Ym(), s = rt(i, true);
  it(i), Lt(() => {
    fn(i, "href", n()), Qn(s, r());
  }), P(e, i);
};
var Ym = $('<a class="focused:text-black pointer-events-auto z-50 flex-none bg-primary px-1 text-base text-primary-foreground uppercase select-none hover:bg-foreground hover:text-black focus:bg-foreground"> </a>'), Xm = $('<link rel="icon"/><!>', 1), Zm = $('<div class="grid-bg h-svh w-svw svelte-12qhfyh"></div> <div class="relative grid h-svh w-svw grid-cols-1 grid-rows-1 overflow-x-clip overflow-y-hidden overscroll-contain"><div class="deck pointer-events-none grid svelte-12qhfyh"><!> <nav class="pointer-events-auto fixed inset-x-0 bottom-0 z-110 flex scrollbar-none flex-row items-end justify-start gap-x-2.5 gap-y-4.5 overflow-x-auto px-2.5 pb-2.5 [grid-area:footer] *:leading-snug md:fixed md:inset-x-auto md:top-0 md:bottom-0 md:left-0 md:h-full md:flex-col md:items-start md:justify-start md:pt-80 md:pb-0"><!> <!> <!></nav></div> <div class="deck-wrapper pointer-events-none grid grid-cols-subgrid grid-rows-subgrid overflow-x-hidden md:overflow-x-visible! svelte-12qhfyh"><!></div></div>', 1), Jm = $("<!> <!>", 1);
function vg(e, t) {
  W(t, true), Fa((d) => {
    if (document.startViewTransition) return new Promise((f) => {
      document.startViewTransition(async () => {
        f(), await d.complete;
      });
    });
  });
  const n = { peer: `wss://cloud.jazz.tools/?key=${el.PUBLIC_JAZZ_API_KEY}`, when: "always" }, r = F(() => ii ? ii.webManifest.linkTag : ""), i = [{ href: "/create-deck", text: ac() }, { href: "/create-card", text: cc() }, { href: "/decks", text: lc() }, { href: "/cards", text: uc() }, { href: "/add", text: dc() }];
  let s = F(or);
  const o = { en: Qd(), jp: ef() }, a = ic.map((d) => ({ code: d, label: o[d] ?? d.toUpperCase() }));
  var c = Jm();
  ps("12qhfyh", (d) => {
    var f = Xm(), h = V(f), m = at(h);
    gs(m, () => p(r)), Lt(() => fn(h, "href", nl)), P(d, f);
  });
  var l = V(c);
  tl(l, {});
  var u = at(l, 2);
  mc(u, { get sync() {
    return n;
  }, get onAnonymousAccountDiscarded() {
    return Oa;
  }, enableSSR: true, guestMode: false, get AccountSchema() {
    return Pa;
  }, children: (d, f) => {
    gc(d, { get betterAuthClient() {
      return wa;
    }, children: (h, m) => {
      Um(h, { children: (g, y) => {
        var v = Zm(), T = at(V(v), 2), x = rt(T), b = rt(x);
        jm(b, {});
        var w = at(b, 2), k = rt(w);
        Xd(k, {});
        var C = at(k, 2);
        ns(C, 17, () => i, ba, (B, j) => {
          Gm(B, () => p(j));
        });
        var M = at(C, 2);
        Ud(M, { get languages() {
          return a;
        }, onChange: (B) => {
          sc(B) && oc(B);
        }, get value() {
          return p(s);
        }, set value(B) {
          A(s, B);
        } }), it(w), it(x);
        var D = at(x, 2), _ = rt(D);
        q(_, () => t.children), it(D), it(T), P(g, v);
      }, $$slots: { default: true } });
    }, $$slots: { default: true } });
  }, $$slots: { default: true } }), P(e, c), z();
}
export {
  vg as component
};
