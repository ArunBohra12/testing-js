exports.fibonacciNumber = function (n) {
  if (n === null || n === undefined || typeof n !== "number") {
    throw new Error("n is not a number");
  }

  if (n < 0) {
    throw new Error("n should be a positive number");
  }

  let i = 2;
  let sum = n;

  let secondLastNumber = 0;
  let lastNumber = 1;

  while (n >= i) {
    sum = lastNumber + secondLastNumber;

    secondLastNumber = lastNumber;
    lastNumber = sum;

    i++;
  }

  return sum;
};

exports.distanceBetweenTwoPoints = function (x1, y1, x2, y2) {
  if (
    typeof x1 !== "number" ||
    typeof y1 !== "number" ||
    typeof x2 !== "number" ||
    typeof y2 !== "number"
  ) {
    throw new Error("Please provide valid numbers for all inputs");
  }

  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};
