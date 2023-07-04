// Elementary Sorting Algorithm

// What is sorting?
// - Sorting is the process of rearranging the items in a collection
// (eg. an array) so that the items are in some kind of order

// Examples
// - Sorting numbers from smallest to largest
// - Sorting names alphabetically
// - Sorting movies based on release year
// - Sorting movies based on revenue

// Why do we need to learn this?
// - Sorting is an incredibly common task, so it's good to know how it works
// - There are many ways of sorting things, and different techniques have their own advantages and disadvantages
// - It's a classic interview topic

// Different kinds of sorting algorithms for different types of data
// (eg. Random, Nearly Sorted, Reversed, Few Unique)

// Objectives
// - Implement Bubble Sort
// - Implement Selection Sort
// - Implement Insertion Sort
// - Understand why it is important to learn these simpler sorting algorithms

// Built-in Sort method in JavaScript
// It doesn't always work as you expect 
// Works with strings (Sorts them alphabetically)
// But works weird with an array of integers

// Why does this happen?
// Because the default sort order is according to string Unicode code points
// (Sort methods turns all the items in the array into string and sorts them according to their unicode value)

// But we can tell the sort method how to sort by inputting an optional comparator function
// This comparator function looks at pairs of elements (a and b), and determines their sort order based on the return value.
// If it returns a negative number, a should come before b
// If it returns a positive number, b should come before a
// If it returns 0, a and b are the same

// Examples

function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
// [4, 6, 10, 15]

// Sorting by the length of the string
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);
// ["Colt", "Steele", "Algorithms", "Data Structures"]

// Recap
// - Sorting is fundamental
// - Bubble, Insertion, and Selection are all roughly equivalent
// - All have average time complexities that are quadratic
// - We can do better... but we need more complex algorithms!