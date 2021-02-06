/* ----------------------------------------------------------------------------
generate an excerpt from the content of a page
Liquid: {{ foo.templateContent | excerpt }}
---------------------------------------------------------------------------- */
module.exports = {

  excerpt: (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, '');
    return `${content.substr(0, content.lastIndexOf(' ', 200))}...`;
  },

};
