import { PI, sqrt, square } from './modules-with-name.mjs';

var arg1 = process.argv[2];
var arg2 = process.argv[3];

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
