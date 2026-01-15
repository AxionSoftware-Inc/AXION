import { component$, useSignal, $, useVisibleTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

function cx(...parts: Array<string | false | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

export const Navbar = component$(() => {
  const menuOpen = useSignal(false);
  const scrolled = useSignal(false);
  const loc = useLocation();

  const closeMenu = $(() => {
    menuOpen.value = false;
  });

  useVisibleTask$(() => {
    const onScroll = () => {
      scrolled.value = window.scrollY > 8;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  const isActive = (href: string) => {
    // "/" faqat aynan home bo'lganda active bo'lsin
    if (href === "/") return loc.url.pathname === "/";
    return loc.url.pathname.startsWith(href);
  };

  return (
    <header
      class={cx(
        "sticky top-0 z-50 w-full",
        scrolled.value
          ? "border-b border-white/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60"
          : "bg-white"
      )}
    >
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link href="/" class="group flex items-center gap-2" aria-label="Go to home">
          <div class="grid h-9 w-9 place-items-center rounded-xl border border-black/10 bg-white shadow-sm">
            <span class="text-sm font-semibold tracking-tight">◼︎</span>
          </div>
          <div class="leading-tight">
            <div class="text-sm font-semibold tracking-tight text-black">
              Caine Studio
            </div>
            <div class="text-xs text-black/60">Web • Mobile • XR</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              class={cx(
                "rounded-xl px-3 py-2 text-sm transition",
                isActive(item.href)
                  ? "bg-black text-white"
                  : "text-black/70 hover:bg-black/5 hover:text-black"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div class="hidden items-center gap-2 md:flex">
          <a
            href="https://t.me/your_username"
            target="_blank"
            rel="noreferrer"
            class="rounded-xl px-3 py-2 text-sm text-black/70 hover:bg-black/5 hover:text-black transition"
          >
            Telegram
          </a>
          <Link
            href="/contact"
            class="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90 transition"
          >
            Get a quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm hover:bg-black/5 transition"
          aria-label={menuOpen.value ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen.value}
          onClick$={() => (menuOpen.value = !menuOpen.value)}
        >
          <span class="sr-only">Toggle menu</span>
          <div class="relative h-4 w-5">
            <span
              class={cx(
                "absolute left-0 top-0 h-0.5 w-5 rounded bg-black transition",
                menuOpen.value ? "translate-y-1.5 rotate-45" : ""
              )}
            />
            <span
              class={cx(
                "absolute left-0 top-1.5 h-0.5 w-5 rounded bg-black transition",
                menuOpen.value ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              class={cx(
                "absolute left-0 top-3 h-0.5 w-5 rounded bg-black transition",
                menuOpen.value ? "-translate-y-1.5 -rotate-45" : ""
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile panel */}
      <div class={cx("md:hidden", menuOpen.value ? "block" : "hidden")}>
        <div class="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <div class="rounded-2xl border border-black/10 bg-white p-2 shadow-sm">
            <nav class="flex flex-col" aria-label="Mobile primary">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick$={closeMenu}
                  class={cx(
                    "rounded-xl px-3 py-3 text-sm transition",
                    isActive(item.href)
                      ? "bg-black text-white"
                      : "text-black/70 hover:bg-black/5 hover:text-black"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div class="mt-2 flex gap-2">
              <a
                href="https://t.me/your_username"
                target="_blank"
                rel="noreferrer"
                class="flex-1 rounded-xl border border-black/10 px-3 py-2 text-center text-sm text-black/70 hover:bg-black/5 hover:text-black transition"
              >
                Telegram
              </a>
              <Link
                href="/contact"
                onClick$={closeMenu}
                class="flex-1 rounded-xl bg-black px-3 py-2 text-center text-sm font-medium text-white shadow-sm hover:opacity-90 transition"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});
