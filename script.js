

 
 var promptLower = window.prompt('Would you like your password to contain lower case letters? Yes or No?',"Yes")
    if (promptLower.toLowerCase() == "yes"){
      console.log("Selection lower worked!");
      
    }



 var promptUpper = window.prompt('Would you like your password to contain upper case letters? Yes or No?',"Yes")
  if (promptUpper.toLowerCase() == "yes"){
    console.log("Selection upper worked!");

 
  }


 var promptNumeric = window.prompt('Would you like your password to contain numbers? Yes or No?',"Yes")

 if (promptNumeric.toLowerCase() == "yes"){
  console.log("Selection numeric worked!");

 
 }


 var promptSpecial = window.prompt('Would you like your password to contain special characters? Yes or No?',"Yes")

 if (promptSpecial.toLowerCase() == "yes"){
  console.log("Selection special worked!");

  }

  
  
  var promptCount = prompt("How many characters would you like your password to contain? Yes or No? (8 character minimum)","8")
  promptCount = Number (promptCount)
  
   if (promptCount){
    console.log("The Number() function worked");
    
   }
    

 
 





function generatePasswordOptions () {
  var visiblePassword = document.querySelector("#generate");

 }
 
 
 

//* Class Walkthrough example *//
const specialCharacters = [
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
  

const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const lowerCaseCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//** 10 characters, 26 characters *//










// Assignment code here
var generateBtn = document.querySelector("#generate"); //attaching java to html button, only id on page//


// ------------------function generatePassword() { //
  //  console.log("Button press confirmed") -------------------------//
  function generatePassword() {
    console.log("Button press confirmed")

// Generate password options will go inside here// 


  var random = Math.floor(Math.random()*10);
    console.log(random, 'random function worked');


//* randomize number value only, why? how to make it show? //
    // return "Generated Password will go here" //
    
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  //*Displaying password on page *//
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// onclick?//