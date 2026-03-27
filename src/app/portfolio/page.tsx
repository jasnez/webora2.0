import { Portfolio } from "@/components/sections/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Naši radovi: web stranice i aplikacije izgrađene sa React i Next.js. Studije slučaja i metrike uspjeha.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="section-spacing section-bg-base section-separator">
        <div className="container-width">
          <p className="section-label">Portfolio</p>
          <h1 className="heading-2 mt-3 text-neutral-900">
            Projekti koji grade povjerenje i donose upite
          </h1>
          <p className="body-base mt-4 prose-width md:mx-0">
            Pregled naših live projekata i stvarnih rezultata, uz transparentan
            prikaz projekata koji su trenutno u izradi.
          </p>
        </div>
      </section>
      <Portfolio />
    </>
  );
}
