const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, result) => {
  if (err) {
    console.log(err.message);
    return;
  }

  const numberOfLines = result.split("\n").length - 1;
  console.log(numberOfLines);

})