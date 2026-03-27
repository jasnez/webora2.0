import { XCircle } from "lucide-react";
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
            className="mb-10 w-full overflow-hidden rounded-2xl border border-neutral-200/95 bg-white text-left shadow-[0_2px_12px_rgba(15,23,42,0.06)] dark:border-border-dark dark:bg-surface dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            role="list"
          >
            {problems.map((p, i) => (
              <li
                key={i}
                className="flex gap-4 border-b border-neutral-100 px-5 py-4 last:border-b-0 dark:border-border-dark/70 sm:gap-5 sm:px-6 sm:py-5"
              >
                <XCircle
                  className="mt-0.5 h-6 w-6 shrink-0 text-red-600 dark:text-red-400"
                  strokeWidth={2}
                  aria-hidden
                />
                <p className="min-w-0 flex-1 text-base font-medium leading-relaxed text-neutral-800 dark:text-white-text">
                  {p}
                </p>
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
