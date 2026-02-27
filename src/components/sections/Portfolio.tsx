"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { PORTFOLIO } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const dotPatternStyle = {
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export function Portfolio() {
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

  return (
    <section
      id="portfolio"
      className="relative bg-bg-dark section-pad overflow-hidden scroll-mt-24"
      aria-labelledby="portfolio-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={dotPatternStyle}
        aria-hidden
      />

      <div className="max-w-container mx-auto px-6 relative z-10">
        <SectionHeading
          id="portfolio-heading"
          label="Portfolio"
          variant="dark"
          title={PORTFOLIO.title}
          subtitle={PORTFOLIO.subtitle}
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {PORTFOLIO.items.map((p) => (
              <div
                key={p.id}
                className="flex-[0_0_100%] md:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.333%-14px)] min-w-0"
              >
                <div className="bg-surface-dark border border-border-dark rounded-card overflow-hidden hover:border-accent/30 transition-all duration-300 group">
                  {/* Screenshot – hover zoom */}
                  <div className="aspect-[16/10] bg-bg-dark flex flex-col items-center justify-center p-4 overflow-hidden">
                    <div className="w-[85%] rounded-md overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-105">
                      <div className="bg-surface-dark px-2 py-1.5 flex gap-1 items-center border-b border-border-dark">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                        <span className="ml-2 bg-white/5 rounded px-1.5 py-0.5 text-[9px] text-text-muted font-mono truncate max-w-[120px]">
                          {p.url === "#" ? "example.com" : p.url.startsWith("http") ? new URL(p.url).hostname : "example.com"}
                        </span>
                      </div>
                      <div className="h-20 bg-bg-dark p-2.5 flex flex-col gap-1">
                        <div className="h-1 rounded-sm bg-white/10 w-1/2" />
                        <div className="h-1 rounded-sm bg-white/5 w-[70%]" />
                        <div className="h-1 rounded-sm bg-white/5 w-[35%]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-semibold text-white-text mb-1">
                      {p.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4">{p.description}</p>
                    {/* 3 metrike */}
                    {p.metrics && p.metrics.length >= 3 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {p.metrics.map((m) => (
                          <span
                            key={m}
                            className="px-2.5 py-1 bg-success/10 border border-success/30 rounded-lg text-xs font-medium text-success"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1.5">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-text-secondary font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent text-sm font-medium hover:text-accent-hover transition-colors"
                      >
                        Pogledaj →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2.5 mt-7">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 transition-all duration-200 cursor-pointer ${
                i === selectedIndex
                  ? "w-6 bg-accent rounded-[4px]"
                  : "w-2 rounded-full bg-white/15 hover:bg-white/25"
              }`}
              aria-label={`Pogledaj slajd ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
