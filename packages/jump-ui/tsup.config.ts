import { defineConfig } from 'tsup'
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'

import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

async function processCss(css: string) {
	const result = await postcss([autoprefixer]).process(css, {
		from: undefined /* suppress source map warning */,
	})

	return result.css
}

export default defineConfig((options) => ({
	entry: ['src/index.ts'],
	bundle: true,
	format: ['cjs', 'esm'],
	splitting: true,
	sourcemap: true,
	clean: true,
	minify: false && !options.watch,
	dts: true,
	esbuildPlugins: [vanillaExtractPlugin({ processCss })],
	target: 'esnext',
	inject: ['react-shim.js'],
}))
