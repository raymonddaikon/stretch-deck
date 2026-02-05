import "../chunks/DsnmJJEf.js";
import { L as P, x as R, k as g, y as D, M as I, H, B as M, A as U, C as L, N as q, O as N, P as T, Q as E, R as C, S as O, T as G, U as Q, V, W, p as Y, e as S, a as w, b as p, c as Z, g as y, f as x, d as j, r as z, t as F, h as A } from "../chunks/Cerututf.js";
import { B as J, s as K } from "../chunks/C-CTaGP6.js";
import { i as X } from "../chunks/DIL41Api.js";
import { p as $ } from "../chunks/4zMF4u-F.js";
import { a as aa } from "../chunks/D7IsHJFc.js";
const B = 0, b = 1;
function ea(v, h, m, o, f) {
  g && D();
  var u = P(), n = W, a = u ? T(n) : E(n, false, false), e = u ? T(n) : E(n, false, false), r = new J(v);
  R(() => {
    var c = h(), _ = false;
    let d = g && I(c) === (v.data === H);
    if (d && (M(U()), L(false)), I(c)) {
      var s = C(), t = false;
      const i = (l) => {
        if (!_) {
          t = true, s(false), O.ensure(), g && L(false);
          try {
            l();
          } finally {
            G(), Q || V();
          }
        }
      };
      c.then((l) => {
        i(() => {
          N(a, l), r.ensure(b, o && ((k) => o(k, a)));
        });
      }, (l) => {
        i(() => {
          if (N(e, l), r.ensure(b, f && ((k) => f(k, e))), !f) throw e.v;
        });
      }), g ? r.ensure(B, m) : q(() => {
        t || i(() => {
          r.ensure(B, m);
        });
      });
    } else N(a, c), r.ensure(b, o && ((i) => o(i, a)));
    return d && L(true), () => {
      _ = true;
    };
  });
}
var ra = x("<p>Success</p>"), sa = x("<p> </p>"), ta = x("<p>Logging in...</p>");
function la(v, h) {
  Y(h, true);
  const m = A(() => $.url.searchParams.get("token"));
  async function o(a) {
    if (!a) return { success: false, error: "No token provided" };
    const { error: e } = await aa.magicLink.verify({ query: { token: a, callbackURL: "/profile" } });
    return e ? { success: false, error: "Link expired, please try again" } : { success: true };
  }
  const f = A(() => o(y(m)));
  var u = S(), n = w(u);
  ea(n, () => y(f), (a) => {
    var e = ta();
    p(a, e);
  }, (a, e) => {
    var r = S(), c = w(r);
    {
      var _ = (s) => {
        var t = ra();
        p(s, t);
      }, d = (s) => {
        var t = sa(), i = j(t, true);
        z(t), F(() => K(i, y(e).error)), p(s, t);
      };
      X(c, (s) => {
        y(e).success ? s(_) : s(d, false);
      });
    }
    p(a, r);
  }), p(v, u), Z();
}
export {
  la as component
};
