---
title: Working with JS
---
Like with CSS, Grease supports config-free javascript bundles. A main bundle is included by default, and you can add JS files to `source/js` (or any sub-folder not prefixed by an underscore) to create a new bundles. Assign paths to `javascript` in template frontmatter to use them.

Grease is designed to use the web platform directly, and assumes ESM. Several custom elements are included; a scroll detector, an element that collapses and expands `details` elements at different viewport sizes, and an element that triggers animations on viewport entry.