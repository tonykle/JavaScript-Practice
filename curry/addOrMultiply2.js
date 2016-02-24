// implementing a function that can add or multiply, along with prototype usage

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function applyFn(func) {
  var funcType = applyFn.prototype.funcType;
  funcType = func.name;
  return function(x) {
    if (funcType === 'multiply') {
      applyFn.prototype.sum *= x;
    } else if (funcType === 'add') {
      applyFn.prototype.sum += x;
    }
    return applyFn(func);
  }
  return applyFn.prototype.sum;
}

applyFn.prototype.sum = 1;
applyFn.prototype.funcType;

var answ = applyFn(multiply)(4)(6)(7);
console.log(applyFn.prototype.sum); // should output 168
