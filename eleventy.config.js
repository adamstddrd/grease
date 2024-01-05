import markdownIt from 'markdown-it';
import esbuild from './_source/_utilities/esbuild.js';
import lightingcss from './_source/_utilities/lightningcss.js';
import image from './_source/_utilities/image.js';
import style from './_source/_utilities/style.js';
import setVar from './_source/_utilities/setVar.js';
import fullDate from './_source/_utilities/fullDate.js';
import getRandom from './_source/_utilities/getRandom.js';
import markdownify from './_source/_utilities/markdownify.js';
import sortBy from './_source/_utilities/sortBy.js';
import where from './_source/_utilities/where.js';

export default async function (eleventyConfig) {
  /* --------------------------------------------------------------------------
  Plugins, shortcodes, filters
  -------------------------------------------------------------------------- */
  eleventyConfig.addPlugin(esbuild);
  eleventyConfig.addPlugin(lightingcss);
  eleventyConfig.addShortcode('image', image);
  eleventyConfig.addPairedShortcode('setVar', setVar);
  eleventyConfig.addPairedShortcode('style', style);
  eleventyConfig.addFilter('fullDate', fullDate);
  eleventyConfig.addFilter('getRandom', getRandom);
  eleventyConfig.addFilter('markdownify', markdownify);
  eleventyConfig.addFilter('sortBy', sortBy);
  eleventyConfig.addFilter('where', where);

  /* --------------------------------------------------------------------------
  MarkdownIt settings
  -------------------------------------------------------------------------- */
  const markdownItOptions = {
    html: true,
    typographer: true,
  };
  eleventyConfig.setLibrary('md', markdownIt(markdownItOptions));

  /* --------------------------------------------------------------------------
  Files & folders
  -------------------------------------------------------------------------- */
  eleventyConfig.addPassthroughCopy('_source/assets/fonts');
  eleventyConfig.addPassthroughCopy('_source/assets/images');

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
