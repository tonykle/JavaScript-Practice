// Write a simple function (less than 80 characters) that returns a boolean indicating
// whether or not a string is a palindrome.
'use strict';

/**
* returns true if the input string is a palindrome, false otherwise
*
* @param {String} data
* @return {Boolean}
*/
function isPalindrome(data) {
  if (typeof data !== 'string') {
    return null;
  }
  for (let i = 0; i < data.length / 2; i++) {
    if (data.charAt(i) !== data.charAt(data.length - i - 1)) {
      return false;
    }
  }
  return true;
}
