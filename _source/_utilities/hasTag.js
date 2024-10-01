/* ----------------------------------------------------------------------------
returns true if an entry belongs to a specific collection
Liquid: {% assign foo = entry.data.tags | hasTag: "bar" %}
---------------------------------------------------------------------------- */
export default function hasTag(tags, tag) {
  return tags.includes(tag);
}
