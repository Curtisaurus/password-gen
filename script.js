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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
