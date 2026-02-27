"use client";

import Link from "next/link";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-bg-dark noise-overlay scroll-mt-24"
      aria-labelledby="hero-title"
    >
      {/* Premium gradient – 10–15% opacity */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, #1D4ED8 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, #06B6D4 0%, transparent 40%)
          `,
        }}
        aria-hidden
      />

      <div className="max-w-container mx-auto px-6 relative z-10 w-full pt-[120px] pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: H1, subheading, CTAs, trust */}
          <div>
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-white-text mb-4"
            >
              {HERO.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-lg">
              {HERO.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 mb-5">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-button shadow-cta hover:shadow-cta-hover transition-all duration-200 hover:scale-[1.02]"
              >
                {HERO.primaryCta}
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-accent text-accent rounded-button font-semibold hover:bg-accent/10 transition-all duration-200"
              >
                {HERO.secondaryCta}
              </Link>
            </div>
            <p className="text-sm text-text-muted">{HERO.trustCopy}</p>
          </div>

          {/* Right: Browser mockup + 3 floating metric badges */}
          <div className="relative hidden lg:block">
            {/* Browser mockup */}
            <div className="relative rounded-card overflow-hidden bg-surface-dark border border-border-dark shadow-soft-lg">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-dark border-b border-border-dark">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-3 flex-1 rounded bg-white/5 h-5 max-w-[200px]" />
              </div>
              <div className="aspect-video bg-bg-dark flex items-center justify-center p-8">
                <div className="text-center text-text-muted text-sm">
                  <span className="block font-mono">webora.ba</span>
                  <span className="block mt-2 opacity-70">Screenshot placeholder</span>
                </div>
              </div>
            </div>

            {/* Floating metric badges */}
            {HERO.metricBadges.map((badge, i) => (
              <div
                key={badge.label}
                className="absolute backdrop-blur-md bg-success/10 border border-success rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-soft"
                style={{
                  right: i === 0 ? "-10%" : i === 1 ? "5%" : "15%",
                  bottom: i === 0 ? "10%" : i === 1 ? "35%" : "60%",
                }}
              >
                <span className="text-lg">{badge.icon}</span>
                <span className="text-sm font-medium text-success">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
