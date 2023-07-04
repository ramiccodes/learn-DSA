// Problem:
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name, formed by rearranging the letters of another, such as cinema, formed from iceman.

// Problem Solving Process:

// 1. Understand the Problem
// - Find out a way to compare if two strings have the same characters, even in different orders
// - Inputs: 2 strings to compare with each other
// - Outputs: true, if two strings have the same characters, false otherwise

// 2. Explore concrete examples
// - validAnagram('anagram', 'nagaram') // true
// - validAnagram('', '') // true
// - validAnagram('awesome', 'awesom') // false
// - validAnagram('aaz', 'zza') // false

// 3. Break it down
// - Set two frequency counters object to track the frequency of a character in both strings
// - Loop through both of the input strings and set their value inside the counter objects
// - Loop through each key of either objects and build the logic that compares the frequency of characters
// - Set edge cases that returns false if certain conditions are not met
// - return true if all conditions are met

// 4. Solve/Simplify

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};
  for (const char of str1) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }
  for (const char of str2) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }
  for (const key in freqCounter1) {
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('awesome', 'awesom'));