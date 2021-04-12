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

  // does not change textbox if falsey/undefined value such as when cancel is selected in first prompt
  if (password) {
    passwordText.value = password;
  }

}

// password generation functionality
function generatePassword() {

  // defining empty string to concatenate with total possible characters - clears possible characters
  var allChar = "";

  // defining empty string to represent final password to concatenate characters
  var finalPass = ""

  // prompt for length with function to verify appropriate input type
  function verifyLength() {
    var passLength = prompt("Enter desired number of password characters: \n(min: 8, max: 128)");

    // variable that stores 0 if number is integer, NaN if other string, or value >0 if number not an integer
    var intCheck = passLength % 1;

    // exits function on cancel button
    if (!passLength) {  
      return;
      // verifies that password is an integer between 8 and 128 inclusive
    } else if (passLength < 8 || passLength > 128 || Number.isNaN(intCheck) || intCheck > 0) {
      // shows alert and runs character length prompt function again
      alert("Must be an integer between 8 and 128");
      return verifyLength();
    } else {
      return passLength;
    }
  }

  var verifiedLength = verifyLength();

  // if cancel button hit during length prompt, exits prompt structure
  if (!verifiedLength) {
    return;
  }

  // confirms for uppercase and concatenates to string
  var queryUpper = confirm("Should the password contain uppercase letters?");
  if (queryUpper) {
    allChar = allChar + alphaUpper;
  }

  // confirms for lowercase and concatenates to string
  var queryLower = confirm("Should the password contain lowercase letters?");
  if (queryLower) {
    allChar = allChar + alphaLower;
  }

  // confirms for numbers and concatenates to string
  var queryNumbers = confirm("Should the password contain numbers?");
  if (queryNumbers) {
    allChar = allChar + numbers;
  }

  // confirms for special characters and concatenates to string
  var querySpecial = confirm("Should the password contain special characters?");
  if (querySpecial) {
    allChar = allChar + specChar;
  }

  // verifies that one or more character set is selected then creates password string
  if (allChar == "") {
    alert("Must select at least one type of character.");
    return;
  } else {
    // loops for requested length of password, choosing random index of character in possible string of characters
    for (i = 0; i < verifiedLength; i++) {

      let randIndex = Math.floor(Math.random()*allChar.length);
      let charChoice = allChar.charAt(randIndex);
      finalPass = finalPass + charChoice;
    }
  }

  return finalPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
