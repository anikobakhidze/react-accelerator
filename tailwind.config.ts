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
        "dark-cream-color": "var(--dark-cream-color)",
        "btn-primary-color": "var(--color-btn-primary)",
        "dark-bg-primary": "var(--dark-bg-primary)",
        "dark-medium-bg": "var(--medium-dark-bg)",
        "light-green-color": "var(--light-green-color)",
        "gray-color": "var(--gray-color)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeRightIn: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeLeftIn: {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1.5s ease-in-out forwards",
        fadeRightIn: "fadeRightIn 1.5s ease-in-out forwards",
        fadeLeftIn: "fadeLeftIn 1.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
