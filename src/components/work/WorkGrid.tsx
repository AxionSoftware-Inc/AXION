import { component$, useComputed$, useSignal, $ } from "@builder.io/qwik";
import { VideoModal } from "../landing/VideoModal";
import { ProjectCard } from "./ProjectCard";
import { ALL_TAG, PROJECTS, type Project } from "./data";

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export const WorkGrid = component$((props: { activeTag: string; search: string }) => {
  const open = useSignal(false);
  const activeId = useSignal("");
  const activeTitle = useSignal("");

  const filtered = useComputed$(() => {
    const tag = props.activeTag || ALL_TAG;
    const q = normalize(props.search || "");

    return PROJECTS.filter((p) => {
      const matchTag =
        tag === ALL_TAG || p.tags.some((t) => t.toLowerCase() === tag.toLowerCase());

      const hay = normalize([p.title, p.desc, p.tags.join(" ")].join(" "));
      const matchSearch = !q || hay.includes(q);

      return matchTag && matchSearch;
    });
  });

  const openVideo = $((p: Project) => {
    activeId.value = p.youtubeId;
    activeTitle.value = p.title;
    open.value = true;
  });

  return (
    <section class="bg-white">
      <div class="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.value.map((p) => (
            <ProjectCard key={p.title} project={p} onOpenVideo$={openVideo} />
          ))}
        </div>

        {filtered.value.length === 0 ? (
          <div class="mt-10 rounded-3xl border border-black/10 bg-white p-8 text-center text-sm text-black/70 shadow-sm">
            No projects found for this filter.
          </div>
        ) : null}
      </div>

      {activeId.value ? (
        <VideoModal
          open={open.value}
          youtubeId={activeId.value}
          title={activeTitle.value}
          onClose$={() => (open.value = false)}
        />
      ) : null}
    </section>
  );
});
