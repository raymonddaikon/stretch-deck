import "../chunks/DsnmJJEf.js";
import { p as l, u, e as v, a as g, b as o, c as _, g as i, h, f as k } from "../chunks/Cerututf.js";
import { i as b } from "../chunks/DIL41Api.js";
import { g as x, C, D } from "../chunks/BPNiD34A.js";
import { p as L } from "../chunks/4zMF4u-F.js";
import { D as y } from "../chunks/DxqetvyJ.js";
import "../chunks/CsOUNaBs.js";
import { e as $ } from "../chunks/BehKwuDT.js";
var w = k('<div class="flex h-full w-full items-center justify-center"><span class="text-gray-500">Loading deck...</span></div>');
function F(c, d) {
  l(d, true);
  const t = x(), a = new C(D, () => L.params.deckId, { resolve: { cards: { $each: { thumbnails: { $each: true } } } } }), r = h(() => {
    var _a, _b, _c;
    return ((_a = t.me.current) == null ? void 0 : _a.$isLoaded) && ((_c = (_b = t.me.current.profile) == null ? void 0 : _b.cards) == null ? void 0 : _c.$isLoaded) ? t.me.current.profile.cards : void 0;
  });
  u(() => {
    t.title = $(), t.subtitle = "";
  });
  var s = v(), n = g(s);
  {
    var m = (e) => {
      y(e, { mode: "edit", get cards() {
        return i(r);
      }, get initialDeck() {
        return a.current;
      } });
    }, p = (e) => {
      var f = w();
      o(e, f);
    };
    b(n, (e) => {
      var _a;
      ((_a = a.current) == null ? void 0 : _a.$isLoaded) && i(r) ? e(m) : e(p, false);
    });
  }
  o(c, s), _();
}
export {
  F as component
};
