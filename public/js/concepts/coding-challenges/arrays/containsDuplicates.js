'use strict';
// function checks and sees if the array contains any duplicates

/**
* returns true if array contains any duplicates, false otherwise
*
* @param {Array} nums
* @return {Boolean}
*/
function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        let currVal = nums[i];
        nums.splice(i, 1);
        if (nums.indexOf(currVal) > -1) {
            return true;
        }
    }
    return false;
};
