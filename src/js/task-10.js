function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const destroyButton = document.querySelector('[data-destroy]');
const createButton = document.querySelector('[data-create]');
const boxesValue = document.querySelector('#boxes');
const controlesValue = document.querySelector('#controls')



