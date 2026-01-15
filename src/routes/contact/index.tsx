import { component$ } from "@builder.io/qwik";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { ContactHero } from "~/components/contact/ContactHero";
import { ContactForm } from "~/components/contact/ContactForm";
import { ContactInfo } from "~/components/contact/ContactInfo";

export default component$(() => {
  return (
    <div>
      <Navbar />
      <ContactHero />

      <section class="bg-white">
        <div class="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <div class="grid gap-4 lg:grid-cols-12">
            <div class="lg:col-span-7">
              <ContactForm />
            </div>
            <div class="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});
