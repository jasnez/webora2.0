"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-section lg:py-section-lg bg-surface/50"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionHeading
          id="testimonials-heading"
          title={TESTIMONIALS.title}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.items.map((t, index) => (
            <motion.blockquote
              key={index}
              className="relative rounded-card bg-white border border-border p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Quote
                className="absolute top-4 right-4 w-8 h-8 text-accent/20"
                aria-hidden
              />
              <p className="text-text-primary leading-relaxed mb-4 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-2" aria-hidden>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <footer className="text-sm text-text-secondary">
                — {t.author}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
