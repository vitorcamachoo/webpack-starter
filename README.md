[![Build Status](https://travis-ci.org/vitorcamachoo/es6-webpack-starter.svg?branch=master)](https://travis-ci.org/vitorcamachoo/es6-webpack-starter)

A booster to who wants build a project using webpack and es6 features

This will export as npm module the following:
* `Config`
* `Utils`
* `Plugins`
  
### Config

### Utils
The module is composed by a set of utilities, namely for paths and flags.

Flags
If you need to extend or override some configuration, these flags can be usefull. The flags that are beeing exported are:
* IS_DEV
* IS_PROD
* IS_WATCH
* IS_TEST

#### Paths
For the paths, the following paths variables are beeing exported:
* DEV_DIR => /src
* DIST_DIR => /dist

*Note*: These can be changed when initializing configuration file

### Plugins
These are exporting three groups of plugins, `development`, for `development` and for `production`
By default, the main configuration are using these plugins by default. This can be usefull if you want to extend any of them and inject them into the main configuration.

#### Development
* [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
* [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)
```js
import { flags, paths, plugins } from 'webpack-starter/utils'

// *Flags* are exporting the following booleans
// IS_DEV, IS_PROD, IS_WATCH
// This could be usefull when extending the common webpack config file

// *paths* are exporting the following directories
// DEV_DIR => /src
// DIST_DIR => /dist
