'use strict';
// function checks and sees if the array contains any duplicates

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

console.log(containsDuplicate([1, 2, 3, 1])); // should log true
console.log(containsDuplicate([1, 2, 3, 4, 5])); // should log false
