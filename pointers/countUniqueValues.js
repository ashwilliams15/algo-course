// Write a function called countUniqueValues which accepts a sorted array and counts the unique values in the array. There can be negative numbers, but the array will always be sorted. Return an integer.

// My initial approach pre-lecture
// Had to whiteboard through, found error, fixed
function countUniqueValues(arr) {
  if (arr.length < 1) {
    return 0
  }

  let count = 1;
  let holdP = 0;
  let moveP = 1;

  while (moveP <= arr.length - 1) {
    if (arr[holdP] !== arr[moveP]) {
      count++
      holdP = moveP;
      moveP = moveP + 1
    } else {
      moveP++
    }
  }
  return count;
}

// Solution from video
// This solution modified original array and moves unique values to the front
function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

[1, 1, 3, 5, 5]
