//  Recursion question in Colt Steele DSA course

// Problem:
// Write a recursive function called fib which accepts a number and returns the nth 
// number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence 
// of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number 
// thereafter is equal to the sum of the previous two numbers.

// 1. Understand the Problem
// Write a function that accepts a number that returns the nth number in the Fibonacci sequence
// in the position of number input

// 2. Explore concrete examples
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// 3. Break it down
// The fibonacci sequence starts with 1 and 1 and the next number would be the sum of the previous two numbers
// eg: 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5 so on, 1, 1, 3, 5...

// Factor in the number input to the times the fibonacci sequence would run

// Set two variables that would track the prev and current values of the fibonacci sequence
// The current value will become the prev value
// Set one variable that would hold the sum of the prev and current numbers and would replace current values
// 4. Solve/Simplify
function fib(num) {
  let result = [1, 1];
  let prev = 1;
  let curr = 1;
  let sum = 0;
  
  function helper(input) {
    if (input.length >= num) {
      return;
    }

    sum = prev + curr
    prev = curr
    curr = sum
    result.push(curr);

    helper(result);
  }
  helper(result);

  return result.pop();
}

function fib(num) {
  let arr = [1, 1];
  let prev = 1;
  let curr = 1;
  let sum = 0;


  for (let i = 0; i < num; i++) {
    sum = prev + curr
    prev = curr
    curr = sum
    arr.push(curr);
  }
  return arr[num - 1]
}

fib(4);