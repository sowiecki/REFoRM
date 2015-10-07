#!/usr/bin/env node

/*
  Development server is run with nodemon and
  babel directly on untranspiled ES code.

  Production server is run on transpiled
  build directly.
*/

switch (process.env.NODE_ENV) {
  case 'development':
    var server = require('./server/server');
    break;
  case 'production':
    var server = require('./build/server');
    break;
  default:
    throw 'No environment value set!';
}

server.listen(8080);
