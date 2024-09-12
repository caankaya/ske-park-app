/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#000",
      secondary: "#fff",
      base: "#f7f7f7",
      success: "#4ade80",
      succeshover: "#86efac",
      warning: "#f97316",
      warninghover: "#c2410c",
      error: "rgb(239 68 68)",
      errorhover: "#fca5a5",
      info: "#22d3ee",
      infohover: "#0891b2",
      transparent: "transparent",
    },
    screens: {
      tablet: "769px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
