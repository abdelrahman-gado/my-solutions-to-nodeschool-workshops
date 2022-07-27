var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach((val) => {
  let commaSep = val.split(",");
  commaSep.forEach((val) => {
    if (val !== "") args.push(+val);
  });
});

// write a function called `avg` here that calculates the average.
function avg(...arr) {
  return arr.reduce((sum, num) => sum += num, 0) / arr.length;
}

console.log(avg(...args));
