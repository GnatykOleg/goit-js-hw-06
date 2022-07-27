const allItems = document.querySelectorAll('.item');
const allItemsLength = allItems.length;
console.log(`Number of categories: ${allItemsLength}`);

allItems.forEach(element => {
  let itemTitleEl = element.querySelector('h2').textContent;
  let itemChildrenlength = element.querySelectorAll('li').length;

  console.log(`Category: ${itemTitleEl}`);
  console.log(`Elements: ${itemChildrenlength}`);
});
