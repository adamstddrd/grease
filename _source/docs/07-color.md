---
title: Color & opacity
---
Grease includes a fully featured color system built around modern features like [relative color](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors), [light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark), and [color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix) that lets you implement page themes, component themes, and light/dark mode without having to micro-manage color. Here's how it works:
1. Set your key colors, like `--primary`, `--secondary`, and `--neutral` in `@root.css`. These colors, along with `--50` to `--900` tint & shade presets form your base color system.
2. Create color "presets" like `--color-text`, `--color-bg`, etc with baked in light and dark support, and use them liberally to reduce micro-management and make theme-friendly components. To define presets, use relative color syntax along with light-dark(), like so:
```
--color-text: light-dark(
  oklch(from var(--primary) var(--700)),
  oklch(from var(--primary) var(--300) / 50%)
)
```
3. Make component-level exceptions by using the same strategy above. Remember that you can always use `calc()` expressions instead of tint & shade presents, like so:
```
border-color: light-dark(
  oklch(from var(--secondary) calc(l * 1.5) c h),
  oklch(from var(--secondary) calc(l / 1.5) c h)
)
```
4. Use color and opacity utilities to make context-specific adjustments and one-offs.
5. Create additional themes by creating a class in `css/_base/themes.css` that redefines your base colors and your color presets. Add the class to the HTML element using the `theme` front matter key for a page-level theme, or to elements for component-level theming. You can also use `.light` or `.dark` to force light or dark mode at the page or component level.

### Color & opacity utilities

- `.color` does nothing on it's own; use with modifiers below
- `.--{text/bg/border/accent}` sets a remap target
- `.--use-{text/bg/border/accent}` remaps to a different part's color
- `.--{primary/secondary/neutral}-{50-900}` remaps to a specific color
- `.set-{text/bg}` sets color
- `.text-{10-90}` adjusts text opacity
- `.bg-{10-90}` adjusts background opacity
- `.border-{10-90}` adjusts border opacity