import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function TestimonialsSection() {
  // Ako nema testimonijala — ne renderovati sekciju
  if (testimonials.length === 0) return null;

  return (
    <Section bg="muted" id="testimonijali" className="section-separator scroll-mt-24 dark:bg-bg-alt-a">
      <Container>
        <div className="mb-12 text-center">
          <p className="section-label mb-3">Iskustva klijenata</p>
          <h2 className="heading-2 text-neutral-900 dark:text-white-text">Šta kažu klijenti</h2>
        </div>
        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.slice(0, 3).map((t) => (
            <article
              key={t.id}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-card dark:border-border-dark dark:bg-surface"
            >
              <p className="mb-4 text-lg italic leading-relaxed text-neutral-700 dark:text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-500 dark:bg-accent/20 dark:text-accent">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white-text">{t.name}</p>
                  <p className="text-sm text-neutral-500 dark:text-text-secondary">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
