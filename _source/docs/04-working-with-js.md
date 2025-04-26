---
title: Working with JS
---
Like with CSS, Grease supports config-free javascript bundles. A main bundle is included by default, and you can add JS files to `source/js` (or any sub-folder not prefixed by an underscore) to create a new bundles. Assign paths to `javascript` in template frontmatter to use them.

Grease is designed to use the web platform directly, and assumes ESM. A few small-but-handy custom elements are included; an element that makes anchored popovers menus gracefully degrade in unsupported browsers, an element that makes `details` only act as such on mobile, an element that generates randomly positioned shapes that you can style, and an element that triggers custom animations when elements enter the viewport.