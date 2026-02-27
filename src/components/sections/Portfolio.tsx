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
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-[16px] overflow-hidden hover:border-white/15 hover:-translate-y-1 transition-all duration-300 group">
                  {/* Mini-browser kao u HTML */}
                  <div className="aspect-[16/10] bg-[#0F172A] flex flex-col items-center justify-center p-4">
                    <div className="w-[85%] rounded-md overflow-hidden shadow-lg">
                      <div className="bg-[#1E293B] px-2 py-1.5 flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
                        <span className="ml-2 bg-white/[0.06] rounded px-1.5 py-0.5 text-[9px] text-[#64748B] font-mono truncate max-w-[120px]">
                          {p.url === "#" ? "example.com" : p.url.startsWith("http") ? new URL(p.url).hostname : "example.com"}
                        </span>
                      </div>
                      <div className="h-20 bg-[#15202E] p-2.5 flex flex-col gap-1">
                        <div className="h-1 rounded-sm bg-white/[0.1] w-1/2" />
                        <div className="h-1 rounded-sm bg-white/[0.06] w-[70%]" />
                        <div className="h-1 rounded-sm bg-white/[0.06] w-[35%]" />
                      </div>
                    </div>
                  </div>
                  <div className="py-5 px-6">
                    <h3 className="text-[16px] font-semibold text-[#F1F5F9] mb-1">
                      {p.title}
                    </h3>
                    <p className="text-[12.5px] text-[#94A3B8] mb-2.5">{p.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1.5">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 bg-white/[0.05] border border-white/[0.08] rounded-full text-[10px] text-[#94A3B8] font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#818CF8] text-[12px] font-medium hover:underline"
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
        <div className="flex justify-center gap-2.5 mt-7">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 transition-all duration-200 cursor-pointer ${
                i === selectedIndex
                  ? "w-6 bg-[#818CF8] rounded-[4px]"
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
