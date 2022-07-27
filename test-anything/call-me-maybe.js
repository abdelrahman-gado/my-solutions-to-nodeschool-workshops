const repeatCallback = require(process.argv[2]);
const test = require('tape');

test('nextTick', function (t) {
  t.plan(20);
  repeatCallback(20, function () { 
    t.pass('callback called');
  })
})