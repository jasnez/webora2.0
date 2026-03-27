import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

const benefits = [
  {
    icon: "✓",
    title: "Profesionalan izgled",
    text: "Stranica koja ostavlja ozbiljan i moderan utisak na svakog posjetioca",
  },
  {
    icon: "⊟",
    title: "Jasna struktura",
    text: "Posjetioci brzo pronalaze informacije i bez trenja kontaktiraju vas",
  },
  {
    icon: "→",
    title: "Fokus na klijente",
    text: "Svaki dio stranice vodi ka upitu — od prve sekunde do kontakta",
  },
];

export function BenefitsSection() {
  return (
    <Section
      bg="white"
      id="benefiti"
      className="section-separator scroll-mt-24 dark:bg-bg-base"
    >
      <Container>
        <div className="mb-12 text-center">
          <p className="section-label mb-3">Šta dobijate</p>
          <h2 className="heading-2 heading-width mx-auto text-neutral-900 dark:text-white-text">
            Jednostavno rješenje za profesionalan online nastup
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="mx-auto max-w-[300px] text-center"
            >
              <div className="mx-auto mb-4 flex w-14 h-14 items-center justify-center rounded-full bg-brand-50 text-2xl text-brand-500 dark:bg-brand-500/15 dark:text-brand-400">
                {b.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white-text">
                {b.title}
              </h3>
              <p className="body-base text-neutral-500 dark:text-text-secondary">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
