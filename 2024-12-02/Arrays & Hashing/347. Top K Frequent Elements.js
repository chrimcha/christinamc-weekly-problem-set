// -----Initial Attempt-----

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let uniqueNums = set(nums);
    // how do I turn a arr into a set?
    let seenNumMap = map();
    // how do I initialize a map?

    for (let i = 0; i < nums.length; i++) {
        if (unique[i] === nums[i]) {
            seenNumMap.set
        }
    }
};


// -----Notes while reviewing solution-----

// make a new Map, then set a value into Map
const nameOfNewMap = new Map();
nameOfNewMap.set(key, value);
// could use the Map to count up occurrences
// get a value from a Map, returns undefined if value is not found
nameOfNewMap.get(value);

// Sets can only contain unique values
// make a Set, then add value into Set
const nameOfNewSet = new Set();
nameOfNewMap.add(value);

// make empty array, then push value into array
const nameOfNewArray = [];
nameOfNewArray.push(...value);

// turn a Map into Array
let nameOfOtherNewArray = Array.from(nameOfNewMap.entries());


// -----Second Attempt (after viewing solutions)-----

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const numCount = new Map();
    let frequency = [];
    let result = [];

    for (num in nums) {
        numCount.set(num, (numCount.get(num) || 0) + 1);
    };

    frequency.sort();

    return frequency[frequency.length];
};


// -----Notes while reviewing solution 2-----



// Revisit for third attempt ⚠️
// https://leetcode.com/u/chrimcha/