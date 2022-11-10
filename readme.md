# Grease

Grease is a website starter with a purpose; **make building high-performance, rock-solid websites fun, fast, and friction-free**. It uses [11ty](https://www.11ty.dev/), [PostCSS](https://postcss.org/), [esbuild](https://esbuild.github.io/) and [Netlify](https://www.netlify.com/), plus a lightweight, opinionated CSS architecture that takes most of the pain out of developing responsive websites. It includes everything you need to peg the needle on a Lighthouse test without getting bogged down in a heavy stack.

## Why Grease?
* **💪 painless performance** - Statically generated, progressively enhanced websites are wickedly fast, durable, and comparatively simple.
* **🕸 a standards-based approach** - Write CSS (with a sprinkle of upcoming CSS standards), Javascript, and markup that leverage features that come in the box with every modern browser.
* **💅 a simple, powerful CSS architecture** - Grease ships with [a tiny, opinionated CSS architecture](https://naughty-hamilton-fd6478.netlify.app) that blends styled defaults and a handful of functional CSS systems to handle most of your CSS layout needs.
* **⚡️ design in browser, fast** - Instead of a monolithic build process, Grease watches and builds HTML, CSS, and Javascript separately. It makes designing in browser fast and fun instead of a painful slog; even for sites with thousands of pages.
* **🧱 straightforward, modular build tools** - Grease uses small NPM scripts to power its build system. No middleware means you can directly use the full ecosystem of Node modules, and it’s easy to swap parts and tailor to the needs of your project.
* **🤠 unlimited, config-free css and js bundles** - Singular css and js bundles are a recipe for bloat on larger content sites. Grease treats every CSS and JS file that’s not in a folder starting with an underscore as an entrypoint so you can keep page size small without getting mired in build config or complex component-based systems.

## Getting set up for local dev
[Install Node](https://nodejs.org/en/) if you haven’t already. Once you’ve cloned this repo, run `npm install` to download the various dependencies. To run the local dev server, run `npm run serve`. Check your terminal output for the URL, but it’ll default to [http://localhost:8080](http://localhost:8080) unless that port is already in use.

### Working with CSS
Grease uses [PostCSS](https://postcss.org/) and the [PostCSS PresetEnv plugin](https://preset-env.cssdb.org/) that let’s you use future CSS today (in addition to back-filling rules and vendor prefixes for older browsers). You’ll definitely want to review the [draft CSS Nesting spec](https://drafts.csswg.org/css-nesting-1/) for syntax since it differs from SASS. Any CSS file you add to a directory that isn’t prefixed with an underscore is output as a separate file. `_source/_assets/css/pages` is already set up this way. Documentation for the functional CSS systems are baked into the site, at /docs.
