/**
* returns true if the input integer is a power of three, false otherwise
*
* @param {Integer} n
* @return {Boolean}
*/
function isPowerOfthree(n) {
  if (n > 1) {
    while (n % 3 === 0) {
        n /= 3;
    }
  }
  return n === 1;
};

console.log(isPowerOfthree(27)); // should log true
