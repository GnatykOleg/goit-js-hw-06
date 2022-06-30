const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngridients = document.querySelector('#ingredients');

ingredients.forEach(element => {
  let createItemEl = document.createElement('li');
  createItemEl.classList.add('item');
  createItemEl.textContent = element;
  listIngridients.append(createItemEl);
  console.log(createItemEl);
});

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод
// document.createElement().
// Добавит элементу класс item.
// Добавит название ингредиента как его текстовое содержимое.

// После чего вставит все <li> за одну операцию в список ul#ingredients.
