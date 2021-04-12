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

  if (password != undefined) {
    passwordText.value = password;
  }

}

// password generation functionality
function generatePassword() {

  // defining empty string to concatenate with total possible characters - clears possible characters
  var allChar = "";

  // defining empty string to represent final password to concatenate characters
  var finalPass = ""
  // // prompt for length with function to verify appropriate input type
  // function verifyLength() {
  //   var passLength = prompt("Enter desired number of password characters: \n(min: 8, max: 128)");

  //   // exits function on cancel button
  //   if (!passLength) {  
  //     return;
  //     // verifies that password is between 8 and 128 characters
  //   } else if (passLength < 8 || passLength > 128) {
  //     alert("Must be an integer between 8 and 128");
  //     passLength = verifyLength();
  //   }

  //   return passLength;

  // }

  // passLength = verifyLength();

  var passLength = prompt("Enter desired number of password characters: \n(min: 8, max: 128)");

  var queryUpper = confirm("Should the password contain uppercase letters?");
  if (queryUpper) {
    allChar = allChar + alphaUpper;
  }

  var queryLower = confirm("Should the password contain lowercase letters?");
  if (queryLower) {
    allChar = allChar + alphaLower;
  }

  var queryNumbers = confirm("Should the password contain numbers?");
  if (queryNumbers) {
    allChar = allChar + numbers;
  }

  var querySpecial = confirm("Should the password contain special characters?");
  if (querySpecial) {
    allChar = allChar + specChar;
  }

  if (allChar == "") {
    alert("Must select at least one type of character.");
    return;
  } else {
    for (i = 0; i < passLength; i++) {

      let randIndex = Math.floor(Math.random()*allChar.length);
      let charChoice = allChar.charAt(randIndex);
      finalPass = finalPass + charChoice;
    }
  }

  return finalPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
