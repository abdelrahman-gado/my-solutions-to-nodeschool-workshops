const inputs = process.argv.slice(2);
const result = inputs
  .map((word) => word.toUpperCase())
  .reduce((res, word) => (res += word[0]), "");
console.log(result);
