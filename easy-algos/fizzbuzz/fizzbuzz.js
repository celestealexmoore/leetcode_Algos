/* 
Directions:
FizzBuzz: Output numbers from 1 to x. 
If the number is divisible by 3, replace it with "Fizz". 
If it is divisible by 5, replace it with "Buzz". 
If it is divisible by 3 and 5, replace it with "FizzBuzz".

eg:
1
2
Fizz
4
Buzz
Fizz
...
14
FizzBuzz
16
...
*/

function fizzbuzz(num) {
  for(i = 1; i <= num; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }else {
      console.log(i)
    }
  }
}

fizzbuzz(16);

/* 
Link to algo:
https://leetcode.com/problems/fizz-buzz/
*/