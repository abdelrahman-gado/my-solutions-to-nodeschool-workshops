module.exports = function average(...numbers) {
  return numbers.reduce((sum, num) => sum += num, 0) / numbers.length;
}