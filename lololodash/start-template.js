const _ = require('lodash');

const worker = function (obj) {
  return _.template("Hello <%= name %> (logins: <%= login.length %>)")(obj);
};

module.exports = worker;