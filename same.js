// Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

// MY INITIAL FIRST ATTEMPT PRE LESSON
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let squares = [];
  // loop through first array
  for (let i = 0; i < arr1.length; i++) {
    // grab number
    let firstNum = arr1[i];
    // loop through second array
    for (let j = 0; j < arr2.length; j++) {
      // See if squared first num is in second array
      if (firstNum * firstNum === arr2[j]) {
        // if it is, remove it, push it into an array and break
        squares.push(arr2[j]);
        arr2.splice(j, 1);
        console.log(arr2);
        break;
      }
    }
  }
  // compare length of result array with length of an input array
  if (squares.length === arr1.length) {
    return true;
  } else {
    return false;
  }
}

// NAIVE APPROACH FROM LESSON
function same(arr1, arr2) {
  // edge case
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // es6 syntax for exponentiation operator (**)
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // indexOf will return -1 if value is not found
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// REFACTORED O(n)
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    // If inserting this value for the first time, set value to 0 + 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
}
