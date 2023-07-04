// Merge Sort
// - Very well known
// - Created back in 1948 by a computer scientist / mathematician, Jonathan von Neumann
// when he wrote the first ever recorded program of Merge Sort

// - A combination of two things - merging and sorting!
// (Or really a merge of 3 three things, splitting up, sorting, and merging)
// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
// (Divide and conquer algorithm / approach)

// How does it work?

// [8, 3, 5, 4, 7, 6, 1, 2]
// Code starts by splitting it in half
// [8, 3, 5, 4]    [7, 6, 1, 2]
// We split those split arrays again
// [8, 3]   [5, 4]   [7, 6]   [1, 2]
// We split those split arrays again
// [8]   [3]   [5]   [4]   [7]   [6]   [1]   [2]
// Now we have 8 individual arrays, one for each element that we have
// Now we merge them together
// Since an array of one element is already sorted, we can easily sort and merge two sorted arrays,
// compared to merging two unsorted arrays.
// We basically just compare the numbers in two arrays, which one is smaller? Smaller goes first, and larger is second
// [3, 8]   [4, 5]   [6, 7]   [1, 2]
// Then we repeat that same process (Take the first item and compare it to the first item in the second array and the second item and so on)
// [3, 4, 5, 8]   [1, 2, 6, 7]
// [1, 2, 3, 4, 5, 6, 7, 8]