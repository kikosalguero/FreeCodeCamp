// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  
  if (myObj.hasOwnProperty("checkProp") === true) {
    var answer = myObj.checkProp;
    return answer;
 
  }
  
  else if (myObj.hasOwnProperty("checkProp") === false) { 
  return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");