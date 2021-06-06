/*
  Given an array containing sub-array elements, write a function that will 
  flatten the nested arrays by the given depth.
*/

// The only in-built array functions you are allowed to use are isArray(), push(), pop(), shift(), unshift(), slice(), reduce(), and concat()
// Hint: Focus first on writing a solution for reducing an array of depth 1 (e.g. arrayTwo) using concat()
function flatten(array, depth = 1){
  // Write your solution here

  // [1, 2, [3, 4]]
  // First we solve for a depth of 1 -
  // Step 1: Initialize an empty array
  // Step 2: Loop through the array that was passed and store each value in the new array
  // Step 3: Before storing the value, check if the value is itself an array, if it is, 
  // pull out the nested values and store those in new array

  // PQ: After step 3, ask if there is an easy way to check if a value is an array.

  // Step 4: Repeat Steps 1-3 for n = depth

  let newArray = [];

  for(let depthCounter = 0; depthCounter < depth; depthCounter++){
    for(let index = 0; index < array.length; index++){
      if(Array.isArray(array[index])) {
        newArray = newArray.concat(array[index]);
      } else {
        newArray.push(array[index]);
      }
    }
    array = newArray;
    newArray = [];
  }

  return array;
}

// Recursive Version
function flatten2(array, depth = 1){
  // Write your solution here

  // PH: The inner for-loop you wrote can be equivalently written using a reduce method
  // [1, 2, [3, 4, [5, 6]]]
  if(depth > 0){
    return array.reduce((acc, val) => {
      if(Array.isArray(val)) {
        return acc.concat(flatten2(val, depth - 1));
      } else {
        return acc.concat(val);
      }
    }, []);
  } else {
    return array.slice();
  }

  // (1) First Explain
  // Recursion: Factorial
  // 4! = 4 * 3 * 2 * 1

  // Recursion Pattern
  // 4! = 4 * 3!
  // 3! = 3 * 2!
  // 2! = 2 * 1!

  // Simplifies to:
  // n! = n * (n-1)!
  // factorial(n) => n * factorial(n-1)

  // flatten(4)
  // Instead of running once, we want it to run again each time we encounter an array
  // flatten(4) = array.reduce((acc[4], val) => acc.concat(val) || acc[3].reduce(), []);
  // flatten(3) = array.reduce((acc[3], val) => acc.concat(val) || acc[2].reduce(), []);
  // flatten(2) = array.reduce((acc[2], val) => acc.concat(val) || acc[1].reduce(), []);
  // flatten(1) = array.reduce((acc[1], val) => acc.concat(val) || acc[0].reduce(), []);
}


// Test Cases:
const arrayOne = [1, 2, [3, 4, [5, 6]]];
const arrayTwo = [1, 2, [3, 4]];
const arrayThree = [1, [[2,[[3]]]], [4, 5, [6]]];

const resultOne = flatten2(arrayOne, 1);
const resultTwo = flatten2(arrayTwo, 1);
const resultThree = flatten2(arrayThree, 4);

console.log(resultOne);  // Should equal: [1, 2, 3, 4, [5, 6]]
console.log(resultTwo);  // Should equal: [1, 2, 3, 4]
console.log(resultThree);  // Should equal: [1, 2, 3, 4, 5, 6]





// Recursion Process - 
// Step 1 (for base case of 1):
// return array.reduce((acc, val) => newArray.concat(val));

// Step 2: explain recursion model

// Step 3: we can rewrite like this
// return array.reduce((acc, val) => {
//   if(Array.isArray(val)) {
//     return acc.concat(flatten2(val, depth - 1));
//   } else {
//     return acc.concat(val);
//   }
// }, []);

// Step 4: we need a way to not drill all the way down, we need to stop
// the recursion when depth is = 0