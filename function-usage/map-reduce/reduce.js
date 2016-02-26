/*
The reduce() method applies a function against an accumulator and each value of
the array (from left-to-right) to reduce it to a single value.
reduce() has 4 parameters: previousValue, currentValue, currentIndex, array used
it also has 1 optional parameter, which is attached at the 'end', if included, the previous and current value will shift down 1 index
*/

// below block of code... : previousVal will start at 10, currentVal will start at 0, currentIndex will be at index 1, data4 = data4
var data4 = [0, 1, 2];
var dataNew = data4.reduce(function(previousVal, currentVal, currentIndex, data4) {
  return previousVal + currentVal;
}, 10);
console.log(dataNew);
