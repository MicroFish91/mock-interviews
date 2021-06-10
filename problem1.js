// Palindrome Permutation checker
// Given a string, write a function named paliPerm to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation represents any of several possible rearrangement of the letters. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters.

// Meaning - can the string you've been given be rearranged to become a palindrome?

// Example:
// Tact Coa
// True (permutations: 'taco cat', 'atco cta')

function paliPerm(word){
  // Write your solution here
}

// Test Cases:
console.log(paliPerm('Tact Coa'));  // Should return true
console.log(paliPerm('eracrac'));  // Should return true
console.log(paliPerm('gadsgass')); // Should return false

// Hint #1: Think about the structure of a palindrome - how many of each letter are required to make a palindrome?

// Hint #2: A palindrome must consist of all even amounts of characters and at most 1 charater can have an odd count