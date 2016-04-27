'use strict';
// Fibonacci sequence as defined: 0, 1, 1, 2, 3, 5, 8, 13, 21

/**
* returns the nth fibonacci sequence (recursive solution)
*
* @param {Integer} seq
* @return {Integer}
*/
function fibonacci(seq) {
  if (seq <= 2) {
    return 1;
  }
  return fibonacci(seq - 1) + fibonacci(seq - 2);
}

/**
* returns the nth fibonacci sequence (iterative solution)
*
* @param {Integer} seq
* @return {Integer}
*/
function fibonacci2(seq) {
  if (seq === 0 || seq === 1) {
    return seq;
  }
  let arr = [0, 1];
  for (let i = 2; i <= seq; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[arr.length - 1];
}
