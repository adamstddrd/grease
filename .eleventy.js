const glob = require('fast-glob');

module.exports = function(eleventyConfig) {

  /* --------------------------------------------------------------------------
  filters & shortcodes
  -------------------------------------------------------------------------- */
  glob.sync(['_source/_filters/*.js']).forEach(file => {
    let filters = require('./' + file);
    Object.keys(filters).forEach(name => eleventyConfig.addFilter(name, filters[name]));
  });

  glob.sync(['_source/_shortcodes/*.js']).forEach(file => {
    let shortcodes = require('./' + file);
    Object.keys(shortcodes).forEach(name => eleventyConfig.addShortcode(name, shortcodes[name]));
  });

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
    logPrefix: false,
    logFileChanges: false,
    ghostMode: false,
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
  eleventyConfig.addPassthroughCopy({ '_source/_assets/fonts': 'assets' });
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