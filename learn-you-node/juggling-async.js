const http = require('http');
const bl = require('bl');

const result = [];
let count = 0;

function printResult() {
  for (let i = 0; i < 3; i++) {
    console.log(result[i]);
  }
}

function getURl (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl((err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      result[index] = data.toString();
      count++;

      if (count === 3) {
        printResult();
      }
    }));
  });
}

for (let i = 0; i < 3; i++) {
  getURl(i);
}