module.exports = function makeCounter(someObj, maxNum) {
  let i = 1;

  someObj.next = function () {
    
    const done = (i > maxNum);
    const value = (!done) ? i++ : undefined;

    return {
      done: done,
      value: value
    }

  }

  return someObj;
}