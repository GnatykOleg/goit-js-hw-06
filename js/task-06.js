const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', inputBlur);

function inputBlur(event) {
  const inputDataLength = Number(inputEl.dataset.length);
  const inputValue = event.currentTarget.value.length;

  if (inputValue === inputDataLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
