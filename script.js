 //* options screens //
 let promptCount = window.prompt('How many characters would you like your password to contain? Yes or No? (8 character minimum)')
 var promptLower = window.prompt('Would you like your password to contain lower case letters? Yes or No?')
 var promptUpper = window.prompt('Would you like your password to contain upper case letters? Yes or No?')
 var promptNumeric = window.prompt('Would you like your password to contain numbers? Yes or No?')
 var promptSpecial = window.prompt('Would you like your password to contain special characters? Yes or No?')

function generatePasswordOptions () {
 


 // store input (translate to not be case sensitive) and set up if operations that determine whats allowed to be included in password characters. //
 
 //if (promptCount.toLocaleLowerCase()== )
 //needs to be limited to numbers only Number () cast the value to Number//

 //if (promptLower.toLocaleLowerCase() == "yes"){

// add to overall charactersAllowed
 }
 
 
 
 
  //Variable to store length of passwords from user input
//*var length = parseInt (prompt('How many characters would you like your password to contain?'), 10//);//
// User selects what password can contain through prompts. selections must be assigned meaning.var charactersAllowed =  //



// define a condition that exists if cancel is hit for all, maybe like a constant? and set up conditionals for when character categories are made true./




//* Class Walkthrough example *//
var specialCharacters = [
  '!',
  '”',
  '#',
  '$',
  '%',
  '&',
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  ']',
  '^',
  '_',
  '`',
  '{',
  '}',
  '~',
];
//* 29 special characters *//  
  

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var UpperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//** 10 characters, 26 characters *//










// Assignment code here
var generateBtn = document.querySelector("#generate"); //attaching java to html button, only id on page//


// ------------------function generatePassword() { //
  //  console.log("Button press confirmed") -------------------------//
  function generatePassword() {
    console.log("Button press confirmed")








    var random = Math.floor(Math.random()*10);
    console.log(random);
//* randomize number value only, why? how to make it show? //








    // return "Generated Password will go here" //
    return 
}


// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  //*Displaying password on page *//
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
