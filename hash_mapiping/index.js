// 🔹 1. Two Sum

// Problem:
// Given an array nums and a target number, return indices of two numbers such that they add up to target.

// ------with two ponters--------------

function findTarget(nums, target){
     nums.sort((a, b) => a - b);
     let left = 0;
     let sum = 0;
     let right = nums.length - 1;
     while(left < right){
        sum = nums[left] + nums[right];
        if(sum === target){
            return [nums[left], nums[right]];
        }
        else if(sum < target){
            left++;
        }
        else if(sum > target){
            right--;
        }
     }
     return null;
}
let arr = [1,8,3,7,2,5];
// 
// console.log(findTarget(arr, 15));
// ---------------------------------------------------------------------------------------------
// with the help of hash mapping
function findSum(nums, Target){
    let hash = {};
    for(let i = 0; i < nums.length; i++){
        let complement = Target - nums[i];
        if(hash[complement] !== undefined){
            return [complement ,nums[i]]
        }
        hash[nums[i]] = i;
    }
    return null;
}

let arr2 = [7, 5, 3, 6];
console.log(findSum(arr2, 10));

// 🔹 2. Majority Element

// Problem:
// Find the element that appears more than n/2 times in an array.
function countFrequency(nums){
    let hash = {};
    let maxFreq = 0;
    let maxElement = 0;
    for(let i = 0; i < nums.length; i++){
       if(!hash[nums[i]]){
           hash[nums[i]] = 1;
       }
       else{
        hash[nums[i]]++;
       }

    //    step 2
    if(hash[nums[i]] > maxFreq){
        maxFreq = hash[nums[i]];
        maxElement = nums[i];
    }
}
    return maxElement;
     
    
}
let arr3 = [2, 3, 5, 2, 5, 2, 6, 6];
console.log(countFrequency(arr3));

// ---------------------------------------------------------------------
// 🔹 5. Contains Duplicate

// Problem:
// Check if an array contains any duplicates.

function checkDupl(nums){
    for(let i = 0; i < nums.length; i++){
        let hash = {};
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        }
        else{
            hash[nums[i]]++;
        }

        // for checking duplicates
        for(let i = 0; i < nums.length; nums++){
            if(hash[nums[i]] === 2){
            return true;
        }
        }
    }
    return false;
}
let arr4 = [3,4,5,5,6];
console.log(checkDupl(arr4));