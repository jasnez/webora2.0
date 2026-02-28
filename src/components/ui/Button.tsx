"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center font-semibold rounded-button min-h-touch cta-transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none";

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "text-white border-0",
    "bg-[var(--cta-primary-bg)] hover:bg-[var(--cta-primary-bg-hover)] active:bg-[var(--cta-primary-bg-active)]",
    "shadow-[var(--cta-primary-shadow)] hover:shadow-[var(--cta-primary-shadow-hover)] active:shadow-[var(--cta-primary-shadow)]",
    "hover:-translate-y-0.5 active:translate-y-0",
    "focus-visible:outline-accent focus-visible:outline-offset-2",
    "disabled:!bg-[var(--cta-disabled-bg)] disabled:!text-[var(--cta-disabled-text)] disabled:!shadow-none",
  ].join(" "),
  secondary: [
    "border-2 bg-transparent",
    "border-[var(--cta-secondary-border)] text-[var(--cta-secondary-text)]",
    "hover:bg-[var(--cta-secondary-bg-hover)] active:bg-[var(--cta-secondary-bg-hover)]",
    "hover:-translate-y-0.5 active:translate-y-0",
    "focus-visible:outline-accent focus-visible:outline-offset-2",
    "disabled:!border-[var(--cta-disabled-bg)] disabled:!text-[var(--cta-disabled-text)]",
  ].join(" "),
  ghost: [
    "border border-border-dark bg-transparent text-[var(--cta-ghost-text)]",
    "hover:bg-[var(--cta-ghost-bg-hover)] hover:text-white-text",
    "active:bg-[var(--cta-ghost-bg-hover)]",
    "hover:-translate-y-0.5 active:translate-y-0",
    "focus-visible:outline-accent focus-visible:outline-offset-2",
    "disabled:!text-[var(--cta-disabled-text)] disabled:!border-[var(--cta-disabled-bg)]",
  ].join(" "),
  destructive: [
    "text-white border-0",
    "bg-[var(--cta-destructive-bg)] hover:bg-[var(--cta-destructive-bg-hover)]",
    "hover:-translate-y-0.5 active:translate-y-0",
    "focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2",
    "disabled:!bg-[var(--cta-disabled-bg)] disabled:!text-[var(--cta-disabled-text)]",
  ].join(" "),
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-7 py-4 text-base",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      children,
      className,
      disabled,
      type,
      ...props
    },
    ref
  ) => {
    const combined = clsx(
      base,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href && !disabled) {
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
        type={type ?? "button"}
        className={combined}
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
