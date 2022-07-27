function duckCount() {
  return [...arguments].reduce((count, arg) => {
    if (arg.hasOwnProperty("quack")) {
      count++;
    }

    return count;
  }, 0);
}

module.exports = duckCount;