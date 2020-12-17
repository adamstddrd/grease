/* ----------------------------------------------------------------------------
returns the number of words that the passed item contains
---------------------------------------------------------------------------- */
module.exports = function numberOfWords(content) {
  return content.split(/\s+/g).length;
};
