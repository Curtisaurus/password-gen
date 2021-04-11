// Assignment Code
var generateBtn = document.querySelector("#generate");

//  strings definining password character options
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = alphaUpper.toLowerCase();
var numbers = "0123456789";
var specChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|\\}~" + '"';


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// password generation functionality
function generatePassword() {
  // prompt for length with function to verify appropriate input type
  function verifyLength() {
    var passLength = prompt("Enter desired number of password characters: \n(min: 8, max: 128)");

    // exits function on cancel button
    if (!passLength) {  
      return;
      // verifies that password is between 8 and 128 characters
    } else if (passLength < 8 || passLength > 128) {
      alert("Must be an integer between 8 and 128");
      passLength = verifyLength();
    }

    return passLength;

  }

  passLength = verifyLength();

  // prompt for upper case letters
  // prompt for lower case letters
  // prompt for numbers
  // prompt for special characters
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
