const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2];
const fileExt = process.argv[3];

fs.readdir(directoryPath, (err, list) => {
  if (err) {
    console.log(err.message);
    return;
  }

  for (let currentFilePath of list) {
    const currentFileExt = path.extname(currentFilePath).slice(1);
    if (currentFileExt === fileExt) {
      console.log(currentFilePath);
    }
  }
});