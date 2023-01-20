/* ----------------------------------------------------------------------------
add a non-breaking space between last two words
Liquid: {{ foo | slayWidows }}
---------------------------------------------------------------------------- */
const slayWidows = (value) => {
  const words = value.split(' ');
  if (words.length > 1) {
    words[words.length - 2] += `&nbsp;${words[words.length - 1]}`;
    words.pop();
  }
  return words.join(' ');
};

module.exports = slayWidows;
