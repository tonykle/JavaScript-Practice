
/*** Returns an integer, representative of the sum of the input values, regardless of syntax
*
* @param {Integer} y, x
* @return {Integer}
*/
function sum(y) {
  if (arguments.length === 1) {
    return function(x) {
      return y + x;
    }
  } else if (arguments.length > 1) {
    return y + arguments[1];
  }
}

var closureCall = sum(2)(3);
var otherCall = sum(2, 3);
console.log(closureCall); // should output 5
console.log(otherCall); // should also output 5
