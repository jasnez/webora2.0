import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

const steps = [
  {
    num: 1,
    timeframe: "1–2 dana",
    title: "Kratki razgovor",
    desc: "Razumijemo vaš biznis i potrebe",
  },
  {
    num: 2,
    timeframe: "3–5 dana",
    title: "Struktura i dizajn",
    desc: "Pravimo jasan plan stranice",
  },
  {
    num: 3,
    timeframe: "7–10 dana",
    title: "Izrada",
    desc: "Gradim brzu i modernu web stranicu",
  },
  {
    num: 4,
    timeframe: "2–3 dana",
    title: "Objava",
    desc: "Stranica ide online i spremna je za klijente",
  },
];

export function Process() {
  return (
    <Section bg="muted" id="proces" className="scroll-mt-24 section-separator dark:bg-bg-alt-a">
      <Container>
        <div className="mb-12 text-center">
          <p className="section-label mb-3">Kako radimo</p>
          <h2 className="heading-2 mb-3 text-neutral-900 dark:text-white-text">
            Jednostavan proces, bez komplikacija
          </h2>
          <p className="body-lg text-neutral-500 dark:text-text-secondary">
            Gotovo za <strong className="text-neutral-900 dark:text-white-text">2–3 sedmice</strong>, od
            prvog razgovora do objave.
          </p>
        </div>

        <div className="hidden items-start gap-0 md:flex">
          {steps.map((step, i) => (
            <div key={step.num} className="contents">
              <div className="flex max-w-[240px] flex-1 flex-col items-center text-center">
                <span className="mb-2 text-xs font-medium text-brand-500">{step.timeframe}</span>
                <div className="mb-3 flex w-10 h-10 rounded-full bg-neutral-900 text-white items-center justify-center font-bold text-sm dark:bg-white-text dark:text-bg-base">
                  {step.num}
                </div>
                <h3 className="mb-1 font-semibold text-neutral-900 dark:text-white-text">{step.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-text-secondary">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="mt-5 h-px max-w-[60px] flex-1 self-start border-t-2 border-dashed border-neutral-300 dark:border-border-dark" />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 md:hidden">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white dark:bg-white-text dark:text-bg-base">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-2 h-10 border-l-2 border-dashed border-neutral-300 dark:border-border-dark" />
                )}
              </div>
              <div className="pt-1">
                <span className="mb-1 block text-xs font-medium text-brand-500">{step.timeframe}</span>
                <h3 className="mb-1 font-semibold text-neutral-900 dark:text-white-text">{step.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-text-secondary">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
