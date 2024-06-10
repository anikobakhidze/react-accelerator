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
        "light-bg-color": "var(--cream-color)",
        "btn-primary-color": "var(--color-btn-primary)",
        "dark-bg-primary": "var(--dark-bg-primary)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
