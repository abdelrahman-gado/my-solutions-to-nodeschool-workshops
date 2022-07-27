const moduleName = process.argv[2];
const word = process.argv[3];

var emotify = require(moduleName);
console.log(emotify(word));

