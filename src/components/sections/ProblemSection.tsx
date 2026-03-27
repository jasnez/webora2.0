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
          <p className="section-label mb-4">Zašto je to važno</p>

          <h2 className="heading-2 mb-8 text-neutral-900 dark:text-white-text">
            Ako vaša web stranica izgleda zastarjelo
            <br className="hidden md:block" />
            <span className="text-red-600 dark:text-red-400">
              {" "}
              — gubite klijente
            </span>
          </h2>

          <ul className="mb-8 flex flex-col gap-4 text-left">
            {problems.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 font-bold text-red-500 dark:text-red-400">
                  ✗
                </span>
                <span className="text-lg leading-relaxed text-neutral-700 dark:text-text-secondary">
                  {p}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 border-t border-neutral-200 pt-6 text-lg font-semibold text-neutral-900 dark:border-border-dark dark:text-white-text">
            Vaša web stranica nije samo informacija
            <br />— ona je vaša reputacija
          </p>
        </div>
      </Container>
    </Section>
  );
}
