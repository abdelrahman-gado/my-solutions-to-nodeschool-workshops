function reduce(arr, fn, initial) {
  if (!arr.length) {
    return initial;
  } 

  const currentItem = arr[0];
  fn(initial, currentItem);
  arr = arr.slice(1);
  return reduce(arr, fn, initial);
}

module.exports = reduce;