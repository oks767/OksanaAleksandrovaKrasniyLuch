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
// Calc

function calc(a, b) {
  if (typeof a == 'string' || typeof b == 'string') {
    console.log('Введите число');
  } else {
    console.log(a * b);
  }
}
calc(7, 'a');

// Prime numbers

function isPrime(num) {
  if (num <= 1) {
    console.log(false);
  }
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      console.log(false);
    }
  }
  console.log(true);
}
isPrime(10);

// random password

function randomPassword(len) {
  const chars =
    '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomstring;
  for (var i = 0; i < len; i++) {
    randomstring = Math.random().toString(36).slice(-8);
    let rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum);
  }

  console.log(randomstring);
}
randomPassword(7);
