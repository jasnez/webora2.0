"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-success text-white hover:bg-emerald-600 shadow-soft hover:shadow-soft-lg border-0",
  secondary:
    "bg-indigo-500 text-white hover:bg-indigo-400 border-0 shadow-soft hover:shadow-soft-lg",
  outline:
    "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost:
    "bg-transparent text-primary hover:bg-surface border border-border",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-button",
  md: "px-6 py-3 text-base rounded-button",
  lg: "px-8 py-4 text-lg rounded-button",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-display font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:scale-[1.02] active:scale-[0.98]";
    const combined = clsx(base, variantStyles[variant], sizeStyles[size], className);

    if (href) {
      return (
        <Link
          href={href}
          className={combined}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        type="button"
        className={combined}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
