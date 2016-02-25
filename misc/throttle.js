// Write a function that takes a function and a time in milliseconds. It returns a
// new function that will be throttled after the first call, until the time has run out.


var throttledHello = throttle(function() {
  console.log('hello')
}, 300);

throttledHello(); // hello
throttledHello(); //

setTimeout(throttledHello, 301); // hello

function throttle(func, ms) {

  return function() {

  }
}
