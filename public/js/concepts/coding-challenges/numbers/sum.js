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
  } else if (arguments.length === 2) {
    return y + arguments[1];
  }
}
