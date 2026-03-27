import { Contact } from "@/components/sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Započnite projekat. Javite nam se — odgovaramo u roku od 24 sata. Besplatna procjena bez obaveza.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="section-spacing section-bg-base section-separator">
        <div className="container-width">
          <p className="section-label">Kontakt</p>
          <h1 className="heading-2 mt-3 text-neutral-900">
            Recite nam cilj, mi predlažemo rješenje
          </h1>
          <p className="body-base mt-4 prose-width md:mx-0">
            Pošaljite upit sa što više konteksta o projektu. Vraćamo se sa
            jasnom preporukom i okvirnom procjenom u kratkom roku.
          </p>
        </div>
      </section>
      <Contact />
    </>
  );
}
