// Radix Sort
// - Radix Sort is a special sorting algorithm that works on lists of numbers
// - It never makes comparisons between elements!
// - It exploits the fact that information about the size of a number is encoded in the number of digits
// - More digits means a bigger number!

// How does it work?
// - We take a list of numbers
// [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]
// - All of the numbers are base 10 (ones, tens, hundreds, thousands, and so on)
// - We create 10 different buckets from numbers 0 to 9

//  |     |   
//  |     |
//  |__0__| 

//  |     |   
//  |     |
//  |__1__| 

//  |     |   
//  |     |
//  |__2__| 

//  |     |   
//  |     |
//  |__3__| 

//  |     |   
//  |     |
//  |__4__| 

// And so on, representing all the possible numbers, the one digit number in base ten
// We look through our list and start from the ones digit placement (leftmost)
// And then we group them into buckets based off of that number. 
// (1556 goes into the 6 bucket. 4 goes into the 4 bucket and so on)
// We then put them back into a list based off of what number they had
// (A number with 2 in the ones place will be put into the array before the number with 4 in the ones place)
// If there are multiple numbers in a bucket, we go by First In - First Out.
// (1556 and 3556 in the 6 bucket, the first to be put into the list is 1556, since it got put first into the bucket)

// [902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29]

// After we run through the list and reordered them, then we move on to the next digit in the numbers
// in the tens place to the left.
// We repeat the process above until the number with the highest amount of digits run out
// (For example, 9637, is the baseline of how many times we will run through the list, in this case, 4 times)
// The numbers without a digits in the places (For example 7 in the tenths place or 56 in the hundreds place) will
// automatically be put in the 0 bucket (07 is the same as 7, 056 is the same as 56)

// Radix Sort is an integer sort because of a special property that allows us to sort numbers very fast compared
// having to do comparisons

// In order to implement radix  sort, it's helpful to build a few helper functions first:

// getDigit(num, place) - returns the digit in num at the given place value

// getDigit(12345, 0); // 5
// getDigit(12345, 1); // 4
// getDigit(12345, 2); // 3

// (It starts from the left)
// getDigit helper function is really important for sorting things into these buckets

function getDigit(num, place) {
  let reversed = num.toString().split('').reverse().join('');
  for (let i = 0; i < reversed.length; i++) {
    if (i === place) {
      return parseInt(reversed[i]);
    }
  }
  return 0;
}

function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  return num.toString().length;
}

function mostDigits(arr) {
  let highest = 1;

  for (let i = 0; i < arr.length; i++) {
    let digits = digitCount(arr[i]);

    if (digits > highest) {
      highest = digits;
    }
  }
  return highest;
}

// Radix Sort Pseudocode
// - Define a function that accepts list of numbers
// - Figure out how many digits the largest number has (mostDigits helper function)
// - Loop from k = 0 up to this largest number of digits
// - For each iteration of the loop:
//   - Create buckets for each digit (0 to 9) (a bucket is just an empty array)
//   (We'll have an array that has ten sub arrays, and they all start empty)
//   - Place each number in the corresponding bucket based on its kth digit (For example, the 0th on the first iteration) (Use getDigit function)
// - Replace our existing array with values in our buckets, starting with 0 and going up to 9 (Concatenate into a new array)
// - There's gonna be two loops, one outer, which happens 4 times for example, and one inner, to actually do something to each number in the list
// - Return list at the end!

function radixSort(arr) {
  let maxDigits = mostDigits(arr);

  for (let i = 0; i < maxDigits; i++) {
    let buckets = [ [], [], [], [], [], [], [], [], [], [] ]

    for (let j = 0; j < arr.length; j++) {
      buckets[getDigit(arr[j], i)].push(arr[j]);
    }

    arr = [].concat(...buckets);
  }
  return arr;
}

// Radix Sort Time Complexity

// Time complexity - O(nk) - Linear time -  Worst case
// Time complexity - O(nk) - Linear time - Best Case 
// Time complexity - O(nk) - Linear time -  Average case
// Space complexity - O(n + k)

// n represents the number of numbers/integers we're sorting (length of the array)
// k represents the length of those numbers (it's often called the word size (number of digits - average)) 

// Why is this controversial?
// It is because this can be significantly better on paper at least, than a comparison sort which the average time complexity is O(n log n)