// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(n1, n2) {
  let n1Obj = {};
  let n2Obj = {};
  stringN1 = String(n1);
  stringN2 = String(n2);

  for (let i = 0; i < stringN1.length; i++) {
    if (n1Obj[stringN1[i]]) {
      n1Obj[stringN1[i]] = n1Obj[stringN1[i]] + 1;
    } else {
      n1Obj[stringN1[i]] = 1;
    }
  }
  for (let i = 0; i < stringN2.length; i++) {
    if (n2Obj[stringN2[i]]) {
      n2Obj[stringN2[i]] = n2Obj[stringN2[i]] + 1;
    } else {
      n2Obj[stringN2[i]] = 1;
    }
  }
  for (let key in n1Obj) {
    if (n1Obj[key] !== n2Obj[key]) return false;
  }
  return true;
}

// sameFrequency(182, 281); // true
// sameFrequency(34, 14); // false
// sameFrequency(3589578, 5879385); // true
// sameFrequency(22, 222); // false
