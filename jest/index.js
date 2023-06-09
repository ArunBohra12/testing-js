exports.add = function (a, b) {
  return a + b;
};

exports.fibonacci = (n) => {
  let a = 0,
    b = 1,
    c = n;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
};
