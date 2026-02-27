import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Premium Tech Authority palette */
        "bg-dark": "#0B0F19",
        "surface-dark": "#111827",
        accent: "#2563EB",
        "accent-hover": "#1D4ED8",
        "accent-cyan": "#06B6D4",
        success: "#10B981",
        "white-text": "#F9FAFB",
        "text-secondary": "#9CA3AF",
        "text-muted": "#6B7280",
        "border-dark": "#1F2937",
        /* Legacy / light mode */
        primary: "#166534",
        surface: "#F8FAFC",
        "text-primary": "#0F172A",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1120px",
      },
      spacing: {
        section: "6rem",
        "section-lg": "8rem",
        "section-xl": "96px",
        "22": "5.5rem",
      },
      padding: {
        "section-mobile": "48px",
        "section-tablet": "64px",
        "section-desktop": "96px",
      },
      borderRadius: {
        card: "16px",
        button: "12px",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(15, 23, 42, 0.07), 0 10px 20px -2px rgba(15, 23, 42, 0.04)",
        "soft-lg":
          "0 10px 40px -10px rgba(15, 23, 42, 0.12), 0 4px 15px -3px rgba(15, 23, 42, 0.06)",
        "cta": "0 4px 14px rgba(37, 99, 235, 0.4)",
        "cta-hover": "0 6px 20px rgba(37, 99, 235, 0.5)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "check-pop": "checkPop 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        checkPop: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
