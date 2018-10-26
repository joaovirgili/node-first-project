'use strict'

const app = require('../src/app');
const http = require('http');
const server = http.createServer(app);
const PORT = 5000;

app.set('port', PORT);

app.set('port', PORT);

server.listen(PORT);
server.on('error', onError);
console.log("Server running at port " + PORT);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string' ?
    'Pipe ' + PORT :
    'Port ' + PORT;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw(error);
  }
}


