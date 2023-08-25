const data = './data.json';
async function fetchData() {
  try {
    let response = await fetch(`${data}`);
    let users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// const usersIds = [1, 2, 3];
// async function inParallel(list) {
// здесь метод map возвращает undefined, я не понимаю почему
//   let promises = list.map((item) => fetchData(item));
//   const ids = await Promise.all(promises);
//   console.log(ids);
// }
// inParallel(usersIds);

// Рабочий вариант
// Функция ожидания
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Здесь создаем функцию, которая создает объект даты, высчитывает время выполнения и
// выполняет параллельно promises
async function myPromiseAll(promises) {
  const starttime = new Date().getTime();
  const timings = [];
  promises.forEach((prom, ix) => {
    prom.then(() => {
      timings[ix] = new Date().getTime() - starttime;
    });
  });
  const result = await Promise.all(promises);
  return { result, timings };
}
// функция run, которая запускает весь процесс
async function run() {
  console.log('Starting stuff.');
  const ret = await myPromiseAll([wait(1000), wait(2000)]);
  console.log(ret.timings);
  // console.log(ret.result); result of promises
}

run();
