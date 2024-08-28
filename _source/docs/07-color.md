---
title: Color & opacity
---
Grease includes a fully featured color system built around [relative color syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors) that lets you work with color in a flexible way without having to micro-manage color themes and light/dark modes. Here's how it works:
1. Update `--color-primary`, `--color-secondary`, and `--color-neutral` in `@root.css` to automatically update the corresponding 50-900 values.
2. Set default colors for elements in light and dark mode by mapping colors like `--color-primary-500` to "parts" like `--color-text`, `--color-bg`, `--color-accent`.
3. Use parts in your component definitions to create theme-friendly components, using the `--dark` custom media query when you need to make a dark mode adjustment.
4. Use color and opacity utilities to make context-specific adjustments and one-offs.
5. Create additional themes by adding a class to the HTML element that redefines `--color-primary`, `--color-secondary`, and `--color-neutral`.

### Color & opacity utilities

- `.color` does nothing on it's own; use with modifiers below
- `.--{text/bg/border/accent}` sets a remap target
- `.--use-{text/bg/border/accent}` remaps to a different part's color
- `.--use-{primary/secondary/neutral}-{50-900}` remaps to a specific color
- `.set-{text/bg}` sets color
- `.text-{10-90}` adjusts text opacity
- `.bg-{10-90}` adjusts background opacity
- `.border-{10-90}` adjusts border opacity