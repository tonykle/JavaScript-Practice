'use strict';
/*
Original:

for (var i=0; i<10; i++) {
  setTimeout(function() {
    console.log(i)
  }, i * 1000);
}

TODO: fix the bug where the wrong output is produced
*/

for (let i = 0; i < 10; i++) {
  setTimeout(function(x) {
    return function() {
      console.log(x)
    }
  }(i), i * 100);
}
