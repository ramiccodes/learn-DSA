Intermediate Sorting Algorithm
3 more to cover

They are much faster but also a little bit more challenging
They're less intuitive to write on your own

They're meatier, juicier algorithms that take more time to understand
but the payoff is that they are much more faster

Objectives
- Understand the limitations of the sorting algorithms we've learned so far.
- Implement merge sort
- Implement quick sort
- Implement radix sort

Why learn this?
- The sorting algorithms we've learned so far don't scale well.
- Try out bubble sort on an array of 100000 elements, it will take quite some time!

Compared to bubble sorting an array of 100000 elements, it takes about 2 seconds to run
While, merge sort finishes running almost immediately

Faster Sorts  
- There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n)
- The more efficient algorithms are much less simple, and generally take longer to understand

All of these sort algorithms are grouped together in a group called Comparison Sorting Algorithms.
This means that whether we're talking about bubble sort or something more advanced like quick sort,
beneath the surface, the base comparison that we're doing is between TWO items at any given point

Comparison sort just means we're comparing two things. That's the most we compare at any given time.
Less than vs Greater than, and then deciding where that one item goes.

Average Time Complexity
- Bubble Sort - O(n^2)
- Insertion Sort - O(n^2)
- Selection Sort - O(n^2)
- Quick Sort - O(n log (n))
- Merge Sort - O(n log (n))

Are there faster sorting algorithms? Faster than O(n log (n))?
The answer is YES, but not by making comparisons

The best average case time complexity that we can ever hope for in any comparison sort is O(n log (n))