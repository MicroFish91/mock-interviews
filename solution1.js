const paliPerm = (string) => {
  // converting string to lowercase 
  const newString = string.toLowerCase();
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

// solution #2

function paliPerm2(string) {
  // lowercasing string
  let str = string.toLowerCase();
  // setting up array to track values
  let arr =[];
  for (let i = 0; i < str.length; i++) {
    // doing this for readability - setting up variable for the charCode of whatever letter we're iterating over
    let currCharCode = str.charCodeAt(i);
    // if char is equal to a space, ignore it
    if (str[i] === ' ') {
      null
      // if the position in the array located at the index equal to the charCode of the letter we're iterating over already exists, add 1
    } else if (arr[currCharCode]) {
      arr[currCharCode]++;
    } else {
      // otherwise set it equal to 1
      arr[currCharCode] = 1;
    }
  }
  // setting my odd counter
  let odd = 0;
  // notice how i'm iterating over the string length and not the array
  // this is so that I only loop through as many times as I need
  // the array has a lot of empty slots due to placing values at charCode indices instead of all in a row in the array
  // ex: our array might look like this [1, 2, null, null, null, null, null, 4, 4]
  // we don't want to iterate over those null values and instead want to get straight to where we have information stored
  for (let j = 0; j < str.length; j++) {
    // if char is equal to a space, ignore it
    if (str[j] === ' ') {
      null
      // is the value stored at this index divisible by 2/even? if not, add one to the odd counter
    } else if (arr[str.charCodeAt(j)] % 2 !== 0) {
      odd++
    }
    // early return if the oddCounter goes past 1 as that defies the logic of this algorithm 
    if (odd > 1) {
      return false
    }
  }
  // if we're here, it's true
  return true
}


const paliPerm3 = (string) => {
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


// Test #1:
console.log(paliPerm('Tact Coa'))
// should return true

// Test #2:
console.log(paliPerm('eracrac'))
// should return true

// Test #3
console.log(paliPerm('gadsgass'))
// should return false