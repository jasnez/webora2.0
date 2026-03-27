import { Check } from "lucide-react";
import { clsx } from "clsx";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

/** Align with Hero / site CTAs for consistent premium feel */
const ctaPrimaryClass =
  "!bg-[var(--cta-primary-bg)] hover:!bg-[var(--cta-primary-bg-hover)] active:!bg-[var(--cta-primary-bg-active)] !text-white border-0 shadow-[var(--cta-primary-shadow)] hover:shadow-[var(--cta-primary-shadow-hover)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-base)] min-h-[44px]";

const ctaOutlineClass =
  "!border-2 !border-[var(--cta-secondary-border)] !text-[var(--cta-secondary-text)] !bg-transparent hover:!bg-[var(--cta-secondary-bg-hover)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-base)] min-h-[44px]";

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
      aria-labelledby="pricing-heading"
      className="relative overflow-hidden section-separator scroll-mt-24 dark:bg-bg-alt-a"
    >
      {/* Ambient depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[min(480px,50vh)] w-[min(100%,760px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(85,88,227,0.08),transparent_62%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(85,88,227,0.16),transparent_65%)]" />
      </div>

      <Container className="relative">
        <div className="mb-12 text-center md:mb-14">
          <p className="section-label mb-3 md:mb-4">Cijene</p>
          <h2
            id="pricing-heading"
            className="heading-2 mx-auto max-w-[34rem] text-balance text-neutral-900 dark:text-white-text"
          >
            Jednostavni paketi — bez komplikacija
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={clsx(
                "relative flex min-h-full flex-col",
                pkg.highlighted && "md:-mt-1 md:mb-1",
              )}
            >
              {/* Featured: gradient ring + glow */}
              {pkg.highlighted ? (
                <>
                  <div
                    className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-accent/50 via-accent/20 to-transparent opacity-90 dark:from-accent/40 dark:via-accent/15"
                    aria-hidden
                  />
                  <div
                    className="absolute -inset-3 -z-10 rounded-[1.35rem] bg-[radial-gradient(ellipse_at_50%_0%,rgba(85,88,227,0.18),transparent_58%)] blur-xl dark:opacity-100"
                    aria-hidden
                  />
                </>
              ) : null}

              <div
                className={clsx(
                  "group card-interactive relative flex min-h-full flex-col overflow-hidden rounded-2xl border p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover active:scale-[0.99] md:p-9",
                  pkg.highlighted
                    ? "z-10 scale-105 border-2 border-brand-500 bg-gradient-to-b from-white to-neutral-50/90 shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18),0_0_0_1px_rgba(37,99,235,0.12)] ring-1 ring-accent/25 hover:border-accent/40 dark:scale-105 dark:from-surface dark:to-bg-alt-b dark:shadow-[0_28px_56px_-20px_rgba(0,0,0,0.55),0_0_0_1px_rgba(37,99,235,0.25)] md:scale-105"
                    : "border-neutral-200/90 bg-white/95 backdrop-blur-sm hover:border-accent/30 dark:border-white/[0.07] dark:bg-surface/95 dark:shadow-[0_12px_40px_-18px_rgba(0,0,0,0.5)] dark:hover:border-accent/35",
                )}
              >
                {pkg.badge ? (
                  <div className="absolute left-0 right-0 top-0 flex justify-center pt-0">
                    <span className="relative -translate-y-1/2 whitespace-nowrap rounded-full border border-amber-200/80 bg-gradient-to-b from-amber-50 to-amber-100/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-900 shadow-sm dark:border-amber-400/25 dark:from-amber-500/25 dark:to-amber-600/15 dark:text-amber-100">
                      {pkg.badge}
                    </span>
                  </div>
                ) : null}

                <div className={clsx("mb-8", pkg.badge && "pt-4")}>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-neutral-800 dark:text-white-text/95">
                    {pkg.title}
                  </h3>
                  <p className="mb-3 text-4xl font-bold tabular-nums tracking-tight text-neutral-900 dark:text-white-text">
                    {pkg.price}
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-500 dark:text-text-secondary">
                    {pkg.description}
                  </p>
                </div>

                <ul className="mb-8 flex flex-1 flex-col gap-2.5" role="list">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-3 text-left">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent dark:bg-accent/20 dark:text-accent">
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                      </span>
                      <span className="text-sm leading-snug text-neutral-700 dark:text-text-secondary">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
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
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-neutral-400 dark:text-text-muted">
          Sve cijene su okvirne. Finalna cijena zavisi od zahtjeva projekta.
          Procjena je besplatna.
        </p>
      </Container>
    </Section>
  );
}
