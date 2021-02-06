/* ----------------------------------------------------------------------------
renders Markdown into HTML
Liquid: {{ foo | markdownify }}
---------------------------------------------------------------------------- */
const markdownIt = require('markdown-it')({
  html: true,
  typographer: true,
});

module.exports = {

  markdownify: (value) => markdownIt.render(value),

};
