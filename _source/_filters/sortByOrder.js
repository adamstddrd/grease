/* ----------------------------------------------------------------------------
sort collection items by 'order' field
---------------------------------------------------------------------------- */
module.exports = function sortByOrder(values) {
  const vals = [...values];
  return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
};
