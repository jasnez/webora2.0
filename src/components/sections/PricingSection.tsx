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
  ctaMicrocopy: string;
  highlighted: boolean;
  badge?: string;
}

const packages: Package[] = [
  {
    id: "starter",
    title: "Starter",
    tagline: "Brzo online — bez komplikacija",
    price: "od 500 KM",
    outcomes: [
      "Profesionalan prvi utisak za posjetioce",
      "Kontakt na dohvat ruke",
      "Izgleda ozbiljno na svakom uređaju",
      "Osnovna vidljivost u pretrazi",
    ],
    cta: "Zatraži ponudu",
    ctaMicrocopy: "Idealno za manje timove i prvi korak online.",
    highlighted: false,
  },
  {
    id: "pro",
    title: "Profesionalni",
    tagline: "Više povjerenja, više upita",
    price: "od 1.200 KM",
    outcomes: [
      "Dizajn koji gradi povjerenje i autoritet",
      "Jasne putanje do upita i poziva",
      "SEO prilagođen vašoj publici",
      "Struktura fokusirana na konverziju",
      "Jednostavno ažuriranje sadržaja (CMS)",
    ],
    cta: "Zatraži ponudu",
    ctaMicrocopy: "Najčešći izbor za lokalne firme koje žele rast.",
    highlighted: true,
    badge: "Najpopularnije",
  },
  {
    id: "premium",
    title: "Premium",
    tagline: "Rast leadova i jasna strategija",
    price: "od 2.000 KM",
    outcomes: [
      "Sve prednosti Profesionalnog paketa",
      "Landing stranice za kampanje i ponude",
      "Optimizacija formi i poruka za upite",
      "Strategija sadržaja usmjerena na prodaju",
    ],
    cta: "Zatraži ponudu",
    ctaMicrocopy: "Za firme koje žele kontinuirano povećati upite.",
    highlighted: false,
  },
];

const comparisonRows: {
  label: string;
  starter: boolean;
  growth: boolean;
  premium: boolean;
}[] = [
  {
    label: "Profesionalan prvi utisak",
    starter: true,
    growth: true,
    premium: true,
  },
  {
    label: "Izvrsno na mobitelu",
    starter: true,
    growth: true,
    premium: true,
  },
  {
    label: "Custom dizajn i brend",
    starter: false,
    growth: true,
    premium: true,
  },
  {
    label: "SEO i lokalna vidljivost",
    starter: true,
    growth: true,
    premium: true,
  },
  {
    label: "Struktura za više upita",
    starter: false,
    growth: true,
    premium: true,
  },
  {
    label: "CMS / jednostavno uređivanje",
    starter: false,
    growth: true,
    premium: true,
  },
  {
    label: "Landing stranice i kampanje",
    starter: false,
    growth: false,
    premium: true,
  },
  {
    label: "Strategija sadržaja",
    starter: false,
    growth: false,
    premium: true,
  },
];

const trustItems = [
  "Bez skrivenih troškova",
  "Podrška uključena",
  "Brza isporuka",
];

function CellCheck({ included }: { included: boolean }) {
  return (
    <td className="px-3 py-3 text-center">
      {included ? (
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
        </span>
      ) : (
        <span className="text-neutral-300 dark:text-neutral-600" aria-hidden>
          —
        </span>
      )}
    </td>
  );
}

