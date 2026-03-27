import { Check } from "lucide-react";
import { clsx } from "clsx";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const ctaPrimaryClass =
  "!bg-[var(--cta-primary-bg)] hover:!bg-[var(--cta-primary-bg-hover)] active:!bg-[var(--cta-primary-bg-active)] !text-white border-0 shadow-[var(--cta-primary-shadow)] hover:shadow-[var(--cta-primary-shadow-hover)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-base)] min-h-[44px]";

const ctaOutlineClass =
  "!border-2 !border-[var(--cta-secondary-border)] !text-[var(--cta-secondary-text)] !bg-transparent hover:!bg-[var(--cta-secondary-bg-hover)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-base)] min-h-[44px]";

interface Package {
  id: string;
  title: string;
  tagline: string;
  price: string;
  outcomes: string[];
  cta: string;
  href: string;
  ctaMicrocopy: string;
  highlighted: boolean;
  badge?: string;
}

const packages: Package[] = [
  {
    id: "starter",
    title: "Starter",
    tagline: "Brzo online — bez komplikacija",
    price: "od 600",
    outcomes: [
      "Profesionalan prvi utisak za posjetioce",
      "Kontakt na dohvat ruke",
      "Izgleda ozbiljno na svakom uređaju",
      "Osnovna vidljivost u pretrazi",
      "Mobile responsive dizajn",
    ],
    cta: "Počni s Starter paketom",
    href: "/kontakt?paket=starter",
    ctaMicrocopy: "Idealno za manje timove i prvi korak online.",
    highlighted: false,
  },
  {
    id: "pro",
    title: "Profesionalni",
    tagline: "Više povjerenja, više upita",
    price: "od 1.200",
    outcomes: [
      "Dizajn koji gradi povjerenje i autoritet",
      "Jasne putanje do upita i poziva",
      "SEO prilagođen vašoj publici",
      "Struktura fokusirana na konverziju",
      "Jednostavno ažuriranje sadržaja (CMS)",
    ],
    cta: "Zatraži ponudu →",
    href: "/kontakt?paket=profesionalni",
    ctaMicrocopy: "Najčešći izbor za lokalne firme koje žele rast.",
    highlighted: true,
    badge: "NAJPOPULARNIJE",
  },
  {
    id: "growth",
    title: "Growth",
    tagline: "Rast leadova i jasna strategija",
    price: "od 3.000",
    outcomes: [
      "Sve prednosti Profesionalnog paketa",
      "Landing stranice za kampanje i ponude",
      "Optimizacija formi i poruka za upite",
      "Strategija sadržaja usmjerena na prodaju",
    ],
    cta: "Razgovarajmo o Growth paketu",
    href: "/kontakt?paket=growth",
    ctaMicrocopy: "Za firme koje žele kontinuirano povećati upite.",
    highlighted: false,
  },
];

const trustItems = [
  "Bez skrivenih troškova",
  "Podrška uključena",
  "Brza isporuka",
];

export function PricingSection() {
  return (
    <Section
      bg="dark"
      id="paketi"
      aria-labelledby="pricing-heading"
      className="relative overflow-hidden section-separator scroll-mt-24 dark:bg-bg-alt-a"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[min(480px,50vh)] w-[min(100%,760px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(85,88,227,0.08),transparent_62%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(85,88,227,0.14),transparent_65%)]" />
      </div>

      <Container className="relative">
        <div className="mx-auto mb-12 max-w-[1200px] text-center md:mb-14">
          <p className="section-label mb-3 md:mb-4">Cijene</p>
          <h2
            id="pricing-heading"
            className="heading-2 mx-auto max-w-[34rem] text-center text-white-text lg:whitespace-nowrap"
          >
            Jednostavni paketi — bez komplikacija
          </h2>
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-stretch justify-items-center gap-6 pt-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={clsx(
                "relative flex w-full max-w-full flex-col justify-center md:max-w-none",
                pkg.highlighted && "md:-mt-1 md:mb-1",
              )}
            >
              {pkg.badge ? (
                <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2">
                  <span className="whitespace-nowrap rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold tracking-wider text-white shadow-lg shadow-brand-500/30">
                    {pkg.badge}
                  </span>
                </div>
              ) : null}

              <div
                className={clsx(
                  "group card-interactive relative flex min-h-full w-full flex-col justify-between rounded-2xl border p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover active:scale-[0.99]",
                  pkg.highlighted
                    ? "z-10 scale-105 border-2 border-brand-500 bg-gradient-to-b from-bg-alt-a to-bg-alt-b shadow-xl shadow-brand-500/10 md:scale-105"
                    : "border-white/10 bg-neutral-900/60",
                )}
              >
                <div>
                  <h3 className={clsx("mb-1 text-lg font-bold", "text-white-text")}>
                    {pkg.title}
                  </h3>
                  <p className="mb-4 text-sm opacity-70 text-text-secondary">
                    {pkg.tagline}
                  </p>
                  <div className="my-4">
                    <span className="text-3xl font-semibold text-white-text md:text-4xl">
                      {pkg.price}
                    </span>
                    <span className="ml-1 text-lg font-medium opacity-70 text-text-secondary">
                      KM
                    </span>
                  </div>
                  <div
                    className="mb-6 border-t border-white/10"
                    role="separator"
                  />

                  <ul className="mb-8 flex flex-1 flex-col gap-2.5 text-left" role="list">
                    {pkg.outcomes.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                          <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                        </span>
                        <span className="text-sm leading-snug text-text-secondary">
                          {line}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto space-y-3">
                  <Button
                    href={pkg.href}
                    variant={pkg.highlighted ? "primary" : "outline"}
                    size="md"
                    className={clsx(
                      "w-full justify-center",
                      pkg.highlighted ? ctaPrimaryClass : ctaOutlineClass,
                    )}
                  >
                    {pkg.cta}
                  </Button>
                  <p className="text-xs leading-relaxed text-text-muted">
                    {pkg.ctaMicrocopy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-neutral-400 dark:text-text-muted">
          Sve cijene su okvirne. Finalna cijena zavisi od zahtjeva projekta.
          Procjena je besplatna.
        </p>

        {/* Trust */}
        <ul className="mx-auto mt-12 flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-text-secondary">
          {trustItems.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
              </span>
              {t}
            </li>
          ))}
        </ul>

        {/* Unsure CTA */}
        <div className="mx-auto mt-14 max-w-[1200px] rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center shadow-md">
          <h3 className="text-xl font-semibold text-white-text">
            Niste sigurni koji paket odabrati?
          </h3>
          <Button
            href="/kontakt"
            variant="primary"
            size="lg"
            className={clsx(
              "mt-6 min-w-[200px] justify-center px-8",
              ctaPrimaryClass,
            )}
          >
            Kontaktirajte nas
          </Button>
        </div>
      </Container>
    </Section>
  );
}
