// filter: filters data set based on a return value of boolean (t/f)

var data = [10, 20, 30, 40, 41, 41, 90];

var newData = data.filter(x => x > 20); // should return every value greater than 20.... : 30, 40, 41, 41, 90
console.log(newData);
