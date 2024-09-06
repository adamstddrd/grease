---
title: Color & opacity
---
Grease includes a fully featured color system built around modern features like [relative color](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors), [light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark), and [color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix) that lets you implement page theme, component themes, and light/dark mode without having to micro-manage color. Here's how it works:
1. Update `--primary`, `--secondary`, and `--neutral` in `@root.css` to set base colors.
2. Set default element colors in light and dark mode by mapping colors and steps like `--primary` and `--300` to functional colors like `--color-text` using relative color.
3. Use functional colors in your components to create theme-friendly components, using `light-dark()` when you need to make a dark mode adjustment.
4. Use color and opacity utilities to make context-specific adjustments and one-offs.
5. Create additional themes by creating a class in `css/_base/themes.css` that redefines `--primary`, `--secondary`, `--neutral`, and the functional colors. Add the class to the HTML element using the `theme` front matter key for a page-level theme, or to elements for component-level theming. You can also use `.light` or `.dark` to force light or dark mode at the page or component level.

### Color & opacity utilities

- `.color` does nothing on it's own; use with modifiers below
- `.--{text/bg/border/accent}` sets a remap target
- `.--use-{text/bg/border/accent}` remaps to a different part's color
- `.--{primary/secondary/neutral}-{50-900}` remaps to a specific color
- `.set-{text/bg}` sets color
- `.text-{10-90}` adjusts text opacity
- `.bg-{10-90}` adjusts background opacity
- `.border-{10-90}` adjusts border opacity