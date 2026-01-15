import { component$, useSignal } from "@builder.io/qwik";

type FaqItem = {
  q: string;
  a: string;
};

const FAQ: FaqItem[] = [
  {
    q: "How much does a project cost?",
    a: "After a short brief, we provide an estimate with scope and timeline. Small MVPs can start from a few weeks; larger products depend on integrations and complexity.",
  },
  {
    q: "Do you work with fixed price or hourly?",
    a: "Both. For clear scope we can do fixed price. For evolving products we recommend time & materials with weekly milestones.",
  },
  {
    q: "Can you build only the frontend?",
    a: "Yes. We can deliver UI + API integration, or full-stack with backend, database, and deployment.",
  },
  {
    q: "What do you need to start?",
    a: "A short description of the goal, reference examples (if any), timeline, and budget range. Then we define scope and start.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We can monitor, fix issues, and improve features after release. Support can be monthly or per-request.",
  },
];

function cx(...parts: Array<string | false | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

export const Faq = component$(() => {
  const openIndex = useSignal<number | null>(0); // 0 qilsangiz birinchi ochiq turadi, null bo'lsa hammasi yopiq

  return (
    <section class="bg-white">
      <div class="mx-auto max-w-6xl section-padding">
        <div class="max-w-2xl">
          <p class="text-xs font-medium text-black/60">FAQ</p>
          <h2 class="mt-2 section-title">
            Answers, not uncertainty
          </h2>
          <p class="section-subtitle">
            Quick details about how we work, pricing style, and what happens after launch.
          </p>
        </div>

        <div class="mt-10 grid gap-4 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <div class="space-y-3">
              {FAQ.map((item, i) => {
                const isOpen = openIndex.value === i;
                return (
                  <div
                    key={item.q}
                    class={cx(
                      "rounded-3xl border border-black/10 bg-white shadow-sm transition",
                      isOpen ? "shadow" : ""
                    )}
                  >
                    <button
                      type="button"
                      class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                      aria-expanded={isOpen}
                      onClick$={() => {
                        openIndex.value = isOpen ? null : i;
                      }}
                    >
                      <span class="text-sm font-semibold text-black sm:text-base">
                        {item.q}
                      </span>

                      <span
                        class={cx(
                          "grid h-9 w-9 place-items-center rounded-2xl border border-black/10 bg-white text-black/70 transition",
                          isOpen ? "bg-black text-white" : "hover:bg-black/5"
                        )}
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      class={cx(
                        "px-5 pb-5 sm:px-6",
                        isOpen ? "block" : "hidden"
                      )}
                    >
                      <p class="text-sm leading-relaxed text-black/70">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Side card */}
          <div class="lg:col-span-5">
            <div class="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div class="text-sm font-semibold text-black">Still have questions?</div>
              <p class="mt-2 text-sm leading-relaxed text-black/70">
                Send a short brief and we’ll reply with a plan, timeline and estimate.
              </p>

              <div class="mt-5 space-y-2">
                <div class="flex items-center gap-2 text-sm text-black/70">
                  <span class="inline-block h-1.5 w-1.5 rounded-full bg-black/40" />
                  <span>15-minute intro call</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-black/70">
                  <span class="inline-block h-1.5 w-1.5 rounded-full bg-black/40" />
                  <span>Clear scope & next steps</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-black/70">
                  <span class="inline-block h-1.5 w-1.5 rounded-full bg-black/40" />
                  <span>No pressure, just clarity</span>
                </div>
              </div>

              <a
                href="/contact"
                class="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Contact us
              </a>

              <p class="mt-3 text-center text-xs text-black/50">
                Replace text with your real workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
