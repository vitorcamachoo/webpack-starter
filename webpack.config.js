const path = require('path');
const merge = require('webpack-merge');

// plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Helpers
const { paths, flags} = require('./utils');
const plugins = require('./webpack');

const { IS_DEV, IS_PROD, IS_WATCH } = flags;
const { BASEDIR, DEV_DIR, DIST_DIR, PUBLIC_DIR, ENTRY_POINT } = paths;
const { common, development, production } = plugins;

module.exports = (env) => {

  return {
    cache: IS_DEV,
    watch: IS_WATCH,
    devtool: IS_DEV ? 'source-map' : false,
    entry: {
      app: path.resolve(BASEDIR, 'src/index'),
    },
  
    output: {
      path: DIST_DIR,
      publicPath: PUBLIC_DIR,
      filename: '[name].js',
    },
  
    module: {
      rules: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, options: { "presets": ["env"] } },
        {
          test: /\.(css|scss)$/i,
          loader: ExtractTextPlugin.extract({
            use: [{
              loader: 'css-loader',
              options: {
                minimize: IS_PROD,
                sourceMap: IS_DEV,
              },
            }, {
              loader: 'sass-loader',
              options: {
                minimize: IS_PROD,
                sourceMap: IS_DEV,
              },
            }],
            fallback: 'style-loader',
          }),
        },
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
