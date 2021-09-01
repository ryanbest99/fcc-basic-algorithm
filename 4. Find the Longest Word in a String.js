// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  const strToArr = str.split(" ");
  console.log(strToArr);
  let maxChar = 0;

  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i].length > maxChar) {
      maxChar = strToArr[i].length;
      console.log(maxChar);
    }
  }
  console.log(maxChar);
  return maxChar;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
