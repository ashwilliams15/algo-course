// Write a function utilizing the frequency counter pattern that accepts two strings and determines whether the second is an anagram of the first. (Contains the same letters and the same amount of each letter as the first string). Return a boolean.

// MY INITIAL SOLUTION
// SOLVED WITHOUT ANY REAL ISSUES
function validAnagram(str1, str2) {
  let str1Obj = {};
  let str2Obj = {};

  // Build out frequency counter of first string
  for (let i = 0; i < str1.length; i++) {
    str1Obj[str1[i]] = (str1Obj[str1[i]] || 0) + 1
  }
  // Build out frequency counter of second string
  for (let i = 0; i < str2.length; i++) {
    str2Obj[str2[i]] = (str2Obj[str2[i]] || 0) + 1
  }
  // If at any point the value at key in both objects does not match, return false
  for (let key in str1Obj) {
    if (str1Obj[key] !== str2Obj[key]) {
      return false
    }
  }
  return true
}

// SOLUTION FROM VIDEO
function validAnagram(str1, str2) {
  // checking right off the bat if the lenghts match. If they don't it can't be an anagram
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    // if letter exists in lookup, increment, otherwise initialize and set to 1
    lookup[str1[i]] ? lookup[str1[i]] += 1 : lookup[str1[i]] = 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!lookup[str2[i]]) {
      return false;
    } else {
      // subtract one from value of this letter
      // If there's a letter set to 0, and you come across it again (not an anagram), it will become falsey and line 40 will not pass
      lookup[str2[i]] -= 1;
    }
  }
  return true;
}

