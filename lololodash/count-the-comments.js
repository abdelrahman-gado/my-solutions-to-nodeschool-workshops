const _ = require('lodash');

const worker = function (collection) {
  return _.chain(collection).groupBy('username').map((item, key) => {
    return { username: key, comment_count: _.size(item) }
  }).sortBy((item) => {
    return -item.comment_count;
  })

};

module.exports = worker;