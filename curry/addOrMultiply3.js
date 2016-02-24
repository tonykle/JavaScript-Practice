'use strict';
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function applyFn(func) {
  return function(y) {
    return function(x) {
      if (func.name === 'add') {
        let answ = add(y, x);
        console.log(answ);
        return answ;
      } else if (func.name === 'multiply') {
        let answ = multiply(y, x);
        console.log(answ);
        return answ;
      }
    }
  }
}

var f = applyFn(multiply);
var result = f(3)(4); // should output 12
