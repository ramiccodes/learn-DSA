// Merge Sort
// - Very well known
// - Created back in 1948 by a computer scientist / mathematician, Jonathan von Neumann
// when he wrote the first ever recorded program of Merge Sort

// - A combination of two things - merging and sorting!
// (Or really a merge of 3 three things, splitting up, sorting, and merging)
// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
// (Divide and conquer algorithm / approach)

// How does it work?

// [8, 3, 5, 4, 7, 6, 1, 2]
// Code starts by splitting it in half
// [8, 3, 5, 4]    [7, 6, 1, 2]
// We split those split arrays again
// [8, 3]   [5, 4]   [7, 6]   [1, 2]
// We split those split arrays again
// [8]   [3]   [5]   [4]   [7]   [6]   [1]   [2]
// Now we have 8 individual arrays, one for each element that we have
// Now we merge them together
// Since an array of one element is already sorted, we can easily sort and merge two sorted arrays,
// compared to merging two unsorted arrays.
// We basically just compare the numbers in two arrays, which one is smaller? Smaller goes first, and larger is second
// [3, 8]   [4, 5]   [6, 7]   [1, 2]
// Then we repeat that same process (Take the first item and compare it to the first item in the second array and the second item and so on)
// [3, 4, 5, 8]   [1, 2, 6, 7]
// [1, 2, 3, 4, 5, 6, 7, 8]

// Merging Arrays
// - Writing a function to merge sorted arrays
// - We assume the arrays are sorted and all you have to do is return the combination of those two sorted arrays
// - In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// - Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
// - This function should run in O(n + m) time and O(n + m) space and SHOULD NOT modify the parameters passed on it.
// (n and m represents the two arrays being merged, it means that we're iterating over each item in each array once)

// Merging Arrays Psuedocode
//  - Define a function that takes two inputs 
//  - Create an empty array that you'll return in the end
//  - You start with the smallest values in each input array
//  - Have two counters, one called i and one called j
//  - They both need to start at zero (i and j)
//  - Colt recommends using while loops
//  - While there are still values we haven't looked at, 
// meaning that while i and j both haven't hit the end of their respective arrays
//    - If the value in the first array is SMALLER than the value in the second array,
//   push the value in the first array into our results array and move on to the next value in the first array
//    - If the value in the first array is LARGER than the value in the second array, push the value in the
//   second array into our results array and move on to the next value in the second array
//  - Once we finish one array, we just push all the remaining values from the other array in

function merge(arr1, arr2) {
  let sortedArr = [];
  let i = 0;
  let j = 0;

  while (i !== arr1.length - 1 || j !== arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i])
      i++;
    } else {
      sortedArr.push(arr2[j])
      j++
    }
  }

  if (i < j) {
    sortedArr.push(arr1[i]);
  } else {
    sortedArr.push(arr2[j]);
  }

  return sortedArr
}

// Colt's Solution
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }

  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

// Merge Sort Pseudocode
// - Break up the array into halves until you have arrays that are empty or have one element
// (Colt suggests to use .slice. Single array into a half, two halves)
// You go from zero until the middle of the array and middle of the array to zero to give you two halves
// After you get those two halves, you're going to call the Merge Sort function again and repeat the process recursively
// The base case is when the array's length is less than or equal to one
// Once we have those small arrays, we merge them back using our merge function
// Once the array has been merged back together, return the merged (and sorted!) array

function mergeSort(arr) {
  let middleIndex = Math.ceil(arr.length / 2);
  let firstHalf = arr.slice(0, middleIndex);
  let secondHalf = arr.slice(-middleIndex);

  if (arr.length <= 1) {
    return;
  }

  console.log(firstHalf)
  console.log(secondHalf)

  mergeSort(firstHalf);
  mergeSort(secondHalf);
}


// How to get the all the individual array and merge them together?

// Colt's Solution
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
mergeSort([10,24,76,73])

// [10,24,76,73]

// left = mergeSort([10,24])
// arr.length not less than or  equal to 1, so keep going
// left = mergeSort([10]), return [10]
// left = [10]
// right = mergeSort([24]), return [24]
// right = [24]
// merge(left, right)
// return [10,24]
// left = [10,24]

// right = mergeSort([76,73])
// arr.length not less than or  equal to 1, so keep going
// left = mergeSort([76]), return [76]
// left = [76]
// right = mergeSort([73]), return [73]
// right = [73]
// merge(left, right)
// return [73, 76]
// right = [73, 76]

// left = [10,24]
// right = [73,76]
// return merge(left, right)
// [10,24,73,76]


// Big O of mergeSort
// Time Complexity (Worst): O(n log n)
// Time Complexity (Average): O(n log n)
// Time Complexity (Best): O(n log n)
// Space Complexity: O(n)

// Why is it n log n?
// - If we have 8 items in an array, how many times do we have to split in order to
// get single element arrays?
// The answer is 3
// - But if instead we had an array of 32,
// The answer is 5

// - This is O(log n) decompositions (Base two: Two of what power gives us n?)
// - If we have 8 elements, we take 2 and raise it 3 times to get 8
// - If we have 32 elements, we take 2 and raise it 5 times to get 32

// - As n grows the length of this array, the number of times we have to split it
// grows at the rate of log n

// - Each time we decompose it, we have O(n) comparisons
// The merge function has the time complexity of O(n), since it makes the same amount
// of comparisons as the length of the array, since it is not modified in any way

// That's why the time complexity for merge sort is O(n log n)

// O(n log n) is better than O(n^2) but worse than O(n), O(log n), and O(1)

// If we want a data agnostic sorting algorithm, the best we can do is O(n log n)