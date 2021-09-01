// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  const emptyArr = [];

  arr.forEach((single) => {
    let max = single[0];
    console.log(max);

    for (let i = 1; i < single.length; i++) {
      if (max < single[i]) {
        max = single[i];
        console.log(max);
      }
    }
  });
  return emptyArr;
}

console.log(
  largestOfFour([
    [28, 13, 29, 27, 18, 26],
    [10, 4, 5, 11, 3],
    [40, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
); //should return [27, 5, 39, 1001]
