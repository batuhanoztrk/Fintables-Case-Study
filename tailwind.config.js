/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          light: "#FAFAFA",
        },
        gray: {
          100: "#edeff3",
          200: "#E4E4E7",
          300: "#d4d4d8",
        },
        blue: {
          DEFAULT: "#5FA4F9",
          light: "#d0e2ff",
          lighter: "#a6c8ff",
          primary: "#4589ff",
          base: "#0f62fe",
          dark: "#0043ce",
        },
        red: {
          light: "#fa4d56",
          DEFAULT: "#c7002f",
        },
        green: "#24a148",
        text: {
          primary: "#0a0a0a",
          secondary: "#00000080",
          hint: "#0000004d",
        },
        warning: {
          light: "#F59E0B",
          DEFAULT: "#D97706",
          dark: "#92400E",
        },
      },
    },
  },
  plugins: [],
};
