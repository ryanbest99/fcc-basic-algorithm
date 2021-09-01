// 3-1 Return the largest number in an array

function largestNum(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

console.log(largestNum([2, 4, 5, 3, 1, 9])); // 9;
