import { C as q, $ as ee, k as z, r as te, B as re } from "./Cerututf.js";
import { a as se, t as ne, e as ae } from "./CD9opEPd.js";
let B = null;
function H() {
  var _a, _b;
  if (B === null) {
    var e = document.createElement("select");
    e.innerHTML = "<option><span>t</span></option>", B = ((_b = (_a = e.firstChild) == null ? void 0 : _a.firstChild) == null ? void 0 : _b.nodeType) === 1;
  }
  return B;
}
function me(e, r) {
  H() && se(e, () => () => {
    const n = e.closest("select");
    if (!n) return;
    const t = new MutationObserver((i) => {
      var _a, _b;
      var s = false;
      for (const g of i) {
        if (g.target === e) return;
        s || (s = !!((_b = (_a = g.target.parentElement) == null ? void 0 : _a.closest("option")) == null ? void 0 : _b.selected));
      }
      s && (e.replaceWith(e = e.cloneNode(true)), r(e));
    });
    return t.observe(n, { childList: true, characterData: true, subtree: true }), () => {
      t.disconnect();
    };
  });
}
function Ce(e, r) {
  var n = z;
  H() || (q(false), e.textContent = "", e.append(ee("")));
  try {
    r();
  } finally {
    n && (z ? te(e) : (q(true), re(e)));
  }
}
var oe = /\s+/g, ie = (e) => typeof e != "string" || !e ? e : e.replace(oe, " ").trim(), _ = (...e) => {
  const r = [], n = (t) => {
    if (!t && t !== 0 && t !== 0n) return;
    if (Array.isArray(t)) {
      for (let s = 0, g = t.length; s < g; s++) n(t[s]);
      return;
    }
    const i = typeof t;
    if (i === "string" || i === "number" || i === "bigint") {
      if (i === "number" && t !== t) return;
      r.push(String(t));
    } else if (i === "object") {
      const s = Object.keys(t);
      for (let g = 0, O = s.length; g < O; g++) {
        const S = s[g];
        t[S] && r.push(S);
      }
    }
  };
  for (let t = 0, i = e.length; t < i; t++) {
    const s = e[t];
    s != null && n(s);
  }
  return r.length > 0 ? ie(r.join(" ")) : void 0;
}, D = (e) => e === false ? "false" : e === true ? "true" : e === 0 ? "0" : e, d = (e) => {
  if (!e || typeof e != "object") return true;
  for (const r in e) return false;
  return true;
}, le = (e, r) => {
  if (e === r) return true;
  if (!e || !r) return false;
  const n = Object.keys(e), t = Object.keys(r);
  if (n.length !== t.length) return false;
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (!t.includes(s) || e[s] !== r[s]) return false;
  }
  return true;
}, ce = (e, r) => {
  for (const n in r) if (Object.prototype.hasOwnProperty.call(r, n)) {
    const t = r[n];
    n in e ? e[n] = _(e[n], t) : e[n] = t;
  }
  return e;
}, U = (e, r) => {
  for (let n = 0; n < e.length; n++) {
    const t = e[n];
    Array.isArray(t) ? U(t, r) : t && r.push(t);
  }
}, X = (...e) => {
  const r = [];
  U(e, r);
  const n = [];
  for (let t = 0; t < r.length; t++) r[t] && n.push(r[t]);
  return n;
}, K = (e, r) => {
  const n = {};
  for (const t in e) {
    const i = e[t];
    if (t in r) {
      const s = r[t];
      Array.isArray(i) || Array.isArray(s) ? n[t] = X(s, i) : typeof i == "object" && typeof s == "object" && i && s ? n[t] = K(i, s) : n[t] = s + " " + i;
    } else n[t] = i;
  }
  for (const t in r) t in e || (n[t] = r[t]);
  return n;
}, ue = { twMerge: true, twMergeConfig: {} };
function fe() {
  let e = null, r = {}, n = false;
  return { get cachedTwMerge() {
    return e;
  }, set cachedTwMerge(t) {
    e = t;
  }, get cachedTwMergeConfig() {
    return r;
  }, set cachedTwMergeConfig(t) {
    r = t;
  }, get didTwMergeConfigChange() {
    return n;
  }, set didTwMergeConfigChange(t) {
    n = t;
  }, reset() {
    e = null, r = {}, n = false;
  } };
}
var b = fe(), de = (e) => {
  const r = (t, i) => {
    const { extend: s = null, slots: g = {}, variants: O = {}, compoundVariants: S = [], compoundSlots: T = [], defaultVariants: L = {} } = t, w = { ...ue, ...i }, P = (s == null ? void 0 : s.base) ? _(s.base, t == null ? void 0 : t.base) : t == null ? void 0 : t.base, y = (s == null ? void 0 : s.variants) && !d(s.variants) ? K(O, s.variants) : O, G = (s == null ? void 0 : s.defaultVariants) && !d(s.defaultVariants) ? { ...s.defaultVariants, ...L } : L;
    !d(w.twMergeConfig) && !le(w.twMergeConfig, b.cachedTwMergeConfig) && (b.didTwMergeConfigChange = true, b.cachedTwMergeConfig = w.twMergeConfig);
    const E = d(s == null ? void 0 : s.slots), j = d(g) ? {} : { base: _(t == null ? void 0 : t.base, E && (s == null ? void 0 : s.base)), ...g }, N = E ? j : ce({ ...s == null ? void 0 : s.slots }, d(j) ? { base: t == null ? void 0 : t.base } : j), A = d(s == null ? void 0 : s.compoundVariants) ? S : X(s == null ? void 0 : s.compoundVariants, S), v = (m) => {
      if (d(y) && d(g) && E) return e(P, m == null ? void 0 : m.class, m == null ? void 0 : m.className)(w);
      if (A && !Array.isArray(A)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof A}`);
      if (T && !Array.isArray(T)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof T}`);
      const F = (a, l = y, o = null, u = null) => {
        const c = l[a];
        if (!c || d(c)) return null;
        const f = (u == null ? void 0 : u[a]) ?? (m == null ? void 0 : m[a]);
        if (f === null) return null;
        const p = D(f);
        if (typeof p == "object") return null;
        const M = G == null ? void 0 : G[a], h = p ?? D(M);
        return c[h || "false"];
      }, J = () => {
        if (!y) return null;
        const a = Object.keys(y), l = [];
        for (let o = 0; o < a.length; o++) {
          const u = F(a[o], y);
          u && l.push(u);
        }
        return l;
      }, Q = (a, l) => {
        if (!y || typeof y != "object") return null;
        const o = [];
        for (const u in y) {
          const c = F(u, y, a, l), f = a === "base" && typeof c == "string" ? c : c && c[a];
          f && o.push(f);
        }
        return o;
      }, R = {};
      for (const a in m) {
        const l = m[a];
        l !== void 0 && (R[a] = l);
      }
      const $ = (a, l) => {
        var _a;
        const o = typeof (m == null ? void 0 : m[a]) == "object" ? { [a]: (_a = m[a]) == null ? void 0 : _a.initial } : {};
        return { ...G, ...R, ...o, ...l };
      }, W = (a = [], l) => {
        const o = [], u = a.length;
        for (let c = 0; c < u; c++) {
          const { class: f, className: p, ...M } = a[c];
          let h = true;
          const C = $(null, l);
          for (const k in M) {
            const V = M[k], x = C[k];
            if (Array.isArray(V)) {
              if (!V.includes(x)) {
                h = false;
                break;
              }
            } else {
              if ((V == null || V === false) && (x == null || x === false)) continue;
              if (x !== V) {
                h = false;
                break;
              }
            }
          }
          h && (f && o.push(f), p && o.push(p));
        }
        return o;
      }, Y = (a) => {
        const l = W(A, a);
        if (!Array.isArray(l)) return l;
        const o = {}, u = e;
        for (let c = 0; c < l.length; c++) {
          const f = l[c];
          if (typeof f == "string") o.base = u(o.base, f)(w);
          else if (typeof f == "object") for (const p in f) o[p] = u(o[p], f[p])(w);
        }
        return o;
      }, Z = (a) => {
        if (T.length < 1) return null;
        const l = {}, o = $(null, a);
        for (let u = 0; u < T.length; u++) {
          const { slots: c = [], class: f, className: p, ...M } = T[u];
          if (!d(M)) {
            let h = true;
            for (const C in M) {
              const k = o[C], V = M[C];
              if (k === void 0 || (Array.isArray(V) ? !V.includes(k) : V !== k)) {
                h = false;
                break;
              }
            }
            if (!h) continue;
          }
          for (let h = 0; h < c.length; h++) {
            const C = c[h];
            l[C] || (l[C] = []), l[C].push([f, p]);
          }
        }
        return l;
      };
      if (!d(g) || !E) {
        const a = {};
        if (typeof N == "object" && !d(N)) {
          const l = e;
          for (const o in N) a[o] = (u) => {
            const c = Y(u), f = Z(u);
            return l(N[o], Q(o, u), c ? c[o] : void 0, f ? f[o] : void 0, u == null ? void 0 : u.class, u == null ? void 0 : u.className)(w);
          };
        }
        return a;
      }
      return e(P, J(), W(A), m == null ? void 0 : m.class, m == null ? void 0 : m.className)(w);
    }, I = () => {
      if (!(!y || typeof y != "object")) return Object.keys(y);
    };
    return v.variantKeys = I(), v.extend = s, v.base = P, v.slots = N, v.variants = y, v.defaultVariants = G, v.compoundSlots = T, v.compoundVariants = A, v;
  };
  return { tv: r, createTV: (t) => (i, s) => r(i, s ? K(t, s) : t) };
}, ge = (e) => d(e) ? ne : ae({ ...e, extend: { theme: e.theme, classGroups: e.classGroups, conflictingClassGroupModifiers: e.conflictingClassGroupModifiers, conflictingClassGroups: e.conflictingClassGroups, ...e.extend } }), ye = (e, r) => {
  const n = _(e);
  return !n || !((r == null ? void 0 : r.twMerge) ?? true) ? n : ((!b.cachedTwMerge || b.didTwMergeConfigChange) && (b.didTwMergeConfigChange = false, b.cachedTwMerge = ge(b.cachedTwMergeConfig)), b.cachedTwMerge(n) || void 0);
}, pe = (...e) => (r) => ye(e, r), { tv: Ve } = de(pe);
export {
  Ce as c,
  me as s,
  Ve as t
};
