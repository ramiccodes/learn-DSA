//  Recursion question in Colt Steele DSA course

// Problem:
// Write a function called productOfArray which 
// takes in an array of numbers and returns the product of them all.

// 1. Understand the Problem
// Write a function that takes in an array of numbers and return the product from multiplying them together

// 2. Explore concrete examples
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// 3. Break it down
// Find a way to access each element of the array to multiply them together

// 4. Solve/Simplify
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}