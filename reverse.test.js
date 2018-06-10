const myReverse = require('./reverse.js');

test('it should reverse a string', () => {
  expect(myReverse('Reverse me')).toMatch('em esreveR');
});
