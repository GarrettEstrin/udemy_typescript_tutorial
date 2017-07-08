// function that is invoked right away
function fullName(first, last) {
    return "String";
}
// call it here
fullName("string", "string");
// how to call it as it is defined
var names = ["Garrett", "Ash", "AJ"];
var counter = 0;
(function () {
    for (var name_1 in names) {
        counter++;
    }
})();
console.log(counter);
