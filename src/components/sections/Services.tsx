"use client";

import Link from "next/link";
import { useRef, useState, useCallback, useEffect } from "react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/lib/constants";

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const container = containerRef.current;
    if (!container || cardRefs.current.length === 0) return;
    const scrollLeft = container.scrollLeft;
    const center = scrollLeft + container.offsetWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(center - cardCenter);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActiveIndex(best);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => container.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  const scrollTo = (index: number) => {
    const el = cardRefs.current[index];
    el?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <section
      id="usluge"
      className="section-pad bg-bg-dark scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          id="services-heading"
          label="Usluge"
          title={SERVICES.title}
          subtitle={SERVICES.subtitle}
          variant="dark"
        />
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 gap-4 md:overflow-visible md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6"
        >
          {SERVICES.packages.map((pkg, i) => (
            <article
              key={pkg.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group relative flex-shrink-0 snap-center w-[85vw] min-w-[280px] max-w-[340px] md:w-auto md:min-w-0 md:max-w-none bg-surface-dark border border-border-dark rounded-card p-6 transition-all duration-300 hover:shadow-soft-lg hover:scale-[1.02] hover:border-accent/30"
            >
              <div className="text-2xl mb-4">{pkg.icon}</div>
              <h3 className="text-lg font-semibold text-white-text mb-4">
                {pkg.title}
              </h3>
              <ul className="space-y-2 mb-6">
                {pkg.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm text-text-secondary flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link
                href="/usluge"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors group/link"
              >
                {CTA.learnMore}
                <span className="group-hover/link:translate-x-0.5 transition-transform" aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4 md:hidden" role="tablist" aria-label="Slajdovi usluga">
          {SERVICES.packages.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={activeIndex === i}
              aria-label={`Slajd ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-200 ${
                activeIndex === i ? "w-6 bg-accent" : "w-2 bg-border-dark hover:bg-text-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
