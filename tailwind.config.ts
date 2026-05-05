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
        bg: "var(--bg)",
        text: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)",
          dim: "var(--text-dim)",
        },
        cyan: {
          DEFAULT: "var(--cyan)",
          low: "var(--cyan-low)",
        },
        orange: {
          DEFAULT: "var(--orange)",
          low: "var(--orange-low)",
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
