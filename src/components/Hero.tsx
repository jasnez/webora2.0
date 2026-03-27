import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="section-spacing relative overflow-hidden scroll-mt-24 section-bg-base section-separator"
      id="hero"
      aria-labelledby="hero-title"
    >
      <div className="container-width relative">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="heading-width md:mx-0">
            <h1 id="hero-title" className="heading-1 text-neutral-900">
              {HERO.headlineShort}
            </h1>
            <p className="body-lg mt-6">
              Brze, sigurne i SEO-optimizirane web stranice za mala i srednja
              preduzeća. Besplatna procjena bez obaveze.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex min-h-[44px] items-center rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600"
              >
                {HERO.primaryCta}
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex min-h-[44px] items-center rounded-lg border border-neutral-200 px-5 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
              >
                {HERO.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-card">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/hero-right.png"
                  alt="Pregled web stranice na uređaju — brze stranice, SEO, konverzije"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1023px) 90vw, 560px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
