let counterValue = 0;

const decrementButtonEl = document.querySelector('[data-action="decrement"]');
console.log(decrementButtonEl);
const incrementButtonEl = document.querySelector('[data-action="increment"]');
console.log(incrementButtonEl);
const spanReplaceEl = document.querySelector('#value');

decrementButtonEl.addEventListener('click', () => {
    counterValue -= 1;  
    spanReplaceEl.textContent = counterValue;
})

incrementButtonEl.addEventListener('click', () => {
    counterValue += 1;  
    spanReplaceEl.textContent = counterValue;
})