const { build } = require('esbuild');
const glob = require('fast-glob');

(async () => {
  let entryPoints = await glob('_source/_assets/**/[!_]*/*.js');
  await build({
    entryPoints,
    bundle: true,
    minify: true,
    sourcemap: true,
    format: 'esm',
    outdir: '_public/assets',
    outbase: '_source/_assets/js',
  });
})();
