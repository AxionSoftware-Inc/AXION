import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Hero = component$(() => {
  return (
    <section class="relative overflow-hidden bg-white">
      {/* soft accents */}
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/[0.06] blur-3xl" />
        <div class="absolute -bottom-52 left-10 h-[420px] w-[420px] rounded-full bg-black/[0.04] blur-3xl" />
      </div>

      <div class="relative mx-auto max-w-6xl section-padding lg:py-28">
        <div class="grid items-center gap-12 lg:grid-cols-12">
          {/* LEFT */}
          <div class="lg:col-span-7">
            <div class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70 shadow-sm">
              <span class="inline-block h-2 w-2 rounded-full bg-black/60" />
              AR • Web • Mobile • Desktop
              <span class="text-black/30">•</span>
              Production-ready
            </div>

            <h1 class="mt-6 text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl">
              We build fast, reliable{" "}
              <span class="relative inline-block">
                digital products
                <span class="pointer-events-none absolute -bottom-1 left-0 h-[10px] w-full rounded-full bg-black/10" />
              </span>
              .
            </h1>

            <p class="mt-6 max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg">
              High-performance web platforms, mobile apps, desktop software and immersive AR/XR.
              Clean UI, solid architecture, and clear delivery.
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                class="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Start a project
              </Link>

              <Link
                href="/work"
                class="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/70 shadow-sm transition hover:bg-black/5 hover:text-black"
              >
                View work
              </Link>
            </div>

            <div class="mt-10 flex flex-wrap gap-2">
              {["Fast delivery", "Secure by default", "Polished UI", "Support"].map((t) => (
                <span
                  key={t}
                  class="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div class="lg:col-span-5">
            <div class="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <div class="text-sm font-semibold text-black">How we deliver</div>
                  <div class="mt-1 text-sm text-black/60">
                    Clear steps, predictable results.
                  </div>
                </div>
                <span class="rounded-2xl bg-black px-3 py-1 text-xs font-medium text-white">
                  Studio
                </span>
              </div>

              <div class="mt-6 space-y-3">
                <div class="rounded-2xl border border-black/10 p-4">
                  <div class="flex items-center justify-between">
                    <div class="text-sm font-medium text-black">Discovery</div>
                    <div class="text-xs text-black/50">1–3 days</div>
                  </div>
                  <div class="mt-1 text-xs text-black/60">
                    Scope, architecture, estimate.
                  </div>
                </div>

                <div class="rounded-2xl border border-black/10 p-4">
                  <div class="flex items-center justify-between">
                    <div class="text-sm font-medium text-black">Build</div>
                    <div class="text-xs text-black/50">1–6 weeks</div>
                  </div>
                  <div class="mt-1 text-xs text-black/60">
                    Design, development, QA.
                  </div>
                </div>

                <div class="rounded-2xl border border-black/10 p-4">
                  <div class="flex items-center justify-between">
                    <div class="text-sm font-medium text-black">Launch</div>
                    <div class="text-xs text-black/50">24–72h</div>
                  </div>
                  <div class="mt-1 text-xs text-black/60">
                    Deploy, monitoring, support.
                  </div>
                </div>
              </div>
            </div>

            <p class="mt-4 text-xs text-black/50">
              Replace timings and text with your real workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
