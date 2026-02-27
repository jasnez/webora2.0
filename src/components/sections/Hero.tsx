"use client";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Vercel",
  "Framer Motion",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#131B2E] min-h-screen flex items-center overflow-hidden scroll-mt-24 md:scroll-mt-32"
      aria-labelledby="hero-title"
    >
      {/* Dekoracije */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-500/[0.08] rounded-full blur-[120px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-[15%] right-[15%] w-[350px] h-[350px] bg-sky-400/[0.06] rounded-full blur-[100px] pointer-events-none" aria-hidden />

      <div className="max-w-6xl mx-auto px-6 relative z-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Lijeva strana — tekst */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Dostupni za nove projekte
            </div>
            <h1
              id="hero-title"
              className="text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.08] text-white mb-5"
            >
              Pravimo web koji{" "}
              <span className="bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                donosi rezultate.
              </span>
            </h1>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
              Brze, sigurne i SEO-optimizirane web stranice izgrađene sa React i
              Next.js. Bez šablona — svaki projekat je kodiran od nule, za vaš
              biznis.
            </p>
            <div className="flex gap-3">
              <a
                href="#kontakt"
                className="px-7 py-3.5 bg-indigo-500 text-white rounded-xl font-semibold text-[15px] shadow-lg shadow-indigo-500/25 hover:bg-indigo-400 hover:shadow-indigo-400/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Započni projekat <span>→</span>
              </a>
              <a
                href="#portfolio"
                className="px-7 py-3.5 border border-white/12 text-slate-400 rounded-xl text-[15px] hover:text-white hover:border-white/25 transition-all"
              >
                Pogledaj radove
              </a>
            </div>
          </div>

          {/* Desna strana — Bento Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Stats — span 2 */}
            <div className="col-span-2 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:border-white/15 transition-all">
              <div className="flex justify-around text-center">
                <div>
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                    Projekata
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                    Zadovoljstvo
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">3x</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                    Brže od WP
                  </div>
                </div>
              </div>
            </div>
            {/* Performanse */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:border-white/15 transition-all">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/15 flex items-center justify-center mb-3 text-indigo-300 text-base">
                ⚡
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">
                Performanse
              </h4>
              <p className="text-xs text-slate-500">
                Lighthouse 95+ na svim metrikama
              </p>
            </div>
            {/* SEO */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:border-white/15 transition-all">
              <div className="w-9 h-9 rounded-lg bg-sky-400/15 flex items-center justify-center mb-3 text-sky-300 text-base">
                🔍
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">
                SEO Ready
              </h4>
              <p className="text-xs text-slate-500">
                Optimizirano za Google od prvog dana
              </p>
            </div>
            {/* Tech stack — span 2 */}
            <div className="col-span-2 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:border-white/15 transition-all">
              <p className="text-xs text-slate-600 font-mono mb-3">
                // Tech stack koji koristimo
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-md text-[11px] text-slate-500 font-mono hover:border-indigo-500/30 hover:text-indigo-300 transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
