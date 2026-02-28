import { SITE } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description: "Politika privatnosti Webora web stranice.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg-dark text-white-text">
      <div className="mx-auto max-w-3xl px-6 py-24 section-pad">
        <h1 className="font-display text-3xl font-bold tracking-tight">
          Politika privatnosti
        </h1>
        <p className="mt-4 text-text-secondary">
          Posljednje ažuriranje: {new Date().toLocaleDateString("bs-BA")}
        </p>
        <div className="prose prose-invert mt-8 space-y-6 text-text-secondary">
          <p>
            {SITE.name} („mi”) poštuje vašu privatnost. Ova stranica opisuje
            kako prikupljamo, koristimo i štitimo vaše podatke u vezi sa
            korištenjem naše web stranice i usluga.
          </p>
          <h2 className="text-xl font-semibold text-white-text">
            Prikupljani podaci
          </h2>
          <p>
            Možemo prikupljati podatke koje nam dobrovoljno dostavite putem
            kontakt forme (ime, email, poruka) te tehničke podatke (IP adresa,
            tip preglednika) u svrhu sigurnosti i analize.
          </p>
          <h2 className="text-xl font-semibold text-white-text">
            Korištenje podataka
          </h2>
          <p>
            Podatke koristimo isključivo za odgovor na upite, pružanje usluga i
            poboljšanje našeg sajta. Ne prodajemo vaše podatke trećim stranama.
          </p>
          <h2 className="text-xl font-semibold text-white-text">Kontakt</h2>
          <p>
            Za pitanja o privatnosti pišite na{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="link-text"
            >
              {SITE.email}
            </a>
            .
          </p>
        </div>
        <p className="mt-12">
          <Link href="/" className="link-text">
            ← Nazad na početnu
          </Link>
        </p>
      </div>
    </main>
  );
}
