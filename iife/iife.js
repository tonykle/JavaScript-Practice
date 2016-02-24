'use strict';

var numb;
numb = 1;

// IIFE
var getValue = (function(x) {
  return numb;
})(numb);

// NO IFFE
var getValue2 = function() {
  return numb;
};
numb = 2;

console.log(getValue); // should output 1
console.log(getValue2()); // should output 2
