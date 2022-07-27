var arg1 = process.argv[2];
var arg2 = process.argv[3];

import obj from './Math';
console.log(obj.PI);
console.log(obj.sqrt(arg1));
console.log(obj.square(+arg2));