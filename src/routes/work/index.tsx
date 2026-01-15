import { component$, useSignal, useComputed$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { WorkHero } from "~/components/work/WorkHero";
import { WorkFilters } from "~/components/work/WorkFilters";
import { ALL_TAG, TAGS, PROJECTS } from "~/components/work/data";
import { WorkGrid } from "~/components/work/WorkGrid";
import { WorkSummaryBar } from "~/components/work/WorkSummaryBar";
import { WorkCtaStrip } from "~/components/work/WorkCtaStrip";
import { FeaturedProject } from "~/components/work/FeaturedProjects";

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export default component$(() => {
  const activeTag = useSignal(ALL_TAG);
  const search = useSignal("");

  const filteredCount = useComputed$(() => {
    const tag = activeTag.value || ALL_TAG;
    const q = normalize(search.value || "");

    return PROJECTS.filter((p) => {
      const matchTag =
        tag === ALL_TAG || p.tags.some((t) => t.toLowerCase() === tag.toLowerCase());

      const hay = normalize([p.title, p.desc, p.tags.join(" ")].join(" "));
      const matchSearch = !q || hay.includes(q);

      return matchTag && matchSearch;
    }).length;
  });

  return (
    <div>
      <Navbar />
      <WorkHero />
      <FeaturedProject project={PROJECTS[0]} />

      <WorkFilters
        tags={TAGS}
        activeTag={activeTag.value}
        onChange$={(tag) => (activeTag.value = tag)}
        showSearch={true}
        searchValue={search.value}
        onSearchChange$={(val) => (search.value = val)}
      />

      {/* Summary bar should be ABOVE the grid */}
      <WorkSummaryBar
        count={filteredCount.value}
        activeTag={activeTag.value}
        search={search.value}
        onClear$={() => {
          activeTag.value = ALL_TAG;
          search.value = "";
        }}
      />

      <WorkGrid activeTag={activeTag.value} search={search.value} />

      <WorkCtaStrip />
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: "AISolutions - Shaxsiy AI Agentlar",
  meta: [
    {
      name: "description",
      content: "Murakkab biznes muammolari uchun shaxsiy AI agentlar va intellektual yechimlar.",
    },
  ],
};
