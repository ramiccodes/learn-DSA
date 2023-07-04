// Example:

// Write a function called sumZero which accepts a SORTED array of integers.
// The function should find the FIRST pair where the sum is 0. Return an array
// that includes both values that sum to zero or undefined if a pair does not exist.

// eg: sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
//     sumZero([-2,0,1,3]) // undefined
//     sumZero([1,2,3]) // undefined

// A naive solution, using nested loops, time complexity O(n^2), space complexity O(1)
function sumZero(arr) {
  // Starts the loop with the first element of the array
  for (let i = 0; i < arr.length; i++) {
    // It will loop through the remaining elements of the array
    for (let j = i+1; j < arr.length; j++) {
      // If the element in the first loop and the element in the second loop is equal to 0 when added,
      if (arr[i] + arr[j] === 0) {
        // return the pair of elements in a new array
        return [arr[i], arr[j]];
      }
    }
  }
}


console.log(sumZero([-4,-3,-2,-1,0,1,2,5])); // [-2,2]

// REFACTORED, time complexity O(n), space complexity O(1)
function sumZero(arr) {
  // let left be the index of the first element of an array
  let left = 0;
  // let right be the index of the last element of an array
  let right = arr.length - 1;
  // While the left is less than the right,
  while (left < right) {
    // Sum the elements in this current index position of the array
    let sum = arr[left] + arr[right];
    // If both the element's sum is equals to zero, return a new array with the pair of elements
    if (sum === 0) {
      return [arr[left], arr[right]];
      //If the sum is greater than zero, decrease the index position of right pointer by 1
    } else if (sum > 0) {
      right--;
      //If the sum is less than zero, increase the index position of left pointer by 1
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5])); // [-2,2]

// left = 0, right = 7
// 0 < 7 = true
// arr[left] = -4 + arr[right] = 5
// - 4 + 5 = 1 !== 0 = false
// if sum > 0, sum = 1 > 0, true
// right--, so 6

// 0, 7
// true
// -4 + 5 = 1
// 1 !== 0
// 1 > 0
// 0, 6
// true
// -4 + 2 = -2
// -2 !== 0
// -2 > 0
// 1, 6

// It goes the pointers go left and right rather than doing the same side