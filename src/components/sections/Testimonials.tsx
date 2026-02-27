"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
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
      id="testimonials"
      className="py-22 bg-[#F9F7F4] scroll-mt-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          id="testimonials-heading"
          label="Iskustva"
          title={TESTIMONIALS.title}
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {TESTIMONIALS.items.map((t) => (
              <div
                key={t.initials}
                className="flex-[0_0_100%] md:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.333%-14px)] min-w-0"
              >
                <div className="bg-white border border-[#EDE8E3] rounded-[14px] p-7 h-full flex flex-col transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                  <div className="flex gap-1 mb-3" aria-hidden>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-900 leading-relaxed mb-4 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#EEF2FF] text-[#6366F1] flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.loc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

            <div className="flex justify-center gap-2.5 mt-6">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 transition-all duration-200 cursor-pointer ${
                i === selectedIndex
                  ? "w-6 bg-[#6366F1] rounded-[4px]"
                  : "w-2 rounded-full bg-[#D4CDC5] hover:bg-slate-400"
              }`}
              aria-label={`Prikaži iskustvo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
