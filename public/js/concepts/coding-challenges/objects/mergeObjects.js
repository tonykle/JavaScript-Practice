'use strict';

/**
* Returns a merged object of two input objects
*
* @param {Object} obj1, {Object} obj2
* @return {Object}
*/
function mergeObjects(obj1, obj2) {
  for (let key in obj2) {
    if (!obj1[key]) {
      obj1[key] = obj2[key];
    } else { // merge conflict
      obj1[key] += ', ' + obj2[key];
    }
  }
  return obj1;
}
