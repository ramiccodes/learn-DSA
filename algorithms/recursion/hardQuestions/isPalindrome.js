// Problem:
// Write a recursive function called isPalindrome which returns true 
// if the string passed to it is a palindrome (reads the same forward 
// and backward). Otherwise it returns false.

// 1. Understand the Problem
// Write a function that checks if the string input is a palindrome, if yes, return true and return false if not

// 2. Explore concrete examples
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// 3. Break it down
// Use the logic to reverse the string like in the reverse.js
// Use the output to compare
// Add last character to the result variable
// Remove the last character from the str input and recursively call isPalindrome on that

// 4. Solve/Simplify
function isPalindrome(str) {
  let result = '';

  function recursive(str) {
    if (str.length === 0) {
      return;
    }

    result += str.charAt(str.length - 1);
    recursive(str.slice(0, -1));
  }
  recursive(str)
  
  if (result === str) {
    return true;
  }

  return false;
}

//  Colt's solution
function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}