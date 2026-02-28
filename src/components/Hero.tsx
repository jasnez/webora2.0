import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden scroll-mt-24" id="hero" aria-labelledby="hero-title">
      {/* Starry night base: indigo → purple gradient */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#0f0a1e] via-[#1e1b4b] via-40% to-[#2e1065] to-[#4c1d95]" />

      {/* Soft radial glows for depth */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 20% 20%, rgba(99, 102, 241, 0.22), transparent 50%), radial-gradient(ellipse 80% 60% at 80% 60%, rgba(139, 92, 246, 0.18), transparent 50%), radial-gradient(ellipse 60% 40% at 50% 90%, rgba(168, 85, 247, 0.12), transparent 45%)",
        }}
      />

      {/* Star field – SVG pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cg fill='%23fff' opacity='0.9'%3E%3Ccircle cx='20' cy='40' r='0.8'/%3E%3Ccircle cx='80' cy='120' r='0.6'/%3E%3Ccircle cx='160' cy='30' r='1'/%3E%3Ccircle cx='240' cy='100' r='0.7'/%3E%3Ccircle cx='320' cy='60' r='0.5'/%3E%3Ccircle cx='380' cy='180' r='0.9'/%3E%3Ccircle cx='60' cy='220' r='0.6'/%3E%3Ccircle cx='140' cy='280' r='0.8'/%3E%3Ccircle cx='220' cy='200' r='0.5'/%3E%3Ccircle cx='300' cy='320' r='0.7'/%3E%3Ccircle cx='100' cy='350' r='0.6'/%3E%3Ccircle cx='180' cy='380' r='0.4'/%3E%3Ccircle cx='260' cy='260' r='0.9'/%3E%3Ccircle cx='340' cy='240' r='0.5'/%3E%3C/g%3E%3Cg fill='%23c4b5fd' opacity='0.5'%3E%3Ccircle cx='40' cy='160' r='0.6'/%3E%3Ccircle cx='200' cy='140' r='0.5'/%3E%3Ccircle cx='360' cy='300' r='0.6'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "400px 400px",
        }}
      />

      {/* Nebula sweep */}
      <div className="absolute -inset-x-24 top-24 h-[420px] -rotate-6 bg-[radial-gradient(closest-side,rgba(255,255,255,0.06),transparent_70%)] blur-2xl opacity-80" />

      {/* Grain */}
      <div className="noise absolute inset-0 opacity-[0.12]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left */}
          <div className="max-w-xl">
            <h1 id="hero-title" className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl leading-[1.06]">
              Pretvaramo posjetioce u klijente
              <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
                {" "}
                uz profesionalne web stranice.
              </span>
            </h1>

            <p className="mt-6 text-pretty text-base leading-7 text-white/70 md:text-lg">
              Next.js web stranice bez kompromisa — brze, sigurne i optimizirane
              za konverziju.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/kontakt"
                className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white min-h-[44px]"
              >
                <span className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_12px_40px_rgba(99,102,241,0.25)] transition group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_18px_60px_rgba(139,92,246,0.35)]" />
                <span className="relative">Rezerviraj besplatnu konsultaciju</span>
              </Link>

              <Link
                href="/portfolio"
                className="group relative inline-flex items-center gap-2 rounded-full px-2 py-2 text-sm font-medium text-white/80 hover:text-white min-h-[44px]"
              >
                <span className="relative">
                  Pogledaj portfolio
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/70 transition-all duration-300 group-hover:w-full" />
                </span>
                <span className="text-white/50 transition group-hover:text-white/80">→</span>
              </Link>
            </div>
          </div>

          {/* Right: web design visual – laptop/dashboard sa smislenom grafikom */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-10 rounded-[48px] bg-[radial-gradient(closest-side,rgba(139,92,246,0.2),transparent_70%)] blur-2xl"
            />

            <div className="relative h-[360px] md:h-[440px]">
              {/* Back mockup */}
              <div className="mockup-float-slow absolute right-4 top-8 w-[78%] rotate-[10deg]">
                <div className="rounded-2xl bg-white/5 backdrop-blur-sm ring-1 ring-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                  <div className="h-9 rounded-t-2xl bg-white/5 ring-1 ring-white/10" />
                  <div className="aspect-[16/10] overflow-hidden rounded-b-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/20" />
                </div>
              </div>

              {/* Middle mockup */}
              <div className="mockup-float-mid absolute right-10 top-28 w-[84%] rotate-[-4deg]">
                <div className="rounded-2xl bg-white/6 backdrop-blur-sm ring-1 ring-white/15 shadow-[0_26px_90px_rgba(0,0,0,0.55)]">
                  <div className="h-9 rounded-t-2xl bg-white/5 ring-1 ring-white/10" />
                  <div className="aspect-[16/10] overflow-hidden rounded-b-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent" />
                </div>
              </div>

              {/* Front: stvarni web dizajn prikaz (laptop + dashboard) */}
              <div className="mockup-float-fast absolute right-0 bottom-0 w-[92%] rotate-[2deg]">
                <div className="rounded-[28px] bg-white/8 backdrop-blur-sm ring-1 ring-white/20 shadow-[0_30px_120px_rgba(0,0,0,0.6)]">
                  <div className="flex items-center gap-2 px-4 pt-3">
                    <span className="h-2 w-2 rounded-full bg-red-500/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                    <div className="ml-auto h-6 w-24 rounded-full bg-white/10 ring-1 ring-white/20" />
                  </div>
                  <div className="p-3">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-900/80 ring-1 ring-white/10">
                      <Image
                        src="/hero-right.png"
                        alt="Pregled web stranice na uređaju — brze stranice, SEO, konverzije"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="(max-width: 1023px) 90vw, 480px"
                      />
                    </div>
                  </div>
                  <div className="h-10 rounded-b-[28px] bg-gradient-to-r from-white/10 via-white/5 to-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
