/* 

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter. 

*/

var threeSum = function(array) {
  array.sort((a,b) => a - b);
 const triplets = [];

 for(let i=0; i < array.length - 2; i++){
     if(array[i] != array[i-1]){ // making sure our solution set does not contain duplicate triplets
         let left = i + 1;
       let right = array.length - 1;

         while (left < right){
             const currentSum = array[i] + array[left] + array[right];
             if (currentSum === 0){
                 triplets.push([array[i], array[left], array[right]]);
                 while(array[left] == array[left + 1]) left ++
                 while(array[right] == array[right - 1]) right -- // making sure our solution set does not contain duplicate triplets
                 left ++;
                 right --;
             } else if(currentSum < 0) {
                 left ++
             } else if(currentSum > 0){
                 right --
             }
         }
     }
 }
 return triplets
};



//what i was working on:

function threeSum(nums) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] + nums[i + 1] + nums[i + 2] === 0 ? 
    output.push([nums[i], nums[i + 1], nums[i + 2]]) : null;
    i + 1;
  }

  console.log(output);
}

threeSum([3, 0, -3, 0, 1, 2, -6, -1, -3, 10, -10, 0, 0, 0]);

/* 
Pseudocode:
output should be an array of 3 integers.

base case: if you have an array of 3 indexes that equal 0, return that array, (in an array).
if array.length < 3 || array.length > 3000, return null.

1) create an empty array for the output.

go into the array and determine if the first index plus the next two indexes equal 0. if so, take those indexes and store into new Array.

once I have looped over the entire array, I want to check the new array and see if any 3 indexes are a match with any other array. If so, delete the duplicate array.



*/

/* 
Link to Algo:
https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/
 */
