const test = require('tape');
const logic = require('./logic.js');

test('Example test', function(t) {
  const actual = logic.addFun(1, 2);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});


test('add todo function', function(t) {
  const actual1 = logic.todoFunctions.addTodo([{"no":"1","desc":"test1"},{"no":"2","desc":"test2"}], {"no":"3","desc":"test3"});
  const actual2 = actual1.length; 
  const expectedResult = 3;
  const expectedType = "object";
  t.equal(actual2, expectedResult);
  t.equal(typeof(actual1), expectedType);
  t.end();
});

test('delete todo function', function(t) {
  const beforArray = [{"id":"1","desc":"test1"},{"id":"2","desc":"test2"}, {"id":"3","desc":"test3"}];
  const runFun = logic.todoFunctions.deleteTodo(beforArray);
  const beforArrayLength = beforArray.length; 
  const expectedLength = runFun.length;
  t.equal(beforArrayLength, expectedLength);
  t.equal(typeof(beforArray),typeof(runFun));
  t.end();
});


