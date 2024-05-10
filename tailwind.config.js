/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
      logo: ["Pacifico", "cursive"],
    },
    colors: {
      black: "#1d1d1d",
      white: "#F9FAFB",
    },
    extend: {
      colors: {
        primary: "#4262FF",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
