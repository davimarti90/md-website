import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {
    colors: { mdYellow: "#FFD54A", mdGold: "#C8A94A", mdDark: "#0E0E10", mdGray: "#1C1C20" },
    boxShadow: { md: "0 10px 25px rgba(0,0,0,0.25)" }
  }},
  plugins: []
};
export default config;