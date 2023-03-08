let counterValue = 0;

const btnDecrement = document.querySelector('[data-action=decrement]');
const btnIncrement = document.querySelector('[data-action=increment]');
const valueSpan = document.querySelector('#value');

btnDecrement.addEventListener('click', onDecrementBtnClicked)
btnIncrement.addEventListener('click', onIncrementBtnClicked);

function onIncrementBtnClicked() {
    counterValue += 1;
    valueSpan.textContent = counterValue;
}

function onDecrementBtnClicked() {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
}