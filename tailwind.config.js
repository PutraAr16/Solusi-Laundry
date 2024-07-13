/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#1D4E9D",
        "secondary-blue": "#00A2E9",
        "tersier-blue": "#BAD4FF",
        "bg": "#EFFEFF"
      },
      fontFamily: {
        "poppins": '"Poppins"',
        "inter": '"Inter"'
      }

    },
  },
  plugins: [],
});

