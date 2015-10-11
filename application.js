#!/usr/bin/env node

let server = require('./server/server');
const config = require('./server/config');

server.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${config.port}`);
});
