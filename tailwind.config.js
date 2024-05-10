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
      backgroundImage: {
        "hero-slider-1": "url('/src/assets/sliders/slider-1.jpg')",
        "hero-slider-2": "url('/src/assets/sliders/slider-2.jpg')",
        "hero-slider-3": "url('/src/assets/sliders/slider-3.jpg')",
        "hero-slider-4": "url('/src/assets/sliders/slider-4.jpg')",
        "hero-slider-5": "url('/src/assets/sliders/slider-5.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
