"use client";

import { useRef } from "react";
import {
  Code2,
  Palette,
  Search,
  Shield,
  AppWindow,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardIcon } from "@/components/ui/Card";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Palette,
  Search,
  Shield,
  AppWindow,
  Cloud,
};

export function Services() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.7;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="usluge"
      className="py-section lg:py-section-lg bg-white scroll-mt-24 md:scroll-mt-32"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionHeading
          id="services-heading"
          label="Usluge"
          title={SERVICES.title}
          subtitle={SERVICES.subtitle}
        />
        <div className="flex items-center justify-between gap-4 mb-4">
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
            Klizaj kroz usluge ili koristi strelice za pregled.
          </p>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-900 shadow-sm hover:border-indigo-500 hover:text-indigo-500 transition-colors"
              aria-label="Prethodne usluge"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-900 shadow-sm hover:border-indigo-500 hover:text-indigo-500 transition-colors"
              aria-label="Sljedeće usluge"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-5 overflow-x-auto py-5 snap-x snap-mandatory"
        >
          {SERVICES.items.map((service) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <article
                key={service.id}
                className="snap-center min-w-[260px] sm:min-w-[280px] lg:min-w-[320px]"
              >
                <div className="group relative h-full rounded-3xl bg-white border border-slate-200 px-6 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 ease-out hover:-translate-y-3 hover:-rotate-[0.8deg] hover:border-indigo-200">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-indigo-500/10 via-transparent to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardIcon className="mb-6">
                    <Icon className="w-6 h-6" aria-hidden />
                  </CardIcon>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2 relative">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed relative">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
