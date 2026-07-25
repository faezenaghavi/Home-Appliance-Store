import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // اتصال کلاس‌های weave- به متغیرهای CSS در globals.css
        weave: {
          dark: "var(--color-dark)",
          light: "var(--color-light)",
          accent: "var(--color-accent)",
          accentDark: "var(--color-accent-dark)",
          accentLight: "var(--color-accent-light)",
          cream: "var(--color-cream)",
          muted: "var(--color-muted)",
          border: "var(--color-muted)", // استفاده از خاکستری ملایم برای بوردرها
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;