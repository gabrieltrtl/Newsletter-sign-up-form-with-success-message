const form = document.querySelector('.hero__form');
const errorMsg = document.querySelector('.input__error');
const emailInput = document.getElementById('email');
const mainContainer = document.querySelector('.hero');
const completedContainer = document.querySelector('.completed');


function showError() {
  if(emailInput.validity.valueMissing) {
    errorMsg.textContent = "Valid email required";
    emailInput.style.border = "1px solid #FF6155";
    emailInput.style.backgroundColor = "rgba(255,97, 85, 0.15)";
    emailInput.style.color = "#FF6155";
  } else if (emailInput.validity.typeMismatch) {
    errorMsg.textContent = "Valid email required";
    emailInput.style.border = "1px solid #FF6155";
    emailInput.style.backgroundColor = "rgba(255,97, 85, 0.15)";
    emailInput.style.color = "#FF6155";
  }
}


form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!emailInput.validity.valid) {
    showError();
  } else {
    mainContainer.style.display = "none";
    completedContainer.style.display = "block";
  }
})