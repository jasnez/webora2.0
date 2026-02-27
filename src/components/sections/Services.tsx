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
      className="py-section lg:py-section-lg bg-surface/60 dark:bg-slate-950"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionHeading
          id="services-heading"
          title={SERVICES.title}
          subtitle={SERVICES.subtitle}
        />
        <div className="flex items-center justify-between gap-4 mb-4">
          <p className="text-xs sm:text-sm text-text-secondary max-w-xl">
            Klizaj kroz usluge ili koristi strelice za pregled.
          </p>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="h-9 w-9 rounded-full border border-border bg-white/60 dark:bg-slate-900/70 flex items-center justify-center text-primary dark:text-slate-100 shadow-sm hover:border-accent hover:text-accent transition-colors"
              aria-label="Prethodne usluge"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="h-9 w-9 rounded-full border border-border bg-white/60 dark:bg-slate-900/70 flex items-center justify-center text-primary dark:text-slate-100 shadow-sm hover:border-accent hover:text-accent transition-colors"
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
                <div className="group relative h-full rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-white/40 dark:border-slate-800/80 backdrop-blur-xl px-6 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-out hover:-translate-y-3 hover:-rotate-[0.8deg]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/12 via-transparent to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardIcon className="mb-6">
                    <Icon className="w-6 h-6" aria-hidden />
                  </CardIcon>
                  <h3 className="font-display font-bold text-lg text-primary dark:text-white mb-2 relative">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary dark:text-slate-300 text-sm leading-relaxed relative">
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
