'use strict';

/**
* Write a function that takes in array of numbers and returns the greatest product
*
* @param {Array} numbs
* @return {Array}
*/
function greatestProduct(numbs) {
  if (numbs.length === 0) {
    return [];
  }
  if (numbs.length === 1) {
    return [numbs[0]];
  }

  let answ = [];
  let sorted = numbs.sort((a, b) => a - b);
  if (numbs.length >= 2) {
    let first = numbs[numbs.length - 1];
    let second = numbs[numbs.length - 2];
    answ.push(second, first);
  }
  return answ;
}

var firstProd = greatestProduct([1, 2, 3, 4, 5, 6]);
var secProd = greatestProduct([8, 9, 12, 1, 2, -1, 5, -3, -20, 2]);
var thirdProd = greatestProduct([]);
console.log(firstProd); // should return [5, 6]
console.log(secProd); // should log [9, 12]
console.log(thirdProd); // should log []
