const { src, dest, watch, series, parallel } = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const gulpEsbuild = require('gulp-esbuild');
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
  return watch(source+'/css/**/*.pcss', css);
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
  return watch(source+'/css-pages/**/*.pcss', cssPages);
}

/* ----------------------------------------------------------------------------
javascript
---------------------------------------------------------------------------- */

function buildJs() {
  return src(source+'/js/app.js')
    .pipe(gulpEsbuild({
      outfile: 'app.js',
      bundle: true,
      sourcemap: true,
      minify: true,
    }))
    .pipe(dest(output)
  );
}

function watchJs(){
  return watch(source+'/js/**/*.js', js);
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
  return watch(imgPath, img);
}

/* ----------------------------------------------------------------------------
utilities
---------------------------------------------------------------------------- */

// clean out the build directory
function clean(){
  return del('_public/**');
}

// compound tasks
const buildAllCss = series(buildCss, buildCssPages);
const buildAll = parallel(buildAllCss, buildJs, buildImg);
const watchAll = parallel(watchCss, watchCssPages, watchJs, watchImg);

/* ----------------------------------------------------------------------------
exports
---------------------------------------------------------------------------- */

exports.default = buildAll;
exports.css = buildAllCss;
exports.js = js;
exports.img = img;
exports.clean = clean;
exports.watch = series(buildAll, watchAll);
