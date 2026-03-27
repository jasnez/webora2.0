import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f4ff",
          100: "#dce8ff",
          500: "#2563eb",
          600: "#1d4ed8",
          900: "#111827",
        },
        neutral: {
          50: "#F8F9FA",
          100: "#F2F3F4",
          200: "#E5E7EB",
          500: "#6B7280",
          700: "#374151",
          900: "#111827",
        },
      },
      spacing: {
        "2": "8px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
        "12": "48px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
        "30": "120px",
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1.5" }],
        sm: ["14px", { lineHeight: "1.6" }],
        base: ["16px", { lineHeight: "1.6" }],
        lg: ["18px", { lineHeight: "1.7" }],
        xl: ["20px", { lineHeight: "1.6" }],
        "2xl": ["24px", { lineHeight: "1.4" }],
        "3xl": ["28px", { lineHeight: "1.3" }],
        "4xl": ["32px", { lineHeight: "1.25" }],
        "5xl": ["40px", { lineHeight: "1.2" }],
        "6xl": ["56px", { lineHeight: "1.1" }],
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "640px",
        heading: "760px",
        content: "1200px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
        hover: "0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
