import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] scroll-mt-24" id="hero" aria-labelledby="hero-title">
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0">
        {/* Base vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_30%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(900px_500px_at_80%_40%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(700px_450px_at_50%_85%,rgba(244,114,182,0.10),transparent_60%)]" />

        {/* "Nebula sweep" */}
        <div className="absolute -inset-x-24 top-24 h-[420px] -rotate-6 bg-[radial-gradient(closest-side,rgba(255,255,255,0.10),transparent_70%)] blur-2xl opacity-70" />

        {/* Grain / noise overlay (CSS below) */}
        <div className="noise absolute inset-0 opacity-[0.14]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left */}
          <div className="max-w-xl">
            <h1 id="hero-title" className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl leading-[1.06]">
              Pretvaramo posjetioce u klijente
              <span className="bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
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
                {/* glow */}
                <span className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_12px_40px_rgba(79,70,229,0.25)] transition group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_18px_60px_rgba(99,102,241,0.35)]" />
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

          {/* Right: stacked mockups */}
          <div className="relative">
            {/* soft highlight behind mockups */}
            <div
              aria-hidden
              className="absolute -inset-10 rounded-[48px] bg-[radial-gradient(closest-side,rgba(99,102,241,0.25),transparent_70%)] blur-2xl"
            />

            <div className="relative h-[360px] md:h-[440px]">
              {/* Back mockup */}
              <div className="mockup-float-slow absolute right-4 top-8 w-[78%] rotate-[10deg]">
                <div className="rounded-2xl bg-white/5 backdrop-blur-sm ring-1 ring-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                  <div className="h-9 rounded-t-2xl bg-white/5 ring-1 ring-white/10" />
                  <div className="aspect-[16/10] overflow-hidden rounded-b-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
                </div>
              </div>

              {/* Middle mockup */}
              <div className="mockup-float-mid absolute right-10 top-28 w-[84%] rotate-[-4deg]">
                <div className="rounded-2xl bg-white/6 backdrop-blur-sm ring-1 ring-white/15 shadow-[0_26px_90px_rgba(0,0,0,0.60)]">
                  <div className="h-9 rounded-t-2xl bg-white/5 ring-1 ring-white/10" />
                  <div className="aspect-[16/10] overflow-hidden rounded-b-2xl bg-[linear-gradient(135deg,rgba(56,189,248,0.10),rgba(99,102,241,0.06),rgba(255,255,255,0.02))]" />
                </div>
              </div>

              {/* Front "laptop/screen" */}
              <div className="mockup-float-fast absolute right-0 bottom-0 w-[92%] rotate-[2deg]">
                <div className="rounded-[28px] bg-white/7 backdrop-blur-sm ring-1 ring-white/18 shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
                  <div className="flex items-center gap-2 px-4 pt-3">
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <div className="ml-auto h-6 w-24 rounded-full bg-white/5 ring-1 ring-white/10" />
                  </div>
                  <div className="p-4">
                    <div className="aspect-[16/10] rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] ring-1 ring-white/10" />
                  </div>

                  {/* bottom "keyboard" hint */}
                  <div className="h-10 rounded-b-[28px] bg-gradient-to-r from-white/8 via-white/5 to-white/8" />
                </div>
              </div>
            </div>

            {/* optional: small caption or trust chips could go here later */}
          </div>
        </div>
      </div>
    </section>
  );
}
