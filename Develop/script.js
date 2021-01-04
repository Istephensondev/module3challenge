// Assignment code here

// creating a function for generating the password
function generatePassword(v, w, x, y, z) {
  var length = v,
        charset = w + x + y + z,
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input

function writePassword() {
  var promptNumberOfChar = window.prompt('Enter number of characters for password. Between 8 and 128.');
  promptNumberOfChar = parseInt(promptNumberOfChar);
  while (isNaN(promptNumberOfChar) || promptNumberOfChar < 8 || promptNumberOfChar > 128 ) {
    window.alert('You must enter a number between 8 and 128!');
    var promptNumberOfChar = window.prompt('Enter number of characters for password. Between 8 and 128.');
  }

  //while loop designed to force the user to enter the correct option(s) for the type of character sets
 
  while (promptCharSet = true) {
    
    //ask the user for the types of character they want for 
    var promptCharSet = window.prompt('Enter selection any one or all of the following for password character set: lowercase, uppercase, numbers, special characters.');
    promptCharSet = promptCharSet.toLowerCase();
    
    //initialize charSet variables to be used in the generatePassword function
   
    var charSetLower = "";
    var charSetUpper = "";
    var charSetNumber = "";
    var charSetSpecial = "";
    
    // indexOf string method to determine if specific keyword was used
    var indexLowercase = promptCharSet.indexOf("lowercase");
    var indexUppercase = promptCharSet.indexOf("uppercase");
    var indexNumbers = promptCharSet.indexOf("numbers");
    var indexSpecialChars = promptCharSet.indexOf("special characters");
    
    //nested if loop used to set the charSet for each charSet item.
      
    if (indexLowercase > -1) {
        charSetLower = "abcdefghijklmnopqrstuvwxyz"
      } 
      if (indexUppercase > -1) {
        charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      }
      if (indexNumbers > -1){
        charSetNumber = "0123456789"
      }
      if (indexSpecialChars > -1){
        charSetSpecial = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      }
      
      // checks to make sure the user entered in a correct value or any value at all. if the user enters a correct value, we break the while loop.
      
      if (promptCharSet = false || indexLowercase === -1 && indexUppercase === -1 && indexNumbers === -1 && indexSpecialChars === -1) {
        window.alert('You must enter at least one of the following: lowercase, uppercase, numbers, special characters');
      } else {
        break;
      }
  }
    // pass the user input options and associated character sets to the generatePassword() function.
   var password = generatePassword(promptNumberOfChar, charSetLower, charSetUpper, charSetNumber, charSetSpecial);
   var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  