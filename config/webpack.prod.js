/**
 * webpack prod config.
 */
const { root, config } = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(config, {

	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},

});