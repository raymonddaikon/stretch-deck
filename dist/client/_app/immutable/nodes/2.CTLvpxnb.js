import "../chunks/DsnmJJEf.js";
import { p as o, u as s, f as c, b as l, c as n } from "../chunks/Cerututf.js";
import { g as i } from "../chunks/BPNiD34A.js";
import { g as x } from "../chunks/CsOUNaBs.js";
const f = () => "Welcome", p = () => "\u3088\u3053\u305D", u = (a = {}, e = {}) => (e.locale ?? x()) === "en" ? f() : p();
var d = c('<div class="pointer-events-auto col-start-2 row-start-2 flex flex-col items-center justify-center gap-6 px-4 text-center"><div class="flex flex-none flex-col gap-2"><h1 class="text-center text-2xl font-medium text-balance text-black md:text-3xl">Get Started with Stretch Deck</h1> <p class="text-center text-base text-pretty text-black/60 md:text-lg">Create your first deck of stretches to start building your personalized stretching routine.</p></div> <div class="flex w-full max-w-md flex-none flex-col items-center gap-2 sm:flex-row"><a href="/create-deck" class="button flex-1">Create a Deck</a> <a href="/create-card" class="button flex-1">Create a Card</a></div> <div class="flex flex-col gap-1 text-base text-black/40"><p>Cards are individual stretches with instructions.</p> <p>Decks are collections of cards for your routines.</p></div></div>');
function b(a, e) {
  o(e, true);
  const t = i();
  s(() => {
    t.title = u(), t.subtitle = "";
  });
  var r = d();
  l(a, r), n();
}
export {
  b as component
};
