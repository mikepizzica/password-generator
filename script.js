// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// tie button click to prompts for criteria.

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// checkboxes for prompts? t/f? tie responses to if statements

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// if length of password is >= 8 and <=128
// the pasword is valid
// else
// the password is invalid

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// var lowercase = true/false???
// var uppercase = true/false???
// var numeric = true/false???
// var special = ture/false???

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// need to research "validated" and "character type"

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// cross-reference generated password w/ criteria selected earlier. use a function here?

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// alert("Password is: ....");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);