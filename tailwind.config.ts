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
        bg: "#050505",
        text: {
          DEFAULT: "#f0ede8",
          muted: "#6b7a8a",
          dim: "#2a3a4a",
        },
        cyan: {
          DEFAULT: "#00d4ff",
          low: "rgba(0,212,255,0.12)",
        },
        orange: {
          DEFAULT: "#ff6b35",
          low: "rgba(255,107,53,0.15)",
        },
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "monospace"],
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(5rem,14vw,13rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display": ["clamp(2.5rem,6vw,5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "2xs": ["0.6rem", { lineHeight: "1rem" }],
      },
    },
  },
  plugins: [],
};
export default config;
