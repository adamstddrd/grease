/* ----------------------------------------------------------------------------
renders Markdown into HTML
Liquid: {{ foo | markdownify }}
---------------------------------------------------------------------------- */
const markdownIt = require('markdown-it')({
  html: true,
  typographer: true,
});

const markdownify = (value) => markdownIt.render(value);

module.exports = markdownify;
