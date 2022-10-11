/*I. Variables & Datatypes
To answer these questions, you can add them in a multiline comment section inside of script.js
like this:

A. Q + A

1. How do we assign a value to a variable? 
    A. With the assignment operator
2. How do we change the value of a variable?
    A. use "var" or "let" instead of const and then = (equal sign) then write what you want to change.
3. How do we assign an existing variable to a new variable?
    A. You can assign the value of that variable to another variable using the assignment operator.
4. Remind me, what are declare, assign, and define?
    A. statements
        DECLARE is creating a variable in JavaScript. It sets the value of the variable using var, let, and const keywords. To store a value, you first have to declare a variable. This statement is a declaration, because it declares that the variable named message (message for example) has the type String (string for example). Always declare JavaScript variables with var,let, or const.The var keyword is used in all JavaScript code from 1995 to 2015. The let and const keywords were added to JavaScript in 2015. If you want your code to run in older browsers, you must use var. If you want a general rule: always declare variables with const. If you think the value of the variable can change, use let.
        ASSIGN you can define a property by assigning it a value.
        DEFINE a JavaScript function is defined with the function keyword, followed by a name, followed by parentheses (). You can reuse code: DEFINE the code once, and use it many times.
5. What is pseudocoding and why should you do it?
    A. Pseudocoding is explaining in normal written English the solution step by step. There is no correct way to write it. It is the first step in planning your logic for the program you are writing or the problem you are solving. It is intended for human reading rather than machine reading.
    What are the rules of pseudocode?
        1. Write one statement per line.
        2. Capitalize initial keywords (READ,     WRITE, IF, WHILE, UNTIL).
        3. Indent to show hierarchy.
        4. End multiline structure.
        5. Keep statements language.
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    A. 75%

B. Strings

For all other questions that involve writing code, you can solve them via the following instructions.

1. Create a variable called firstVariable */

let firstVariable = "";

//2. Assign it the value of the string "Hello World"

firstVariable = "Hello World";

//3. Change the value of this variable to some number

firstVariable = 5;

console.log(firstVariable); // terminal prints 5

//4. Store the value of firstVariable in a new variable called secondVariable

secondVariable = firstVariable;

//5. Change the value of secondVariable to any string.

secondVariable = "five";
console.log(secondVariable);

//6. What is the value of firstVariable? should be 5 still

console.log(firstVariable); // terminal prints 5

//7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them CONCATENATED.
// ex: Hello, my name is Jean Valjean

let yourName = "Julia";
console.log("Hello, my name is " + yourName);

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a !== b);
console.log(c !== d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== "48");
//or console.log(48 == "48"); works too

/* D. The farm
Declare a variable animal. Set it to be either "cow" or something else
Write code that will print out "mooooo" if the it is equal to cow
Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
Commit */

let animal = "";
animal = "cow";

if (animal === "cow") {
  console.log("mooooo");
}

if (animal !== "cow") {
  console.log("Hey! You're not a cow.");
}
