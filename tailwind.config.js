/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        IBM: ["IBM Plex Mono", "Bebas Neue"]
      },
      colors: {
        "light-1": "#EEE9DA",
        "light-2": "#BDCDD6",
        "light-3": "#93BFCF",
        "light-4": "#6096B4",
        "dark-1": "#635985",
        "dark-2": "#443C68",
        "dark-3": "#393053",
        "dark-4": "#18122B"
      }
    }
  },

  plugins: [require("@tailwindcss/typography")]
}
