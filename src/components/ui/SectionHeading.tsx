"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  as?: "h2" | "h3";
  id?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className = "",
  as: Component = "h2",
  id,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <Component
        id={id}
        className="font-display font-bold text-primary dark:text-white text-3xl sm:text-4xl md:text-[2.5rem] tracking-tight"
      >
        {title}
      </Component>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary dark:text-slate-300 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
