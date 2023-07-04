// Binary Search

// Binary Search is a much faster form of search
// Rather than eliminating one element at a time, you can
// eliminate half of the remaining elements at a time

// Unlike linear search, Binary Search only works for SORTED arrays!

// Implementation:

// Divide and Conquer
// Search for 15 in this array: (Must be sorted)
// [1,3,4,6,8,9,11,12,15,16,17,18,19]
// Left: 1, Too Small: 11, Right: 19

// We're gonna change the window of where we're searching,
// because remember, we can throw out half of the array
// roughly every time.

// Between left and right, you're gonna pick a value that is in between of their range
// (Between the first number 1 and the last number 19 is 11 in this array)

// 15 is greater than 11, so we're gonna throw out from the numbers range from 1 to 11
// We're gonna repeat the process again, but this time, the left would be 12 and the middle would be 17.
// But 17 is greater than 15, so the ranges 17 to 19 are thrown out
// Left is now 12 and right is now 16, and the middle is 15
// 15 is what we're looking for, so we return the index of 15, which is 8

// Only checked 3 times! Compared to linear search which could've checked 9 times, 3x less!

// Binary Search Pseudocode
// - Function accepts a sorted array and a value
// - Create a left pointer at the start of the array, and a 
// right pointer at the end of the array
// - You want to make sure that you're only looping while the left comes before the right pointer
// - You're also gonna pick a middle (You can take an average of the left and right positions. eg: left is 0, right is 10, middle is then 5)
// - Looping over and over, checking if the current element matches the value (middle === value) 
// and returning the index, if not, keep looping
// - If the value is too small, you're going to move the left pointer up
// - If the value is too large, move the right pointer down
// - If the value is not found, return -1

// Problem:
// Write a function called binarySearch which accepts a sorted array 
// and a value and returns the index at which the value exists. 
// Otherwise, return -1.

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (arr[middle] === val) {
      return middle;
    } else {
      if (arr[middle] < val) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
}

// [1,2,3,4,5], 2
// left = 1, right = 5, middle = 3
// 3 > 2, so right = 3 - 1 = 2
// 0 <= 2 true, so middle = 2 / 2 = 1
// middle[1] = 2 and val = 2, so return 1

// Big O of Binary Search

// O(log n) = Worst Case
// O(log n) = Average Case
// O(1) = Best Case
