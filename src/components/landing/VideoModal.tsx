import { component$, type QRL } from "@builder.io/qwik";

function cx(...parts: Array<string | false | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

export const VideoModal = component$(
  (props: {
    open: boolean;
    title?: string;
    youtubeId: string;
    onClose$: QRL<() => void>;
  }) => {
    return (
      <div
        class={cx(
          "fixed inset-0 z-[60]",
          props.open ? "block" : "hidden"
        )}
        aria-hidden={!props.open}
      >
        {/* Backdrop */}
        <button
          type="button"
          class="absolute inset-0 bg-black/60"
          aria-label="Close video"
          onClick$={props.onClose$}
        />

        {/* Dialog */}
        <div class="relative mx-auto flex h-full max-w-5xl items-center px-4 sm:px-6">
          <div class="w-full overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
            <div class="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
              <div class="min-w-0">
                <div class="truncate text-sm font-medium text-white">
                  {props.title || "Project video"}
                </div>
                <div class="text-xs text-white/60">YouTube demo</div>
              </div>

              <button
                type="button"
                class="rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/15 transition"
                onClick$={props.onClose$}
              >
                Close
              </button>
            </div>

            <div class="relative w-full bg-black">
              {/* 16:9 */}
              <div class="aspect-video w-full">
                <iframe
                  class="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${props.youtubeId}?autoplay=1&rel=0`}
                  title={props.title || "YouTube video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullscreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
