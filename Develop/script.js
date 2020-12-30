// Assignment code here

function generatePassword(lengthone, charsetone) {
  var length = lengthone,
      charset = "abcde",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var promptNumberOfChar = window.prompt('Enter number of characters for password. Between 8 and 128.');
  while (promptNumberOfChar < 8 || promptNumberOfChar > 128 ) {
    window.alert('You must enter a number between 8 and 128!');
    var promptNumberOfChar = window.prompt('Enter number of characters for password. Between 8 and 128.');
  }

  var password = generatePassword(promptNumberOfChar);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);