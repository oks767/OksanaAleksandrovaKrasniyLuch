let equallyButton = document.querySelector('.equally');
let numberOne = document.querySelector('.number-one');
let numberTwo = document.querySelector('.number-two');
let resultSpan = document.querySelector('.result');
let result;
function selectChanged(value) {
  let numberOneValue = +numberOne.value;
  let numberTwoValue = +numberTwo.value;

  switch (value) {
    case '1':
      return (result = numberOneValue + numberTwoValue);

      break;
    case '4':
      return (result = numberOneValue * numberTwoValue);

      break;
    case '2':
      return (result = numberOneValue - numberTwoValue);

      break;
    case '3':
      return (result = numberOneValue / numberTwoValue);
  }
  return result;
}
function equals() {
  resultSpan.textContent = result;
}
equallyButton.addEventListener('click', equals);
