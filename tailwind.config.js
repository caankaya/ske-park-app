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
      warning: "rgb(239 68 68)",
      warninghover: "#fca5a5",
      info: "#22d3ee",
      infohover: "#0891b2",
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
