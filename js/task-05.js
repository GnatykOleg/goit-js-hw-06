const inputNameEl = document.querySelector('#name-input');
const spanOutputNameEl = document.querySelector('#name-output');

inputNameEl.addEventListener('input', event => {
  spanOutputNameEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    spanOutputNameEl.textContent = 'Anonymous';
  }
});
