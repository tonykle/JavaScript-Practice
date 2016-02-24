// Write a simple function (less than 80 characters) that returns a boolean indicating
// whether or not a string is a palindrome.

function isPalindrome(str) {
  for (var i = 0; i < str.length; i++) {
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
