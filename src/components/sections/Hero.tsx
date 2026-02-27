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

      <div className="max-w-container mx-auto px-6 relative z-10 pt-[120px] pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          {/* Lijeva strana — tekst */}
          <div>
            <div className="inline-flex items-center gap-2 py-1.5 px-3.5 bg-[rgba(99,102,241,0.12)] border border-[rgba(99,102,241,0.2)] rounded-full text-[12.5px] text-[#A5B4FC] mb-5">
              <span className="w-1.5 h-1.5 bg-[#34D399] rounded-full shadow-[0_0_8px_#34D399] animate-pulse" />
              Dostupni za nove projekte
            </div>
            <h1
              id="hero-title"
              className="text-[48px] font-bold tracking-[-1.5px] leading-[1.08] text-[#F1F5F9] mb-4"
            >
              Pravimo web koji{" "}
              <span className="bg-gradient-to-br from-[#A5B4FC] to-[#38BDF8] bg-clip-text text-transparent">
                donosi rezultate.
              </span>
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-[1.65] mb-7 max-w-lg">
              Brze, sigurne i SEO-optimizirane web stranice izgrađene sa React i
              Next.js. Bez šablona — svaki projekat je kodiran od nule, za vaš
              biznis.
            </p>
            <div className="flex gap-3">
              <a
                href="#kontakt"
                className="py-3 px-6 bg-[#6366F1] text-white rounded-[10px] font-semibold text-[14.5px] shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:bg-[#818CF8] hover:-translate-y-0.5 transition-all duration-[0.25s] inline-flex items-center gap-2"
              >
                Započni projekat <span>→</span>
              </a>
              <a
                href="#portfolio"
                className="py-3 px-6 border border-white/[0.15] text-[#94A3B8] rounded-[10px] text-[14.5px] hover:text-white hover:border-white/30 transition-all bg-transparent"
              >
                Pogledaj radove
              </a>
            </div>
          </div>

          {/* Desna strana — Bento Grid (kao u HTML) */}
          <div className="grid grid-cols-2 grid-rows-[auto_auto_auto] gap-2.5">
            <div className="col-span-2 bg-white/[0.04] border border-white/[0.08] rounded-[14px] p-5 hover:border-white/15 hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex justify-around text-center">
                <div>
                  <div className="text-[28px] font-bold text-[#F1F5F9]">5+</div>
                  <div className="text-[10px] text-[#64748B] uppercase tracking-[1.5px] mt-0.5">Projekata</div>
                </div>
                <div>
                  <div className="text-[28px] font-bold text-[#F1F5F9]">100%</div>
                  <div className="text-[10px] text-[#64748B] uppercase tracking-[1.5px] mt-0.5">Zadovoljstvo</div>
                </div>
                <div>
                  <div className="text-[28px] font-bold text-[#F1F5F9]">3x</div>
                  <div className="text-[10px] text-[#64748B] uppercase tracking-[1.5px] mt-0.5">Brže od WP</div>
                </div>
              </div>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-[14px] p-5 hover:border-white/15 hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-[rgba(99,102,241,0.15)] text-[#A5B4FC] flex items-center justify-center mb-2.5 text-base">⚡</div>
              <h4 className="text-[14px] font-semibold text-[#F1F5F9] mb-0.5">Performanse</h4>
              <p className="text-[12px] text-[#64748B] leading-snug">Lighthouse 95+ na svim metrikama</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-[14px] p-5 hover:border-white/15 hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-[rgba(56,189,248,0.15)] text-[#38BDF8] flex items-center justify-center mb-2.5 text-base">🔍</div>
              <h4 className="text-[14px] font-semibold text-[#F1F5F9] mb-0.5">SEO Ready</h4>
              <p className="text-[12px] text-[#64748B] leading-snug">Optimizirano za Google od prvog dana</p>
            </div>
            <div className="col-span-2 bg-white/[0.04] border border-white/[0.08] rounded-[14px] p-5 hover:border-white/15 transition-all duration-300">
              <p className="text-[11px] text-[#475569] font-mono mb-2.5">// Tech stack koji koristimo</p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="py-1 px-2.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-[11px] text-[#64748B] font-mono hover:border-indigo-500/40 hover:text-[#A5B4FC] transition-all"
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
