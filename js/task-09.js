function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector('.color');
const changeColorEl = document.querySelector('.change-color');
const body = document.querySelector('body');

changeColorEl.addEventListener('click',ChangeColor);

function ChangeColor() {
  const backroundColors = getRandomHexColor();
  body.style.backgroundColor = `${backroundColors}`;
  colorEl.textContent = `${backroundColors}`;
}



