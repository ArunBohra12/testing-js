const { getSingleTodo, randomPromise } = require("../async");

describe("Promises", function () {
  test("ToDo Promises", function () {
    expect.assertions(1);

    return getSingleTodo().then(function (data) {
      expect(data.title).toBe("delectus aut autem");
    });
  });

  // The following test will be rejected 50% times
  // test("Random promise", function () {
  //   return randomPromise().then((data) => {
  //     expect(data).toBe("Resolved");
  //   });
  // });
});
