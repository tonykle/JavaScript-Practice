'use strict';

function addOrMultiply(func) {
  return function(x) {
    return function(y) {
      return function(z) {
        if (func.name === 'add') {
          let first = add(x, y);
          console.log(add(first, z));
        } else if (func.name === 'multiply') {
          let first = multiply(x, y);
          console.log(multiply(first, z));
        }
      }
    }
  }
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

var addIt = addOrMultiply(add);
var answ = addIt(1)(2)(3); // should output 6
var multiplyIt = addOrMultiply(multiply);
var answ2 = multiplyIt(3)(1)(3); // should output 9
