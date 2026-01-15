import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type ServiceBlock = {
  id: string; // for #anchor
  title: string;
  desc: string;
  bullets: string[];
  deliverables: string[];
  tech: string[];
};

const SERVICES: ServiceBlock[] = [
  {
    id: "web",
    title: "Web Development",
    desc: "High-performance websites and web apps with clean UI, strong SEO and production-ready architecture.",
    bullets: [
      "Landing pages and dashboards",
      "Admin panels & internal tools",
      "Performance and SEO optimization",
    ],
    deliverables: [
      "UI components + pages",
      "API integration",
      "Deploy-ready build (Netlify/Vercel)",
    ],
    tech: ["Qwik", "React", "Tailwind", "Node.js", "PostgreSQL"],
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    desc: "Smooth mobile apps that feel native. We ship MVPs fast and prepare for store release.",
    bullets: [
      "MVP + iterations",
      "Auth, payments, notifications",
      "Analytics events and crash reporting",
    ],
    deliverables: [
      "App UI + navigation",
      "Backend/API integration",
      "Release checklist (stores)",
    ],
    tech: ["Flutter", "React Native", "Firebase", "REST APIs"],
  },
  {
    id: "xr",
    title: "AR / XR Experiences",
    desc: "Interactive AR/XR demos and navigation experiences that work in the real world, not just in prototypes.",
    bullets: [
      "WebXR experiences",
      "Marker-based navigation & overlays",
      "Unity pipeline (if needed)",
    ],
    deliverables: [
      "Interactive scene / flow",
      "Performance tuning",
      "Device testing notes",
    ],
    tech: ["WebXR", "Three.js", "Unity", "AR markers", "6DoF"],
  },
  {
    id: "backend",
    title: "Backend & DevOps",
    desc: "APIs, databases and deployments that keep products stable, secure and scalable.",
    bullets: [
      "REST/GraphQL APIs",
      "Database design & migrations",
      "CI/CD, monitoring, logging",
    ],
    deliverables: [
      "API endpoints + docs",
      "Database schema",
      "Deployment pipeline",
    ],
    tech: ["Node.js", "NestJS", "PostgreSQL", "Docker", "Cloudflare/Vercel/Render"],
  },
];

function cx(...parts: Array<string | false | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

export const ServicesList = component$(() => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        {/* Quick nav */}
        <div class="rounded-3xl border border-black/10 bg-white p-4 shadow-sm sm:p-5">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div class="text-sm font-semibold text-black">Choose a service</div>
              <div class="mt-1 text-sm text-black/70">
                Jump to details and deliverables.
              </div>
            </div>

            <div class="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  class="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-black/70 shadow-sm transition hover:bg-black/5 hover:text-black"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Service blocks */}
        <div class="mt-10 space-y-6">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              id={s.id}
              class="scroll-mt-24 rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8"
            >
              <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div class="max-w-2xl">
                  <p class="text-xs font-medium text-black/50">Service</p>
                  <h2 class="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                    {s.title}
                  </h2>
                  <p class="mt-3 text-sm leading-relaxed text-black/70 sm:text-base">
                    {s.desc}
                  </p>

                  <ul class="mt-5 space-y-2 text-sm text-black/70">
                    {s.bullets.map((b) => (
                      <li key={b} class="flex items-center gap-2">
                        <span class="inline-block h-1.5 w-1.5 rounded-full bg-black/40" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div class="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      class="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                    >
                      Request estimate
                    </Link>
                    <Link
                      href="/work"
                      class="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/70 shadow-sm transition hover:bg-black/5 hover:text-black"
                    >
                      See examples
                    </Link>
                  </div>
                </div>

                {/* Right column cards */}
                <div class="grid w-full gap-4 lg:max-w-sm">
                  <div class="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
                    <div class="text-sm font-semibold text-black">Deliverables</div>
                    <ul class="mt-3 space-y-2 text-sm text-black/70">
                      {s.deliverables.map((d) => (
                        <li key={d} class="flex items-center gap-2">
                          <span class="inline-block h-1.5 w-1.5 rounded-full bg-black/40" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div class="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
                    <div class="text-sm font-semibold text-black">Tech stack</div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      {s.tech.map((t) => (
                        <span
                          key={t}
                          class={cx(
                            "rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70"
                          )}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6 text-xs text-black/50">
                Tip: replace bullets and tech with your real workflow and tools.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
