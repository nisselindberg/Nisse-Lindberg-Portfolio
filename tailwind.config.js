/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Miranda", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "Bricolage Grotesque",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        lexend: ["Lexend", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        brand: {
          500: "#a855f7", // Purple 500
          600: "#9333ea", // Purple 600
        },
      },
    },
  },
  plugins: [],
};
