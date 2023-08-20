const numberOne = 1;
const numberTwo = 12.34;
const firstName = 'Oksana';
const surname = 'Aleksandrova';
const boolenOne = true;
const boolenTwo = false;

// operation with numbers
let summ = numberOne + numberTwo;
let subtract = numberTwo - numberOne;
let multi = numberOne * numberTwo;
let divide = numberTwo / numberOne;
let remains = numberTwo % numberOne;
console.log(summ, subtract, multi, divide, remains);
//typeof variables
console.log(
  typeof numberOne,
  typeof numberTwo,
  typeof firstName,
  typeof surname,
  typeof boolenOne,
  typeof boolenTwo
);
//PART TWO
let str = 'I learning javascript';
const arrayWordds = str.split(',');
console.log(arrayWordds);
// Array
function rotateArray(k, array) {
  for (i = 0; i < k; i++) array.unshift(array.pop());
  console.log(array);
}
rotateArray(2, [2, 3, 4, 5, 6]);

// fibonachi
const fibo = (n) => {
  if (n < 2) {
    return n;
  }
  return fibo(n - 1) + fibo(n - 2);
};
fibo(5);
