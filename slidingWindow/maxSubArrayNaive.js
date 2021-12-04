// Write a function which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// APPROACH
// Nested for loop
// Inner loop will loop n number of times and add those numbers together
// store sum in a maximum sum variable

function maxSubarraySum(arr, n) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    currentSum += arr[i];
    for (let j = i + 1; j < n; j++) {
      currentSum += arr[j];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  console.log(maxSum);
}

maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
