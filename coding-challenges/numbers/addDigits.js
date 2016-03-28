'use strict';

/**
* From leetcode: Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
* @param {Integer} numb
* @return {Integer}
*/
function addDigits(numb) {
  var curr = numb.toString().split('').map(x => parseInt(x));
  var foundAnsw = false;
  var answ;
  while (!foundAnsw) {
    let currSum = 0;
    for (let i = 0; i < curr.length; i++) {
      currSum += curr[i];
    }
    if (currSum < 10) {
      answ = currSum;
      foundAnsw = true;
    } else {
      curr = currSum.toString().split('').map(x => parseInt(x));
    }
  }
  return answ;
}

var first = addDigits(38);
console.log(first); // should log 2
