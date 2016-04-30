function add(a, b) {
  return a + b;
}

function applyFn(func) {
  if (func.name === "add") {
    return function(a) {
      return function(b) {
        return add(a, b);
      }
    }
  }
}

var result = applyFn(add)(3)(4);
console.log(result); // should output 7
