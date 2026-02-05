const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.B-RNt7Q8.js","../chunks/DsnmJJEf.js","../chunks/Cerututf.js","../chunks/C-CTaGP6.js","../chunks/CD9opEPd.js","../chunks/DIL41Api.js","../chunks/D7IsHJFc.js","../chunks/BPNiD34A.js","../chunks/IOctRI-n.js","../chunks/C1832kSX.js","../chunks/AqSr3-NM.js","../chunks/D5Cy45eL.js","../assets/qr-share-button.BsO2xNSW.css","../chunks/DonAveOq.js","../chunks/CsOUNaBs.js","../chunks/CNcSoRr1.js","../chunks/DxXagp48.js","../chunks/BUb5wkkL.js","../chunks/SDOva4gF.js","../chunks/CBuXWW2l.js","../chunks/C_KZSe7P.js","../assets/0.Cff5ekUs.css","../nodes/1.COQraP9E.js","../chunks/4zMF4u-F.js","../nodes/2.CTLvpxnb.js","../nodes/3.rN0SAdQm.js","../chunks/Dp3AfHhX.js","../chunks/ZpSw4bIb.js","../chunks/BjdZBxxB.js","../chunks/DRISAwCd.js","../chunks/DntK2p3e.js","../chunks/XZEhH6UG.js","../assets/snap.DunAgRDf.css","../chunks/BSmMqEvS.js","../assets/deck.DD2TiumS.css","../chunks/PPVm8Dsz.js","../assets/3.Cxv52hV_.css","../nodes/4.BTOIy6fu.js","../chunks/Bwa2uxWR.js","../assets/item-grid.ZMrUFWIw.css","../assets/4._wE53Lhf.css","../nodes/5.Dvr2HPTD.js","../chunks/C254Q7CH.js","../chunks/yShKUf46.js","../assets/card-editor.DDmsb0Du.css","../nodes/6.dHFFGlyc.js","../chunks/DxqetvyJ.js","../chunks/BehKwuDT.js","../assets/deck-editor.C8-CU-wQ.css","../nodes/7.BZwy2wsT.js","../assets/7.DpFfmaOM.css","../nodes/8.CVm-2Da7.js","../assets/8.CFze4fpW.css","../nodes/9.Djkb8o3z.js","../nodes/10.DXk2_qta.js","../nodes/11.CwovivmR.js","../nodes/12.B_Xr9v9a.js","../assets/12.DdDncLnK.css"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
import { _ as o } from "../chunks/PPVm8Dsz.js";
import { d as Q } from "../chunks/CsOUNaBs.js";
import { Z as p, ae as U, g as m, V as Y, ah as Z, Q as q, p as B, F as H, u as J, _ as P, j as K, f as T, a as E, s as N, b as h, c as W, e as O, d as X, r as $, h as b, ai as tt, t as et } from "../chunks/Cerututf.js";
import { h as rt, m as at, u as st, o as ot, s as it } from "../chunks/C-CTaGP6.js";
import "../chunks/DsnmJJEf.js";
import { i as y } from "../chunks/DIL41Api.js";
import { p as R, c as I, b as L } from "../chunks/IOctRI-n.js";
let Dt, lt, Lt, At, Vt, k, bt, Rt, yt, It;
let __tla = (async () => {
  var _e, _t2;
  function nt(a) {
    return class extends ct {
      constructor(t) {
        super({
          component: a,
          ...t
        });
      }
    };
  }
  class ct {
    constructor(t) {
      __privateAdd(this, _e);
      __privateAdd(this, _t2);
      var _a;
      var s = /* @__PURE__ */ new Map(), n = (e, r) => {
        var _ = q(r, false, false);
        return s.set(e, _), _;
      };
      const c = new Proxy({
        ...t.props || {},
        $$events: {}
      }, {
        get(e, r) {
          return m(s.get(r) ?? n(r, Reflect.get(e, r)));
        },
        has(e, r) {
          return r === U ? true : (m(s.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
        },
        set(e, r, _) {
          return p(s.get(r) ?? n(r, _), _), Reflect.set(e, r, _);
        }
      });
      __privateSet(this, _t2, (t.hydrate ? rt : at)(t.component, {
        target: t.target,
        anchor: t.anchor,
        props: c,
        context: t.context,
        intro: t.intro ?? false,
        recover: t.recover
      })), (!((_a = t == null ? void 0 : t.props) == null ? void 0 : _a.$$host) || t.sync === false) && Y(), __privateSet(this, _e, c.$$events);
      for (const e of Object.keys(__privateGet(this, _t2))) e === "$set" || e === "$destroy" || e === "$on" || Z(this, e, {
        get() {
          return __privateGet(this, _t2)[e];
        },
        set(r) {
          __privateGet(this, _t2)[e] = r;
        },
        enumerable: true
      });
      __privateGet(this, _t2).$set = (e) => {
        Object.assign(c, e);
      }, __privateGet(this, _t2).$destroy = () => {
        st(__privateGet(this, _t2));
      };
    }
    $set(t) {
      __privateGet(this, _t2).$set(t);
    }
    $on(t, s) {
      __privateGet(this, _e)[t] = __privateGet(this, _e)[t] || [];
      const n = (...c) => s.call(this, ...c);
      return __privateGet(this, _e)[t].push(n), () => {
        __privateGet(this, _e)[t] = __privateGet(this, _e)[t].filter((c) => c !== n);
      };
    }
    $destroy() {
      __privateGet(this, _t2).$destroy();
    }
  }
  _e = new WeakMap();
  _t2 = new WeakMap();
  let _t;
  _t = (a) => Q(a.url).pathname;
  bt = {};
  var mt = T('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'), ut = T("<!> <!>", 1);
  function dt(a, t) {
    B(t, true);
    let s = R(t, "components", 23, () => []), n = R(t, "data_0", 3, null), c = R(t, "data_1", 3, null);
    H(() => t.stores.page.set(t.page)), J(() => {
      t.stores, t.page, t.constructors, s(), t.form, n(), c(), t.stores.page.notify();
    });
    let e = P(false), r = P(false), _ = P(null);
    ot(() => {
      const i = t.stores.page.subscribe(() => {
        m(e) && (p(r, true), K().then(() => {
          p(_, document.title || "untitled page", true);
        }));
      });
      return p(e, true), i;
    });
    const x = b(() => t.constructors[1]);
    var A = ut(), V = E(A);
    {
      var j = (i) => {
        const u = b(() => t.constructors[0]);
        var d = O(), v = E(d);
        I(v, () => m(u), (l, f) => {
          L(f(l, {
            get data() {
              return n();
            },
            get form() {
              return t.form;
            },
            get params() {
              return t.page.params;
            },
            children: (g, ft) => {
              var D = O(), M = E(D);
              I(M, () => m(x), (z, F) => {
                L(F(z, {
                  get data() {
                    return c();
                  },
                  get form() {
                    return t.form;
                  },
                  get params() {
                    return t.page.params;
                  }
                }), (G) => s()[1] = G, () => {
                  var _a;
                  return (_a = s()) == null ? void 0 : _a[1];
                });
              }), h(g, D);
            },
            $$slots: {
              default: true
            }
          }), (g) => s()[0] = g, () => {
            var _a;
            return (_a = s()) == null ? void 0 : _a[0];
          });
        }), h(i, d);
      }, w = (i) => {
        const u = b(() => t.constructors[0]);
        var d = O(), v = E(d);
        I(v, () => m(u), (l, f) => {
          L(f(l, {
            get data() {
              return n();
            },
            get form() {
              return t.form;
            },
            get params() {
              return t.page.params;
            }
          }), (g) => s()[0] = g, () => {
            var _a;
            return (_a = s()) == null ? void 0 : _a[0];
          });
        }), h(i, d);
      };
      y(V, (i) => {
        t.constructors[1] ? i(j) : i(w, false);
      });
    }
    var C = N(V, 2);
    {
      var S = (i) => {
        var u = mt(), d = X(u);
        {
          var v = (l) => {
            var f = tt();
            et(() => it(f, m(_))), h(l, f);
          };
          y(d, (l) => {
            m(r) && l(v);
          });
        }
        $(u), h(i, u);
      };
      y(C, (i) => {
        m(e) && i(S);
      });
    }
    h(a, A), W();
  }
  yt = nt(dt);
  Rt = [
    () => o(() => import("../nodes/0.B-RNt7Q8.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]), import.meta.url),
    () => o(() => import("../nodes/1.COQraP9E.js"), __vite__mapDeps([22,1,13,2,3,23,9]), import.meta.url),
    () => o(() => import("../nodes/2.CTLvpxnb.js"), __vite__mapDeps([24,1,2,7,6,14]), import.meta.url),
    () => o(() => import("../nodes/3.rN0SAdQm.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([25,1,2,3,5,4,26,8,7,6,9,23,27,28,14,29,30,10,31,11,12,32,33,20,34,19,35,36]), import.meta.url),
    () => o(() => import("../nodes/4.BTOIy6fu.js"), __vite__mapDeps([37,1,2,5,3,4,8,7,6,28,14,11,12,27,9,23,29,30,10,31,32,38,39,18,40]), import.meta.url),
    () => o(() => import("../nodes/5.Dvr2HPTD.js"), __vite__mapDeps([41,1,2,5,3,42,4,8,31,7,6,28,14,9,43,26,16,35,20,44]), import.meta.url),
    () => o(() => import("../nodes/6.dHFFGlyc.js"), __vite__mapDeps([45,1,13,2,5,3,46,8,4,7,6,28,14,11,12,9,43,31,26,27,23,29,30,10,32,33,20,34,38,39,15,47,48]), import.meta.url),
    () => o(() => import("../nodes/7.BZwy2wsT.js"), __vite__mapDeps([49,1,2,5,3,7,6,28,14,9,23,33,4,8,11,12,27,29,30,10,31,32,20,34,50]), import.meta.url),
    () => o(() => import("../nodes/8.CVm-2Da7.js"), __vite__mapDeps([51,1,2,5,3,4,9,8,7,6,23,33,28,14,11,12,27,29,30,10,31,32,20,34,47,38,39,17,52]), import.meta.url),
    () => o(() => import("../nodes/9.Djkb8o3z.js"), __vite__mapDeps([53,1,2,5,3,7,6,23,9,42,4,8,31,28,14,43,26,16,35,20,44,29]), import.meta.url),
    () => o(() => import("../nodes/10.DXk2_qta.js"), __vite__mapDeps([54,1,2,5,3,7,6,23,9,46,8,4,28,14,11,12,43,31,26,27,29,30,10,32,33,20,34,38,39,15,47,48]), import.meta.url),
    () => o(() => import("../nodes/11.CwovivmR.js"), __vite__mapDeps([55,1,2,3,5,23,9,6]), import.meta.url),
    () => o(() => import("../nodes/12.B_Xr9v9a.js"), __vite__mapDeps([56,1,2,3,5,8,7,6,4,10,30,14,31,57]), import.meta.url)
  ];
  It = [];
  Lt = {
    "/": [
      2
    ],
    "/add": [
      3
    ],
    "/cards": [
      4
    ],
    "/create-card": [
      5
    ],
    "/create-deck": [
      6
    ],
    "/decks": [
      8
    ],
    "/deck/[deckId]": [
      7
    ],
    "/edit/card/[cardId]": [
      9
    ],
    "/edit/deck/[deckId]": [
      10
    ],
    "/magic-link/verify": [
      11
    ],
    "/profile": [
      12
    ]
  };
  k = {
    handleError: (({ error: a }) => {
      console.error(a);
    }),
    reroute: _t || (() => {
    }),
    transport: {}
  };
  lt = Object.fromEntries(Object.entries(k.transport).map(([a, t]) => [
    a,
    t.decode
  ]));
  At = Object.fromEntries(Object.entries(k.transport).map(([a, t]) => [
    a,
    t.encode
  ]));
  Vt = false;
  Dt = (a, t) => lt[a](t);
})();
export {
  __tla,
  Dt as decode,
  lt as decoders,
  Lt as dictionary,
  At as encoders,
  Vt as hash,
  k as hooks,
  bt as matchers,
  Rt as nodes,
  yt as root,
  It as server_loads
};
