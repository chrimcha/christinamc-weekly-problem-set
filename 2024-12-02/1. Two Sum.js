// -----Initial Attempt-----

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        let total = nums[i] + nums[i+1];

        if (total === target) {
            return [i,(i+1)];
        }

    }
};


// Solution Accepted ✅


// -----Notes while reviewing solution-----

// Could us a hash map:
// initializing a empty hash map to store numbers we've seen, loop through and find all differences between target and current number, if the difference can be found in the new hash map then return the indices of these numbers, if the difference isn't found in the new hash map then add the number and it's index to the new hash map
// "The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it)." - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
// you could also return null if not two numbers add up to target


// -----Second Attempt (after viewing solutions)-----
// Syntax errors: started writing in Java instead of JS
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     Map <Integer, Integer> seenNums  = new hashmap({}); // this should be in JS syntax (let seenNums = {};)

//     for (let i = 0; i <= nums.length; i++) {
//         let diff = nums[i] - target;

//         if (diff === nums[i]) {
//             return [seenNums, i];
//         } else {
//             seeNum[i] = nums[i];
//         }

//     }
// };


// -----Notes while reviewing solution 2-----

// In JS you don't need to add type to create a map
let array = [1,7,9,3,6,2];
let target = 13;

const seenMap = {};

for (let i = 0; i < array.length; i++) {
    let diff = target - array[i];
    console.log(diff);

    if (seenMap.hasOwnProperty(diff)) {
        return [i, seenMap[diff]];
    }
    
    seenMap[array[i]] = i;
    console.log([i, array[diff]]);
}

console.log(seenMap);


// -----Current progress on leetcode.com:-----
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//     const seenMap = {};

//     for (let i = 0; i <= nums.length; i++) {
//         let diff = target - nums[i];

//         if (seenMap.hasOwnProperty(diff)) {
//             return [i, nums[diff]];
//         } else {
//             seenMap[nums[i]] = i;
//         }
//     }
// };


// Revisit for third attempt with map ⚠️