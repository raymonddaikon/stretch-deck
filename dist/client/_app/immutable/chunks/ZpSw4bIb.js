var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _a, _s, _n, _e, _r2, _o, _l, _i, _d, _t, _c, _Ye_instances, u_fn;
import "./DsnmJJEf.js";
import { _ as X, n as Zt, Z as w, bd as Kt, ag as it, g as e, X as Ot, p as Dt, a5 as Mt, u as Re, h as c, m as Yt, f as P, d as o, s as b, r as n, t as T, b as j, c as Rt, e as $e, a as Le, be as Ut, ai as Vt, aj as Gt } from "./Cerututf.js";
import { s as M, b as Qt } from "./C-CTaGP6.js";
import { i as le } from "./DIL41Api.js";
import { d as jt, f as Oe, s as ke, b as Ft, g as lt, c as ct, w as Tt } from "./CD9opEPd.js";
import { c as Ee, p as I, b as zt } from "./IOctRI-n.js";
import { g as Jt } from "./BPNiD34A.js";
import { g as $t } from "./C1832kSX.js";
import { p as wt } from "./4zMF4u-F.js";
import { h as er, a as tr, r as rr, s as ar, b as sr, e as It, d as nr, c as or } from "./BjdZBxxB.js";
import { g as St } from "./CsOUNaBs.js";
import { e as Pt } from "./DRISAwCd.js";
import { $ as ir, a as kt, C as lr, b as cr, c as dr, S as ur } from "./DntK2p3e.js";
import { A as Xt, b as fr, P as vr, a as Bt } from "./AqSr3-NM.js";
import { i as mr, Q as gr } from "./D5Cy45eL.js";
const pr = () => performance.now(), me = { tick: (u) => requestAnimationFrame(u), now: () => pr(), tasks: /* @__PURE__ */ new Set() };
function Wt() {
  const u = me.now();
  me.tasks.forEach((t) => {
    t.c(u) || (me.tasks.delete(t), t.f());
  }), me.tasks.size !== 0 && me.tick(Wt);
}
function hr(u) {
  let t;
  return me.tasks.size === 0 && me.tick(Wt), { promise: new Promise((l) => {
    me.tasks.add(t = { c: u, f: l });
  }), abort() {
    me.tasks.delete(t);
  } };
}
const br = () => "Remove", xr = () => "Remove", Lt = (u = {}, t = {}) => (t.locale ?? St()) === "en" ? br() : xr(), _r = () => "You do not have delete permission for this card, you can only remove it from your collection; however it will still exist in any decks you have.", yr = () => "You do not have delete permission for this card, you can only remove it from your collection; however it will still exist in any decks you have.", wr = (u = {}, t = {}) => (t.locale ?? St()) === "en" ? _r() : yr(), kr = () => "Title", Mr = () => "\u30BF\u30A4\u30C8\u30EB", jr = (u = {}, t = {}) => (t.locale ?? St()) === "en" ? kr() : Mr();
function Je(...u) {
  const t = !Array.isArray(u[0]), l = t ? 0 : -1, f = u[0 + l], y = u[1 + l], v = u[2 + l], Z = u[3 + l], K = mr(y, v, Z);
  return t ? K(f) : K;
}
function Et(u) {
  return Object.prototype.toString.call(u) === "[object Date]";
}
function At(u, t, l, f) {
  if (typeof l == "number" || Et(l)) {
    const y = f - l, v = (l - t) / (u.dt || 1 / 60), Z = u.opts.stiffness * y, K = u.opts.damping * v, O = (Z - K) * u.inv_mass, S = (v + O) * u.dt;
    return Math.abs(S) < u.opts.precision && Math.abs(y) < u.opts.precision ? f : (u.settled = false, Et(l) ? new Date(l.getTime() + S) : l + S);
  } else {
    if (Array.isArray(l)) return l.map((y, v) => At(u, t[v], l[v], f[v]));
    if (typeof l == "object") {
      const y = {};
      for (const v in l) y[v] = At(u, t[v], l[v], f[v]);
      return y;
    } else throw new Error(`Cannot spring ${typeof l} values`);
  }
}
const _Ye = class _Ye {
  constructor(t, l = {}) {
    __privateAdd(this, _Ye_instances);
    __privateAdd(this, _a, X(0.15));
    __privateAdd(this, _s, X(0.8));
    __privateAdd(this, _n, X(0.01));
    __privateAdd(this, _e);
    __privateAdd(this, _r2);
    __privateAdd(this, _o);
    __privateAdd(this, _l, 0);
    __privateAdd(this, _i, 1);
    __privateAdd(this, _d, 0);
    __privateAdd(this, _t, null);
    __privateAdd(this, _c, null);
    __privateSet(this, _e, X(t)), __privateSet(this, _r2, X(t)), typeof l.stiffness == "number" && (__privateGet(this, _a).v = ot(l.stiffness, 0, 1)), typeof l.damping == "number" && (__privateGet(this, _s).v = ot(l.damping, 0, 1)), typeof l.precision == "number" && (__privateGet(this, _n).v = l.precision);
  }
  static of(t, l) {
    const f = new _Ye(t(), l);
    return Zt(() => {
      f.set(t());
    }), f;
  }
  set(t, l) {
    var _a2, _b;
    if ((_a2 = __privateGet(this, _c)) == null ? void 0 : _a2.reject(new Error("Aborted")), (l == null ? void 0 : l.instant) || __privateGet(this, _e).v === void 0) return (_b = __privateGet(this, _t)) == null ? void 0 : _b.abort(), __privateSet(this, _t, null), w(__privateGet(this, _e), w(__privateGet(this, _r2), t)), __privateSet(this, _o, t), Promise.resolve();
    (l == null ? void 0 : l.preserveMomentum) && (__privateSet(this, _i, 0), __privateSet(this, _d, l.preserveMomentum));
    var f = __privateSet(this, _c, Kt());
    return f.promise.catch(it), __privateMethod(this, _Ye_instances, u_fn).call(this, t).then(() => {
      f === __privateGet(this, _c) && f.resolve(void 0);
    }), f.promise;
  }
  get current() {
    return e(__privateGet(this, _e));
  }
  get damping() {
    return e(__privateGet(this, _s));
  }
  set damping(t) {
    w(__privateGet(this, _s), ot(t, 0, 1));
  }
  get precision() {
    return e(__privateGet(this, _n));
  }
  set precision(t) {
    w(__privateGet(this, _n), t);
  }
  get stiffness() {
    return e(__privateGet(this, _a));
  }
  set stiffness(t) {
    w(__privateGet(this, _a), ot(t, 0, 1));
  }
  get target() {
    return e(__privateGet(this, _r2));
  }
  set target(t) {
    this.set(t);
  }
};
_a = new WeakMap();
_s = new WeakMap();
_n = new WeakMap();
_e = new WeakMap();
_r2 = new WeakMap();
_o = new WeakMap();
_l = new WeakMap();
_i = new WeakMap();
_d = new WeakMap();
_t = new WeakMap();
_c = new WeakMap();
_Ye_instances = new WeakSet();
u_fn = function(t) {
  var _a2;
  if (w(__privateGet(this, _r2), t), (_a2 = __privateGet(this, _e)).v ?? (_a2.v = t), __privateGet(this, _o) ?? __privateSet(this, _o, __privateGet(this, _e).v), !__privateGet(this, _t)) {
    __privateSet(this, _l, me.now());
    var l = 1e3 / (__privateGet(this, _d) * 60);
    __privateGet(this, _t) ?? __privateSet(this, _t, hr((f) => {
      __privateSet(this, _i, Math.min(__privateGet(this, _i) + l, 1));
      const y = Math.min(f - __privateGet(this, _l), 1e3 / 30), v = { inv_mass: __privateGet(this, _i), opts: { stiffness: __privateGet(this, _a).v, damping: __privateGet(this, _s).v, precision: __privateGet(this, _n).v }, settled: true, dt: y * 60 / 1e3 };
      var Z = At(v, __privateGet(this, _o), __privateGet(this, _e).v, __privateGet(this, _r2).v);
      return __privateSet(this, _o, __privateGet(this, _e).v), __privateSet(this, _l, f), w(__privateGet(this, _e), Z), v.settled && __privateSet(this, _t, null), !v.settled;
    }));
  }
  return __privateGet(this, _t).promise;
};
let Ye = _Ye;
function ot(u, t, l) {
  return Math.max(t, Math.min(l, u));
}
const zr = (u) => {
  var t = Rr(), l = o(t);
  {
    let f = c(() => Oe("aspect-square h-full w-full rounded-none"));
    Ee(l, () => Bt, (y, v) => {
      v(y, { get class() {
        return e(f);
      }, children: (Z, K) => {
        var O = $e(), S = Le(O);
        Ee(S, () => Xt, (B, W) => {
          W(B, { class: "border border-border bg-transparent", children: (z, G) => {
            ur(z, { class: "size-full" });
          }, $$slots: { default: true } });
        }), j(Z, O);
      }, $$slots: { default: true } });
    });
  }
  n(t), j(u, t);
};
var Ar = P("<!> <!>", 1), Dr = P('<button type="button" class="user-item relative cursor-pointer focus:outline-none focus-visible:border-2 focus-visible:border-border data-[selected=true]:border data-[selected=true]:border-black svelte-1nvr3jm"><!></button>'), Rr = P('<div class="user-item relative cursor-pointer focus:outline-none focus-visible:border-2 focus-visible:border-border svelte-1nvr3jm"><!></div>'), Sr = P('<button type="button" class="user-item col-span-1 flex aspect-square h-full cursor-pointer items-center justify-center bg-black font-medium text-white hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-ring svelte-1nvr3jm"> </button>'), Cr = P('<button type="button" class="user-item col-span-1 flex aspect-square h-full cursor-pointer items-center justify-center bg-black font-medium text-white hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-ring svelte-1nvr3jm"> </button>'), Ur = P('<span class="text-sm"> </span>'), Ir = P('<div class="flex flex-1 flex-row justify-between gap-0.5 px-1 text-sm"><span class="font-medium text-black"> </span> <!></div>'), Pr = P('<span class="flex-1 px-1 text-left text-sm text-muted-foreground"> </span>'), Lr = P('<div><!> <div class="flex flex-1 flex-col overflow-y-hidden"><div class="users-row w-full flex-none gap-0.5 p-0.5 svelte-1nvr3jm"><!> <!> <!></div> <div class="flex w-full flex-1 items-center"><!></div></div></div>');
function Er(u, t) {
  Dt(t, true);
  const l = (r, a = it, d = it, g = it) => {
    var k = Dr();
    k.__click = (ee) => {
      ee.stopPropagation(), Fe(a());
    };
    var L = o(k);
    {
      let ee = c(() => Oe("aspect-square h-full w-full rounded-none"));
      Ee(L, () => Bt, (te, Me) => {
        Me(te, { get class() {
          return e(ee);
        }, children: (je, et) => {
          var xe = Ar(), We = Le(xe);
          {
            var dt = (ye) => {
              var fe = $e(), Ce = Le(fe);
              {
                let qe = c(() => a().name ?? "User");
                Ee(Ce, () => fr, (we, Ue) => {
                  Ue(we, { get src() {
                    return a().imageUrl;
                  }, get alt() {
                    return e(qe);
                  }, referrerpolicy: "no-referrer" });
                });
              }
              j(ye, fe);
            };
            le(We, (ye) => {
              a().imageUrl && ye(dt);
            });
          }
          var _e2 = b(We, 2);
          Ee(_e2, () => Xt, (ye, fe) => {
            fe(ye, { class: "border border-border bg-muted", children: (Ce, qe) => {
              var we = $e(), Ue = Le(we);
              {
                var tt = (s) => {
                  var i = Vt();
                  T((_) => M(i, _), [() => a().name.charAt(0).toUpperCase()]), j(s, i);
                }, ut = (s) => {
                  vr(s, {});
                };
                le(Ue, (s) => {
                  a().name ? s(tt) : s(ut, false);
                });
              }
              j(Ce, we);
            }, $$slots: { default: true } });
          }), j(je, xe);
        }, $$slots: { default: true } });
      });
    }
    n(k), T(() => {
      var _a2;
      lt(k, "data-selected", ((_a2 = e(C)) == null ? void 0 : _a2.id) === a().id), ct(k, `z-index: ${g() - d()};`);
    }), j(r, k);
  }, f = c(() => {
    const r = /* @__PURE__ */ new Map();
    for (const a of t.data) if (a.value !== null) {
      const d = a.date.toDateString();
      r.set(d, a.value);
    }
    return r;
  }), y = c(() => {
    const r = /* @__PURE__ */ new Map();
    for (const a of t.data) if (a.users && a.users.length > 0) {
      const d = a.date.toDateString();
      r.set(d, a.users);
    }
    return r;
  }), v = c(() => {
    if (!e(q)) return [];
    const r = e(q).toDate(kt());
    return e(y).get(r.toDateString()) ?? [];
  }), Z = c(() => {
    let r = 0;
    for (const a of t.data) a.value !== null && a.value > r && (r = a.value);
    return r || 1;
  });
  function K(r) {
    const d = r.toDate(kt()).toDateString(), g = e(f).get(d);
    if (g === void 0 || g === 0) return 0;
    const k = g / e(Z);
    return k <= 0.25 ? 1 : k <= 0.5 ? 2 : k <= 0.75 ? 3 : 4;
  }
  function O(r, a) {
    switch (r) {
      case 1:
        return "bg-green-200 dark:bg-green-900";
      case 2:
        return "bg-green-400 dark:bg-green-700";
      case 3:
        return "bg-green-500 dark:bg-green-600";
      case 4:
        return "bg-green-600 dark:bg-green-500";
      default:
        return "";
    }
  }
  const S = 9, B = S - 1, W = c(() => {
    const r = e(v).length;
    if (r <= S) return 1;
    const a = r - S;
    return a <= S ? 2 : 2 + Math.ceil((a - S) / B);
  });
  let z = X(1);
  function G(r) {
    return r === 1 ? 0 : S + (r - 2) * B;
  }
  function ce(r, a, d) {
    if (d === 1) return a;
    if (r === 1) return S;
    if (r === d) {
      const g = G(r);
      return Math.min(S, a - g);
    }
    return B;
  }
  const Y = c(() => {
    const r = G(e(z)), a = ce(e(z), e(v).length, e(W));
    return e(v).slice(r, r + a);
  }), R = c(() => e(z) <= 1 ? 0 : G(e(z))), p = c(() => {
    if (e(z) >= e(W)) return 0;
    const r = G(e(z)), a = ce(e(z), e(v).length, e(W));
    return e(v).length - r - a;
  }), Q = ir(kt());
  let J = X(Mt(Q)), q = X(Mt(Q)), C = X(null);
  Re(() => {
    e(v), Yt(() => {
      w(z, 1), w(C, null);
    });
  });
  function se(r) {
    return r ? r.toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" }) : "";
  }
  function Fe(r) {
    var _a2;
    w(C, ((_a2 = e(C)) == null ? void 0 : _a2.id) === r.id ? null : r, true);
  }
  function Te() {
    e(z) > 1 && (Ut(z, -1), w(C, null));
  }
  function Xe() {
    e(z) < e(W) && (Ut(z), w(C, null));
  }
  function Se(r) {
    return r.compare(Q) > 0;
  }
  var de = Lr(), ge = o(de);
  lr(ge, { type: "single", isDateDisabled: Se, class: "flex-none border-b border-border", get placeholder() {
    return e(J);
  }, set placeholder(a) {
    w(J, a, true);
  }, get value() {
    return e(q);
  }, set value(a) {
    w(q, a, true);
  }, day: (a, d) => {
    let g = () => d == null ? void 0 : d().day, k = () => d == null ? void 0 : d().outsideMonth;
    const L = c(() => K(g())), ee = c(() => O(e(L), k()));
    var te = $e(), Me = Le(te);
    {
      let je = c(() => Oe(e(ee), e(L) > 0 && "text-green-950 dark:text-green-50", e(L) > 2 && "text-white dark:text-green-50"));
      Ee(Me, () => cr, (et, xe) => {
        xe(et, { get class() {
          return e(je);
        } });
      });
    }
    j(a, te);
  }, $$slots: { day: true } });
  var ue = b(ge, 2), F = o(ue), $ = o(F);
  {
    var Be = (r) => {
      var a = Sr();
      a.__click = (g) => {
        g.stopPropagation(), Te();
      };
      var d = o(a);
      n(a), T(() => M(d, `+${e(R) ?? ""}`)), j(r, a);
    };
    le($, (r) => {
      e(R) > 0 && r(Be);
    });
  }
  var h = b($, 2);
  {
    var A = (r) => {
      var a = $e(), d = Le(a);
      Ft(d, 19, () => e(Y), (g, k) => g.id + "-" + k, (g, k, L) => {
        l(g, () => e(k), () => e(L), () => e(Y).length);
      }), j(r, a);
    }, D = (r) => {
      zr(r);
    };
    le(h, (r) => {
      e(v).length > 0 ? r(A) : r(D, false);
    });
  }
  var ne = b(h, 2);
  {
    var x = (r) => {
      var a = Cr();
      a.__click = (g) => {
        g.stopPropagation(), Xe();
      };
      var d = o(a);
      n(a), T(() => M(d, `+${e(p) ?? ""}`)), j(r, a);
    };
    le(ne, (r) => {
      e(p) > 0 && r(x);
    });
  }
  n(F);
  var ie = b(F, 2), oe = o(ie);
  {
    var H = (r) => {
      var a = Ir(), d = o(a), g = o(d, true);
      n(d);
      var k = b(d, 2);
      {
        var L = (ee) => {
          var te = Ur(), Me = o(te, true);
          n(te), T((je) => M(Me, je), [() => se(e(C).completedAt)]), j(ee, te);
        };
        le(k, (ee) => {
          e(C).completedAt && ee(L);
        });
      }
      n(a), T(() => M(g, e(C).name ?? "Anonymous")), j(r, a);
    }, pe = (r) => {
      var a = Pr(), d = o(a, true);
      n(a), T((g) => M(d, g), [() => dr({ count: e(v).length })]), j(r, a);
    };
    le(oe, (r) => {
      e(C) ? r(H) : r(pe, false);
    });
  }
  n(ie), n(ue), n(de), T((r) => ke(de, 1, r, "svelte-1nvr3jm"), [() => jt(Oe("activity-calendar relative flex flex-1 flex-col", t.class))]), j(u, de), Rt();
}
Ot(["click"]);
var Or = P('<div><canvas class="pixelated absolute inset-0 z-10 block h-full w-full svelte-1hg9jwa"></canvas> <canvas class="pixelated absolute inset-0 z-20 block h-full w-full svelte-1hg9jwa"></canvas></div>');
function Yr(u, t) {
  Dt(t, true);
  let l = I(t, "tiltY", 3, 0), f = I(t, "gridWidth", 3, 8), y = I(t, "rowHeight", 3, 80), v = I(t, "rowOffset", 3, 6), Z = I(t, "class", 3, ""), K = I(t, "thumbnails", 3, null), O = [], S = c(() => {
    if (!K() || K().length === 0) return { urls: [], placeholders: [] };
    O.forEach((D) => {
      D.startsWith("blob:") && URL.revokeObjectURL(D);
    });
    const h = [], A = [];
    for (const D of K()) {
      if (!(D == null ? void 0 : D.$isLoaded)) continue;
      const ne = er(D, 800, 800);
      if (!ne) continue;
      const x = ne.image.toBlob();
      x && (h.push(URL.createObjectURL(x)), A.push(D.placeholderDataURL));
    }
    return O = h, { urls: h, placeholders: A };
  }), B = c(() => e(S).urls);
  Qt(() => {
    O.forEach((h) => {
      h.startsWith("blob:") && URL.revokeObjectURL(h);
    });
  });
  let W, z, G = null, ce = null, Y = X(800), R = X(800), p = X(Mt([])), Q = X(false), J = c(() => e(p).length === 0 ? [] : e(p).length === 1 ? [e(p)[0]] : e(p).length === 2 ? [e(p)[0], e(p)[1]] : e(p).slice(0, 3)), q = c(() => e(p).length === 2), C = c(() => e(p).length > 1), se = new Ye(0, { stiffness: 0.15, damping: 0.7, precision: 1e-3 });
  Re(() => {
    e(B).length > 0 && Yt(() => Te());
  }), Tt(() => [f(), y(), v()], () => {
    e(Q) && e(p).length === e(B).length && Fe();
  }), Re(() => {
    se.set(l());
  }), Re(() => {
    e(Q) && e(p).length === e(B).length && ue(se.current);
  });
  function Fe() {
    var _a2;
    e(p).length === e(B).length && ((_a2 = e(p)[0]) == null ? void 0 : _a2.complete) && (Se(), ue(se.current));
  }
  function Te() {
    w(Q, false);
    const h = [];
    let A = 0;
    e(B).forEach((D, ne) => {
      const x = new Image();
      x.crossOrigin = "Anonymous", x.src = D, h[ne] = x, x.onload = () => {
        A++, A === e(B).length && (w(p, h, true), Xe());
      };
    });
  }
  function Xe() {
    !W || !z || (w(Y, Math.min(...e(p).map((h) => h.width)), true), w(R, Math.min(...e(p).map((h) => h.height)), true), W.width = e(Y), W.height = e(R), z.width = e(Y), z.height = e(R), G = W.getContext("2d"), ce = z.getContext("2d"), Se(), ue(se.current), w(Q, true));
  }
  function Se() {
    if (!G || e(J).length === 0) return;
    if (G.clearRect(0, 0, e(Y), e(R)), !e(C)) {
      const x = e(J)[0], ie = (x.width - e(Y)) / 2, oe = (x.height - e(R)) / 2;
      G.drawImage(x, ie, oe, e(Y), e(R), 0, 0, e(Y), e(R));
      return;
    }
    const h = e(J).length, A = Math.ceil(e(Y) / f()) + 1, D = f() / h, ne = Math.ceil(e(R) / y());
    for (let x = 0; x < ne; x++) {
      const ie = x * y(), oe = x % 2 === 0 ? 0 : v();
      for (let H = -1; H < A; H++) {
        const pe = H * f() + oe;
        for (let r = 0; r < h; r++) {
          const a = e(J)[r], d = pe + r * D, g = (a.width - e(Y)) / 2, k = (a.height - e(R)) / 2;
          G.drawImage(a, g + d, k + ie, D, y(), d, ie, D, y());
        }
      }
    }
  }
  const de = 3, ge = 1.2;
  function ue(h) {
    if (!ce || (ce.clearRect(0, 0, e(Y), e(R)), !e(C))) return;
    ce.fillStyle = "rgba(0, 0, 0, 0.8)";
    const A = e(J).length, D = f() / A, ne = f() - D, x = Math.ceil(e(Y) / f()) + 2, ie = Math.ceil(e(R) / y()), oe = Math.max(-de, Math.min(de, h));
    let H;
    if (Math.abs(oe) <= ge) H = 0.5;
    else {
      const d = de - ge;
      oe < 0 ? H = 0.5 * ((oe + ge) / d + 1) : H = 0.5 + 0.5 * ((oe - ge) / d);
    }
    let pe;
    e(q) ? pe = H <= 0.5 ? H : 1 - H : pe = H;
    const a = pe * f() % f();
    for (let d = 0; d < ie; d++) {
      const g = d * y(), k = d % 2 === 0 ? 0 : v();
      for (let L = -1; L < x; L++) {
        const ee = L * f() + a + k;
        ce.fillRect(ee, g, ne, y());
      }
    }
  }
  var F = Or(), $ = o(F);
  zt($, (h) => W = h, () => W);
  var Be = b($, 2);
  zt(Be, (h) => z = h, () => z), n(F), T(() => ke(F, 1, `pointer-events-none relative overflow-hidden transform-flat ${Z() ?? ""}`, "svelte-1hg9jwa")), j(u, F), Rt();
}
var Fr = P('<div class="holo-shine svelte-2uo3yg"></div> <div class="holo-glare svelte-2uo3yg"></div>', 1), Tr = P('<span class="flex flex-none bg-foreground px-1 align-baseline text-sm font-normal text-black uppercase text-box-trim"> </span>'), Xr = P('<div><div class="relative z-1 box-border grid h-full w-full grid-cols-6 grid-rows-[auto_auto_auto_auto_auto_1fr] gap-1 border-4 border-double border-border p-2"><header class="relative col-span-6 row-span-1 flex items-center justify-start divide-x divide-border border border-border text-base"><div class="flex size-9 flex-none items-center justify-center"><div><span> </span></div></div> <h3 class="card-title flex-1 text-left text-black uppercase select-none svelte-2uo3yg"> </h3></header> <section class="col-span-6 row-span-5 grid grid-cols-subgrid grid-rows-subgrid gap-1"><div class="card-header-container relative col-span-6 row-span-1 aspect-3/2 w-full overflow-hidden transform-flat svelte-2uo3yg"><!> <!></div> <div class="col-span-6 row-span-4 grid grid-cols-subgrid grid-rows-subgrid gap-0 divide-y divide-border border border-border"><div class="col-span-6 row-span-1 flex h-full w-full flex-row items-start justify-between gap-1 pl-2"><span class="flex flex-none py-2 text-sm font-normal text-black uppercase text-box-trim"> </span> <div class="flex flex-none gap-1 p-2"></div></div> <div class="col-span-6 row-span-1 flex h-full w-full justify-between p-2"><span class="flex flex-none text-sm font-normal text-black uppercase"> </span> <span class="flex flex-none text-sm font-normal text-black uppercase tabular-nums"> </span></div> <div class="col-span-6 row-span-1 flex h-full w-full justify-between p-2"><span class="flex flex-none text-sm font-normal text-black uppercase"> </span> <span class="flex flex-none text-sm font-normal text-black uppercase tabular-nums"> </span></div> <div class="col-span-6 row-span-1 flex h-full w-full flex-col items-start gap-1 p-2"><span class="inline text-sm font-normal text-black uppercase"> </span> <p class="inline text-left text-sm leading-4 font-normal text-black"> </p></div></div></section></div></div>'), Br = P('<a class="button pointer-events-auto flex h-5 flex-1 items-center justify-start px-2 py-0 text-left transition-colors"> </a>'), Wr = P('<button class="button-destructive pointer-events-auto flex h-5 flex-1 items-center justify-start px-2 py-0 text-left transition-colors"> </button>'), qr = P('<div class="absolute inset-0 z-10 flex items-center justify-center rounded-[6px] bg-background/80 backdrop-blur-sm"><div class="flex max-w-4/5 flex-col gap-4 p-6"><p class="text-base font-medium text-black"> </p> <p class="text-sm font-medium text-black"> </p> <div class="flex gap-2"><button class="button flex-1 rounded-md transition-colors"> </button> <button class="button-destructive flex-1 transition-colors"> </button></div></div></div>'), Hr = P('<div class="card-back pointer-events-auto border-[0.5px] border-border bg-background p-2 text-sm svelte-2uo3yg"><div class="relative z-1 box-border grid h-full w-full grid-cols-6 grid-rows-[auto_1fr] border-4 border-double border-border"><section class="col-span-6 row-span-1 flex"><!> <div class="flex flex-1 flex-col border-l"><span class="flex-none bg-foreground px-1.5 text-left text-sm text-black uppercase select-none"> </span> <h3 class="flex-1 px-1 text-left text-base text-black uppercase select-none"> </h3> <div class="flex flex-none flex-row gap-px"><!></div></div></section> <div class="col-span-6 row-span-1 flex h-full max-w-full flex-col overflow-auto"><!></div></div> <!></div>'), Nr = P("<div><article><div><!> <!></div></article></div>");
function la(u, t) {
  Dt(t, true);
  const l = (s) => {
    var i = Xr();
    let _;
    var m = o(i), E = o(m), re = o(E), V = o(re);
    let Ie;
    var he = o(V), ft = o(he, true);
    n(he), n(V), n(re);
    var He = b(re, 2), vt = o(He, true);
    n(He), n(E);
    var rt = b(E, 2), Ne = o(rt), Ze = o(Ne);
    {
      var mt = (ae) => {
        Yr(ae, { get tiltY() {
          return Z();
        }, get thumbnails() {
          return t.card.thumbnails;
        }, class: "h-full w-full object-cover" });
      };
      le(Ze, (ae) => {
        t.card.thumbnails.$isLoaded && ae(mt);
      });
    }
    var gt = b(Ze, 2);
    {
      var pt = (ae) => {
        var Ge = Fr();
        Gt(2), j(ae, Ge);
      };
      le(gt, (ae) => {
        e(ee) && ae(pt);
      });
    }
    n(Ne);
    var N = b(Ne, 2), U = o(N), ve = o(U), be = o(ve);
    n(ve);
    var Pe = b(ve, 2);
    Ft(Pe, 20, () => t.card.areas, (ae) => ae, (ae, Ge) => {
      var Qe = Tr(), yt = o(Qe, true);
      n(Qe), T(() => M(yt, Ge)), j(ae, Qe);
    }), n(Pe), n(U);
    var ze = b(U, 2), Ke = o(ze), at = o(Ke);
    n(Ke);
    var Ae = b(Ke, 2), ht = o(Ae, true);
    n(Ae), n(ze);
    var De = b(ze, 2), Ve = o(De), bt = o(Ve);
    n(Ve);
    var st = b(Ve, 2), xt = o(st, true);
    n(st), n(De);
    var nt = b(De, 2), _t2 = o(nt), qt = o(_t2);
    n(_t2);
    var Ct = b(_t2, 2), Ht = o(Ct, true);
    n(Ct), n(nt), n(N), n(rt), n(m), n(i), T((ae, Ge, Qe, yt, Nt) => {
      _ = ke(i, 1, "card-front border-[0.5px] border-border bg-background p-2 svelte-2uo3yg", null, _, { "pointer-events-none": O() }), ke(V, 1, `rarity-badge rarity-${e(te).shape ?? ""}`, "svelte-2uo3yg"), Ie = ct(V, "", Ie, { "--rarity-color": e(te).color }), ke(he, 1, ae, "svelte-2uo3yg"), M(ft, e(L)), M(vt, t.card.name), M(be, `${Ge ?? ""}:`), M(at, `${Qe ?? ""}:`), M(ht, t.card.units !== "reps" ? `${t.card.reps} ${t.card.units}` : t.card.reps), M(bt, `${yt ?? ""}:`), M(xt, t.card.sets), M(qt, `${Nt ?? ""}:`), M(Ht, t.card.description);
    }, [() => jt(Oe("rarity-value", (e(te).shape === "triangle" || e(te).shape === "pentagon") && "pt-1")), () => tr(), () => rr(), () => ar(), () => sr()]), j(s, i);
  }, f = (s) => {
    var i = Hr(), _ = o(i), m = o(_), E = o(m);
    gr(E, { get shareUrl() {
      return e(et);
    }, class: "w-1/3 flex-none border-t-0 border-l-0" });
    var re = b(E, 2), V = o(re), Ie = o(V, true);
    n(V);
    var he = b(V, 2), ft = o(he, true);
    n(he);
    var He = b(he, 2), vt = o(He);
    {
      var rt = (N) => {
        var U = Br(), ve = o(U, true);
        n(U), T((be, Pe) => {
          lt(U, "href", e(je)), lt(U, "aria-label", be), M(ve, Pe);
        }, [() => Pt(), () => Pt()]), j(N, U);
      }, Ne = (N) => {
        var U = Wr();
        U.__click = () => {
          w(xe, true);
        };
        var ve = o(U, true);
        n(U), T((be) => M(ve, be), [() => Lt()]), j(N, U);
      };
      le(vt, (N) => {
        e(Me) ? N(rt) : N(Ne, false);
      });
    }
    n(He), n(re), n(m);
    var Ze = b(m, 2), mt = o(Ze);
    Er(mt, { get data() {
      return e(k);
    } }), n(Ze), n(_);
    var gt = b(_, 2);
    {
      var pt = (N) => {
        var U = qr(), ve = o(U), be = o(ve), Pe = o(be, true);
        n(be);
        var ze = b(be, 2), Ke = o(ze, true);
        n(ze);
        var at = b(ze, 2), Ae = o(at);
        Ae.__click = () => w(xe, false);
        var ht = o(Ae, true);
        n(Ae);
        var De = b(Ae, 2);
        De.__click = () => {
          dt();
        };
        var Ve = o(De, true);
        n(De), n(at), n(ve), n(U), T((bt, st, xt, nt) => {
          M(Pe, bt), M(Ke, st), M(ht, xt), M(Ve, nt);
        }, [() => nr(), () => wr(), () => or(), () => Lt()]), j(N, U);
      };
      le(gt, (N) => {
        e(xe) && N(pt);
      });
    }
    n(i), T((N) => {
      M(Ie, N), M(ft, t.card.name);
    }, [() => jr()]), j(s, i);
  }, y = { stiffness: 0.15, damping: 0.7, precision: 1e-3 };
  let v = I(t, "tiltX", 3, 0), Z = I(t, "tiltY", 3, 0), K = I(t, "tiltRange", 3, 15), O = I(t, "isFlipped", 3, false), S = I(t, "isActive", 3, false), B = I(t, "glareIntensity", 3, 0.5), W = I(t, "glareHue", 3, 270), z = I(t, "blendMode", 3, "overlay"), G = I(t, "shadow", 3, true), ce = I(t, "scaleFactor", 3, 1.02), Y = I(t, "springOptions", 19, () => ({})), R = I(t, "aligned", 3, false);
  const p = { ...y, ...Y() };
  let Q = new Ye(0, p), J = new Ye(0, p), q = new Ye(0, p);
  Re(() => {
    Q.set(O() ? 0 : v()), J.set(O() ? 0 : Z());
  }), Re(() => {
    S() || e(A) ? (q.stiffness = p.stiffness, q.damping = p.damping) : (q.stiffness = p.stiffness * 0.3, q.damping = p.damping * 0.6), q.set(S() || e(A) ? 1 : 0);
  });
  let C = c(() => 0.5 + J.current / (K() * 2)), se = c(() => 0.5 + Q.current / (K() * 2)), Fe = c(() => {
    const s = e(C) - 0.5, i = e(se) - 0.5;
    if (s === 0 && i === 0) return 0;
    let _ = Math.atan2(i, s) * (180 / Math.PI) + 90;
    return _ < 0 && (_ += 360), _;
  }), Te = c(() => {
    const s = e(C) - 0.5, i = e(se) - 0.5;
    return Math.hypot(s, i) * 200;
  }), Xe = c(() => {
    const s = Math.abs(e(C) - 0.5), i = Math.abs(e(se) - 0.5);
    return Math.max(s, i) * 2;
  }), Se = c(() => (e(C) - 0.5) * 2), de = c(() => (e(se) - 0.5) * 2), ge = c(() => 1 + (ce() - 1) * q.current), ue = X(void 0);
  Re(() => {
    var _a2;
    return (_a2 = t.onElementMount) == null ? void 0 : _a2.call(t, e(ue)), () => {
      var _a3;
      return (_a3 = t.onElementMount) == null ? void 0 : _a3.call(t, void 0);
    };
  });
  let F = c(() => t.progress - t.index), $ = c(() => Math.abs(e(F))), Be = c(() => Math.max(0, 0.5 * (1 - e($)))), h = c(() => e($) > 0.5 ? 0 : 1 - e($) * 2), A = X(true), D;
  Tt(() => [e(F), D], () => {
    const s = e(F), i = D;
    if (i === void 0) {
      w(A, e($) < 0.5), D = s;
      return;
    }
    s * i <= 0 && w(A, true), Math.abs(s) >= 1 && w(A, false), D = s;
  });
  const ne = c(() => e(A) ? Je(e($), [0, 0.5, 1], [1, 0.95, 1]) : 1);
  function x(s, i, _) {
    let m = 0;
    for (m = 0; m < i.length - 1 && !(s < i[m + 1]); m++) ;
    m = Math.min(m, i.length - 2);
    const E = i[m], re = i[m + 1], V = _[m], Ie = _[m + 1], he = (s - E) / (re - E);
    return V + he * (Ie - V);
  }
  const ie = c(() => {
    const s = [-1, -0.5, 0, 0.5, 1], i = R() ? e(A) ? [0, 77, 0, -77, 0] : [0, 0, 0, 0, 0] : e(A) ? [12, 77, 0, -77, -12] : [12, 5, 0, -5, -12];
    return x(e(F), s, i);
  }), oe = c(() => {
    if (!R()) return 0;
    const s = [-1, -0.5, 0, 0.5, 1], i = e(A) ? [2, 0, 0, 0, 2] : [1.5, 1, 0, 1, 1.5];
    return x(e(F), s, i);
  }), H = c(() => {
    const s = R() ? -1 : -30;
    return x(e($), [0, 1], [0, t.totalCards * s]);
  }), pe = c(() => x(e(F), [0, 1], R() ? [0, 0] : [0, -2.4])), r = c(() => {
    const s = e($) % 1;
    return (R() ? e(A) ? Je(s, [0, 0.5, 1], [0, -45, 0]) : Je(s, [0, 0.5, 1], [0, -5, 0]) : e(A) ? Je(s, [0, 0.5, 1], [0, -45, 0]) : Je(s, [0, 0.5, 1], [0, -20, 0])) * t.direction;
  }), a = c(() => {
    const s = [-2, -1, 0, 0.7, 2], i = [-2, -1, 0, 0, -2];
    return Math.round(x(e(F), s, i));
  }), d = c(() => `
		perspective(1000px)
		translateX(${e(ie)}%)
		translateY(${e(oe)}%)
		translateZ(${e(H)}px)
		rotateZ(${e(pe)}deg)
		rotateY(calc(${e(r)}deg + var(--tilt-y)))
		rotateX(var(--tilt-x))
		scale(${e(ne)})
	`), g = c(() => {
    var _a2, _b, _c2;
    const s = /* @__PURE__ */ new Map();
    if ((_a2 = t.card.activity) == null ? void 0 : _a2.$isLoaded) {
      for (const i of Object.values(t.card.activity.perAccount)) if (i.value.$isLoaded) for (const _ of i.all) {
        const m = (_c2 = (_b = _.by) == null ? void 0 : _b.$jazz) == null ? void 0 : _c2.id;
        if (m) {
          const E = s.get(m) ?? [];
          E.push(_), s.set(m, E);
        }
      }
    }
    return s;
  }), k = c(() => {
    var _a2, _b;
    const s = /* @__PURE__ */ new Map();
    for (const [i, _] of e(g).entries()) for (const m of _) if (m.madeAt) {
      const E = new Date(m.madeAt).toDateString(), re = s.get(E) ?? { count: 0, users: /* @__PURE__ */ new Map() };
      if (re.count += 1, !re.users.has(i) && ((_a2 = m.by) == null ? void 0 : _a2.profile.$isLoaded)) {
        const V = (_b = m.by) == null ? void 0 : _b.profile;
        re.users.set(i, { id: i, name: V == null ? void 0 : V.name, imageUrl: V == null ? void 0 : V.imageUrl, completedAt: new Date(m.madeAt) });
      }
      s.set(E, re);
    }
    return Array.from(s.entries()).map(([i, _]) => ({ date: new Date(i), value: _.count, users: Array.from(_.users.values()) }));
  }), L = c(() => {
    let s = 0;
    for (const i of e(g).values()) {
      const _ = /* @__PURE__ */ new Set();
      for (const m of i) if (m.madeAt) {
        const E = new Date(m.madeAt).toDateString();
        _.add(E);
      }
      s += _.size;
    }
    return s;
  }), ee = c(() => e(L) >= 100), te = c(() => {
    let s = It[0];
    for (const i of It) e(L) >= i.minDays && (s = i);
    return s;
  }), Me = c(() => t.card.$jazz.owner.myRole() && t.card.$jazz.owner.myRole() !== "reader" && t.card.$jazz.owner.myRole() !== "readerInvite"), je = c(() => `/edit/card/${t.card.$jazz.id}?returnTo=${encodeURIComponent(wt.url.pathname + wt.url.search)}`), et = c(() => `${wt.url.origin}/add?type=card&id=${t.card.$jazz.id}`);
  let xe = X(false);
  const We = Jt();
  async function dt() {
    if (!We.me.current.$isLoaded) return;
    const s = await We.me.current.profile.$jazz.ensureLoaded({ resolve: { cards: true, decks: { $each: { cards: true } } } });
    s.cards.$isLoaded && (s.cards.$jazz.remove((i) => i.$jazz.id === t.card.$jazz.id), $t("/cards"));
  }
  var _e2 = Nr();
  let ye;
  var fe = o(_e2);
  let Ce, qe;
  var we = o(fe);
  let Ue;
  var tt = o(we);
  l(tt);
  var ut = b(tt, 2);
  f(ut), n(we), n(fe), n(_e2), zt(_e2, (s) => w(ue, s), () => e(ue)), T((s) => {
    ke(_e2, 1, s, "svelte-2uo3yg"), ye = ct(_e2, "", ye, { "z-index": e(a) }), Ce = ke(fe, 1, "card svelte-2uo3yg", null, Ce, { "card-shadow": G(), "card-glare": B() > 0 }), lt(fe, "data-is-active", q.current >= 0.01), qe = ct(fe, "", qe, { transform: e(d), "view-transition-name": t.viewTransitionName, "--tilt-x": `${Q.current ?? ""}deg`, "--tilt-y": `${J.current * 3}deg`, "--pointer-x": e(Se), "--pointer-y": e(de), "--normalized-x": e(C), "--normalized-y": e(se), "--activation": q.current, "--scale": e(ge), "--pointer-angle": `${e(Fe) ?? ""}deg`, "--pointer-distance": `${e(Te) ?? ""}px`, "--pointer-edge": e(Xe), "--glare-intensity": B(), "--glare-hue": W(), "--blend-mode": z(), "--shadow-opacity": e(Be), "--shadow-shift-x": `${J.current * (O() ? 1.5 : -1.5)}px`, "--shadow-shift-y": `${Q.current * 1}px`, "--glare-opacity": e(h) }), Ue = ke(we, 1, "card-content p-1 svelte-2uo3yg", null, Ue, { flipped: O() });
  }, [() => jt(Oe("card-wrapper", t.class))]), j(u, _e2), Rt();
}
Ot(["click"]);
export {
  la as C,
  Lt as r,
  Je as t
};
