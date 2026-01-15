import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const WorkCtaStrip = component$(() => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <div class="pointer-events-none absolute inset-0">
            <div class="absolute -top-24 right-8 h-72 w-72 rounded-full bg-black/[0.06] blur-3xl" />
            <div class="absolute -bottom-28 left-6 h-80 w-80 rounded-full bg-black/[0.04] blur-3xl" />
          </div>

          <div class="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div class="text-sm font-semibold text-black">Want something similar?</div>
              <p class="mt-1 text-sm text-black/70">
                Send a brief and we’ll reply with a plan, timeline and estimate.
              </p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                class="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Start a project
              </Link>
              <a
                href="https://t.me/your_username"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/70 shadow-sm transition hover:bg-black/5 hover:text-black"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
