import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { VideoModal } from "./VideoModal";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  youtubeId: string;
  href?: string; // keyin /work ichida detail page qilsangiz
};

const PROJECTS: Project[] = [
  {
    title: "AR Navigation Prototype",
    desc: "Marker-based indoor navigation with step-by-step arrows and UX tuned for real users.",
    tags: ["WebXR", "AR", "Navigation"],
    youtubeId: "dQw4w9WgXcQ",
    href: "/work",
  },
  {
    title: "Cardio Assistant Web App",
    desc: "Clean UI + fast loading landing with structured content and conversion-focused layout.",
    tags: ["Qwik", "SEO", "Landing"],
    youtubeId: "dQw4w9WgXcQ",
    href: "/work",
  },
  {
    title: "Mobile MVP Build",
    desc: "Authentication, payments, notifications and analytics, shipped store-ready.",
    tags: ["Flutter", "API", "Release"],
    youtubeId: "dQw4w9WgXcQ",
    href: "/work",
  },
];

function cx(...parts: Array<string | false | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

function ytThumb(id: string) {
  // maxres bo'lmasa ham hqdefault bor
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
}

export const WorkGrid = component$(() => {
  const open = useSignal(false);
  const activeId = useSignal(PROJECTS[0]?.youtubeId || "");
  const activeTitle = useSignal(PROJECTS[0]?.title || "");

  return (
    <section class="bg-white">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-xs font-medium text-black/60">Work</p>
            <h2 class="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
              Real projects, real demos
            </h2>
            <p class="mt-3 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base">
              Short videos show how the product feels. Click a card to watch the demo.
            </p>
          </div>

          <Link
            href="/work"
            class="inline-flex w-fit items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70 shadow-sm transition hover:bg-black/5 hover:text-black"
          >
            See all projects
          </Link>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <button
              key={p.title}
              type="button"
              class={cx(
                "group text-left rounded-3xl border border-black/10 bg-white p-4 shadow-sm transition",
                "hover:-translate-y-0.5 hover:bg-black/[0.02] hover:shadow"
              )}
              onClick$={() => {
                activeId.value = p.youtubeId;
                activeTitle.value = p.title;
                open.value = true;
              }}
            >
              <div class="relative overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02]">
                <img
                  src={ytThumb(p.youtubeId)}
                  alt={`${p.title} video thumbnail`}
                  class="h-44 w-full object-cover sm:h-48"
                  loading="lazy"
                  onError$={(e) => {
                    // fallback to hqdefault if maxres doesn't exist
                    const img = e.target as HTMLImageElement;
                    img.src = `https://i.ytimg.com/vi/${p.youtubeId}/hqdefault.jpg`;
                  }}
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-80" />

                {/* Play pill */}
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
          ))}
        </div>
      </div>

      <VideoModal
        open={open.value}
        youtubeId={activeId.value}
        title={activeTitle.value}
        onClose$={() => (open.value = false)}
      />
    </section>
  );
});
