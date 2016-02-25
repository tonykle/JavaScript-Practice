'use strict';
/* Write a function that accepts an array of numbers and returns the highest value.
Write it in the most idiomatic Javascript way possible */


// TRIVIAL SOLUTION
function findMaxTrivial(data) {
  let max;
  if (data.length) {
    max = data[0];
    for (var i = 0; i < data.length; i++) {
      max = (data[i] > max) ? data[i] : max;
    }
  }
  return max;
}

// Better solution
function findMax(data) {
  return Math.max.apply(null, data);
}

console.log(findMax([9, 10, 1, 100, 13, 90])); // should print 100
