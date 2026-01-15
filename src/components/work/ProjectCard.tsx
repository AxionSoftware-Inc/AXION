import { component$, type QRL } from "@builder.io/qwik";
import type { Project } from "./data";

function cx(...parts: Array<string | false | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

function ytThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
}

export const ProjectCard = component$(
  (props: {
    project: Project;
    onOpenVideo$: QRL<(p: Project) => void>;
  }) => {
    const p = props.project;

    return (
      <button
        type="button"
        class={cx(
          "group text-left rounded-3xl border border-black/10 bg-white p-4 shadow-sm transition",
          "hover:-translate-y-0.5 hover:bg-black/[0.02] hover:shadow"
        )}
        onClick$={() => props.onOpenVideo$(p)}
      >
        <div class="relative overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02]">
          <img
            src={ytThumb(p.youtubeId)}
            alt={`${p.title} video thumbnail`}
            class="h-44 w-full object-cover sm:h-48"
            loading="lazy"
            width="640"
            height="360"
            onError$={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = `https://i.ytimg.com/vi/${p.youtubeId}/hqdefault.jpg`;
            }}
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-80" />

          <div class="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-black shadow-sm">
            <span class="grid h-6 w-6 place-items-center rounded-full bg-black text-white">
              ▶
            </span>
            Watch demo
          </div>
        </div>

        <div class="mt-4">
          <div class="flex items-start justify-between gap-3">
            <div class="text-base font-semibold text-black">{p.title}</div>
            <span class="rounded-2xl border border-black/10 bg-white px-2 py-1 text-[11px] text-black/60 transition group-hover:bg-black group-hover:text-white">
              Video
            </span>
          </div>

          <p class="mt-2 text-sm leading-relaxed text-black/70">{p.desc}</p>

          <div class="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                class="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </button>
    );
  }
);
