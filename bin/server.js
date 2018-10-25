'use strict'

const app = require('../src/app');
const http = require('http');
const server = http.createServer(app);
const PORT = 3000;

server.listen(PORT);
console.log("Server running at port " + PORT);




