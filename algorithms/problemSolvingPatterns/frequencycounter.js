// Example:

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has its
// corresponding value squared in the second array. The frequency of the values must be the same

// eg: same([1,2,3], [4,1,9]) // true
//     same([1,2,3], [1,9]) // false
//     same([1,2,1], [4,4,1]) // false (must be same frequency)


// A naive solution: Using nested loops, time complexity O(n^2) Quadratic time
// Because of the use of the indexOf array method inside of a for loop
function same(arr1, arr2) {
  // If 1st array and 2nd array is NOT equal in length, return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // For each element in the 1st array, set correctIndex to the index of the 1st array element squared.
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // If correctIndex didn't find the index of the element squared, it returns -1 and returns false
    if (correctIndex === -1) {
      return false;
    }
    // If correctIndex find the index of the squared element, it splices the 2nd array to remove that element.
    arr2.splice(correctIndex, 1);
  }
  // If the loop successfully removes all of the elements from the 2nd array without fail, return true
  return true;
}

// Return value when 2nd array is console logged: same([1,2,3,2], [9,1,4,4])
// [9, 1 , 4, 4]
// [9, 4, 4]
// [9, 4]
// [4]
// true

// REFACTORED Time complexity O(n) Linear time
// Using 3 for loops side by side, instead of being nested.
// Why is this better? Because 3n is better than n^2
function same(arr1, arr2) {
  // If 1st array and 2nd array is NOT equal in length, return false
  if (arr1.length != arr2.length) {
    return false;
  }
  // Declare frequency variables as empty objects
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // For each element in the arrays, set the element as key on the object with the value 
  // being the current count plus 1 or if it doesn't exist in the object yet, 0 plus 1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  // For each key on the freqCounter1 object
  for (let key in frequencyCounter1) {
    // if the key squared does not exist on freqCounter2 object, return false 
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // if the freqCounter2 value squared count is not equal to freqCounter1 value count, return false 
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
}

// Return value when frequencyCounters 1 and 2 is console logged: same([1,2,3,2], [9,1,4,4])
// {1: 1, 2: 2, 3: 1}
// {1: 1, 4: 2, 9: 1}
// true