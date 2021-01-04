# 11Kit

11Kit is a website starter with a purpose; **make building high-performance, rock-solid websites fun, fast, and friction-free**. It uses [11ty](https://www.11ty.dev/), [PostCSS](https://postcss.org/), [esbuild](https://esbuild.github.io/) and [Netlify](https://www.netlify.com/) under the hood, and also includes a lightweight, opinionated CSS architecture that takes most of the pain out of developing responsive websites. It includes everything you need to peg the needle on a Lighthouse test without getting bogged down in a heavy, overly-complicated tech stack.

## Why 11Kit?
* **💪 painless performance** - Statically generated, progressively enhanced websites are wickedly fast, incredibly durable, and comparatively simple. It’s not cheating, but it sure feels like it.
* **🕸 a standards-based approach** - With 11Kit, you write CSS (with a sprinkle of upcoming CSS standards), Javascript, and markup that leverage the features that come in the box with every modern browser.
* **💅 a simple and powerful CSS architecture** - 11Kit ships with a tiny, opinionated CSS architecture that blends styled defaults and a handful of functional CSS systems to handle most of your CSS layout needs. Page/section-specific stylesheets ensure a tiny per-page CSS footprint, even for very large sites.
* **⚡️ fast local development** - Instead of a monolithic build process, 11Kit watches and builds HTML, CSS, and Javascript separately. It makes designing in browser fast and fun instead of a painful slog; even for sites with thousands of pages.
* **🧱 straightforward, modular build tools** - 11Kit uses small NPM scripts to power its build system. No middleware means you can directly use the full ecosystem of Node modules, it’s easy to swap parts and tailor to the project at hand, and it all works great on your platform of choice.
* **🤠 unlimited, config-free css and js bundles** - Singular css and js bundles are a recipe for bloat on larger content sites. 11Kit treats every CSS and JS file that’s not in a folder starting with an underscore as an entrypoint so you can keep page size small without getting mired in build config. 
* **📑 less paperwork, more productivity** - With 11Kit, linters fix issues automatically when possible, browser prefixes and fallbacks are automatically applied, etc.
* **🍱 all the fixins’ production sites need** - Robust redirect support, sitemaps, support for excluding pages from search indexes, canonical URL support, a broken link checker, custom headers, a custom 404 page, etc.

## Getting set up for local dev
[Install Node](https://nodejs.org/en/) if you haven’t already. Once you’ve cloned this repo, run `npm install` to download the various dependencies. To run the local dev server, run `npm run serve`. Check your terminal output for the URL, but it’ll default to [http://localhost:8080](http://localhost:8080) unless that port is already in use.

### Working with CSS
11Kit uses [PostCSS](https://postcss.org/) and the [PostCSS PresetEnv plugin](https://preset-env.cssdb.org/) that let’s you use future CSS today (in addition to back-filling rules and vendor prefixes for older browsers). You’ll definitely want to review the [draft CSS Nesting spec](https://drafts.csswg.org/css-nesting-1/) for syntax since it differs from SASS. Any CSS file you add to the `_source/_assets/css/pages` directory will be output individually instead of being included in the main bundle. Documentation for the functional CSS systems are baked into the site, at /docs.

## Deploys
Any commit that you push to main will automatically be deployed to production (unless tests fail). If you don’t want that to happen, make a branch. Every branch gets its own staging URL. Similar to main, every push to that branch will trigger an automatic build.

## Configuring infrastructure
All of the configuration is stored in the `netlify.toml` file. Want to add a build plugin that runs a test? netlify.toml. Need to add headers? netlify.toml. Redirects? netlify.toml! [Take a look a the Netlify docs for details and syntax](https://docs.netlify.com/configure-builds/file-based-configuration/).
