"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUs() {
  return (
    <section
      id="zasto-mi"
      className="bg-white py-22 relative scroll-mt-24"
      aria-labelledby="why-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" aria-hidden />
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          id="why-heading"
          label="Prednosti"
          title={WHY_US.title}
          subtitle="Ono što nas izdvaja od ostalih."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {WHY_US.items.map((r, i) => (
            <motion.div
              key={r.title}
              className="bg-[#FAFBFF] border border-[#E8ECF4] rounded-[14px] p-7 transition-all duration-300 group relative overflow-hidden hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 hover:border-[#C7D2FE]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#38BDF8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              <div className="text-2xl mb-3">{r.icon}</div>
              <h3 className="text-[15.5px] font-semibold text-[#0F172A] mb-1.5">
                {r.title}
              </h3>
              <p className="text-[13.5px] text-[#64748B] leading-[1.55]">
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
