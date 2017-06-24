/**
 * webpack common config.
 */
const path = require('path');
const HWP = require('html-webpack-plugin');
const webpack = require('webpack');

const root = exports.root = (...paths) => path.resolve(__dirname, '..', ...paths);

const env = exports.env = process.env.NODE_ENV;

exports.config = {

	entry: {
		main: root('src', 'main.ts'),
		polyfills: root('src', 'polyfills.ts'),
		vendor: root('src', 'vendor.ts'),
	},

	output: {
		path: root('build'),
		filename: `[name].${env === 'prod' ? 'min.' : ''}.js`,
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader"
			},

			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},

	plugins: [

		new webpack.optimize.CommonsChunkPlugin({
			name: ['main', 'vendor', 'polyfills'],
			minChunks: Infinity
		}),

		new HWP({
			filename: 'index.html',
			template: root('src', 'index.html'),
			chunksSortMode: 'auto'
		})

	]
}