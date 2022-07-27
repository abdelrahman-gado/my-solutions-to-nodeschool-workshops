const _ = require('lodash');

const worker = function (collection) {
  return _.chain(collection)
    .map((item) => item + "chained")
    .map((item) => item.toUpperCase())
    .sortBy()
    .value();

};

module.exports = worker;