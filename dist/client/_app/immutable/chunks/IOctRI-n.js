import { k as D, y as B, x as L, E as N, q as M, n as Y, m as O, N as j, a0 as S, a1 as P, a2 as m, a3 as q, g as b, J as K, a4 as U, a5 as C, Z as F, a6 as Z, a7 as $, a8 as z, a9 as G, aa as J, ab as H, ac as Q, ad as V, ae as R, af as d } from "./Cerututf.js";
import { B as W } from "./C-CTaGP6.js";
function ie(e, r, n) {
  D && B();
  var i = new W(e);
  L(() => {
    var s = r() ?? null;
    i.ensure(s, s && ((t) => n(t, s)));
  }, N);
}
function E(e, r) {
  return e === r || (e == null ? void 0 : e[S]) === r;
}
function se(e = {}, r, n, i) {
  return M(() => {
    var s, t;
    return Y(() => {
      s = t, t = (i == null ? void 0 : i()) || [], O(() => {
        e !== n(...t) && (r(e, ...t), s && E(n(...s), e) && r(null, ...s));
      });
    }), () => {
      j(() => {
        t && E(n(...t), e) && r(null, ...t);
      });
    };
  }), e;
}
let _ = false;
function X(e) {
  var r = _;
  try {
    return _ = false, [e(), _];
  } finally {
    _ = r;
  }
}
const k = { get(e, r) {
  if (!e.exclude.includes(r)) return e.props[r];
}, set(e, r) {
  return false;
}, getOwnPropertyDescriptor(e, r) {
  if (!e.exclude.includes(r) && r in e.props) return { enumerable: true, configurable: true, value: e.props[r] };
}, has(e, r) {
  return e.exclude.includes(r) ? false : r in e.props;
}, ownKeys(e) {
  return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
} };
function te(e, r, n) {
  return new Proxy({ props: e, exclude: r }, k);
}
const ee = { get(e, r) {
  let n = e.props.length;
  for (; n--; ) {
    let i = e.props[n];
    if (d(i) && (i = i()), typeof i == "object" && i !== null && r in i) return i[r];
  }
}, set(e, r, n) {
  let i = e.props.length;
  for (; i--; ) {
    let s = e.props[i];
    d(s) && (s = s());
    const t = P(s, r);
    if (t && t.set) return t.set(n), true;
  }
  return false;
}, getOwnPropertyDescriptor(e, r) {
  let n = e.props.length;
  for (; n--; ) {
    let i = e.props[n];
    if (d(i) && (i = i()), typeof i == "object" && i !== null && r in i) {
      const s = P(i, r);
      return s && !s.configurable && (s.configurable = true), s;
    }
  }
}, has(e, r) {
  if (r === S || r === R) return false;
  for (let n of e.props) if (d(n) && (n = n()), n != null && r in n) return true;
  return false;
}, ownKeys(e) {
  const r = [];
  for (let n of e.props) if (d(n) && (n = n()), !!n) {
    for (const i in n) r.includes(i) || r.push(i);
    for (const i of Object.getOwnPropertySymbols(n)) r.includes(i) || r.push(i);
  }
  return r;
} };
function ae(...e) {
  return new Proxy({ props: e }, ee);
}
function fe(e, r, n, i) {
  var _a;
  var s = !J || (n & H) !== 0, t = (n & G) !== 0, x = (n & V) !== 0, f = i, v = true, g = () => (v && (v = false, f = x ? O(i) : i), f), l;
  if (t) {
    var I = S in e || R in e;
    l = ((_a = P(e, r)) == null ? void 0 : _a.set) ?? (I && r in e ? (a) => e[r] = a : void 0);
  }
  var o, w = false;
  t ? [o, w] = X(() => e[r]) : o = e[r], o === void 0 && i !== void 0 && (o = g(), l && (s && m(), l(o)));
  var u;
  if (s ? u = () => {
    var a = e[r];
    return a === void 0 ? g() : (v = true, a);
  } : u = () => {
    var a = e[r];
    return a !== void 0 && (f = void 0), a === void 0 ? f : a;
  }, s && (n & q) === 0) return u;
  if (l) {
    var A = e.$$legacy;
    return (function(a, p) {
      return arguments.length > 0 ? ((!s || !p || A || w) && l(p ? u() : a), a) : u();
    });
  }
  var h = false, c = ((n & Q) !== 0 ? K : U)(() => (h = false, u()));
  t && b(c);
  var T = $;
  return (function(a, p) {
    if (arguments.length > 0) {
      const y = p ? b(c) : s && t ? C(a) : a;
      return F(c, y), h = true, f !== void 0 && (f = y), a;
    }
    return Z && h || (T.f & z) !== 0 ? c.v : b(c);
  });
}
export {
  se as b,
  ie as c,
  fe as p,
  te as r,
  ae as s
};
