const express = require('express');
const path = require('path');

const app = express();

app.set('views', process.argv[3]);
app.set('view engine', 'pug');

app.get('/home', (req, res) => {
  res.render('index', { date: new Date().toDateString() });
});

app.listen(Number(process.argv[2]));