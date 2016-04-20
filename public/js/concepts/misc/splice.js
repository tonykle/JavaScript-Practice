/*
SPLICE: use on arrays to remove/add elements simultaneously, changes original array
first param (required): index to start at
second param (required): how many values to remove (starting at first param value)
following params: values to add to array

changes the original array
*/

var data = ['car', 'orange', 'apple', 'lmao'];

data.splice(2, 6, 'haha', 'nice')
console.log(data);
