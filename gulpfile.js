const { src, dest, watch, series, parallel } = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const merge = require('merge-stream');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

// file paths
const paths = {
  input: '_source',
  output: '_public',
  assets: '_public/assets',
  js: {
    watch: '_source/_assets/javascripts/**/*.js',
    bundleGlob: [
      '_source/_assets/javascripts/vendor/**/*.js', // libraries first
      '_source/_assets/javascripts/**/*.js'         // then everything else
    ],
    bundleName: 'app.js'
  },
  css: {
    watch: '_source/_assets/stylesheets/**/*.pcss',
    root: '_source/_assets/stylesheets/base/@root.pcss',
    singlesGlob: '_source/_assets/stylesheets/pages/**/*.pcss',
    bundleGlob: [
      '_source/_assets/stylesheets/base/**/*.pcss',  // 'base' directory
      '_source/_assets/stylesheets/**/*.pcss',       // then everything else
      '!_source/_assets/stylesheets/pages/**/*.pcss' // except page-specific css
    ],
    bundleName: 'main.css'
  },
  img: {
    glob: [
      '_source/_assets/images/**/*',  // grab everything
      '!_source/_assets/images/**/.*' // except hidden files
    ]
  }
};

// process CSS
function css() {
  const main = src(paths.css.bundleGlob)
    .pipe(sourcemaps.init())
    .pipe(concat(paths.css.bundleName))
    .pipe(postcss([
      postcssPresetEnv({stage: 1}),
      cssnano()
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.assets));

  const pages = src(paths.css.singlesGlob)
    .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssPresetEnv({stage: 1, importFrom: paths.css.root}),
      cssnano()
    ]))
    .pipe(rename({
      extname: '.css'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.assets));

  return merge(main, pages);
}

// process JS
function js() {
  return src(paths.js.bundleGlob)
    .pipe(sourcemaps.init())
    .pipe(concat(paths.js.bundleName), {newLine:'\n;'})
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.assets)
  );
}

// process images
function img() {
  return src(paths.img.glob)
    .pipe(changed(paths.assets))
    .pipe(imagemin())
    .pipe(dest(paths.assets)
  );
}

// watch CSS for changes
function watchCss(){
  return watch(paths.css.watch, css);
}

// watch images for changes
function watchImg(){
  return watch(paths.img.glob, img);
}

// watch JS for changes
function watchJs(){
  return watch(paths.js.watch, js);
}

// clean out the build directory
function clean(){
  return del(paths.output + '/**');
}

// export functions
exports.default = parallel(css, js, img);
exports.css = css;
exports.js = js;
exports.img = img;
exports.clean = clean;
exports.watch = series(
  parallel(css, js, img), 
  parallel(watchCss, watchJs, watchImg)
);
