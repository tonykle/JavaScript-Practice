var values = ["a", "b", "c", "d"];
outputValues(values);

function outputValues(values) {
  for (var i = 0; i < values.length; i++) {
    setTimeout(function() {
      console.log("item " + i + " is " + values[i]);
    }(i), i * 200);
  }
};
