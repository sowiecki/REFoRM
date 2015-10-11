// Database URI
const dbURI = process.env.PROD_MONGODB || 'mongodb://localhost';

// Database connection options
const options = {
  server: {
    socketOptions: {
      keepAlive: 1
    }
  }
};

// Server port
const port = normalizePort(process.env.PORT || '3000');

// Server public path
const publicPath = '../public/';

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

module.exports = {
  dbURI,
  port,
  publicPath
}
