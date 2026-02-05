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
var _e, _r2, _e2, _r3;
import { bn as mr, k as O, y as Br, x as Wr, g as se, a4 as Hr, z as Ur, H as Dr, A as Ze, B as Ce, C as te, ak as de, am as Yr, aU as qr, O as Je, i as ve, an as ie, aX as Xr, aO as Ve, b2 as gr, P as Qe, Q as Kr, bo as Zr, bp as Jr, bq as Qr, ap as Te, br as j, aW as br, ao as hr, bs as Ie, aK as et, bt as rt, aN as tt, aB as we, aI as ot, N as vr, bu as wr, bv as nt, bw as yr, q as $e, bx as st, by as it, aZ as at, l as lt, o as ct, bz as ut, bA as ft, bB as dt, X as pt, bC as mt, W as gt, bD as bt, bE as ht, bF as vt, bG as wt, h as yt, _ as kt, a5 as xt, Z as At, m as Oe, al as St, bh as er, F as Et, u as _t } from "./Cerututf.js";
import { c as Ct, n as Tt, d as It } from "./C-CTaGP6.js";
function Rt() {
  return Symbol(mr);
}
function kn(e, r) {
  return r;
}
function zt(e, r, t) {
  for (var o = [], n = r.length, s, i = r.length, l = 0; l < n; l++) {
    let w = r[l];
    hr(w, () => {
      if (s) {
        if (s.pending.delete(w), s.done.add(w), s.pending.size === 0) {
          var d = e.outrogroups;
          Pe(Ve(s.done)), d.delete(s), d.size === 0 && (e.outrogroups = null);
        }
      } else i -= 1;
    }, false);
  }
  if (i === 0) {
    var a = o.length === 0 && t !== null;
    if (a) {
      var u = t, f = u.parentNode;
      tt(f), f.append(u), e.items.clear();
    }
    Pe(r, !a);
  } else s = { pending: new Set(r), done: /* @__PURE__ */ new Set() }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Pe(e, r = true) {
  for (var t = 0; t < e.length; t++) we(e[t], r);
}
var rr;
function xn(e, r, t, o, n, s = null) {
  var i = e, l = /* @__PURE__ */ new Map(), a = (r & wr) !== 0;
  if (a) {
    var u = e;
    i = O ? Ce(ot(u)) : u.appendChild(Te());
  }
  O && Br();
  var f = null, w = Hr(() => {
    var v = t();
    return gr(v) ? v : v == null ? [] : Ve(v);
  }), d, x = true;
  function h() {
    c.fallback = f, Mt(c, d, i, r, o), f !== null && (d.length === 0 ? (f.f & j) === 0 ? br(f) : (f.f ^= j, ee(f, null, i)) : hr(f, () => {
      f = null;
    }));
  }
  var b = Wr(() => {
    d = se(w);
    var v = d.length;
    let N = false;
    if (O) {
      var z = Ur(i) === Dr;
      z !== (v === 0) && (i = Ze(), Ce(i), te(false), N = true);
    }
    for (var _ = /* @__PURE__ */ new Set(), R = ve, A = Xr(), k = 0; k < v; k += 1) {
      O && de.nodeType === Yr && de.data === qr && (i = de, N = true, te(false));
      var p = d[k], C = o(p, k), E = x ? null : l.get(C);
      E ? (E.v && Je(E.v, p), E.i && Je(E.i, k), A && R.skipped_effects.delete(E.e)) : (E = Nt(l, x ? i : rr ?? (rr = Te()), p, C, k, n, r, t), x || (E.e.f |= j), l.set(C, E)), _.add(C);
    }
    if (v === 0 && s && !f && (x ? f = ie(() => s(i)) : (f = ie(() => s(rr ?? (rr = Te()))), f.f |= j)), O && v > 0 && Ce(Ze()), !x) if (A) {
      for (const [U, F] of l) _.has(U) || R.skipped_effects.add(F.e);
      R.oncommit(h), R.ondiscard(() => {
      });
    } else h();
    N && te(true), se(w);
  }), c = { effect: b, items: l, outrogroups: null, fallback: f };
  x = false, O && (i = de);
}
function K(e) {
  for (; e !== null && (e.f & rt) === 0; ) e = e.next;
  return e;
}
function Mt(e, r, t, o, n) {
  var _a, _b, _c, _d, _e3, _f, _g, _h, _i;
  var s = (o & nt) !== 0, i = r.length, l = e.items, a = K(e.effect.first), u, f = null, w, d = [], x = [], h, b, c, v;
  if (s) for (v = 0; v < i; v += 1) h = r[v], b = n(h, v), c = l.get(b).e, (c.f & j) === 0 && ((_b = (_a = c.nodes) == null ? void 0 : _a.a) == null ? void 0 : _b.measure(), (w ?? (w = /* @__PURE__ */ new Set())).add(c));
  for (v = 0; v < i; v += 1) {
    if (h = r[v], b = n(h, v), c = l.get(b).e, e.outrogroups !== null) for (const E of e.outrogroups) E.pending.delete(c), E.done.delete(c);
    if ((c.f & j) !== 0) if (c.f ^= j, c === a) ee(c, null, t);
    else {
      var N = f ? f.next : a;
      c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), V(e, f, c), V(e, c, N), ee(c, N, t), f = c, d = [], x = [], a = K(f.next);
      continue;
    }
    if ((c.f & Ie) !== 0 && (br(c), s && ((_d = (_c = c.nodes) == null ? void 0 : _c.a) == null ? void 0 : _d.unfix(), (w ?? (w = /* @__PURE__ */ new Set())).delete(c))), c !== a) {
      if (u !== void 0 && u.has(c)) {
        if (d.length < x.length) {
          var z = x[0], _;
          f = z.prev;
          var R = d[0], A = d[d.length - 1];
          for (_ = 0; _ < d.length; _ += 1) ee(d[_], z, t);
          for (_ = 0; _ < x.length; _ += 1) u.delete(x[_]);
          V(e, R.prev, A.next), V(e, f, R), V(e, A, z), a = z, f = A, v -= 1, d = [], x = [];
        } else u.delete(c), ee(c, a, t), V(e, c.prev, c.next), V(e, c, f === null ? e.effect.first : f.next), V(e, f, c), f = c;
        continue;
      }
      for (d = [], x = []; a !== null && a !== c; ) (u ?? (u = /* @__PURE__ */ new Set())).add(a), x.push(a), a = K(a.next);
      if (a === null) continue;
    }
    (c.f & j) === 0 && d.push(c), f = c, a = K(c.next);
  }
  if (e.outrogroups !== null) {
    for (const E of e.outrogroups) E.pending.size === 0 && (Pe(Ve(E.done)), (_e3 = e.outrogroups) == null ? void 0 : _e3.delete(E));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || u !== void 0) {
    var k = [];
    if (u !== void 0) for (c of u) (c.f & Ie) === 0 && k.push(c);
    for (; a !== null; ) (a.f & Ie) === 0 && a !== e.fallback && k.push(a), a = K(a.next);
    var p = k.length;
    if (p > 0) {
      var C = (o & wr) !== 0 && i === 0 ? t : null;
      if (s) {
        for (v = 0; v < p; v += 1) (_g = (_f = k[v].nodes) == null ? void 0 : _f.a) == null ? void 0 : _g.measure();
        for (v = 0; v < p; v += 1) (_i = (_h = k[v].nodes) == null ? void 0 : _h.a) == null ? void 0 : _i.fix();
      }
      zt(e, k, C);
    }
  }
  s && vr(() => {
    var _a2, _b2;
    if (w !== void 0) for (c of w) (_b2 = (_a2 = c.nodes) == null ? void 0 : _a2.a) == null ? void 0 : _b2.apply();
  });
}
function Nt(e, r, t, o, n, s, i, l) {
  var a = (i & Jr) !== 0 ? (i & Qr) === 0 ? Kr(t, false, false) : Qe(t) : null, u = (i & Zr) !== 0 ? Qe(n) : null;
  return { v: a, i: u, e: ie(() => (s(r, a ?? t, u ?? n, l), () => {
    e.delete(o);
  })) };
}
function ee(e, r, t) {
  if (e.nodes) for (var o = e.nodes.start, n = e.nodes.end, s = r && (r.f & j) === 0 ? r.nodes.start : t; o !== null; ) {
    var i = et(o);
    if (s.before(o), o === n) return;
    o = i;
  }
}
function V(e, r, t) {
  r === null ? e.effect.first = t : r.next = t, t === null ? e.effect.last = r : t.prev = r;
}
function Ot(e, r) {
  var t = void 0, o;
  yr(() => {
    t !== (t = r()) && (o && (we(o), o = null), t && (o = ie(() => {
      $e(() => t(e));
    })));
  });
}
function kr(e) {
  var r, t, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (r = 0; r < n; r++) e[r] && (t = kr(e[r])) && (o && (o += " "), o += t);
  } else for (t in e) e[t] && (o && (o += " "), o += t);
  return o;
}
function oe() {
  for (var e, r, t = 0, o = "", n = arguments.length; t < n; t++) (e = arguments[t]) && (r = kr(e)) && (o && (o += " "), o += r);
  return o;
}
function Pt(e) {
  return typeof e == "object" ? oe(e) : e ?? "";
}
const tr = [...` 	
\r\f\xA0\v\uFEFF`];
function Lt(e, r, t) {
  var o = e == null ? "" : "" + e;
  if (r && (o = o ? o + " " + r : r), t) {
    for (var n in t) if (t[n]) o = o ? o + " " + n : n;
    else if (o.length) for (var s = n.length, i = 0; (i = o.indexOf(n, i)) >= 0; ) {
      var l = i + s;
      (i === 0 || tr.includes(o[i - 1])) && (l === o.length || tr.includes(o[l])) ? o = (i === 0 ? "" : o.substring(0, i)) + o.substring(l + 1) : i = l;
    }
  }
  return o === "" ? null : o;
}
function or(e, r = false) {
  var t = r ? " !important;" : ";", o = "";
  for (var n in e) {
    var s = e[n];
    s != null && s !== "" && (o += " " + n + ": " + s + t);
  }
  return o;
}
function Re(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Gt(e, r) {
  if (r) {
    var t = "", o, n;
    if (Array.isArray(r) ? (o = r[0], n = r[1]) : o = r, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = false, i = 0, l = false, a = [];
      o && a.push(...Object.keys(o).map(Re)), n && a.push(...Object.keys(n).map(Re));
      var u = 0, f = -1;
      const b = e.length;
      for (var w = 0; w < b; w++) {
        var d = e[w];
        if (l ? d === "/" && e[w - 1] === "*" && (l = false) : s ? s === d && (s = false) : d === "/" && e[w + 1] === "*" ? l = true : d === '"' || d === "'" ? s = d : d === "(" ? i++ : d === ")" && i--, !l && s === false && i === 0) {
          if (d === ":" && f === -1) f = w;
          else if (d === ";" || w === b - 1) {
            if (f !== -1) {
              var x = Re(e.substring(u, f).trim());
              if (!a.includes(x)) {
                d !== ";" && w++;
                var h = e.substring(u, w).trim();
                t += " " + h + ";";
              }
            }
            u = w + 1, f = -1;
          }
        }
      }
    }
    return o && (t += or(o)), n && (t += or(n, true)), t = t.trim(), t === "" ? null : t;
  }
  return e == null ? null : String(e);
}
function jt(e, r, t, o, n, s) {
  var i = e.__className;
  if (O || i !== t || i === void 0) {
    var l = Lt(t, o, s);
    (!O || l !== e.getAttribute("class")) && (l == null ? e.removeAttribute("class") : r ? e.className = l : e.setAttribute("class", l)), e.__className = t;
  } else if (s && n !== s) for (var a in s) {
    var u = !!s[a];
    (n == null || u !== !!n[a]) && e.classList.toggle(a, u);
  }
  return s;
}
function ze(e, r = {}, t, o) {
  for (var n in t) {
    var s = t[n];
    r[n] !== s && (t[n] == null ? e.style.removeProperty(n) : e.style.setProperty(n, s, o));
  }
}
function Ft(e, r, t, o) {
  var n = e.__style;
  if (O || n !== r) {
    var s = Gt(r, o);
    (!O || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = r;
  } else o && (Array.isArray(o) ? (ze(e, t == null ? void 0 : t[0], o[0]), ze(e, t == null ? void 0 : t[1], o[1], "important")) : ze(e, t, o));
  return o;
}
function ye(e, r, t = false) {
  if (e.multiple) {
    if (r == null) return;
    if (!gr(r)) return st();
    for (var o of e.options) o.selected = r.includes(ne(o));
    return;
  }
  for (o of e.options) {
    var n = ne(o);
    if (it(n, r)) {
      o.selected = true;
      return;
    }
  }
  (!t || r !== void 0) && (e.selectedIndex = -1);
}
function xr(e) {
  var r = new MutationObserver(() => {
    ye(e, e.__value);
  });
  r.observe(e, { childList: true, subtree: true, attributes: true, attributeFilter: ["value"] }), at(() => {
    r.disconnect();
  });
}
function An(e, r, t = r) {
  var o = /* @__PURE__ */ new WeakSet(), n = true;
  lt(e, "change", (s) => {
    var i = s ? "[selected]" : ":checked", l;
    if (e.multiple) l = [].map.call(e.querySelectorAll(i), ne);
    else {
      var a = e.querySelector(i) ?? e.querySelector("option:not([disabled])");
      l = a && ne(a);
    }
    t(l), ve !== null && o.add(ve);
  }), $e(() => {
    var s = r();
    if (e === document.activeElement) {
      var i = ct ?? ve;
      if (o.has(i)) return;
    }
    if (ye(e, s, n), n && s === void 0) {
      var l = e.querySelector(":checked");
      l !== null && (s = ne(l), t(s));
    }
    e.__value = s, n = false;
  }), xr(e);
}
function ne(e) {
  return "__value" in e ? e.__value : e.value;
}
const Z = Symbol("class"), J = Symbol("style"), Ar = Symbol("is custom element"), Sr = Symbol("is html");
function Vt(e) {
  if (O) {
    var r = false, t = () => {
      if (!r) {
        if (r = true, e.hasAttribute("value")) {
          var o = e.value;
          ke(e, "value", null), e.value = o;
        }
        if (e.hasAttribute("checked")) {
          var n = e.checked;
          ke(e, "checked", null), e.checked = n;
        }
      }
    };
    e.__on_r = t, vr(t), bt();
  }
}
function Sn(e, r) {
  var t = Be(e);
  t.value === (t.value = r ?? void 0) || e.value === r && (r !== 0 || e.nodeName !== "PROGRESS") || (e.value = r ?? "");
}
function $t(e, r) {
  r ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ke(e, r, t, o) {
  var n = Be(e);
  O && (n[r] = e.getAttribute(r), r === "src" || r === "srcset" || r === "href" && e.nodeName === "LINK") || n[r] !== (n[r] = t) && (r === "loading" && (e[vt] = t), t == null ? e.removeAttribute(r) : typeof t != "string" && Er(e).includes(r) ? e[r] = t : e.setAttribute(r, t));
}
function Bt(e, r, t, o, n = false, s = false) {
  if (O && n && e.tagName === "INPUT") {
    var i = e, l = i.type === "checkbox" ? "defaultChecked" : "defaultValue";
    l in t || Vt(i);
  }
  var a = Be(e), u = a[Ar], f = !a[Sr];
  let w = O && u;
  w && te(false);
  var d = r || {}, x = e.tagName === "OPTION";
  for (var h in r) h in t || (t[h] = null);
  t.class ? t.class = Pt(t.class) : (o || t[Z]) && (t.class = null), t[J] && (t.style ?? (t.style = null));
  var b = Er(e);
  for (const A in t) {
    let k = t[A];
    if (x && A === "value" && k == null) {
      e.value = e.__value = "", d[A] = k;
      continue;
    }
    if (A === "class") {
      var c = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      jt(e, c, k, o, r == null ? void 0 : r[Z], t[Z]), d[A] = k, d[Z] = t[Z];
      continue;
    }
    if (A === "style") {
      Ft(e, k, r == null ? void 0 : r[J], t[J]), d[A] = k, d[J] = t[J];
      continue;
    }
    var v = d[A];
    if (!(k === v && !(k === void 0 && e.hasAttribute(A)))) {
      d[A] = k;
      var N = A[0] + A[1];
      if (N !== "$$") if (N === "on") {
        const p = {}, C = "$$" + A;
        let E = A.slice(2);
        var z = It(E);
        if (Ct(E) && (E = E.slice(0, -7), p.capture = true), !z && v) {
          if (k != null) continue;
          e.removeEventListener(E, d[C], p), d[C] = null;
        }
        if (k != null) if (z) e[`__${E}`] = k, pt([E]);
        else {
          let U = function(F) {
            d[A].call(this, F);
          };
          d[C] = dt(E, e, U, p);
        }
        else z && (e[`__${E}`] = void 0);
      } else if (A === "style") ke(e, A, k);
      else if (A === "autofocus") mt(e, !!k);
      else if (!u && (A === "__value" || A === "value" && k != null)) e.value = e.__value = k;
      else if (A === "selected" && x) $t(e, k);
      else {
        var _ = A;
        f || (_ = Tt(_));
        var R = _ === "defaultValue" || _ === "defaultChecked";
        if (k == null && !u && !R) if (a[A] = null, _ === "value" || _ === "checked") {
          let p = e;
          const C = r === void 0;
          if (_ === "value") {
            let E = p.defaultValue;
            p.removeAttribute(_), p.defaultValue = E, p.value = p.__value = C ? E : null;
          } else {
            let E = p.defaultChecked;
            p.removeAttribute(_), p.defaultChecked = E, p.checked = C ? E : false;
          }
        } else e.removeAttribute(A);
        else R || b.includes(_) && (u || typeof k != "string") ? (e[_] = k, _ in a && (a[_] = gt)) : typeof k != "function" && ke(e, _, k);
      }
    }
  }
  return w && te(true), d;
}
function En(e, r, t = [], o = [], n = [], s, i = false, l = false) {
  ut(n, t, o, (a) => {
    var u = void 0, f = {}, w = e.nodeName === "SELECT", d = false;
    if (yr(() => {
      var h = r(...a.map(se)), b = Bt(e, u, h, s, i, l);
      d && w && "value" in h && ye(e, h.value);
      for (let v of Object.getOwnPropertySymbols(f)) h[v] || we(f[v]);
      for (let v of Object.getOwnPropertySymbols(h)) {
        var c = h[v];
        v.description === mr && (!u || c !== u[v]) && (f[v] && we(f[v]), f[v] = ie(() => Ot(e, () => c))), b[v] = c;
      }
      u = b;
    }), w) {
      var x = e;
      $e(() => {
        ye(x, u.value, true), xr(x);
      });
    }
    d = true;
  });
}
function Be(e) {
  return e.__attributes ?? (e.__attributes = { [Ar]: e.nodeName.includes("-"), [Sr]: e.namespaceURI === ft });
}
var nr = /* @__PURE__ */ new Map();
function Er(e) {
  var r = e.getAttribute("is") || e.nodeName, t = nr.get(r);
  if (t) return t;
  nr.set(r, t = []);
  for (var o, n = e, s = Element.prototype; s !== n; ) {
    o = wt(n);
    for (var i in o) o[i].set && t.push(i);
    n = ht(n);
  }
  return t;
}
var sr = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Wt = /\n/g, Ht = /^\s*/, Ut = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Dt = /^:\s*/, Yt = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, qt = /^[;\s]*/, Xt = /^\s+|\s+$/g, Kt = `
`, ir = "/", ar = "*", H = "", Zt = "comment", Jt = "declaration";
function Qt(e, r) {
  if (typeof e != "string") throw new TypeError("First argument must be a string");
  if (!e) return [];
  r = r || {};
  var t = 1, o = 1;
  function n(h) {
    var b = h.match(Wt);
    b && (t += b.length);
    var c = h.lastIndexOf(Kt);
    o = ~c ? h.length - c : o + h.length;
  }
  function s() {
    var h = { line: t, column: o };
    return function(b) {
      return b.position = new i(h), u(), b;
    };
  }
  function i(h) {
    this.start = h, this.end = { line: t, column: o }, this.source = r.source;
  }
  i.prototype.content = e;
  function l(h) {
    var b = new Error(r.source + ":" + t + ":" + o + ": " + h);
    if (b.reason = h, b.filename = r.source, b.line = t, b.column = o, b.source = e, !r.silent) throw b;
  }
  function a(h) {
    var b = h.exec(e);
    if (b) {
      var c = b[0];
      return n(c), e = e.slice(c.length), b;
    }
  }
  function u() {
    a(Ht);
  }
  function f(h) {
    var b;
    for (h = h || []; b = w(); ) b !== false && h.push(b);
    return h;
  }
  function w() {
    var h = s();
    if (!(ir != e.charAt(0) || ar != e.charAt(1))) {
      for (var b = 2; H != e.charAt(b) && (ar != e.charAt(b) || ir != e.charAt(b + 1)); ) ++b;
      if (b += 2, H === e.charAt(b - 1)) return l("End of comment missing");
      var c = e.slice(2, b - 2);
      return o += 2, n(c), e = e.slice(b), o += 2, h({ type: Zt, comment: c });
    }
  }
  function d() {
    var h = s(), b = a(Ut);
    if (b) {
      if (w(), !a(Dt)) return l("property missing ':'");
      var c = a(Yt), v = h({ type: Jt, property: lr(b[0].replace(sr, H)), value: c ? lr(c[0].replace(sr, H)) : H });
      return a(qt), v;
    }
  }
  function x() {
    var h = [];
    f(h);
    for (var b; b = d(); ) b !== false && (h.push(b), f(h));
    return h;
  }
  return u(), x();
}
function lr(e) {
  return e ? e.replace(Xt, H) : H;
}
function eo(e, r) {
  let t = null;
  if (!e || typeof e != "string") return t;
  const o = Qt(e), n = typeof r == "function";
  return o.forEach((s) => {
    if (s.type !== "declaration") return;
    const { property: i, value: l } = s;
    n ? r(i, l, s) : l && (t = t || {}, t[i] = l);
  }), t;
}
function ro(e) {
  return typeof e == "function";
}
function to(e) {
  return e !== null && typeof e == "object";
}
const oo = ["string", "number", "bigint", "boolean"];
function Le(e) {
  return e == null || oo.includes(typeof e) ? true : Array.isArray(e) ? e.every((r) => Le(r)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : false;
}
const ae = Symbol("box"), We = Symbol("is-writable");
function no(e, r) {
  const t = yt(e);
  return r ? { [ae]: true, [We]: true, get current() {
    return se(t);
  }, set current(o) {
    r(o);
  } } : { [ae]: true, get current() {
    return e();
  } };
}
function Ae(e) {
  return to(e) && ae in e;
}
function _r(e) {
  return Ae(e) && We in e;
}
function _n(e) {
  return Ae(e) ? e : ro(e) ? no(e) : so(e);
}
function Cn(e) {
  return Object.entries(e).reduce((r, [t, o]) => Ae(o) ? (_r(o) ? Object.defineProperty(r, t, { get() {
    return o.current;
  }, set(n) {
    o.current = n;
  } }) : Object.defineProperty(r, t, { get() {
    return o.current;
  } }), r) : Object.assign(r, { [t]: o }), {});
}
function Tn(e) {
  return _r(e) ? { [ae]: true, get current() {
    return e.current;
  } } : e;
}
function so(e) {
  let r = kt(xt(e));
  return { [ae]: true, [We]: true, get current() {
    return se(r);
  }, set current(t) {
    At(r, t, true);
  } };
}
function io(...e) {
  return function(r) {
    var _a;
    for (const t of e) if (t) {
      if (r.defaultPrevented) return;
      typeof t == "function" ? t.call(this, r) : (_a = t.current) == null ? void 0 : _a.call(this, r);
    }
  };
}
const ao = /\d/, lo = ["-", "_", "/", "."];
function co(e = "") {
  if (!ao.test(e)) return e !== e.toLowerCase();
}
function uo(e) {
  const r = [];
  let t = "", o, n;
  for (const s of e) {
    const i = lo.includes(s);
    if (i === true) {
      r.push(t), t = "", o = void 0;
      continue;
    }
    const l = co(s);
    if (n === false) {
      if (o === false && l === true) {
        r.push(t), t = s, o = l;
        continue;
      }
      if (o === true && l === false && t.length > 1) {
        const a = t.at(-1);
        r.push(t.slice(0, Math.max(0, t.length - 1))), t = a + s, o = l;
        continue;
      }
    }
    t += s, o = l, n = i;
  }
  return r.push(t), r;
}
function Cr(e) {
  return e ? uo(e).map((r) => po(r)).join("") : "";
}
function fo(e) {
  return mo(Cr(e || ""));
}
function po(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function mo(e) {
  return e ? e[0].toLowerCase() + e.slice(1) : "";
}
function pe(e) {
  if (!e) return {};
  const r = {};
  function t(o, n) {
    if (o.startsWith("-moz-") || o.startsWith("-webkit-") || o.startsWith("-ms-") || o.startsWith("-o-")) {
      r[Cr(o)] = n;
      return;
    }
    if (o.startsWith("--")) {
      r[o] = n;
      return;
    }
    r[fo(o)] = n;
  }
  return eo(e, t), r;
}
function go(...e) {
  return (...r) => {
    for (const t of e) typeof t == "function" && t(...r);
  };
}
function bo(e, r) {
  const t = RegExp(e, "g");
  return (o) => {
    if (typeof o != "string") throw new TypeError(`expected an argument of type string, but got ${typeof o}`);
    return o.match(t) ? o.replace(t, r) : o;
  };
}
const ho = bo(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function vo(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map((r) => `${ho(r)}: ${e[r]};`).join(`
`);
}
function wo(e = {}) {
  return vo(e).replace(`
`, " ");
}
const yo = ["onabort", "onanimationcancel", "onanimationend", "onanimationiteration", "onanimationstart", "onauxclick", "onbeforeinput", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncompositionend", "oncompositionstart", "oncompositionupdate", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onfocusin", "onfocusout", "onformdata", "ongotpointercapture", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onlostpointercapture", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onpaste", "onpause", "onplay", "onplaying", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onselectionchange", "onselectstart", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "ontransitioncancel", "ontransitionend", "ontransitionrun", "ontransitionstart", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel"], ko = new Set(yo);
function xo(e) {
  return ko.has(e);
}
function In(...e) {
  const r = { ...e[0] };
  for (let t = 1; t < e.length; t++) {
    const o = e[t];
    if (o) {
      for (const n of Object.keys(o)) {
        const s = r[n], i = o[n], l = typeof s == "function", a = typeof i == "function";
        if (l && xo(n)) {
          const u = s, f = i;
          r[n] = io(u, f);
        } else if (l && a) r[n] = go(s, i);
        else if (n === "class") {
          const u = Le(s), f = Le(i);
          u && f ? r[n] = oe(s, i) : u ? r[n] = oe(s) : f && (r[n] = oe(i));
        } else if (n === "style") {
          const u = typeof s == "object", f = typeof i == "object", w = typeof s == "string", d = typeof i == "string";
          if (u && f) r[n] = { ...s, ...i };
          else if (u && d) {
            const x = pe(i);
            r[n] = { ...s, ...x };
          } else if (w && f) {
            const x = pe(s);
            r[n] = { ...x, ...i };
          } else if (w && d) {
            const x = pe(s), h = pe(i);
            r[n] = { ...x, ...h };
          } else u ? r[n] = s : f ? r[n] = i : w ? r[n] = s : d && (r[n] = i);
        } else r[n] = i !== void 0 ? i : s;
      }
      for (const n of Object.getOwnPropertySymbols(o)) {
        const s = r[n], i = o[n];
        r[n] = i !== void 0 ? i : s;
      }
    }
  }
  return typeof r.style == "object" && (r.style = wo(r.style).replaceAll(`
`, " ")), r.hidden === false && (r.hidden = void 0, delete r.hidden), r.disabled === false && (r.disabled = void 0, delete r.disabled), r;
}
function Rn(e, r) {
  return { [Rt()]: (t) => Ae(e) ? (e.current = t, Oe(() => r == null ? void 0 : r(t)), () => {
    "isConnected" in t && t.isConnected || (e.current = null, r == null ? void 0 : r(null));
  }) : (e(t), Oe(() => r == null ? void 0 : r(t)), () => {
    "isConnected" in t && t.isConnected || (e(null), r == null ? void 0 : r(null));
  }) };
}
function zn(e) {
  return e ? "true" : "false";
}
function Mn(e) {
  return e ? "" : void 0;
}
function Nn(e) {
  return e ? "open" : "closed";
}
function On(e, r) {
  return e ? "true" : "false";
}
class Ao {
  constructor(r) {
    __privateAdd(this, _e);
    __privateAdd(this, _r2);
    __publicField(this, "attrs");
    __privateSet(this, _e, r.getVariant ? r.getVariant() : null), __privateSet(this, _r2, __privateGet(this, _e) ? `data-${__privateGet(this, _e)}-` : `data-${r.component}-`), this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(r.parts.map((t) => [t, this.getAttr(t)]));
  }
  getAttr(r, t) {
    return t ? `data-${t}-${r}` : `${__privateGet(this, _r2)}${r}`;
  }
  selector(r, t) {
    return `[${this.getAttr(r, t)}]`;
  }
}
_e = new WeakMap();
_r2 = new WeakMap();
function Pn(e) {
  const r = new Ao(e);
  return { ...r.attrs, selector: r.selector, getAttr: r.getAttr };
}
function Ln(e, r) {
  return `bits-${e}`;
}
const So = (e, r) => {
  const t = new Array(e.length + r.length);
  for (let o = 0; o < e.length; o++) t[o] = e[o];
  for (let o = 0; o < r.length; o++) t[e.length + o] = r[o];
  return t;
}, Eo = (e, r) => ({ classGroupId: e, validator: r }), Tr = (e = /* @__PURE__ */ new Map(), r = null, t) => ({ nextPart: e, validators: r, classGroupId: t }), xe = "-", cr = [], _o = "arbitrary..", Co = (e) => {
  const r = Io(e), { conflictingClassGroups: t, conflictingClassGroupModifiers: o } = e;
  return { getClassGroupId: (i) => {
    if (i.startsWith("[") && i.endsWith("]")) return To(i);
    const l = i.split(xe), a = l[0] === "" && l.length > 1 ? 1 : 0;
    return Ir(l, a, r);
  }, getConflictingClassGroupIds: (i, l) => {
    if (l) {
      const a = o[i], u = t[i];
      return a ? u ? So(u, a) : a : u || cr;
    }
    return t[i] || cr;
  } };
}, Ir = (e, r, t) => {
  if (e.length - r === 0) return t.classGroupId;
  const n = e[r], s = t.nextPart.get(n);
  if (s) {
    const u = Ir(e, r + 1, s);
    if (u) return u;
  }
  const i = t.validators;
  if (i === null) return;
  const l = r === 0 ? e.join(xe) : e.slice(r).join(xe), a = i.length;
  for (let u = 0; u < a; u++) {
    const f = i[u];
    if (f.validator(l)) return f.classGroupId;
  }
}, To = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const r = e.slice(1, -1), t = r.indexOf(":"), o = r.slice(0, t);
  return o ? _o + o : void 0;
})(), Io = (e) => {
  const { theme: r, classGroups: t } = e;
  return Ro(t, r);
}, Ro = (e, r) => {
  const t = Tr();
  for (const o in e) {
    const n = e[o];
    He(n, t, o, r);
  }
  return t;
}, He = (e, r, t, o) => {
  const n = e.length;
  for (let s = 0; s < n; s++) {
    const i = e[s];
    zo(i, r, t, o);
  }
}, zo = (e, r, t, o) => {
  if (typeof e == "string") {
    Mo(e, r, t);
    return;
  }
  if (typeof e == "function") {
    No(e, r, t, o);
    return;
  }
  Oo(e, r, t, o);
}, Mo = (e, r, t) => {
  const o = e === "" ? r : Rr(r, e);
  o.classGroupId = t;
}, No = (e, r, t, o) => {
  if (Po(e)) {
    He(e(o), r, t, o);
    return;
  }
  r.validators === null && (r.validators = []), r.validators.push(Eo(t, e));
}, Oo = (e, r, t, o) => {
  const n = Object.entries(e), s = n.length;
  for (let i = 0; i < s; i++) {
    const [l, a] = n[i];
    He(a, Rr(r, l), t, o);
  }
}, Rr = (e, r) => {
  let t = e;
  const o = r.split(xe), n = o.length;
  for (let s = 0; s < n; s++) {
    const i = o[s];
    let l = t.nextPart.get(i);
    l || (l = Tr(), t.nextPart.set(i, l)), t = l;
  }
  return t;
}, Po = (e) => "isThemeGetter" in e && e.isThemeGetter === true, Lo = (e) => {
  if (e < 1) return { get: () => {
  }, set: () => {
  } };
  let r = 0, t = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const n = (s, i) => {
    t[s] = i, r++, r > e && (r = 0, o = t, t = /* @__PURE__ */ Object.create(null));
  };
  return { get(s) {
    let i = t[s];
    if (i !== void 0) return i;
    if ((i = o[s]) !== void 0) return n(s, i), i;
  }, set(s, i) {
    s in t ? t[s] = i : n(s, i);
  } };
}, Ge = "!", ur = ":", Go = [], fr = (e, r, t, o, n) => ({ modifiers: e, hasImportantModifier: r, baseClassName: t, maybePostfixModifierPosition: o, isExternal: n }), jo = (e) => {
  const { prefix: r, experimentalParseClassName: t } = e;
  let o = (n) => {
    const s = [];
    let i = 0, l = 0, a = 0, u;
    const f = n.length;
    for (let b = 0; b < f; b++) {
      const c = n[b];
      if (i === 0 && l === 0) {
        if (c === ur) {
          s.push(n.slice(a, b)), a = b + 1;
          continue;
        }
        if (c === "/") {
          u = b;
          continue;
        }
      }
      c === "[" ? i++ : c === "]" ? i-- : c === "(" ? l++ : c === ")" && l--;
    }
    const w = s.length === 0 ? n : n.slice(a);
    let d = w, x = false;
    w.endsWith(Ge) ? (d = w.slice(0, -1), x = true) : w.startsWith(Ge) && (d = w.slice(1), x = true);
    const h = u && u > a ? u - a : void 0;
    return fr(s, x, d, h);
  };
  if (r) {
    const n = r + ur, s = o;
    o = (i) => i.startsWith(n) ? s(i.slice(n.length)) : fr(Go, false, i, void 0, true);
  }
  if (t) {
    const n = o;
    o = (s) => t({ className: s, parseClassName: n });
  }
  return o;
}, Fo = (e) => {
  const r = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((t, o) => {
    r.set(t, 1e6 + o);
  }), (t) => {
    const o = [];
    let n = [];
    for (let s = 0; s < t.length; s++) {
      const i = t[s], l = i[0] === "[", a = r.has(i);
      l || a ? (n.length > 0 && (n.sort(), o.push(...n), n = []), o.push(i)) : n.push(i);
    }
    return n.length > 0 && (n.sort(), o.push(...n)), o;
  };
}, Vo = (e) => ({ cache: Lo(e.cacheSize), parseClassName: jo(e), sortModifiers: Fo(e), ...Co(e) }), $o = /\s+/, Bo = (e, r) => {
  const { parseClassName: t, getClassGroupId: o, getConflictingClassGroupIds: n, sortModifiers: s } = r, i = [], l = e.trim().split($o);
  let a = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const f = l[u], { isExternal: w, modifiers: d, hasImportantModifier: x, baseClassName: h, maybePostfixModifierPosition: b } = t(f);
    if (w) {
      a = f + (a.length > 0 ? " " + a : a);
      continue;
    }
    let c = !!b, v = o(c ? h.substring(0, b) : h);
    if (!v) {
      if (!c) {
        a = f + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (v = o(h), !v) {
        a = f + (a.length > 0 ? " " + a : a);
        continue;
      }
      c = false;
    }
    const N = d.length === 0 ? "" : d.length === 1 ? d[0] : s(d).join(":"), z = x ? N + Ge : N, _ = z + v;
    if (i.indexOf(_) > -1) continue;
    i.push(_);
    const R = n(v, c);
    for (let A = 0; A < R.length; ++A) {
      const k = R[A];
      i.push(z + k);
    }
    a = f + (a.length > 0 ? " " + a : a);
  }
  return a;
}, Wo = (...e) => {
  let r = 0, t, o, n = "";
  for (; r < e.length; ) (t = e[r++]) && (o = zr(t)) && (n && (n += " "), n += o);
  return n;
}, zr = (e) => {
  if (typeof e == "string") return e;
  let r, t = "";
  for (let o = 0; o < e.length; o++) e[o] && (r = zr(e[o])) && (t && (t += " "), t += r);
  return t;
}, je = (e, ...r) => {
  let t, o, n, s;
  const i = (a) => {
    const u = r.reduce((f, w) => w(f), e());
    return t = Vo(u), o = t.cache.get, n = t.cache.set, s = l, l(a);
  }, l = (a) => {
    const u = o(a);
    if (u) return u;
    const f = Bo(a, t);
    return n(a, f), f;
  };
  return s = i, (...a) => s(Wo(...a));
}, Ho = [], T = (e) => {
  const r = (t) => t[e] || Ho;
  return r.isThemeGetter = true, r;
}, Mr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Nr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Uo = /^\d+\/\d+$/, Do = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Yo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Xo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ko = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Y = (e) => Uo.test(e), S = (e) => !!e && !Number.isNaN(Number(e)), $ = (e) => !!e && Number.isInteger(Number(e)), Me = (e) => e.endsWith("%") && S(e.slice(0, -1)), G = (e) => Do.test(e), Zo = () => true, Jo = (e) => Yo.test(e) && !qo.test(e), Or = () => false, Qo = (e) => Xo.test(e), en = (e) => Ko.test(e), rn = (e) => !m(e) && !g(e), tn = (e) => q(e, Gr, Or), m = (e) => Mr.test(e), W = (e) => q(e, jr, Jo), Ne = (e) => q(e, ln, S), dr = (e) => q(e, Pr, Or), on = (e) => q(e, Lr, en), me = (e) => q(e, Fr, Qo), g = (e) => Nr.test(e), Q = (e) => X(e, jr), nn = (e) => X(e, cn), pr = (e) => X(e, Pr), sn = (e) => X(e, Gr), an = (e) => X(e, Lr), ge = (e) => X(e, Fr, true), q = (e, r, t) => {
  const o = Mr.exec(e);
  return o ? o[1] ? r(o[1]) : t(o[2]) : false;
}, X = (e, r, t = false) => {
  const o = Nr.exec(e);
  return o ? o[1] ? r(o[1]) : t : false;
}, Pr = (e) => e === "position" || e === "percentage", Lr = (e) => e === "image" || e === "url", Gr = (e) => e === "length" || e === "size" || e === "bg-size", jr = (e) => e === "length", ln = (e) => e === "number", cn = (e) => e === "family-name", Fr = (e) => e === "shadow", Fe = () => {
  const e = T("color"), r = T("font"), t = T("text"), o = T("font-weight"), n = T("tracking"), s = T("leading"), i = T("breakpoint"), l = T("container"), a = T("spacing"), u = T("radius"), f = T("shadow"), w = T("inset-shadow"), d = T("text-shadow"), x = T("drop-shadow"), h = T("blur"), b = T("perspective"), c = T("aspect"), v = T("ease"), N = T("animate"), z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"], R = () => [..._(), g, m], A = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], p = () => [g, m, a], C = () => [Y, "full", "auto", ...p()], E = () => [$, "none", "subgrid", g, m], U = () => ["auto", { span: ["full", $, g, m] }, $, g, m], F = () => [$, "auto", g, m], Ue = () => ["auto", "min", "max", "fr", g, m], Se = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], D = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L = () => ["auto", ...p()], B = () => [Y, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...p()], y = () => [e, g, m], De = () => [..._(), pr, dr, { position: [g, m] }], Ye = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }], qe = () => ["auto", "cover", "contain", sn, tn, { size: [g, m] }], Ee = () => [Me, Q, W], M = () => ["", "none", "full", u, g, m], P = () => ["", S, Q, W], le = () => ["solid", "dashed", "dotted", "double"], Xe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => [S, Me, pr, dr], Ke = () => ["", "none", h, g, m], ce = () => ["none", S, g, m], ue = () => ["none", S, g, m], _e3 = () => [S, g, m], fe = () => [Y, "full", ...p()];
  return { cacheSize: 500, theme: { animate: ["spin", "ping", "pulse", "bounce"], aspect: ["video"], blur: [G], breakpoint: [G], color: [Zo], container: [G], "drop-shadow": [G], ease: ["in", "out", "in-out"], font: [rn], "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"], "inset-shadow": [G], leading: ["none", "tight", "snug", "normal", "relaxed", "loose"], perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"], radius: [G], shadow: [G], spacing: ["px", S], text: [G], "text-shadow": [G], tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"] }, classGroups: { aspect: [{ aspect: ["auto", "square", Y, m, g, c] }], container: ["container"], columns: [{ columns: [S, m, g, l] }], "break-after": [{ "break-after": z() }], "break-before": [{ "break-before": z() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], sr: ["sr-only", "not-sr-only"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: R() }], overflow: [{ overflow: A() }], "overflow-x": [{ "overflow-x": A() }], "overflow-y": [{ "overflow-y": A() }], overscroll: [{ overscroll: k() }], "overscroll-x": [{ "overscroll-x": k() }], "overscroll-y": [{ "overscroll-y": k() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: C() }], "inset-x": [{ "inset-x": C() }], "inset-y": [{ "inset-y": C() }], start: [{ start: C() }], end: [{ end: C() }], top: [{ top: C() }], right: [{ right: C() }], bottom: [{ bottom: C() }], left: [{ left: C() }], visibility: ["visible", "invisible", "collapse"], z: [{ z: [$, "auto", g, m] }], basis: [{ basis: [Y, "full", "auto", l, ...p()] }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }], flex: [{ flex: [S, Y, "auto", "initial", "none", m] }], grow: [{ grow: ["", S, g, m] }], shrink: [{ shrink: ["", S, g, m] }], order: [{ order: [$, "first", "last", "none", g, m] }], "grid-cols": [{ "grid-cols": E() }], "col-start-end": [{ col: U() }], "col-start": [{ "col-start": F() }], "col-end": [{ "col-end": F() }], "grid-rows": [{ "grid-rows": E() }], "row-start-end": [{ row: U() }], "row-start": [{ "row-start": F() }], "row-end": [{ "row-end": F() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": Ue() }], "auto-rows": [{ "auto-rows": Ue() }], gap: [{ gap: p() }], "gap-x": [{ "gap-x": p() }], "gap-y": [{ "gap-y": p() }], "justify-content": [{ justify: [...Se(), "normal"] }], "justify-items": [{ "justify-items": [...D(), "normal"] }], "justify-self": [{ "justify-self": ["auto", ...D()] }], "align-content": [{ content: ["normal", ...Se()] }], "align-items": [{ items: [...D(), { baseline: ["", "last"] }] }], "align-self": [{ self: ["auto", ...D(), { baseline: ["", "last"] }] }], "place-content": [{ "place-content": Se() }], "place-items": [{ "place-items": [...D(), "baseline"] }], "place-self": [{ "place-self": ["auto", ...D()] }], p: [{ p: p() }], px: [{ px: p() }], py: [{ py: p() }], ps: [{ ps: p() }], pe: [{ pe: p() }], pt: [{ pt: p() }], pr: [{ pr: p() }], pb: [{ pb: p() }], pl: [{ pl: p() }], m: [{ m: L() }], mx: [{ mx: L() }], my: [{ my: L() }], ms: [{ ms: L() }], me: [{ me: L() }], mt: [{ mt: L() }], mr: [{ mr: L() }], mb: [{ mb: L() }], ml: [{ ml: L() }], "space-x": [{ "space-x": p() }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": p() }], "space-y-reverse": ["space-y-reverse"], size: [{ size: B() }], w: [{ w: [l, "screen", ...B()] }], "min-w": [{ "min-w": [l, "screen", "none", ...B()] }], "max-w": [{ "max-w": [l, "screen", "none", "prose", { screen: [i] }, ...B()] }], h: [{ h: ["screen", "lh", ...B()] }], "min-h": [{ "min-h": ["screen", "lh", "none", ...B()] }], "max-h": [{ "max-h": ["screen", "lh", ...B()] }], "font-size": [{ text: ["base", t, Q, W] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: [o, g, Ne] }], "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Me, m] }], "font-family": [{ font: [nn, m, r] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: [n, g, m] }], "line-clamp": [{ "line-clamp": [S, "none", g, Ne] }], leading: [{ leading: [s, ...p()] }], "list-image": [{ "list-image": ["none", g, m] }], "list-style-position": [{ list: ["inside", "outside"] }], "list-style-type": [{ list: ["disc", "decimal", "none", g, m] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "placeholder-color": [{ placeholder: y() }], "text-color": [{ text: y() }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...le(), "wavy"] }], "text-decoration-thickness": [{ decoration: [S, "from-font", "auto", g, W] }], "text-decoration-color": [{ decoration: y() }], "underline-offset": [{ "underline-offset": [S, "auto", g, m] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: p() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", g, m] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], wrap: [{ wrap: ["break-word", "anywhere", "normal"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", g, m] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: De() }], "bg-repeat": [{ bg: Ye() }], "bg-size": [{ bg: qe() }], "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, $, g, m], radial: ["", g, m], conic: [$, g, m] }, an, on] }], "bg-color": [{ bg: y() }], "gradient-from-pos": [{ from: Ee() }], "gradient-via-pos": [{ via: Ee() }], "gradient-to-pos": [{ to: Ee() }], "gradient-from": [{ from: y() }], "gradient-via": [{ via: y() }], "gradient-to": [{ to: y() }], rounded: [{ rounded: M() }], "rounded-s": [{ "rounded-s": M() }], "rounded-e": [{ "rounded-e": M() }], "rounded-t": [{ "rounded-t": M() }], "rounded-r": [{ "rounded-r": M() }], "rounded-b": [{ "rounded-b": M() }], "rounded-l": [{ "rounded-l": M() }], "rounded-ss": [{ "rounded-ss": M() }], "rounded-se": [{ "rounded-se": M() }], "rounded-ee": [{ "rounded-ee": M() }], "rounded-es": [{ "rounded-es": M() }], "rounded-tl": [{ "rounded-tl": M() }], "rounded-tr": [{ "rounded-tr": M() }], "rounded-br": [{ "rounded-br": M() }], "rounded-bl": [{ "rounded-bl": M() }], "border-w": [{ border: P() }], "border-w-x": [{ "border-x": P() }], "border-w-y": [{ "border-y": P() }], "border-w-s": [{ "border-s": P() }], "border-w-e": [{ "border-e": P() }], "border-w-t": [{ "border-t": P() }], "border-w-r": [{ "border-r": P() }], "border-w-b": [{ "border-b": P() }], "border-w-l": [{ "border-l": P() }], "divide-x": [{ "divide-x": P() }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": P() }], "divide-y-reverse": ["divide-y-reverse"], "border-style": [{ border: [...le(), "hidden", "none"] }], "divide-style": [{ divide: [...le(), "hidden", "none"] }], "border-color": [{ border: y() }], "border-color-x": [{ "border-x": y() }], "border-color-y": [{ "border-y": y() }], "border-color-s": [{ "border-s": y() }], "border-color-e": [{ "border-e": y() }], "border-color-t": [{ "border-t": y() }], "border-color-r": [{ "border-r": y() }], "border-color-b": [{ "border-b": y() }], "border-color-l": [{ "border-l": y() }], "divide-color": [{ divide: y() }], "outline-style": [{ outline: [...le(), "none", "hidden"] }], "outline-offset": [{ "outline-offset": [S, g, m] }], "outline-w": [{ outline: ["", S, Q, W] }], "outline-color": [{ outline: y() }], shadow: [{ shadow: ["", "none", f, ge, me] }], "shadow-color": [{ shadow: y() }], "inset-shadow": [{ "inset-shadow": ["none", w, ge, me] }], "inset-shadow-color": [{ "inset-shadow": y() }], "ring-w": [{ ring: P() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: y() }], "ring-offset-w": [{ "ring-offset": [S, W] }], "ring-offset-color": [{ "ring-offset": y() }], "inset-ring-w": [{ "inset-ring": P() }], "inset-ring-color": [{ "inset-ring": y() }], "text-shadow": [{ "text-shadow": ["none", d, ge, me] }], "text-shadow-color": [{ "text-shadow": y() }], opacity: [{ opacity: [S, g, m] }], "mix-blend": [{ "mix-blend": [...Xe(), "plus-darker", "plus-lighter"] }], "bg-blend": [{ "bg-blend": Xe() }], "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"], "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }], "mask-image-linear-pos": [{ "mask-linear": [S] }], "mask-image-linear-from-pos": [{ "mask-linear-from": I() }], "mask-image-linear-to-pos": [{ "mask-linear-to": I() }], "mask-image-linear-from-color": [{ "mask-linear-from": y() }], "mask-image-linear-to-color": [{ "mask-linear-to": y() }], "mask-image-t-from-pos": [{ "mask-t-from": I() }], "mask-image-t-to-pos": [{ "mask-t-to": I() }], "mask-image-t-from-color": [{ "mask-t-from": y() }], "mask-image-t-to-color": [{ "mask-t-to": y() }], "mask-image-r-from-pos": [{ "mask-r-from": I() }], "mask-image-r-to-pos": [{ "mask-r-to": I() }], "mask-image-r-from-color": [{ "mask-r-from": y() }], "mask-image-r-to-color": [{ "mask-r-to": y() }], "mask-image-b-from-pos": [{ "mask-b-from": I() }], "mask-image-b-to-pos": [{ "mask-b-to": I() }], "mask-image-b-from-color": [{ "mask-b-from": y() }], "mask-image-b-to-color": [{ "mask-b-to": y() }], "mask-image-l-from-pos": [{ "mask-l-from": I() }], "mask-image-l-to-pos": [{ "mask-l-to": I() }], "mask-image-l-from-color": [{ "mask-l-from": y() }], "mask-image-l-to-color": [{ "mask-l-to": y() }], "mask-image-x-from-pos": [{ "mask-x-from": I() }], "mask-image-x-to-pos": [{ "mask-x-to": I() }], "mask-image-x-from-color": [{ "mask-x-from": y() }], "mask-image-x-to-color": [{ "mask-x-to": y() }], "mask-image-y-from-pos": [{ "mask-y-from": I() }], "mask-image-y-to-pos": [{ "mask-y-to": I() }], "mask-image-y-from-color": [{ "mask-y-from": y() }], "mask-image-y-to-color": [{ "mask-y-to": y() }], "mask-image-radial": [{ "mask-radial": [g, m] }], "mask-image-radial-from-pos": [{ "mask-radial-from": I() }], "mask-image-radial-to-pos": [{ "mask-radial-to": I() }], "mask-image-radial-from-color": [{ "mask-radial-from": y() }], "mask-image-radial-to-color": [{ "mask-radial-to": y() }], "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }], "mask-image-radial-pos": [{ "mask-radial-at": _() }], "mask-image-conic-pos": [{ "mask-conic": [S] }], "mask-image-conic-from-pos": [{ "mask-conic-from": I() }], "mask-image-conic-to-pos": [{ "mask-conic-to": I() }], "mask-image-conic-from-color": [{ "mask-conic-from": y() }], "mask-image-conic-to-color": [{ "mask-conic-to": y() }], "mask-mode": [{ mask: ["alpha", "luminance", "match"] }], "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }], "mask-position": [{ mask: De() }], "mask-repeat": [{ mask: Ye() }], "mask-size": [{ mask: qe() }], "mask-type": [{ "mask-type": ["alpha", "luminance"] }], "mask-image": [{ mask: ["none", g, m] }], filter: [{ filter: ["", "none", g, m] }], blur: [{ blur: Ke() }], brightness: [{ brightness: [S, g, m] }], contrast: [{ contrast: [S, g, m] }], "drop-shadow": [{ "drop-shadow": ["", "none", x, ge, me] }], "drop-shadow-color": [{ "drop-shadow": y() }], grayscale: [{ grayscale: ["", S, g, m] }], "hue-rotate": [{ "hue-rotate": [S, g, m] }], invert: [{ invert: ["", S, g, m] }], saturate: [{ saturate: [S, g, m] }], sepia: [{ sepia: ["", S, g, m] }], "backdrop-filter": [{ "backdrop-filter": ["", "none", g, m] }], "backdrop-blur": [{ "backdrop-blur": Ke() }], "backdrop-brightness": [{ "backdrop-brightness": [S, g, m] }], "backdrop-contrast": [{ "backdrop-contrast": [S, g, m] }], "backdrop-grayscale": [{ "backdrop-grayscale": ["", S, g, m] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [S, g, m] }], "backdrop-invert": [{ "backdrop-invert": ["", S, g, m] }], "backdrop-opacity": [{ "backdrop-opacity": [S, g, m] }], "backdrop-saturate": [{ "backdrop-saturate": [S, g, m] }], "backdrop-sepia": [{ "backdrop-sepia": ["", S, g, m] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": p() }], "border-spacing-x": [{ "border-spacing-x": p() }], "border-spacing-y": [{ "border-spacing-y": p() }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", g, m] }], "transition-behavior": [{ transition: ["normal", "discrete"] }], duration: [{ duration: [S, "initial", g, m] }], ease: [{ ease: ["linear", "initial", v, g, m] }], delay: [{ delay: [S, g, m] }], animate: [{ animate: ["none", N, g, m] }], backface: [{ backface: ["hidden", "visible"] }], perspective: [{ perspective: [b, g, m] }], "perspective-origin": [{ "perspective-origin": R() }], rotate: [{ rotate: ce() }], "rotate-x": [{ "rotate-x": ce() }], "rotate-y": [{ "rotate-y": ce() }], "rotate-z": [{ "rotate-z": ce() }], scale: [{ scale: ue() }], "scale-x": [{ "scale-x": ue() }], "scale-y": [{ "scale-y": ue() }], "scale-z": [{ "scale-z": ue() }], "scale-3d": ["scale-3d"], skew: [{ skew: _e3() }], "skew-x": [{ "skew-x": _e3() }], "skew-y": [{ "skew-y": _e3() }], transform: [{ transform: [g, m, "", "none", "gpu", "cpu"] }], "transform-origin": [{ origin: R() }], "transform-style": [{ transform: ["3d", "flat"] }], translate: [{ translate: fe() }], "translate-x": [{ "translate-x": fe() }], "translate-y": [{ "translate-y": fe() }], "translate-z": [{ "translate-z": fe() }], "translate-none": ["translate-none"], accent: [{ accent: y() }], appearance: [{ appearance: ["none", "auto"] }], "caret-color": [{ caret: y() }], "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", g, m] }], "field-sizing": [{ "field-sizing": ["fixed", "content"] }], "pointer-events": [{ "pointer-events": ["auto", "none"] }], resize: [{ resize: ["none", "", "y", "x"] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p() }], "scroll-mx": [{ "scroll-mx": p() }], "scroll-my": [{ "scroll-my": p() }], "scroll-ms": [{ "scroll-ms": p() }], "scroll-me": [{ "scroll-me": p() }], "scroll-mt": [{ "scroll-mt": p() }], "scroll-mr": [{ "scroll-mr": p() }], "scroll-mb": [{ "scroll-mb": p() }], "scroll-ml": [{ "scroll-ml": p() }], "scroll-p": [{ "scroll-p": p() }], "scroll-px": [{ "scroll-px": p() }], "scroll-py": [{ "scroll-py": p() }], "scroll-ps": [{ "scroll-ps": p() }], "scroll-pe": [{ "scroll-pe": p() }], "scroll-pt": [{ "scroll-pt": p() }], "scroll-pr": [{ "scroll-pr": p() }], "scroll-pb": [{ "scroll-pb": p() }], "scroll-pl": [{ "scroll-pl": p() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", g, m] }], fill: [{ fill: ["none", ...y()] }], "stroke-w": [{ stroke: [S, Q, W, Ne] }], stroke: [{ stroke: ["none", ...y()] }], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], translate: ["translate-x", "translate-y", "translate-none"], "translate-none": ["translate", "translate-x", "translate-y", "translate-z"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] }, orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"] };
}, un = (e, { cacheSize: r, prefix: t, experimentalParseClassName: o, extend: n = {}, override: s = {} }) => (re(e, "cacheSize", r), re(e, "prefix", t), re(e, "experimentalParseClassName", o), be(e.theme, s.theme), be(e.classGroups, s.classGroups), be(e.conflictingClassGroups, s.conflictingClassGroups), be(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), re(e, "orderSensitiveModifiers", s.orderSensitiveModifiers), he(e.theme, n.theme), he(e.classGroups, n.classGroups), he(e.conflictingClassGroups, n.conflictingClassGroups), he(e.conflictingClassGroupModifiers, n.conflictingClassGroupModifiers), Vr(e, n, "orderSensitiveModifiers"), e), re = (e, r, t) => {
  t !== void 0 && (e[r] = t);
}, be = (e, r) => {
  if (r) for (const t in r) re(e, t, r[t]);
}, he = (e, r) => {
  if (r) for (const t in r) Vr(e, r, t);
}, Vr = (e, r, t) => {
  const o = r[t];
  o !== void 0 && (e[t] = e[t] ? e[t].concat(o) : o);
}, Gn = (e, ...r) => typeof e == "function" ? je(Fe, e, ...r) : je(() => un(Fe(), e), ...r), fn = je(Fe);
function jn(...e) {
  return fn(oe(e));
}
function Fn(e) {
  const { needle: r, haystack: t, property: o } = e;
  if (!Array.isArray(t)) throw new Error("Haystack must be an array");
  if (!o) throw new Error("Property selector is required");
  const n = r.toLowerCase();
  return t.filter((s) => {
    const l = (typeof o == "function" ? o(s) : String(s[o])).toLowerCase();
    return dn(n, l);
  });
}
function dn(e, r) {
  const t = r.length, o = e.length;
  if (o > t) return false;
  if (o === t) return e === r;
  e: for (let n = 0, s = 0; n < o; n++) {
    const i = e.charCodeAt(n);
    for (; s < t; ) if (r.charCodeAt(s++) === i) continue e;
    return false;
  }
  return true;
}
const pn = typeof window < "u" ? window : void 0;
function mn(e) {
  let r = e.activeElement;
  for (; r == null ? void 0 : r.shadowRoot; ) {
    const t = r.shadowRoot.activeElement;
    if (t === r) break;
    r = t;
  }
  return r;
}
class gn {
  constructor(r = {}) {
    __privateAdd(this, _e2);
    __privateAdd(this, _r3);
    const { window: t = pn, document: o = t == null ? void 0 : t.document } = r;
    t !== void 0 && (__privateSet(this, _e2, o), __privateSet(this, _r3, St((n) => {
      const s = er(t, "focusin", n), i = er(t, "focusout", n);
      return () => {
        s(), i();
      };
    })));
  }
  get current() {
    var _a;
    return (_a = __privateGet(this, _r3)) == null ? void 0 : _a.call(this), __privateGet(this, _e2) ? mn(__privateGet(this, _e2)) : null;
  }
}
_e2 = new WeakMap();
_r3 = new WeakMap();
new gn();
function bn(e, r) {
  switch (e) {
    case "post":
      _t(r);
      break;
    case "pre":
      Et(r);
      break;
  }
}
function $r(e, r, t, o = {}) {
  const { lazy: n = false } = o;
  let s = !n, i = Array.isArray(e) ? [] : void 0;
  bn(r, () => {
    const l = Array.isArray(e) ? e.map((u) => u()) : e();
    if (!s) {
      s = true, i = l;
      return;
    }
    const a = Oe(() => t(l, i));
    return i = l, a;
  });
}
function hn(e, r, t) {
  $r(e, "post", r, t);
}
function vn(e, r, t) {
  $r(e, "pre", r, t);
}
hn.pre = vn;
export {
  pn as A,
  oe as B,
  Sn as C,
  We as D,
  ae as E,
  _n as F,
  Cn as G,
  Tn as H,
  Ae as I,
  _r as J,
  go as K,
  Nn as L,
  On as M,
  so as N,
  io as O,
  pe as P,
  eo as S,
  Ot as a,
  xn as b,
  Ft as c,
  Pt as d,
  Gn as e,
  jn as f,
  ke as g,
  An as h,
  kn as i,
  to as j,
  no as k,
  Rn as l,
  Pn as m,
  Ln as n,
  En as o,
  In as p,
  Rt as q,
  Vt as r,
  jt as s,
  fn as t,
  Fn as u,
  wo as v,
  hn as w,
  Mn as x,
  zn as y,
  $t as z
};
