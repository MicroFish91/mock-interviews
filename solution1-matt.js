/*
                                    Script
  -----------------------------------------------------------------------------------------
  Introduce the problem.
  -----------------------------------------------------------------------------------------
  Questions/Hints:
    Hint #1: Think about the structure of a palindrome - how many of each letter are required to make a palindrome?

    Hint #2: When you say hash table, what do you mean?

    Hint #3: how might you get rid of the second for loop?
  -----------------------------------------------------------------------------------------
  Outline of what Jake will cover:
   (1)
    a. will introduce the hashtable 
    b. describe logic of palindromes
    c. describe for of loop
    d. talk about continue key word and what that means
    e. discuss second for loop and how it's checking
  (2)
    a. discuss how to perform the check in the same for loop
    b. introduce oddCount variable in top of function
    c. describe how the count check works and return statement
  -----------------------------------------------------------------------------------------
  Raw Solution: 
  Version 1:                                                                             */
  
  const paliPerm = (string) => {
    // converting string to lowercase 
    const newString = string.toLowerCase();
    // setting up my hashtable
    let hash = {};
    // looping throgh - ignoring spaces and updating hash table on each letter
    for (const letter of newString) {
      if (letter === ' ') {
        continue;
      } else if (letter in hash) {
        hash[letter] += 1;
      } else {
        hash[letter] = 1;
      }
    }
    // initializing oddCount variable to track number of letters with odd count
    let oddCount = 0;
    // setting up an array that stores all of the keys to my hash table so i can iterate through it
    let keys = Object.keys(hash);
    // iterating through hash table checking each key:value pair (mainly the value) to see if it is odd. If it is odd I add 1 to odd count and then check if odd count is greater than 1 and if so I immediately return false
    for (let i = 0; i < keys.length; i++) {
      // is the value stored at this index divisible by 2/even? if not, add one to the odd counter
      if (hash[keys[i]] % 2 !== 0) {
        oddCount++
      }
      if (oddCount > 1) {
        return false
      }
    }
    // if we have gotten to this point than it must be true
    return true;
  }


  //Version 2: 

  const paliPerm2 = (string) => {
    // converting string to lowercase 
    const newString = string.toLowerCase();
    let oddCount = 0;
    // setting up my hashtable
    let hash = {};
    // looping throgh - ignoring spaces and updating hash table on each letter
    for (const letter of newString) {
      if (letter === ' ') {
        continue
      } else if (letter in hash) {
        hash[letter] += 1;
      } else {
        hash[letter] = 1;
      }
      if (hash[letter] % 2 !== 0) {
        oddCount++;
      } else {
        oddCount--;
      }
    }
    return oddCount <= 1;
  }