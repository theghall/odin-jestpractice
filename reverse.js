function myReverse(string) {
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversed = reversed + string[i];
  }

  return reversed;
}

module.exports = myReverse;
