'use strict';
/* Write a function that accepts an array of numbers and returns the highest value.
Write it in the most idiomatic Javascript way possible */


/**
* trivial solution to finding the max value in an array
*
* @param {Array} data
* @return {Integer}
*/
function findMaxTrivial(data) {
  let max;
  if (data.length) {
    max = data[0];
    for (let i = 0; i < data.length; i++) {
      max = (data[i] > max) ? data[i] : max;
    }
  }
  return max;
}

/**
* better way to finding the max value in an array
*
* @param {Array} data
* @return {Integer}
*/
function findMax(data) {
  return Math.max.apply(null, data);
}
