const _ = require('lodash');

const worker = function (collection) {
  const tempObj = {
    hot: [],
    warm: []
  };

  _.forEach(collection, (item, key) => {
    if (_.every(item, (num) => num > 19)) {
      tempObj.hot.push(key);
    } else if (_.some(item, (num) => num > 19)) {
      tempObj.warm.push(key);
    }
  })

  return tempObj;
};


module.exports = worker;