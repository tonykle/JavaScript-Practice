// SLICE RETURNS NEW array
// first argument (required), index to start at and included
// second argument (optional), index to end at and not include, if not included, it will just go to the end

var data = [1, 2, 3, 4, 5, 6, 7];

var s = data.slice(2, 4); // retains values 3 to index 4
var s2 = data.slice(2); // returns 3 -> 7
console.log(s);
console.log(s2);
