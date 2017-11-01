const merge = require('webpack-merge');

// plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Helpers
const utils = require('../utils');
const libPlugins = require('./plugins');

const { IS_DEV, IS_PROD, IS_WATCH } = utils.flags;

module.exports = (config = {}) => {
  const { plugins = {}, paths = {} } = config 
  const { DEV_DIR, DIST_DIR, PUBLIC_DIR, ENTRY_POINT } = merge({}, utils.paths, paths)
  const { common, development, production } = merge({}, libPlugins, plugins)

  return {
    cache: IS_DEV,
    watch: IS_WATCH,
    devtool: IS_DEV ? 'source-map' : false,
    entry: {
      app: ENTRY_POINT,
    },
  
    output: {
      path: DIST_DIR,
      publicPath: PUBLIC_DIR,
      filename: '[name].js',
    },
  
    module: {
      rules: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })},
      ],
    },
  
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css'],
    },
  
    devServer: {
      contentBase: DIST_DIR,
      historyApiFallback: true,
    },
  
    plugins: IS_DEV ?
      [...common, ...development] :
      [...common, ...production],
  }
}
