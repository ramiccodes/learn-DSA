// Objectives for the recursions section:

// 1. Define what recursion is and how it can be used
// 2. Understand the two essential components of a recursive function 
// 3. Visualize the call stack to better debug and understand recursive functions
// 4. Use helper method recursion and pure recursion to solve more difficult problems

// What is recursion?
// - A process ( a function in our case ) that calls itself.

// Why do I need to know this?
// - It's EVERYWHERE!
// - eg: 
// - JSON.parse / JSON.stringify
// - document.getElementById and DOM traversal algorithms
// - Object traversal
// - We will see it with more complex data structures
// - It's sometimes a cleaner alternative to iteration

// What happens behind the scenes when a recursive function are called?
// (This is important to understand in order to write effective recursive code that doesn't break)

// - In almost all programming languages, there is a built in data structure that manages what happens when functions are invoked
// - In JavaScript, this is called the call stack

// The call stack
// (Related to a data structure called stack)

// Any time a function is invoked, it is placed (pushed) on the top of the call stack
// (Like the way you 'stack' books on top of each other)
// When JavaScript sees the return keyword or when the function ends, the compiler wil remove (pop)

// Whenever a function is called, that function is then added on top
// of the call stack. When a function returns a value, the function is
// then done and is removed from the call stack

// Why do I care?
// - You're used to functions being pushed on the call stack and popped
// off when they are done

// - When we write recursive functions, we keep pushing new functions 
// onto the call stack! (The same function).

// How recursive functions work
// - Invoke the same function with a different input until you reach
// your base case!

// Base Case
// - The condition when the recursion ends.
// - This is the most important concept to understand

// Two essential parts of a recursive function!
// 1. Base Case - The end of the line, where the recursion stops.
// 2. Different Input - Each time the function reiterates, it has to have a different piece of input when called

// Our first recursive function
function countDown(num) {
  // Base Case
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  // Different Input
  num--;
  countDown(num);
}

// Second recursive function
function sumRange(num) {
  // Base Case
  if (num === 1) {
    return 1;
  }
  // Different Input (Sums the current num and calls the sumRange function with the input of num minus 1)
  return num + sumRange(num - 1);
}

sumRange(3);
  // If num is 3, this function runs like this:
  // 3 + sumRange(2);
  // 3 + 2 + sumRange(1);
  // 3 + 2 + 1;
  // 6

// Non-recursive solution ( Iterative )
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// Recursive solution
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

//  Common Recursion pitfalls
//  - No base case (The function runs forever)
//  = Forgetting to return or returning the wrong thing
//  - Stack overflow!