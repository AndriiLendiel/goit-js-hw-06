
const formReg = document.querySelector('.login-form');
const inputMail = document.querySelector('[type="email"]');
const inputPassword = document.querySelector('[type="password"]');
const submitBtn = document.querySelector('[type="submit"]');



formReg.addEventListener('submit', formSubmit);


submitBtn.addEventListener('submit', clearInput)

// submitBtn.addEventListener('submit', alertCheck)

function formSubmit(event) {
    event.preventDefault();
console.dir(inputMail.value.length);
    if (inputMail.value.length === 0 || inputPassword.value.length === 0) {
        alert('все поля должны быть заполнены.')
    }
    

    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;

    const dataForm = {
        email,
        password
    }
    console.log(dataForm);
    clearInput()
};

function clearInput() {
    inputMail.value = '';
    inputPassword.value = '';
}







