// Insertion Sort
// - Builds up the sort by gradually creating a larger left half, which is always sorted 
// (Instead of finding the largest element at a time, or finding the smallest element at a time,
// it takes each element and places it where it should go in the sorted half)

// Examples:
// [5, 3, 4, 1, 2]
// The sorted "half" is the left side, where 5 is, we then compare that to 3
// We move the 3 before the 5 to sort it
// [3, 5, 4, 1, 2]
// The side where 3 and 5 is is now the sorted half
// We now look at 4 and we decide where in the sorted half would it be placed
// [3, 4, 5, 1, 2]
// We "inserted" the four between 3 and 5 (Insertion sort)
// We look at 1 and we insert it where it makes sense in the sorted half to be placed
// [1, 3, 4, 5, 2]
// Lastly, we look at 2 and insert it
// [1, 2, 3, 4, 5]

// Insertion Sort Pseudocode
//  - Start by picking the second element in the array
//  - Now compare the second element with the one before it and swap if necessary
//  - Continue to the next element and if it is in the incorrect order, iterate through
//  the sorted portion (i.e. the left side) to place the element in the correct place
//  - Repeat until array is sorted.
//  - Return the array.


function insertionSort(arr) {
  function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  
  for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          swap(arr, j, i);
        }
      }
  }
  return arr;
}

insertionSort([5,3,4,1,2]);

// Colt's Solution
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currVal;
  }
  return arr;
}

// Insertion Sort Time Complexity
// Time complexity - O(n^2) - Quadratic time (Because of nested loops) -  Worst case
// Time complexity - O(n) - Linear time (If array is nearly sorted or already sorted) - Best Case 
// Time complexity - O(n^2) - Quadratic time (Because of nested loops) -  Average case
// Space complexity - O(1) - Constant time

// This sort is good at:
// - Online algorithm (Algorithm that can work as data is coming in, as it receives data. It doesn't have to have the entire array at one)
// Like we have some code where people are submitting numbers to us online live and we want to sort them. The way insertion sort works is we
// have one side that is sorted already, no matter what the number is, it's easy to insert it inside the sorted side.
// IF YOU NEED YOUR DATA TO BE CONSTANTLY SORTED