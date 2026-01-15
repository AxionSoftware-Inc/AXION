import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type Step = {
  k: string;
  title: string;
  desc: string;
  bullets: string[];
};

const STEPS: Step[] = [
  {
    k: "01",
    title: "Discovery",
    desc: "We clarify scope, risks and architecture so delivery is predictable.",
    bullets: ["Brief + requirements", "Estimate + timeline", "Architecture draft"],
  },
  {
    k: "02",
    title: "Build",
    desc: "Design, development and QA in short iterations with visible progress.",
    bullets: ["UI/UX + components", "Implementation", "Testing + fixes"],
  },
  {
    k: "03",
    title: "Launch & Support",
    desc: "We deploy, monitor and improve. Your product stays healthy after release.",
    bullets: ["Deploy + monitoring", "Analytics events", "Support + updates"],
  },
];

function cx(...parts: Array<string | false | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

export const ProcessSteps = component$(() => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-xs font-medium text-black/60">Process</p>
            <h2 class="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
              Clear steps. Clean delivery.
            </h2>
            <p class="mt-3 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base">
              No chaos, no guessing. We keep the work structured so you always know what’s next.
            </p>
          </div>

          <Link
            href="/contact"
            class="inline-flex w-fit items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70 shadow-sm transition hover:bg-black/5 hover:text-black"
          >
            Get timeline & quote
          </Link>
        </div>

        <div class="mt-10 grid gap-4 lg:grid-cols-3">
          {STEPS.map((s, idx) => (
            <div
              key={s.k}
              class={cx(
                "rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition",
                "hover:-translate-y-0.5 hover:bg-black/[0.02] hover:shadow"
              )}
            >
              <div class="flex items-start justify-between gap-4">
                <div>
                  <div class="text-xs font-medium text-black/50">Step {idx + 1}</div>
                  <div class="mt-2 text-lg font-semibold text-black">{s.title}</div>
                </div>
                <div class="rounded-2xl border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/60">
                  {s.k}
                </div>
              </div>

              <p class="mt-3 text-sm leading-relaxed text-black/70">{s.desc}</p>

              <ul class="mt-5 space-y-2 text-sm text-black/70">
                {s.bullets.map((b) => (
                  <li key={b} class="flex items-center gap-2">
                    <span class="inline-block h-1.5 w-1.5 rounded-full bg-black/40" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* tiny reassurance line */}
        <div class="mt-8 rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
          <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div class="text-sm text-black/70">
              Prefer a quick call first? We can align scope in 15 minutes.
            </div>
            <Link
              href="/contact"
              class="inline-flex w-fit items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});
