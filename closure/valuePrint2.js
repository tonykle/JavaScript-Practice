var values = [1, 2, 3, 4];

function outputValues(values) {
  for(var i = 0; i < values.length; i++) {
    setTimeout(function(j) {
      console.log("Value at the " + j + "th index is "+ values[j]);
    }(i), i * 200);
  }
}
outputValues(values);
