var data = ['a', 'b', 'c', 'd'];

(function() {
    for (var i = 0; i < data.length; i++) {
      setTimeout(function(x) {
        return function() {
          console.log("item " + x + " is " + data[x]);
        }
      }(i), i * 200);
    }
})();
