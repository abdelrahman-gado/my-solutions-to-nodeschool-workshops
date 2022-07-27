module.exports = function (namespace) {
  const fn = console.log.bind(null, namespace);
  return function (...args) {
    fn(...args);
  }
}

