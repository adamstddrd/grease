/* ----------------------------------------------------------------------------
creates a responsive <img>
---------------------------------------------------------------------------- */
const Image = require('@11ty/eleventy-img');

module.exports = async function image(src, alt, cssClass = null, sizes = '90vw', loadingAttr = 'lazy') {
  const filePath = `_source/assets/images/${src}`;
  const metadata = await Image(filePath, {
    widths: [500, 1000, 1500, 2000, 2500, 3000],
    formats: ['webp'],
    urlPath: '/assets/images/',
    outputDir: './_public/assets/images/',
    sharpWebpOptions: { quality: 40 },
  });
  const format = metadata[Object.keys(metadata)[0]];
  const data = format[format.length - 1];

  return `<img
    ${cssClass != null ? `class="${cssClass}"` : ''}
    src="${data.url}"
    width="${data.width}"
    height="${data.height}"
    alt="${alt}"
    loading="${loadingAttr}"
    decoding="async"
    sizes="(max-width: 44.9em) ${sizes}"
    srcset="${Object.values(metadata).map((imageFormat) => imageFormat.map((entry) => entry.srcset).join(', '))}">`;
};
