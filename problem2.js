/*
  Given an array containing sub-array elements, write a function that will 
  flatten the nested arrays by the given depth.
  Bonus Exercise: Refactor the solution using recursion.
*/

// The only in-built array functions you are allowed to use are isArray(), push(), pop(), shift(), unshift(), slice(), reduce(), and concat()
// Hint: Focus first on writing a solution for reducing an array of depth 1 (e.g. arrayTwo) using concat()
function flatten(array, depth = 1){
  // Write your solution here
}


// Test Cases:
const arrayOne = [1, 2, [3, 4, [5, 6]]];
const arrayTwo = [1, 2, [3, 4]];
const arrayThree = [1, [[2,[[3]]]], [4, 5, [6]]];

const resultOne = flatten(arrayOne, 1);
const resultTwo = flatten(arrayOne, 1);
const resultThree = flatten(arrayThree, 4);

console.log(resultOne);  // Should equal: [1, 2, 3, 4, [5, 6]]
console.log(resultTwo);  // Should equal: [1, 2, 3, 4]
console.log(resultThree);  // Should equal: [1, 2, 3, 4, 5, 6]