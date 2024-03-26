/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        1100: "1100px",
        800: "800px",
        "48%": "48%",
      },
      colors: {
        "light-green": "#c7d8dc",
        "medium-green": "#5f8d8f",
      },
    },
  },
  plugins: [],
};
