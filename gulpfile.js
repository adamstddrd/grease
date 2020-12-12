const { src, dest, watch, series, parallel } = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const gulpEsbuild = require('gulp-esbuild');

// file paths
const paths = {
  output: '_public',
  assets: '_public/assets',
  js: {
    source: '_source/_assets/js/app.js',
    fileName: 'app.js'
  },
  css: {
    source: [
      '_source/_assets/css/base/**/*.pcss',  // 'base' directory
      '_source/_assets/css/**/*.pcss',       // then everything else
      '!_source/_assets/css/pages/**/*.pcss' // except page-specific css
    ],
    fileName: 'main.css'
  },
  cssPages: {
    source: '_source/_assets/css/pages/**/*.pcss',
    root: '_source/_assets/css/base/@root.pcss'
  },
  img: {
    source: [
      '_source/_assets/images/**/*',  // grab everything
      '!_source/_assets/images/**/.*' // except hidden files
    ]
  }
};

// main css bundle
function css() {
  return src(paths.css.source)
    .pipe(sourcemaps.init())
    .pipe(concat(paths.css.fileName))
    .pipe(postcss([
      postcssPresetEnv({stage: 1}),
      cssnano()
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.assets)
  );
}

// page-specific css files
function cssPages() {
  return src(paths.cssPages.source)
    .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssPresetEnv({stage: 1, importFrom: paths.cssPages.root}),
      cssnano()
    ]))
    .pipe(rename({ extname: '.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.assets)
  );
}

// javascript
function js() {
  return src(paths.js.source)
    .pipe(gulpEsbuild({
      outfile: paths.js.fileName,
      bundle: true,
      sourcemap: true,
      minify: true,
    }))
    .pipe(dest(paths.assets)
  );
}

// process images
function img() {
  return src(paths.img.source)
    .pipe(changed(paths.assets))
    .pipe(imagemin())
    .pipe(dest(paths.assets)
  );
}

// watch CSS for changes
function watchCss(){
  return watch(paths.css.source, css);
}

// watch CSS for changes
function watchCssPages(){
  return watch(paths.cssPages.source, cssPages);
}

// watch images for changes
function watchImg(){
  return watch(paths.img.source, img);
}

// watch JS for changes
function watchJs(){
  return watch(paths.js.source, js);
}

// clean out the build directory
function clean(){
  return del(paths.output + '/**');
}

// export functions
exports.default = parallel(css, cssPages, js, img);
exports.css = parallel(css, cssPages);
exports.js = js;
exports.img = img;
exports.clean = clean;
exports.watch = series(
  parallel(css, cssPages, js, img), 
  parallel(watchCss, watchCssPages, watchJs, watchImg)
);
