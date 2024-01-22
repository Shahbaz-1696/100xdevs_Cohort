/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  if (str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if (str[i] === vowels[j]) {
          vowelCount += 1;
        }
      }
    }
  }
  return vowelCount;
}

module.exports = countVowels;
