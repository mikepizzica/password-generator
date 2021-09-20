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
// var userGuess = prompt("");

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// confirm for prompts? t/f? tie responses to if statements
// var userGuess = confirm("");

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// if length of password is >= 8 and <=128
// the pasword is valid
// else
// the password is invalid
// var userGuess = prompt("");

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// var lowercase = true/false??? 26 characters below
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var uppercase = true/false??? 26 characters below
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numeric = true/false??? 10 characters below
var numeric = [0,1,2,3,4,5,6,7,8,9];
// var special = true/false??? 33 characters below
var special = [" ","!","\"","#","$","%","&","\`","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
for (var i = 0; i < uppercase.length; i++) {
    console.log(uppercase[i]);
// these can be confirms

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