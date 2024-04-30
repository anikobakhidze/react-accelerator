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
        "medium-green": "#4abca9",
        "dark-green": "#1c5858",
        "dark-orange": "var(--orange)",
        "medium-orange": "var(--medium-orange)",
        "light-orange": "var(--light-orange)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
