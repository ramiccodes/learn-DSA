// The function itself is self contained and recursive
function collectOdd(arr) {
  //  Define new array everytime
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // Concatenate all array in a newArr and return
  newArr = newArr.concat(collectOdd(arr.slice(1)));
  return newArr;
}

collectOdd([1,2,3,4,5])
// [1].concat(collectOdd([2,3,4,5]))
// [].concat(collectOdd([3,4,5]))
// [3].concat(collectOdd([4,5]))
// [].concat(collectOdd([5]))
// [5].concat(collectOdd([]))
// It then concats the opposite way
// Final return value: [1,3,5]

// Pure recursion tips
// - For arrays, use methods like slice, the spread operator, and concat that make copies of arrays
// so you do not mutate them
// - Remember that strings are immutable so you will need to use methods like slice, substr, or substring
// to make copies of strings
// - To make copies of objects use Object.assign, or the spread operator