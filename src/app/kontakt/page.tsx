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
      <Contact />
    </>
  );
}
