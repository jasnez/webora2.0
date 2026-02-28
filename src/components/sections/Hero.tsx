"use client";

import Link from "next/link";
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
          {/* Left column: headline, subheading, CTAs */}
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

          {/* Right column: laptop + phone mockups + floating badges (all HTML/CSS) */}
          <div className="relative hidden w-full lg:block">
            <div className="relative mx-auto max-w-[520px]">
              {/* Glow behind devices */}
              <div
                className="absolute left-1/2 top-1/2 h-[280px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[80px]"
                style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)" }}
                aria-hidden
              />

              {/* Laptop mockup */}
              <div className="relative -rotate-[2deg] transform">
                {/* Laptop screen */}
                <div className="relative overflow-hidden rounded-t-xl border border-gray-600/60 bg-[#e5e7eb] shadow-xl" style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)" }}>
                  <div className="flex items-center gap-2 border-b border-gray-300 bg-gray-200/90 px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 flex-1 rounded bg-white/80 py-1 text-center text-[10px] text-gray-500">webora.ba</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">SEO &amp; Growth</h3>
                    <p className="text-xs text-gray-600">Povećajte promet i rangirajte na vrhu.</p>
                    {/* Line chart - upward trend */}
                    <div className="relative mt-3 h-14 w-full">
                      <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#chartGrad)" d="M0 55 L40 48 L80 38 L120 28 L160 18 L200 8 L200 60 L0 60 Z" />
                        <path fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M0 55 L40 48 L80 38 L120 28 L160 18 L200 8" />
                      </svg>
                    </div>
                    <div className="mt-4 flex gap-4 border-t border-gray-300 pt-3">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <span className="text-xs">✓</span>
                        <span className="text-xs font-medium">SEO Optimizacija</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <span className="text-xs">📊</span>
                        <span className="text-xs font-medium">Analiza i izvještaj</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-2 rounded-b-md border border-t-0 border-gray-600/60 bg-gray-500/80 shadow-inner" />
                <div className="mx-auto h-1 w-24 rounded-b-full bg-gray-600/80" />
              </div>

              {/* Smartphone mockup - in front of laptop, slightly tilted */}
              <div
                className="absolute -left-2 top-[22%] w-[100px] rotate-[-6deg] rounded-[18px] border-4 border-gray-800 bg-gray-900 shadow-2xl"
                style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
              >
                <div className="overflow-hidden rounded-[10px] bg-white">
                  <div className="border-b border-gray-200 bg-gray-100 px-2 py-1.5 text-center text-[8px] text-gray-500">9:41</div>
                  <div className="p-2">
                    <p className="text-[9px] font-bold leading-tight text-gray-900">Profesionalna Web Stranica</p>
                    <p className="mt-0.5 text-[7px] text-gray-600">Brzina i funkcionalnost za vašu firmu</p>
                    <div className="mt-2 flex h-14 items-center justify-center rounded bg-gradient-to-br from-blue-100 to-slate-200 text-[8px] text-gray-500">
                      Slika
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge 1: Lighthouse (blue) - top left above laptop */}
              <div
                className="absolute -left-2 top-0 flex rounded-2xl border border-blue-400/50 bg-blue-500/20 px-3 py-2.5 backdrop-blur-md"
                style={{ boxShadow: "0 8px 32px rgba(59, 130, 246, 0.2)" }}
                aria-hidden
              >
                <div className="mr-2 flex items-center text-blue-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-blue-700">Lighthouse</p>
                  <p className="text-lg font-bold leading-none text-white">90+</p>
                  <p className="text-[10px] text-blue-600/90">Performance Score</p>
                </div>
              </div>

              {/* Badge 2: SEO Ready (green) - top right */}
              <div
                className="absolute -right-2 top-[8%] flex rounded-2xl border border-emerald-400/50 bg-emerald-500/20 px-3 py-2.5 backdrop-blur-md"
                style={{ boxShadow: "0 8px 32px rgba(16, 185, 129, 0.2)" }}
                aria-hidden
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/30 text-emerald-600">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white">SEO Ready</p>
                  <p className="text-[10px] text-emerald-600/90">Bolji ranking</p>
                </div>
              </div>

              {/* Badge 3: Core Web Vitals (green) - bottom right */}
              <div
                className="absolute -right-2 bottom-[5%] flex rounded-2xl border border-emerald-400/50 bg-emerald-500/20 px-3 py-2.5 backdrop-blur-md"
                style={{ boxShadow: "0 8px 32px rgba(16, 185, 129, 0.2)" }}
                aria-hidden
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/30 text-emerald-600">
                  <span className="text-xs font-bold">C</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white">Core Web Vitals</p>
                  <p className="text-[10px] text-emerald-600/90">LCP &lt; 2.5s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
