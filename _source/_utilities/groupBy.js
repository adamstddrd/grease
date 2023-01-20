/* ----------------------------------------------------------------------------
group items in a collection by an arbitrary key
Liquid: {% assign foo = collections.bar | groupBy: "fizz" %}
---------------------------------------------------------------------------- */

const groupBy = (array, key) => {
  const get = (entry) => key.split('.').reduce((acc, key) => acc[key], entry);

  const map = array.reduce((acc, entry) => {
    const value = get(entry);
    if (typeof acc[value] === 'undefined') {
      acc[value] = [];
    }
    acc[value].push(entry);
    return acc;
  }, {});

  return Object.keys(map).reduce(
    (acc, key) => [...acc, { name: key, items: map[key] }],
    [],
  );
};

module.exports = groupBy;
