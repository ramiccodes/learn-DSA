// Problem:
// Implement a function caled countUniqueValues, which accepts
// a sorted array and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted

// 1. Understand the Problem


// 2. Explore concrete examples


// 3. Break it down


// 4. Solve/Simplify
function countUniqueValues(arr) {
  let left = 0;
  let right = left + 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
    right++;
  }
  return left;
}

// Colt's solution
function countUniqueValues(arr) {
  let i = 0;
  if ( arr.length === 0) {
    return 0;
  }

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([1,1,1,2,3,3,4,4,5,6]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([-2,-1,-1,0,1]));
