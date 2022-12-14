const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/form", (req, res) => {
  res.end(req.body.str.split("").reverse().join(""));
});

app.listen(Number(process.argv[2]));
