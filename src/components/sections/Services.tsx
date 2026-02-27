"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/lib/constants";

export function Services() {
  return (
    <section
      id="usluge"
      className="section-pad bg-bg-dark scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          id="services-heading"
          label="Usluge"
          title={SERVICES.title}
          subtitle={SERVICES.subtitle}
          variant="dark"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.packages.map((pkg) => (
            <article
              key={pkg.id}
              className="group relative bg-surface-dark border border-border-dark rounded-card p-6 transition-all duration-300 hover:shadow-soft-lg hover:scale-[1.02] hover:border-accent/30"
            >
              <div className="text-2xl mb-4">{pkg.icon}</div>
              <h3 className="text-lg font-semibold text-white-text mb-4">
                {pkg.title}
              </h3>
              <ul className="space-y-2 mb-6">
                {pkg.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm text-text-secondary flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link
                href="/usluge"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors group/link"
              >
                {CTA.learnMore}
                <span className="group-hover/link:translate-x-0.5 transition-transform" aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
