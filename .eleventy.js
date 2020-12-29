const fullDate = require('./_source/_filters/fullDate.js');
const markdownify = require('./_source/_filters/markdownify.js');
const slayWidows = require('./_source/_filters/slayWidows.js');
const sortBy = require('./_source/_filters/sortBy.js');
const where = require('./_source/_filters/where.js');

module.exports = function(eleventyConfig) {

  /* --------------------------------------------------------------------------
  filters
  -------------------------------------------------------------------------- */
  eleventyConfig.addFilter('fullDate', fullDate);
  eleventyConfig.addFilter('markdownify', markdownify);
  eleventyConfig.addFilter('slayWidows', slayWidows);
  eleventyConfig.addFilter('sortBy', sortBy);
  eleventyConfig.addFilter('where', where);

  /* --------------------------------------------------------------------------
  BrowserSync settings
  -------------------------------------------------------------------------- */
  eleventyConfig.setBrowserSyncConfig({
    files: [ // watch the files generated elsewhere
      '_public/assets/*.css',
      '_public/assets/*.js',
      '_public/assets',
      '!_public/assets/**/**.map'
    ],
    ui: false,
  });

  /* --------------------------------------------------------------------------
  MarkdownIt settings
  -------------------------------------------------------------------------- */
  let markdownIt = require('markdown-it');
  let markdownItOptions = {
    html: true, // allow HTML markup
    typographer: true // fancy quotes
  };

  /* --------------------------------------------------------------------------
  11ty settings
  -------------------------------------------------------------------------- */
  eleventyConfig.setLibrary('md', markdownIt(markdownItOptions));
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addPassthroughCopy({ '_source/_assets/fonts': 'assets/fonts' });
  eleventyConfig.addPassthroughCopy({ '_source/_assets/images': 'assets' });

  return {
    dir: {
      input: '_source',
      output: '_public',
      layouts: '_layouts',
      includes: '_includes'
    },
    templateFormats: ['html', 'md', 'liquid'],
    htmlTemplateEngine: 'liquid'
  };
};