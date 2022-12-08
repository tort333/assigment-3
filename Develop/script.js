// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var passwordcharactherslower="abcdefghijklmnopqrstuvwxyz";
var passwordcharacthersupper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passwordcharacthersnumbers = "0123456789";
var passwordcharacthersspecials = "~!@#$%^&*?";


function generatePassword() {
  var actualPassword = "";
  
  alert("You will be presented with the following prompts to select criteria for generating a password.");

  
  var pwdLength = prompt("Choose a number between 8 and 128. This choice will be the length of the password.", );
  if (pwdLength != null) {
    if (pwdLength >= 8 && pwdLength <= 128) {

      
      alert("In the following prompts, at least one choice of lowercase, uppercase, numeric, and/or special characters must be confirmed.");

      var chooser = false;
      var charChoices = "";

      var ucaracters = confirm("Would you like your password to contain uppercase characters?");
      if (ucaracters === true) {
        chooser = true;
        charChoices += passwordcharacthersupper; 
      }

      var lcaracters = confirm("Would you like your password to contain lowercase characters?");
      if (lcaracters === true) {
        chooser = true;
        charChoices += passwordcharactherslower;
      }

      var numcaracters= confirm("Would you like your password to contain numeric characters?");
      if (numcaracters === true) {
        chooser = true;
        charChoices += passwordcharacthers;
      }

      var specialcaracter = confirm("Would you like your password to contain special characters?");
      if (specialcaracter === true) {
        chooser = true;
        charChoices += passwordcharacthers;
      }

      if (chooser === false) {
        alert("At least one choice of lowercase, uppercase, numeric, and/or special characters must be confirmed.");
      } else {

      
        for (i = 0; i < pwdLength ; i++ ) {
          actualPassword += charChoices.charAt[Math.floor(Math.random()*charChoices.length)];
        };
      };

    } else {
      alert("Please enter a number between 8 and 128")
    };

  };

  return actualPassword;
}
