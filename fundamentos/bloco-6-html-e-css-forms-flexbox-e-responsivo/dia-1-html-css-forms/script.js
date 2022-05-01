const buttonSubmit = document.querySelector('#btn');

buttonSubmit.addEventListener('click', cancelSubmit);
function cancelSubmit(event) {
    event.preventDefault();
}