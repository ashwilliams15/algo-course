// Write a function which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive integers in the array.

// INPUT: array of nums, n

// OUTPUT: max sum integer or null

// NAIVE APPROACH
// nested loop. outer loop keeps track of movement through arr
// inner loop sums following three numbers and adds them to outer loop curr num
// stores current sum in variable
// on next loop compares current sum to previous sum
// returns sum
function maxSubarraySum(arr, n) {
  let highestSum = null;
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    let innerSum = 0;
    // figuring out this loop conditional was the trickiest part
    for (let j = i + 1; j <= n + i - 1; j++) {
      innerSum += arr[j];
    }
    const currentSum = currentNum + innerSum;
    if (highestSum < currentSum) {
      highestSum = currentSum;
    }
  }
  console.log(highestSum);
}

maxSubarraySum([1, 0, 4, 7, 2], 3); // 13
// maxSubarraySum([8, 3, 6, 2, 8], 2); // 11
