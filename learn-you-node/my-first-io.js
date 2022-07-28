const fs = require('fs');

const filePath = process.argv[2];
const fileContent = fs.readFileSync(filePath).toString();

const numberOfNewLines = fileContent.split("\n");

console.log(numberOfNewLines.length - 1);
