// write a function that counts the number of unique integers in a sorted array

// INPUT: sorted array of integers

// OUTPUT: num of unique values or zero if the array is empty

// attempting pointer solution from video
function countUniqueValues(arr) {
  if (!arr.length) return 0;

  let p1 = 0;
  let p2 = 1;

  while (p2 < arr.length) {
    if (arr[p1] === arr[p2]) {
      p2++;
    } else {
      p1++;
      arr[p1] = arr[p2];
      p2++;
    }
  }
  return p1 + 1;
}

// this was my first idea
function countUniqueValues(arr) {
  if (!arr.length) return 0;

  let frequencyCount = {};

  for (let i = 0; i < arr.length; i++) {
    if (frequencyCount[arr[i]]) {
      continue;
    } else {
      frequencyCount[arr[i]] = true;
    }
  }
  console.log(Object.entries(frequencyCount).length);
}

countUniqueValues([-1, 1, 1, 5, 7, 7, 9]); // 5
// countUniqueValues([]);
