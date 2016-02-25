// writing a function that will make use of closures and be able to have unlimited parameters passed into it

function addition(a) {
  return function(b) {
    if (b % 1 === 0) {
    //  console.log(a);
      return addition(a);
    } else {
      return addition.prototype.sum;
    }
  }
}

function add() {
  return;
}

addition.prototype.sum = 0;

var answ = addition(add)(1)(2);
console.log(answ); // 15
