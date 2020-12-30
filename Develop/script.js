// Assignment code here

function generatePassword(a, b, c, d, e) {
  var length = a,
        charset = b + c + d + e,
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};

// creating a function for generating the password

var promptNumberOfChar = window.prompt('Enter number of characters for password. Between 8 and 128.');
  while (promptNumberOfChar < 8 || promptNumberOfChar > 128 ) {
    window.alert('You must enter a number between 8 and 128!');
    var promptNumberOfChar = window.prompt('Enter number of characters for password. Between 8 and 128.');
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
