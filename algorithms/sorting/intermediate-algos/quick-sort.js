// Quick Sort

// - Like merge sort, it exploits the fact that arrays of 0 or 1 elements are always sorted
// - Works by selecting one element (called the pivot) and finding the index where the pivot should end up
// in the sorted array
    // Let's say we pick the element in the middle, what we're going to do is move all the numbers that are lower
    // than that number to the left of that number and all greater to the right of that number.
    // We're not gonna sort them all, we're just gonna move them on one side, and then from there,
    // we know that that one number is in the correct spot (only that one number)

// - Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// How does it work?
// [5, 2, 1, 8, 4, 7, 6, 3]
// In this example, we picked the item "5"
// We'll then move all the items that are less than 5, to the left of it, and all greater to the right
// [3, 2, 1, 4, 5, 7, 6, 8]
// Now we recursively repeat the process on the left and right side
// Now we pick item "3"
// [1, 2, 3, 4, 5, 7, 6, 8]
// We pick the item "1" and figure out where it needs to go
// All we have is one other element greater than it
// Right side becomes 2
// We've now hit the end on our left side
// The left side of the "5" is now properly sorted
// We pick the pivot point as 7 and figure out where it should go
// [1, 2, 3, 4, 5, 6, 7, 8]
// Now it's a sorted array!