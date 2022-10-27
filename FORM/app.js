const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
 e.preventDefault();
 validateInput();
})

function validateInput(){
 const firstNameValue = firstName.value.trim();
 const lastNameValue = lastName.value.trim();
 const emailValue = email.value.trim();
 const passwordValue = password.value.trim();

 // first name check
 if( firstNameValue=== ""){
checkError(firstName, "First Name cannot be empty");
 }else{
confirmNoError(firstName);
 }
 // last name check
 if( lastNameValue=== ""){
checkError(lastName, "Last Name cannot be empty");
 }else{
confirmNoError(lastName);
 }
 // email check
 if( emailValue=== ""){
checkError(email, "Looks like this is not an email");
changePlaceholder();
 }else{
confirmNoError(email);
 }
 // Password check
 if( passwordValue=== ""){
checkError(password, "Password cannot be empty");
 }else{
confirmNoError(password);
 }
}

// check error function
function checkError(input, message){
const controls = input.parentElement;
const small= controls.querySelector('small');
small.innerText = message;
controls.className = 'form__control error';
}

// Confirm no error function
function confirmNoError(input){
const controls = input.parentElement;
controls.className = 'form__control clear';
}
// change placeholder text
function changePlaceholder(){
 email.setAttribute("placeholder", "email@example/com");
}
