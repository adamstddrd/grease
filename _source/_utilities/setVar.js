/* ----------------------------------------------------------------------------
pass content to a parent template in a slot-like fashion
{% setVar 'foo' %}<bar>fizz</bar>{% endsetVar %}
---------------------------------------------------------------------------- */

const setVar = (content, name) => {
  this.page[name] = content;
  return '';
};

module.exports = setVar;
