module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      max: '1111px',
    },
    colors: {
        peach: "rgb(231, 129, 107)",
        peachLight: "rgb(255, 173, 155)",
        black: "rgb(29, 28, 30)",
        greyDark: "rgb(51, 49, 54)",
        greyLight: "rgb(241, 243, 245)",
    },
    fontFamily: {
      jost: ["jost", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
