import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "~/components/landing/Hero";
import { Navbar } from "~/components/Navbar";
import { ServicesGrid } from "~/components/landing/ServicesGrid";
import { VideoModal } from "~/components/landing/VideoModal";
import { WorkGrid } from "~/components/landing/WorkGrid";
import { ProcessSteps } from "~/components/landing/ProcessSteps";
import { Faq } from "~/components/landing/Faq";
import { Footer } from "~/components/Footer";
import { CtaBanner } from "~/components/landing/CtaBanner";

export default component$(() => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesGrid />
      <VideoModal open={false} youtubeId="" title="" onClose$={() => { }} />
      <WorkGrid />
      <ProcessSteps />
      <CtaBanner />
      <Faq />
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