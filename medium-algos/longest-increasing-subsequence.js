let counter = 1;
let dataArray = [];

function numbers(nums) {
  for (let i = 0; i < nums.length; i++) {
    let currentIndex = i;
    let currentValue = nums[i];
    console.log(currentIndex);

    for (let j = currentIndex; j < nums.length; j++) {
      if (currentValue < nums[j]) {
        currentIndex += j;
        // j = currentIndex + 1;
        dataArray.push(counter);
        counter = counter + 1;
      }
    }
  }
}
// console.log(dataArray);
console.log(...dataArray);

numbers([10, 9, 2, 5, 3, 7, 101, 18]);

// if (currentValue === nums[j]) {
//     counter = counter + 0;
//     dataArray.push(counter);
//     console.log(counter, dataArray);
//   } else if (currentValue < nums[j]) {
//     counter = counter + 1;
//     dataArray.push(counter);
//     console.log(counter, dataArray);
//   } else if (currentValue > nums[j]) {
//     dataArray.push(counter);
//     counter = 1;
//     console.log(counter, dataArray);
//   }


let counter = 1;
let dataArray = [];

function numbers(nums) {
  for (let i = 0; i < nums.length; i++) {
    let currentIndex = i;
          let currentValue = nums[i];
    console.log("current Index Is: " + currentIndex);

    for (let j = i; j < nums.length; j++) {
      if (currentValue === nums[j]) {
        counter = counter + 0;
        dataArray.push(counter);
console.log("current value is: " + currentValue + ", j is " + nums[j] + ", counter is: " + counter + " And data array: " + dataArray);      } 
      else if (currentValue < nums[j]) {
        counter = counter + 1;
        dataArray.push(counter);
console.log("current value is: " + currentValue + ", j is " + nums[j] + ", counter is: " + counter + " And data array: " + dataArray);      } 
      else if (currentValue > nums[j]) {
        dataArray.push(counter);
        counter += 1;
console.log("current value is: " + currentValue + ", j is " + nums[j] + " counter is: " + counter + " And data array: " + dataArray);      } 
    }
  }
}
// console.log(dataArray);
console.log(...dataArray);

numbers([0,1,0,3,2,3]);