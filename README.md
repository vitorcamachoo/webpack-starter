# Webpack-settings [![Build Status](https://travis-ci.org/vitorcamachoo/webpack-settings.svg?branch=master)](https://travis-ci.org/vitorcamachoo/webpack-settings)

Create applications using webpack with minimum configuration.

# Why Use This?
This module has been created to remove some complexity and "re-configuration" when you want to develop a new application using webpack features. At the same time, it allow you to expand or override the default configurations as you need.   

## Installation
- Install module
```sh
npm install -D webpack-settings
```
- Create `webpack.config.js` in your project
```
import { setup } from 'webpack-settings'

module.exports = setup();
```


# What’s Inside?
* utilities
* webpack configuration
  * `Setup`
  * `Utils`
  * `Plugins`
* webpack-dev-server configuration
* html-webpack-plugin
* extract-text-plugin
* Babel using the latest ES6 features

This will export as npm module the following:
* `Setup`
* `Utils`
* `Plugins`
  
### Setup
The provided setup allow to define the default properties present on the library, namely, `paths` and `plugins`.
To know what each property can receive, check their topic.

Example:

**Simple usage**  
*webpack.config.js*
```js
import { setup } from 'webpack-settings'

module.exports = setup();
```

**Advanced usage**  
*webpack.config.js*
```js
import path from 'path'
import webpack from 'webpack'
import { setup } from 'webpack-settings'
const BASEDIR = process.cwd()

module.exports = setup({
  paths: {
    ENTRY_POINT: {
      application: path.resolve(BASEDIR, 'src/application')
      backoffice: path.resolve(BASEDIR, 'src/backoffice'),
    },
  },
  plugins: {
    production: [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
      }),
    ]
  },
});
```


### Utils
The module is composed by a set of utilities, namely for paths and flags.

##### Flags
If you need to extend or override some configuration, these flags can be usefull. The flags that are beeing exported are:
* IS_DEV
* IS_PROD
* IS_WATCH
* IS_TEST

##### Paths
For the paths, the following paths variables are beeing exported:
* PUBLIC_DIR => /
* DEV_DIR => [EXECUTION_PATH]/src
* DIST_DIR => [EXECUTION_PATH]/dist
* ENTRYPOINT => Use for entry property in webpack.config.js. With this approach, it can allow to have a single or multiple entrypoints
```
{
  app: path.resolve(BASEDIR, 'src/app')
}
```

*Note*: These can be changed when initializing configuration file

### Plugins
These are exporting three groups of plugins, `development`, for `development` and for `production`
By default, the main configuration are using these plugins by default. This can be usefull if you want to extend any of them and inject them into the main configuration.

##### Common
* [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
* [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)

##### Development
* <empty>
 
##### Production
* native UglifyJsPlugin


## Todo List
- Add tests
- Allow to pass loaders through setup
- Allow to pass webpack-dev-server object configuration
