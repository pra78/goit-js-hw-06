const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementContainer = document.querySelector("ul#ingredients")

const elements = ingredients.map(ingredient => {
  const ingredientLi = document.createElement('li');
  ingredientLi.textContent = ingredient;
  ingredientLi.classList.add('item');
  return ingredientLi;
})

elementContainer.append(...elements);
