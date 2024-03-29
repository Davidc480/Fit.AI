/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      parpadeo: {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0.5 },
      },
      animation: {
        loading: "loading 9s forwards cubic-bezier(0, 0, 0, 0)",
        bounceFour: "bounce 1.2s ease-out 8 forwards",
      },
      colors: {
        SlateBlue: "rgba(52, 48, 111, 0.80)",
        lightBlue: "rgba(173, 216, 230)",
        darkGreen: "#004040",
        darkRose: "#C5356F",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
