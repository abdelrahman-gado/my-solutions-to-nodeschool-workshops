const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const servedFilePath = process.argv[3];

const server = http.createServer((req, res) => {
  const streamObj = fs.createReadStream(servedFilePath, 'utf8');
  streamObj.pipe(res);
})

server.listen(port);