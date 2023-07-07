// Quick Sort

// - Like merge sort, it exploits the fact that arrays of 0 or 1 elements are always sorted
// - Works by selecting one element (called the pivot) and finding the index where the pivot should end up
// in the sorted array
    // Let's say we pick the element in the middle, what we're going to do is move all the numbers that are lower
    // than that number to the left of that number and all greater to the right of that number.
    // We're not gonna sort them all, we're just gonna move them on one side, and then from there,
    // we know that that one number is in the correct spot (only that one number)

// - Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// How does it work?
// [5, 2, 1, 8, 4, 7, 6, 3]
// In this example, we picked the item "5"
// We'll then move all the items that are less than 5, to the left of it, and all greater to the right
// [3, 2, 1, 4, 5, 7, 6, 8]
// Now we recursively repeat the process on the left and right side
// Now we pick item "3"
// [1, 2, 3, 4, 5, 7, 6, 8]
// We pick the item "1" and figure out where it needs to go
// All we have is one other element greater than it
// Right side becomes 2
// We've now hit the end on our left side
// The left side of the "5" is now properly sorted
// We pick the pivot point as 7 and figure out where it should go
// [1, 2, 3, 4, 5, 6, 7, 8]
// Now it's a sorted array!

// First part of quick sort
// Pivot / Partition helper

// - In order to implement merge sort, it's useful to first implement a function responsible arranging elements
// in an array on either side of a pivot
// - Given an array, this helper function should designate an element as the pivot 
// - It should then rearrange elements in an array so that all the values less than the pivot
// are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
// - The order of elements on either side doesn't matter, it just needs to be less than or greater than the pivot
// - The helper should do it in place, that is, it should not create a new array
// - When complete, the helper should return the index of the pivot

// Picking a pivot
// - The runtime of quick sort depends in part on how one selects the pivot
// - Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're storing
// (If we could perfectly get it, we would pick the middle value of our sorted data, so that the left and right side should be equal)
// - For simplicity, we'll always choose the pivot to be the first element (there's consequences to this, concerning Big O)

// Pivot Pseudocode
// - It will help to accept three arguments, an array, a start index, and an end index 
// (these can default to 0 and the array length minus 1, respectively)
// - Grab the pivot from the start of the array
// - Store the current pivot INDEX in a variable (this will keep track of where the pivot should end up)
// - Loop through the array from the start till the end 
//   - If pivot > current element, increment the pivot index 
//     variable and swap the current element with the element at the pivot index
// - Swap the starting element (i.e. the pivot) with the pivot index
// - Return the pivot index

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[0];
  let pivotIndex = 0;

  for (let i = start; i < end; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
    }
  }

  [arr[0], arr[pivotIndex]] = [arr[pivotIndex], arr[0]]

  return pivotIndex;
}

pivot([3,1,4,2,5]);