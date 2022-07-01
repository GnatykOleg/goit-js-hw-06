const allItems = document.querySelectorAll('.item');
const allItemsLength = allItems.length;
console.log(`Number of categories: ${allItemsLength}`);

allItems.forEach(element => {
  let itemTitleEl = element.querySelector('h2').textContent;
  let itemChildrenlength = element.querySelectorAll('li').length;

  console.log(`Category: ${itemTitleEl}`);
  console.log(`Elements: ${itemChildrenlength}`);
});

// 1.Посчитает и выведет в консоль количество категорий в ul#categories,
//     то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
// и количество элементов в категории(всех вложенных в него < li >).

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
