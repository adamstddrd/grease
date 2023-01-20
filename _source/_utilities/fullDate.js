/* ----------------------------------------------------------------------------
returns a formatted date - via https://stackoverflow.com/a/31615643
Liquid: {{ page.date | fullDate }}
---------------------------------------------------------------------------- */
const appendSuffix = (n) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

const fullDate = (value) => {
  const dateObject = new Date(value);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayWithSuffix = appendSuffix(dateObject.getDate());

  return `${months[dateObject.getMonth()]} ${dayWithSuffix} ${dateObject.getFullYear()}`;
};

module.exports = fullDate;
