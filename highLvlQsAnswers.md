# High Level JS/CSS/HTML Interview
- What are the 4 pillars of OOP? Can you explain them?
  - Abstraction: what allows code to display only relevant data and code to the task the user is trying to accomplish
  - Polymorphism: allows objects to have similar or same methods without confusion
  - Inheritence: allows objects and classes to inherit methods from their parents
  - Encapsulation: what allows objects to maintain a private state and hide data from other aspects of the code
  - https://www.freecodecamp.org/news/four-pillars-of-object-oriented-programming/

- What is the difference between null vs. undefined?
  - null is an object type
  - null must be assigned
  - undefined is assigned by default to variables without an explicit value

- What is the difference between var, const, and let?
  - var is function scope and hoisted with any values that are assigned to it initally
  - const is block scoped and cannot be updated or redeclared. However, object and array values can be updated so it should be avoided for those
  - let is block scoped and can be updated 

- Why do we put JS scripts at the top vs. bottom of HTML?
  - to avoid any errors that might come from HTML not being rendered while JS tries to run and to improve response and load time 

- What is the difference between =, ==, and ===?
  - = is an assignment operator ex: x = 5
  - == is a comparison operator that coerces types/compares without types in mind ex: "1" == 1 // true
  - === is a comparison operator that does not coerce types/compares with types in mind ex: "1" === 1 // false

- What is passed by value vs. passed by reference?
  - Primitive values are passed by value - makes a copy of value and assigns it to variable
  - Objects are passed by reference - simply stores a reference (in memory) to the original value

- What is the difference between display none and display invisible?
  - display none will not take up space in the DOM and all elements will pretend it's not there
  - display invisible will still take up space in the DOM, but will not be seen

- Get vs. Post? What is something a post has that a get doesn’t?
  - get requests ask for data from a source and receive it
  - post requests send data to a DB 
  - post requests have a body that stores data to be sent

- Explain inline, inline-block and block positioning?
  - inline: The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height
  - inline-block: It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values.
  block: The element will start on a new line and occupy the full width available. And you can set width and height values.

- CRUD operations in nodeJS?
  - Create, Read, Update, Delete
  - Post, Get, Update, Delete

- What does REST API stand for?
  - REST - Representational state transfer
  - API - Application programming interface

- Why would we want an async/await function?
  - if we're fetching data from an internal or external source and it takes time, we want to make sure the function waits for the data to come back before continuing the rest of the code
- What is hoisting?
  - hoisting is when JS registers variables before executing code 
  - var is hoisted (the variable will be declared and set equal to undefined)
  - function declarations will also be hoisted
  - let and const will not be hoisted, meaning they will not be initialized before code runs

- What is a function declaration vs. function expression?
  - declaration: function doStuff() {return stuff}
  - expression: let stuff = function doStuff() {return stuff}

- What is closure?
  - closure is when a function has access to variables that are outside of its scope
  - often used with an outer function and an inner function where the inner function has access to variables in the outerscope even after the outer function has been called
  - function makeAdder(x) {
      return function(y) {
        return x + y;
      };
    }

    var add5 = makeAdder(5);
    var add10 = makeAdder(10);

    console.log(add5(2));  // 7
    console.log(add10(2)); // 12
  - https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36