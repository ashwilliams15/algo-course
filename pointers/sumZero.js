// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// MY INITIAL SOLUTION PRE-LESSON
// Needed some debugging, but got to a solution
function sumZero(arr) {
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    let sum = arr[p1] + arr[p2]
    if (sum === 0) {
      return [arr[p1], arr[p2]]
    }
    if (Math.abs(arr[p1]) < Math.abs(arr[p2])) {
      p2--
    } else {
      p1++
    }
  }
  // Don't need to explicitly return undefined but you can
  return undefined;
}

// SOLUTION FROM LECTURE
// Time Complexity: O(n)
function sumZero(arr) {
  let p1 = 0;
  let p2 = arr.length - 1;
  while (p1 < p2) {
    let sum = arr[p1] + arr[p2];
    if (sum === 0) {
      return [arr[p1], arr[p2]];
    } else if (sum > 0) {
        p2--
      } else {
          p1++
    }
  }
}

sumZero([-3, -1, 0, 1, 5])
