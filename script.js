// We have four groups of possible characters 
// 2^4 = 16, therefore there are 16 combinations total
// One combination is "don't include any array" which will return "Please Enter Valid Criteria"
// The 15 valid combinations are written below
// 26 lowercase letters
var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// 26 uppercase letters
var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// 10 numeric digits
var Numeric = [0,1,2,3,4,5,6,7,8,9];
// 33 special characters per https://www.owasp.org/index.php/Password_special_characters
var Special = [" ","!","\"","#","$","%","&","\`","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
// 11 combinations of two or more of the four arrays above are written below
LowercaseUppercase = Lowercase.concat(Uppercase);
LowercaseNumeric = Lowercase.concat(Numeric);
LowercaseSpecial = Lowercase.concat(Special);
LowercaseUppercaseNumeric = Lowercase.concat(Uppercase,Numeric);
LowercaseUppercaseSpecial = Lowercase.concat(Uppercase,Special);
LowercaseNumericSpecial = Lowercase.concat(Numeric,Special);
LowercaseUppercaseNumericSpecial = Lowercase.concat(Uppercase,Numeric,Special);
UppercaseNumeric = Uppercase.concat(Numeric);
UppercaseSpecial = Uppercase.concat(Special);
UppercaseNumericSpecial = Uppercase.concat(Numeric,Special);
NumericSpecial = Numeric.concat(Special);

// function to write the password which is assigned to our button click
function writePassword() {

  // function to get input for the length of the password which must be a number between 8 and 128, inclusive
  function getLength() {
    var passwordLength = prompt("Enter desired character length of password (8 to 128)");
    if (8 <= passwordLength && passwordLength <= 128) {
      return passwordLength;
    } else {
      alert("Please Enter Valid Criteria");
      return getLength();
    }
  }
  // caling the function directly above and storing the value of the input for length in a variable so it can be called later
  var passwordLength = getLength();

  // prompts to get boolean t/f values for whether or not an array should be included
  var randomCharacters = [];
  if (confirm("Include Lowercase?"));
    randomCharacters = randomCharacters.concat(Lowercase)
  var includeLowercase = confirm("Include Lowercase?");
  if (confirm("Include Uppercase"));
    randomCharacters = randomCharacters.concat(Uppercase)
  var includeUppercase = confirm("Include Uppercase?");
  var includeNumeric = confirm("Include Numeric?");
  var includeSpecial = confirm("Include Special Characters?");

  // storing the value of the result in variable which we will use in the logic directly below
  var result = '';
  // logic to generate a password using all set up work in the code up to this point and user input that has been recorded
  function generatePassword() {
    if (includeLowercase === true && includeUppercase === false && includeNumeric === false && includeSpecial === false) {
      for (var i = 0; i < passwordLength; i++) {
        result += Lowercase[Math.floor(Math.random() * Lowercase.length)];
      }
    } else if (includeLowercase === true && includeUppercase === true && includeNumeric === false && includeSpecial === false) {
      for (var i = 0; i < passwordLength; i++) {
        result += LowercaseUppercase[Math.floor(Math.random() * LowercaseUppercase.length)];
      }
    } else if (includeLowercase === true && includeUppercase === false && includeNumeric === true && includeSpecial === false) {
      for (var i = 0; i < passwordLength; i++) {
        result += LowercaseNumeric[Math.floor(Math.random() * LowercaseNumeric.length)];
      }
    } else if (includeLowercase === true && includeUppercase === false && includeNumeric === false && includeSpecial === true) {
      for (var i = 0; i < passwordLength; i++) {
        result += LowercaseSpecial[Math.floor(Math.random() * LowercaseSpecial.length)];
      }
    } else if (includeLowercase === true && includeUppercase === true && includeNumeric === true && includeSpecial === false) {
      for (var i = 0; i < passwordLength; i++) {
        result += LowercaseUppercaseNumeric[Math.floor(Math.random() * LowercaseUppercaseNumeric.length)];
      }
    } else if (includeLowercase === true && includeUppercase === true && includeNumeric === false && includeSpecial === true) {
      for (var i = 0; i < passwordLength; i++) {
        result += LowercaseUppercaseSpecial[Math.floor(Math.random() * LowercaseUppercaseSpecial.length)];
      }
    } else if (includeLowercase === true && includeUppercase === false && includeNumeric === true && includeSpecial === true) {
      for (var i = 0; i < passwordLength; i++) {
        result += LowercaseNumericSpecial[Math.floor(Math.random() * LowercaseNumericSpecial.length)];
      }
    } else if (includeLowercase === true && includeUppercase === true && includeNumeric === true && includeSpecial === true) {
      for (var i = 0; i < passwordLength; i++) {
        result += LowercaseUppercaseNumericSpecial[Math.floor(Math.random() * LowercaseUppercaseNumericSpecial.length)];
      }
    } else if (includeLowercase === false && includeUppercase === true && includeNumeric === false && includeSpecial === false) {
      for (var i = 0; i < passwordLength; i++) {
        result += Uppercase[Math.floor(Math.random() * Uppercase.length)];
      }
    } else if (includeLowercase === false && includeUppercase === true && includeNumeric === true && includeSpecial === false) {
      for (var i = 0; i < passwordLength; i++) {
        result += UppercaseNumeric[Math.floor(Math.random() * UppercaseNumeric.length)];
      }
    } else if (includeLowercase === false && includeUppercase === true && includeNumeric === false && includeSpecial === true) {
      for (var i = 0; i < passwordLength; i++) {
        result += UppercaseSpecial[Math.floor(Math.random() * UppercaseSpecial.length)];
      }
    } else if (includeLowercase === false && includeUppercase === true && includeNumeric === true && includeSpecial === true) {
      for (var i = 0; i < passwordLength; i++) {
        result += UppercaseNumericSpecial[Math.floor(Math.random() * UppercaseNumericSpecial.length)];
      }
    } else if (includeLowercase === false && includeUppercase === false && includeNumeric === true && includeSpecial === false) {
      for (var i = 0; i < passwordLength; i++) {
        result += Numeric[Math.floor(Math.random() * Numeric.length)];
      }
    } else if (includeLowercase === false && includeUppercase === false && includeNumeric === true && includeSpecial === true) {
      for (var i = 0; i < passwordLength; i++) {
        result += NumericSpecial[Math.floor(Math.random() * NumericSpecial.length)];
      }
    } else if (includeLowercase === false && includeUppercase === false && includeNumeric === false && includeSpecial === true) {
      for (var i = 0; i < passwordLength; i++) {
        result += Special[Math.floor(Math.random() * Special.length)];
      }
    } else {
      alert("Please Enter Valid Criteria")
    }
  }
  // calling the function directly above
  generatePassword()
  // printing the result to the page
  var passwordText = document.querySelector("#password");
  passwordText.value = result;
}