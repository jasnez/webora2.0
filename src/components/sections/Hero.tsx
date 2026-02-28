"use client";

import Link from "next/link";
import Image from "next/image";
import { HERO } from "@/lib/constants";

const FLOATING_BADGES = [
  { label: "Lighthouse 90+", sub: "Performance", icon: "⚡" },
  { label: "SEO Ready", sub: "Bolji ranking", icon: "✓" },
  { label: "LCP < 2.5s", sub: "Core Web Vitals", icon: "✓" },
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-podloga relative flex min-h-[85vh] flex-col justify-center overflow-hidden scroll-mt-24 py-12 md:py-16 lg:py-24 noise-overlay"
      aria-labelledby="hero-title"
    >
      {/* Svjetlosne čestice (starfield) */}
      <div
        className="pointer-events-none absolute inset-0 hero-particles"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-container px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column: text, CTAs, microcopy only */}
          <div>
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-[1.1] tracking-tight text-white-text sm:text-5xl lg:text-[2.75rem] xl:text-[3rem]"
            >
              {HERO.title}
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-text-secondary">
              {HERO.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 rounded-button bg-accent px-6 py-3.5 font-semibold text-white shadow-cta transition-all duration-200 hover:scale-[1.02] hover:bg-accent-hover hover:shadow-cta-hover"
              >
                {HERO.primaryCta}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-button border border-white-text/30 bg-white/5 px-6 py-3.5 font-semibold text-white-text transition-all duration-200 hover:bg-white/10"
              >
                {HERO.secondaryCta}
              </Link>
            </div>
            <p className="mt-5 text-sm text-text-muted">{HERO.trustCopy}</p>
          </div>

          {/* Right column: clean hero image in glass frame + badges outside image */}
          <div className="w-full">
            <div className="relative mx-auto w-full max-w-[min(100%,680px)]">
              {/* Glass frame: rounded 24px, border, backdrop blur, soft shadow */}
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-soft-lg backdrop-blur-md ring-1 ring-white/5">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/hero-visual-clean.png"
                    alt=""
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1023px) 100vw, 680px"
                  />
                </div>
              </div>

              {/* Metric badges: HTML components positioned around the frame (not inside image) */}
              <div
                className="absolute -right-2 top-[8%] hidden rounded-xl border border-success/40 bg-success/10 px-3 py-2 backdrop-blur-md md:flex lg:-right-4 lg:top-[10%]"
                aria-hidden
              >
                <span className="mr-2 text-lg">{FLOATING_BADGES[0].icon}</span>
                <div>
                  <span className="block text-sm font-semibold text-success">
                    {FLOATING_BADGES[0].label}
                  </span>
                  <span className="text-xs text-success/80">{FLOATING_BADGES[0].sub}</span>
                </div>
              </div>
              <div
                className="absolute right-2 top-[42%] hidden rounded-xl border border-success/40 bg-success/10 px-3 py-2 backdrop-blur-md md:flex lg:right-0 lg:top-[44%]"
                aria-hidden
              >
                <span className="mr-2 text-lg text-success">✓</span>
                <div>
                  <span className="block text-sm font-semibold text-success">
                    {FLOATING_BADGES[1].label}
                  </span>
                  <span className="text-xs text-success/80">{FLOATING_BADGES[1].sub}</span>
                </div>
              </div>
              <div
                className="absolute -left-2 bottom-[22%] hidden rounded-xl border border-success/40 bg-success/10 px-3 py-2 backdrop-blur-md md:flex lg:-left-4 lg:bottom-[24%]"
                aria-hidden
              >
                <span className="mr-2 text-lg text-success">✓</span>
                <div>
                  <span className="block text-sm font-semibold text-success">
                    {FLOATING_BADGES[2].label}
                  </span>
                  <span className="text-xs text-success/80">{FLOATING_BADGES[2].sub}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
