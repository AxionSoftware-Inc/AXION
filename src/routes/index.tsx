import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "~/components/Hero";
import { Navbar } from "~/components/Navbar";
import { ServicesGrid } from "~/components/ServicesGrid";
import { VideoModal } from "~/components/VideoModal";
import { WorkGrid } from "~/components/WorkGrid";
import { ProcessSteps } from "~/components/ProcessSteps";
import { CtaBanner } from "~/components/CTABanner";
import { Faq } from "~/components/Faq";
import { Footer } from "~/components/Footer";

export default component$(() => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesGrid />
      <VideoModal open={false} youtubeId="" title="" onClose$={() => {}} />
      <WorkGrid />
      <ProcessSteps />
      <CtaBanner/>
      <Faq/>
      <Footer/>
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