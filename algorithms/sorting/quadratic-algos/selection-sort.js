// Selection Sort

// Similar to bubble sort, but instead of first placing
// large values into sorted position, it places small values 
// into sorted position

// Examples

// [5, 3, 4, 1, 2]
// Which is the minimum? 5 or 3? 3, so 3 is the minimum
// Which is the minimum? 3 or 4? 3, so 3 is still the minimum
// Which is the minimum? 3 or 1? 3, 1 is now the minimum
// Which is the minimum? 1 or 2? 3, 1 is still the minimum
// Change the array to switch the minimum values in the beginning element position of the array
// [1, 3, 4, 5, 2]

// Selection Sort Pseudocode
// - Store the first element as the smallest element you've seen so far
// - Compare this item to the next item in the array until you find a smaller number
// - If a smaller number is found, designate that smaller number to be the new minimum and
// continue until the end of the array
// - If the "minimum" is not the value (index) you initially began with, swap the two values
// - Repeat this with the next element until the array is sorted


function selectionSort(arr) {
  let position = 1;
  let position2 = 0;
  let min = 0;
  let position3 = 1;
  

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j + position] < arr[min]) {
        min = j + position;
      }
    }
    swap(arr, position2, min);
    position++;
    position2++;
    min = 0;
    min += position3;
    position3++;
  }
  return arr;
}

selectionSort([5,3,4,1,2]);

// Colt's solution
function selectionSort(arr) {
  function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }
  return arr;
}

// Selection Sort Time Complexity 
// Time complexity - O(n^2) - Quadratic time (Because of nested loops) -  Worst case
// Time complexity - O(n^2) - Linear time (If array is nearly sorted or already sorted) - Best Case 
// Time complexity - O(n^2) - Quadratic time (Because of nested loops) -  Average case
// Space complexity - O(1) - Constant time

// Selection Sort is better than Bubble Sort when:
// - You want to minimize the amount of swaps you're making
// - If we're worried about writing to memory, we're worried about doing the swap (which is not common)

// DO NOT USE SELECTION SORT IF THE ARRAY IS NEARLY SORTED, USE BUBBLE OR INSERTION SORT INSTEAD