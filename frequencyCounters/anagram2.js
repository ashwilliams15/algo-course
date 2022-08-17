// Given two strings, write a function to determine if the second string is an anagram of the first. Same letters same number of times)

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (obj1[str1[i]]) {
      obj1[str1[i]] += 1;
    } else {
      obj1[str1[i]] = 1;
    }
  }
  for (let j = 0; j < str2.length; j++) {
    if (obj2[str2[j]]) {
      obj2[str2[j]] += 1;
    } else {
      obj2[str2[j]] = 1;
    }
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

anagram("traa", "arat"); // true
anagram("tgif", "fftgi"); // false
anagram("aaad", "adaa"); // true
anagram("abc", "def"); // false
