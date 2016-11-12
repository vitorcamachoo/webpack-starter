const webpack = require('webpack');

module.exports = [
	new webpack.optimize.UglifyJsPlugin({
		compress: { warnings: false },
	}),
	new webpack.optimize.DedupePlugin(),
];
