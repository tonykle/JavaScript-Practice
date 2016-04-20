var dataSet = [4, 3, 5, 1];
var newData = (dataSet.map(x => Math.pow(x, 2)).map(y => y * y));
console.log(newData); // should output the values from the original dataset but cubed
