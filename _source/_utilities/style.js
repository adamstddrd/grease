/* ----------------------------------------------------------------------------
process CSS tag pair and add it to a <style> tag in the page head
{% css %}.foo { bar: fizz;}{% endcss %}
---------------------------------------------------------------------------- */
import { transform, Features } from 'lightningcss';

export default async function style(content) {
  const targets = { future: (1) }; // enables draft syntaxes
  const result = transform({
    code: Buffer.from(content),
    minify: true,
    include: Features.Nesting,
    drafts: { customMedia: true },
    targets,
  });
  const resultString = result.code.toString('utf8');
  return resultString;
}
