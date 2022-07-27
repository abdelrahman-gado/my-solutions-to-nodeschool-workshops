const max = process.argv[2];

function* FizzBuzz() {
  let i = 1;

  while (i < max) {
    if (i % 3 === 0 && i % 5 === 0) {
      yield "FizzBuzz";
    } else if (i % 3 === 0) {
      yield "Fizz";
    } else if (i % 5 === 0) {
      yield "Buzz";
    } else {
      yield i;
    }
    i++;
  }
}

let it = FizzBuzz();

for (let i of it) {
  console.log(i)
}