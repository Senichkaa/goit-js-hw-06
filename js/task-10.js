function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const destroyButton = document.querySelector('[data-destroy]');
const createButton = document.querySelector('[data-create]');
const boxesValue = document.querySelector('#boxes');
const controlsValue = document.querySelector('#controls')

// not working :(

// createButton.addEventListener('click', event => {
//   createSomeBoxes(controlsValue.value);
// }); 

// destroyButton.addEventListener('click',destroySomeBoxes);

// const createBox(size, bcg) = `<div style= "width = ${size}";"height = ${size}";backgroundColor = ${bcg}>`;

// function createSomeBoxes(amount) {
//   let size = 30;
//   const createdBoxes = [];
//  for (let index = 0; index < amount; index +=1) {
//   size += 10;
//    createdBoxes.push(createBox(size, getRandomHexColor()));
//  }
//   boxesValue.insertAdjacentHTML("beforeend", createdBoxes.join(''));
// }

// function destroySomeBoxes() {
//   boxesValue.innerHTML = "";
// }

