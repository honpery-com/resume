/**
 * webpack common config.
 */
const path = require('path');
const HWP = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const root = exports.root = (...paths) => path.resolve(__dirname, '..', ...paths);

const env = exports.env = process.env.NODE_ENV;

exports.config = {

	entry: {
		main: root('src', 'main.tsx'),
		polyfill: root('src', 'polyfill.ts'),
		vendor: root('src', 'vendor.ts'),
	},

	output: {
		path: root('build'),
		filename: `[name].${env === 'prod' ? 'min.' : ''}js`,
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
			},

			{
				test: /\.scss?$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader!sass-loader",
				}),
			},

			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: 'file-loader?name=images/[name].[ext]'
			}
		]
	},

	plugins: [

		new webpack.optimize.CommonsChunkPlugin({
			name: ['main', 'vendor', 'polyfill'],
			minChunks: Infinity,
		}),

		new HWP({
			filename: 'index.html',
			template: root('src', 'index.html'),
			chunksSortMode: 'dependency',
		}),

		new ExtractTextPlugin("css/styles.css")

	]
}