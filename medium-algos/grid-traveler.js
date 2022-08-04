/* 
Say you are a traveler on a 2D grid.
You begin in the top-left corner
and your goal is to travel to the bottom-right corner.
You may only move down and right.
 
In how many ways can you travel to the goal on a grid with dimensions m * n?

Write a function `gridTraveler(m,n)` that calculates this.
*/

function gridTraveler(m, n) {
  //base cases
  if (m === 0 || n === 0) return 0;
  if ((m === 1) & (n === 1)) return 1;
}

gridTraveler(1, 1);

// go into the first array at index 0 and determine how many total indexes are present
// go into nested arrays and determine how many indexes are present in each array.
//
