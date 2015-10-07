import express from 'express';
let server = express();

server.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = normalizePort(process.env.PORT || '3000');
server.set('port', port);

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

export default server;
