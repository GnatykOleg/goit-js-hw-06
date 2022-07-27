const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmitFn);
function formSubmitFn(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Пожалуйста заполните все поля ввода данных');
  }

  const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
}
