
const imageInput = document.querySelector('#image');

// Interrompe o comportamento padrão do botão Submit:
function cancelSubmit(event) {
    event.preventDefault(); 
}

// Limpa as informações quando clica no botão Limpar:
function clearInput() {
    const formInputs = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let inputs of formInputs) {
        const userInput = formInputs[inputs];
        userInput.value ='';
        userInput.checked = false;
    }
    textArea.value = '';
}

window.onload = function () {
    const clearButton = document.querySelector('#clear-button'); // Habilita a função no botão.
    clearButton.addEventListener('click', clearInput);
    const submitButton = document.querySelector('#btn');
    submitButton.addEventListener('click', cancelSubmit);
};
