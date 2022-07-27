module.exports = function *generate(isEven) {
  let i = (isEven) ? 0 : -1;
  while (true) {
    i += 2;
    yield i;
  }
}