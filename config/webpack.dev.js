/**
 * webpack dev config.
 */
const { root, config } = require('./webpack.common');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(config, {

	devtool: "source-map",

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	devServer: {
		contentBase: root('build'),
		inline: true,
		hot: true,
		compress: true,
		host: '0.0.0.0',
		port: 8080,
		historyApiFallback: true
	}

});