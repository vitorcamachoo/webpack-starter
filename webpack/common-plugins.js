// Helpers
const { flags } = require('../utils');
const { IS_DEV, IS_PROD } = flags;

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  new ExtractTextPlugin('[name].css', {
		allChucks: true,
		disable: IS_DEV, // disable in development mode
	}),
  new HtmlWebpackPlugin({
		filename: 'index.html',
		hash: IS_PROD,
		cache: IS_DEV,
	}),
];
