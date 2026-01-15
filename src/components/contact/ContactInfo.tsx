import { component$ } from "@builder.io/qwik";

const CONTACT = [
  { label: "Telegram", value: "@your_username", href: "https://t.me/your_username" },
  { label: "Email", value: "hello@yourdomain.com", href: "mailto:hello@yourdomain.com" },
  { label: "YouTube", value: "@your_channel", href: "https://youtube.com/@your_channel" },
];

export const ContactInfo = component$(() => {
  return (
    <div class="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
      <div class="text-sm font-semibold text-black">Direct contact</div>
      <p class="mt-2 text-sm leading-relaxed text-black/70">
        Prefer a quick message? Telegram is the fastest.
      </p>

      <div class="mt-6 space-y-2">
        {CONTACT.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={c.href.startsWith("mailto:") ? undefined : "noreferrer"}
            class="flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black/70 shadow-sm transition hover:bg-black/5 hover:text-black"
          >
            <span class="font-medium">{c.label}</span>
            <span class="text-xs text-black/50">{c.value} →</span>
          </a>
        ))}
      </div>

      <div class="mt-6 rounded-2xl border border-black/10 bg-white p-4">
        <div class="text-xs font-medium text-black/60">What to include</div>
        <ul class="mt-2 space-y-2 text-sm text-black/70">
          {[
            "Goal of the product",
            "Deadline (if any)",
            "Budget range (optional)",
            "Reference links / videos",
          ].map((t) => (
            <li key={t} class="flex items-center gap-2">
              <span class="inline-block h-1.5 w-1.5 rounded-full bg-black/40" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
