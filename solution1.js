// Palindrome Permutation checker

function paliPerm(string){
  const newString = string.toLowerCase();
  let oddCount = 0;
  let hash = {};
  for (const letter of newString) {
    if (letter === ' ') {
      continue;
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

// Test Cases:
console.log(paliPerm('Tact Coa'));  // Should return true
console.log(paliPerm('eracrac'));  // Should return true
console.log(paliPerm('gadsgass')); // Should return false
