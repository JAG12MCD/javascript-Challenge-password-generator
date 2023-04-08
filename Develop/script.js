// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();//call the function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
 ///utile 
 let uppercaseArr=[ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
 let lowercaseArr=[ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
 let numericArr= [ "1", "2","3","4","5","6","7","8","9"]
 let specialCharArr=["!" ,"”","$","%","&",",","(",")","*","+","-",".","=","-","?","/","@","#","[","]","|","{","}"]


  ///prompt the user
  let lowercase= confirm("do you want to include lowercase?")
  let uppercase= confirm("do you want to include uppercase?")
  let numeric= confirm("do you want to include numeric values in the password?")
  let specialChar= confirm("do you want to include special charecters?")
  let passwordLength=prompt("what is the password length ? [should be 8-128]")

  ///validate input
   if(validatePasswordLength(passwordLength)==false){
     alert("password length must be a number between 8-128 ")
     return "";
   }
   if(validateCharTypes(lowercase,uppercase,numeric,specialChar)==false){
    alert("you must at least select on charecter type")
    return "";
   }


  ///generate the result
  

  ///selectionArr will include all elements that will be considered during generating the password

  /*
[1,2,3].push(4) => [1,2,3,4]
[1,2,3].push([1,2])=>[1,2,3,[1,2]]
[1,2,3].push(...[1,2])=>[1,2,3,1,2]
*/



  let selectionArr=[]
  if(lowercase){
  selectionArr.push(...lowercaseArr)
  }
  if(uppercase){
    selectionArr.push(...uppercaseArr)
  }
  if(numeric){
    selectionArr.push(...numericArr)
  }
  if(specialChar){
    selectionArr.push(...specialCharArr)
  }
   let result=""
   ////do a for loop to generate each charecter
   for(let i=0;i<passwordLength;i++){///header of the for  loop  ,  lower bound ,upper bound ,operator
               ///select random charecter using Math.random() and add it to the result 
    result += selectionArr[Math.floor(Math.random()*selectionArr.length)]
   }

  return result;
}

function validateCharTypes(lc,uc,num,sc){

  //&& and => true && true =true , true and false= false ,false and true=false ,false and false =false 
  //|| or  => ture || true =true ,  true || false =true , false || true =true , false or false  =false 
  if(lc==false && uc==false && num==false && sc==false){
     return false;
  }else{
    return true;
  }
 
}


function validatePasswordLength(value){

  if(value==undefined){
      return false
  }
  if(isNaN(value)){
    return false
  }
  if(value<8){
    return false
  }
  if(value>128){
    return false;
  }
  ///password survive the valid password
  return true
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
