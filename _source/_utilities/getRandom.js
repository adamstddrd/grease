/* ----------------------------------------------------------------------------
return a random item from a collection, excluding the current page
Liquid: {% assign foo = collections.bar | getRandom: page %}
---------------------------------------------------------------------------- */
const getRandom = (items, avoid) => {
  let selected = items[Math.floor(Math.random() * items.length)];
  while (selected.url === avoid.url) {
    selected = items[Math.floor(Math.random() * items.length)];
  }
  return selected;
};

module.exports = getRandom;
