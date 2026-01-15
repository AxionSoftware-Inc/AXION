import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const ServicesCta = component$(() => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-10">
          {/* soft glow */}
          <div class="pointer-events-none absolute inset-0">
            <div class="absolute -top-24 right-10 h-72 w-72 rounded-full bg-black/[0.06] blur-3xl" />
            <div class="absolute -bottom-28 left-6 h-80 w-80 rounded-full bg-black/[0.04] blur-3xl" />
          </div>

          <div class="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-8">
              <p class="text-xs font-medium text-black/60">Next step</p>
              <h3 class="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                Tell us about your project.
              </h3>
              <p class="mt-3 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base">
                Send a short brief and we’ll reply with scope, timeline and estimate.
                Clear plan, no pressure.
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                {["Free consultation", "Clear estimate", "Fast kickoff", "Support"].map((t) => (
                  <span
                    key={t}
                    class="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div class="lg:col-span-4">
              <div class="flex flex-col gap-3">
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
                  Message on Telegram
                </a>

                <div class="text-center text-xs text-black/50">
                  Or email:{" "}
                  <a
                    href="mailto:hello@yourdomain.com"
                    class="font-medium text-black/70 hover:text-black"
                  >
                    hello@yourdomain.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
