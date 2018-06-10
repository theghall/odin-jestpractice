function wrap(charCode, key) {
  let encodedChar = charCode + key;

  if (charCode >= 97 && charCode <= 122) {
    if (encodedChar > 122) {
      encodedChar = 97 + (encodedChar - 122 - 1);
    }
  } else if (encodedChar > 90) {
    encodedChar = 65 + (encodedChar - 90 - 1);
  }

  return encodedChar;
}

function encode(character, key) {
  const charCode = character.charCodeAt(0);
  let encodedChar = 0;
  if (/[a-z]/.test(character) || /[A-Z]/.test(character)) {
    encodedChar = wrap(charCode, key)
  } else {
    encodedChar = charCode;
  }

  return String.fromCharCode(encodedChar);
}

function validateParams(string, key) {
  if (string === '') {
    throw('An empty phrase was given');
  }
  if (key === 0 || key === 26) {
    throw('That key will produce clear text');
  }
  if ( key <= 0 || key > 26) {
    throw('A key must be between 1 and 25');
  }
}

function caesarCipher(string, key) {
  validateParams(string, key);
  const plainText = string.split('');
  const encodedText = plainText.map((character) => encode(character, key));
  return encodedText.join('');
}

module.exports = caesarCipher;