export function PricingSection() {
  return (
    <Section
      bg="muted"
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
            className="heading-2 mx-auto max-w-[34rem] text-balance text-neutral-900 dark:text-white-text"
          >
            Jednostavni paketi — bez komplikacija
          </h2>
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-stretch justify-items-center gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={clsx(
                "relative flex w-full max-w-full flex-col justify-center md:max-w-none",
                pkg.highlighted && "md:-mt-1 md:mb-1",
              )}
            >
              {pkg.highlighted ? (
                <div
                  className="absolute -inset-3 -z-10 rounded-[1.35rem] bg-[radial-gradient(ellipse_at_50%_0%,rgba(85,88,227,0.14),transparent_58%)] blur-xl"
                  aria-hidden
                />
              ) : null}

              <div
                className={clsx(
                  "group card-interactive relative flex min-h-full w-full flex-col overflow-hidden rounded-2xl border p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover active:scale-[0.99]",
                  pkg.highlighted
                    ? "z-10 scale-105 border-2 border-brand-500 bg-gradient-to-b from-white via-white to-neutral-50/90 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.12)] ring-1 ring-accent/20 dark:scale-105 dark:from-surface dark:via-surface dark:to-bg-alt-b dark:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.55)] md:scale-105"
                    : "border-neutral-200/90 bg-white/95 backdrop-blur-sm dark:border-white/[0.08] dark:bg-surface/95 dark:shadow-[0_12px_40px_-18px_rgba(0,0,0,0.45)]",
                )}
              >
                {pkg.badge ? (
                  <div className="absolute left-0 right-0 top-0 flex justify-center">
                    <span className="relative -translate-y-1/2 whitespace-nowrap rounded-full border border-amber-200/80 bg-gradient-to-b from-amber-50 to-amber-100/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-900 shadow-sm dark:border-amber-400/25 dark:from-amber-500/25 dark:to-amber-600/15 dark:text-amber-100">
                      {pkg.badge}
                    </span>
                  </div>
                ) : null}

                <div className={clsx("mb-6", pkg.badge && "pt-5")}>
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white-text">
                    {pkg.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-text-secondary">
                    {pkg.tagline}
                  </p>
                  <p className="mt-1 text-4xl font-bold tabular-nums tracking-tight text-neutral-900 dark:text-white-text md:text-5xl">
                    {pkg.price}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-neutral-400 dark:text-text-muted">
                    jednokratno
                  </p>
                </div>

                <div
                  className="mb-6 border-t border-neutral-200 dark:border-border-dark"
                  role="separator"
                />

                <ul className="mb-8 flex flex-1 flex-col gap-2.5 text-left" role="list">
                  {pkg.outcomes.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent dark:bg-accent/20">
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                      </span>
                      <span className="text-sm leading-snug text-neutral-700 dark:text-text-secondary">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-3">
                  <Button
                    href="/kontakt"
                    variant={pkg.highlighted ? "primary" : "outline"}
                    size="md"
                    className={clsx(
                      "w-full justify-center",
                      pkg.highlighted ? ctaPrimaryClass : ctaOutlineClass,
                    )}
                  >
                    {pkg.cta}
                  </Button>
                  <p className="text-xs leading-relaxed text-neutral-400 dark:text-text-muted">
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

        {/* Comparison */}
        <div className="mx-auto mt-14 max-w-[1200px] overflow-x-auto rounded-2xl border border-neutral-200/90 bg-white/90 shadow-card dark:border-border-dark dark:bg-surface/80">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50/80 dark:border-border-dark dark:bg-bg-alt-a/50">
                <th className="px-4 py-4 text-left font-semibold text-neutral-900 dark:text-white-text">
                  Funkcija
                </th>
                <th className="px-3 py-4 text-center font-semibold text-neutral-900 dark:text-white-text">
                  Starter
                </th>
                <th className="px-3 py-4 text-center font-semibold text-neutral-900 dark:text-white-text">
                  Growth
                </th>
                <th className="px-3 py-4 text-center font-semibold text-neutral-900 dark:text-white-text">
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-neutral-100 last:border-0 dark:border-border-dark/60"
                >
                  <th
                    scope="row"
                    className="px-4 py-3 text-left font-normal text-neutral-700 dark:text-text-secondary"
                  >
                    {row.label}
                  </th>
                  <CellCheck included={row.starter} />
                  <CellCheck included={row.growth} />
                  <CellCheck included={row.premium} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Trust */}
        <ul className="mx-auto mt-10 flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-neutral-600 dark:text-text-secondary">
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
        <div className="mx-auto mt-14 max-w-[1200px] rounded-2xl border border-neutral-200/90 bg-gradient-to-br from-neutral-50/90 to-white px-6 py-10 text-center shadow-md dark:border-border-dark dark:from-bg-alt-a dark:to-surface/40">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white-text">
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
