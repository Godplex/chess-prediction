import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const colors = {
  background: "#ffffff", // Color especificado
  foreground: "#261e1a", // Color especificado
  focus: "#5d87d4", // Color especificado
  primary: {
    "50": "#f2f6fc",
    "100": "#e1eaf8",
    "200": "#d0dff4",
    "300": "#a6c4ea",
    "400": "#7ca5de",
    "500": "#5d87d4",
    "600": "#496cc7",
    "700": "#3f5bb6",
    "800": "#384b95",
    "900": "#314177",
    "950": "#222a49",
    DEFAULT: "#5d87d4",
  },
  secondary: {
    "50": "#f4f2f2",
    "100": "#e2e0df",
    "200": "#c7c2c1",
    "300": "#a79e9d",
    "400": "#8e8281",
    "500": "#7f7373",
    "600": "#6c6262",
    "700": "#574f50",
    "800": "#4d4647",
    "900": "#443f41",
    "950": "#262223",
    DEFAULT: "#262223",
  },
  complementary: {
    "50": "#f6f6f7",
    "100": "#eef0f1",
    "200": "#e0e3e5",
    "300": "#cdd0d4",
    "400": "#b8bcc1",
    "500": "#a4a9b0",
    "600": "#9497a0",
    "700": "#7b7e87",
    "800": "#65676e",
    "900": "#54565b",
    "950": "#313235",
    DEFAULT: "#a4a9b0", // Azul Marino
  },
};

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["Merriweather", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors,
        },
      },
    }),
  ],
};

export default config;
