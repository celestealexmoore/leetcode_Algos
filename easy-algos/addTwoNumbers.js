// This was done using an array as the input, not a linked list.

l1 = [2, 4, 3];
l2 = [5, 6, 4];

let rev1 = l1.reverse();
let toNum1 = parseInt(rev1.join("")); // [342]

let rev2 = l2.reverse();
let toNum2 = parseInt(rev2.join("")); // [465]

let sum = toNum1 + toNum2;

let myFunc = (num) => Number(num);

let intArr = Array.from(String(sum), myFunc);

console.log(intArr.reverse());
