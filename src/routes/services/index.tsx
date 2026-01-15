import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { ServicesHero } from "~/components/services/ServicesHero";
import { ServicesList } from "~/components/services/ServicesList";
import { ServicesCta } from "~/components/services/ServicesCta";

export default component$(() => {
  return (
    <div>
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <ServicesCta />
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