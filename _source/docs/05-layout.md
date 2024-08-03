---
title: Layout
---
Layout with Grease is handled primarily by `grid` and `flex` utilties. Both are opt-in, which makes it easy to mix in more specific layout needs (or wholesale replace with a different approach). Use `margin` and `padding` utilities to finnesse interplay between elements.

### Grid

Rapidly compose responsive layouts with an infinitely nestable 12 column+2 "bleed" column grid that collapses to 1 column +2 bleed columns @small. Add the `.grid` class to a parent container to opt in.

```html
<section class="grid">
  <div class="start-1 span-6"></div>
  <div class="start-auto bleed-end"></div>
</section>

<section class="grid">
  <div class="span-1/3"></div>
  <div class="span-1/3"></div>
  <div class="span-1/3"></div>
</section>
```

#### Grid children

- `.start-{1-12/auto}` sets the column start positon @md+
- `.span-{1-12}` sets how many columns the element spans at @medium+
- `.bleed`, `.bleed-{start/end}` makes elements stick to page edges @sm+
- `.place-{start/center/end}` set placement of content within a grid

### Flex

Add the `.flex` or `.inline-flex` class to a parent container to opt in.

- `.gap-{sm/md/lg}` sets row and column gap
- `.column-gap-{sm/md/lg}` sets column gap
- `.align-items-{start/center/end}` sets alignment
- `.justify-{start/center/between/end}` sets justification
- `.no-wrap` prevents items from wrapping
- `.column` switches to a vertical orientation
- Append `@sm` or `@md` to properties to apply at specific breakpoints

### Margin

- `.mt-{0/xs-xxl/flex}` sets block start margin
- `.mb-{0/xs-xxl/flex}` sets block end margin
- `.ml-{0/xs-xxl/flex}` sets inline start margin
- `.mr-{0/xs-xxl/flex}` sets inline end margin
- Prepend `-` to set negative margin
- Append `@md` to apply at medium+

### Padding

- `.pt-{0/xs-xxl/flex}` sets block start padding
- `.pb-{0/xs-xxl/flex}` sets block end padding
- `.pl-{0/xs-xxl/flex}` sets inline start padding
- `.pr-{0/xs-xxl/flex}` sets inline end padding
- Append `@md` to apply at medium+