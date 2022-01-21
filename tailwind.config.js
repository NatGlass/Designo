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
    extend: {
      backgroundImage: {
        'web-small': "url('./src/assets/home/desktop/image-web-design-small.jpg')",
        'web-large': "url('./src/assets/home/desktop/image-web-design-large.jpg')",
        'app': "url('./src/assets/home/desktop/image-app-design.jpg')",
        'graphic': "url('./src/assets/home/desktop/image-graphic-design.jpg')",
        'icon': "linear-gradient(90deg, rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);",
      },
    },
  },
  plugins: [],
}
