/*
Write a sum method which will work properly when invoked using either syntax below.
*/

function sum(y) {
  if (arguments.length === 1) {
    return function(x) {
      return y + x;
    }
  } else if (arguments.length > 1) {
    return y + arguments[1];
  }
}

var closureCall = sum(2)(3);
console.log(closureCall); // should output 5
