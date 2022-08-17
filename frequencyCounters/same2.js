// Input: 2 unordered arrays of numbers
// Output: boolean

// Premise: Return true if every value in the first array has its corresponding value squared in the second array. Frequency must match.

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let arr1Obj = {};
  let arr2Obj = {};
  // loop through first array and square all values
  for (let i = 0; i < arr1.length; i++) {
    const squared = arr1[i] * arr1[i];
    // store those values in an object as keys with frequency as value
    if (arr1Obj[squared]) {
      arr1Obj[squared] += 1;
    } else {
      arr1Obj[squared] = 1;
    }
  }
  // loop through second array and push to object with same structure as first
  for (let j = 0; j < arr2.length; j++) {
    if (arr2Obj[arr2[j]]) {
      arr2Obj[arr2[j]] += 1;
    } else {
      arr2Obj[arr2[j]] = 1;
    }
  }
  // compare objects. We've already checked that they're the same length.
  // SO we can just lookup obj2's keys/values on obj1
  for (let key in arr1Obj) {
    if (arr1Obj[key] !== arr2Obj[key]) {
      return false;
    }
  }
  return true;
};

same([1, 2, 2, 3], [4, 9, 1, 4]); // true
same([1, 2, 3], [1, 1, 4]); // false
same([1, 2, 3], [2, 9, 1]); // false
