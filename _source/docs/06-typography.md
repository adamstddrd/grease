---
title: Typography
---
Grease uses a semi-fluid type system that attempts to do most of the heavy-lifting for you. Set `--size-base`, `--size-scale-sm`, and `--size-scale-md` in `@root.css` and Grease takes it from there. Line height defaults to `--leading-fluid`, which decreases as type size increases. A secondary step-based system steps in when you need fine-grained control.

### Typographic utilities

- `.size-{xxxs-xxxxl}` adjusts font size
- `.weight-{200-800}` adjusts font weight
- `.measure-{xs-xl}` limits width to a maximum number of character
- `{.left/.center/.right}` changes text alignment
- `.leading-{flush/xxs-lg}` adjusts line height
- `.tracking-{sm-xl}` adjusts letter spacing
- `.balance` attempts to balance multiple lines of text
- `.italic`, `.uppercase`, `.unlisted`,  `.undecorated` do what they suggest