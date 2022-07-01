// 1. Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.
// 2. Создай переменную counterValue в которой будет
// храниться текущее значение счетчика и инициализируй её значением 0.
//  3. Добавь слушатели кликов на кнопки, внутри которых
// увеличивай или уменьшай значение счтетчика.
//  4. Обновляй интерфейс новым значением переменной counterValue.

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
