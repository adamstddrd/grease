/* ----------------------------------------------------------------------------
filter collection by a key, like Jekyll's "where" filter
Liquid: {% assign foo = collections.bar | where: "title", "fizz" %}
---------------------------------------------------------------------------- */

const where = (array, key, value) => array.filter((item) => {
  const data = item && item.data ? item.data : item;
  return typeof value === 'undefined' ? key in data : data[key] === value;
});

module.exports = where;
