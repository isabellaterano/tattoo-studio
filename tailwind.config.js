/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Slab", "sans-serif"],
      },
      colors: {
        pink: {
          950: "#CF3AD6",
        },
      },
    },
  },
  plugins: [],
};
