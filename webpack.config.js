// plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Helpers
const { flags, paths } = require('./utils');
const { common, development, production } = require('./webpack');

const { DEV_DIR, DIST_DIR } = paths;
const { IS_DEV, IS_PROD, IS_WATCH } = flags;

// Instances
const plugins = IS_DEV ?
  [...common, ...development] :
  [...common, ...production];

module.exports = {
	cache: IS_DEV,
	watch: IS_WATCH,
	devtool: IS_DEV ? 'source-map' : false,
	entry: {
		app: DEV_DIR + '/app',
	},

	output: {
		path: DIST_DIR,
		publicPath: "/",
		contentBase: DIST_DIR,
		filename: '[name].js',
	},

	module: {
		loaders: [
			{ test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
		],
		resolve: {
			extensions: ['.js', '.jsx']
		}
	},

	plugins,
};
