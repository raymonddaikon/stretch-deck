var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _t2, _e, _t3, _e2, _s, _r, _n, _t4, _e3, _s2, _r2, _n2, _a, _o, _l, _i, _d, _c, _It_instances, h_fn, f_fn, _u, _t5, _e4, _s3, _r3, _n3, _a2, _o2;
import "./DsnmJJEf.js";
import { al as ct, bh as N, _ as P, Z as p, g as r, h as v, p as dt, a5 as J, j as ut, u as Q, f as H, d as G, r as L, b as V, c as ft, ag as $, s as tt, t as gt, Y as mt } from "./Cerututf.js";
import { a as K } from "./C-CTaGP6.js";
import { i as pt } from "./DIL41Api.js";
import { q as U, w as et, u as bt, o as it, f as vt, b as wt, c as Mt } from "./CD9opEPd.js";
import { p as O, b as nt } from "./IOctRI-n.js";
import "./BPNiD34A.js";
function T(s) {
  return typeof s == "function";
}
function Rt(s) {
  return T(s) && s.length === 0;
}
function X(s, t) {
  if (Rt(s)) {
    const e = s();
    return e === void 0 ? t : e;
  }
  return s === void 0 ? t : s;
}
const xt = typeof window < "u" ? window : void 0;
function yt(s) {
  let t = s.activeElement;
  for (; t == null ? void 0 : t.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n;
  }
  return t;
}
class At {
  constructor(t = {}) {
    __privateAdd(this, _t2);
    __privateAdd(this, _e);
    const { window: n = xt, document: e = n == null ? void 0 : n.document } = t;
    n !== void 0 && (__privateSet(this, _t2, e), __privateSet(this, _e, ct((a) => {
      const u = N(n, "focusin", a), c = N(n, "focusout", a);
      return () => {
        u(), c();
      };
    })));
  }
  get current() {
    var _a3;
    return (_a3 = __privateGet(this, _e)) == null ? void 0 : _a3.call(this), __privateGet(this, _t2) ? yt(__privateGet(this, _t2)) : null;
  }
}
_t2 = new WeakMap();
_e = new WeakMap();
new At();
var st = Object.prototype.hasOwnProperty;
function rt(s, t, n) {
  for (n of s.keys()) if (E(n, t)) return n;
}
function E(s, t) {
  var n, e, a;
  if (s === t) return true;
  if (s && t && (n = s.constructor) === t.constructor) {
    if (n === Date) return s.getTime() === t.getTime();
    if (n === RegExp) return s.toString() === t.toString();
    if (n === Array) {
      if ((e = s.length) === t.length) for (; e-- && E(s[e], t[e]); ) ;
      return e === -1;
    }
    if (n === Set) {
      if (s.size !== t.size) return false;
      for (e of s) if (a = e, a && typeof a == "object" && (a = rt(t, a), !a) || !t.has(a)) return false;
      return true;
    }
    if (n === Map) {
      if (s.size !== t.size) return false;
      for (e of s) if (a = e[0], a && typeof a == "object" && (a = rt(t, a), !a) || !E(e[1], t.get(a))) return false;
      return true;
    }
    if (n === ArrayBuffer) s = new Uint8Array(s), t = new Uint8Array(t);
    else if (n === DataView) {
      if ((e = s.byteLength) === t.byteLength) for (; e-- && s.getInt8(e) === t.getInt8(e); ) ;
      return e === -1;
    }
    if (ArrayBuffer.isView(s)) {
      if ((e = s.byteLength) === t.byteLength) for (; e-- && s[e] === t[e]; ) ;
      return e === -1;
    }
    if (!n || typeof s == "object") {
      e = 0;
      for (n in s) if (st.call(s, n) && ++e && !st.call(t, n) || !(n in t) || !E(s[n], t[n])) return false;
      return Object.keys(t).length === e;
    }
  }
  return s !== s && t !== t;
}
const _ = { ARROW_DOWN: "ArrowDown", ARROW_LEFT: "ArrowLeft", ARROW_RIGHT: "ArrowRight", ARROW_UP: "ArrowUp" };
function ot(s) {
  return s === true ? "" : s === false ? void 0 : s;
}
function St(s) {
  return Object.keys(s);
}
let Ct = 0;
function Dt() {
  return `melt-${Ct++}`;
}
function z(s, t) {
  return t.reduce((n, e) => (n[e] = `data-melt-${s}-${e}`, n), {});
}
function Ot(s) {
  const t = Dt();
  return Object.keys(s).reduce((n, e) => (n[e] = `${e}-${t}`, n), {});
}
function R(s, t) {
  const n = z(s, t), e = St(n).reduce((a, u) => (a[u] = `[${n[u]}]`, a), {});
  return { dataAttrs: n, dataSelectors: e, createIds: () => Ot(n), createReferences: () => _t() };
}
function _t() {
  const s = /* @__PURE__ */ new Map(), t = U();
  return { get(n) {
    return s.get(n);
  }, attach(n) {
    return (e) => (s.set(n, e), () => s.delete(n));
  }, key: t };
}
R("accordion", ["root", "item", "trigger", "heading", "content"]);
z("avatar", ["image", "fallback"]);
class kt {
  constructor({ value: t, onChange: n, ...e }) {
    __privateAdd(this, _t3, P());
    __privateAdd(this, _e2);
    __privateAdd(this, _s);
    __privateAdd(this, _r);
    __privateAdd(this, _n);
    __privateSet(this, _e2, t), __privateSet(this, _s, n), __privateSet(this, _r, "defaultValue" in e ? e == null ? void 0 : e.defaultValue : void 0), __privateSet(this, _n, e.equalityCheck), p(__privateGet(this, _t3), X(t, __privateGet(this, _r)), true);
  }
  get current() {
    return T(__privateGet(this, _e2)) ? __privateGet(this, _e2).call(this) ?? __privateGet(this, _r) ?? r(__privateGet(this, _t3)) : r(__privateGet(this, _t3));
  }
  set current(t) {
    var _a3, _b;
    if (!(__privateGet(this, _n) === true && this.current === t) && !(T(__privateGet(this, _n)) && __privateGet(this, _n).call(this, this.current, t))) {
      if (T(__privateGet(this, _e2))) {
        (_a3 = __privateGet(this, _s)) == null ? void 0 : _a3.call(this, t);
        return;
      }
      p(__privateGet(this, _t3), t, true), (_b = __privateGet(this, _s)) == null ? void 0 : _b.call(this, t);
    }
  }
}
_t3 = new WeakMap();
_e2 = new WeakMap();
_s = new WeakMap();
_r = new WeakMap();
_n = new WeakMap();
R("collapsible", ["trigger", "content"]);
R("popover", ["trigger", "content", "arrow"]);
R("combobox", ["input", "trigger", "content", "option"]);
R("fileupload", ["dropzone", "input"]);
R("pin-input", ["root", "input"]);
z("progress", ["root", "progress"]);
R("radio-group", ["root", "item", "label", "hidden-input"]);
R("select", ["trigger", "content", "option"]);
R("slider", ["root", "thumb"]);
z("tabs", ["trigger", "content", "trigger-list"]);
R("toaster", ["root"]);
R("toaster-toast", ["content", "title", "description", "close"]);
z("toggle", ["trigger", "hidden-input"]);
R("tooltip", ["trigger", "content", "arrow"]);
z("tree", ["root", "item", "group"]);
const { dataAttrs: Z } = R("spatial-menu", ["root", "input", "item"]);
class It {
  constructor(t = {}) {
    __privateAdd(this, _It_instances);
    __privateAdd(this, _t4);
    __privateAdd(this, _e3, v(() => __privateGet(this, _t4).onSelect));
    __privateAdd(this, _s2, v(() => typeof __privateGet(this, _t4).wrap == "function" ? __privateGet(this, _t4).wrap() : __privateGet(this, _t4).wrap ?? false));
    __privateAdd(this, _r2, v(() => X(__privateGet(this, _t4).scrollBehavior, "smooth")));
    __privateAdd(this, _n2, v(() => X(__privateGet(this, _t4).toleranceCol, 16)));
    __privateAdd(this, _a, v(() => X(__privateGet(this, _t4).toleranceRow, 16)));
    __privateAdd(this, _o, v(() => X(__privateGet(this, _t4).crossAxis, false)));
    __privateAdd(this, _l, {});
    __privateAdd(this, _i, []);
    __privateAdd(this, _d, P("keyboard"));
    __privateAdd(this, _c);
    __privateAdd(this, _u, (t) => {
      var _a3, _b;
      if ([_.ARROW_DOWN, _.ARROW_UP, _.ARROW_LEFT, _.ARROW_RIGHT].includes(t.key)) {
        if (t.preventDefault(), t.stopPropagation(), this.selectionMode = "keyboard", !__privateGet(this, _i).find((u) => u.highlighted)) {
          const u = __privateGet(this, _i).find((c) => !c.disabled);
          this.highlighted = (u == null ? void 0 : u.value) ?? null;
          return;
        }
        let a = null;
        switch (t.key) {
          case _.ARROW_UP:
            a = __privateMethod(this, _It_instances, h_fn).call(this, "up");
            break;
          case _.ARROW_DOWN:
            a = __privateMethod(this, _It_instances, h_fn).call(this, "down");
            break;
          case _.ARROW_LEFT:
            a = __privateMethod(this, _It_instances, h_fn).call(this, "left");
            break;
          case _.ARROW_RIGHT:
            a = __privateMethod(this, _It_instances, h_fn).call(this, "right");
            break;
        }
        a && (this.highlighted = a.value, this.scrollBehavior !== null && ((_a3 = a.el) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: this.scrollBehavior })));
      }
      if (t.key === "Enter") {
        t.preventDefault(), t.stopPropagation();
        const e = __privateGet(this, _i).find((a) => a.highlighted);
        e && !e.disabled && ((_b = e.onSelect) == null ? void 0 : _b.call(e));
      }
    });
    __privateSet(this, _t4, t), __privateSet(this, _c, new kt({ value: t.highlighted, onChange: t.onHighlightChange, defaultValue: null }));
  }
  get onSelect() {
    return r(__privateGet(this, _e3));
  }
  set onSelect(t) {
    p(__privateGet(this, _e3), t);
  }
  get wrap() {
    return r(__privateGet(this, _s2));
  }
  set wrap(t) {
    p(__privateGet(this, _s2), t);
  }
  get scrollBehavior() {
    return r(__privateGet(this, _r2));
  }
  set scrollBehavior(t) {
    p(__privateGet(this, _r2), t);
  }
  get toleranceCol() {
    return r(__privateGet(this, _n2));
  }
  set toleranceCol(t) {
    p(__privateGet(this, _n2), t);
  }
  get toleranceRow() {
    return r(__privateGet(this, _a));
  }
  set toleranceRow(t) {
    p(__privateGet(this, _a), t);
  }
  get crossAxis() {
    return r(__privateGet(this, _o));
  }
  set crossAxis(t) {
    p(__privateGet(this, _o), t);
  }
  get selectionMode() {
    return r(__privateGet(this, _d));
  }
  set selectionMode(t) {
    p(__privateGet(this, _d), t, true);
  }
  get highlighted() {
    return __privateGet(this, _c).current;
  }
  set highlighted(t) {
    __privateGet(this, _c).current = t;
  }
  get root() {
    return { [Z.root]: "", tabindex: 0, onkeydown: __privateGet(this, _u), [U()]: (t) => {
      __privateGet(this, _l).root = t;
      const n = N(document.body, "mousemove", () => {
        this.selectionMode = "mouse";
      });
      return () => {
        delete __privateGet(this, _l).root, n();
      };
    } };
  }
  get input() {
    return { [Z.input]: "", onkeydown: __privateGet(this, _u), [U()]: (t) => (__privateGet(this, _l).input = t, () => {
      delete __privateGet(this, _l).input;
    }) };
  }
  getItem(t, n) {
    const e = new zt({ value: t, onSelect: n == null ? void 0 : n.onSelect, disabled: n == null ? void 0 : n.disabled, parent: this, lifecycle: { onMount: () => {
      __privateGet(this, _i).push(e);
    }, onUnmount: () => {
      var _a3;
      __privateSet(this, _i, __privateGet(this, _i).filter((a) => a !== e)), e.highlighted && (this.highlighted = ((_a3 = __privateGet(this, _i)[0]) == null ? void 0 : _a3.value) ?? null);
    } } });
    return e;
  }
}
_t4 = new WeakMap();
_e3 = new WeakMap();
_s2 = new WeakMap();
_r2 = new WeakMap();
_n2 = new WeakMap();
_a = new WeakMap();
_o = new WeakMap();
_l = new WeakMap();
_i = new WeakMap();
_d = new WeakMap();
_c = new WeakMap();
_It_instances = new WeakSet();
h_fn = function(t) {
  const n = __privateGet(this, _i).find((i) => i.highlighted), e = n == null ? void 0 : n.extendedRect;
  if (!e) return null;
  const a = __privateGet(this, _i).filter((i) => i !== n && i.extendedRect && !i.disabled);
  if (a.length === 0) return null;
  const u = (i, o, b) => {
    if (b === "up" || b === "down") {
      if (this.toleranceCol === null) {
        const x = Math.min(i.right, o.right) - Math.max(i.left, o.left), S = Math.min(i.width, o.width);
        return x > S * 0.5;
      }
      const h = i.left + i.width / 2, w = o.left + o.width / 2;
      return Math.abs(h - w) <= this.toleranceCol;
    } else {
      if (this.toleranceRow === null) {
        const x = Math.min(i.bottom, o.bottom) - Math.max(i.top, o.top), S = Math.min(i.height, o.height);
        return x > S * 0.5;
      }
      const h = i.top + i.height / 2, w = o.top + o.height / 2;
      return Math.abs(h - w) <= this.toleranceRow;
    }
  };
  let c = null, d = 1 / 0;
  for (const i of a) {
    const o = i.extendedRect;
    let b = false, h = 0;
    if (t === "left" ? b = o.right <= e.left : t === "right" ? b = o.left >= e.right : t === "up" ? b = o.bottom <= e.top : t === "down" && (b = o.top >= e.bottom), !b) continue;
    const w = u(e, o, t);
    if (!(w && ((t === "left" || t === "right") && this.toleranceRow && Math.abs(e.centerY - o.centerY) > this.toleranceRow || (t === "up" || t === "down") && this.toleranceCol && Math.abs(e.centerX - o.centerX) > this.toleranceCol))) {
      if (t === "left" ? h = e.left - o.right : t === "right" ? h = o.left - e.right : t === "up" ? h = e.top - o.bottom : t === "down" && (h = o.top - e.bottom), w) (!c || !u(e, c.extendedRect, t) || h < d) && (d = h, c = i);
      else if (this.crossAxis && (!c || !u(e, c.extendedRect, t))) {
        let x = h;
        if (t === "up" || t === "down") {
          const S = Math.min(Math.abs(e.left - o.right), Math.abs(e.right - o.left), Math.abs(e.centerX - o.centerX));
          x += S * 2;
        } else {
          const S = Math.min(Math.abs(e.top - o.bottom), Math.abs(e.bottom - o.top), Math.abs(e.centerY - o.centerY));
          x += S * 2;
        }
        x < d && (d = x, c = i);
      }
    }
  }
  return !c && this.wrap && (c = __privateMethod(this, _It_instances, f_fn).call(this, t)), c;
};
f_fn = function(t) {
  const n = __privateGet(this, _i).find((d) => d.highlighted);
  if (!(n == null ? void 0 : n.extendedRect)) return null;
  const e = n.extendedRect, a = __privateGet(this, _i).filter((d) => d !== n && d.extendedRect && !d.disabled);
  if (a.length === 0) return null;
  let u = null, c = 1 / 0;
  for (const d of a) {
    const i = d.extendedRect;
    let o = 0;
    switch (t) {
      case "up": {
        if (this.toleranceCol && Math.abs(e.centerX - i.centerX) > this.toleranceCol && !this.crossAxis) continue;
        if (o = -i.bottom, Math.max(0, Math.min(e.right, i.right) - Math.max(e.left, i.left)) > 0) o -= 1e4;
        else {
          const h = Math.min(Math.abs(e.left - i.left), Math.abs(e.right - i.right), Math.abs(e.left - i.right), Math.abs(e.right - i.left));
          o += h;
        }
        break;
      }
      case "down": {
        if (this.toleranceCol && Math.abs(e.centerX - i.centerX) > this.toleranceCol && !this.crossAxis) continue;
        if (o = i.top, Math.max(0, Math.min(e.right, i.right) - Math.max(e.left, i.left)) > 0) o -= 1e4;
        else {
          const h = Math.min(Math.abs(e.left - i.left), Math.abs(e.right - i.right), Math.abs(e.left - i.right), Math.abs(e.right - i.left));
          o += h;
        }
        break;
      }
      case "left": {
        if (this.toleranceRow && Math.abs(e.centerY - i.centerY) > this.toleranceRow && !this.crossAxis) continue;
        if (o = -i.right, Math.max(0, Math.min(e.bottom, i.bottom) - Math.max(e.top, i.top)) > 0) o -= 1e4;
        else {
          const h = Math.min(Math.abs(e.top - i.top), Math.abs(e.bottom - i.bottom), Math.abs(e.top - i.bottom), Math.abs(e.bottom - i.top));
          o += h;
        }
        break;
      }
      case "right": {
        if (this.toleranceRow && Math.abs(e.centerY - i.centerY) > this.toleranceRow && !this.crossAxis) continue;
        if (o = i.left, Math.max(0, Math.min(e.bottom, i.bottom) - Math.max(e.top, i.top)) > 0) o -= 1e4;
        else {
          const h = Math.min(Math.abs(e.top - i.top), Math.abs(e.bottom - i.bottom), Math.abs(e.top - i.bottom), Math.abs(e.bottom - i.top));
          o += h;
        }
        break;
      }
    }
    o < c && (c = o, u = d);
  }
  return u;
};
_u = new WeakMap();
class zt {
  constructor(t) {
    __privateAdd(this, _t5);
    __privateAdd(this, _e4, v(() => __privateGet(this, _t5).value));
    __privateAdd(this, _s3, v(() => __privateGet(this, _t5).disabled ?? false));
    __publicField(this, "el", null);
    __privateAdd(this, _r3, v(() => __privateGet(this, _t5).parent));
    __privateAdd(this, _n3, v(() => E(this.parent.highlighted, __privateGet(this, _t5).value)));
    __privateAdd(this, _a2, { [U()]: (t) => (this.el = t, __privateGet(this, _t5).lifecycle.onMount(), () => {
      this.el = null, __privateGet(this, _t5).lifecycle.onUnmount();
    }) });
    __privateAdd(this, _o2, v(() => ({ [Z.item]: "", "data-highlighted": ot(this.highlighted), "data-disabled": ot(this.disabled), onmousemove: () => {
      this.parent.selectionMode !== "mouse" || this.disabled || (this.parent.highlighted = __privateGet(this, _t5).value);
    }, onclick: () => {
      this.disabled || this.onSelect();
    }, ...__privateGet(this, _a2) })));
    __privateSet(this, _t5, t);
  }
  get value() {
    return r(__privateGet(this, _e4));
  }
  set value(t) {
    p(__privateGet(this, _e4), t);
  }
  get disabled() {
    return r(__privateGet(this, _s3));
  }
  set disabled(t) {
    p(__privateGet(this, _s3), t);
  }
  get parent() {
    return r(__privateGet(this, _r3));
  }
  set parent(t) {
    p(__privateGet(this, _r3), t);
  }
  get highlighted() {
    return r(__privateGet(this, _n3));
  }
  set highlighted(t) {
    p(__privateGet(this, _n3), t);
  }
  get attrs() {
    return r(__privateGet(this, _o2));
  }
  set attrs(t) {
    p(__privateGet(this, _o2), t);
  }
  get rect() {
    var _a3;
    return (_a3 = this.el) == null ? void 0 : _a3.getBoundingClientRect();
  }
  get extendedRect() {
    if (!this.rect) return;
    const t = this.rect;
    return Object.assign(t, { centerX: t.left + t.width / 2, centerY: t.top + t.height / 2 });
  }
  onSelect() {
    var _a3, _b, _c2, _d2;
    this.disabled || ((_b = (_a3 = __privateGet(this, _t5)).onSelect) == null ? void 0 : _b.call(_a3), (_d2 = (_c2 = __privateGet(this, _t5).parent).onSelect) == null ? void 0 : _d2.call(_c2, __privateGet(this, _t5).value));
  }
}
_t5 = new WeakMap();
_e4 = new WeakMap();
_s3 = new WeakMap();
_r3 = new WeakMap();
_n3 = new WeakMap();
_a2 = new WeakMap();
_o2 = new WeakMap();
R("dialog", ["trigger", "content", "overlay"]);
var Wt = H("<div><!> <!> <!></div>"), Yt = H('<div class="grid-wrapper scrollbar-none! min-h-full w-full overflow-x-auto overflow-y-clip md:h-auto md:min-h-0 md:overflow-x-visible md:overflow-y-visible md:pt-40 md:pb-12 svelte-28krvf"><div class="item-grid relative grid w-fit items-center gap-[1ch] px-[1ch] pb-14 md:w-full md:px-[1ch] svelte-28krvf"></div></div>'), jt = H('<div class="mt-4 flex flex-col items-center justify-center gap-1 p-2"></div>'), Xt = H("<div><!></div>");
function Ht(s, t) {
  dt(t, true), O(t, "searchPlaceholder", 3, "Search..."), O(t, "emptyTitle", 3, "No items found"), O(t, "emptyDescription", 3, "Try adjusting your search terms");
  let n = O(t, "minWidth", 3, "240px"), e = O(t, "scrollIndex", 15, 0), a = O(t, "totalItems", 15, 0), u = O(t, "itemsShown", 15, 0), c = O(t, "visibleIds", 31, () => J(/* @__PURE__ */ new Set())), d = P(void 0), i = P(void 0);
  et(() => r(w).length, () => {
    a(r(w).length);
  }), et(() => r(w).length, () => {
    !r(d) || !r(i) || ut().then(() => {
      o();
    });
  }), Q(() => {
    if (!r(i)) return;
    const l = () => o();
    return r(i).addEventListener("scroll", l), () => {
      var _a3;
      (_a3 = r(i)) == null ? void 0 : _a3.removeEventListener("scroll", l);
    };
  }), Q(() => {
    if (typeof window > "u") return;
    const l = () => {
      o();
    };
    return window.addEventListener("resize", l), () => {
      window.removeEventListener("resize", l);
    };
  });
  function o() {
    var _a3, _b, _c2, _d2;
    if (!r(d) || !r(i)) return;
    const l = r(d).querySelector(".item-grid");
    if (!l) return;
    const g = l.children;
    if (g.length === 0) {
      u(0), e(0), c(/* @__PURE__ */ new Set());
      return;
    }
    const D = window.matchMedia("(max-width: 767px)").matches, I = /* @__PURE__ */ new Set();
    if (D) {
      const f = r(d).getBoundingClientRect();
      let y = 0, A = 0, C = 1 / 0;
      const k = f.left + f.width / 2;
      for (let m = 0; m < g.length; m++) {
        const M = g[m].getBoundingClientRect();
        if (M.right > f.left && M.left < f.right) {
          const j = (_b = (_a3 = r(w)[m]) == null ? void 0 : _a3.$jazz) == null ? void 0 : _b.id;
          j && I.add(j);
        }
        M.right <= f.right + 1 && y++;
        const F = M.left + M.width / 2, Y = Math.abs(F - k);
        Y < C && (C = Y, A = m);
      }
      u(Math.max(y, 1)), e(A);
    } else {
      const f = r(i).getBoundingClientRect();
      let y = 0, A = 0, C = 1 / 0;
      const k = f.top + f.height / 2;
      for (let m = 0; m < g.length; m++) {
        const M = g[m].getBoundingClientRect();
        if (M.bottom > f.top && M.top < f.bottom) {
          const j = (_d2 = (_c2 = r(w)[m]) == null ? void 0 : _c2.$jazz) == null ? void 0 : _d2.id;
          j && I.add(j);
        }
        M.bottom <= f.bottom + 1 && y++;
        const F = M.top + M.height / 2, Y = Math.abs(F - k);
        Y < C && (C = Y, A = m);
      }
      u(Math.max(y, 1)), e(A);
    }
    c(I);
  }
  const b = new It({ wrap: true, crossAxis: true, scrollBehavior: "smooth", onHighlightChange: (l) => {
    var _a3;
    (_a3 = t.onHighlightChange) == null ? void 0 : _a3.call(t, l);
  }, onSelect: (l) => {
    var _a3;
    (_a3 = t.onSelect) == null ? void 0 : _a3.call(t, l);
  } });
  let h = "";
  const w = v(() => bt({ needle: h, haystack: t.items, property: t.searchProperty })), x = J([]);
  function S(l, g) {
    const D = l.indexOf(g);
    D === -1 ? l.push(g) : l.splice(D, 1);
  }
  var W = Xt();
  it(W, (l) => ({ class: l, ...b.root }), [() => vt("relative flex scrollbar-none flex-col items-center overflow-x-clip overflow-y-clip focus-visible:outline-0 md:overflow-x-visible! md:overflow-y-auto", t.class)], void 0, void 0, "svelte-28krvf");
  var at = G(W);
  {
    var lt = (l) => {
      var g = Yt(), D = G(g);
      let I;
      wt(D, 21, () => r(w), (f) => f.$jazz.id, (f, y) => {
        const A = v(() => b.getItem(r(y), { onSelect: () => S(x, r(y).$jazz.id) })), C = v(() => x.includes(r(y).$jazz.id)), k = v(() => c().has(r(y).$jazz.id));
        var m = Wt();
        it(m, () => ({ class: ["group @container relative aspect-2/3 transition"], style: "--grid-item-size: 100cqw;", ...r(A).attrs }), void 0, void 0, void 0, "svelte-28krvf");
        var B = G(m);
        K(B, () => t.header ?? $, () => ({ item: r(y), highlighted: r(A).highlighted, selected: r(C), disabled: r(A).disabled, visible: r(k) }));
        var M = tt(B, 2);
        K(M, () => t.children, () => ({ item: r(y), highlighted: r(A).highlighted, selected: r(C), disabled: r(A).disabled, visible: r(k) }));
        var q = tt(M, 2);
        K(q, () => t.footer ?? $, () => ({ item: r(y), highlighted: r(A).highlighted, selected: r(C), disabled: r(A).disabled, visible: r(k) })), L(m), V(f, m);
      }), L(D), L(g), nt(g, (f) => p(d, f), () => r(d)), gt(() => I = Mt(D, "", I, { "--grid-min-size": n() })), mt("scroll", g, o), V(l, g);
    }, ht = (l) => {
      var g = jt();
      V(l, g);
    };
    pt(at, (l) => {
      r(w).length ? l(lt) : l(ht, false);
    });
  }
  L(W), nt(W, (l) => p(i, l), () => r(i)), V(s, W), ft();
}
export {
  Ht as I
};
