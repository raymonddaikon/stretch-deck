import { x as o, k as _, y as c, E as d, z as y, H as E, A as T, B as b, C as f } from "./Cerututf.js";
import { B as p } from "./C-CTaGP6.js";
function k(t, i, u = false) {
  _ && c();
  var e = new p(t), h = u ? d : 0;
  function n(a, r) {
    if (_) {
      const l = y(t) === E;
      if (a === l) {
        var s = T();
        b(s), e.anchor = s, f(false), e.ensure(a, r), f(true);
        return;
      }
    }
    e.ensure(a, r);
  }
  o(() => {
    var a = false;
    i((r, s = true) => {
      a = true, n(s, r);
    }), a || n(false, null);
  }, h);
}
export {
  k as i
};
