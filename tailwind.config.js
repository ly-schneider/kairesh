/** @type {Partial<CustomThemeConfig & {extend: Partial<CustomThemeConfig>}> & DefaultTheme} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    screens: {
      footer: "850px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        effra: "var(--effra)",
        anek: "var(--anek)",
        nunitoSans: "var(--nunito-sans)",
      },
    },
  },
  plugins: [],
};
