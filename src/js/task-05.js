const refs = {
inputText: document.querySelector('#name-input'),
userName: document.querySelector('#name-output')
}

refs.inputText.addEventListener('input', changeName)

function changeName(event) {
    if (event.currentTarget.value.length === 0) {
        refs.userName.textContent = 'Anonymous'
    } else {
        refs.userName.textContent = event.currentTarget.value;
    }
}
