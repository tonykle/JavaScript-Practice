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
  for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) {
      return false;
    }
  }
  return true;
}

var answ = isPalindrome('oolloo');
var answ2 = isPalindrome('ookpoo');
console.log(answ); // should log true
console.log(answ2); // should log false
