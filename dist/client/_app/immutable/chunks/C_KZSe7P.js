import { q as d, m as n, n as u, v as c, w as p } from "./Cerututf.js";
function m(s, o, r) {
  d(() => {
    var a = n(() => o(s, r == null ? void 0 : r()) || {});
    if (r && (a == null ? void 0 : a.update)) {
      var t = false, f = {};
      u(() => {
        var e = r();
        c(e), t && p(f, e) && (f = e, a.update(e));
      }), t = true;
    }
    if (a == null ? void 0 : a.destroy) return () => a.destroy();
  });
}
export {
  m as a
};
