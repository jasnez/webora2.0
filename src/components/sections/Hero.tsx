"use client";

import { motion } from "framer-motion";
import { HERO, CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-20 pb-16 md:pt-24 md:pb-24 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background: subtle grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-transparent" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.p
            variants={item}
            className="text-accent font-display font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Web development studio · BiH
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={item}
            className="font-display font-bold text-primary text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] leading-[1.1] tracking-tight"
          >
            {HERO.title}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-5 text-xl text-text-secondary max-w-2xl leading-relaxed"
          >
            {HERO.subtitle}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-4 text-base text-text-secondary/90 max-w-2xl"
          >
            {HERO.description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button href="#kontakt" variant="primary" size="lg">
              {CTA.primary} →
            </Button>
            <Button href="#portfolio" variant="outline" size="lg">
              {CTA.secondary}
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 pt-10 border-t border-border flex flex-wrap gap-8 sm:gap-12"
          >
            {HERO.stats.map((stat, i) => (
              <div key={i}>
                <span className="font-display font-bold text-2xl md:text-3xl text-primary block">
                  {stat.value}
                </span>
                <span className="text-sm text-text-secondary">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
