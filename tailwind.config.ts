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
      textAlign: {
        justify: "justify",
      },
      screens: {
        "max-980": { max: "980px" },
        "max-680": { max: "680px" },
      },
      colors: {
        "light-bg-color": "var(--cream-color)",
        "dark-cream-color": "var(--dark-cream-color)",
        "btn-primary-color": "var(--color-btn-primary)",
        "dark-bg-primary": "var(--dark-bg-primary)",
        "purple-color": "var(--purple-color)",
        "gray-color": "var(--gray-color)",
        "green-color": "var(--green-color)",
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
        fadeUpIn: {
          "0%": { opacity: "0", transform: "translateY(-100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1.5s ease-in-out forwards",
        fadeRightIn: "fadeRightIn 1.5s ease-in-out forwards",
        fadeLeftIn: "fadeLeftIn 1.5s ease-in-out forwards",
        fadeUpIn: "fadeUpIn 1.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
