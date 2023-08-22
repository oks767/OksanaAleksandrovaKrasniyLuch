// Part one
function delayedPrint(message, delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(message);
    }, delay);
  });
}

let promise = delayedPrint('hello, world', 2000);
promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
// Part two

function fetchData(object) {
  return new Promise(function (resolve, reject) {
    resolve(object);
  });
}
let promiseTwo = fetchData({ name: 'oksana', age: 25 });
promiseTwo
  .then((object) => {
    console.log(object);
  })
  .catch((error) => {
    console.log(error);
  });
// Part three

function getDownload(message) {
  return new Promise(function (resolve, reject) {
    resolve(message);
  });
}
let promiseThree = getDownload('Начинаю загрузку данных...');
let timeOut = setTimeout(() => {
  promiseThree
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
}, 2000);
let getData = setTimeout(() => {
  promiseTwo
    .then((object) => {
      console.log(object);
    })
    .catch((error) => {
      console.log(error);
    });
}, 3000);

// Part three/number two
let timeOutTwo = setTimeout(() => {
  promiseThree
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
  promiseTwo
    .then((object) => {
      console.log(object);
    })
    .catch((error) => {
      console.log(error);
    });
}, 2000);
