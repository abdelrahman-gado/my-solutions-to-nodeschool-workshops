const listFilesFilteredByEXT = require('./mymodule');

const directoryPath = process.argv[2];
const fileExt = process.argv[3];

listFilesFilteredByEXT(directoryPath, fileExt, (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }

  for (let file of data) {
    console.log(file);
  }

})