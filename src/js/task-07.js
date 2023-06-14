const fontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeEl.addEventListener('input',fontHandler);
textEl.style.fontSize = `${fontSizeEl.value}px`;
function fontHandler() {
    textEl.style.fontSize = `${fontSizeEl.value}px`;
}

//інший варіант виконання
// textEl.style.fontSize = `${fontSizeEl.value}px`;
// function fontHandler(event) {
//     const fontElements = event.currentTarget.value;

//     textEl.style.fontSize =`${fontElements}px`;
// }