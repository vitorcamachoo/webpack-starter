const path = require('path');
const webpack = require('webpack');

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Helpers
const { flags, paths } = require('../utils');

const { DEV_DIR } = paths;
const { IS_DEV, IS_PROD } = flags;

module.exports = [
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(IS_PROD ? 'production' : 'development')
		},
	}),
  new ExtractTextPlugin({
		filename: '[name].css',
		allChunks: true,
		disable: IS_DEV, // disable in development mode
	}),
  new HtmlWebpackPlugin({
		template: path.resolve(DEV_DIR, 'index.html'),
		hash: IS_PROD,
		cache: IS_DEV,
		minify: IS_PROD && {
			collapseWhitespace: true,
			conservativeCollapse: true,
			decodeEntities: true,
			minifyCSS: true,
			minifyJS: true,
			removeComments: true
		}
	}),
];
