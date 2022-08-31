const inputName = document.querySelector('#validation-input');
const styles = document.querySelector('style');

inputName.addEventListener('blur', quantitySymbols)
console.log(typeof Number(inputName.dataset.length));

function quantitySymbols(event) { 
    if (event.target.value.length === Number(inputName.dataset.length)) {
        return inputName.classList.add('valid') || inputName.classList.remove('invalid');
    }
    return inputName.classList.add('invalid') || inputName.classList.remove('valid');

}


