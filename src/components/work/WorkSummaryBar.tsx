import { component$, type QRL } from "@builder.io/qwik";
import { ALL_TAG } from "./data";

function cx(...parts: Array<string | false | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

export const WorkSummaryBar = component$(
  (props: {
    count: number;
    activeTag: string;
    search: string;
    onClear$: QRL<() => void>;
  }) => {
    const hasFilters = props.activeTag !== ALL_TAG || (props.search?.trim()?.length ?? 0) > 0;

    return (
      <section class="bg-white">
        <div class="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <div class="flex flex-col gap-3 rounded-3xl border border-black/10 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div class="text-sm text-black/70">
              <span class="font-semibold text-black">{props.count}</span>{" "}
              project{props.count === 1 ? "" : "s"} shown
              {props.activeTag !== ALL_TAG ? (
                <span class="text-black/50"> • Tag: {props.activeTag}</span>
              ) : null}
              {props.search?.trim() ? (
                <span class="text-black/50"> • Search: “{props.search.trim()}”</span>
              ) : null}
            </div>

            <button
              type="button"
              class={cx(
                "inline-flex w-fit items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium shadow-sm transition",
                hasFilters
                  ? "text-black/70 hover:bg-black/5 hover:text-black"
                  : "cursor-not-allowed text-black/40"
              )}
              disabled={!hasFilters}
              onClick$={props.onClear$}
            >
              Clear filters
            </button>
          </div>
        </div>
      </section>
    );
  }
);
