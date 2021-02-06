/* ----------------------------------------------------------------------------
limit the number of items returned in a collection
Liquid: {% assign foo = collections.bar | limit: 5 %}
---------------------------------------------------------------------------- */
module.exports = {

  limit: (collection, limit) => collection.slice(0, limit),

};
