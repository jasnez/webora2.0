"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-podloga relative flex min-h-[80vh] flex-col justify-center overflow-hidden scroll-mt-24 py-12 md:py-16 lg:py-24 noise-overlay"
      aria-labelledby="hero-title"
    >
      {/* Layered depth: particles (dark only) */}
      <div className="pointer-events-none absolute inset-0 hero-particles" aria-hidden />

      {/* Abstract shape – blagi tonal blob za depth */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[min(80vw,520px)] h-[min(80vw,520px)] rounded-full opacity-20 dark:opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 70%)",
        }}
        aria-hidden
      />
      {/* Suptilni oblik lijevo – light i dark */}
      <div
        className="pointer-events-none absolute -left-[20%] top-1/3 w-[50vw] max-w-[400px] h-[50vw] max-h-[400px] rounded-full opacity-[0.07] dark:opacity-[0.06] blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.5) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-container px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Glavni sadržaj na surface card – elevation */}
          <motion.div
            className="hero-content-card p-6 sm:p-8 md:p-9"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              id="hero-title"
              variants={item}
              className="text-3xl font-bold leading-[1.15] tracking-tight text-white-text sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem]"
            >
              {HERO.headlineShort}
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-4 text-base sm:text-lg leading-relaxed text-text-secondary"
            >
              {HERO.subtitle}
            </motion.p>
            <motion.div
              variants={item}
              className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <Button
                href="/kontakt"
                variant="primary"
                size="lg"
                className="hero-cta-primary group gap-2"
              >
                <span className="hero-cta-text">{HERO.primaryCta}</span>
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                size="md"
                className="hero-cta-secondary"
              >
                {HERO.secondaryCta}
              </Button>
            </motion.div>
            <motion.p variants={item} className="mt-6 text-sm text-text-muted">
              {HERO.trustCopy}
            </motion.p>
            <motion.ul
              variants={item}
              className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-text-secondary"
              aria-hidden
            >
              {HERO.trustBenefits.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Desna strana – vizual u kartici */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative mx-auto max-w-[min(100%,600px)]">
              <div className="hero-content-card overflow-hidden rounded-2xl border border-border-dark/50 shadow-[var(--hero-card-shadow)]">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/hero-right.png"
                    alt="Laptop i telefon sa dashboardom, Lighthouse 90+, SEO Ready, Core Web Vitals"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1023px) 100vw, 600px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
