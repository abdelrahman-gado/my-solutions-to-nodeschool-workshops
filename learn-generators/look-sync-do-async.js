var fs = require("fs");

function run(generator) {
  // improve `run` above
  var it = generator(go);

  function go(err, result) {
    if (err) {
      return it.throw(err);
    }

    it.next(result);
  }

}

run(function* (done) {
  // catch exception
  try {
    var dirFiles = yield fs.readdir("NoNoNoNo", done); // No such dir
    var firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
  } catch (e) {
    var firstFile = null;
  }
  
  console.log(firstFile);
});
