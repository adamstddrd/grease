/* ----------------------------------------------------------------------------
process JS files with esbuild
---------------------------------------------------------------------------- */
const esbuild = require('esbuild');
const path = require('node:path');

module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats('js');
  eleventyConfig.addExtension('js', {
    outputFileExtension: 'js',
    async compile(inputContent, inputPath) {
      const baseDir = path.basename(path.dirname(inputPath));
      if (baseDir.startsWith('_')) {
        return undefined;
      }
      const result = await esbuild.build({
        entryPoints: [inputPath],
        bundle: true,
        minify: true,
        sourcemap: true,
        splitting: true,
        format: 'esm',
        logLevel: 'warning',
        outdir: '_public/assets/js',
        outbase: '_source/assets/js',
        metafile: true,
      });

      const files = [];
      const inputs = Object.values(result.metafile.inputs);
      inputs.forEach((input) => {
        const { imports } = input;
        if (imports.length) {
          imports.forEach((file) => files.push(file.path));
        }
      });
      this.addDependencies(inputPath, files);
      return () => result.js;
    },
  });
};
