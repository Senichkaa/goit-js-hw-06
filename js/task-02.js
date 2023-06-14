const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul');

const elements = ingredients.map(ingredient => {
  const createLi = document.createElement('li');
  createLi.textContent = ingredient;
  createLi.classList.add('item');
  return createLi;
});
ingredientsEl.append(...elements);