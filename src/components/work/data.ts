export type Project = {
  title: string;
  desc: string;
  tags: string[];
  youtubeId: string;
  href?: string;
};

export const ALL_TAG = "All";

export const PROJECTS: Project[] = [
  {
    title: "AR Navigation Prototype",
    desc: "Marker-based indoor navigation with step-by-step arrows and UX tuned for real users.",
    tags: ["XR", "WebXR", "AR"],
    youtubeId: "dQw4w9WgXcQ",
    href: "/work",
  },
  {
    title: "Studio Landing (Qwik)",
    desc: "High-performance landing with clean UI, strong structure and conversion-focused sections.",
    tags: ["Web", "Qwik", "SEO"],
    youtubeId: "dQw4w9WgXcQ",
    href: "/work",
  },
  {
    title: "Mobile MVP Build",
    desc: "Auth, payments, notifications and analytics shipped store-ready.",
    tags: ["Mobile", "Flutter", "API"],
    youtubeId: "dQw4w9WgXcQ",
    href: "/work",
  },
];

export const TAGS: string[] = [
  ALL_TAG,
  "Web",
  "Mobile",
  "XR",
  "Backend",
  "Qwik",
  "Flutter",
  "WebXR",
  "SEO",
  "API",
];
