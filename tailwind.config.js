/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#F7FAFD",
        veryLightGreyBlue: "#DDE7EE",
        lightGreyBlue: "#E5EFFA",
        greyBlue: "#939CAD",
        blue: "#0A327B",
        darkGreyBlue: "#5E6778",
        veryDarkGreyBlue: "#1C202B",
        red: "#F65552",
      },
      fontFamily: {
        plusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 20px 60px rgba(73, 97, 168, 0.05)",
      },
    },
  },
  plugins: [],
};
