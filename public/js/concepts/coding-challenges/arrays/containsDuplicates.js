'use strict';

/**
* returns true if array contains any duplicates, false otherwise
*
* @param {Array} nums
* @return {Boolean}
*/
function containsDuplicate(nums) {
    var storage = new Map();
    for (var i = 0; i < nums.length; i++) {
        var currNumb = nums[i];
        if (storage.has(currNumb)) {
            return true;
        } else {
            storage.set(currNumb, 1);
        }
    }
    return false;
};
