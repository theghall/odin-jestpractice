const capitalize = require('./capitalize.js');

test('it should capitalize first letter', () => {
  expect(capitalize('abc')).toMatch('Abc');
});
