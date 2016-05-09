'use strict';

/**
* Moves all zeroes to the end of the array
*
* @param {Array} nums
*/
function moveZeroes(nums) {
    let zeroCount = 0;
    while (nums.indexOf(0) > -1) {
        zeroCount++;
        nums.splice(nums.indexOf(0), 1);
    }
    for (var j = 0; j < zeroCount; j++) {
        nums.push(0);
    }
};
