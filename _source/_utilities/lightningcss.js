/* ----------------------------------------------------------------------------
process CSS with LightningCSS
---------------------------------------------------------------------------- */
import { bundleAsync, Features } from 'lightningcss';
import path from 'node:path';

export default function (eleventyConfig) {
  eleventyConfig.addTemplateFormats('css');
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    async compile(inputContent, inputPath) {
      const baseDir = path.basename(path.dirname(inputPath));
      if (baseDir.startsWith('_')) {
        return undefined;
      }
      const files = [];
      const targets = { future: (1) }; // enables draft syntaxes
      const result = await bundleAsync({
        filename: inputPath,
        minify: true,
        sourceMap: true,
        include: Features.Nesting,
        drafts: { customMedia: true },
        resolver: {
          resolve(specifier, from) {
            const importPath = path.resolve(path.dirname(from), specifier);
            files.push(importPath);
            return path.resolve(path.dirname(from), specifier);
          },
        },
        targets,
      });
      this.addDependencies(inputPath, files);
      return () => result.code.toString();
    },
  });
}
