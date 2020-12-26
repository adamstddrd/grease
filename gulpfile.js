const { src, dest, watch, series, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const esbuild = require('gulp-esbuild');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const postcssImportGlob = require('postcss-import-ext-glob');
const source = '_source/_assets';
const output = '_public/assets';

/* ----------------------------------------------------------------------------
main css file
---------------------------------------------------------------------------- */

function buildCss() {
  return src(source+'/css/main.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssImportGlob(),
      postcssImport(),
      postcssPresetEnv({stage: 1}),
      cssnano()
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(output)
  );
}

function watchCss(){
  return watch(source+'/css/**/*.css', buildCss);
}

/* ----------------------------------------------------------------------------
page-specific css files
---------------------------------------------------------------------------- */

function buildCssPages() {
  return src(source+'/css-pages/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssPresetEnv({stage: 1, importFrom: source+'/css/base/@root.css'}),
      cssnano()
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(output)
  );
}

function watchCssPages(){
  return watch(source+'/css-pages/**/*.css', buildCssPages);
}

/* ----------------------------------------------------------------------------
javascript
---------------------------------------------------------------------------- */

function buildJs() {
  return src(source+'/js/app.js')
    .pipe(esbuild({
      outfile: 'app.js',
      bundle: true,
      sourcemap: true,
      minify: true,
    }))
    .pipe(dest(output)
  );
}

function watchJs(){
  return watch(source+'/js/**/*.js', buildJs);
}

/* ----------------------------------------------------------------------------
images
---------------------------------------------------------------------------- */

const imgPath = [
  source+'/images/**/*',
  '!'+source+'/images/**/.*'
];

function buildImg() {
  return src(imgPath)
    .pipe(changed(output))
    .pipe(imagemin())
    .pipe(dest(output)
  );
}

function watchImg(){
  return watch(imgPath, buildImg);
}

/* ----------------------------------------------------------------------------
composed tasks
---------------------------------------------------------------------------- */

const buildAll = parallel(buildCss, buildCssPages, buildJs, buildImg);
const watchAll = parallel(watchCss, watchCssPages, watchJs, watchImg);
exports.default = buildAll;
exports.watch = series(buildAll, watchAll);
