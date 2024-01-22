/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str === "") return true;

  let lowerStr = str.toLowerCase();

  let refinedStr = "";

  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] !== " " && lowerStr[i] >= "a" && lowerStr[i] <= "z") {
      refinedStr += lowerStr[i];
    }
  }

  let reversedStr = refinedStr.split("").reverse().join("");

  if (reversedStr === refinedStr) {
    return true;
  }

  return false;
}

module.exports = isPalindrome;
