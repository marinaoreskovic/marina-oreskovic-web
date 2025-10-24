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
        darkBg: "#F3F4F6",
        secondary: "#111111", 
        neutralBorder: "#cececeff",
      },
      backgroundImage: {
        "gradient-cover": "none",
      },
    },
  },
  plugins: [],
};
export default config;
