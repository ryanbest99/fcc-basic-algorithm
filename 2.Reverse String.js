<<<<<<< HEAD
const str = "hello";
console.log(str[3]);
console.log(str.slice(1));

function reverseString(str) {
  return str;
}

reverseString("hello");
=======
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
>>>>>>> 50296d03b1c5bbf4d9020a550ef98c802f1a6d9a
