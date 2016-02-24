var data = [1, 2, 3, 4];
var dataNew = data.reduce(function(prev, curr, currIndex, data) {
  return prev + curr;
});
var dataNewSame = data.reduce((prev, curr) => prev + curr);
console.log(dataNew);
console.log(dataNewSame);
