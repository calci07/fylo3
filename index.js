const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#eml-error');


function validateEmail(){
   if (!emailInput.value.match (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = "Valid email required";
emailInput.style.borderColor = "red";
return false;
   } 
   else {
    emailError.innerHTML = "";
    emailInput.style.borderColor = "green";
    return true;
   }

}

emailInput.addEventListener('input', validateEmail);