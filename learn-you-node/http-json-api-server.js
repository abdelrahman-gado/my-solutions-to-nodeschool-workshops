const http = require('http');
const URL = require('node:url').URL;

const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const url = new URL(req.url, "http://example.com");
    const path = url.pathname;
    if (path === '/api/parsetime') {
      const isoDate = url.searchParams.get("iso");
      const date = new Date(isoDate);
      const jsonObj = {
        hour: date.getHours(),
        mintue: date.getMinutes(),
        second: date.getSeconds()
      };
      
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(jsonObj));

    } else if (path === '/api/unixtime') {
      const isoDate = url.searchParams.get("iso");
      const date = new Date(isoDate);
      const jsonObj = {
        unixtime: date.getTime()
      };

      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(jsonObj));
    } else {
      res.writeHead(404);
      res.end();
    } 
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);