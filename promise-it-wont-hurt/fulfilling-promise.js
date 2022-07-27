'use strict';

var promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    fulfill('FULFILLED!');
  }, 300);
});

promise.then((result) => {
  console.log(result);
})