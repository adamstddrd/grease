/* ----------------------------------------------------------------------------
the number of words contained in the passed content
---------------------------------------------------------------------------- */
module.exports = function numberOfWords(content) {
  return content.split(/\s+/g).length;
};
