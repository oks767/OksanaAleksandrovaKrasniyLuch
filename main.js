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
// Part two/number two
function fetchDataTwo() {
  fetch('./data.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then((response) => response.json())
    .then((result) => console.log(JSON.stringify(result)));
}
fetchDataTwo();

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
