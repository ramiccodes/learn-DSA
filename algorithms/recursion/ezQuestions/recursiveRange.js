//  Recursion question in Colt Steele DSA course

// Problem:
// Write a function called recursiveRange 
// which accepts a number and adds up all the numbers 
// from 0 to the number passed to the function 

// 1. Understand the Problem
// Like a factorial but sum it up

// 2. Explore concrete examples
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

// 3. Break it down
// If number = 0, return 0

// 4. Solve/Simplify
function recursiveRange(num) {
  if (num === 0) {
    return 0;
  }
  return num + recursiveRange(num - 1);
}