const { src, dest, watch, series, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
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
  return src(source+'/css/main.pcss')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssImportGlob(),
      postcssImport(),
      postcssPresetEnv({stage: 1, exportTo: output+'vars.css'}),
      cssnano()
    ]))
    .pipe(rename({ extname: '.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(output)
  );
}

function watchCss(){
  return watch(source+'/css/**/*.pcss', buildCss);
}

/* ----------------------------------------------------------------------------
page-specific css files
---------------------------------------------------------------------------- */

function buildCssPages() {
  return src(source+'/css-pages/**/*.pcss')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssPresetEnv({stage: 1, importFrom: output+'vars.css'}),
      cssnano()
    ]))
    .pipe(rename({ extname: '.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(output)
  );
}

function watchCssPages(){
  return watch(source+'/css-pages/**/*.pcss', buildCssPages);
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

const buildAllCss = series(buildCss, buildCssPages);
const buildAll = parallel(buildAllCss, buildJs, buildImg);
const watchAll = parallel(watchCss, watchCssPages, watchJs, watchImg);

/* ----------------------------------------------------------------------------
exports
---------------------------------------------------------------------------- */

exports.default = buildAll;
exports.css = buildAllCss;
exports.js = buildJs;
exports.img = buildImg;
exports.watch = series(buildAll, watchAll);
