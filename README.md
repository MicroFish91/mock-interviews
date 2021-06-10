# Coding Mock-Interview
Welcome to the whiteboarding mock interview demo, brought to you by Jake Luecke and Matthew Fisher. <br>
Today we will be going over 2 coding problems of varying difficulty.  You will be given a prompt and <br>
some time to review the problem and attempt to come up with your own solution.  After the allotted time <br>
your TAs will then go over the problem in a 1 on 1 interview style.  At the very end we will go over a list <br>
of general/miscellaneous questions that may come up during your interviews.  Please feel free to ask questions <br>
as necessary. <br> <br>

## Whiteboarding - General Recommendations
1. Reconfirm/restate the question or problem
2. Take time to understand the problem and re-confirm understanding by writing down some examples
3. Ask plenty of clarifying questions
4. Outline your general throught process before you begin coding
5. Explain high-level concepts/algorithmic patterns as you go - don't assume your interviewer knows what you are thinking; code out-loud
6. If you are stuck or unsure where to go next, your interviewer may be willing to help you out or give you hints (not your first resort) 

<br>

## Problem 1
Palindrome Permutation checker
Given a string, write a function named paliPerm to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters.

Meaning, can the string you've been given be rearranged to become a palindrome?

Example:
Tact Coa
True (permutations: 'taco cat', 'atco cta')

Hint #1: Think about the structure of a palindrome - how many of each letter are required to make a palindrome?

Hint #2: A palindrome must consist of all even amounts of characters and at most 1 charater can have an odd count

Test Cases:

Test #1:
paliPerm('Tact Coa')
should return true

Test #2:
paliPerm('eracrac')
should return true

Test #3
paliPerm('gadsgass')
should return false

## Problem 2
Given an array containing sub-array elements, write a function that will flatten the nested arrays by the given depth. <br> 
The only in-built array functions you are allowed to use are isArray(), push(), pop(), shift(), unshift(), slice(), reduce(), and concat() <br>
Please work through your solution in the provided "problem2.js" file.  Additional hints are provided there. <br> <br>
You will have 15 min to think over the problem before the TA's begin to go over the solution. <br> <br>

** Bonus Exercise: Refactor the solution using recursion. **

## High Level JS/CSS/HTML Interview Topics
- What are the 4 pillars of OOP? Can you explain them?
- What is the difference between null and undefined?
- What is the difference between var, let, and const?
- Where do we place JS Scripts in our HTML?
- What is the difference between =, ==, and ===?
- What is passing by value vs. passing by reference?
- What is the difference between display: none and display: invisible?
- Get vs. Post? What is something a post has that a get doesn’t?
- Explain inline, inline-block, and block positioning?
- CRUD operations in nodeJS?
- What does REST API stand for?
- How are we able to bundle useful code when events are thrown off asychronously?
- What are promises and why are they useful?
- Why would we want an async function?
- What is hoisting?
- What is closure?
- What does it mean when people say "NodeJS is an event-driven non-blocking runtime environment"
- What is middleware?
- What is an ORM?
- SQL vs NoSQL
- Describe the basic MVC architecture pattern
- Desribe AJAX and how it works