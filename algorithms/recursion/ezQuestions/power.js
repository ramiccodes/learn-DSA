//  Recursion question in Colt Steele DSA course 

// Problem:
// Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  
// - do not worry about negative bases and exponents.

// 1. Understand the Problem
// Write a function that accepts two inputs, a base and a exponent.
// Apply the exponent to the base and return its value.

// 2. Explore concrete examples
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// 3. Break it down
// The base should multiply to itself depending on the number of the exponent input
// If the exponent is 0, return 1

// 4. Solve/Simplify
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}
