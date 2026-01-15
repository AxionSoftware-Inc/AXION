import { component$ } from "@builder.io/qwik";

export const ContactHero = component$(() => {
  return (
    <section class="relative overflow-hidden bg-white">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/[0.06] blur-3xl" />
        <div class="absolute -bottom-52 left-10 h-[420px] w-[420px] rounded-full bg-black/[0.04] blur-3xl" />
      </div>

      <div class="relative mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70 shadow-sm">
            <span class="inline-block h-2 w-2 rounded-full bg-black/60" />
            Contact • Brief • Estimate
          </div>

          <h1 class="mt-6 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Let’s talk about your project.
          </h1>

          <p class="mt-4 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base">
            Send a short brief. We’ll reply with a plan, timeline and estimate.
            You can also message us on Telegram.
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            {["Clear scope", "Fast response", "Production quality", "Support"].map((t) => (
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
