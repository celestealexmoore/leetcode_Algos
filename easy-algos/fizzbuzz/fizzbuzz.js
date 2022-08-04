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

/* 
My Pseudocode:
1. Output all numbers 0 >= int:
> Create an array with the int as an index. 
> Find a js array method that inserts new index into an array at position 0.
> Write a function that will take the number at index 0 of the array, subtract 1, and update the array with the new int, until the number is === 1.

Find a js array method that will replace indexes in an array with a new value.
Loop over the array and determine:
2. Is the array[i] % 3 === 0 ? replace num with "Fizz".
2. Is the array[i] % 5 === 0 ? replace num with "Buzz".
3. Is the array[i] % 3 === 0 && number % 5 === 0 ? replace num with "FizzBuzz".
*/

function fizzbuzz(int) {
  arr = [];

  for (let i = 0; i < int; i+1) {
    arr.splice(0, 0, int--);
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 3 === 0 && arr[j] % 5 === 0) {
      arr.splice(arr[j]-1, 1, "FizzBuzz");
    } else if (arr[j] % 3 === 0) {
      arr.splice(arr[j]-1, 1, "Fizz");
    } else if (arr[j] % 5 === 0) {
      arr.splice(arr[j]-1, 1, "Buzz");
    }
  }

  console.log(arr);
}

fizzbuzz(16);