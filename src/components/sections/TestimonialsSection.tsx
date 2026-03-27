"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Ako nema testimonijala — ne renderovati sekciju
  if (testimonials.length === 0) return null;

  return (
    <Section bg="muted" id="testimonijali" className="section-separator scroll-mt-24 dark:bg-bg-alt-a">
      <Container>
        <div className="mb-12 text-center">
          <p className="section-label mb-3">Iskustva klijenata</p>
          <h2 className="heading-2 text-neutral-900 dark:text-white-text">Šta kažu klijenti</h2>
        </div>
        <div
          className="mx-auto max-w-[960px] overflow-hidden"
          ref={emblaRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonijali klijenata"
        >
          <div className="flex gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
              >
                <article className="h-full rounded-xl border border-neutral-200 bg-white p-6 shadow-card dark:border-border-dark dark:bg-surface">
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
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="min-h-touch min-w-[44px] flex items-center justify-center rounded-button border border-border-dark bg-surface text-white-text transition-all hover:border-accent/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            aria-label="Prethodni testimonijal"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2.5">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                className="min-h-touch min-w-[44px] flex items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                aria-label={`Prikaži testimonijal ${i + 1}`}
                aria-current={i === selectedIndex ? "true" : undefined}
              >
                <span
                  className={`block h-2 transition-all duration-200 ${
                    i === selectedIndex
                      ? "w-6 rounded-[4px] bg-accent"
                      : "w-2 rounded-full bg-border-dark hover:bg-text-muted"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="min-h-touch min-w-[44px] flex items-center justify-center rounded-button border border-border-dark bg-surface text-white-text transition-all hover:border-accent/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            aria-label="Sljedeći testimonijal"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </Section>
  );
}
