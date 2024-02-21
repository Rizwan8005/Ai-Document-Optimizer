/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "425px" },
      // => @media (max-width: 420px) { ... }
    },
    extend: {
      colors: {
        mainBg: "#FDFDFD",
        primary: "#E2E9FC",
        grey: "#414141",
        darkGrey: "#5A5A5A",
        lightGrey: "#565f70",
        converterColor: "#202020",
        disabledGrey: "#aaa",
        mainWhite: "#ffffff",
        mainDark: "#171717",
        bgGrey: "#f3f4f6",
        blue: "#EFF3FE",
        darkBlue: "#DFF4FF",
        pink: "#FFE8F3",
        ratingsColor: "#171717",
        success: "#05B368",
        decrease: "#ff302f",
        border: "#e4e4e4",
        inputBg: "#F1F1F1",
      },
      boxShadow: {
        "navbar-button": "0px 10px 50px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

