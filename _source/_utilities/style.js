/* ----------------------------------------------------------------------------
process CSS tag pair and add it to a <style> tag in the page head
{% style %}.foo { bar: fizz;}{% endstyle %}
---------------------------------------------------------------------------- */const postcss = require('postcss');
const nesting = require('postcss-nesting');
const customMedia = require('postcss-custom-media');
const csso = require('postcss-csso');

const style = (content) => {
  postcss([
    nesting,
    customMedia,
    csso({ restructure: false }),
  ]).process(content, { from: 'undefined' }).then((result) => {
    this.page.style = result;
  });
  return '';
};

module.exports = style;
