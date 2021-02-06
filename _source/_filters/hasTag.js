/* ----------------------------------------------------------------------------
returns true if an entry belongs to a specific collection
Liquid: {% assign foo = entry.data.tags | hasTag: "bar" %}
---------------------------------------------------------------------------- */
module.exports = {

  hasTag: (tags, tag) => tags.includes(tag),

};
