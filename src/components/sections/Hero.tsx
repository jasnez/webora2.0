"use client";

import Link from "next/link";
import Image from "next/image";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-bg-dark noise-overlay scroll-mt-24"
      aria-labelledby="hero-title"
    >
      {/* Premium gradient – suptilan plavi glow kao na referentnoj slici */}
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
          {/* Lijevo: naslov, podnaslov, CTA dugmad, trust */}
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
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white-text/30 bg-white/5 text-white-text rounded-button font-semibold hover:bg-white/10 transition-all duration-200"
              >
                {HERO.secondaryCta}
              </Link>
            </div>
            <p className="text-sm text-text-muted">{HERO.trustCopy}</p>
          </div>

          {/* Desno: vizual heroa (laptop, telefon, floating cards) */}
          <div className="relative hidden lg:block lg:pl-4">
            <div className="relative aspect-[1200/630] max-w-[600px] mx-auto">
              <Image
                src="/hero-visual.png"
                alt="Webora – SEO & Growth dashboard, Lighthouse 90+, Core Web Vitals, profesionalna web stranica"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 1024px) 0px, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
