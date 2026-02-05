import "./DsnmJJEf.js";
import { p as rt, f as G, d as j, r as I, b as B, g as e, h as M, Y as it, c as ot, X as ft, _ as y, a5 as gt, Z as k, u as mt, ag as vt, s as ht, t as $, e as Ct, a as wt } from "./Cerututf.js";
import { a as kt, s as bt } from "./C-CTaGP6.js";
import { i as tt } from "./DIL41Api.js";
import { b as pt, c as at, i as Lt, w as et, d as _t, f as xt, s as Mt } from "./CD9opEPd.js";
import { p as K, b as Pt } from "./IOctRI-n.js";
import { M as st, g as Tt } from "./BPNiD34A.js";
import { S as St } from "./BjdZBxxB.js";
import { S as yt } from "./D5Cy45eL.js";
import "./4zMF4u-F.js";
import { t as Xt, C as Yt } from "./ZpSw4bIb.js";
import { a as Et } from "./C_KZSe7P.js";
import { g as Dt } from "./CsOUNaBs.js";
const zt = () => "Complete", Ft = () => "\u7D42\u4E86", Rt = (c = {}, t = {}) => (t.locale ?? Dt()) === "en" ? zt() : Ft(), A = 0.72, At = 0.12;
function It(c, t, a) {
  return (1 - a) * c + a * t;
}
function nt(c, t, a, P) {
  return It(c, t, 1 - Math.exp(Math.log(1 - a) * (P / (1e3 / 60))));
}
function J(c, t, a) {
  return Math.max(t, Math.min(a, c));
}
function Bt(c, t = 0) {
  const a = 10 ** t;
  return Math.round(c * a) / a;
}
const Ht = (c, t) => {
  let { length: a, onProgress: P, axis: b = "auto" } = t, X = 0, p = 0, u = 0, r = 0, l = 0, f = false, L = false, m = null, Y = 0, E = 0, x = 0, T = 0;
  const z = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches, D = () => b !== "auto" ? b : window.matchMedia("(pointer: coarse) and (hover: none)").matches ? "x" : "y";
  let d = D();
  function F() {
    d = D(), T = d === "x" ? c.clientWidth : c.clientHeight;
  }
  function Q() {
    F(), z() || c.addEventListener("pointerdown", H);
    const i = new ResizeObserver(F);
    return i.observe(c), () => {
      i.disconnect(), c.removeEventListener("pointerdown", H), m && cancelAnimationFrame(m);
    };
  }
  function H(i) {
    if (i.button !== 0) return;
    X = i.clientX, p = i.clientY, u = 0, x = 0, f = true;
    const g = d === "x" ? c.scrollWidth : c.scrollHeight, _ = d === "x" ? c.scrollLeft : c.scrollTop, S = g - T;
    S > 0 && a > 1 && (l = _ / S * (a - 1), r = l), window.addEventListener("pointermove", N), window.addEventListener("pointerup", O);
  }
  function N(i) {
    i.preventDefault();
    const g = d === "x" ? X - i.clientX : p - i.clientY, _ = g / T;
    r += _, u += _, d === "x" ? X = i.clientX : p = i.clientY, x += Math.abs(g), x >= 10 && v(true);
  }
  function O() {
    window.removeEventListener("pointermove", N), window.removeEventListener("pointerup", O), f = false, !(x <= 10) && (u *= 2, U(), V());
  }
  function v(i) {
    i && !L ? (Y = performance.now(), m || (m = requestAnimationFrame(W))) : i || (m && cancelAnimationFrame(m), m = null), L = i;
  }
  function W(i) {
    m = requestAnimationFrame(W), E = i - Y, u *= A, f || (r += u), r = J(r, 0, a - 1), f ? l = nt(l, r, A, E) : l = nt(l, r, At, E), l = J(l, 0, a - 1);
    const _ = (d === "x" ? c.scrollWidth : c.scrollHeight) - T;
    if (_ > 0 && a > 1) {
      const S = l / (a - 1) * _;
      c.scrollTo({ left: d === "x" ? S : 0, top: d === "y" ? S : 0, behavior: "instant" });
    }
    isFinite(l) && (P == null ? void 0 : P(l)), !f && Bt(u, 8) === 0 && Math.abs(l - r) < 1e-3 && v(false), Y = i;
  }
  function U() {
    const i = r + u / (1 - A);
    let g = Math.round(i);
    g = J(g, 0, a - 1), u = (g - r) * (1 - A) * (1 / A);
  }
  function V() {
    const i = (g) => {
      g.preventDefault(), g.stopPropagation(), window.removeEventListener("click", i, true);
    };
    window.addEventListener("click", i, true);
  }
  const h = Q();
  return { update(i) {
    a = i.length, P = i.onProgress, b = i.axis ?? "auto", F();
  }, destroy() {
    h();
  } };
};
var Nt = G('<div class="snap-item svelte-fppx2u"><!></div>'), Ot = G('<div class="snap svelte-fppx2u"></div>');
function Wt(c, t) {
  rt(t, true);
  let a = K(t, "progress", 15);
  const P = new st("(pointer: coarse) and (hover: none)");
  function b(r) {
    a(a().value = r, true);
  }
  const X = M(() => ({ length: t.length, onProgress: b, axis: "auto" }));
  function p(r) {
    const l = P.current ? r.currentTarget.scrollLeft / (r.currentTarget.scrollWidth - r.currentTarget.clientWidth) : r.currentTarget.scrollTop / (r.currentTarget.scrollHeight - r.currentTarget.clientHeight), f = Xt(l, [0, 1], [0, t.length - 1]);
    isFinite(f) && a(a().value = f, true);
  }
  var u = Ot();
  pt(u, 21, () => ({ length: t.length }), Lt, (r, l, f) => {
    var L = Nt();
    at(L, `--index: ${f}`);
    var m = j(L);
    kt(m, () => t.renderCard, () => f), I(L), B(r, L);
  }), I(u), Et(u, (r, l) => Ht == null ? void 0 : Ht(r, l), () => e(X)), it("scroll", u, p), B(c, u), ot();
}
var qt = G('<div class="complete-button-wrapper svelte-2mf0gq"><button class="button"> </button></div>'), jt = G('<div role="application" tabindex="0"><!> <!></div>');
function oe(c, t) {
  rt(t, true);
  const a = Tt();
  let P = K(t, "aligned", 3, false), b = K(t, "tiltRange", 3, 12), X = K(t, "showCompleteButton", 3, true);
  const p = M(() => {
    var _a, _b, _c;
    return t.cards ? "$isLoaded" in t.cards ? t.cards.$isLoaded ? t.cards.length : 0 : t.cards.length : ((_a = t.deck) == null ? void 0 : _a.$isLoaded) && ((_b = t.deck) == null ? void 0 : _b.cards.$isLoaded) ? (_c = t.deck.cards) == null ? void 0 : _c.length : 0;
  }), u = M(() => {
    var _a;
    return e(p) > 0 && (((_a = t.completedCards) == null ? void 0 : _a.length) ?? 0) >= e(p);
  });
  let r = y(gt({ value: 0 })), l = y(0), f = y(1), L = M(() => Math.floor(e(r).value));
  et(() => e(L), () => {
    var _a, _b;
    const n = e(L);
    if (e(l) !== n && (k(f, e(l) > n ? -1 : 1, true), k(l, n, true)), t.onCardComplete) {
      const o = t.cards ? t.cards[n] : ((_a = t.deck) == null ? void 0 : _a.cards.$isLoaded) ? t.deck.cards[n] : null;
      (o == null ? void 0 : o.$isLoaded) && !((_b = t.completedCards) == null ? void 0 : _b.includes(o.$jazz.id)) && t.onCardComplete(o.$jazz.id);
    }
  }), et(() => e(r).value, () => {
    e(r).value % 1 === 0 && k(f, 1);
  });
  const m = new st("(pointer: coarse) and (hover: none)");
  let Y = y(0), E = y(0), x = y(void 0), T = y(0), z = y(0);
  mt(() => {
    if (m.current) return a.subscribeOrientation();
  });
  let D = new yt(), d = new St();
  function F(n) {
    if (m.current || !e(x)) return;
    k(T, n.clientX, true), k(z, n.clientY, true);
    const o = e(x).getBoundingClientRect(), s = n.clientX - o.x, C = n.clientY - o.y, w = s / o.width - 0.5, q = C / o.height - 0.5;
    k(Y, Math.max(-1, Math.min(1, w * 2)), true), k(E, Math.max(-1, Math.min(1, q * 2)), true);
  }
  function Q() {
    k(Y, 0), k(E, 0);
  }
  function H(n) {
    var _a, _b;
    if (O(e(v), n.clientX, n.clientY)) {
      n.stopPropagation();
      const o = t.cards ? "$isLoaded" in t.cards ? t.cards.$isLoaded : true : false, s = ((_a = t.deck) == null ? void 0 : _a.$isLoaded) && ((_b = t.deck) == null ? void 0 : _b.cards.$isLoaded);
      if (!o && !s) return;
      const C = t.cards ? t.cards[e(v)] : t.deck.cards.$isLoaded ? t.deck.cards[e(v)] : null;
      if (t.onCardClick && (C == null ? void 0 : C.$isLoaded)) {
        t.onCardClick(C, e(v));
        return;
      }
      d.has(e(v)) ? d.delete(e(v)) : d.add(e(v));
    }
  }
  function N(n) {
    (n.key === "Enter" || n.key === " ") && (n.preventDefault(), d.has(e(v)) ? d.delete(e(v)) : d.add(e(v)));
  }
  function O(n, o, s) {
    const C = D.get(n);
    if (!C) return false;
    const w = C.getBoundingClientRect();
    return o >= w.left && o <= w.right && s >= w.top && s <= w.bottom;
  }
  const v = M(() => Math.round(e(r).value));
  function W(n) {
    const o = D.get(n);
    if (!o) return false;
    const s = o.getBoundingClientRect();
    return e(T) >= s.left && e(T) <= s.right && e(z) >= s.top && e(z) <= s.bottom;
  }
  function U(n) {
    if (n !== e(v)) return { tiltX: 0, tiltY: 0 };
    if (m.current) return a.getTilt(b());
    if (!W(n)) return { tiltX: 0, tiltY: 0 };
    const o = e(E) * -1 * b(), s = e(Y) * b();
    return { tiltX: o, tiltY: s };
  }
  function V(n, o) {
    o ? D.set(n, o) : D.delete(n);
  }
  var h = jt();
  h.__pointermove = F, h.__click = H, h.__keydown = N;
  let i;
  var g = j(h);
  Wt(g, { get length() {
    return e(p);
  }, get transitionKey() {
    return t.transitionKey;
  }, get progress() {
    return e(r);
  }, set progress(o) {
    k(r, o, true);
  }, renderCard: (o, s = vt) => {
    const C = M(() => {
      const { tiltX: R, tiltY: Z } = U(s());
      return { tiltX: R, tiltY: Z };
    }), w = M(() => {
      var _a, _b;
      return t.cards ? t.cards[s()] : ((_a = t.deck) == null ? void 0 : _a.cards.$isLoaded) ? (_b = t.deck.cards) == null ? void 0 : _b[s()] : void 0;
    });
    var q = Ct(), ct = wt(q);
    {
      var lt = (R) => {
        {
          let Z = M(() => d.has(s())), dt = M(() => {
            var _a;
            return (_a = t.getViewTransitionName) == null ? void 0 : _a.call(t, e(w), s());
          });
          Yt(R, { get totalCards() {
            return e(p);
          }, get index() {
            return s();
          }, get progress() {
            return e(r).value;
          }, get tiltRange() {
            return b();
          }, get direction() {
            return e(f);
          }, get tiltX() {
            return e(C).tiltX;
          }, get tiltY() {
            return e(C).tiltY;
          }, get isFlipped() {
            return e(Z);
          }, onElementMount: (ut) => V(s(), ut), get card() {
            return e(w);
          }, get aligned() {
            return P();
          }, get viewTransitionName() {
            return e(dt);
          } });
        }
      };
      tt(ct, (R) => {
        var _a;
        ((_a = e(w)) == null ? void 0 : _a.$isLoaded) && R(lt);
      });
    }
    B(o, q);
  }, $$slots: { renderCard: true } });
  var _ = ht(g, 2);
  {
    var S = (n) => {
      var o = qt(), s = j(o);
      s.__click = () => {
        var _a;
        return (_a = t.onDeckComplete) == null ? void 0 : _a.call(t);
      };
      var C = j(s, true);
      I(s), I(o), $((w) => {
        s.disabled = !e(u), bt(C, w);
      }, [() => Rt()]), B(n, o);
    };
    tt(_, (n) => {
      t.deck && X() && n(S);
    });
  }
  I(h), Pt(h, (n) => k(x, n), () => e(x)), $((n) => {
    Mt(h, 1, n, "svelte-2mf0gq"), i = at(h, "", i, { "view-transition-name": t.viewTransitionName });
  }, [() => _t(xt("deck-container pointer-events-auto", t.class))]), it("pointerleave", h, Q), B(c, h), ot();
}
ft(["pointermove", "click", "keydown"]);
export {
  oe as D
};
