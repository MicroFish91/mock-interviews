/*
  Given an array containing sub-array elements, write a function that will 
  flatten the nested arrays by the given depth.
  Bonus Exercise: Refactor the solution using recursion.
*/

// Version 1 - Solution without recursion:
function flatten(array, depth = 1){
  let newArray = [];
  for(let depthCounter = 0; depthCounter < depth; depthCounter++){
    for(let index = 0; index < array.length; index++){
      newArray = newArray.concat(array[index]);
    }
    array = newArray;
    newArray = [];
  }
  return array;
}

// Version 2 - Solution with recursion
function flatten2(array, depth = 1){
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