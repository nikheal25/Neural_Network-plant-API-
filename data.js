function getRandomizeVal(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = (low, high, dataSize) => {
  var data = [];
  var count = 0;
  var valOne, valTwo;
  var input = [];
  var output = [];
  do {
    valOne = getRandomizeVal(5, (low + high) / 2);
    valTwo = getRandomizeVal((low, high) / 2, 40);

    input = [valOne, valTwo];
    if (valOne + 3 > low && valTwo - 3 < high) {
      output = [1];
    } else {
      output = [0];
    }
    count++;
    data = data.concat({ input: input, output: output });
  } while (count < dataSize);
  return data;
};
