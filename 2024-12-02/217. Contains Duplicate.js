// -----Initial Attempt-----

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numCount = [];
    let addedNumArr = 0;
    let addedNumCountArr = 0;
    let isRepeating = false;

    if (let i = 0, i < num.length, i++) {
        if (i === num[i]) {
            push.numCount(i);
        }
    }

    if (numCount > num.length) {
            return 
    }
};


// -----Notes while reviewing solution-----

let nums = [1,2,3,1]
let nums2 = [1,4,2,3]

// .sort() method
console.log(nums.sort()); // sorts from lowest to highest
console.log(nums2.sort());
console.log(nums.sort((a,b) => a-b));
console.log(nums2.sort((a,b) => a-b));

// Could also turn to array to a set, sets cannot have duplicates


// -----Second Attempt (after viewing solutions)-----

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            return true;
        } else {
            return false;
        }
    };
    
};


// Testcases Accepted, but Wrong Answer on submission
// Revisit for third attempt ⚠️