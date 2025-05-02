---
title: Typography
---
Grease uses a semi-fluid type system that attempts to do most of the heavy-lifting for you. Set `--font-size-base`, `--font-size-scale-sm`, and `--font-size-scale-md` in `@root.css` and Grease takes it from there. Line height defaults to `--line-height-fluid`, which decreases as type size increases. A secondary step-based system steps in when you need fine-grained control.

### Typographic utilities

- `.font-size-{xxxs-xxxxl}` adjusts font size
- `.font-weight-{xs-xxl}` adjusts font weight
- `.line-length-{xs-xl}` limits width to a maximum number of character
- `.line-height-{flush/xxs-lg}` adjusts line height
- `.letter-spacing-{sm-xl}` adjusts letter spacing
- `.balance` and `.pretty` balance all lines and the last line of text
- `{.left/.center/.right}` changes text alignment
- `.italic`, `.uppercase`, `.unlisted`,  `.undecorated` do what they suggest