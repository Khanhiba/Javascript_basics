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
console.log(findTarget(arr, 15));