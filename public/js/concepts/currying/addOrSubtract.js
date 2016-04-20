function applyFn(funcName) {
  return function(a) {
    if (a % 1 === 0) {
      if (funcName.name === 'add') {
        applyFn.prototype.sum += a;
      } else if (funcName.name === 'multiply') {
        if (applyFn.prototype.sum === 0) {
          applyFn.prototype.sum = 1;
        }
        applyFn.prototype.sum *= a;
      } else if (funcName.name === 'addAndSubtract') {
        if (applyFn.prototype.addOrSubtract === 0) {
          applyFn.prototype.sum += a;
          applyFn.prototype.addOrSubtract++;
        } else if (applyFn.prototype.addOrSubtract === 1) {
          applyFn.prototype.sum -= a;
          applyFn.prototype.addOrSubtract--;
        }
      }
      return applyFn(funcName);
    } else {
      return applyFn.prototype.sum;
    }
  }
}

function add(x, y) {
  return x + y;
}

applyFn.prototype.sum = 0;
applyFn.prototype.addOrSubtract = 0; // 0 is should subtract, 1 is should add
var answ3 = applyFn(add)(5)(8)(0)(2)(6)(); // should return 1
console.log(answ3);
