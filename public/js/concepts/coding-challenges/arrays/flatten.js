'use strict';

// 'FLATTEN' array (array may contain sub-arrays, undefined, null values)
// one of the key ideas is to use a for-each loop (over a traditional for-loop) because the array grows as you encounter
// sub-arrays, and you need to be sure to iterate over it entirely

/**
* "flattens" an input array
*
* @param {Array} data
* @return {Array}
*/
function flatten(data) {
  let currIndex = 0;
  data.forEach(x => {
    if (Array.isArray(x)) { // check if we found an array
      let whereToAdd = 0;
      for (let i = 0; i < x.length; i++) { // iterate over sub-array
        data.splice(currIndex + whereToAdd, 0, x[i]); // add contents from sub-array to original array
        whereToAdd++;
      }
      data.splice(currIndex + whereToAdd, 1); // get rid of sub-array
    }
    currIndex++;
  });
  return data;
}
