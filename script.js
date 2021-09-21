// // TODO come back to this, uncomment here thru line 12, and tie to button click
// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

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
function getLength() {
  var passwordLength = prompt("Enter desired character length of password (8 to 128)");
  if (8 <= passwordLength && passwordLength <= 128) {
    console.log(passwordLength);
  } else {
    alert("Please Enter Valid Criteria");
    getLength();
  }
}
getLength()

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
var includeLowercase = confirm("Include Lowercase?");
console.log(includeLowercase);
var includeUppercase = confirm("Include Uppercase?");
console.log(includeUppercase);
var includeNumeric = confirm("Include Numeric?");
console.log(includeNumeric);
var includeSpecial = confirm("Include Special Characters?");
console.log(includeSpecial);
// var lowercase = true/false??? 26 characters below
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var uppercase = true/false??? 26 characters below
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numeric = true/false??? 10 characters below
var numeric = [0,1,2,3,4,5,6,7,8,9];
// var special = true/false??? 33 characters below
var special = [" ","!","\"","#","$","%","&","\`","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
// made a test "for" loop
for (var i = 0; i < uppercase.length; i++) {
    console.log(uppercase[i]);
}
// code to pull a random element from an array
console.log(lowercase[Math.floor(Math.random() * lowercase.length)]);
console.log(uppercase[Math.floor(Math.random() * uppercase.length)]);
console.log(numeric[Math.floor(Math.random() * numeric.length)]);
console.log(special[Math.floor(Math.random() * special.length)]);

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
// // TODO come back to this, uncomment this line and the one below, tie to button click
// generateBtn.addEventListener("click", writePassword);