module.exports = function (word, number = word.length) {
  return word + "!".repeat(number);
}