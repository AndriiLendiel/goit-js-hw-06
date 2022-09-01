
const formReg = document.querySelector('.login-form');
const inputMail = document.querySelector('[type="email"]');
const inputPassword = document.querySelector('[type="password"]');
const submitBtn = document.querySelector('[type="submit"]');



formReg.addEventListener('submit', formSubmit);


submitBtn.addEventListener('submit', clearInput)

// submitBtn.addEventListener('submit', alertCheck)

function formSubmit(event) {
    event.preventDefault();
    if (inputMail.value.length === 0 || inputPassword.value.length === 0) {
    return alert('все поля должны быть заполнены.')
    }
    

    // const formEl = event.currentTarget.elements;
    // const email = formEl.email.value;
    // const password = formEl.password.value;

    const { elements: { email, password } } = event.currentTarget;
    const emailForm = email.value;
    const passwordForm = password.value;
    const dataForm = {
       emailForm,
        passwordForm
    }
    console.log(dataForm);
    clearInput()
};

function clearInput() {
    inputMail.value = '';
    inputPassword.value = '';
}







