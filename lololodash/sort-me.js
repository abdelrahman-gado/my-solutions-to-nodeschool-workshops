const _ = require('lodash');

const worker = function (collection) {
  return _.sortBy(collection, 
    function(item) {
      return -parseInt(item.quantity);
  })
};

module.exports = worker;