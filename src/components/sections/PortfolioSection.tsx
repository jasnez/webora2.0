import Image from "next/image";
import { clsx } from "clsx";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <Section bg="white" id="portfolio" className="scroll-mt-24 section-separator dark:bg-bg-base">
      <Container>
        <div className="mb-12 text-center">
          <p className="section-label mb-3">Reference</p>
          <h2 className="heading-2 text-neutral-900 dark:text-white-text">Projekti koje sam realizovao</h2>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className={clsx(
                "group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-card transition-all duration-200 dark:border-border-dark dark:bg-surface",
                project.status === "live" && "hover:-translate-y-1 hover:shadow-hover",
                project.status === "wip" && "opacity-60 pointer-events-none",
              )}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="w-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded bg-white/80 px-2 py-1 text-xs font-semibold text-neutral-700 backdrop-blur-sm">
                  {project.industry}
                </span>
                {project.status === "wip" && (
                  <span className="absolute right-3 top-3 rounded bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800">
                    Uskoro
                  </span>
                )}
              </div>

              <div className="p-5">
                <h3 className="mb-1 text-lg font-bold text-neutral-900 dark:text-white-text">{project.title}</h3>
                <p className="mb-3 text-xs text-neutral-400">{project.client}</p>

                <div className="mb-4 space-y-1">
                  <p className="flex gap-1 text-sm text-neutral-500 dark:text-text-secondary">
                    <span className="shrink-0 font-medium text-neutral-400">→</span>
                    {project.problem}
                  </p>
                  <p className="flex gap-1 text-sm text-neutral-500 dark:text-text-secondary">
                    <span className="shrink-0 font-medium text-brand-500">→</span>
                    {project.solution}
                  </p>
                </div>

                {project.metrics && (
                  <div className="mb-4 flex gap-4">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <p className="text-base font-bold text-neutral-900 dark:text-white-text">{m.value}</p>
                        <p className="text-xs text-neutral-400">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-600 dark:bg-bg-alt-a dark:text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.status === "live" && project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand-500 hover:underline"
                  >
                    Pogledaj stranicu →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <p className="body-lg mb-4">Imate projekat na umu? Razgovarajmo.</p>
          <Button href="/kontakt" variant="primary" size="lg">
            Razgovarajmo
          </Button>
        </div>
      </Container>
    </Section>
  );
}
