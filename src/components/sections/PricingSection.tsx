import { clsx } from "clsx";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

interface Package {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

const packages: Package[] = [
  {
    id: "starter",
    title: "Starter",
    price: "od 500 KM",
    description: "Za biznise koji trebaju jednostavno online prisustvo",
    features: [
      "1–3 stranice",
      "Mobilna verzija",
      "Kontakt forma",
      "Osnovna SEO optimizacija",
    ],
    cta: "Zatraži ponudu",
    highlighted: false,
  },
  {
    id: "pro",
    title: "Profesionalni",
    price: "od 1.200 KM",
    description: "Za ozbiljan nastup koji donosi klijente",
    features: [
      "5–7 stranica",
      "Custom dizajn",
      "SEO optimizacija",
      "Struktura za konverziju",
      "CMS po želji",
    ],
    cta: "Zatraži ponudu",
    highlighted: true,
    badge: "Najpopularniji",
  },
  {
    id: "premium",
    title: "Premium",
    price: "od 2.000 KM",
    description: "Stranica koja aktivno dovodi klijente",
    features: [
      "Sve iz Profesionalnog",
      "Landing stranice",
      "Optimizacija za upite",
      "Strategija sadržaja",
    ],
    cta: "Zatraži ponudu",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <Section
      bg="muted"
      id="paketi"
      className="section-separator scroll-mt-24 dark:bg-bg-alt-a"
    >
      <Container>
        <div className="mb-12 text-center">
          <p className="section-label mb-3">Cijene</p>
          <h2 className="heading-2 text-neutral-900 dark:text-white-text">
            Jednostavni paketi — bez komplikacija
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 items-start md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={clsx(
                "relative flex flex-col rounded-xl border bg-white p-8 shadow-card dark:bg-surface",
                pkg.highlighted &&
                  "z-10 scale-105 border-2 border-brand-500 shadow-hover md:scale-105",
                !pkg.highlighted && "border-neutral-200 dark:border-border-dark",
              )}
            >
              {pkg.badge ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="whitespace-nowrap rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-500/20 dark:text-amber-200">
                    {pkg.badge}
                  </span>
                </div>
              ) : null}

              <div className="mb-6">
                <h3 className="mb-1 text-xl font-bold text-neutral-900 dark:text-white-text">
                  {pkg.title}
                </h3>
                <p className="mb-2 text-3xl font-bold text-neutral-900 dark:text-white-text">
                  {pkg.price}
                </p>
                <p className="text-sm text-neutral-500 dark:text-text-secondary">
                  {pkg.description}
                </p>
              </div>

              <ul className="mb-8 flex flex-1 flex-col gap-2" role="list">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className="mt-0.5 flex-shrink-0 font-bold text-brand-500"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="text-sm text-neutral-700 dark:text-text-secondary">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/kontakt"
                variant={pkg.highlighted ? "secondary" : "outline"}
                size="md"
                className="mt-8 w-full justify-center dark:border-border-dark dark:text-white-text dark:hover:bg-bg-alt-b"
              >
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-neutral-400 dark:text-text-muted">
          Sve cijene su okvirne. Finalna cijena zavisi od zahtjeva projekta.
          Procjena je besplatna.
        </p>
      </Container>
    </Section>
  );
}
