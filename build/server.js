'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var server = (0, _express2['default'])();

server.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = normalizePort(process.env.PORT || '3000');
server.set('port', port);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

exports['default'] = server;
module.exports = exports['default'];
//# sourceMappingURL=server.js.map