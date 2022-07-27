const inputs = process.argv.slice(2);
const minimum = Math.min(...inputs);

console.log(`The minimum of [${inputs}] is ${minimum}`);