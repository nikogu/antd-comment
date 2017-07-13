// demo webpack config

const fs = require('fs');
const path = require('path');
const glob = require('glob');

module.exports = function (webpackConfig, env) {

  webpackConfig.babel.babelrc = false;
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['antd', {
    style: 'css'  // if true, use less
  }]);

  webpackConfig.module.preLoaders = [
    {
      test: /\.jsx$|\.js$/,
      loader: 'eslint',
      exclude: /node_modules/,
    },
  ];

  // Parse all less files as css module.
  //webpackConfig.module.loaders.forEach(function (loader, index) {
  //  if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
  //    loader.test = /\.dont\.exist\.file/;
  //  }
  //  if (loader.test.toString() === '/\\.module\\.less$/') {
  //    loader.test = /\.less$/;
  //  }
  //});

  return webpackConfig;
};