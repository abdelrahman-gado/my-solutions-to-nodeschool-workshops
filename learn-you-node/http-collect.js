const http = require('http');
const bl = require('bl');

const url = process.argv[2];

///////////////////////////     First Approach      ////////////////////////////////
// http.get(url, (res) => {
//   res.setEncoding('utf8');
//   let rawData = '';
//   res.on('data', (chunck) => {
//     rawData += chunck;
//   });

//   res.on('end', () => {
//     console.log(rawData.length);
//     console.log(rawData);
//   });

// });


http.get(url, (res) => {
  res.setEncoding('utf8');
  res.pipe(bl((err, data) => {
    if (err) {
      console.log(err.message);
      return;
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));

  res.on('error', console.error);
})
