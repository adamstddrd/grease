---
title: Working with CSS
---
Grease uses a practical, declarative approach to writing modern CSS, using three breakpoints (small, medium, large), and three [cascade layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer):

1. `base` is where you define the default presentation characteristics for your project. Tailoring the custom media queries, custom properties, typeface, and base elements alone should get you halfway there. A [kitchen sink demo](/kitchen-sink/) is included to make it easy to see the impact of your changes across a wide variety of elements.
2. `components` is where you define **commonly repeated objects** that live across your project. Components care little about their position on any given page.
3. `utilities` is for CSS that **manipulates elements and components**. Grease aims to cover the small subset of attributes that are highly variable (page position, type characteristics, spacing) as opposed to making every property available. This approaches delivers the key benefits of utility css (breaking the linear ratio between page count and lines of CSS, less repetition) without the tooling complexity of build-dependent approaches.

### Syntax, draft specs

Components in Grease use a modified [BEM syntax](https://getbem.com/introduction/), which uses a terse `block --modifier1 --modifier2` syntax instead of `block--modifier1 block--modifier2`.

[Lightning](https://lightningcss.dev/) is configured to transpile [draft custom media syntax](https://www.w3.org/TR/mediaqueries-5/#custom-mq), but nothing else. Adjust as need be for the project at hand.

### Breaking up CSS

Grease gives you three options for including CSS:

1. In the main bundle. Global stuff goes here.
2. As route-specific bundles. Add a CSS file to `source/css/pages` (or any folder not prefixed by an underscore) to create a new entrypoint. Assign the path to `stylesheet` in template frontmatter to use it.
3. As `style` tags. For critical CSS or page-specific one-offs, Grease includes an [11ty bundle](https://github.com/11ty/eleventy-plugin-bundle#usage) that processes CSS with Lightning and adds it to a style tag in the page head.