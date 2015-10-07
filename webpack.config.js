var path = require('path');
var webpack = require('webpack');

module.exports = {
  constent: __dirname,
  entry: path.join(__dirname, './client/application.jsx'),
  output: {
    path: path.resolve(__dirname, './build/'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/build'
  },
  resolve: {
    extensions: ['.js', 'jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client'),
        exclude: /node_module/
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'client')
      }
    ]
  }
};
