import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL = [
  { label: "Telegram", href: "https://t.me/your_username" },
  { label: "YouTube", href: "https://youtube.com/@your_channel" },
  { label: "Email", href: "mailto:hello@yourdomain.com" },
];

function cx(...parts: Array<string | false | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

export const Footer = component$(() => {
  const year = new Date().getFullYear();

  return (
    <footer class="bg-white">
      <div class="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-16">
        <div class="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <div class="grid gap-10 lg:grid-cols-12">
            {/* Brand */}
            <div class="lg:col-span-5">
              <Link href="/" class="group inline-flex items-center gap-3">
                <div class="grid h-10 w-10 place-items-center rounded-2xl border border-black/10 bg-white shadow-sm">
                  <span class="text-sm font-semibold tracking-tight">◼︎</span>
                </div>
                <div class="leading-tight">
                  <div class="text-sm font-semibold tracking-tight text-black">
                    Caine Studio
                  </div>
                  <div class="text-xs text-black/60">
                    Web • Mobile • XR • Backend
                  </div>
                </div>
              </Link>

              <p class="mt-4 max-w-md text-sm leading-relaxed text-black/70">
                We build production-ready products with clean UI, strong engineering,
                and predictable delivery.
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                {["Fast", "Secure", "Scalable", "Polished UI"].map((t) => (
                  <span
                    key={t}
                    class="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div class="lg:col-span-3">
              <div class="text-xs font-medium text-black/60">Navigation</div>
              <nav class="mt-4 flex flex-col gap-2">
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    class="w-fit rounded-xl px-2 py-1 text-sm text-black/70 transition hover:bg-black/5 hover:text-black"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact / Social */}
            <div class="lg:col-span-4">
              <div class="text-xs font-medium text-black/60">Contact</div>
              <div class="mt-4 space-y-2">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={s.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    class={cx(
                      "flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black/70 shadow-sm transition",
                      "hover:bg-black/5 hover:text-black"
                    )}
                  >
                    <span class="font-medium">{s.label}</span>
                    <span class="text-xs text-black/50">Open →</span>
                  </a>
                ))}
              </div>

              <Link
                href="/contact"
                class="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Start a project
              </Link>

              <p class="mt-3 text-center text-xs text-black/50">
                Replace Telegram/YouTube/email with your real links.
              </p>
            </div>
          </div>

          <div class="mt-10 border-t border-black/10 pt-5">
            <div class="flex flex-col gap-2 text-xs text-black/50 sm:flex-row sm:items-center sm:justify-between">
              <div>© {year} Caine Studio. All rights reserved.</div>
              <div class="flex items-center gap-2">
                <span class="rounded-full border border-black/10 bg-white px-3 py-1">
                  Built with Qwik
                </span>
                <span class="rounded-full border border-black/10 bg-white px-3 py-1">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
