// Fibonacci sequence as defined: 0, 1, 1, 2, 3, 5, 8, 13, 21

// recurive solution, run-time: O(2^n)
function fibonacci(seq) {
  if (seq <= 2) {
    return 1;
  }
  return fibonacci(seq - 1) + fibonacci(seq - 2);
}

// iterative solution
function fibonacci2(seq) {
  if (seq === 0) {
    return 0;
  }
  var arr = [0, 1];
  for (var i = 2; i < seq; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[arr.length - 1];
}
console.log(fibonacci2(9));
