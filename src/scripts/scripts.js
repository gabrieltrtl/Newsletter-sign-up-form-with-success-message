const form = document.querySelector('.hero__form');
console.log(form);
const errorMsg = document.querySelector('.input__error');
console.log(errorMsg);
const emailInput = document.getElementById('email');
console.log(emailInput);

function showError() {
  errorMsg.textContent = "Valid email required";
}


form.addEventListener('submit', (event) => {
  if (!emailInput.validity.valid) {
    event.preventDefault();
    showError();
  }
})