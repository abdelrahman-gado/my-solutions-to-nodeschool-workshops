const http = require('http');
const map = require('through2-map');
const fs = require('fs');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    req.pipe(map((chuck) => chuck.toString().toUpperCase())).pipe(res);
  }
});

server.listen(port);