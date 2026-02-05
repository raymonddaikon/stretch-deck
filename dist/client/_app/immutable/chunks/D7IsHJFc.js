var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const Y = Symbol.for("better-auth:broadcast-channel"), _e = () => Math.floor(Date.now() / 1e3);
var Ee = class {
  constructor(e = "better-auth.message") {
    __publicField(this, "listeners", /* @__PURE__ */ new Set());
    __publicField(this, "name");
    this.name = e;
  }
  subscribe(e) {
    return this.listeners.add(e), () => {
      this.listeners.delete(e);
    };
  }
  post(e) {
    if (!(typeof window > "u")) try {
      localStorage.setItem(this.name, JSON.stringify({ ...e, timestamp: _e() }));
    } catch {
    }
  }
  setup() {
    if (typeof window > "u" || typeof window.addEventListener > "u") return () => {
    };
    const e = (t) => {
      if (t.key !== this.name) return;
      const n = JSON.parse(t.newValue ?? "{}");
      (n == null ? void 0 : n.event) !== "session" || !(n == null ? void 0 : n.data) || this.listeners.forEach((s) => s(n));
    };
    return window.addEventListener("storage", e), () => {
      window.removeEventListener("storage", e);
    };
  }
};
function X(e = "better-auth.message") {
  return globalThis[Y] || (globalThis[Y] = new Ee(e)), globalThis[Y];
}
const Q = Symbol.for("better-auth:focus-manager");
var Te = class {
  constructor() {
    __publicField(this, "listeners", /* @__PURE__ */ new Set());
  }
  subscribe(e) {
    return this.listeners.add(e), () => {
      this.listeners.delete(e);
    };
  }
  setFocused(e) {
    this.listeners.forEach((t) => t(e));
  }
  setup() {
    if (typeof window > "u" || typeof document > "u" || typeof window.addEventListener > "u") return () => {
    };
    const e = () => {
      document.visibilityState === "visible" && this.setFocused(true);
    };
    return document.addEventListener("visibilitychange", e, false), () => {
      document.removeEventListener("visibilitychange", e, false);
    };
  }
};
function ae() {
  return globalThis[Q] || (globalThis[Q] = new Te()), globalThis[Q];
}
const Z = Symbol.for("better-auth:online-manager");
var Pe = class {
  constructor() {
    __publicField(this, "listeners", /* @__PURE__ */ new Set());
    __publicField(this, "isOnline", typeof navigator < "u" ? navigator.onLine : true);
  }
  subscribe(e) {
    return this.listeners.add(e), () => {
      this.listeners.delete(e);
    };
  }
  setOnline(e) {
    this.isOnline = e, this.listeners.forEach((t) => t(e));
  }
  setup() {
    if (typeof window > "u" || typeof window.addEventListener > "u") return () => {
    };
    const e = () => this.setOnline(true), t = () => this.setOnline(false);
    return window.addEventListener("online", e, false), window.addEventListener("offline", t, false), () => {
      window.removeEventListener("online", e, false), window.removeEventListener("offline", t, false);
    };
  }
};
function K() {
  return globalThis[Z] || (globalThis[Z] = new Pe()), globalThis[Z];
}
let T = [], j = 0;
const z = 4, me = (e) => {
  let t = [], n = { get() {
    return n.lc || n.listen(() => {
    })(), n.value;
  }, lc: 0, listen(s) {
    return n.lc = t.push(s), () => {
      for (let i = j + z; i < T.length; ) T[i] === s ? T.splice(i, z) : i += z;
      let r = t.indexOf(s);
      ~r && (t.splice(r, 1), --n.lc || n.off());
    };
  }, notify(s, r) {
    let i = !T.length;
    for (let o of t) T.push(o, n.value, s, r);
    if (i) {
      for (j = 0; j < T.length; j += z) T[j](T[j + 1], T[j + 2], T[j + 3]);
      T.length = 0;
    }
  }, off() {
  }, set(s) {
    let r = n.value;
    r !== s && (n.value = s, n.notify(r));
  }, subscribe(s) {
    let r = n.listen(s);
    return s(n.value), r;
  }, value: e };
  return n;
}, Ae = 5, $ = 6, J = 10;
let Le = (e, t, n, s) => (e.events = e.events || {}, e.events[n + J] || (e.events[n + J] = s((r) => {
  e.events[n].reduceRight((i, o) => (o(i), i), { shared: {}, ...r });
})), e.events[n] = e.events[n] || [], e.events[n].push(t), () => {
  let r = e.events[n], i = r.indexOf(t);
  r.splice(i, 1), r.length || (delete e.events[n], e.events[n + J](), delete e.events[n + J]);
}), Ie = 1e3, ve = (e, t) => Le(e, (s) => {
  let r = t(s);
  r && e.events[$].push(r);
}, Ae, (s) => {
  let r = e.listen;
  e.listen = (...o) => (!e.lc && !e.active && (e.active = true, s()), r(...o));
  let i = e.off;
  return e.events[$] = [], e.off = () => {
    i(), setTimeout(() => {
      if (e.active && !e.lc) {
        e.active = false;
        for (let o of e.events[$]) o();
        e.events[$] = [];
      }
    }, Ie);
  }, () => {
    e.listen = r, e.off = i;
  };
});
const Ue = () => typeof window > "u", Ce = (e, t, n, s) => {
  const r = me({ data: null, error: null, isPending: true, isRefetching: false, refetch: (f) => i(f) }), i = async (f) => new Promise((a) => {
    const c = typeof s == "function" ? s({ data: r.get().data, error: r.get().error, isPending: r.get().isPending }) : s;
    n(t, { ...c, query: { ...c == null ? void 0 : c.query, ...f == null ? void 0 : f.query }, async onSuccess(u) {
      var _a;
      r.set({ data: u.data, error: null, isPending: false, isRefetching: false, refetch: r.value.refetch }), await ((_a = c == null ? void 0 : c.onSuccess) == null ? void 0 : _a.call(c, u));
    }, async onError(u) {
      var _a, _b;
      const { request: d } = u, h = typeof d.retry == "number" ? d.retry : (_a = d.retry) == null ? void 0 : _a.attempts, m = d.retryAttempt || 0;
      h && m < h || (r.set({ error: u.error, data: null, isPending: false, isRefetching: false, refetch: r.value.refetch }), await ((_b = c == null ? void 0 : c.onError) == null ? void 0 : _b.call(c, u)));
    }, async onRequest(u) {
      var _a;
      const d = r.get();
      r.set({ isPending: d.data === null, data: d.data, error: null, isRefetching: true, refetch: r.value.refetch }), await ((_a = c == null ? void 0 : c.onRequest) == null ? void 0 : _a.call(c, u));
    } }).catch((u) => {
      r.set({ error: u, data: null, isPending: false, isRefetching: false, refetch: r.value.refetch });
    }).finally(() => {
      a(void 0);
    });
  });
  e = Array.isArray(e) ? e : [e];
  let o = false;
  for (const f of e) f.subscribe(async () => {
    Ue() || (o ? await i() : ve(r, () => {
      const a = setTimeout(async () => {
        o || (await i(), o = true);
      }, 0);
      return () => {
        r.off(), f.off(), clearTimeout(a);
      };
    }));
  });
  return r;
}, B = () => Math.floor(Date.now() / 1e3), Ne = 5;
function xe(e) {
  var _a, _b, _c;
  const { sessionAtom: t, sessionSignal: n, $fetch: s, options: r = {} } = e, i = ((_a = r.sessionOptions) == null ? void 0 : _a.refetchInterval) ?? 0, o = ((_b = r.sessionOptions) == null ? void 0 : _b.refetchOnWindowFocus) ?? true, f = ((_c = r.sessionOptions) == null ? void 0 : _c.refetchWhenOffline) ?? false, a = { lastSync: 0, lastSessionRequest: 0, cachedSession: void 0 }, c = () => f || K().isOnline, u = (v) => {
    if (!c()) return;
    if ((v == null ? void 0 : v.event) === "storage") {
      a.lastSync = B(), n.set(!n.get());
      return;
    }
    const O = t.get();
    if ((v == null ? void 0 : v.event) === "poll") {
      a.lastSessionRequest = B(), s("/get-session").then((l) => {
        l.error ? t.set({ ...O, data: null, error: l.error }) : t.set({ ...O, data: l.data, error: null }), a.lastSync = B(), n.set(!n.get());
      }).catch(() => {
      });
      return;
    }
    if ((v == null ? void 0 : v.event) === "visibilitychange") {
      if (B() - a.lastSessionRequest < Ne) return;
      a.lastSessionRequest = B();
    }
    ((O == null ? void 0 : O.data) === null || (O == null ? void 0 : O.data) === void 0 || (v == null ? void 0 : v.event) === "visibilitychange") && (a.lastSync = B(), n.set(!n.get()));
  }, d = (v) => {
    X().post({ event: "session", data: { trigger: v }, clientId: Math.random().toString(36).substring(7) });
  }, h = () => {
    i && i > 0 && (a.pollInterval = setInterval(() => {
      var _a2;
      ((_a2 = t.get()) == null ? void 0 : _a2.data) && u({ event: "poll" });
    }, i * 1e3));
  }, m = () => {
    a.unsubscribeBroadcast = X().subscribe(() => {
      u({ event: "storage" });
    });
  }, S = () => {
    o && (a.unsubscribeFocus = ae().subscribe(() => {
      u({ event: "visibilitychange" });
    }));
  }, U = () => {
    a.unsubscribeOnline = K().subscribe((v) => {
      v && u({ event: "visibilitychange" });
    });
  };
  return { init: () => {
    h(), m(), S(), U(), X().setup(), ae().setup(), K().setup();
  }, cleanup: () => {
    a.pollInterval && (clearInterval(a.pollInterval), a.pollInterval = void 0), a.unsubscribeBroadcast && (a.unsubscribeBroadcast(), a.unsubscribeBroadcast = void 0), a.unsubscribeFocus && (a.unsubscribeFocus(), a.unsubscribeFocus = void 0), a.unsubscribeOnline && (a.unsubscribeOnline(), a.unsubscribeOnline = void 0), a.lastSync = 0, a.lastSessionRequest = 0, a.cachedSession = void 0;
  }, triggerRefetch: u, broadcastSessionUpdate: d };
}
var Me = {}, ue = {};
const V = /* @__PURE__ */ Object.create(null), q = (e) => {
  var _a;
  return Me || ((_a = globalThis.Deno) == null ? void 0 : _a.env.toObject()) || globalThis.__env__ || (e ? V : globalThis);
}, E = new Proxy(V, { get(e, t) {
  return q()[t] ?? V[t];
}, has(e, t) {
  return t in q() || t in V;
}, set(e, t, n) {
  const s = q(true);
  return s[t] = n, true;
}, deleteProperty(e, t) {
  if (!t) return false;
  const n = q(true);
  return delete n[t], true;
}, ownKeys() {
  const e = q(true);
  return Object.keys(e);
} });
function p(e, t) {
  return typeof process < "u" && ue ? ue[e] ?? t : typeof Deno < "u" ? Deno.env.get(e) ?? t : typeof Bun < "u" ? Bun.env[e] ?? t : t;
}
const D = 1, y = 4, L = 8, R = 24, ce = { eterm: y, cons25: y, console: y, cygwin: y, dtterm: y, gnome: y, hurd: y, jfbterm: y, konsole: y, kterm: y, mlterm: y, mosh: R, putty: y, st: y, "rxvt-unicode-24bit": R, terminator: R, "xterm-kitty": R }, je = new Map(Object.entries({ APPVEYOR: L, BUILDKITE: L, CIRCLECI: R, DRONE: L, GITEA_ACTIONS: R, GITHUB_ACTIONS: R, GITLAB_CI: L, TRAVIS: L })), Be = [/ansi/, /color/, /linux/, /direct/, /^con[0-9]*x[0-9]/, /^rxvt/, /^screen/, /^xterm/, /^vt100/, /^vt220/];
function qe() {
  if (p("FORCE_COLOR") !== void 0) switch (p("FORCE_COLOR")) {
    case "":
    case "1":
    case "true":
      return y;
    case "2":
      return L;
    case "3":
      return R;
    default:
      return D;
  }
  if (p("NODE_DISABLE_COLORS") !== void 0 && p("NODE_DISABLE_COLORS") !== "" || p("NO_COLOR") !== void 0 && p("NO_COLOR") !== "" || p("TERM") === "dumb") return D;
  if (p("TMUX")) return R;
  if ("TF_BUILD" in E && "AGENT_NAME" in E) return y;
  if ("CI" in E) {
    for (const { 0: e, 1: t } of je) if (e in E) return t;
    return p("CI_NAME") === "codeship" ? L : D;
  }
  if ("TEAMCITY_VERSION" in E) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.exec(p("TEAMCITY_VERSION")) !== null ? y : D;
  switch (p("TERM_PROGRAM")) {
    case "iTerm.app":
      return !p("TERM_PROGRAM_VERSION") || /^[0-2]\./.exec(p("TERM_PROGRAM_VERSION")) !== null ? L : R;
    case "HyperTerm":
    case "MacTerm":
      return R;
    case "Apple_Terminal":
      return L;
  }
  if (p("COLORTERM") === "truecolor" || p("COLORTERM") === "24bit") return R;
  if (p("TERM")) {
    if (/truecolor/.exec(p("TERM")) !== null) return R;
    if (/^xterm-256/.exec(p("TERM")) !== null) return L;
    const e = p("TERM").toLowerCase();
    if (ce[e]) return ce[e];
    if (Be.some((t) => t.exec(e) !== null)) return y;
  }
  return p("COLORTERM") ? y : D;
}
const I = { reset: "\x1B[0m", bright: "\x1B[1m", dim: "\x1B[2m", fg: { red: "\x1B[31m", green: "\x1B[32m", yellow: "\x1B[33m", blue: "\x1B[34m", magenta: "\x1B[35m" } }, ne = ["debug", "info", "success", "warn", "error"];
function De(e, t) {
  return ne.indexOf(t) >= ne.indexOf(e);
}
const Fe = { info: I.fg.blue, success: I.fg.green, warn: I.fg.yellow, error: I.fg.red, debug: I.fg.magenta }, ke = (e, t, n) => {
  const s = (/* @__PURE__ */ new Date()).toISOString();
  return n ? `${I.dim}${s}${I.reset} ${Fe[e]}${e.toUpperCase()}${I.reset} ${I.bright}[Better Auth]:${I.reset} ${t}` : `${s} ${e.toUpperCase()} [Better Auth]: ${t}`;
}, ze = (e) => {
  const t = "warn", n = qe() !== 1, s = (r, i, o = []) => {
    if (!De(t, r)) return;
    const f = ke(r, i, n);
    {
      r === "error" ? console.error(f, ...o) : r === "warn" ? console.warn(f, ...o) : console.log(f, ...o);
      return;
    }
  };
  return { ...Object.fromEntries(ne.map((r) => [r, (...[i, ...o]) => s(r, i, o)])), get level() {
    return t;
  } };
};
ze();
function $e(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var G = class extends Error {
  constructor(e, t) {
    super(e, t), this.name = "BetterAuthError", this.message = e, this.stack = "";
  }
};
function Je(e) {
  try {
    return (new URL(e).pathname.replace(/\/+$/, "") || "/") !== "/";
  } catch {
    throw new G(`Invalid base URL: ${e}. Please provide a valid base URL.`);
  }
}
function Ve(e) {
  try {
    const t = new URL(e);
    if (t.protocol !== "http:" && t.protocol !== "https:") throw new G(`Invalid base URL: ${e}. URL must include 'http://' or 'https://'`);
  } catch (t) {
    throw t instanceof G ? t : new G(`Invalid base URL: ${e}. Please provide a valid base URL.`, { cause: t });
  }
}
function ee(e, t = "/api/auth") {
  if (Ve(e), Je(e)) return e;
  const n = e.replace(/\/+$/, "");
  return !t || t === "/" ? n : (t = t.startsWith("/") ? t : `/${t}`, `${n}${t}`);
}
function Ge(e, t, n, s, r) {
  if (e) return ee(e, t);
  {
    const i = E.BETTER_AUTH_URL || E.NEXT_PUBLIC_BETTER_AUTH_URL || E.PUBLIC_BETTER_AUTH_URL || E.NUXT_PUBLIC_BETTER_AUTH_URL || E.NUXT_PUBLIC_AUTH_URL || (E.BASE_URL !== "/" ? E.BASE_URL : void 0);
    if (i) return ee(i, t);
  }
  if (typeof window < "u" && window.location) return ee(window.location.origin, t);
}
const He = { id: "redirect", name: "Redirect", hooks: { onSuccess(e) {
  var _a, _b;
  if (((_a = e.data) == null ? void 0 : _a.url) && ((_b = e.data) == null ? void 0 : _b.redirect) && typeof window < "u" && window.location && window.location) try {
    window.location.href = e.data.url;
  } catch {
  }
} } }, We = { proto: /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, constructor: /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, protoShort: /"__proto__"\s*:/, constructorShort: /"constructor"\s*:/ }, Ye = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/, le = { true: true, false: false, null: null, undefined: void 0, nan: NaN, infinity: Number.POSITIVE_INFINITY, "-infinity": Number.NEGATIVE_INFINITY }, Xe = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;
function Qe(e) {
  return e instanceof Date && !isNaN(e.getTime());
}
function Ze(e) {
  const t = Xe.exec(e);
  if (!t) return null;
  const [, n, s, r, i, o, f, a, c, u, d] = t, h = new Date(Date.UTC(parseInt(n, 10), parseInt(s, 10) - 1, parseInt(r, 10), parseInt(i, 10), parseInt(o, 10), parseInt(f, 10), a ? parseInt(a.padEnd(3, "0"), 10) : 0));
  if (c) {
    const m = (parseInt(u, 10) * 60 + parseInt(d, 10)) * (c === "+" ? -1 : 1);
    h.setUTCMinutes(h.getUTCMinutes() + m);
  }
  return Qe(h) ? h : null;
}
function Ke(e, t = {}) {
  const { strict: n = false, warnings: s = false, reviver: r, parseDates: i = true } = t;
  if (typeof e != "string") return e;
  const o = e.trim();
  if (o.length > 0 && o[0] === '"' && o.endsWith('"') && !o.slice(1, -1).includes('"')) return o.slice(1, -1);
  const f = o.toLowerCase();
  if (f.length <= 9 && f in le) return le[f];
  if (!Ye.test(o)) {
    if (n) throw new SyntaxError("[better-json] Invalid JSON");
    return e;
  }
  if (Object.entries(We).some(([a, c]) => {
    const u = c.test(o);
    return u && s && console.warn(`[better-json] Detected potential prototype pollution attempt using ${a} pattern`), u;
  }) && n) throw new Error("[better-json] Potential prototype pollution attempt detected");
  try {
    return JSON.parse(o, (c, u) => {
      if (c === "__proto__" || c === "constructor" && u && typeof u == "object" && "prototype" in u) {
        s && console.warn(`[better-json] Dropping "${c}" key to prevent prototype pollution`);
        return;
      }
      if (i && typeof u == "string") {
        const d = Ze(u);
        if (d) return d;
      }
      return r ? r(c, u) : u;
    });
  } catch (a) {
    if (n) throw a;
    return e;
  }
}
function et(e, t = { strict: true }) {
  return Ke(e, t);
}
function tt(e, t) {
  const n = me(false), s = Ce(n, "/get-session", e, { method: "GET" });
  return ve(s, () => {
    const r = xe({ sessionAtom: s, sessionSignal: n, $fetch: e, options: t });
    return r.init(), () => {
      r.cleanup();
    };
  }), { session: s, $sessionSignal: n };
}
function te(e) {
  if (e === null || typeof e != "object") return false;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? false : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : true;
}
function re(e, t, n = ".", s) {
  if (!te(t)) return re(e, {}, n, s);
  const r = Object.assign({}, t);
  for (const i in e) {
    if (i === "__proto__" || i === "constructor") continue;
    const o = e[i];
    o != null && (s && s(r, i, o, n) || (Array.isArray(o) && Array.isArray(r[i]) ? r[i] = [...o, ...r[i]] : te(o) && te(r[i]) ? r[i] = re(o, r[i], (n ? `${n}.` : "") + i.toString(), s) : r[i] = o));
  }
  return r;
}
function nt(e) {
  return (...t) => t.reduce((n, s) => re(n, s, "", e), {});
}
const rt = nt();
var st = Object.defineProperty, it = Object.defineProperties, ot = Object.getOwnPropertyDescriptors, fe = Object.getOwnPropertySymbols, at = Object.prototype.hasOwnProperty, ut = Object.prototype.propertyIsEnumerable, de = (e, t, n) => t in e ? st(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n, P = (e, t) => {
  for (var n in t || (t = {})) at.call(t, n) && de(e, n, t[n]);
  if (fe) for (var n of fe(t)) ut.call(t, n) && de(e, n, t[n]);
  return e;
}, A = (e, t) => it(e, ot(t)), ct = class extends Error {
  constructor(e, t, n) {
    super(t || e.toString(), { cause: n }), this.status = e, this.statusText = t, this.error = n, Error.captureStackTrace(this, this.constructor);
  }
}, lt = async (e, t) => {
  var n, s, r, i, o, f;
  let a = t || {};
  const c = { onRequest: [t == null ? void 0 : t.onRequest], onResponse: [t == null ? void 0 : t.onResponse], onSuccess: [t == null ? void 0 : t.onSuccess], onError: [t == null ? void 0 : t.onError], onRetry: [t == null ? void 0 : t.onRetry] };
  if (!t || !(t == null ? void 0 : t.plugins)) return { url: e, options: a, hooks: c };
  for (const u of (t == null ? void 0 : t.plugins) || []) {
    if (u.init) {
      const d = await ((n = u.init) == null ? void 0 : n.call(u, e.toString(), t));
      a = d.options || a, e = d.url;
    }
    c.onRequest.push((s = u.hooks) == null ? void 0 : s.onRequest), c.onResponse.push((r = u.hooks) == null ? void 0 : r.onResponse), c.onSuccess.push((i = u.hooks) == null ? void 0 : i.onSuccess), c.onError.push((o = u.hooks) == null ? void 0 : o.onError), c.onRetry.push((f = u.hooks) == null ? void 0 : f.onRetry);
  }
  return { url: e, options: a, hooks: c };
}, he = class {
  constructor(e) {
    this.options = e;
  }
  shouldAttemptRetry(e, t) {
    return this.options.shouldRetry ? Promise.resolve(e < this.options.attempts && this.options.shouldRetry(t)) : Promise.resolve(e < this.options.attempts);
  }
  getDelay() {
    return this.options.delay;
  }
}, ft = class {
  constructor(e) {
    this.options = e;
  }
  shouldAttemptRetry(e, t) {
    return this.options.shouldRetry ? Promise.resolve(e < this.options.attempts && this.options.shouldRetry(t)) : Promise.resolve(e < this.options.attempts);
  }
  getDelay(e) {
    return Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** e);
  }
};
function dt(e) {
  if (typeof e == "number") return new he({ type: "linear", attempts: e, delay: 1e3 });
  switch (e.type) {
    case "linear":
      return new he(e);
    case "exponential":
      return new ft(e);
    default:
      throw new Error("Invalid retry strategy");
  }
}
var ht = async (e) => {
  const t = {}, n = async (s) => typeof s == "function" ? await s() : s;
  if (e == null ? void 0 : e.auth) {
    if (e.auth.type === "Bearer") {
      const s = await n(e.auth.token);
      if (!s) return t;
      t.authorization = `Bearer ${s}`;
    } else if (e.auth.type === "Basic") {
      const [s, r] = await Promise.all([n(e.auth.username), n(e.auth.password)]);
      if (!s || !r) return t;
      t.authorization = `Basic ${btoa(`${s}:${r}`)}`;
    } else if (e.auth.type === "Custom") {
      const [s, r] = await Promise.all([n(e.auth.prefix), n(e.auth.value)]);
      if (!r) return t;
      t.authorization = `${s ?? ""} ${r}`;
    }
  }
  return t;
}, gt = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function pt(e) {
  const t = e.headers.get("content-type"), n = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
  if (!t) return "json";
  const s = t.split(";").shift() || "";
  return gt.test(s) ? "json" : n.has(s) || s.startsWith("text/") ? "text" : "blob";
}
function yt(e) {
  try {
    return JSON.parse(e), true;
  } catch {
    return false;
  }
}
function se(e) {
  if (e === void 0) return false;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean" || t === null ? true : t !== "object" ? false : Array.isArray(e) ? true : e.buffer ? false : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function";
}
function ge(e) {
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
function pe(e) {
  return typeof e == "function";
}
function mt(e) {
  if (e == null ? void 0 : e.customFetchImpl) return e.customFetchImpl;
  if (typeof globalThis < "u" && pe(globalThis.fetch)) return globalThis.fetch;
  if (typeof window < "u" && pe(window.fetch)) return window.fetch;
  throw new Error("No fetch implementation found");
}
async function vt(e) {
  const t = new Headers(e == null ? void 0 : e.headers), n = await ht(e);
  for (const [s, r] of Object.entries(n || {})) t.set(s, r);
  if (!t.has("content-type")) {
    const s = bt(e == null ? void 0 : e.body);
    s && t.set("content-type", s);
  }
  return t;
}
function bt(e) {
  return se(e) ? "application/json" : null;
}
function wt(e) {
  if (!(e == null ? void 0 : e.body)) return null;
  const t = new Headers(e == null ? void 0 : e.headers);
  if (se(e.body) && !t.has("content-type")) {
    for (const [n, s] of Object.entries(e == null ? void 0 : e.body)) s instanceof Date && (e.body[n] = s.toISOString());
    return JSON.stringify(e.body);
  }
  return t.has("content-type") && t.get("content-type") === "application/x-www-form-urlencoded" && se(e.body) ? new URLSearchParams(e.body).toString() : e.body;
}
function Ot(e, t) {
  var n;
  if (t == null ? void 0 : t.method) return t.method.toUpperCase();
  if (e.startsWith("@")) {
    const s = (n = e.split("@")[1]) == null ? void 0 : n.split("/")[0];
    return we.includes(s) ? s.toUpperCase() : (t == null ? void 0 : t.body) ? "POST" : "GET";
  }
  return (t == null ? void 0 : t.body) ? "POST" : "GET";
}
function St(e, t) {
  let n;
  return !(e == null ? void 0 : e.signal) && (e == null ? void 0 : e.timeout) && (n = setTimeout(() => t == null ? void 0 : t.abort(), e == null ? void 0 : e.timeout)), { abortTimeout: n, clearTimeout: () => {
    n && clearTimeout(n);
  } };
}
var Rt = class be extends Error {
  constructor(t, n) {
    super(n || JSON.stringify(t, null, 2)), this.issues = t, Object.setPrototypeOf(this, be.prototype);
  }
};
async function H(e, t) {
  const n = await e["~standard"].validate(t);
  if (n.issues) throw new Rt(n.issues);
  return n.value;
}
var we = ["get", "post", "put", "patch", "delete"], _t = (e) => ({ id: "apply-schema", name: "Apply Schema", version: "1.0.0", async init(t, n) {
  var s, r, i, o;
  const f = ((r = (s = e.plugins) == null ? void 0 : s.find((a) => {
    var c;
    return (c = a.schema) != null && c.config ? t.startsWith(a.schema.config.baseURL || "") || t.startsWith(a.schema.config.prefix || "") : false;
  })) == null ? void 0 : r.schema) || e.schema;
  if (f) {
    let a = t;
    (i = f.config) != null && i.prefix && a.startsWith(f.config.prefix) && (a = a.replace(f.config.prefix, ""), f.config.baseURL && (t = t.replace(f.config.prefix, f.config.baseURL))), (o = f.config) != null && o.baseURL && a.startsWith(f.config.baseURL) && (a = a.replace(f.config.baseURL, ""));
    const c = f.schema[a];
    if (c) {
      let u = A(P({}, n), { method: c.method, output: c.output });
      return (n == null ? void 0 : n.disableValidation) || (u = A(P({}, u), { body: c.input ? await H(c.input, n == null ? void 0 : n.body) : n == null ? void 0 : n.body, params: c.params ? await H(c.params, n == null ? void 0 : n.params) : n == null ? void 0 : n.params, query: c.query ? await H(c.query, n == null ? void 0 : n.query) : n == null ? void 0 : n.query })), { url: t, options: u };
    }
  }
  return { url: t, options: n };
} }), Et = (e) => {
  async function t(n, s) {
    const r = A(P(P({}, e), s), { plugins: [...(e == null ? void 0 : e.plugins) || [], _t(e || {}), ...(s == null ? void 0 : s.plugins) || []] });
    if (e == null ? void 0 : e.catchAllError) try {
      return await ie(n, r);
    } catch (i) {
      return { data: null, error: { status: 500, statusText: "Fetch Error", message: "Fetch related error. Captured by catchAllError option. See error property for more details.", error: i } };
    }
    return await ie(n, r);
  }
  return t;
};
function Tt(e, t) {
  const { baseURL: n, params: s, query: r } = t || { query: {}, params: {}, baseURL: "" };
  let i = e.startsWith("http") ? e.split("/").slice(0, 3).join("/") : n || "";
  if (e.startsWith("@")) {
    const d = e.toString().split("@")[1].split("/")[0];
    we.includes(d) && (e = e.replace(`@${d}/`, "/"));
  }
  i.endsWith("/") || (i += "/");
  let [o, f] = e.replace(i, "").split("?");
  const a = new URLSearchParams(f);
  for (const [d, h] of Object.entries(r || {})) {
    if (h == null) continue;
    let m;
    if (typeof h == "string") m = h;
    else if (Array.isArray(h)) {
      for (const S of h) a.append(d, S);
      continue;
    } else m = JSON.stringify(h);
    a.set(d, m);
  }
  if (s) if (Array.isArray(s)) {
    const d = o.split("/").filter((h) => h.startsWith(":"));
    for (const [h, m] of d.entries()) {
      const S = s[h];
      o = o.replace(m, S);
    }
  } else for (const [d, h] of Object.entries(s)) o = o.replace(`:${d}`, String(h));
  o = o.split("/").map(encodeURIComponent).join("/"), o.startsWith("/") && (o = o.slice(1));
  let c = a.toString();
  return c = c.length > 0 ? `?${c}`.replace(/\+/g, "%20") : "", i.startsWith("http") ? new URL(`${o}${c}`, i) : `${i}${o}${c}`;
}
var ie = async (e, t) => {
  var n, s, r, i, o, f, a, c;
  const { hooks: u, url: d, options: h } = await lt(e, t), m = mt(h), S = new AbortController(), U = (n = h.signal) != null ? n : S.signal, w = Tt(d, h), M = wt(h), v = await vt(h), O = Ot(d, h);
  let l = A(P({}, h), { url: w, headers: v, body: M, method: O, signal: U });
  for (const _ of u.onRequest) if (_) {
    const b = await _(l);
    typeof b == "object" && b !== null && (l = b);
  }
  ("pipeTo" in l && typeof l.pipeTo == "function" || typeof ((s = t == null ? void 0 : t.body) == null ? void 0 : s.pipe) == "function") && ("duplex" in l || (l.duplex = "half"));
  const { clearTimeout: C } = St(h, S);
  let g = await m(l.url, l);
  C();
  const F = { response: g, request: l };
  for (const _ of u.onResponse) if (_) {
    const b = await _(A(P({}, F), { response: (r = t == null ? void 0 : t.hookOptions) != null && r.cloneResponse ? g.clone() : g }));
    b instanceof Response ? g = b : typeof b == "object" && b !== null && (g = b.response);
  }
  if (g.ok) {
    if (!(l.method !== "HEAD")) return { data: "", error: null };
    const b = pt(g), N = { data: null, response: g, request: l };
    if (b === "json" || b === "text") {
      const x = await g.text(), Re = (i = l.jsonParser) != null ? i : ge;
      N.data = await Re(x);
    } else N.data = await g[b]();
    (l == null ? void 0 : l.output) && l.output && !l.disableValidation && (N.data = await H(l.output, N.data));
    for (const x of u.onSuccess) x && await x(A(P({}, N), { response: (o = t == null ? void 0 : t.hookOptions) != null && o.cloneResponse ? g.clone() : g }));
    return (t == null ? void 0 : t.throw) ? N.data : { data: N.data, error: null };
  }
  const Oe = (f = t == null ? void 0 : t.jsonParser) != null ? f : ge, k = await g.text(), oe = yt(k), W = oe ? await Oe(k) : null, Se = { response: g, responseText: k, request: l, error: A(P({}, W), { status: g.status, statusText: g.statusText }) };
  for (const _ of u.onError) _ && await _(A(P({}, Se), { response: (a = t == null ? void 0 : t.hookOptions) != null && a.cloneResponse ? g.clone() : g }));
  if (t == null ? void 0 : t.retry) {
    const _ = dt(t.retry), b = (c = t.retryAttempt) != null ? c : 0;
    if (await _.shouldAttemptRetry(b, g)) {
      for (const x of u.onRetry) x && await x(F);
      const N = _.getDelay(b);
      return await new Promise((x) => setTimeout(x, N)), await ie(e, A(P({}, t), { retryAttempt: b + 1 }));
    }
  }
  if (t == null ? void 0 : t.throw) throw new ct(g.status, g.statusText, oe ? W : k);
  return { data: null, error: A(P({}, W), { status: g.status, statusText: g.statusText }) };
};
const Pt = (e, t) => {
  var _a, _b, _c, _d, _e2, _f, _g;
  const n = "credentials" in Request.prototype, s = Ge(e == null ? void 0 : e.baseURL, e == null ? void 0 : e.basePath) ?? "/api/auth", r = ((_a = e == null ? void 0 : e.plugins) == null ? void 0 : _a.flatMap((l) => l.fetchPlugins).filter((l) => l !== void 0)) || [], i = { id: "lifecycle-hooks", name: "lifecycle-hooks", hooks: { onSuccess: (_b = e == null ? void 0 : e.fetchOptions) == null ? void 0 : _b.onSuccess, onError: (_c = e == null ? void 0 : e.fetchOptions) == null ? void 0 : _c.onError, onRequest: (_d = e == null ? void 0 : e.fetchOptions) == null ? void 0 : _d.onRequest, onResponse: (_e2 = e == null ? void 0 : e.fetchOptions) == null ? void 0 : _e2.onResponse } }, { onSuccess: o, onError: f, onRequest: a, onResponse: c, ...u } = (e == null ? void 0 : e.fetchOptions) || {}, d = Et({ baseURL: s, ...n ? { credentials: "include" } : {}, method: "GET", jsonParser(l) {
    return l ? et(l, { strict: false }) : null;
  }, customFetchImpl: fetch, ...u, plugins: [i, ...u.plugins || [], ...(e == null ? void 0 : e.disableDefaultFetchPlugins) ? [] : [He], ...r] }), { $sessionSignal: h, session: m } = tt(d, e), S = (e == null ? void 0 : e.plugins) || [];
  let U = {};
  const w = { $sessionSignal: h, session: m }, M = { "/sign-out": "POST", "/revoke-sessions": "POST", "/revoke-other-sessions": "POST", "/delete-user": "POST" }, v = [{ signal: "$sessionSignal", matcher(l) {
    return l === "/sign-out" || l === "/update-user" || l === "/sign-up/email" || l === "/sign-in/email" || l === "/delete-user" || l === "/verify-email" || l === "/revoke-sessions" || l === "/revoke-session" || l === "/change-email";
  } }];
  for (const l of S) l.getAtoms && Object.assign(w, (_f = l.getAtoms) == null ? void 0 : _f.call(l, d)), l.pathMethods && Object.assign(M, l.pathMethods), l.atomListeners && v.push(...l.atomListeners);
  const O = { notify: (l) => {
    w[l].set(!w[l].get());
  }, listen: (l, C) => {
    w[l].subscribe(C);
  }, atoms: w };
  for (const l of S) l.getActions && (U = rt(((_g = l.getActions) == null ? void 0 : _g.call(l, d, O, e)) ?? {}, U));
  return { get baseURL() {
    return s;
  }, pluginsActions: U, pluginsAtoms: w, pluginPathMethods: M, atomListeners: v, $fetch: d, $store: O };
};
function At(e) {
  return typeof e == "object" && e !== null && "get" in e && typeof e.get == "function" && "lc" in e && typeof e.lc == "number";
}
function Lt(e, t, n) {
  const s = t[e], { fetchOptions: r, query: i, ...o } = n || {};
  return s || ((r == null ? void 0 : r.method) ? r.method : o && Object.keys(o).length > 0 ? "POST" : "GET");
}
function It(e, t, n, s, r) {
  function i(o = []) {
    return new Proxy(function() {
    }, { get(f, a) {
      if (typeof a != "string" || a === "then" || a === "catch" || a === "finally") return;
      const c = [...o, a];
      let u = e;
      for (const d of c) if (u && typeof u == "object" && d in u) u = u[d];
      else {
        u = void 0;
        break;
      }
      return typeof u == "function" || At(u) ? u : i(c);
    }, apply: async (f, a, c) => {
      const u = "/" + o.map((v) => v.replace(/[A-Z]/g, (O) => `-${O.toLowerCase()}`)).join("/"), d = c[0] || {}, h = c[1] || {}, { query: m, fetchOptions: S, ...U } = d, w = { ...h, ...S }, M = Lt(u, n, d);
      return await t(u, { ...w, body: M === "GET" ? void 0 : { ...U, ...(w == null ? void 0 : w.body) || {} }, query: m || (w == null ? void 0 : w.query), method: M, async onSuccess(v) {
        var _a;
        if (await ((_a = w == null ? void 0 : w.onSuccess) == null ? void 0 : _a.call(w, v)), !r || w.disableSignal) return;
        const O = r.filter((C) => C.matcher(u));
        if (!O.length) return;
        const l = /* @__PURE__ */ new Set();
        for (const C of O) {
          const g = s[C.signal];
          if (!g) return;
          if (l.has(C.signal)) continue;
          l.add(C.signal);
          const F = g.get();
          setTimeout(() => {
            g.set(!F);
          }, 10);
        }
      } });
    } });
  }
  return i();
}
function Ut(e) {
  const { pluginPathMethods: t, pluginsActions: n, pluginsAtoms: s, $fetch: r, atomListeners: i, $store: o } = Pt(e), f = {};
  for (const [a, c] of Object.entries(s)) f[`use${$e(a)}`] = c;
  return It({ ...n, ...f, $fetch: r, $store: o }, r, t, s, i);
}
var Ct = ["/sign-up", "/sign-in/social", "/sign-in/oauth2", "/email-otp/send-verification-otp"], Nt = () => {
  let e, t, n;
  const s = async (r) => {
    const i = { ...r, secretSeed: r.secretSeed ? Uint8Array.from(r.secretSeed) : void 0 };
    await e.authenticate(i), await t.set(i);
  };
  return { id: "jazz-plugin", $InferServerPlugin: {}, getActions: (r, i) => ({ jazz: { setJazzContext: (o) => {
    e = o;
  }, setAuthSecretStorage: (o) => {
    t = o, n && n(), n = t.onUpdate((f) => {
      var _a, _b;
      if (f === false) {
        const a = (_a = i.atoms.session) == null ? void 0 : _a.get();
        if (!a) return;
        if (a.isPending || a.isRefetching) {
          const c = (_b = i.atoms.session) == null ? void 0 : _b.listen((u) => {
            c == null ? void 0 : c(), u.data !== null && r("/sign-out", { method: "POST" });
          });
        } else r("/sign-out", { method: "POST" });
      }
    });
  } } }), fetchPlugins: [{ id: "jazz-plugin", name: "jazz-plugin", hooks: { async onRequest(r) {
    if (Ct.some((i) => r.url.toString().includes(i))) {
      const i = await t.get();
      if (!i) throw new Error("Jazz credentials not found");
      r.headers.set("x-jazz-auth", JSON.stringify({ accountID: i.accountID, secretSeed: i.secretSeed ? Array.from(i.secretSeed) : void 0, accountSecret: i.accountSecret }));
    }
  }, async onSuccess(r) {
    var _a;
    if (r.request.url.toString().includes("/sign-up")) {
      await s(r.data.jazzAuth);
      return;
    }
    if (r.request.url.toString().includes("/sign-in/email")) {
      await s(r.data.jazzAuth);
      return;
    }
    if (r.request.url.toString().includes("/get-session")) {
      if (r.data === null) {
        t.isAuthenticated === true && (console.info("Jazz is authenticated, but the session is null. Logging out"), await e.logOut());
        return;
      }
      if (!((_a = r.data) == null ? void 0 : _a.user)) return;
      if (t.isAuthenticated === false) {
        console.info("Jazz is not authenticated, using Better Auth stored credentials"), await s(r.data.jazzAuth);
        return;
      }
      const i = r.data.user.accountID, o = await t.get();
      if (!o) throw new Error("Jazz credentials not found");
      o.accountID !== i && (console.info("Jazz credentials mismatch, using Better Auth stored credentials"), await s(r.data.jazzAuth));
      return;
    }
    if (r.request.url.toString().includes("/sign-out")) {
      await e.logOut();
      return;
    }
    if (r.request.url.toString().includes("/delete-user")) {
      await e.logOut();
      return;
    }
  } } }] };
};
const xt = () => ({ id: "magic-link", $InferServerPlugin: {} });
function ye(e) {
  return e.split("").map((t) => t.charCodeAt(0) <= 127 ? t : "?").join("");
}
const Mt = () => ({ id: "cloudflare", $InferServerPlugin: {}, getActions: (e) => ({ uploadFile: async (t, n) => {
  const s = { "x-filename": ye(t.name) };
  return n && Object.keys(n).length > 0 && (s["x-file-metadata"] = ye(JSON.stringify(n))), e("/files/upload-raw", { method: "POST", headers: s, body: t });
} }) }), jt = Ut({ plugins: [Nt(), xt(), Mt()] });
export {
  jt as a
};
