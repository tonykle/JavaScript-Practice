function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function applyFn(funcName) {
  return function(first) {
    return function(second) {
      if (funcName.name === 'add') {
        return first + second;
      } else if (funcName.name === 'multiply') {
        return first * second;
      }
    }
  }
}

var addIt = applyFn(add);
var addResult = addIt(3)(4);
console.log(addResult); // should output 7
var multIt = applyFn(multiply);
var multResult = multIt(3)(4);
console.log(multResult); // should output 12
