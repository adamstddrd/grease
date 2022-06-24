module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: {
    'postcss-import-ext-glob': {},
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 1,
    },
    'postcss-csso': {
      restructure: false,
    },
  },
});
