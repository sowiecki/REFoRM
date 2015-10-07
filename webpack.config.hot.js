var path = require('path');
var webpack = require('webpack');
var base = require('./webpack.config');

module.exports = {
  contet: base.context,
  entry: {
    app: [
      'webpack-hot-middleware/client',
      base.entry
    ]
  },
  output: base.output,
  resolve: base.resolve,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: base.module,
  devtool: 'eval',
  debug: true
}
