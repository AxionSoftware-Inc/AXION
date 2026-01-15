import { component$ } from "@builder.io/qwik";
import type { Project } from "./data";

function ytThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
}

export const FeaturedProject = component$((props: { project: Project }) => {
  const p = props.project;

  return (
    <section class="bg-white">
      <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div class="grid gap-8 rounded-3xl border border-black/10 bg-white p-6 shadow-sm lg:grid-cols-12">
          {/* Text */}
          <div class="lg:col-span-5">
            <p class="text-xs font-medium text-black/60">Featured project</p>
            <h2 class="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
              {p.title}
            </h2>
            <p class="mt-3 text-sm leading-relaxed text-black/70">
              {p.desc}
            </p>

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

            <a
              href={`https://www.youtube.com/watch?v=${p.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              class="mt-6 inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Watch full demo
            </a>
          </div>

          {/* Video preview */}
          <div class="lg:col-span-7">
            <div class="relative overflow-hidden rounded-2xl border border-black/10">
              <img
                src={ytThumb(p.youtubeId)}
                alt={p.title}
                class="h-64 w-full object-cover sm:h-80"
                loading="lazy"
                onError$={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = `https://i.ytimg.com/vi/${p.youtubeId}/hqdefault.jpg`;
                }}
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
              <div class="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-black shadow">
                ▶ Play demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
