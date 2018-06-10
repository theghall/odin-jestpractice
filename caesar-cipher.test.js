const caesarCipher = require('./caesar-cipher');

test('it should encode "abc, def!" with key of 3 correctly', () => {
  expect(caesarCipher('abc, def!', 3)).toMatch('def, ghi!');
});

test('it should encode "ABC, DEF!" with key of 3 correctly', () => {
  expect(caesarCipher('ABC, DEF!', 3)).toMatch('DEF, GHI!');
});

test ('it should encode "zulu way" with key of 5 correctly', () => {
  expect(caesarCipher('zulu way', 5)).toMatch('ezqz bfd');
});

test ('it should encode "Zulu way" with key of 5 correctly', () => {
  expect(caesarCipher('Zulu way', 5)).toMatch('Ezqz bfd');
});

test('it should throw an error if key equals 26', () => {
  expect(() => caesarCipher('az', 26)).toThrow();
});

test('it should throw an error if key greater than 26', () => {
  expect(() => caesarCipher('az', 27)).toThrow();
});

test('it should throw an error if no text passed', () => {
  expect(() => caesarCipher('', 2)).toThrow();
});

test('it should throw an error if invalid key passed(0)', () => {
  expect(() => caesarCipher('abc', 0)).toThrow();
});

test('it should throw an error if invalid key passed(-1)', () => {
  expect(() => caesarCipher('abc', -1)).toThrow();
});



