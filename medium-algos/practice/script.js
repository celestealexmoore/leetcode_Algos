/*
For a string of numbers separated by spaces sort it so the 
even numbers are first 
then by highest to lowest so "37 1 104 23 95 78 37 54"
becomes [104,78,54,95,37, 37, 23, 1]
*/

function sort(string) {
  let newString = string.split(" ");
  let evenArr = [];
  let oddArr = [];

  for (let i = 0; i < newString.length; i++) {
    if (newString[i] % 2 === 1) {
      oddArr.push(newString[i]);
      oddArr.sort((a, b) => b - a);
    } else {
      evenArr.push(newString[i]);
      evenArr.sort((a, b) => b - a);
    }
  }

  return evenArr.concat(oddArr);
}

console.log(sort("37 1 104 23 95 78 37 54"));
