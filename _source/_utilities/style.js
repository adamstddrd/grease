/* ----------------------------------------------------------------------------
process CSS tag pair and add it to a <style> tag in the page head
{% style %}.foo { bar: fizz;}{% endstyle %}
---------------------------------------------------------------------------- */
import { transform, Features } from 'lightningcss';

export default function style(content) {
  const targets = { future: (1) }; // enables draft syntaxes
  const result = transform({
    code: Buffer.from(content),
    minify: true,
    include: Features.Nesting,
    drafts: { customMedia: true },
    targets,
  });
  this.page.style = result.code.toString('utf8');
  return '';
}
