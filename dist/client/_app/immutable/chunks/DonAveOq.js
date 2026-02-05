import { D as g, F as d, G as c, u as i, m, I as b, g as p, v, J as h, K as k } from "./Cerututf.js";
function x(n = false) {
  const s = g, e = s.l.u;
  if (!e) return;
  let f = () => v(s.s);
  if (n) {
    let a = 0, t = {};
    const _ = h(() => {
      let l = false;
      const r = s.s;
      for (const o in r) r[o] !== t[o] && (t[o] = r[o], l = true);
      return l && a++, a;
    });
    f = () => p(_);
  }
  e.b.length && d(() => {
    u(s, f), c(e.b);
  }), i(() => {
    const a = m(() => e.m.map(b));
    return () => {
      for (const t of a) typeof t == "function" && t();
    };
  }), e.a.length && i(() => {
    u(s, f), c(e.a);
  });
}
function u(n, s) {
  if (n.l.s) for (const e of n.l.s) p(e);
  s();
}
k();
export {
  x as i
};
