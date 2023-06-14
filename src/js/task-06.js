const lengthEl = 6;
const validationEl = document.querySelector('#validation-input');

validationEl.addEventListener('blur', outlineHandler);

function outlineHandler(event) {
    const inputElements = event.currentTarget.value.length;
    if (inputElements === lengthEl) {
        validationEl.classList.remove('invalid');
        validationEl.classList.add('valid');
    } else {
        validationEl.classList.add('invalid');
        validationEl.classList.remove('valid');
    }
}

// console.log(outlineHandler);