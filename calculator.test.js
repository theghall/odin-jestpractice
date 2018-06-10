const calculator = require('./calculator.js');

test('it should sum 2 + 4 correctly', () => {
  expect(calculator.sum(2,4)).toBe(6);
});

test('it should sum -1 + 3 correctly', () => {
  expect(calculator.sum(-1,3)).toBe(2);
});

test('it should multiply 3 * 5 correctly', () => {
  expect(calculator.multiply(3,5)).toBe(15);
});

test('it should mulptiply -4 * -6 correctly', () => {
  expect(calculator.multiply(-4,-6)).toBe(24);
});

test('it should subtract 5 -2 correctly', () => {
  expect(calculator.subtract(5,2)).toBe(3);
});

test('it should subract -5 - 3 correctly', () => {
  expect(calculator.subtract(-5,3)).toBe(-8);
});

test('it should divide 6/3 correctly', () => {
  expect(calculator.divide(6,3)).toBe(2);
});

test('it should divide 5/3 correctly', () => {
  expect(calculator.divide(5,3)).toBeCloseTo(1.6666666666666667);
});
