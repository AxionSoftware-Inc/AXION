import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const ServicesHero = component$(() => {
  return (
    <section class="relative overflow-hidden bg-white">
      {/* soft accents */}
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/[0.06] blur-3xl" />
        <div class="absolute -bottom-52 left-10 h-[420px] w-[420px] rounded-full bg-black/[0.04] blur-3xl" />
      </div>

      <div class="relative mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70 shadow-sm">
            <span class="inline-block h-2 w-2 rounded-full bg-black/60" />
            Services • Delivery • Support
          </div>

          <h1 class="mt-6 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Clear services, production quality.
          </h1>

          <p class="mt-4 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base">
            We build web, mobile, desktop and XR products with clean UI, solid engineering,
            and predictable delivery. Choose a service, send a brief, and we’ll propose a plan.
          </p>

          <div class="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              class="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Get a quote
            </Link>

            <Link
              href="/work"
              class="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/70 shadow-sm transition hover:bg-black/5 hover:text-black"
            >
              View work
            </Link>
          </div>

          <div class="mt-10 flex flex-wrap gap-2">
            {["Fast kickoff", "Clear scope", "Polished UI", "Support"].map((t) => (
              <span
                key={t}
                class="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
