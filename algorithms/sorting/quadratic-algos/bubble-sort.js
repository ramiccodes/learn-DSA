// Not common to use, not very efficient

// - A sorting algorithm where the largest values bubbles up to the top

// The way that it works is as we loop through each item, we compare it to the next item,
// the on in front of it, and we check is this the one larger than what we're comparing it to?
// If it is, we swap their positions. 

// Example: [29, 10, 14, 30, 37, 14, 18]
// 29 is greater than 10, so we swap positions
// [10, 29, 14, 30, 37, 14, 18]
// 29 is greater 14, so we swap again
// [10, 14, 29, 30, 37, 14, 18]
// If the latter number is greater than the former, we don't swap and instead move the pointer to the latter
// 30 is less than 37, so our new pointer is 37
// [10, 14, 29, 30, 37, 14, 18]
// 37 is greater than 14, so we swap
// [10, 14, 29, 30, 14, 37, 18]
// 37 is greater than 18, so we swap
// [10, 14, 29, 30, 14, 18, 37]
// Our largest number "bubbled" to the top
// We continue to loop until its fully sorted

// Could also be called sinking sort, because the lower values "sink" to the bottom

// Before we sort, we must swap!
// Many sorting algorithms involve some type of swapping functionality
// (eg swapping two numbers to put them in order)

// ES5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES6 (ES2015)
// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }

// It helps to define a function called swap that does the swap
// functionality because our bubble sort code becomes even shorter
// The actual bubble sort logic is really just about the comparisons
// in the loops and then we can just call swap

// Bubble Sort Pseudocode
// - Start looping from with a variable called i, at the end of the 
// array towards the beginning
// - Start an inner loop with a variable called j from the beginning
// until i - 1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array after loop is done

// DON'T USE THE VALUES IN THE ARRAY, USE THEIR INDEX (i or j)

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

// Colt's Unoptimized Solution to reduce the number of operations
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

bubbleSort([5,2,4,3,1]);


// Bubble Sort Optimization (If no swapping was made, then stop the loop) (This is for cases where an array is almost sorted, to prevent it from looping
// through the array again even then the array is already sorted)
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return arr;
}

// Bubble Sort Time Complexity

// Time complexity - O(n^2) - Quadratic time (Because of nested loops) -  Worst case
// Time complexity - O(n) - Linear time (If array is nearly sorted or already sorted) - Best Case 
// Time complexity - O(n^2) - Quadratic time (Because of nested loops) -  Average case
// Space complexity - O(1) - Constant time