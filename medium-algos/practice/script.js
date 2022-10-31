/*
For a string of numbers separated by spaces sort it so the 
even numbers are first 
then by highest to lowest so "37 1 104 23 95 78 37 54"
becomes [104,78,54,95,37, 37, 23, 1]
*/

function sort(string) {
    let newString = string.split(" ");
    let evenArr = []
    let oddArr = [];
    
    for(let i = 0; i < newString.length; i++) {
      if(newString[i] % 2 === 1) {
      oddArr.push(newString[i])
      oddArr.sort((a,b)=>b-a) 
      }else {
      evenArr.push(newString[i])
      evenArr.sort((a,b)=>b-a)
      }
    }
    
    return evenArr.concat(oddArr)
    }
    
    console.log(sort("37 1 104 23 95 78 37 54"))


    /* 
    13. Roman to Integer
Easy
7.7K
458
Companies
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
    
    */

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let int = 0;
    for(let i = 0; i < s.length; i++) {


        if(s[i] === "I" && s[i + 1] === "V" || 
            s[i] === "I" && s[i + 1] === "X") {
            int += -1;
        } else if(s[i] === "X" && s[i + 1] === "L" || 
            s[i] === "X" && s[i + 1] === "C") {
            int += -10;
        }else if(s[i] === "C" && s[i + 1] === "D" || 
            s[i] === "C" && s[i + 1] === "M") {
            int += -100;
        }else if(s[i] === "I") {
            int += 1;
        } else if(s[i] === "V") {
            int += 5;
        } else if(s[i] === "X") {
            int += 10;
        } else if(s[i] === "L") {
            int += 50;
        } else if(s[i] === "C") {
            int += 100;
        } else if(s[i] === "D") {
            int += 500;
        } else if(s[i] === "M") {
            int += 1000;
        }
    }
    return int;
};

/* 
Link to Algo:
https://leetcode.com/problems/roman-to-integer/description/
*/