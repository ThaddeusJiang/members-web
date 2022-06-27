module.exports = {
  // we don't purge css since we use micro-frontends
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        // TODO: manage this in npm package
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#fc6d26",
          info: "#777FFF",
          success: "#73d13d",
          warning: "#ffc53d",
          error: "#FF1111",
          "base-100": "#F7F7FA",
        },
      },
    ],
  },
};
