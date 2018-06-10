const analyze = require('./analyze');

test('it should analyze [1, 5, 6, 7, 8] correctly', () => {
  const object = analyze([5, 1, 6, 8, 7]);

  expect(object.average).toBe(5);
  expect(object.min).toBe(1);
  expect(object.max).toBe(8);
  expect(object.length).toBe(5);
});

test('it should analyze [8, 10, 4, 32, 12, 6] correctly', () => {
  const object = analyze([8, 10, 4, 32, 12, 6]);

  expect(object.average).toBe(12);
  expect(object.min).toBe(4);
  expect(object.max).toBe(32);
  expect(object.length).toBe(6);
});

test('it should analyze [8, 8, 8] correctly', () => {
  const object = analyze([8, 8, 8]);

  expect(object.average).toBe(8);
  expect(object.min).toBe(8);
  expect(object.max).toBe(8);
  expect(object.length).toBe(3);
});

test('it should analyze [2] correctly', () => {
  const object = analyze([2]);

  expect(object.average).toBe(2);
  expect(object.min).toBe(2);
  expect(object.max).toBe(2);
  expect(object.length).toBe(1);
});
