import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type Service = {
  title: string;
  desc: string;
  bullets: string[];
  href: string;
};

const SERVICES: Service[] = [
  {
    title: "Web Development",
    desc: "High-performance websites and web apps with clean UI and solid architecture.",
    bullets: ["Qwik/React", "SSR + SEO", "Admin panels"],
    href: "/services#web",
  },
  {
    title: "Mobile Apps",
    desc: "Production-ready apps with smooth UX and reliable integrations.",
    bullets: ["Flutter / RN", "Auth + Payments", "App Store ready"],
    href: "/services#mobile",
  },
  {
    title: "AR / XR Experiences",
    desc: "Interactive demos and navigation experiences that feel real, not toy-like.",
    bullets: ["WebXR", "Unity pipeline", "6DoF / markers"],
    href: "/services#xr",
  },
  {
    title: "Backend & DevOps",
    desc: "APIs, databases and deployment that keep your product stable and scalable.",
    bullets: ["REST/GraphQL", "Docker + CI/CD", "Monitoring"],
    href: "/services#backend",
  },
];

function cx(...parts: Array<string | false | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

export const ServicesGrid = component$(() => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-6xl section-padding">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-xs font-medium text-black/60">Services</p>
            <h2 class="mt-2 section-title">
              What we can build for you
            </h2>
            <p class="section-subtitle">
              Clear scope, strong engineering, polished UI. We ship work that survives real users.
            </p>
          </div>

          <Link
            href="/services"
            class="inline-flex w-fit items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70 shadow-sm transition hover:bg-black/5 hover:text-black"
          >
            See all services
          </Link>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              class={cx(
                "group rounded-3xl border border-black/10 bg-white p-5 shadow-sm transition",
                "hover:-translate-y-0.5 hover:bg-black/[0.02] hover:shadow"
              )}
            >
              <div class="flex items-start justify-between gap-3">
                <div class="text-base font-semibold text-black">{s.title}</div>
                <span class="rounded-2xl border border-black/10 bg-white px-2 py-1 text-[11px] text-black/60 transition group-hover:bg-black group-hover:text-white">
                  Explore
                </span>
              </div>

              <p class="mt-3 text-sm leading-relaxed text-black/70">{s.desc}</p>

              <ul class="mt-4 space-y-2 text-sm text-black/70">
                {s.bullets.map((b) => (
                  <li key={b} class="flex items-center gap-2">
                    <span class="inline-block h-1.5 w-1.5 rounded-full bg-black/40" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div class="mt-5 text-xs font-medium text-black/50 group-hover:text-black/70 transition">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});
