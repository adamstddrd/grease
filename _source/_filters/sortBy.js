/* ----------------------------------------------------------------------------
sort collection by an arbitrary key
Liquid: {% assign foo = collections.bar | sortBy: "fizz" %}
---------------------------------------------------------------------------- */
module.exports = {

  sortBy: (values, key) => {
    const vals = [...values];
    return vals.sort((a, b) => Math.sign(a.data[key] - b.data[key]));
  },

};
