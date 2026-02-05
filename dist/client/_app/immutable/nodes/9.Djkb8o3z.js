import "../chunks/DsnmJJEf.js";
import { p as d, u as f, e as l, a as u, b as o, c as v, f as g } from "../chunks/Cerututf.js";
import { i as _ } from "../chunks/DIL41Api.js";
import { C, a as h, g as b } from "../chunks/BPNiD34A.js";
import { p as x } from "../chunks/4zMF4u-F.js";
import { C as y } from "../chunks/C254Q7CH.js";
import "../chunks/CsOUNaBs.js";
import { e as L } from "../chunks/DRISAwCd.js";
var w = g('<div class="flex h-full w-full items-center justify-center"><span class="text-gray-500">Loading card...</span></div>');
function D(s, i) {
  d(i, true);
  const t = new C(h, () => x.params.cardId, { resolve: { thumbnails: { $each: true } } }), r = b();
  f(() => {
    r.title = L(), r.subtitle = "";
  });
  var e = l(), m = u(e);
  {
    var p = (a) => {
      y(a, { mode: "edit", get initialCard() {
        return t.current;
      } });
    }, n = (a) => {
      var c = w();
      o(a, c);
    };
    _(m, (a) => {
      t.current.$isLoaded ? a(p) : a(n, false);
    });
  }
  o(s, e), v();
}
export {
  D as component
};
