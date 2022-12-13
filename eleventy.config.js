const markdownIt = require('markdown-it');
const fullDate = require('./_source/_utilities/fullDate.js');
const getRandom = require('./_source/_utilities/getRandom.js');
const setVar = require('./_source/_utilities/setVar.js');
const sortBy = require('./_source/_utilities/sortBy.js');
const where = require('./_source/_utilities/where.js');
const image = require('./_source/_utilities/image.js');
const style = require('./_source/_utilities/style.js');

module.exports = function (eleventyConfig) {
  /* --------------------------------------------------------------------------
  filters & shortcodes
  -------------------------------------------------------------------------- */
  eleventyConfig.addFilter('fullDate', fullDate);
  eleventyConfig.addFilter('getRandom', getRandom);
  eleventyConfig.addFilter('sortBy', sortBy);
  eleventyConfig.addFilter('where', where);
  eleventyConfig.addShortcode('image', image);
  eleventyConfig.addPairedShortcode('setVar', setVar);
  eleventyConfig.addPairedShortcode('style', style);

  /* --------------------------------------------------------------------------
  MarkdownIt settings
  -------------------------------------------------------------------------- */
  const markdownItOptions = {
    html: true, // allow HTML markup
    typographer: true, // fancy quotes
  };

  /* --------------------------------------------------------------------------
  11ty settings
  -------------------------------------------------------------------------- */
  eleventyConfig.setLibrary('md', markdownIt(markdownItOptions));
  eleventyConfig.addPassthroughCopy({ '_source/_assets/fonts': 'fonts' });
  eleventyConfig.addPassthroughCopy({ '_source/_assets/images': 'assets' });
  eleventyConfig.addWatchTarget('_source/_assets/css/');
  eleventyConfig.addWatchTarget('_source/_assets/js/');
  eleventyConfig.setServerOptions({ domdiff: false });
  eleventyConfig.setServerPassthroughCopyBehavior('copy');

  return {
    dir: {
      input: '_source',
      output: '_public',
      layouts: '_layouts',
      includes: '_includes',
    },
    templateFormats: ['html', 'md', 'liquid'],
    htmlTemplateEngine: 'liquid',
  };
};
