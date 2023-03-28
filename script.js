

    

 
 





// function generatePasswordOptions () {
//   var visiblePassword = document.querySelector("#generate");

//  } 
 
 
 

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


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// onclick?//



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  //*Displaying password on page *//
  passwordText.value = password;

}

// Pool of potential useable characters depending on user selection -- passwordAllowed //
var characterPool = []
var final = []

// ------------------function generatePassword() { //
  //  console.log("Button press confirmed") -------------------------//
function generatePassword() {
    console.log("Button press confirmed")


var promptCount = prompt("How many characters would you like your password to contain? Yes or No? (8 character minimum)","8")
if (promptCount){

console.log("The count function worked");
    
}
if (promptCount<8){
alert ("8!")
return 
}
  
    var promptLower = window.confirm('Would you like your password to contain lower case letters? Yes or No?')
 
      console.log("Selection lower worked!");
      if(promptLower===true){
        characterPool = characterPool.concat(lowerCaseCharacters)
       }



 var promptUpper = window.confirm('Would you like your password to contain upper case letters? Yes or No?')
    console.log("Selection upper worked!");
    if(promptUpper===true){
      characterPool = characterPool.concat(upperCaseCharacters)
     }
    




 var promptNumeric = window.confirm('Would you like your password to contain numbers? Yes or No?')
 
  console.log("Selection numeric worked!");

  if(promptNumeric===true){
    characterPool = characterPool.concat(numericCharacters)
   }
  



 var promptSpecial = window.confirm('Would you like your password to contain special characters? Yes or No?')
 
  console.log("Selection special worked!");

 if(promptSpecial===true){
  characterPool = characterPool.concat(specialCharacters)
 }

  // +=
  

for (var i = 0; i < promptCount; i++){
var randomIndex = Math.floor(Math.random()*characterPool.length);
var indexValue = characterPool[randomIndex]
final.push(indexValue)
//   console.log(random, 'random function worked');
console.log(final)
}




// Generate password options will go inside here// 


  // var random = Math.floor(Math.random()*10);
  //   console.log(random, 'random function worked');


//* randomize number value only, why? how to make it show? //
    // return "Generated Password will go here" //
    return final.join("")
}




