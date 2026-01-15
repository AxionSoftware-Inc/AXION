import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const WorkHero = component$(() => {
  return (
    <section class="relative overflow-hidden bg-white">
      {/* soft accents */}
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/[0.06] blur-3xl" />
        <div class="absolute -bottom-52 left-10 h-[420px] w-[420px] rounded-full bg-black/[0.04] blur-3xl" />
      </div>

      <div class="relative mx-auto max-w-6xl section-padding pt-16 sm:pt-20">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70 shadow-sm">
            <span class="inline-block h-2 w-2 rounded-full bg-black/60" />
            Work • Case studies • Demos
          </div>

          <h1 class="mt-6 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Projects you can actually watch.
          </h1>

          <p class="mt-4 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base">
            Each card has a short video demo. Click to preview the experience, not just screenshots.
          </p>

          <div class="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              class="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Start a project
            </Link>

            <a
              href="https://youtube.com/@your_channel"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/70 shadow-sm transition hover:bg-black/5 hover:text-black"
            >
              Open YouTube channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});
