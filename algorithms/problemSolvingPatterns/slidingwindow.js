// Example:

// Write a function called maxSubarraySum which accepts an array
// of integers and a number called n. The function should calculate
// the maximum sum of n consecutive elements in the array

// eg: maxSubarraySum([1,2,5,2,8,1,5],2) // 10
//     maxSubarraySum([4,2,1,6],1) // 6
//     maxSubarraySum([4,2,1,6,2],4) // 13
//     maxSubarraySum([],4) // null

// A naive solution, using nested loops, time complexity O(n^2)
function maxSubarraySum(arr, num) {
  // If the number provided is greater than the length of the array, return null
  if (num > arr.length) {
    return null;
  }
  // Set max to negative Infinity to account for an array that has all negative numbers, the biggest sum would still be negative
  let max = -Infinity;
  // For loop iteration dependent on the value passed in for num, that way, it would stop the last values to be added, for example, if 3 numbers needed to be added, the iteration limit would be the third to the last element
  for (let i = 0; i < arr.length - num + 1; i++) {
    // Variable temp will store the sum in each iteration to keep track whether it is the highest
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max)
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

// REFACTORED, time complexity O(n)
function maxSubarraySum(arr, num) {
  // Set variables from maxSum and tempSum
  let maxSum = 0;
  let tempSum = 0;

  // If the number provided is greater than the length of the array, return null
  if (arr.length < num) {
    return null;
  }
  // For loop that iterates according to the value passed in for num, adding those numbers together
  for (let i = 0; i < num; i++) {
    // Adds together maxSum and the element in the given index and sets it to the maxSum variable
    maxSum += arr[i];
  }
  // tempSum value is set from the maxSum value
  tempSum = maxSum;
  // See explanation below for this logic
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // Using the Math.max method, it sets the maximum value between maxSum and tempSum to the maxSum variable
    maxSum = Math.max(maxSum, tempSum);
  }
  // maxSum is then returned
  return maxSum;
}

// Instead of adding the three elements including the one at the first position,
// This refactored algorithm subtracts the first position element and adds the next element
// eg: 2 + 6 + 9 ===> 6 + 9 + 2 ===> 9 + 2 + 1
maxSubarraySum([2,6,9,2,1,8,5,6,3],3)