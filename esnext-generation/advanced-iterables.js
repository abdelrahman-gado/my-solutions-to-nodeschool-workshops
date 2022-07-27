module.exports = function generate(isEven) {
  
  let i = (isEven) ? 0 : -1;

  return {
    next: function (swap) {
      const done = false;
      let value;
      if (swap) {
        value = ++i; 
      } else {
        i += 2;
        value = i;
      }

      return { done: done, value: value };
    }

  }

} 