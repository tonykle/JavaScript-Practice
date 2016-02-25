// If i have a var str = 'hello world', how could i get str.reverse() return 'dlrow olleh'?

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

var str = 'hello world';
console.log(str.reverse()); // should output 'dlrow olleh'
