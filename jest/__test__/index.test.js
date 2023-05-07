const { add, fibonacci } = require("..");

test("adds 1 + 2 to equal 3", function () {
  expect(add(1, 2)).toBe(3);
});

describe("Fibonacci sequence", function () {
  test("Input - 3", function () {
    expect(fibonacci(3)).toBe(2);
  });

  test("Input - 10", function () {
    expect(fibonacci(10)).toBe(55);
  });

  test("Input - 20", function () {
    expect(fibonacci(20)).toBe(6765);
  });
});

describe("Testing object values", function () {
  const userData = {
    name: "Arun Bohra",
    age: 19,
  };

  test("toEquals method", function () {
    expect(userData).toEqual({ name: "Arun Bohra", age: 19 });
  });
});

test("NOT check: Sum of positive nums can't be 0", function () {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      expect(i + j).not.toBe(0);
    }
  }
});

describe("Test for truthiness", function () {
  test("Null check", function () {
    const n = null;

    expect(n).toBeNull();
    // expect(n).toBeDefined();
    // expect(n).not.toBeDefined();
    // expect(n).toBeTruthy();
    expect(n).toBeFalsy();
  });

  test("Zero check", function () {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

describe("Arrays and iterables", function () {
  test("Arrays and sets", function () {
    expect(shoppingList).toContain("paper towels");
    expect(new Set(shoppingList)).toContain("kleenex");
  });
});
