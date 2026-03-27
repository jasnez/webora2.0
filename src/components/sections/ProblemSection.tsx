import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

const problems = [
  "Vaši potencijalni klijenti vas prvo traže online",
  "Ako stranica ne izgleda profesionalno — odlaze konkurenciji",
  "Loš prvi utisak znači izgubljeno povjerenje",
];

export function ProblemSection() {
  return (
    <Section
      bg="muted"
      id="problem"
      className="section-separator scroll-mt-24 dark:bg-bg-alt-a"
    >
      <Container>
        <div className="mx-auto max-w-[700px] text-left md:text-center">
          <p className="section-label mb-5 md:mb-6">Zašto je to važno</p>

          <h2 className="mb-8 text-balance text-3xl font-bold leading-[1.2] tracking-tight text-neutral-900 dark:text-white-text sm:text-[1.75rem] md:text-[1.9375rem] md:leading-[1.15] lg:text-[2rem]">
            <span className="lg:whitespace-nowrap">
              Ako vaša web stranica izgleda zastarjelo
            </span>
            <span className="font-semibold text-red-600 dark:text-red-400">
              {" "}
              — gubite klijente
            </span>
          </h2>

          <ul
            className="mb-10 flex flex-col gap-4 rounded-2xl border border-neutral-200/90 bg-white/90 p-5 text-left shadow-sm dark:border-border-dark dark:bg-surface/40 dark:shadow-none sm:p-6 md:gap-[1.125rem]"
            role="list"
          >
            {problems.map((p, i) => (
              <li key={i} className="flex gap-3.5 sm:items-center sm:gap-4">
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-sm font-bold leading-none text-red-600 dark:bg-red-500/15 dark:text-red-400 sm:mt-0"
                  aria-hidden
                >
                  ✗
                </span>
                <span className="min-w-0 text-[1.0625rem] leading-relaxed text-neutral-700 dark:text-text-secondary">
                  {p}
                </span>
              </li>
            ))}
          </ul>

          <p className="mx-auto max-w-[36rem] border-t border-neutral-200 pt-8 text-lg font-semibold leading-snug text-neutral-900 dark:border-border-dark dark:text-white-text md:text-xl">
            <span className="block md:inline md:whitespace-nowrap">
              Vaša web stranica nije samo informacija
            </span>
            <span> — ona je vaša reputacija</span>
          </p>
        </div>
      </Container>
    </Section>
  );
}
