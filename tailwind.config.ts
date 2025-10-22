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
        // Fondo claro
        darkBg: "#F3F4F6", // gris claro (antes era #131424)
        // Usabas "secondary" para textos/acentos → ahora negro
        secondary: "#111111", // negro (podés usar "#000000" si querés más pleno)
        // Opcional: neutros
        neutralBorder: "#cececeff",
      },
      backgroundImage: {
        // si no querés tinte, dejalo en 'none' y NO uses la clase
        "gradient-cover": "none",
      },
    },
  },
  plugins: [],
};
export default config;
