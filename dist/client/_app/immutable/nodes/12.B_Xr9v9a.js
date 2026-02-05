import "../chunks/DsnmJJEf.js";
import { p as he, _ as ge, a5 as _e, f as M, d as t, Z as me, g as s, s as d, r, t as I, h as g, b as f, c as be, e as N, a as j, X as Oe, u as Ve, ai as Ie } from "../chunks/Cerututf.js";
import { s as p } from "../chunks/C-CTaGP6.js";
import { i as V } from "../chunks/DIL41Api.js";
import { c as T } from "../chunks/IOctRI-n.js";
import { c as we, S as $e, g as Ne, o as Te } from "../chunks/BPNiD34A.js";
import { d as qe, f as Y, s as Be, w as We } from "../chunks/CD9opEPd.js";
import { a as oe } from "../chunks/D7IsHJFc.js";
import { A as ye, a as ke, b as Xe, P as Ze } from "../chunks/AqSr3-NM.js";
import { $ as xe, a as F, C as Ee, c as Fe, b as Je, S as Qe } from "../chunks/DntK2p3e.js";
import { g as P } from "../chunks/CsOUNaBs.js";
const Re = () => "cards", Ye = () => "\u30AB\u30FC\u30C9", et = (_ = {}, l = {}) => (l.locale ?? P()) === "en" ? Re() : Ye(), tt = () => "decks", rt = () => "\u30C7\u30C3\u30AD", at = (_ = {}, l = {}) => (l.locale ?? P()) === "en" ? tt() : rt(), st = () => "Profile", ot = () => "\u30D7\u30ED\u30D5\u30A3\u30EB", nt = (_ = {}, l = {}) => (l.locale ?? P()) === "en" ? st() : ot(), lt = () => "Create an Account", ct = () => "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u4F5C\u308B", it = (_ = {}, l = {}) => (l.locale ?? P()) === "en" ? lt() : ct(), ut = () => "Save your cards and decks and access them across all your devices.", dt = () => "\u30AB\u30FC\u30C9\u3068\u30C7\u30C3\u30AD\u3092\u4FDD\u5B58\u3057\u3066\u3001\u3059\u3079\u3066\u306E\u30C7\u30D0\u30A4\u30B9\u304B\u3089\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059", ft = (_ = {}, l = {}) => (l.locale ?? P()) === "en" ? ut() : dt(), vt = () => "Continue with Google", pt = () => "Google\u3067\u9032\u3080", gt = (_ = {}, l = {}) => (l.locale ?? P()) === "en" ? vt() : pt(), _t = () => "Sign Out", mt = () => "\u30B5\u30A4\u30F3\u30A2\u30A6\u30C8", xt = (_ = {}, l = {}) => (l.locale ?? P()) === "en" ? _t() : mt(), ht = (_) => {
  var l = bt(), i = t(l);
  {
    let e = g(() => Y("aspect-square h-full w-full rounded-none"));
    T(i, () => ke, (U, q) => {
      q(U, { get class() {
        return s(e);
      }, children: (y, K) => {
        var G = N(), D = j(G);
        T(D, () => ye, (S, k) => {
          k(S, { class: "bg-transparent", children: (B, v) => {
            Qe(B, { class: "size-full" });
          }, $$slots: { default: true } });
        }), f(y, G);
      }, $$slots: { default: true } });
    });
  }
  r(l), f(_, l);
};
var bt = M('<div class="user-item relative cursor-pointer focus:outline-none focus-visible:border-2 focus-visible:border-border svelte-1owsdwb"><!></div>'), wt = M('<div><!> <div class="flex flex-1 flex-col gap-1 overflow-y-hidden bg-transparent"><div class="users-row w-full flex-none gap-0.5 svelte-1owsdwb"><!></div> <div class="flex w-full flex-1 items-center bg-transparent"><span class="flex-1 px-1 text-left text-sm text-muted-foreground"> </span></div></div></div>');
function $t(_, l) {
  he(l, true);
  const i = new we($e, { resolve: { root: true, profile: { decks: { $each: { activity: true } } } } }), e = g(() => {
    var _a;
    if (!i.current.$isLoaded || !i.current.profile.$isLoaded || !i.current.profile.decks.$isLoaded) return [];
    const a = /* @__PURE__ */ new Map(), n = xe(F());
    for (let o = 0; o < 365; o++) {
      const u = n.subtract({ days: o }).toDate(F()), c = u.toDateString();
      a.set(c, { date: u, count: 0 });
    }
    for (const o of i.current.profile.decks.$isLoaded ? i.current.profile.decks : []) {
      if (!(o == null ? void 0 : o.$isLoaded) || !((_a = o.activity) == null ? void 0 : _a.$isLoaded)) continue;
      const u = o.activity.byMe;
      if (u) for (const c of u.all) {
        if (!c.value.$isLoaded) continue;
        const b = c.value.completed;
        if (b) {
          const L = new Date(b).toDateString(), C = a.get(L);
          C && (C.count += 1);
        }
      }
    }
    return Array.from(a.values()).map((o) => ({ date: o.date, value: o.count })).sort((o, u) => o.date.getTime() - u.date.getTime());
  }), U = g(() => {
    const a = /* @__PURE__ */ new Map();
    for (const n of s(e)) if (n.value !== null) {
      const o = n.date.toDateString();
      a.set(o, n.value);
    }
    return a;
  }), q = g(() => {
    if (!s(k)) return 0;
    const a = s(k).toDate(F());
    return s(U).get(a.toDateString()) ?? 0;
  }), y = g(() => {
    let a = 0;
    for (const n of s(e)) n.value !== null && n.value > a && (a = n.value);
    return a || 1;
  });
  function K(a) {
    const o = a.toDate(F()).toDateString(), u = s(U).get(o);
    if (u === void 0 || u === 0) return 0;
    const c = u / s(y);
    return c <= 0.25 ? 1 : c <= 0.5 ? 2 : c <= 0.75 ? 3 : 4;
  }
  function G(a) {
    switch (a) {
      case 1:
        return "bg-green-200 dark:bg-green-900";
      case 2:
        return "bg-green-400 dark:bg-green-700";
      case 3:
        return "bg-green-500 dark:bg-green-600";
      case 4:
        return "bg-green-600 dark:bg-green-500";
      default:
        return "text-black";
    }
  }
  const D = xe(F());
  let S = ge(_e(D)), k = ge(_e(D));
  function B(a) {
    return a.compare(D) > 0;
  }
  var v = wt(), W = t(v);
  Ee(W, { type: "single", isDateDisabled: B, class: "flex-none bg-transparent", headerClass: "pt-1", get placeholder() {
    return s(S);
  }, set placeholder(n) {
    me(S, n, true);
  }, get value() {
    return s(k);
  }, set value(n) {
    me(k, n, true);
  }, day: (n, o) => {
    let u = () => o == null ? void 0 : o().day;
    const c = g(() => K(u())), b = g(() => G(s(c)));
    var L = N(), C = j(L);
    {
      let H = g(() => Y(s(b), s(c) > 0 && "text-green-950 dark:text-green-50", s(c) > 2 && "text-white dark:text-green-50"));
      T(C, () => Je, (A, Z) => {
        Z(A, { get class() {
          return s(H);
        } });
      });
    }
    f(n, L);
  }, $$slots: { day: true } });
  var J = d(W, 2), X = t(J), ee = t(X);
  ht(ee), r(X);
  var w = d(X, 2), h = t(w), $ = t(h, true);
  r(h), r(w), r(J), r(v), I((a, n) => {
    Be(v, 1, a, "svelte-1owsdwb"), p($, n);
  }, [() => qe(Y("activity-calendar relative flex flex-1 flex-col gap-3 bg-transparent pb-3.5", l.class)), () => Fe({ count: s(q) })]), f(_, v), be();
}
var yt = M('<div class="pointer-events-auto col-span-3 row-span-3 row-start-1 flex h-full flex-col items-center justify-center gap-6 p-4 pt-20 md:px-35 md:pt-4"><div class="flex w-full max-w-sm flex-col gap-2 text-left"><h3 class="text-xl font-medium text-black"> </h3> <p class="text-base text-black/70"> </p></div> <div class="flex w-full max-w-sm flex-col gap-3"><button class="button h-9 cursor-pointer justify-start gap-3"><svg class="size-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path></svg> </button></div></div>'), kt = M("<!> <!>", 1), Lt = M('<p class="text-sm leading-5 text-black/60"> </p>'), Ct = M('<p class="w-full truncate text-sm leading-5 text-black/60"> </p>'), Dt = M('<div class="pointer-events-auto col-span-3 row-span-2 row-start-1 flex h-full flex-col items-start overflow-y-auto px-[1ch] pt-20 pb-[2ch] md:row-span-3 md:px-35 md:pt-30"><div class="flex flex-none flex-row flex-wrap items-center gap-3"><!> <div class="flex h-full min-w-0 flex-1 flex-col items-start justify-start gap-0"><h2 class="h-5 w-full truncate text-base font-medium text-black"> </h2> <!> <!></div> <div class="flex h-full flex-none flex-row items-start gap-4"><div class="flex h-full flex-col items-start gap-0"><span class="h-5 text-base font-semibold text-black"> </span> <span class="text-sm leading-5 text-black/60"> </span></div> <div class="flex h-full flex-col items-start gap-0"><span class="h-5 text-base font-semibold text-black"> </span> <span class="text-sm leading-5 text-black/60"> </span></div></div></div> <div class="flex flex-none flex-col gap-1"><div class="overflow-hidden rounded"><!></div></div>  <div class="flex flex-none pt-2"><button class="button"> </button></div></div>');
function It(_, l) {
  he(l, true);
  const i = Ne();
  Ve(() => {
    i.title = nt(), i.subtitle = "";
  });
  const e = new we($e, { resolve: { root: true, profile: { friends: { $each: true }, decks: { $each: true }, cards: { $each: true } } } });
  We(() => e.current.$isLoaded, () => {
    var _a;
    if (e.current.$isLoaded && e.current.profile.$isLoaded) {
      e.current.profile.email || Te(e.current);
      const v = (_a = oe.useSession.get().data) == null ? void 0 : _a.user.image;
      v && e.current.profile.imageUrl !== v && e.current.profile.$jazz.set("imageUrl", v);
    }
  });
  const U = g(() => e.current.$isLoaded && e.current.profile.$isLoaded && e.current.profile.decks.$isLoaded ? e.current.profile.decks.length : 0), q = g(() => e.current.$isLoaded && e.current.profile.$isLoaded && e.current.profile.cards.$isLoaded ? e.current.profile.cards.length : 0), y = g(() => !e.current.$isLoaded || !e.current.profile.$isLoaded ? "" : e.current.profile.displayName || e.current.profile.name || ""), K = g(() => !e.current.$isLoaded || !e.current.profile.$isLoaded ? "" : e.current.profile.username || "");
  function G() {
    oe.signIn.social({ provider: "google", scopes: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"] });
  }
  async function D() {
    await oe.signOut();
  }
  var S = N(), k = j(S);
  {
    var B = (v) => {
      var W = N(), J = j(W);
      {
        var X = (w) => {
          var h = yt(), $ = t(h), a = t($), n = t(a, true);
          r(a);
          var o = d(a, 2), u = t(o, true);
          r(o), r($);
          var c = d($, 2), b = t(c);
          b.__click = G;
          var L = d(t(b));
          r(b), r(c), r(h), I((C, H, A) => {
            p(n, C), p(u, H), p(L, ` ${A ?? ""}`);
          }, [() => it(), () => ft(), () => gt()]), f(w, h);
        }, ee = (w) => {
          var h = Dt(), $ = t(h), a = t($);
          {
            let m = g(() => Y("flex-none", s(K) ? "size-15" : "size-10"));
            T(a, () => ke, (x, z) => {
              z(x, { get class() {
                return s(m);
              }, children: (je, St) => {
                var de = kt(), fe = j(de);
                {
                  var Me = (E) => {
                    var Q = N(), se = j(Q);
                    T(se, () => Xe, (ve, R) => {
                      R(ve, { referrerpolicy: "no-referrer", get src() {
                        return e.current.profile.imageUrl;
                      }, get alt() {
                        return s(y);
                      } });
                    }), f(E, Q);
                  };
                  V(fe, (E) => {
                    e.current.profile.imageUrl && E(Me);
                  });
                }
                var Pe = d(fe, 2);
                T(Pe, () => ye, (E, Q) => {
                  Q(E, { class: "bg-muted text-xl", children: (se, ve) => {
                    var R = N(), Ue = j(R);
                    {
                      var Ke = (O) => {
                        var pe = Ie();
                        I((He) => p(pe, He), [() => s(y).charAt(0).toUpperCase()]), f(O, pe);
                      }, Ge = (O) => {
                        Ze(O, { class: "size-6" });
                      };
                      V(Ue, (O) => {
                        s(y) ? O(Ke) : O(Ge, false);
                      });
                    }
                    f(se, R);
                  }, $$slots: { default: true } });
                }), f(je, de);
              }, $$slots: { default: true } });
            });
          }
          var n = d(a, 2), o = t(n), u = t(o, true);
          r(o);
          var c = d(o, 2);
          {
            var b = (m) => {
              var x = Lt(), z = t(x);
              r(x), I(() => p(z, `@${s(K) ?? ""}`)), f(m, x);
            };
            V(c, (m) => {
              s(K) && m(b);
            });
          }
          var L = d(c, 2);
          {
            var C = (m) => {
              var x = Ct(), z = t(x, true);
              r(x), I(() => p(z, e.current.profile.email)), f(m, x);
            };
            V(L, (m) => {
              e.current.profile.email && m(C);
            });
          }
          r(n);
          var H = d(n, 2), A = t(H), Z = t(A), Le = t(Z, true);
          r(Z);
          var ne = d(Z, 2), Ce = t(ne, true);
          r(ne), r(A);
          var le = d(A, 2), te = t(le), De = t(te, true);
          r(te);
          var ce = d(te, 2), Se = t(ce, true);
          r(ce), r(le), r(H), r($);
          var re = d($, 2), ie = t(re), Ae = t(ie);
          $t(Ae, { class: "w-full max-w-105" }), r(ie), r(re);
          var ue = d(re, 2), ae = t(ue);
          ae.__click = D;
          var ze = t(ae, true);
          r(ae), r(ue), r(h), I((m, x, z) => {
            p(u, s(y)), p(Le, s(U)), p(Ce, m), p(De, s(q)), p(Se, x), p(ze, z);
          }, [() => at(), () => et(), () => xt()]), f(w, h);
        };
        V(J, (w) => {
          e.current.profile.anonymous ? w(X) : w(ee, false);
        });
      }
      f(v, W);
    };
    V(k, (v) => {
      e.current.$isLoaded && e.current.profile.$isLoaded && v(B);
    });
  }
  f(_, S), be();
}
Oe(["click"]);
export {
  It as component
};
