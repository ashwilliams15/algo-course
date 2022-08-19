// Write a function which accepts a sorted array of integers. Find the first pair where the sum is 0.

// INPUT: sorted array

// OUTPUT: array of both integers that sum to zero or undefined

const sumZero = (arr) => {
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    const sum = arr[p1] + arr[p2];
    if (sum === 0) {
      return [arr[p1], arr[p2]];
    } else if (sum > 0) {
      p2--;
    } else p1++;
  }
  return undefined;
};

sumZero([-4, -2, -1, 0, 3, 4, 6]); // [-4, 4];
sumZero([-4, -2, -1, 0, 3, 5, 6]); // undefined
