const inputs = process.argv.slice(2);
const result = inputs
  .map((str) => str[0])
  .reduce((resStr, item) => (resStr += item));

console.log(`[${inputs}] becomes "${result}"`);