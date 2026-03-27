import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Poslovna web stranica, SEO i performanse te custom web rješenja — za koga, šta uključuje, trajanje i cijene. Bez skrivenih troškova.",
};

const services = [
  {
    id: "poslovna" as const,
    number: "01",
    title: "Poslovna web stranica",
    forWho:
      "Advokati, klinike, konsultanti, restorani, serviseri",
    features: [
      "Dizajn i razvoj prilagođen brendu",
      "Mobilna i tablet verzija",
      "Kontakt forma i Google Maps integracija",
      "CMS za samostalno ažuriranje sadržaja",
      "Osnovna SEO optimizacija",
      "SSL certifikat i hosting setup",
    ],
    duration: "2–3 sedmice",
    price: "od 600 KM",
    cta: "Zatraži ponudu",
    ctaHref: "/kontakt",
  },
  {
    id: "seo" as const,
    number: "02",
    title: "SEO i performanse",
    forWho:
      "Biznisi sa postojećom stranicom koji ne dobijaju upite iz Google-a",
    features: [
      "Kompletan tehnički SEO audit",
      "Ubrzanje stranice (Core Web Vitals)",
      "Schema markup i strukturirani podaci",
      "Google Analytics 4 setup",
      "Optimizacija meta tagova i sadržaja",
      "Izvještaj sa konkretnim preporukama",
    ],
    duration: "1–2 sedmice",
    price: "od 300 KM",
    cta: "Zatraži SEO audit",
    ctaHref: "/kontakt",
  },
  {
    id: "custom" as const,
    number: "03",
    title: "Custom web rješenja",
    forWho:
      "Firme sa specifičnim poslovnim procesima i zahtjevima",
    features: [
      "Web aplikacije i interni sistemi",
      "Automatizacije poslovnih procesa",
      "Integracije sa CRM / ERP sistemima",
      "Custom dashboard i admin paneli",
      "API razvoj i integracije",
      "Dugoročna podrška i održavanje",
    ],
    duration: "Po dogovoru",
    price: "Po dogovoru",
    cta: "Razgovarajmo",
    ctaHref: "/kontakt",
  },
];

const faqItems = [
  {
    q: "Koliko traje izrada poslovne web stranice?",
    a: "Tipično 2–3 sedmice, ovisno o opsegu, dostavi sadržaja i broju iteracija na dizajn. Prioritet su jasni rokovi i redovna komunikacija.",
  },
  {
    q: "Šta je uračunato u SEO i performanse paket?",
    a: "Tehnički audit, poboljšanja brzine (Core Web Vitals), schema i meta optimizacija, te GA4 postavljanje. Dobijate izvještaj s jasnim prioritetima.",
  },
  {
    q: "Kada je smisleno custom web rješenje umjesto klasične stranice?",
    a: "Kada imate specifične procese, interne alate, integracije ili automatizacije koje gotovi CMS ili statička stranica ne pokrivaju dovoljno dobro.",
  },
  {
    q: "Mogu li kombinovati više usluga u jednom projektu?",
    a: "Da. Često se poslovna stranica spaja s SEO radom ili kasnije proširuje custom modulima. Dogovaramo opseg i faze prema prioritetu.",
  },
  {
    q: "Kako funkcionišu plaćanje i garancija rokova?",
    a: "Nakon besplatne procjene šaljemo ponudu i plan. Uobičajeno je avans i milestone plaćanja; rokovi su definisani u ponudi i zavise od vaše dostave materijala.",
  },
];

export default function UslugePage() {
  return (
    <>
      <Section
        bg="white"
        className="border-b border-neutral-200 dark:border-border-dark dark:bg-bg-base"
      >
        <Container>
          <div className="max-w-[640px]">
            <p className="section-label mb-3">Usluge</p>
            <h1 className="heading-1 mb-4 text-neutral-900 dark:text-white-text">
              Usluge izrade web stranica
            </h1>
            <p className="body-lg dark:text-text-secondary">
              Jasni paketi i jasne cijene — bez skrivenih troškova.
            </p>
          </div>
        </Container>
      </Section>

      {services.map((svc, i) => (
        <Section
          key={svc.id}
          id={svc.id}
          bg={i % 2 === 0 ? "muted" : "white"}
          className={`scroll-mt-24 border-b border-neutral-200 dark:border-border-dark ${
            i % 2 === 0
              ? "dark:bg-bg-alt-a"
              : "dark:bg-bg-base"
          }`}
        >
          <Container>
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
              <div>
                <span className="mb-2 block text-5xl font-bold text-neutral-100 dark:text-white/10">
                  {svc.number}
                </span>
                <h2 className="heading-3 mb-3 text-neutral-900 dark:text-white-text">
                  {svc.title}
                </h2>
                <p className="mb-2 text-sm font-semibold text-brand-500">
                  Za koga:
                </p>
                <p className="body-base mb-6 text-neutral-600 dark:text-text-secondary">
                  {svc.forWho}
                </p>
                <div className="flex flex-col gap-1 text-sm text-neutral-500 dark:text-text-muted">
                  <span>
                    Trajanje: <strong className="text-neutral-800 dark:text-white-text">{svc.duration}</strong>
                  </span>
                  <span>
                    Cijena: <strong className="text-neutral-800 dark:text-white-text">{svc.price}</strong>
                  </span>
                </div>
                <div className="mt-6">
                  <Button href={svc.ctaHref} variant="primary" size="md">
                    {svc.cta}
                  </Button>
                </div>
              </div>

              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-400 dark:text-text-muted">
                  Što je uključeno
                </p>
                <ul className="space-y-3">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-0.5 flex-shrink-0 font-bold text-brand-500">
                        ✓
                      </span>
                      <span className="text-sm text-neutral-700 dark:text-text-secondary">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Section
        bg="muted"
        id="faq-usluge"
        className="border-b border-neutral-200 dark:border-border-dark dark:bg-bg-alt-a"
      >
        <Container>
          <div className="mb-10 max-w-[640px]">
            <p className="section-label mb-3">FAQ</p>
            <h2 className="heading-3 text-neutral-900 dark:text-white-text">
              Česta pitanja o uslugama
            </h2>
          </div>
          <div className="mx-auto max-w-[720px] space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-neutral-200 bg-white p-5 dark:border-border-dark dark:bg-surface"
              >
                <summary className="cursor-pointer list-none font-medium text-neutral-900 marker:content-none dark:text-white-text [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-3">
                    {item.q}
                    <span className="mt-0.5 shrink-0 text-brand-500 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 border-t border-neutral-100 pt-4 text-sm leading-relaxed text-neutral-600 dark:border-border-dark dark:text-text-secondary">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="white" className="dark:bg-bg-base">
        <Container>
          <div className="text-center">
            <p className="body-lg mb-4 text-neutral-700 dark:text-text-secondary">
              Niste sigurni koji paket?
            </p>
            <Button href="/kontakt" variant="primary" size="lg">
              Kontaktirajte nas
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
