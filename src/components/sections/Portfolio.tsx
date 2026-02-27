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
      className="relative bg-[#131B2E] py-20 md:py-28 overflow-hidden scroll-mt-24 md:scroll-mt-32"
      aria-labelledby="portfolio-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={dotPatternStyle}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/15 transition-all group">
                  {/* Browser mockup */}
                  <div className="aspect-[16/10] bg-slate-900 flex flex-col">
                    <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-black/40">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <span className="text-[10px] text-slate-500 font-mono truncate max-w-[60%]">
                          {p.url === "#" ? "example.com" : new URL(p.url).hostname}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-6 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-sky-500/10">
                      <span className="font-mono text-sm text-slate-500">
                        {p.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {p.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">{p.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 bg-white/5 border border-white/[0.08] rounded-full text-[11px] text-slate-400 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors"
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

        {/* Dots navigacija */}
        <div className="flex justify-center gap-2.5 mt-8">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === selectedIndex
                  ? "w-6 bg-indigo-400"
                  : "w-2 bg-white/15 hover:bg-white/25"
              }`}
              aria-label={`Pogledaj slajd ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
