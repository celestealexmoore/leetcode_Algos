/* 
344. Reverse String
Easy
6.7K
1K
Companies
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/


/* while this algo can be done with a simple s.reverse(), I did it this way so that 
I could learn how to move and swap values manually in place. */

var reverseString = function (s) {
  let increment = 0;

  for (let i = s.length - 1; i >= s.length / 2; i--) {
    let temp = s[i];
    s[i] = s[increment];
    s[increment] = temp;
    increment++;
  }
};


/* Link to Algo:

https://leetcode.com/problems/reverse-string/?envType=study-plan&id=algorithm-i */