const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

function inputHandler (event) {
    outputEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        outputEl.textContent = "Anonymous";
    }
}
inputEl.addEventListener('input', inputHandler);

