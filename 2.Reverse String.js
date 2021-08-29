function reverseString(str) {
  let newArr = [];

  for (i = 0; i < str.length; i++) {
    newArr.unshift(str[i]);
  }

  const reversedStr = newArr.join("");
  console.log(reversedStr);
  return reversedStr;
}

reverseString("hello"); // olleh
