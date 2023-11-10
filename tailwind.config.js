/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'bender': ['bender','ui-sans-serif', 'system-ui'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#ffffff",
          },
        },
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        16: "4rem",
      },
      maxHeight: {
        16: "4rem",
      },
      colors: {
        tan: {
          50: "#faf7f2",
          100: "#f4ede0",
          200: "#e9d9bf",
          300: "#d4b483",
          400: "#cba06c",
          500: "#c0884f",
          600: "#b27444",
          700: "#945c3a",
          800: "#784b34",
          900: "#613f2d",
          950: "#342016",
        },
        "baltic-sea": {
          50: "#f6f6f9",
          100: "#ececf2",
          200: "#d6d6e1",
          300: "#b2b3c7",
          400: "#888ba8",
          500: "#696c8e",
          600: "#545675",
          700: "#45465f",
          800: "#3b3c51",
          900: "#353545",
          950: "#20202a",
        },
        "dark-mode": "#40444b",
      },
    },
  },
  plugins: [],
}

