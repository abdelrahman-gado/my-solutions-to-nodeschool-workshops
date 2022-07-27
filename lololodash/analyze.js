const _ = require('lodash');


const worker = function (collection) {
  const av =
    _.reduce(collection, (total, item) => total + item.income, 0) /
    _.size(collection);
  return {
    average:
      _.reduce(collection, (total, item) => total + item.income, 0) /
      _.size(collection),
    underperform: _.chain(collection)
      .filter((item) => {
        return item.income <= av;
      })
      .sortBy("income"),
    overperform: _.chain(collection)
      .filter((item) => {
        return item.income > av;
      })
      .sortBy("income"),
  };

};


module.exports = worker;