const http = require('http');

const url = process.argv[2];

http.get(url, (res) => {
  res.setEncoding('utf8');
  res.on('data', (chunck) => {
    console.log(chunck);
  });
  res.on('error', console.error);
});