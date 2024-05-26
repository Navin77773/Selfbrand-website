/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
      "2xl": "1440px",
    },
    fontSize: {
      sm: "2.5rem",
      base: "3rem",
      lg: "6rem",
      xl: "7rem",
      "2xl": "8rem",
    },
    extend: {},
  },
  plugins: [],
};
