const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);
input.addEventListener('input', onInputChange);

function onInputBlur(event) {
    if (event.currentTarget.value.length < input.dataset.length) {
        input.classList.add('invalid');
    } else {
        input.classList.add('valid');
    }
}

function onInputChange() {
    input.classList.remove('invalid', 'valid');
}