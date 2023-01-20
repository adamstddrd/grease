/* ----------------------------------------------------------------------------
returns true if an entry belongs to a specific collection
Liquid: {% assign foo = entry.data.tags | hasTag: "bar" %}
---------------------------------------------------------------------------- */

const hasTag = (tags, tag) => {
  tags.includes(tag);
};

module.exports = hasTag;
