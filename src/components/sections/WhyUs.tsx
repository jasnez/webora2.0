"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUs() {
  return (
    <section
      id="zasto-mi"
      className="bg-white py-20 md:py-28 relative scroll-mt-24 md:scroll-mt-32"
      aria-labelledby="why-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden />
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          id="why-heading"
          label="Prednosti"
          title={WHY_US.title}
          subtitle="Ono što nas izdvaja od ostalih."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_US.items.map((r, i) => (
            <motion.div
              key={r.title}
              className="bg-[#FAFBFF] border border-slate-200 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 hover:border-indigo-200 transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              <div className="text-2xl mb-3">{r.icon}</div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                {r.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
