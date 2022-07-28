const fs = require('fs');
const path = require('path');

function listFilesFilteredByEXT(directoryPath, fileExt, callback) {
  fs.readdir(directoryPath, (err, data) => {
    if (err) {
      return callback(err);
    }

    const filteredList = data.filter((file) => path.extname(file).slice(1) === fileExt);
    return callback(null, filteredList);
  });
}


module.exports = listFilesFilteredByEXT;