const express = require('express');

const app = express();

app.use(express.static(process.argv[3]));

app.listen(Number(process.argv[2]));
