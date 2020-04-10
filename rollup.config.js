import babel from 'rollup-plugin-babel'
import builtins from 'rollup-plugin-node-builtins'
import commonjs from '@rollup/plugin-commonjs'
import config from 'sapper/config/rollup.js'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'
import path from 'path'
import preprocessor from 'svelte-preprocess'
import purgecss from '@fullhuman/postcss-purgecss'
import purge from 'purgecss-from-svelte'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const getPostCSSPlugins = (isProduction = false) =>
	[
		require('postcss-import')(),
		require('postcss-url')(),
		require('tailwindcss')('./tailwind.config.js'),
		require('postcss-nested'),
		require('postcss-preset-env'),
		isProduction &&
			purgecss({
				content: ['./**/*.svelte', './src/template.html'],
				extractors: [
					{
						extractor: purge,
						extensions: ['svelte', 'html'],
					},
				],
			}),
		isProduction && require('cssnano'),
	].filter(Boolean)

const preprocess = preprocessor({
	transformers: {
		postcss: {
			plugins: getPostCSSPlugins(),
		},
	},
})

const onwarn = (warning, onwarn) =>
	(warning.code === 'CIRCULAR_DEPENDENCY' &&
		/[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning)

const dedupe = importee =>
	importee === 'svelte' || importee.startsWith('svelte/')

const vendor = ['blockstack']

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			builtins(),
			copy({
				targets: [
					{ src: 'node_modules/blockstack/dist/**/*', dest: 'static/vendor' },
				],
				copyOnce: true
			}),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
				preprocess,
			}),
			resolve({
				browser: true,
				dedupe,
			}),
			commonjs(),
			json(),

			// legacy &&
				babel({
					extensions: ['.js', '.mjs', '.html', '.svelte'],
					runtimeHelpers: true,
					exclude: ['node_modules/@babel/**'],
					presets: [
						[
							'@babel/preset-env',
							{
								targets: '> 0.25%, not dead',
							},
						],
					],
					plugins: [
						'@babel/plugin-syntax-dynamic-import',
						[
							'@babel/plugin-transform-runtime',
							{
								useESModules: true,
							},
						],
					],
				}),

			!dev &&
				terser({
					module: true,
				}),
		],
		external: vendor,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			builtins(),
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
			svelte({
				generate: 'ssr',
				dev,
				preprocess,
			}),
			resolve({
				dedupe,
			}),
			commonjs(),
			json(),
			postcss({
				plugins: getPostCSSPlugins(!dev),
				extract: path.resolve(__dirname, './static/bundle.css'),
			}),
		],
		external: [...vendor, ...Object.keys(pkg.dependencies).concat(
			require('module').builtinModules ||
				Object.keys(process.binding('natives'))
		)],

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
			commonjs(),
			!dev && terser(),
		],

		onwarn,
	},

	watch: {
		clearScreen: false,
	},
}
