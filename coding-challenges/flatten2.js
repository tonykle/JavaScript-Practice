'use strict';

// 'FLATTEN' array (array may contain sub-arrays, undefined, null values)
// one of the key ideas is to use a for-each loop (over a traditional for-loop) because the array grows as you encounter
// sub-arrays, and you need to be sure to iterate over it entirely

// function flatten(arr) {
//   let currIndex = 0;
//   arr.forEach(x => {
//     if (Array.isArray(x)) { // found array, flatten it
//       var whereToAdd = currIndex;
//       for (let i = 0; i < x.length; i++) {
//         var subArrVal = x[i];
//         arr.splice(whereToAdd, 0, subArrVal);
//         whereToAdd++;
//       }
//       arr.splice(currIndex + x.length, 1);
//     }
//     currIndex++;
//   });
//   return arr;
// }

// flatten using reduce() function
function flatten(arr) {
  var newVal = arr.reduce(function(a, b) {
    if (Array.isArray(b)) {
      return a.concat(b);
    } else {
      if (Array.isArray(a)) {
        return a.push(a);
      } else {
        
      }
    }
  }, 0);
  return newVal;
}


var res = flatten([3, 2, [5, 6, 7], 9, "", null, ['haha1', 'haha2', 'haha3'], undefined, 'haha']); // should become size of 13
console.log(res); // should output the 'flattened' array
