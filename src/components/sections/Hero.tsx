"use client";

import Link from "next/link";
import Image from "next/image";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-podloga relative flex min-h-[85vh] flex-col justify-center overflow-hidden scroll-mt-24 py-12 md:py-16 lg:py-24 noise-overlay"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 hero-particles" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-container px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Lijeva kolona: naslov, podnaslov, CTA */}
          <div>
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[2.75rem] xl:text-[3rem]"
            >
              {HERO.title}
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-gray-400">
              {HERO.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)",
                  boxShadow: "0 4px 14px rgba(37, 99, 235, 0.45)",
                }}
              >
                {HERO.primaryCta}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  &gt;
                </span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-500/40 bg-gray-100 px-6 py-3.5 font-semibold text-gray-800 transition-all duration-200 hover:bg-gray-200"
              >
                {HERO.secondaryCta}
              </Link>
            </div>
            <p className="mt-5 text-sm text-gray-500">{HERO.trustCopy}</p>
          </div>

          {/* Desna kolona: slika (laptop, telefon, badgeovi, glow) */}
          <div className="relative w-full">
            <div className="relative mx-auto max-w-[min(100%,600px)]">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft-lg backdrop-blur-sm ring-1 ring-white/5">
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
          </div>
        </div>
      </div>
    </section>
  );
}
