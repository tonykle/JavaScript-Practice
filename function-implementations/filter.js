'use strict';
/*
My personal implementation of the Array prototype filter function
*/

Array.prototype.filter = function(func) {
  let self = this; // original array passed in
  let filteredData = []; // new array to be returned
  for (let i = 0; i < self.length; i++) {
    if (func(self[i])) { // if returned value is true
      filteredData.push(self[i]);
    }
  }
  return filteredData;
}

var filteredVals = [1, 2, 3, 5, 1, 4, 9, 10].filter(x => return x > 4);
console.log(filteredVals); // should log: 5, 9, 10
