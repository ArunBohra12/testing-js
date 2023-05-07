const fetch = require("node-fetch");

exports.getSingleTodo = async function () {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const data = await fetch(url);
  return data.json();
};

exports.randomPromise = function () {
  return new Promise(function (resolve, reject) {
    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
      return reject("Rejected");
    }

    resolve("Resolved");
  });
};
