const express = require("express");

const app = express();

app.put("/message/:id", (req, res) => {
  const ID = req.params.id;
  const hashValue = require("crypto")
    .createHash("sha1")
    .update(new Date().toDateString() + ID)
    .digest("hex");
  res.end(hashValue);
});

app.listen(Number(process.argv[2]));
