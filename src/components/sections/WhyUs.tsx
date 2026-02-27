"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { WHY_US } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUs() {
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
      id="zasto-mi"
      className="bg-surface-dark section-pad relative scroll-mt-24 border-t border-border-dark"
      aria-labelledby="why-heading"
    >
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          id="why-heading"
          label="Zašto Webora"
          variant="dark"
          title={WHY_US.title}
        />
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 gap-4 md:overflow-visible md:mx-0 md:px-0 md:grid md:grid-cols-2 md:gap-6"
        >
          {WHY_US.items.map((r, i) => (
            <motion.div
              key={r.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="flex-shrink-0 snap-center w-[85vw] min-w-[280px] max-w-[340px] md:w-auto md:min-w-0 md:max-w-none bg-bg-dark/50 border border-border-dark rounded-card p-6 transition-all duration-300 hover:shadow-soft-lg hover:scale-[1.02] hover:border-accent/30 group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <div className="text-2xl mb-3">{r.icon}</div>
              <h3 className="text-lg font-semibold text-white-text mb-2">
                {r.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4 md:hidden" role="tablist" aria-label="Slajdovi zašto Webora">
          {WHY_US.items.map((_, i) => (
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
