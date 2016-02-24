// implementation for .substr NOT .substring
'use strict';

String.prototype.substr = function(start, leng) {
  if ((start > 0 && start > String.length) || String.length === 0 || String.length < 0) {
    return '';
  }

  let stringFinal = '';
  if (arguments.length === 1) {
    if (arguments[0] > 0) { // single argument is + Positive
      for (let i = start; i < String.length; i++) {
        stringFinal += String.charAt(i);
      }
    } else if (arguments[0] < 0) { // single argument is - Negative
      let startingPoint = String.length - arguments[0];
      for (let i = startingPoint; i < String.length; i++) {
        stringFinal += String.charAt(i);
      }
    }
  } else if (arguments.length === 2) {
    for (let i = start; i < leng + 1; i++) {
      stringFinal += String.charAt(i);
    }
  }
  return stringFinal;
}

var stringToSub = 'super';
var answ = stringToSub.substr(0, 2);
