import { SITE, CTA } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Izrada web stranica BiH | Web development BiH – Webora",
  description:
    "Profesionalna izrada web stranica u Bosni i Hercegovini. Web development BiH: brze, sigurne i SEO-optimizovane stranice za mala i srednja preduzeća. Besplatna procjena.",
  keywords: [
    "izrada web stranica BiH",
    "web development BiH",
    "izrada web stranica Bosna i Hercegovina",
    "web studio BiH",
    "izrada sajta BiH",
  ],
  alternates: {
    canonical: "/izrada-web-stranica-bih",
  },
  openGraph: {
    title: "Izrada web stranica BiH | Web development BiH – Webora",
    description:
      "Brze, sigurne i SEO-optimizovane web stranice za BiH. Next.js tehnologija. Besplatna procjena.",
    url: `${SITE.url}/izrada-web-stranica-bih`,
  },
};

export default function IzradaWebStranicaBihPage() {
  return (
    <main className="min-h-screen bg-bg-dark text-white-text">
      <div className="mx-auto max-w-3xl px-6 py-16 section-pad">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Izrada web stranica BiH – profesionalni web development za mala i srednja preduzeća
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Tražite pouzdanog partnera za <strong>izradu web stranica u Bosni i Hercegovini</strong>?
          Webora je web development studio fokusiran na brzinu, sigurnost i mjerljive rezultate.
        </p>

        <section className="mt-10 space-y-6 text-text-secondary">
          <h2 className="text-xl font-semibold text-white-text">
            Zašto izabrati Webora za web development BiH?
          </h2>
          <p>
            Nudimo <strong>izradu web stranica</strong> koristeći Next.js tehnologiju — bez
            nepotrebnih plugina, sa izvrsnim performansama i tehničkim SEO-om. Naši klijenti su
            mala i srednja preduzeća iz BiH i regije koja žele moderan, brz i siguran sajt koji
            donosi upite i konverzije.
          </p>
          <ul className="list-inside space-y-2">
            <li>Brze stranice (Lighthouse 90+) — bolje za SEO i korisnike</li>
            <li>Tehnički SEO optimizacija — bolja vidljivost u Googleu</li>
            <li>Sigurnost na prvom mjestu — bez ranjivosti tipičnih za WordPress</li>
            <li>Direktna komunikacija — bez posrednika, podrška na našem jeziku</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white-text">
            Šta uključujemo u izradu web stranica?
          </h2>
          <p className="mt-3 text-text-secondary">
            Poslovna web stranica (5–10 stranica), SEO osnova, kontakt forma i po želji CMS za
            ažuriranje sadržaja. Za složenije projekte nudimo i <strong>SEO + Performance paket</strong> te
            custom web aplikacije. Pogledajte detalje u sekciji{" "}
            <Link href="/usluge" className="link-text">
              Usluge
            </Link>
            .
          </p>
        </section>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button href="/kontakt" variant="primary" size="md">
            {CTA.primary}
          </Button>
          <Button href="/portfolio" variant="secondary" size="md">
            {CTA.secondary}
          </Button>
        </div>

        <p className="mt-8 text-sm text-text-muted">
          <Link href="/" className="link-text">
            ← Nazad na početnu
          </Link>
          {" · "}
          <Link href="/usluge" className="link-text">
            Usluge
          </Link>
          {" · "}
          <Link href="/kontakt" className="link-text">
            Kontakt
          </Link>
        </p>
      </div>
    </main>
  );
}
