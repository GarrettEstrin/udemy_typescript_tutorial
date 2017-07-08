// function that is invoked right away
function fullName(first : string, last : string){
  return "String"
}

// call it here
fullName("string", "string")

// how to call it as it is defined
var names : string [] = ["Garrett", "Ash", "AJ"];
var counter : number = 0;

(function(){
  for (let name in names){
    counter++;
  }
})();

console.log(counter);