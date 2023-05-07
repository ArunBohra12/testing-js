const { fibonacciNumber, distanceBetweenTwoPoints } = require("../functions");

describe("Fibonacci Sequence", function () {
  test("Falsy checks", function () {
    expect(() => fibonacciNumber(undefined)).toThrow("n is not a number");
    expect(() => fibonacciNumber(null)).toThrow("n is not a number");
    expect(() => fibonacciNumber(false)).toThrow("n is not a number");
    expect(() => fibonacciNumber("string")).toThrow("n is not a number");
    expect(fibonacciNumber(0)).toBe(0);
  });

  test("Pass valid input", function () {
    expect(fibonacciNumber(3)).toEqual(2);
    expect(fibonacciNumber(10)).toEqual(55);
    expect(fibonacciNumber(14)).toEqual(377);
  });

  test("Returns the correct result for large input", function () {
    expect(fibonacciNumber(78)).toEqual(8944394323791464);
  });

  test("Test negative numbers", function () {
    expect(() => fibonacciNumber(-1)).toThrow("n should be a positive number");
  });
});

describe("Distance between two points", function () {
  test("Wrong values for inputs", function () {
    expect(() => distanceBetweenTwoPoints()).toThrow(Error);
    expect(() => distanceBetweenTwoPoints(1, 2, 3, "4")).toThrow(Error);
  });

  test("Right values for inputs", function () {
    expect(distanceBetweenTwoPoints(4, 3, 0, 0)).toBe(5);
    expect(distanceBetweenTwoPoints(4, -2, -10, 3)).toBeCloseTo(14.87, 2);
  });
});
