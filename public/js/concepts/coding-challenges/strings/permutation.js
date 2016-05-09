'use strict';

/**
* Determines if two input strings are permutations of one another
*
* @param {String} data1, data2
* @return {Boolean}
*/
function isPermutation(data1, data2) {
  if (data1.length !== data2.length) {
    return false;
  }
  var sortedFirst = data1.split('').sort().join('')
  var sortedSecond = data2.split('').sort().join('');
  return sortedFirst === sortedSecond;
}
