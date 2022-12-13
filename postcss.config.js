module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: {
    'postcss-import-ext-glob': {},
    'postcss-import': {},
    'postcss-custom-media': {},
    'postcss-nesting': {},
    'postcss-csso': {
      restructure: false,
    },
  },
});
