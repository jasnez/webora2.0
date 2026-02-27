"use client";

import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section
      id="usluge"
      className="py-22 bg-white scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          id="services-heading"
          label="Usluge"
          title={SERVICES.title}
          subtitle={SERVICES.subtitle}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {SERVICES.items.map((service) => (
            <article
              key={service.id}
              className="group relative bg-white border border-[#E2E8F0] rounded-[14px] p-7 transition-all duration-300 overflow-hidden hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:border-[#CBD5E1]"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#38BDF8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-11 h-11 rounded-[10px] bg-[#EEF2FF] flex items-center justify-center mb-4 text-[20px] transition-all duration-300 group-hover:bg-[#6366F1]">
                <span className="group-hover:brightness-[10]">{service.emoji}</span>
              </div>
              <h3 className="text-[15.5px] font-semibold text-[#0F172A] mb-1.5">
                {service.title}
              </h3>
              <p className="text-[13.5px] text-[#64748B] leading-[1.55]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
