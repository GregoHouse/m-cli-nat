/** @type {import('tailwindcss').Con fig} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      background_login: "#203144",
      black: "#000000",
      button_sesion_color: "#0075F8",
      white: "#FFFFFF",
      linear_gradient1: "#F2AE32",
      linear_gradient2: "#F3B928",
      error_inut_color: "#D33B3B",
      grey: "#657689",
      grey5_6: "#676666",
      white_text: "#F9F9F9F0",
      color_border: "E0E0E0"
    }
  },
  plugins: [],
}

