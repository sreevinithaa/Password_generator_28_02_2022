

var passwordlength = document.querySelector("#password_length");

var generateBtn = document.querySelector("#generate");

// assign charector set to constant variable
const UpperCaseValue = "ABCDEFGHIJKLMNOPQUSTUVWXYZ";
const LowerCaseValue = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "1234567890";
const Symbols = "~!@#$%^&*()?";

//Which will generate password based to cretieria.
function generatePassword() {
  var charset = "";
  var password = "";
  charset = GenerateCharectorSet();
  if (isEmpty(charset)) {
    alert("Please check atleast on option!");
    return;
  }
  var length = passwordlength.value;

  for (var i = 0; i < length; i++) {
    var random_index = Math.floor(Math.random() * charset.length);

    password = password + charset.charAt(random_index);
  }

  document.querySelector("#password").value = password;
}

//this method helps to check the value empty of null
function isEmpty(value) {
  return value == null || value.length === 0;
}


//Generate charector set based on selected criteria
function GenerateCharectorSet() {
  var charset = "";
  var chkSymbol = document.querySelector("#chkSymbol");
  var chknumber = document.querySelector("#chkNumber");
  var chklower = document.querySelector("#chkLowercase");

  var chkupper = document.querySelector("#chkUpperCase");
  if (chkupper.checked) {
    charset = charset + UpperCaseValue;
  }
  if (chklower.checked) {
    charset = charset + LowerCaseValue;
  }
  if (chknumber.checked) {
    charset = charset + Numbers;
  }
  if (chkSymbol.checked) {
    charset = charset + Symbols;
  }
  return charset;
}

//This method helps to update the span when the user change the slider value
function fuc_SlideValueChange() {
  var length = passwordlength.value;
  document.querySelector("#span_display_length").innerHTML = length;
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
passwordlength.addEventListener("input", fuc_SlideValueChange);
fuc_SlideValueChange();
