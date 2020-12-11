/* ----------------------------------------------------------------------------
filter collection by a key, like Jekyll's "where" filter
---------------------------------------------------------------------------- */
module.exports = function where(array, key, value) {
  return array.filter((item) => {
    const data = item && item.data ? item.data : item;
    return typeof value === 'undefined' ? key in data : data[key] === value;
  });
};
