const _ = require("lodash");

const worker = function (collection) {
  return _.chain(collection)
    .groupBy("article")
    .map((item, key) => {
      return { "article": parseInt(key), "total_orders": _.reduce(item, (sum, obj) => (sum += obj.quantity), 0) }
    }).sortBy((item) => {
      return -item.total_orders;
    })
};

module.exports = worker;
