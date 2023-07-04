// Objectives
// - Define what a searching algorithm is
// - Implement linear search on arrays
// - Implement binary search on sorted arrays
// - Implement a naive string searching algorithm
// - Implement the KMP string searching algorithm

// How do we search?

// Given an array, the simplest way to search for a value is to look at every element 
// of the array and check if it's the value we want

// What is linear search?
// - Individually iterating over each element of an array, when searching a particular element.

// JavaScript has search!
// There are many different search methods on arrays in JavaScript:
// - indexOf (looks for the value in the array and returns its index)
// - includes
// - find
// - findIndex

// Linear search pseudocode

// This function accepts an array and value
// Loop through the entire array and check if the current array element is equal to the value
// If yes, return the index at which the element is found
// If not, return -1

function linearSearch(arr, val){
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
          return i;
      }
  }
  return -1
}

// Linear Search Big O
// O(1) - Best Case Scenario (First Item)
// O(n) - Average Case Scenario (Middle Item)
// O(n) - Worst Case Scenario (Last Item)

// Linear Search is best for searching in an unsorted array
