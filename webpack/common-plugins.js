// Helpers
const { flags } = require('../utils');
const { IS_DEV, IS_PROD } = flags;

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  new ExtractTextPlugin({
		filename: '[name].css',
		allChunks: true,
		disable: true, // disable in development mode
	}),
  new HtmlWebpackPlugin({
		hash: IS_PROD,
		cache: IS_DEV,
	}),
];
