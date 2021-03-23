const { build } = require('esbuild');
const glob = require('fast-glob');
let watchMode = false;

process.argv.forEach((val) => {
  if (val == '--watch') {
    watchMode = true;
  }
});

(async () => {
  let entryPoints = await glob('_source/_assets/**/[!_]*/*.js');
  await build({
    entryPoints,
    bundle: true,
    minify: true,
    sourcemap: true,
    watch: watchMode,
    format: 'esm',
    logLevel: 'info',
    outdir: '_public/assets',
    outbase: '_source/_assets/js',
  });
})();
