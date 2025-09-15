/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        "source-serif": ['"Source Serif 4"', "serif"],
        "amatic-sc-regular": ['"Amatic SC"', "cursive"],
      },
    },
  },
  plugins: [],
};
