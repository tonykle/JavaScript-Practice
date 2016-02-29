'use strict';
/*
Mozilla:
The shift() method removes the first element from an array and returns that element.
This method changes the length of the array.

My personal implementation of the shift() function used for arrays in JS
*/

Array.prototype.shift = function() {
  if (this.length === 0) {
    return undefined;
  }
  let firstVal = this[0];
  // this.splice(0, 1); // using built in JS function
  for (let i = 1; i < this.length; i+++) { // manually altering value

  }
  return firstVal;
}

var data = [1, 2, 3, 4, 5];
data.shift();
console.log(data);
