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
        primary: "#166534",
        accent: "#2563EB",
        "accent-light": "#60A5FA",
        success: "#22C55E",
        surface: "#F8FAFC",
        "text-primary": "#0F172A",
        "text-secondary": "#475569",
        border: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        section: "6rem",
        "section-lg": "8rem",
      },
      borderRadius: {
        card: "12px",
        button: "8px",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(15, 23, 42, 0.07), 0 10px 20px -2px rgba(15, 23, 42, 0.04)",
        "soft-lg":
          "0 10px 40px -10px rgba(15, 23, 42, 0.12), 0 4px 15px -3px rgba(15, 23, 42, 0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
