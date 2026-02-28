"use client";

import Link from "next/link";
import Image from "next/image";
import { HERO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-podloga relative flex min-h-[80vh] flex-col justify-center overflow-hidden scroll-mt-24 py-12 md:py-16 lg:py-24 noise-overlay"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 hero-particles" aria-hidden />

      {/* Gradient blob – ne generički vizual */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[min(80vw,520px)] h-[min(80vw,520px)] rounded-full opacity-30 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.5) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-container px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-[1.12] tracking-tight text-white-text sm:text-5xl lg:text-[2.75rem] xl:text-[3rem]"
            >
              {HERO.headlineShort}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-text-secondary">
              {HERO.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <Button
                href="/kontakt"
                variant="primary"
                size="lg"
                className="group gap-2 shadow-[var(--cta-primary-shadow)] hover:shadow-[var(--cta-primary-shadow-hover)]"
              >
                {HERO.primaryCta}
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                  &gt;
                </span>
              </Button>
              <div className="flex flex-wrap gap-3">
                <Button href="/usluge" variant="secondary" size="md">
                  Usluge
                </Button>
                <Button href="/portfolio" variant="secondary" size="md">
                  {HERO.secondaryCta}
                </Button>
              </div>
            </div>
            <p className="mt-6 text-sm text-text-muted">{HERO.trustCopy}</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-text-secondary" aria-hidden>
              {HERO.trustBenefits.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

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
