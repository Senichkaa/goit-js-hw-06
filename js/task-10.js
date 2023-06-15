function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const destroyButton = document.querySelector("[data-destroy]");
const createButton = document.querySelector("[data-create]");
const boxesValue = document.querySelector("#boxes");
const controlsValue = document.querySelector("#controls > input");

createButton.addEventListener("click", (event) => {
  createBoxes(controlsValue.value);
});

destroyButton.addEventListener("click", destroyBoxes);

function createOneBox(size, bgc) {
  return `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
}

function createBoxes(amount) {
  let size = 30;
  const boxStack = [];

  for (let index = 0; index < amount; index += 1) {
    size += 10;
    boxStack.push(createOneBox(size, getRandomHexColor()));
  }
  boxesValue.innerHTML = `${boxStack.join("")}`;
  // boxesValue.insertAdjacentHTML("beforeend", boxStack.join(""));
}

function destroyBoxes() {
  boxesValue.innerHTML = "";
  controlsValue.value = "";
}
