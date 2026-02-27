"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Zap, SearchCheck } from "lucide-react";
import { HERO, CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function StatCounter({ value, label }: { value: string; label: string }) {
  const numeric = Number.parseInt(value);
  const suffix = value.replace(String(numeric), "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, Number.isNaN(numeric) ? 0 : numeric, {
      duration: 1.6,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, numeric]);

  return (
    <div>
      <motion.span
        className="font-display font-bold text-2xl md:text-3xl text-primary dark:text-white block"
      >
        {Number.isNaN(numeric) ? (
          value
        ) : (
          <>
            <motion.span>{rounded}</motion.span>
            {suffix}
          </>
        )}
      </motion.span>
      <span className="text-sm text-text-secondary">{label}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-24 pb-20 md:pt-28 md:pb-28 overflow-hidden scroll-mt-24 md:scroll-mt-32"
      aria-labelledby="hero-title"
    >
      {/* Background gradient + blobs */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1d4ed8] via-[#4f46e5] to-[#0f172a] dark:from-[#020617] dark:via-[#1e293b] dark:to-black"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 -top-40 h-80 w-80 rounded-full bg-fuchsia-500/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-sky-400/40 blur-3xl"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.24),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.24),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.95),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 w-full grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl text-white"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-100 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Web development studio · BiH
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={item}
            className="mt-4 font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-white"
          >
            {HERO.title}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-5 text-lg md:text-xl text-slate-100/90 max-w-2xl leading-relaxed"
          >
            {HERO.subtitle}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-3 text-sm md:text-base text-slate-200/80 max-w-2xl"
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

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative space-y-4"
        >
          <div className="grid grid-cols-3 gap-3">
            {HERO.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/90 text-slate-900 dark:bg-slate-900/80 dark:text-slate-50 border border-white/40 dark:border-slate-800 px-4 py-4 shadow-[0_14px_35px_rgba(15,23,42,0.4)]"
              >
                <StatCounter value={stat.value} label={stat.label} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/90 text-slate-900 dark:bg-slate-900/80 dark:text-slate-50 border border-white/40 dark:border-slate-800 px-4 py-4 flex flex-col gap-2 shadow-[0_16px_40px_rgba(15,23,42,0.45)]">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-500">
                <Zap className="h-4 w-4" aria-hidden />
                Performanse
              </div>
              <p className="text-sm">
                Lighthouse score 95+ na ključnim metrikama Core Web Vitals.
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 text-slate-900 dark:bg-slate-900/80 dark:text-slate-50 border border-white/40 dark:border-slate-800 px-4 py-4 flex flex-col gap-2 shadow-[0_16px_40px_rgba(15,23,42,0.45)]">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-sky-400">
                <SearchCheck className="h-4 w-4" aria-hidden />
                SEO Ready
              </div>
              <p className="text-sm">
                Optimizirano za Google od prvog dana — čisto HTML, schema i brzi TTFB.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950/70 text-slate-100 border border-white/10 px-4 py-3 text-xs flex flex-wrap gap-2 items-center">
            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              Tech stack koji koristimo
            </span>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind", "Vercel", "Framer Motion"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-slate-100 border border-slate-700"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
