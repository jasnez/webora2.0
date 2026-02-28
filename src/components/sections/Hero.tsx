"use client";

import Link from "next/link";
import Image from "next/image";
import { HERO } from "@/lib/constants";

// Stvarna slika za ekran telefona: profesionalci na sastanku (Unsplash)
const PHONE_MEETING_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80";

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

          {/* Desna kolona: laptop (jasno prepoznatljiv) + telefon sa stvarnom slikom + floating badges */}
          <div className="relative hidden w-full lg:block">
            <div className="relative mx-auto max-w-[560px]">
              {/* Plavi glow ispod uređaja (kao na slici) */}
              <div
                className="absolute left-1/2 top-[58%] h-[220px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[70px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(37, 99, 235, 0.2) 40%, transparent 70%)",
                }}
                aria-hidden
              />

              {/* Laptop – MacBook stil: srebrna baza, tanak okvir, crna “hinge” traka */}
              <div className="relative -rotate-[3deg] transform">
                {/* Ekran – zaobljeni gornji uglovi, tanak bezel */}
                <div
                  className="relative overflow-hidden rounded-t-2xl border-2 border-gray-500/80 bg-[#e8eaed] shadow-2xl"
                  style={{
                    boxShadow:
                      "0 30px 60px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset",
                  }}
                >
                  {/* Notch / traka iznad ekrana (opciono) – samo tanak bezel */}
                  <div className="h-1 bg-gray-400/60" />
                  {/* Browser traka */}
                  <div className="flex items-center gap-2 border-b border-gray-300 bg-[#f1f3f4] px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-2 flex-1 rounded-md bg-white/90 py-1.5 text-center text-[11px] text-gray-500 shadow-inner">
                      webora.ba
                    </span>
                  </div>
                  {/* Sadržaj dashboarda */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900">SEO &amp; Growth</h3>
                    <p className="mt-0.5 text-sm text-gray-600">
                      Povećajte promet i rangirajte na vrhu.
                    </p>
                    {/* Graf – plava linija uzlaznog trenda + barovi */}
                    <div className="relative mt-4 h-16 w-full">
                      <svg
                        viewBox="0 0 240 70"
                        className="h-full w-full"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="heroChartGrad"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#heroChartGrad)"
                          d="M0 58 L30 52 L60 44 L90 34 L120 26 L150 18 L180 12 L210 6 L240 2 L240 70 L0 70 Z"
                        />
                        <path
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M0 58 L30 52 L60 44 L90 34 L120 26 L150 18 L180 12 L210 6 L240 2"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 flex gap-6 border-t border-gray-200 pt-3">
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="flex h-6 w-6 items-center justify-center rounded bg-blue-100 text-blue-600">
                          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-xs font-medium">SEO Optimizacija</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="flex h-6 w-6 items-center justify-center rounded bg-amber-100 text-amber-600">
                          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                          </svg>
                        </span>
                        <span className="text-xs font-medium">Analiza i izvještaj</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Baza laptopa – srebrna, debelja, s “touchpad” zonom */}
                <div className="relative">
                  <div
                    className="h-3 rounded-b-xl border-2 border-t-0 border-gray-500/80 bg-gradient-to-b from-gray-400 to-gray-500 shadow-lg"
                    style={{
                      boxShadow: "0 8px 20px -5px rgba(0,0,0,0.35)",
                    }}
                  />
                  <div className="absolute left-1/2 top-0 h-1.5 w-28 -translate-x-1/2 rounded-b-full bg-gray-600" />
                </div>
              </div>

              {/* Mobilni telefon – crni okvir, na ekranu stvarna slika (sastanak) */}
              <div
                className="absolute left-0 top-[24%] w-[110px] rotate-[-8deg] rounded-[22px] border-[5px] border-gray-900 bg-gray-900 shadow-2xl"
                style={{
                  boxShadow:
                    "0 30px 60px -12px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                <div className="overflow-hidden rounded-[14px] bg-white">
                  {/* Status bar */}
                  <div className="flex items-center justify-between border-b border-gray-100 bg-white px-2 py-1.5 text-[9px] text-gray-600">
                    <span>9:41</span>
                    <span className="flex items-center gap-0.5">
                      <span className="inline-block h-1.5 w-4 rounded-sm border border-gray-400 bg-white" />
                      <span>●●●●</span>
                    </span>
                  </div>
                  {/* Sadržaj: naslov + stvarna slika sastanka */}
                  <div className="p-2">
                    <p className="text-[10px] font-bold leading-tight text-gray-900">
                      Profesionalna Web Stranica
                    </p>
                    <p className="mt-0.5 text-[8px] text-gray-600">
                      Brzina i funkcionalnost za vašu firmu
                    </p>
                    <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={PHONE_MEETING_IMAGE}
                        alt="Profesionalci na sastanku"
                        fill
                        className="object-cover object-center"
                        sizes="110px"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge 1: Lighthouse (plavi) – iznad laptopa lijevo */}
              <div
                className="absolute -left-4 top-[-8%] flex rounded-2xl border border-blue-400/40 bg-blue-500/25 px-3.5 py-2.5 backdrop-blur-md"
                style={{ boxShadow: "0 10px 40px rgba(59, 130, 246, 0.25)" }}
                aria-hidden
              >
                <div className="mr-2 flex items-center text-blue-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-300">
                    Lighthouse
                  </p>
                  <p className="text-xl font-bold leading-none text-white">90+</p>
                  <p className="text-[10px] text-blue-300/90">Performance Score</p>
                </div>
              </div>

              {/* Badge 2: SEO Ready (zeleni) – desno od ekrana */}
              <div
                className="absolute -right-2 top-[12%] flex rounded-2xl border border-emerald-400/40 bg-emerald-500/25 px-3.5 py-2.5 backdrop-blur-md"
                style={{ boxShadow: "0 10px 40px rgba(16, 185, 129, 0.25)" }}
                aria-hidden
              >
                <div className="mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/40 text-white">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">SEO Ready</p>
                  <p className="text-[10px] text-emerald-200/90">Bolji ranking</p>
                </div>
              </div>

              {/* Badge 3: Core Web Vitals (zeleni) – desno dolje */}
              <div
                className="absolute -right-2 bottom-[2%] flex rounded-2xl border border-emerald-400/40 bg-emerald-500/25 px-3.5 py-2.5 backdrop-blur-md"
                style={{ boxShadow: "0 10px 40px rgba(16, 185, 129, 0.25)" }}
                aria-hidden
              >
                <div className="mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/40 text-white">
                  <span className="text-xs font-bold">C</span>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">Core Web Vitals</p>
                  <p className="text-[10px] text-emerald-200/90">LCP &lt; 2.5s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
