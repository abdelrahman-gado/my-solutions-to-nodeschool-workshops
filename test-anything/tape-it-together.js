const fancify = require(process.argv[2]);
const test = require('tape');

test("fancify accepts string, bool, string", (t) => {
  t.equal(
    fancify("Hello"),
    "~*~Hello~*~",
    "fancify('Helo') should be '~*~Hello~*~'"
  );

  t.equal(
    fancify("Hello", true),
    "~*~HELLO~*~",
    "fancify('Hello', true) should '~*~HELLO~*~'"
  );

  t.equal(
    fancify("Hello", true, '!'),
    "~!~HELLO~!~",
    "fancify('Hello', true, '!') should '~!~HELLO~!~'"
  );
  t.end();
})
