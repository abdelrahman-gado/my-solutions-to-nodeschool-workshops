var HTTP = require("q-io/http");

HTTP.read("http://localhost:1337")
  .then((response) => console.log(JSON.parse(response)))
  .catch(console.error)
  .done();