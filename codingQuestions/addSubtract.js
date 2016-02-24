/* 

write a function that takes in an unknown amount of arguments and adds/subtracts them
i.e.: addSubtract(5)(8)(3) -> 5 + 8 - 3 -> 10
      addSubtract(2)(1)(1)(5)(3)(2) -> 2 + 1 - 1 + 5 - 3 + 2 -> 6

*/

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
var sum = 0;
function addSubtract(x) {

}
addSubtract.prototype.sum = 0;

var answ = addSubtract(5)(8)(3);
console.log(answ); // should output 10
