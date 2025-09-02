import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mdDark: "#0B0B0E",
        mdGray: "#111217",
        mdGold: "#D4AF37",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,.08), 0 8px 30px rgba(212,175,55,.15)",
      },
    },
  },
  safelist: [
    { pattern: /bg-(black|white)\/\d{1,3}/ },
    { pattern: /object-(cover|contain|center)/ },
    { pattern: /min-h-\[.*\]/ },
  ],
};
export default config;
