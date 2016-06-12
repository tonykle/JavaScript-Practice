var values = [1, 2, 3, 4];

function outputValues(values) {
  for(var i = 0; i < values.length; i++) {
    setTimeout(function(i) {
      console.log("Value at the " + i + "th index is "+ values[i]);
    }(i), i * 100);
  }
}
outputValues(values);
