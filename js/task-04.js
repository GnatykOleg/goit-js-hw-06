let counterValue = 0;

let totalValue = document.querySelector('#value');

const btnDecrement = document.querySelector('[data-action="decrement"]');

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  totalValue.textContent = counterValue;
});

const btnIncrement = document.querySelector('[data-action="increment"]');

btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  totalValue.textContent = counterValue;
});
