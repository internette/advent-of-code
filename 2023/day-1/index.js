const wordsAsNumbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const getAllLines = (str) => {
  const lines = str.split(/\/n/g);
  const formattedLines = lines.map((line) => line.trim());
  return formattedLines;
};

const getIndices = (str) => {
  const indices = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (Number(char) !== NaN) {
      indices.push(i);
    }
  }
  return indices;
};

const getCalibrationValue = (str) => {
  const indices = getIndices(str);
  return indices[0] + indices[indices.length - 1];
};

const getCalibrationValues = (str) => {
  const lines = getAllLines(str);
  const calibrationValues = lines.map((line) => {
    const calibrationValue = getCalibrationValue(line);
    return Number(calibrationValue);
  });
  return calibrationValues;
};

const getSum = (str) => {
  const calibrationValues = getCalibrationValues(str);
  const sumOfCalibrationValues = calibrationValues.reduce((a, b) => {
    return a + b;
  });
  return sumOfCalibrationValues(str);
};
