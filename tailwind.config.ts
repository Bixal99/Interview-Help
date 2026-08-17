import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        cobalt: "rgb(var(--cobalt) / <alpha-value>)",
      },
      boxShadow: {
        soft: "0 22px 60px -35px rgba(15, 23, 42, .28)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
