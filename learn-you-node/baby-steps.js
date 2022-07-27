const inputs = process.argv.slice(2);

console.log(inputs.reduce((sum, item) => sum += Number(item), 0));