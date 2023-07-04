// Problem:
// Write a recursive function called reverse 
// which accepts a string and returns a new string 
// in reverse.

// 1. Understand the Problem
// Write a function that accepts a string and
// returns a reversed copy

// 2. Explore concrete examples
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// 3. Break it down
// Use .substring string method to get individual characters
// Concatenate that character into a new empty string
// Use .slice method to remove that individual character
// Use recursion

// 4. Solve/Simplify
function reverse(str) {
  if(str.length <= 1) {
    return str;
  }

  return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
} 

// Ramic
// C + Rami