module.exports = function *multiplier() {
  let i = 0, value = 1;
  while (true) {
    i++;
    value = yield i * value;
    if (!value) {
      value = 1;
    }
  }
}