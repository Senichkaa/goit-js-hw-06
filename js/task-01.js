const categoriesEl = document.querySelector('#categories');
const allCategoriesEl = Array.from(categoriesEl.children);
const countAllCategories = allCategoriesEl.length;

console.log(`Number of all categories is ${countAllCategories}`);

allCategoriesEl.forEach(element => {
    console.log(`Name of category: ${element.firstElementChild.textContent}`);
    console.log(`Number of elements: ${element.firstElementChild.nextElementSibling.children.length}`);
});