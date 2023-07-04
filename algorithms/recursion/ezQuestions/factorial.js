//  Recursion question in Colt Steele DSA course 

// Problem:
// Write a function factorial which accepts a number and returns the factorial of that number. 
// A factorial is the product of an integer and all the integers below it; e.g., 
// factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

// 1. Understand the Problem
// Write a function with an input of an integer
// Multiply that integer with the numbers below it until it reaches 1 and return that 

// 2. Explore concrete examples
// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// 3. Break it down
// If integer is equal to one, return 1


// 4. Solve/Simplify
function factorial(int) {
  if (int === 0) {
    return 1
  }
  return int * factorial(int - 1)
}