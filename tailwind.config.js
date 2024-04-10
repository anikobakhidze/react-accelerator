/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        "dark-green": "#1c5858",
      },
    },
  },
  plugins: [],
};
