const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

export const getLocalStorage = () => {
  if (
    !localStorage.email &&
    !localStorage.password &&
    !localStorage.confirmPassword
  ) {
    console.log('error');
  } else {
    emailEl.value = localStorage.getItem('email');
    passwordEl.value = localStorage.getItem('password');
    confirmPasswordEl.value = localStorage.getItem('confirmPassword');
  }
};
export const updateLocal = () => {
  localStorage.setItem('email', emailEl.value);
  localStorage.setItem('password', passwordEl.value);
  localStorage.setItem('confirmPassword', confirmPasswordEl.value);
};
