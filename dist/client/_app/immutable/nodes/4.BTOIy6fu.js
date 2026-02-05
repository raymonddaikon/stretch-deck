import "../chunks/DsnmJJEf.js";
import { X as D, p as j, u as M, c as $, f as F, d as X, g as a, h as b, r as Y, t as O, Y as Q, b as T, Z as v, _ as C, e as Z, a as A } from "../chunks/Cerututf.js";
import { i as E } from "../chunks/DIL41Api.js";
import { s as G, w as H } from "../chunks/CD9opEPd.js";
import { p as y } from "../chunks/IOctRI-n.js";
import { g as P, M as J } from "../chunks/BPNiD34A.js";
import { S as K } from "../chunks/BjdZBxxB.js";
import { S as U } from "../chunks/D5Cy45eL.js";
import { C as V } from "../chunks/ZpSw4bIb.js";
import { I as W } from "../chunks/Bwa2uxWR.js";
import { g as tt } from "../chunks/CsOUNaBs.js";
import { a as et } from "../chunks/SDOva4gF.js";
import { p as L } from "../chunks/DntK2p3e.js";
const rt = (e) => {
  const t = L("en", e == null ? void 0 : e.count, {});
  return t == "one" ? `${e == null ? void 0 : e.count} card` : t == "other" ? `${e == null ? void 0 : e.count} cards` : "card_count";
}, nt = (e) => {
  const t = L("jp", e == null ? void 0 : e.count, {});
  return t == "one" ? `${e == null ? void 0 : e.count} \u30AB\u30FC\u30C9` : t == "other" ? `${e == null ? void 0 : e.count} \u30AB\u30FC\u30C9` : "card_count";
}, ot = (e, t = {}) => (t.locale ?? tt()) === "en" ? rt(e) : nt(e);
var at = F('<div class="flex h-full w-full items-center justify-center py-1"><button><!></button></div>');
function st(e, t) {
  j(t, true);
  const l = P();
  let h = y(t, "scrollIndex", 15, 0), c = y(t, "totalItems", 15, 0), d = y(t, "itemsShown", 15, 0);
  const u = 10, m = new J("(pointer: coarse) and (hover: none)");
  M(() => {
    if (m.current) return l.subscribeOrientation();
  });
  let p = new U(), f = C(null), s = new K();
  function k(o) {
    s.has(o) ? s.delete(o) : s.add(o);
  }
  function N(o, r) {
    if (m.current) return;
    v(f, o, true);
    const n = r.currentTarget.getBoundingClientRect(), _ = r.clientX - n.x, w = r.clientY - n.y, g = _ / n.width - 0.5, i = w / n.height - 0.5, x = Math.max(-1, Math.min(1, g * 2)), I = Math.max(-1, Math.min(1, i * 2));
    p.set(o, { tiltX: I * -u, tiltY: x * u });
  }
  function R(o) {
    m.current || (v(f, null), p.set(o, { tiltX: 0, tiltY: 0 }));
  }
  function q(o) {
    return m.current ? l.getTilt(u) : p.get(o) ?? { tiltX: 0, tiltY: 0 };
  }
  W(e, { get items() {
    return t.cards;
  }, searchProperty: "name", searchPlaceholder: "Search cards...", emptyTitle: "No cards found", onSelect: (r) => {
  }, emptyDescription: "Try a different search term", class: "pointer-events-auto col-span-3 row-span-2 row-start-2 md:row-span-3 md:overflow-x-hidden! md:px-35", get scrollIndex() {
    return h();
  }, set scrollIndex(r) {
    h(r);
  }, get totalItems() {
    return c();
  }, set totalItems(r) {
    c(r);
  }, get itemsShown() {
    return d();
  }, set itemsShown(r) {
    d(r);
  }, children: (r, z) => {
    let n = () => z == null ? void 0 : z().item, _ = () => z == null ? void 0 : z().highlighted;
    const w = b(() => q(n().$jazz.id));
    var g = at(), i = X(g);
    let x;
    i.__pointermove = (S) => N(n().$jazz.id, S), i.__click = () => k(n().$jazz.id);
    var I = X(i);
    {
      let S = b(() => s.has(n().$jazz.id)), B = b(() => `card-${n().$jazz.id}`);
      V(I, { totalCards: 0, index: 0, progress: 0, direction: 1, get tiltX() {
        return a(w).tiltX;
      }, get tiltY() {
        return a(w).tiltY;
      }, tiltRange: u, get isFlipped() {
        return a(S);
      }, shadow: true, class: "card-grid-card", get card() {
        return n();
      }, get viewTransitionName() {
        return a(B);
      } });
    }
    Y(i), Y(g), O(() => x = G(i, 1, "card-grid-item relative h-full w-full overflow-visible rounded-md svelte-noou3q", null, x, { "ring-2": _(), "ring-accent-500": _() })), Q("pointerleave", i, () => R(n().$jazz.id)), T(r, g);
  }, $$slots: { default: true } }), $();
}
D(["pointermove", "click"]);
function xt(e, t) {
  j(t, true);
  const l = P();
  let h = C(0), c = C(0), d = C(0);
  M(() => {
    l.title = et();
  }), H(() => [a(d), a(c)], () => {
    l.subtitle = `${a(d)}/${ot({ count: a(c) })}`;
  });
  var u = Z(), m = A(u);
  {
    var p = (f) => {
      st(f, { get cards() {
        return l.me.current.profile.cards;
      }, get scrollIndex() {
        return a(h);
      }, set scrollIndex(s) {
        v(h, s, true);
      }, get totalItems() {
        return a(c);
      }, set totalItems(s) {
        v(c, s, true);
      }, get itemsShown() {
        return a(d);
      }, set itemsShown(s) {
        v(d, s, true);
      } });
    };
    E(m, (f) => {
      l.me.current.$isLoaded && l.me.current.profile.cards.$isLoaded && f(p);
    });
  }
  T(e, u), $();
}
export {
  xt as component
};
