/* ----------------------------------------------------------------------------
offset the starting point in a collection
Liquid: {% assign foo = collections.bar | offset: 5 %}
---------------------------------------------------------------------------- */
module.exports = {

  offset: (collection, offset) => collection.slice(offset),

};
