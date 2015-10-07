var path = require ('path');
var express = require('express');
var webpack = require('webpack')
var config = require('./webpack.config.hot');

var devServer = express();
var compiler = webpack(config);

var port = 8080;

devServer.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

devServer.use(require('webpack-hot-middleware')(compiler));

devServer.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/application.html'));
});

devServer.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
})
