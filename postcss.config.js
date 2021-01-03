module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: {
    'postcss-import-ext-glob': {},
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 1,
      importFrom: '_source/_assets/css/_base/@root.css'
    },
    'cssnano': {},
  },
})
