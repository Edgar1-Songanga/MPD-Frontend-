// Placeholder for tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3B",
        slate: "#1C2B3A",
        gold: "#C9A24E",
        background: "#F5F7FA"
      }
    }
  },
  plugins: []
};

export default config;
