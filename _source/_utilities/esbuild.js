import path from 'node:path';
/* ----------------------------------------------------------------------------
process JS files with esbuild
---------------------------------------------------------------------------- */
import esbuild from 'esbuild';

export default function (eleventyConfig) {
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
				format: 'esm',
				logLevel: 'warning',
				outdir: '_public/assets/js',
				outbase: '_source/assets/js',
				metafile: true,
			});

			const files = [];
			const inputs = Object.values(result.metafile.inputs);
			for (const input of inputs) {
				const { imports } = input;
				if (imports.length) {
					for (const file of imports) {
						files.push(file.path);
					}
				}
			}
			this.addDependencies(inputPath, files);
			return () => result.js;
		},
	});
}
