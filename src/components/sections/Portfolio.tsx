"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { PORTFOLIO } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Portfolio() {
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
      id="portfolio"
      className="py-section lg:py-section-lg bg-surface/60 dark:bg-slate-950 scroll-mt-24 md:scroll-mt-32"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionHeading
          id="portfolio-heading"
          title={PORTFOLIO.title}
          subtitle={PORTFOLIO.subtitle}
        />

        <div className="flex items-center justify-between gap-4 mb-6">
          <p className="text-xs sm:text-sm text-text-secondary dark:text-slate-300 max-w-xl">
            Klizaj kroz projekte i pogledaj kako Webora rješava različite tipove web stranica.
          </p>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="h-9 w-9 rounded-full border border-border bg-white/70 dark:bg-slate-900/80 flex items-center justify-center text-primary dark:text-slate-100 shadow-sm hover:border-accent hover:text-accent transition-colors"
              aria-label="Prethodni projekat"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="h-9 w-9 rounded-full border border-border bg-white/70 dark:bg-slate-900/80 flex items-center justify-center text-primary dark:text-slate-100 shadow-sm hover:border-accent hover:text-accent transition-colors"
              aria-label="Sljedeći projekat"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-6 overflow-x-auto py-5 snap-x snap-mandatory"
        >
          {PORTFOLIO.items.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group snap-start basis-[85%] sm:basis-[55%] lg:basis-[32%] max-w-sm flex-shrink-0 rounded-[24px] bg-white/85 dark:bg-slate-900/85 border border-white/50 dark:border-slate-800 shadow-[0_24px_70px_rgba(15,23,42,0.5)] backdrop-blur-xl overflow-hidden"
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/35 via-sky-500/35 to-primary/80 dark:from-sky-500/45 dark:via-indigo-500/45 dark:to-slate-950 flex items-center justify-center">
                    <span className="font-mono text-sm text-white/90">
                      {project.title}
                    </span>
                  </div>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 360px"
                    />
                  )}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/60 via-black/15 to-transparent transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-primary dark:text-white flex items-center gap-2">
                        {project.title}
                        <ExternalLink className="w-4 h-4 opacity-70" aria-hidden />
                      </h3>
                      <p className="mt-2 text-text-secondary dark:text-slate-300 text-sm">
                        {project.description}
                      </p>
                    </div>
                    {project.category && (
                      <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-[11px] font-medium text-text-secondary">
                        {project.category}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-surface text-xs font-medium text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
