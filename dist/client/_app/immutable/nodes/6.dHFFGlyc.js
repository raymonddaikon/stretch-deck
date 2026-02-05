import "../chunks/DsnmJJEf.js";
import { i as s } from "../chunks/DonAveOq.js";
import { p, e as n, a as c, b as f, c as d } from "../chunks/Cerututf.js";
import { i as u } from "../chunks/DIL41Api.js";
import { D as l } from "../chunks/DxqetvyJ.js";
import { g } from "../chunks/BPNiD34A.js";
function k(t, a) {
  p(a, false);
  const r = g();
  s();
  var e = n(), i = c(e);
  {
    var m = (o) => {
      l(o, { mode: "create", get cards() {
        return r.me.current.profile.cards;
      } });
    };
    u(i, (o) => {
      r.me.current.$isLoaded && r.me.current.profile.cards.$isLoaded && o(m);
    });
  }
  f(t, e), d();
}
export {
  k as component
};
