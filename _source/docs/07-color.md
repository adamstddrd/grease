---
title: Color
---
Grease takes a structured, semantic approach to color. Hues are mapped to semantic variables like `--color-text`, `--color-sheet`, and `--color-accent` and assembled in color declarations with companion `--opacity-{text/sheet/accent}` variables.

Dark mode and alternate themes are implemented by redefining the color variables within those contexts. In practice, this approach means that you never have to micro-manage color at the component level.

### Color utilities

- `.{text/sheet/border}-color` sets a remap target
- `.use-{text/sheet/accent}` remaps the targeted color
- `.set-{text/sheet}` sets color
- `.text-{10-90}` adjusts text opacity
- `.sheet-{10-90}` adjusts sheet opacity
- `.border-{10-90}` adjusts border opacity