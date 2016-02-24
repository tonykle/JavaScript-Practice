function addOrMultiply(func) {
  return function(x) {
    return function(y) {
      return function(z) {
        if (func.name === 'add') {
          console.log(x + y + z);
        } else if (func.name === 'multiply') {
          console.log(x * y * z);
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
