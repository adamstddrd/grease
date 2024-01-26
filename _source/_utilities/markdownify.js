/* ----------------------------------------------------------------------------
renders Markdown into HTML
Liquid: {{ foo | markdownify }}
---------------------------------------------------------------------------- */
import markdownIt from 'markdown-it';

export default function markdownify(value) {
  const mdIt = markdownIt({
    html: true,
    typographer: true,
  });
  return mdIt.render(value);
}
