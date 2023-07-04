// Naive String Search

// Suppose you want to count the number of times a smaller
// string appears in a longer string

// A straightforward approach involves checking pairs of characters individually

// Pseudocode
// Define a function named stringSearch and pass it two string inputs, one smaller and one larger string
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop, and find a match, increment the count of matches
// Return the count

// If the characters match, how do i move the index to check if the elements in the index still match?

function stringSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i] !== short[j]) {
        break;
      }
      i++;
      j++;
      if (long[i] === short[j]) {
        count++;
      }
    }
  }
  return count;
}

stringSearch("wowomgzomg", "omg");
stringSearch("weweeeewewwwwwew", "wew");

// Time complexity: O(n^2) Quadratic time (because nested loop)