const test = require('tape');
const logic = require('./logic.js');

test('add todo function', (t) => {
  const actual1 = logic.todoFunctions.addTodo([{"no":"1","desc":"test1"},{"no":"2","desc":"test2"}], {"no":"3","desc":"test3"});
  const actual2 = actual1.length; 
  const expectedResult = 3;
  const expectedType = "object";
  t.equal(actual2, expectedResult);
  t.equal(typeof(actual1), expectedType);
  t.end();
});

test('delete todo function', (t) => {
  const beforArray = [{"id":"1","desc":"test1"},{"id":"2","desc":"test2"}, {"id":"3","desc":"test3"}];
  const runFun = logic.todoFunctions.deleteTodo(beforArray);
  const beforArrayLength = beforArray.length; 
  const expectedLength = runFun.length;
  t.equal(beforArrayLength, expectedLength);
  t.equal(typeof(beforArray),typeof(runFun));
  t.end();
});

test('mark todo function', (t) => {
  const beforArray = [{id: 0, description: 'make tea', done: false},{id: 1, description: 'make coffie', done: false}];
  const runFun = logic.todoFunctions.markTodo(beforArray, 0);
  t.equal(beforArray.length, runFun.length);
  t.equal(typeof(beforArray),typeof(runFun));
  t.equal(beforArray[0].done === false ,runFun[0].done === true);
  t.equal(beforArray[1].done === false ,runFun[1].done === false);
  t.end();
});

