'use strict';

/**
* Write a function that finds out if a number is the sum of exactly two numbers in a given array.
*
* @param {Integer} sum, {Array} data
* @return {Boolean}
*/
function findTwoSum(sum, data) {
  let occur = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[i] + data[j] === sum) {
        occur++;
        break;
      }
    }
  }
  return occur === 1;
}
