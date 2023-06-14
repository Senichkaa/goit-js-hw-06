function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const destroyButton = document.querySelector('[data-destroy]');
const createButton = document.querySelector('[data-create]');
const boxesValue = document.querySelector('#boxes');
const controlsValue = document.querySelector('#controls')

function createSomeBoxes(amount) {
  let size = 30;
  const createdBoxes = [];
}


