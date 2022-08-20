// Write a function which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// APPROACH
// utilize the sliding window pattern, where you don't re-add numbers together, but just slide the subarray down one index

// Time Complexity: O(n)

function maxSubarraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  // edge case
  if (arr.length < n) return null;
  // create first maxSum with the first n numbers in the array
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    // the subtraction is the first number that made up the tempSum array
    tempSum = tempSum - arr[i - n] + arr[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}
