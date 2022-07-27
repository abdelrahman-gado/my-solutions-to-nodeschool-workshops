const test = require('tape');
const feedCat = require(process.argv[2]);

test('feedCat return yum but error with chocolate', function (t) {
  t.equal(feedCat('rice'), 'yum');
  t.throws(feedCat.bind(null, 'chocolate'));
  t.end();
})