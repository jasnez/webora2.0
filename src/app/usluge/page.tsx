import { Services } from "@/components/sections/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Poslovna web stranica, SEO + Performance paket i custom web rješenja. Dizajn, Next.js razvoj i tehnički SEO.",
};

export default function UslugePage() {
  return (
    <>
      <Services />
    </>
  );
}
