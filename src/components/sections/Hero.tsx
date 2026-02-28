"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HERO } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  visible: (reduced: boolean) => ({
    opacity: 1,
    transition: reduced
      ? { duration: 0.2 }
      : { staggerChildren: 0.06, delayChildren: 0.1 },
  }),
};

const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0.15 : 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="hero-v2-bg relative flex min-h-[85vh] flex-col justify-center overflow-hidden scroll-mt-24 py-8 sm:py-12 md:py-16 lg:py-20 pb-12 md:pb-20 lg:pb-24"
      aria-labelledby="hero-title"
    >
      {/* Nebula sweep preko sredine */}
      <div className="hero-v2-nebula" aria-hidden />
      {/* Grain overlay */}
      <div className="hero-v2-grain" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-hero px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Lijevo: tekst + 2 CTA */}
          <motion.div
            className="flex flex-col"
            variants={container}
            initial="hidden"
            animate="visible"
            custom={!!reducedMotion}
          >
            <motion.h1
              id="hero-title"
              variants={item(!!reducedMotion)}
              className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem]"
            >
              {HERO.headlineShort}
            </motion.h1>
            <motion.p
              variants={item(!!reducedMotion)}
              className="mt-4 text-base text-white/80 sm:text-lg leading-relaxed"
            >
              {HERO.subtitle}
            </motion.p>
            <motion.div
              variants={item(!!reducedMotion)}
              className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <Link
                href="/kontakt"
                className="hero-v2-pill group inline-flex items-center justify-center gap-2 min-h-touch"
              >
                {HERO.primaryCta}
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                href="/portfolio"
                className="hero-v2-link min-h-touch inline-flex items-center py-2 text-[14px] font-medium text-white/70 hover:text-white sm:ml-6"
              >
                {HERO.secondaryCta}
              </Link>
            </motion.div>
          </motion.div>

          {/* Desno: stacked website mockup – 3 sloja, bez kartica */}
          <motion.div
            className="relative flex justify-center items-center min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] order-first lg:order-none"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Glavni laptop/screen – sredina */}
            <div
              className="hero-v2-mockup-border hero-v2-mockup-glow hero-v2-float relative z-[2] w-full max-w-[min(100%,520px)] rounded-xl overflow-hidden bg-[#0f172a]/90 backdrop-blur-sm"
            >
              <div className="aspect-[16/10] relative">
                <Image
                  src="/hero-right.png"
                  alt="Pregled web stranice na laptopu – Lighthouse 90+, SEO, Core Web Vitals"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1023px) 100vw, 520px"
                />
              </div>
            </div>

            {/* Overlay ekran 1 – lijevo iza, pod uglom */}
            <div
              className="absolute right-[8%] top-[8%] z-[1] w-[42%] max-w-[220px] -rotate-6"
            >
              <div className="hero-v2-mockup-border hero-v2-float-slow h-full rounded-lg overflow-hidden bg-[#1e293b]/80 backdrop-blur-md border border-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-900/80 flex items-center justify-center">
                    <div className="w-[70%] h-3 rounded bg-white/10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay ekran 2 – desno iza, pod uglom */}
            <div
              className="absolute left-[5%] bottom-[5%] z-[1] w-[38%] max-w-[200px] rotate-[4deg]"
            >
              <div className="hero-v2-mockup-border hero-v2-float h-full rounded-lg overflow-hidden bg-[#1e293b]/80 backdrop-blur-md border border-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-900/80 flex items-center justify-center">
                    <div className="flex gap-2">
                      <div className="w-8 h-2 rounded bg-white/10" />
                      <div className="w-12 h-2 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
