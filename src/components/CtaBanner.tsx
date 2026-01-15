import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const CtaBanner = component$(() => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-10">
          {/* background accents */}
          <div class="pointer-events-none absolute inset-0">
            <div class="absolute -top-24 right-10 h-72 w-72 rounded-full bg-black/[0.06] blur-3xl" />
            <div class="absolute -bottom-32 left-6 h-80 w-80 rounded-full bg-black/[0.04] blur-3xl" />
          </div>

          <div class="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-8">
              <p class="text-xs font-medium text-black/60">Ready when you are</p>
              <h3 class="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                Let’s build your next product.
              </h3>
              <p class="mt-3 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base">
                Send a brief and we’ll reply with a plan, timeline and estimate.
                Clear scope, clean delivery.
              </p>

              <div class="mt-6 flex flex-wrap gap-2">
                {["Fast kickoff", "Clear estimate", "Production quality", "Support"].map((t) => (
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
                    class="font-medium text-black/70 hover:text-black"
                    href="mailto:hello@yourdomain.com"
                  >
                    hello@yourdomain.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tiny footer line */}
        <p class="mt-4 text-center text-xs text-black/45">
          Tip: add your real Telegram username and domain email here.
        </p>
      </div>
    </section>
  );
});
