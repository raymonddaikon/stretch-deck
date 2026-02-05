import "../chunks/DsnmJJEf.js";
import { p as g, u as h, e as z, a as C, b as d, c as L, f as D, d as y, g as _, h as w, r as j } from "../chunks/Cerututf.js";
import { i as b } from "../chunks/DIL41Api.js";
import { C as S, D as x, g as q, A as n } from "../chunks/BPNiD34A.js";
import { S as A } from "../chunks/BjdZBxxB.js";
import { g as I } from "../chunks/C1832kSX.js";
import { p } from "../chunks/4zMF4u-F.js";
import { D as N } from "../chunks/BSmMqEvS.js";
var T = D('<div class="deck-page-item col-span-3 row-span-2 row-start-2 svelte-43vdmp"><!></div>');
function M(m, u) {
  g(u, true);
  const e = new S(x, () => p.params.deckId, { resolve: { cards: { $each: { thumbnails: { $each: true } } } } });
  let i = new A();
  const t = q();
  h(() => {
    var _a, _b;
    return t.title = ((_a = e.current) == null ? void 0 : _a.$isLoaded) ? e.current.name ?? "Deck" : "Deck", t.subtitle = ((_b = e.current) == null ? void 0 : _b.$isLoaded) ? e.current.description ?? "" : "", t.qrLink = `${p.url.origin}/add?type=deck&id=${e.current.$jazz.id}`, () => {
      t.qrLink = null;
    };
  });
  var s = z(), l = C(s);
  {
    var f = (a) => {
      var o = T(), v = y(o);
      {
        let $ = w(() => [...i]);
        N(v, { class: "deck-page-deck", get deck() {
          return e.current;
        }, get completedCards() {
          return _($);
        }, getViewTransitionName: (r) => `card-${r.$jazz.id}`, onDeckComplete: () => {
          e.current.$isLoaded && e.current.activity.$isLoaded && e.current.activity.$jazz.push(n.create({ completed: /* @__PURE__ */ new Date() })), I("/decks");
        }, onCardComplete: (r) => {
          if (i.add(r), e.current.$isLoaded) {
            const c = e.current.cards.find((k) => k.$jazz.id === r);
            (c == null ? void 0 : c.activity.$isLoaded) && c.activity.$jazz.push(n.create({ completed: /* @__PURE__ */ new Date() }));
          }
        } });
      }
      j(o), d(a, o);
    };
    b(l, (a) => {
      e.current.$isLoaded && a(f);
    });
  }
  d(m, s), L();
}
export {
  M as component
};
