const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const emailValue = formElements.email.value;
    const passwordValue = formElements.password.value;
    
    const formFilled = { email: emailValue, password: passwordValue };

    console.log(formFilled);

    form.reset();
}