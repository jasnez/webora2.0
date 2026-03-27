"use client";

import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants = {
  primary: "bg-neutral-900 text-white hover:bg-neutral-800",
  secondary: "bg-brand-500 text-white hover:bg-brand-600",
  outline: "border border-neutral-300 text-neutral-900 hover:bg-neutral-50",
  white: "bg-white text-neutral-900 hover:bg-neutral-100",
  ghost: "text-neutral-700 hover:bg-neutral-100",
} as const;

const sizes = {
  sm: "text-sm px-4 py-2 rounded",
  md: "text-base px-6 py-3 rounded-lg",
  lg: "text-base px-8 py-4 rounded-lg font-semibold",
} as const;

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  external,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-60 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return external ? (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
