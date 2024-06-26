/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaty: "#1565D8",
        dark: {
          light: "#5A7184",
          hard: '#0D2436',
          soft: "#183B56",
        },
      },
     fontFamily: {
       Opensans: ["'Open Sans'", "sans-serif"],
       Roboto: ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [],
};