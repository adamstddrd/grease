/* ----------------------------------------------------------------------------
creates a responsive image
Liquid: {% image "file.png", "alt text", "class", "sizes" %}
---------------------------------------------------------------------------- */
const Image = require('@11ty/eleventy-img');

module.exports = {

  image: async (src, alt, cssClass = null, sizes = '(min-width: 45em) 50vw, 90vw') => {
    const filePath = `_source/_assets/images/${src}`;
    const classAttr = cssClass != null ? ` class="${cssClass}"` : '';
    const sizesAttr = sizes != null ? ` sizes="${sizes}"` : '';
    const metadata = await Image(filePath, {
      widths: [500, 1000, 1500, 2000],
      formats: ['webp', 'jpeg'],
      urlPath: '/assets/',
      outputDir: './_public/assets/',
      sharpJpegOptions: { quality: 60 },
      sharpWebpOptions: { quality: 40 },
    });
    const imgSrc = metadata.jpeg[metadata.jpeg.length - 1];

    return `<picture${classAttr}>
    ${Object.values(metadata).map((imageFormat) => `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map((entry) => entry.srcset).join(', ')}"${sizesAttr}>`).join('\n')}
      <img
        src="${imgSrc.url}"
        width="${imgSrc.width}"
        height="${imgSrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async">
    </picture>`;
  },

};
