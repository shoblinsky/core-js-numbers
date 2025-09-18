function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}

function getAverage(value1, value2) {
  if ((value1 + value2) / 2 === 0) {
    return 0;
  }
  return value1 / 2 + value2 / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  let result = 1;
  result = -b / a;
  return result;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  return Math.acos(
    (x1 * x2 + y1 * y2) /
      (Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2))
  );
}

function getLastDigit(value) {
  return value % 10;
}

function parseNumberFromString(value) {
  return String(value);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

function roundToPowerOfTen(num, pow) {
  let multiply = 1;
  switch (pow) {
    case 1:
      multiply = 10;
      break;
    case 2:
      multiply = 100;
      break;
    case 3:
      multiply = 1000;
      break;
    default:
      multiply = 1;
  }
  if (multiply === 1) return num;
  return Math.round(Math.floor(num) / multiply) * multiply;
}

function isPrime(n) {
  switch (true) {
    case n <= 1:
      return false;
    case n <= 3:
      return true;
    case n % 2 === 0 || n % 3 === 0:
      return false;
    default:
      break;
  }

  let factorial = 1;
  for (let i = 2; i < n; i += 1) {
    factorial = (factorial * i) % n;
  }
  return (factorial + 1) % n === 0;
}

function toNumber(value, def) {
  const number = Number(value);
  if (Number.isNaN(number)) {
    return def;
  }
  return number;
}

function getCube(num) {
  return num ** 3;
}

function getFibonacciNumber(index) {
  if (index === 0) return 0;
  let first = 1;
  let second = 1;
  for (let i = 3; i <= index; i += 1) {
    const third = first + second;
    first = second;
    second = third;
  }
  return second;
}

function getSumToN(n) {
  let res = 0;
  let i = 0;
  while (i <= n) {
    res += i;
    i += 1;
  }
  return res;
}

function getSumOfDigits(num) {
  let res = 0;
  const numString = num.toString();
  for (let i = 0; i < numString.length; i += 1) {
    res += parseInt(numString[i], 10);
  }
  return res;
}

function isPowerOfTwo(num) {
  return Math.log2(num) % 1 === 0;
}

function getSine(num) {
  return Math.sin(num);
}

function numberToStringInBase(number, base) {
  return number.toString(base);
}

function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

function getNumberValue(number) {
  return number.valueOf();
}

function isNumber(number) {
  return Number.isFinite(number);
}

function isInteger(number) {
  return Number.isInteger(number);
}

function getFloatOnString(str) {
  return Number.parseFloat(str);
}

function getIntegerOnString(str, base) {
  return Number.parseInt(str, base);
}

function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

function roundToSmallestInteger(number) {
  return Math.floor(number);
}

function roundToLargestInteger(number) {
  return Math.ceil(number);
}

function roundToNearestInteger(number) {
  return Math.round(number);
}

function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

function getSumOfNumbers(x1, x2, x3) {
  return (x1 * 10 + x2 * 10 + x3 * 10) / 10;
}

function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random(max) + min);
}

function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}

function getCountOfOddNumbers(number) {
  if (number % 2 !== 0) {
    return Math.floor(Math.abs(number) / 2) + 1;
  }
  return Math.floor(Math.abs(number) / 2);
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};