const { add } = require("..");

test("adds 1 + 2 to equal 3", function () {
  expect(add(1, 2)).toBe(3);
});
