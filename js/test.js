var test = require('tape');
var logic = require('./logic.js');

test('Example test', function(t) {
  let actual = logic.addFun(1, 2);
  let expected = 3;

  t.equal(actual, expected);
  t.end();
});
