const express = require('express');
const fs = require('fs');

const app = express();

app.get('/books', (req, res, next) => {
  fs.readFile(process.argv[3], (err, data) => {
    if (err) {
      return next(err);
    }

    const jsonObj = JSON.parse(data);
    res.json(jsonObj);
  })
})


app.listen(Number(process.argv[2]));