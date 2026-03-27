import Image from "next/image";
import { clsx } from "clsx";
import { Button } from "@/components/ui";

const proofItems = [
  { icon: "⚡", text: "95+ Lighthouse" },
  { icon: "🚀", text: "1.9s LCP" },
  { icon: "💬", text: "Odgovor u 24h" },
  { icon: "🇧🇦", text: "Made in BiH" },
];

/** CTA styles aligned with site tokens (header / legacy CTAs) for readable contrast in light & dark */
const ctaPrimaryClass =
  "!bg-[var(--cta-primary-bg)] hover:!bg-[var(--cta-primary-bg-hover)] active:!bg-[var(--cta-primary-bg-active)] !text-white border-0 shadow-[var(--cta-primary-shadow)] hover:shadow-[var(--cta-primary-shadow-hover)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-base)] min-h-[44px]";

const ctaOutlineClass =
  "!border-2 !border-[var(--cta-secondary-border)] !text-[var(--cta-secondary-text)] !bg-transparent hover:!bg-[var(--cta-secondary-bg-hover)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-base)] min-h-[44px]";

export function HeroSection() {
  return (
    <>
      <section
        className="section-spacing section-bg-base section-separator scroll-mt-24"
        id="hero"
        aria-labelledby="hero-heading"
      >
        <div className="container-width">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 md:items-center">
            <div className="flex flex-col gap-6">
              <h1
                id="hero-heading"
                className="max-w-[540px] text-4xl font-bold leading-tight tracking-tight text-white-text md:text-5xl"
              >
                Web stranice koje vaš biznis čine ozbiljnim
                <span className="text-accent"> — i dovode nove klijente</span>
              </h1>
              <p className="max-w-[480px] text-lg leading-relaxed text-text-secondary">
                Pomažem lokalnim firmama — advokatima, klinikama, konzultantima
                — da izgrade profesionalno online prisustvo kroz jednostavne,
                moderne i brze web stranice.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  href="/kontakt"
                  variant="primary"
                  size="lg"
                  className={clsx(ctaPrimaryClass)}
                >
                  Zatraži besplatnu procjenu
                </Button>
                <Button
                  href="#portfolio"
                  variant="outline"
                  size="lg"
                  className={clsx(ctaOutlineClass)}
                >
                  Pogledaj primjere
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-xl border border-border-dark bg-surface shadow-card dark:shadow-hover">
                <Image
                  src="/portfolio/advokat-hero.png"
                  alt="Screenshot projekta Advokat Velika Kladuša"
                  width={600}
                  height={375}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-border-dark bg-bg-alt-a py-4 transition-colors">
        <div className="container-width">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-10">
            {proofItems.map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-2 text-sm font-semibold text-text-secondary"
              >
                <span className="text-base" aria-hidden>
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
