/* ----------------------------------------------------------------------------
process CSS tag pair and add it to a <style> tag in the page head
{% style %}.foo { bar: fizz;}{% endstyle %}
---------------------------------------------------------------------------- */
const lighting = require('lightningcss');

module.exports = function style(content) {
  const targets = { future: (1) }; // enables draft syntaxes
  const result = lighting.transform({
    code: Buffer.from(content),
    minify: true,
    drafts: {
      customMedia: true,
      nesting: true,
    },
    targets,
  });
  this.page.style = result.code.toString('utf8');
  return '';
};
