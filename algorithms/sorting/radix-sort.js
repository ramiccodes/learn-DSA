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
