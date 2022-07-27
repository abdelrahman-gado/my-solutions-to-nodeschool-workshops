module.exports = function filterForNumbers(iterable) {
  let itr = iterable[Symbol.iterator]();
  const arr = [];
  while (true) {
    const resObj = itr.next();
    if (resObj.done === true) {
      return arr;
    } else {
      if (typeof resObj.value === 'number')
        arr.push(resObj.value);
    }
  }

  return arr;
}

// module.exports = function filterForNumbers(iterable) {
//   const arr = [];
//   for (let value of iterable) {
//     if (typeof value === 'number') {
//       arr.push(value);
//     }
//   }

//   return arr;
// };