/* 
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starting <= ending <= 104
*/


const merge = intervals => {
    if (intervals.length < 2) return intervals;
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [];
    let previous = intervals[0];
    
    for (let i = 1; i < intervals.length; i += 1) {
      if (previous[1] >= intervals[i][0]) {
        previous = [previous[0], Math.max(previous[1], intervals[i][1])];
      } else {
        result.push(previous);
        previous = intervals[i];
      }
    }
    
    result.push(previous);
    
    return result;
  };

// first thing to do is sort the input array.
// the sort operation will cost us nlogn on time
//create a result array and put in the first interval into the result array.
// we'll store intervals[0] in the array, so we have something to start with.
// we want to know if the e1, (end of index1) is greater than or equal to the start of the next index. s2(start of index2)
// if it's greater than or equal to, we know we need to merge these two together.
// we want to get the max, and update the e1 on result and move on. 
// we want to take the result result [result.length -1] will get us the very last element, and we want the first index.
// once the array is sorted, I want to determine if the last element in each array is greater than the
// first element in the following array.
// create an array that stores the result.

/* 
Link to Algo:
https://leetcode.com/problems/merge-intervals/
*/
