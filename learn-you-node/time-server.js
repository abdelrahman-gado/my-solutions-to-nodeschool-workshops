const strftime = require('strftime');
const net = require('net');

const port = process.argv[2];

const server = net.createServer((socket) => {
  const currentDate = strftime("%F %H:%M", new Date(Date.now()));
  socket.end(currentDate.toString() + "\n");
}).listen(port);