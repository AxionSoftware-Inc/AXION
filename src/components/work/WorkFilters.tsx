import { component$, useSignal, type QRL } from "@builder.io/qwik";
import { ALL_TAG } from "./data";

function cx(...parts: Array<string | false | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

export const WorkFilters = component$(
  (props: {
    tags: string[];
    activeTag: string;
    onChange$: QRL<(tag: string) => void>;
    showSearch?: boolean;
    searchValue?: string;
    onSearchChange$?: QRL<(value: string) => void>;
  }) => {
    const local = useSignal(props.activeTag || ALL_TAG);

    return (
      <section class="bg-white">
        <div class="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
          <div class="flex flex-col gap-4 rounded-3xl border border-black/10 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
            {/* Tags */}
            <div class="flex flex-wrap gap-2">
              {props.tags.map((t) => {
                const active = (props.activeTag || local.value) === t;
                return (
                  <button
                    key={t}
                    type="button"
                    class={cx(
                      "rounded-full border px-3 py-1 text-xs transition",
                      active
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-white text-black/70 hover:bg-black/5 hover:text-black"
                    )}
                    onClick$={() => {
                      local.value = t;
                      props.onChange$(t);
                    }}
                    aria-pressed={active}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {/* Optional search */}
            {props.showSearch ? (
              <div class="w-full sm:w-72">
                <div class="flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-2 shadow-sm">
                  <span class="text-xs text-black/50">⌕</span>
                  <input
                    class="w-full bg-transparent text-sm text-black/70 outline-none placeholder:text-black/40"
                    placeholder="Search projects..."
                    value={props.searchValue || ""}
                    onInput$={(e) =>
                      props.onSearchChange$?.((e.target as HTMLInputElement).value)
                    }
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }
);
