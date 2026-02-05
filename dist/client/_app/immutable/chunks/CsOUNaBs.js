const f = ["en", "jp"], g = "PARAGLIDE_LOCALE";
const m = ["cookie", "globalVariable", "baseLocale"];
globalThis.__paraglide = {};
let l, u = false, p = () => {
  let e;
  for (const o of m) {
    if (o === "cookie") e = E();
    else if (o === "baseLocale") e = "en";
    else if (o === "globalVariable" && l !== void 0) e = l;
    else if (w(o) && s.has(o)) {
      const t = s.get(o);
      if (t) {
        const n = t.getLocale();
        if (n instanceof Promise) continue;
        e = n;
      }
    }
    if (e !== void 0) {
      const t = C(e);
      return u || (l = t, u = true, y(t, { reload: false })), t;
    }
  }
  throw new Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
const b = (e) => {
  window.location.reload();
};
let y = (e, o) => {
  const t = { reload: true, ...o };
  let n;
  try {
    n = p();
  } catch {
  }
  const c = [];
  for (const a of m) if (a === "globalVariable") l = e;
  else if (a === "cookie") {
    if (typeof document > "u" || typeof window > "u") continue;
    const r = `${g}=${e}; path=/; max-age=34560000`;
    document.cookie = r;
  } else {
    if (a === "baseLocale") continue;
    if (w(a) && s.has(a)) {
      const r = s.get(a);
      if (r) {
        let i = r.setLocale(e);
        i instanceof Promise && (i = i.catch((L) => {
          throw new Error(`Custom strategy "${a}" setLocale failed.`, { cause: L });
        }), c.push(i));
      }
    }
  }
  const d = () => {
    t.reload && window.location && e !== n && b();
  };
  if (c.length) return Promise.all(c).then(() => {
    d();
  });
  d();
}, k = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
  return typeof e != "string" ? false : e ? f.some((o) => o.toLowerCase() === e.toLowerCase()) : false;
}
function C(e) {
  if (typeof e != "string") throw new Error(`Invalid locale: ${e}. Expected a string.`);
  const o = e.toLowerCase(), t = f.find((n) => n.toLowerCase() === o);
  if (!t) throw new Error(`Invalid locale: ${e}. Expected one of: ${f.join(", ")}`);
  return t;
}
function E() {
  var _a;
  if (typeof document > "u" || !document.cookie) return;
  const o = (_a = document.cookie.match(new RegExp(`(^| )${g}=([^;]+)`))) == null ? void 0 : _a[2];
  if (h(o)) return o;
}
function x(e) {
  return $(e);
}
function $(e) {
  const o = typeof e == "string" ? new URL(e, k()) : new URL(e), t = o.pathname.split("/").filter(Boolean);
  return t.length > 0 && h(t[0]) && (o.pathname = "/" + t.slice(1).join("/")), o;
}
const s = /* @__PURE__ */ new Map();
function w(e) {
  return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
export {
  x as d,
  p as g,
  h as i,
  f as l,
  y as s
};
