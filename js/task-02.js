const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngridients = document.querySelector('#ingredients');

const createItemRef = ingredients.map(ingredient => {
  const createItemEl = document.createElement('li');
  createItemEl.textContent = ingredient;
  createItemEl.classList.add('item');
  console.log(createItemEl);
  return createItemEl;
});

listIngridients.append(...createItemRef);
