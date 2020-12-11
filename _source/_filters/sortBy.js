/* ----------------------------------------------------------------------------
sort collection by an arbitrary key
---------------------------------------------------------------------------- */
module.exports = function sortBy(values, key) {
  const vals = [...values];
  return vals.sort((a, b) => Math.sign(a.data[key] - b.data[key]));
};
