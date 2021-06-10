# High Level JS/CSS/HTML Interview
- What are the 4 pillars of OOP? Can you explain them?
  - Abstraction: what allows code to display only relevant data and code to the task the user is trying to accomplish.  

      Data abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation. In engineering we think of this as interfacing with a black box system.

  - Polymorphism: allows objects to have similar or same methods without confusion

      Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance.
      Any object that can pass more than one IS-A test is considered to be polymorphic.

  - Inheritence: allows objects and classes to inherit methods from their parents

  - Encapsulation: what allows objects to maintain a private state and hide data from other aspects of the code

      Encapsulation is accomplished when each object maintains a private state, inside a class. Other objects can not access this state directly, instead, they can only invoke a list of public functions. The object manages its own state via these functions and no other class can alter it unless explicitly allowed.

  - https://www.freecodecamp.org/news/four-pillars-of-object-oriented-programming/

- What is the difference between null vs. undefined?
  - The value null represents the *intentional/defined* absence of any object value
  - null is an object type
  - null must be assigned (defined)
  - undefined is assigned by default to variables without an explicit value

- What is the difference between var, const, and let?
  - var is function scope and hoisted with any values that are assigned to it initally
  - const is block scoped and cannot be updated or redeclared. However, object and array values can be updated so it should be avoided for those
  - let is block scoped and can be updated 

  ```javascript
  var i = 10;

  for (let i = 0; i < 5; i++) {
      //some stuff
  }

  // With the for loop i set to var, we get 5
  // With the for loop i set to let, we get 10
  console.log(i);  
  ```

- Where do we place JS Scripts in our HTML?
  - In most cases we add the JS scripts to the bottom of our body tag so that the JS can act on rendered DOM elements.  JS cannot properly act on elements that have not yet been rendered

- What is the difference between =, ==, and ===?
  - = is an assignment operator ex: x = 5
  - == is a comparison operator that coerces types/compares without types in mind ex: "1" == 1 // true
  - === is a comparison operator that does not coerce types/compares with types in mind ex: "1" === 1 // false

- What is passing by value vs. passing by reference?
  - Primitive values are passed by value - makes a copy of value and assigns it to variable
  - Objects and arrays are passed by reference - simply stores a reference (in memory) to the original value

- What is the difference between display none and display invisible?
  - display none will not take up space in the DOM and all elements will pretend it's not there
  - display invisible will still take up space in the DOM, but will not be seen

- Get vs. Post? What is something a post has that a get doesn’t?
  - get requests ask for data from a source and receive it
  - post requests send data to a DB 
  - post requests have a body that stores data to be sent

- Explain inline, inline-block, and block positioning?
  - inline: The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height
  - inline-block: It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values.
  block: The element will start on a new line and occupy the full width available. And you can set width and height values.

- CRUD operations in nodeJS?
  - Create, Read, Update, Delete
  - Post, Get, Update, Delete

- What does REST API stand for?
  - REST - Representational state transfer
  - API - Application programming interface

      https://restfulapi.net/

- How are we able to bundle useful code when events are thrown off asychronously?
  - Through the use of Promises and Callbacks

- What are promises and why are they useful?
  - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.  This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

- Why would we want an async/await function?
  - if we're fetching data from an internal or external source and it takes time, we want to make sure the function waits for the data to come back before continuing the rest of the code
  - async await is a much cleaner way to deal with promises to avoid callback hell; however, it can end up running more slowly if you are nesting multiple promises in an async function that are not necessarily dependent upon one another

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
  - Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.
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

  - What does it mean when people say "NodeJS is an event-driven non-blocking runtime environment"
    - To allow us to process and serve data more efficiently, Node employs an event-driven architecture.  The JS run-time recognizes key async functionality that it can hand off through internal API to its C++ counterpart as discrete events.  When the key event is fulfilled, the task is finished up through the use of callbacks and promises.  This way, we can process these async events efficiently as the data comes in rather than waiting and blocking the main thread.

  - What is middleware?
    - Middleware literally means any chunk of code you nest between one layer of the software and another.  Express pipeline .use() is a common example of this.

  - What is an ORM?
    - Stands for object relational mapping. ORM is a technique that lets you query and manipulate data from a database using an object-oriented paradigm.  An ORM library is a completely ordinary library written in your language of choice that encapsulates the code needed to manipulate the data, so you don't use SQL anymore; you interact directly with an object in the same language you're using.

  - SQL vs NoSQL
    -  https://www.xplenty.com/blog/the-sql-vs-nosql-difference/

  - Describe the basic MVC architecture pattern
    - Model–view–controller (usually known as MVC) is a software design pattern[1] commonly used for developing user interfaces that divides the related program logic into three interconnected elements. 
      - Model: The model is responsible for managing the data of the application. It receives user input from the controller.
      - View: The view renders presentation of the model in a particular format.
      - Controller: The controller responds to the user input and performs interactions on the data model objects. The controller receives the input, optionally validates it and then passes the input to the model.

  - Desribe AJAX and how it works
    - AJAX = Asynchronous JavaScript and XML. AJAX is a technique for creating fast and dynamic web pages. AJAX allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.