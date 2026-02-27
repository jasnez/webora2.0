"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "section";
}

export function Card({
  children,
  className = "",
  hover = true,
  as: Wrapper = "div",
}: CardProps) {
  const Component = motion[Wrapper];

  return (
    <Component
      className={clsx(
        "rounded-card bg-white border border-border p-6 md:p-8 transition-all duration-300",
        hover &&
          "hover:shadow-soft-lg hover:-translate-y-1 hover:border-accent/20",
        className
      )}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </Component>
  );
}

interface CardIconProps {
  children: React.ReactNode;
  className?: string;
}

export function CardIcon({ children, className = "" }: CardIconProps) {
  return (
    <div
      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-5 ${className}`}
      aria-hidden
    >
      {children}
    </div>
  );
}
