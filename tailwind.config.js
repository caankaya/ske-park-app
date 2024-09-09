/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#000",
      secondary: "#fff",
      base: "#f7f7f7",
      success: "rgb(34 197 94)",
      warning: "rgb(239 68 68)",
      info: "rgb(6 182 212)",
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
