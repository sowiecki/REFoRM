const falcorExpress = require('falcor-express');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const config = require('./config');
const formRouter = require('./routers/form');

const server = express();

// Configuration
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.set('port', config.port);
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname, `${config.publicPath}`)));

// Database
const connect = () => {
  mongoose.connect(config.dbURI, config.dbOptions);
};
connect();
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Client hot reloading (dev only)
if (process.env.HOT) {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config.hot');

  const compiler = webpack(webpackConfig);

  server.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  server.use(require('webpack-hot-middleware')(compiler));
}

// Falcor routing
server.use('/model.json', falcorExpress.dataSourceRoute((req, res) => {
  return formRouter(req, res);
}));

// Serve client
server.get('*', (req, res) => {
  res.render('application', {
    port: process.env.HOT || process.env.NODE_ENV ? config.port : 8080
  });
});

module.exports = server;
