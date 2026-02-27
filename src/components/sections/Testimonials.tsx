"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const AUTOPLAY_MS = 5000;

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.items.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, []);

  const active = TESTIMONIALS.items[index];

  return (
    <section
      id="testimonials"
      className="py-section lg:py-section-lg bg-surface/60 dark:bg-slate-950"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionHeading
          id="testimonials-heading"
          title={TESTIMONIALS.title}
        />
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="relative rounded-3xl bg-white dark:bg-slate-900 border border-border/70 dark:border-slate-800 px-6 py-8 md:px-10 md:py-10 shadow-soft"
            >
              <Quote
                className="absolute top-4 right-4 w-8 h-8 text-accent/20"
                aria-hidden
              />
              <p className="text-text-primary dark:text-white leading-relaxed mb-4 relative z-10 text-base md:text-lg">
                &ldquo;{active.quote}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-2" aria-hidden>
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <footer className="text-sm text-text-secondary dark:text-slate-300">
                — {active.author}
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {TESTIMONIALS.items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-accent"
                      : "w-2.5 bg-border hover:bg-accent/60"
                  }`}
                  aria-label={`Prikaži testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="text-xs text-text-secondary dark:text-slate-400">
              Automatsko pomjeranje svakih 5 sekundi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
