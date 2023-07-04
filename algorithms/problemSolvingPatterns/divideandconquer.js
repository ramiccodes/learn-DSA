// Example:

// Given a sorted array of integers, write a function called search,
// that accepts a value and returns the index where the value passed to
// the function is located. If the value is not found, return -1.

// eg: search([1,2,3,4,5,6], 4) // 3
//     search([1,2,3,4,5,6], 6) // 5
//     search([1,2,3,4,5,6], 11) // -1

// A naive solution, time complexity O(n), called linear search
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// REFACTORED, time complexity O(log n) (logarithmic)
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

search([1,2,3,5,6,8,9,12,15,16,29], 15)
// min = 0
// max = 10

// 0 <= 10
// middle = 10 / 2 = 5
// currentElement = 8
// currentElement = 8 < val = 15
// min = 6

// min = 6
// max = 10

// 6 <= 10
// middle = 8
// currentElement = 15
// 8