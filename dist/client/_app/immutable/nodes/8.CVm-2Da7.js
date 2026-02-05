import "../chunks/DsnmJJEf.js";
import { X as he, p as O, g as o, h as D, c as ee, V as H, Z as k, _ as S, f as C, d as s, r as n, s as L, t as P, b as w, a as te, u as ke, e as ge } from "../chunks/Cerututf.js";
import { i as A } from "../chunks/DIL41Api.js";
import { s as xe, g as J, w as be } from "../chunks/CD9opEPd.js";
import { g as K, a as ze } from "../chunks/C1832kSX.js";
import { s as g } from "../chunks/C-CTaGP6.js";
import { p as Y } from "../chunks/IOctRI-n.js";
import { g as re } from "../chunks/BPNiD34A.js";
import { p as we } from "../chunks/4zMF4u-F.js";
import { D as ye } from "../chunks/BSmMqEvS.js";
import { Q as je } from "../chunks/D5Cy45eL.js";
import { g as B } from "../chunks/CsOUNaBs.js";
import { r as Z } from "../chunks/ZpSw4bIb.js";
import { d as $e, c as Ie } from "../chunks/BjdZBxxB.js";
import { e as De } from "../chunks/BehKwuDT.js";
import { I as Le } from "../chunks/Bwa2uxWR.js";
import { a as Pe } from "../chunks/BUb5wkkL.js";
import { p as oe } from "../chunks/DntK2p3e.js";
const Se = () => "You do not have delete permission for this deck, you can only remove it from your collection.", Ce = () => "You do not have delete permission for this deck, you can only remove it from your collection.", Te = (a = {}, t = {}) => (t.locale ?? B()) === "en" ? Se() : Ce(), Me = () => "Edit", Ne = () => "\u7DE8\u96C6", Re = (a = {}, t = {}) => (t.locale ?? B()) === "en" ? Me() : Ne(), Ee = (a) => {
  const t = oe("en", a == null ? void 0 : a.count, {});
  return t == "one" ? `${a == null ? void 0 : a.count} deck` : t == "other" ? `${a == null ? void 0 : a.count} decks` : "deck_count";
}, Ve = (a) => {
  const t = oe("jp", a == null ? void 0 : a.count, {});
  return t == "one" ? `${a == null ? void 0 : a.count} \u30C7\u30C3\u30AD` : t == "other" ? `${a == null ? void 0 : a.count} \u30C7\u30C3\u30AD` : "deck_count";
}, Fe = (a, t = {}) => (t.locale ?? B()) === "en" ? Ee(a) : Ve(a);
var Qe = C('<div class="deck-header-area absolute top-0 left-0 z-100 flex w-full items-start justify-between svelte-oevddh"><span class="truncate bg-foreground p-1 text-center text-base font-medium text-black"> </span> <!></div>'), Ye = C('<div class="deck-grid-wrapper relative flex h-full w-full flex-col items-center justify-start border border-border md:overflow-x-visible! svelte-oevddh"><div class="deck-card-area flex w-full flex-1 items-center justify-center md:overflow-x-visible! svelte-oevddh"><div><!></div></div></div>'), qe = C('<button type="button" class="flex cursor-pointer items-center justify-center bg-foreground p-1 text-center text-base font-medium text-black opacity-100 transition-opacity"> </button>'), Ue = C('<button type="button" class="button-destructive flex cursor-pointer items-center justify-center p-1 text-center text-base font-medium opacity-100 transition-opacity"> </button>'), We = C('<div class="absolute inset-0 z-200 flex items-center justify-center rounded-sm bg-background/80 backdrop-blur-sm"><div class="flex max-w-4/5 flex-col gap-4 p-6"><p class="text-base font-medium text-black"> </p> <p class="text-sm font-medium text-black"> </p> <div class="flex gap-2"><button class="button flex-1 rounded-md transition-colors"> </button> <button class="button-destructive flex-1 transition-colors"> </button></div></div></div>'), Xe = C('<div class="absolute bottom-0 left-0 z-100 flex w-full items-end justify-between"><!> <span class="flex items-center justify-center bg-foreground p-1 text-center text-base font-medium text-black opacity-100 transition-opacity"> </span></div> <!>', 1);
function Ze(a, t) {
  O(t, true);
  const d = re();
  function V(r) {
    const e = r.$jazz.owner.myRole();
    return !!e && e !== "reader" && e !== "readerInvite";
  }
  let y = Y(t, "fromPath", 3, null), x = Y(t, "scrollIndex", 15, 0), T = Y(t, "totalItems", 15, 0), M = Y(t, "itemsShown", 15, 0);
  function q(r) {
    if (!r) return null;
    const e = r.match(/^\/deck\/([^/]+)/), i = r.match(/^\/edit\/deck\/([^/]+)/);
    return (e == null ? void 0 : e[1]) ?? (i == null ? void 0 : i[1]) ?? null;
  }
  let N = S(null);
  const _ = D(() => o(N) ?? q(y()));
  let v = S(null);
  const ae = D(() => (r, e) => {
    r.stopPropagation(), H(() => {
      k(N, e, true);
    }), K(`/edit/deck/${e}`);
  }), se = D(() => (r) => {
    H(() => {
      k(N, r.$jazz.id, true);
    }), K(`/deck/${r.$jazz.id}`);
  }), ne = D(() => {
    const r = /* @__PURE__ */ new Map();
    if (o(_)) {
      const e = t.decks.find((i) => i.$jazz.id === o(_));
      if ((e == null ? void 0 : e.$isLoaded) && e.cards.$isLoaded) for (const i of e.cards) (i == null ? void 0 : i.$isLoaded) && r.set(i.$jazz.id, o(_));
    } else for (const e of t.decks) if (!(!e.$isLoaded || !e.cards.$isLoaded)) for (const i of e.cards) (i == null ? void 0 : i.$isLoaded) && (r.has(i.$jazz.id) || r.set(i.$jazz.id, e.$jazz.id));
    return r;
  });
  function ce(r, e) {
    if (o(ne).get(e.$jazz.id) === r) return `card-${e.$jazz.id}`;
  }
  const ie = D(() => async (r) => {
    if (!d.me.current.$isLoaded) return;
    const e = await d.me.current.profile.$jazz.ensureLoaded({ resolve: { cards: true, decks: { $each: { cards: true } } } });
    e.decks.$isLoaded && e.decks.$jazz.remove((i) => i.$jazz.id === r);
  });
  Le(a, { get items() {
    return t.decks;
  }, searchProperty: "name", searchPlaceholder: "Search decks...", emptyTitle: "No decks found", get onSelect() {
    return o(se);
  }, minWidth: "300px", emptyDescription: "Try a different search term", class: "pointer-events-auto col-span-3 row-span-2 row-start-2 md:row-span-3 md:overflow-x-hidden! md:px-35", get scrollIndex() {
    return x();
  }, set scrollIndex(u) {
    x(u);
  }, get totalItems() {
    return T();
  }, set totalItems(u) {
    T(u);
  }, get itemsShown() {
    return M();
  }, set itemsShown(u) {
    M(u);
  }, header: (u, j) => {
    let l = () => j == null ? void 0 : j().item;
    var h = Qe(), m = s(h), b = s(m, true);
    n(m);
    var z = L(m, 2);
    {
      let $ = D(() => `${we.url.origin}/add?type=deck&id=${l().$jazz.id}`);
      je(z, { get shareUrl() {
        return o($);
      }, class: "qr-code-button" });
    }
    n(h), P(() => g(b, l().name)), w(u, h);
  }, children: (u, j) => {
    let l = () => j == null ? void 0 : j().item, h = () => j == null ? void 0 : j().highlighted;
    var m = Ye(), b = s(m), z = s(b);
    let $;
    var F = s(z);
    ye(F, { aligned: true, tiltRange: 8, get cards() {
      return l().cards;
    }, class: "deck-grid-deck", getViewTransitionName: (U) => ce(l().$jazz.id, U) }), n(z), n(b), n(m), P(() => $ = xe(z, 1, "deck-grid-item relative h-full w-full overflow-x-visible overflow-y-clip svelte-oevddh", null, $, { "ring-2": h(), "ring-accent-500": h() })), w(u, m);
  }, footer: (u, j) => {
    let l = () => j == null ? void 0 : j().item;
    var h = Xe(), m = te(h), b = s(m);
    {
      var z = (p) => {
        var c = qe();
        c.__click = (f) => o(ae)(f, l().$jazz.id);
        var I = s(c, true);
        n(c), P((f, R) => {
          J(c, "aria-label", f), g(I, R);
        }, [() => De(), () => Re()]), w(p, c);
      }, $ = (p) => {
        var c = Ue();
        c.__click = (f) => {
          f.stopPropagation(), k(v, l().$jazz.id, true);
        };
        var I = s(c, true);
        n(c), P((f, R) => {
          J(c, "aria-label", f), g(I, R);
        }, [() => Z(), () => Z()]), w(p, c);
      };
      A(b, (p) => {
        V(l()) ? p(z) : p($, false);
      });
    }
    var F = L(b, 2), U = s(F, true);
    n(F), n(m);
    var le = L(m, 2);
    {
      var de = (p) => {
        var c = We(), I = s(c), f = s(I), R = s(f, true);
        n(f);
        var W = L(f, 2), ue = s(W, true);
        n(W);
        var G = L(W, 2), Q = s(G);
        Q.__click = (E) => {
          E.stopPropagation(), k(v, null);
        };
        var me = s(Q, true);
        n(Q);
        var X = L(Q, 2);
        X.__click = (E) => {
          E.stopPropagation(), o(ie)(l().$jazz.id), k(v, null);
        };
        var fe = s(X, true);
        n(X), n(G), n(I), n(c), P((E, ve, pe, _e) => {
          g(R, E), g(ue, ve), g(me, pe), g(fe, _e);
        }, [() => $e(), () => Te(), () => Ie(), () => Z()]), w(p, c);
      };
      A(le, (p) => {
        o(v) === l().$jazz.id && p(de);
      });
    }
    P(() => g(U, l().cards.length)), w(u, h);
  }, $$slots: { header: true, default: true, footer: true } }), ee();
}
he(["click"]);
function ut(a, t) {
  O(t, true);
  const d = re();
  let V = S(0), y = S(0), x = S(0), T = S(null);
  ze(({ from: _ }) => {
    k(T, (_ == null ? void 0 : _.url.pathname) ?? null, true);
  }), ke(() => {
    d.title = Pe();
  }), be(() => [o(x), o(y)], () => {
    d.subtitle = `${o(x)}/${Fe({ count: o(y) })}`;
  });
  var M = ge(), q = te(M);
  {
    var N = (_) => {
      Ze(_, { get decks() {
        return d.me.current.profile.decks;
      }, get fromPath() {
        return o(T);
      }, get scrollIndex() {
        return o(V);
      }, set scrollIndex(v) {
        k(V, v, true);
      }, get totalItems() {
        return o(y);
      }, set totalItems(v) {
        k(y, v, true);
      }, get itemsShown() {
        return o(x);
      }, set itemsShown(v) {
        k(x, v, true);
      } });
    };
    A(q, (_) => {
      d.me.current.$isLoaded && d.me.current.profile.decks.$isLoaded && _(N);
    });
  }
  w(a, M), ee();
}
export {
  ut as component
};
