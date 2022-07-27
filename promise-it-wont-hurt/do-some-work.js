const HTTP = require("q-io/http");

HTTP.read("http://localhost:7000")
  .then((result) => {
    const userId = result.toString();
    return HTTP.read(`http://localhost:7001/${userId}`);
  })
  .then((userObj) => console.log(JSON.parse(userObj)))
  .catch((err) => console.error(err.message))
  .done();
