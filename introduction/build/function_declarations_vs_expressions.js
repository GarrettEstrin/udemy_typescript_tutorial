// function fullName(first : string, last : string) : string {
//   return first + " " + last;
// }
// // function expression
// var otherFullName : (first : string, last : string) => string;
// otherFullName = function(first : string, last: string) {
//   return first + " " + last;
// }
// var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
//   return first + " " + last;
// }
// console.log(fullName("Garrett", "Estrin"));
// console.log(otherFullName("Garrett", "Estrin"));
// console.log(thirdFullName("Garrett", "Estrin"));
// why do I need to do this?
// difference is how declartions and expressions are processed
// javascript hoisting
// values can be hoisted up with function declarations
// expressions must be defined before they are called
// use expressions when using promises and other async functionality 
