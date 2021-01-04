/* ----------------------------------------------------------------------------
renders Markdown into HTML
---------------------------------------------------------------------------- */
const markdownIt = require('markdown-it')({
  html: true,
  typographer: true,
});

module.exports = function markdownify(value) {
  return markdownIt.render(value);
};
