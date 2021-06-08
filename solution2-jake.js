/*
                                    Script

  -----------------------------------------------------------------------------------------

  Introduce the problem.

  -----------------------------------------------------------------------------------------

  Questions/Hints:
    Trigger 1 - Version 1, step 3 outline
      (1) Do you know of any inbuilt methods that check if a value is an Array?
      (2) When you say pull and out and store, do you just mean you're going to loop through and push the elements into the new array?
    
    Trigger 2 - End of version 1, beginning of version 2 (recursive):
      (1) Have you used recursion before?
      (2) So, a common way to solve this problem is using recursion, could you refactor your current solution using recursion?
      (3) The inner for-loop you have written can actually be refactored using the reduce method.


  -----------------------------------------------------------------------------------------


  Outline of what Matt will cover:
   (1) Non-recursive version: 
        a. First we solve for a depth of 1 -
            Step 1: Initialize an empty array
            Step 2: Loop through the array that was passed and store each value in the new array
            Step 3: Before storing the value, check if the value is itself an array, if it is, 
            pull out the nested values and store those in new array 
        b. Repeat step (a) for as many depth levels
        
   (2) Recursion Version - 
        Step 1 (for base case of 1):
        return array.reduce((acc, val) => newArray.concat(val));

        Step 2: explain generic recursion model with examples

        Step 3: we can rewrite like this
        return array.reduce((acc, val) => {
          if(Array.isArray(val)) {
            return acc.concat(flatten2(val, depth - 1));
          } else {
            return acc.concat(val);
          }
        }, []);

        Step 4: we need a way to not drill all the way down, we need to stop
        the recursion when depth is = 0   => full solution with if blocks

*/



