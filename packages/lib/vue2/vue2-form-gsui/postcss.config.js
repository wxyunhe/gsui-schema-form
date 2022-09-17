module.exports = {
  plugins: [
    require('postcss-import')(),
    require("postcss-mixins"),
    require("postcss-nested"),
    require("postcss-preset-env")(),
    require('cssnano')({
      sourcemap: false,
      autoprefixer: false,
      safe: true,
      discardComments: {
        removeAll: true,
      },
      discardUnused: false,
      zindex: false,
    }),
  ],
};
