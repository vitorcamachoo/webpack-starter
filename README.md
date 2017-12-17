[![Build Status](https://travis-ci.org/vitorcamachoo/webpack-starter.svg?branch=master)](https://travis-ci.org/vitorcamachoo/webpack-starter)
[![Greenkeeper badge](https://badges.greenkeeper.io/ForbesLindesay/uglify-to-browserify.svg)](https://greenkeeper.io/)

# Webpack-starter 

A very simple project starter with webpack composed with the latest features
 
## Installation
```sh
npm install
```

## Development Server
```sh
npm start
```
## Non minified Build (development environment)
```sh
npm run build:dev
```

## Minified Build (production environment)
```sh
npm run build:prod
```

# Features
* Hot Reload
* Sass support ([sass-loader](https://github.com/jtangelder/sass-loader))
* Last EcmaScript version ([babel-loader](https://github.com/babel/babel-loader) with [babel-preset-env](https://github.com/babel/babel-preset-env))
* Generate HTML automatically ([html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin))
* Extract styles on production ([extract-text-plugin](https://github.com/webpack/extract-text-webpack-plugin))
