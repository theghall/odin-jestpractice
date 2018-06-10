
function analyze(array) {
  const arrayCopy = array.sort(function(a,b) { return a - b });
  const length = array.length;
  const average = Math.round(array.reduce((acc, cur) => acc + cur, 0) / length);
  const min = arrayCopy[0];
  const max = arrayCopy[array.length - 1];

  return {average: average, min: min, max: max, length: length};
}

module.exports = analyze;
