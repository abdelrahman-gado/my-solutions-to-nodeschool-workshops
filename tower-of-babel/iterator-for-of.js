const max = process.argv[2];

let FizzBuzz = {

  [Symbol.iterator]() {
    let i = 1;
    return {
      next: function () {

        let done = (i >= max);
        let value;
        if (!done) {
          if (i % 3 === 0 && i % 5 === 0) {
            value = "FizzBuzz";
          } else if (i % 3 === 0) {
            value = "Fizz";
          } else if (i % 5 === 0) {
            value = "Buzz";
          } else {
            value = i;
          }
          i++;
        } else {
          value = undefined;
        }

        return {
          done, value
        };

      }
    }
  }
}


for (let f of FizzBuzz) {
  console.log(f)
}