"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  variant?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
  id?: string;
}

export function SectionHeading({
  title,
  subtitle,
  label,
  variant = "light",
  align = "left",
  className = "",
  as: Component = "h2",
  id,
}: SectionHeadingProps) {
  const isDark = variant === "dark";
  const isLeft = align === "left";
  const labelClass = isDark
    ? `text-sm uppercase tracking-widest font-medium mb-3 flex items-center gap-2.5 ${isLeft ? "text-accent justify-start" : "text-accent justify-center"}`
    : `text-sm uppercase tracking-widest font-medium mb-3 flex items-center gap-2.5 ${isLeft ? "text-accent justify-start" : "text-accent justify-center"}`;
  const titleClass = isDark
    ? "font-display font-bold text-white-text text-3xl sm:text-4xl md:text-[2.5rem] tracking-tight"
    : "font-display font-bold text-slate-900 text-3xl sm:text-4xl md:text-[2.5rem] tracking-tight";
  const subtitleClass = isDark
    ? "mt-3 text-lg text-text-secondary leading-relaxed"
    : "mt-3 text-lg text-slate-500 leading-relaxed";

  return (
    <motion.div
      className={`${isLeft ? "text-left max-w-3xl mb-12 md:mb-16" : "text-center max-w-3xl mx-auto mb-12 md:mb-16"} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      {label && (
        <p className={labelClass}>
          <span className="w-5 h-px bg-accent flex-shrink-0" />
          {label}
        </p>
      )}
      <Component id={id} className={titleClass}>
        {title}
      </Component>
      {subtitle && <p className={subtitleClass}>{subtitle}</p>}
    </motion.div>
  );
}
