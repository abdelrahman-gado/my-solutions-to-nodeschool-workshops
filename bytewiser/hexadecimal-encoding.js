const Buffer = require('node:buffer').Buffer;

const inputs = process.argv.slice(2).map(Number);

const buffer = new Buffer(inputs);
console.log(buffer.toString('hex'));