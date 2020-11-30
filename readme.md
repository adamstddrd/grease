# 11Kit

11Kit is a website starter designed to let you produce high-quality, high-performance websites quickly and easily. It uses [11ty](https://www.11ty.dev/), [Gulp](https://gulpjs.com/), and [Netlify](https://www.netlify.com/) under the hood, and also includes an opinionated CSS architecture that takes most of the pain out of developing responsive websites. It includes everything you need to peg the needle on a Lighthouse test without getting bogged down in a heavy, overly-complicated tech stack.

One of the major issues with developing larger static websites is that your build time becomes increasingly painful as the site increases in size. Asset hashing typically forces you to tie everything together, so your build times become a factor of the slowest component. 

Thanks to [Netlify's instant cache invalidation](https://www.netlify.com/blog/2015/09/11/instant-cache-invalidation/), 11Kit can do things differently. Each content type (markup, css, js, images) is watched and built independently, which means CSS compiles super fast even if you have thousands of pages.

Another issue with content sites is that your CSS tends to bloat as you add more pages. 11Kit tackles this in two ways:
1. styled default elements and a simple functional CSS system that lets you write *far less* CSS than you otherwise would.
2. A means for generating page-specific CSS files for components that only live on one page. Why make your homepage heavier by including CSS that's only used on an infrequently visited page?

11Kit also bakes in all the stuff you need for *real* websites. Redirects, sitemaps, support for excluding pages from search, canonical URL support, a broken link checker, custom headers, a custom 404 page, etc.

## Getting set up for local dev
11ty and Gulp are based on Node.js, so you'll need to [install it](https://nodejs.org/en/) first if you haven't already. Once you've cloned this repo, run `npm install` to download the various dependencies. To run the local dev server, run `npm run serve`. Check your terminal output for the URL, but it'll default to [http://localhost:8080](http://localhost:8080) unless that port is already in use.

### Working with CSS
This site uses [PostCSS](https://postcss.org/) and the [PostCSS PresetEnv plugin](https://preset-env.cssdb.org/) that let's you use future CSS today (in addition to backfilling rules and vendor prefixes for older browsers). You'll definitely want to review the [draft CSS Nesting spec](https://drafts.csswg.org/css-nesting-1/) for syntax since it differs from SASS. Any new CSS files you add to `components` are automatically included in the main CSS bundle, and any file you add to `pages` is processed as an individual file.

Linting is provided by [Stylelint](https://stylelint.io/), using their standard ruleset. To make linting less annoying, it's set up to fix problems automatically when possible, leaving you to worry about *only* the things that require human brainpower. You can run the linter manually with `npm run lint:css`, and it'll also run automatically when you try to make a commit. If you'd like, you can also install a [Stylelint plugin](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) in your editor for live feedback.

### Working with JS
The js pipeline is dead simple. Rudimentary, some might say! The assumption here is that you're progressively enhancing your website with light sprinkles of js. If you're doing something heavier, you'll want to swap in a bundler. As is, you can drop js files into the `javascripts` directory and they'll be minified and bundled. If you need to include a library, drop it in the `javascripts/vendor` directory and it'll be included first when the files are concatenated together.

Linting works similarly to CSS. [ESLint](https://eslint.org/) automatically fixes "fixable" things. Run manually with `npm run lint:js`, and it'll automatically run on staged files whenever you push a commit.

## Deploys
Any commit that you push to main will automatically be deployed to production (unless tests fail). If you don't want that to happen, make a branch. Every branch gets it's own staging URL. Similar to main, every push to that branch will trigger an automatic build.

## Configuring infrastructure
All of the configuration is stored in the `netlify.toml` file. Want to add a buld plugin that runs a test? netlify.toml. Need to add headers? netlify.toml. Redirects? netlify.toml! [Take a look a the Netlify docs for details and syntax](https://docs.netlify.com/configure-builds/file-based-configuration/).
