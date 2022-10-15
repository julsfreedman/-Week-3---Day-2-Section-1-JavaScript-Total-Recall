// /*I. Variables & Datatypes
// To answer these questions, you can add them in a multiline comment section inside of script.js
// like this:

// A. Q + A

// 1. How do we assign a value to a variable?
//     A. With the assignment operator
// 2. How do we change the value of a variable?
//     A. use "var" or "let" instead of const and then = (equal sign) then write what you want to change.
// 3. How do we assign an existing variable to a new variable?
//     A. You can assign the value of that variable to another variable using the assignment operator.
// 4. Remind me, what are declare, assign, and define?
//     A. They are all 3 types of statements. A statement does NOT return anyting (unlike an expression which returns something).
//         DECLARE is creating a variable in JavaScript. It sets the value of the variable using var, let, and const keywords. To store a value, you first have to declare a variable. This statement is a declaration, because it declares that the variable named message (message for example) has the type String (string for example). Always declare JavaScript variables with var,let, or const.The var keyword is used in all JavaScript code from 1995 to 2015. The let and const keywords were added to JavaScript in 2015. If you want your code to run in older browsers, you must use var. If you want a general rule: always declare variables with const. If you think the value of the variable can change, use let.
//         ASSIGN you can define a property by assigning it a value.
//         DEFINE a JavaScript function is defined with the function keyword, followed by a name, followed by parentheses (). You can reuse code: DEFINE the code once, and use it many times.
// 5. What is pseudocoding and why should you do it?
//     A. Pseudocoding is explaining in normal written English the solution step by step. There is no correct way to write it. It is the first step in planning your logic for the program you are writing or the problem you are solving. It is intended for human reading rather than machine reading.
//     What are the rules of pseudocode?
//         1. Write one statement per line.
//         2. Capitalize initial keywords (READ,     WRITE, IF, WHILE, UNTIL).
//         3. Indent to show hierarchy.
//         4. End multiline structure.
//         5. Keep statements language.
// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//     A. 75%

// B. Strings

// For all other questions that involve writing code, you can solve them via the following instructions.

// 1. Create a variable called firstVariable */

// let firstVariable = "";

// //2. Assign it the value of the string "Hello World"

// firstVariable = "Hello World";

// //3. Change the value of this variable to some number

// firstVariable = 5;

// console.log(firstVariable); // terminal prints 5

// //4. Store the value of firstVariable in a new variable called secondVariable

// secondVariable = firstVariable;

// //5. Change the value of secondVariable to any string.

// secondVariable = "five";
// console.log(secondVariable);

// //6. What is the value of firstVariable? should be 5 still

// console.log(firstVariable); // terminal prints 5

// //7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them CONCATENATED.
// // ex: Hello, my name is Jean Valjean

// let yourName = "Julia";
// console.log("Hello, my name is " + yourName);

// // C. Booleans
// // Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = "Kevin";

// console.log(a !== b);
// console.log(c !== d);
// console.log("Name" === "Name");
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log((false && false && false && false && false) || true);
// console.log(false === false);
// console.log(e === "Kevin");
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 !== "48");
// //or console.log(48 == "48"); works too

// /* D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit */

// let animal = "";
// animal = "cow";

// if (animal === "cow") {
//   console.log("mooooo");
// }

// if (animal !== "cow") {
//   console.log("Hey! You're not a cow.");
// }

// /* E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young." */

// let age = 21;

// if (age >= 16) {
//   console.log("Here are the keys!");
// } else {
//   console.log("Sorry, you're too young.");
// }

// /* II. Loops
// Remember: USE let when you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive */

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// console.log("___");
// /* 2. Write a loop that will print out all the numbers from 10 up to and including 400*/

// // for (let i = 10; i <= 400; i++) {
// //   console.log(i);
// // }
// /* 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000 */

// // for (let i = 12; i < 4000; i += 3) {
// //  console.log(i);
// //}

// /* B. Get even
// Print out the numbers that are within the range of 1 - 100 */

// // for (let i = 1; i <= 100; i++) {
// //   console.log(i);
// // }

// /*
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number" */

// // for (let i = 1; i <= 100; i++) {
// //   if (i % 2 === 0) {
// //     console.log(`${i} is an even number`);
// //   } else {
// //     console.log(i);
// //   }
// // }

// /* C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:
// I found a 5. High five!
// I found a 10. High five! */
// /*Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!*/

// // for (let i = 0; i <= 100; i++) {
// //   if (i % 5 == 0 && i % 3 == 0) {
// //     console.log(`I found a ${i}. High five! I found a ${i}. Three is a crowd`);
// //   } else if (i % 5 === 0) {
// //     console.log(`I found a ${i}. High five!`);
// //   } else if (i % 3 === 0) {
// //     console.log(`I found a ${i}. Three is a crowd`);
// //   } else {
// //     console.log(i);
// //   }
// // }

// /* D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account. Check your work! Your bank_account should have $55 in it.*/

// // let bank_account = 0;
// // for (let i = 1; i <= 10; i++) {
// //   bank_account += i;
// // }
// // console.log(bank_account);

// // You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2. Check your work! Your bank_account should have $10,100 in it.

// let bank_account = 0;
// for (let i = 1; i <= 100; i++) {
//   bank_account += i;
// }
// console.log(bank_account * 2);

/* III. Arrays & Control flow

A. Talk about it:
What are the things in an array called?
  A. elements and indices
Do Arrays guarantee those things will be in order?
  A. yes, which is why they are iterable. (unlike objects in JavaScript)
What real-life thing could you model with an array?
  A. a Rubik's cube
  
B. Easy Does It
Create an array that contains three quotes and store it in a variable called quotes */

// let quotes = [
//   "Life's a garden, you gotta dig it!",
//   "To sin by silence when thy shalt protest makes cowards out of men",
//   "They have money for war but can't feed the poor.",
// ];

// console.log(quotes[2])

// C. Accessing elements
// Given the following array
const randomThings = [1, 10, "Hello", true];
// How do you access the 1st element in the array?
console.log(randomThings[0]);
// Change the value of "Hello"to "World"
randomThings[2] = "World";
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings[2]);

// D. Change values
// Given the following array
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
//What would you write to access the 3rd element of the array?
console.log(ourClass[2]);
//Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
console.log(ourClass);
//Add a new element, "Cloud City" to the array
ourClass.push("Cloudy City");
console.log(ourClass);

/* E. Mix It Up
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
Given the following array:*/
const myArray = [5, 10, 500, 20];
// 1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Joffrey");
console.log(myArray);
//2. Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);
//3. Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);
//4. Remove the string of your choice from the end of the array.
// myArray.pop();
// console.log(myArray);
//5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
// myArray.reverse();
// console.log(myArray);
//answer to #5 - Yes I mutated the array because I reversed the order of the elements in the array.  Mutate means to modify the original array.  Yes, the reverse()method returns  the REFERANCE to the same array with the elements transposed (so,mutating the returned array WILL mutate the original array as well). The array is reversed in place and NO copy is made. AKA destructive array method. https://doesitmutate.xyz/

//F. Biggie Smalls
//Create a variable that contains an integer.

//Write an if ... elsestatement that:
//console.log()s "little number" if the number is entered is less than 100
//console.log()s big number if the number is greater than or equal to 100.

// let int = 100;

// if (int < 100) {
//   console.log("little number");
// } else {
//   console.log("big number");
// }

// G. Monkey in the Middle
// Write an if ... else if ... else statement:
// console.log()little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

// let num = 6;
// if (num < 5) {
//   console.log("little number");
// } else if (num > 10) {
//   console.log("big number");
// } else {
//   console.log("monkey");
// }

/* H. What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.*/

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

//1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

//2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

//3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

//4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

console.log(thomsCloset[0][0]);

//5. In the same way, access one item from Thom's pants array.

console.log(thomsCloset[1][2]);

//6. Access one item from Thom's accessories array.

console.log(thomsCloset[2][1]);

//7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log(
  `Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][1]}!`
);

//8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1]);

// IV. Functions

// A. n/a

// B. printCool
// Write a function printCool that accepts one parameter, name, as an argument. The function should print the name and a message saying that that person is cool.
// console.log(printCool("Captain Reynolds"))
//  => "Captain Reynolds is cool";

// As a function expression:

// let printCool = function (name) {
//   return `${name} is cool`;
// };
// console.log(printCool("Captain Reynolds"));

// // As a function declaration:

// function printCool2(name) {
//   return `${name} is cool`;
// }
// console.log(printCool2("Captain Reynolds"));

/* C. calculateCube
Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
console.log(calculateCube(5));
=> 125*/

// function calculateCube(x) {
//   return x * x * x;
// }
// console.log(calculateCube(5));

/* D. isVowel
Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
console.log(isVowel("a"));
=> true*/

// function isVowel(x) {
//   if (
//     x == "a" ||
//     x == "e" ||
//     x == "i" ||
//     x == "o" ||
//     x == "u" ||
//     x == "A" ||
//     x == "E" ||
//     x == "I" ||
//     x == "O" ||
//     x == "U"
//   ) {
//     return "True";
//   } else {
//     return "False";
//   }
// }
// console.log(isVowel("Y"));

/* E. getTwoLengths
Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
console.log(getTwoLengths("Hank", "Hippopopalous"));
=> [4, 13] */

// function getTwoLengths(x, y) {
//   return [x.length, y.length];
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"));

/*F. getMultipleLengths
Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
=> [5, 4, 2, 2, 4] */

// function getMultipleLengths(arrayOfStrings) {
//   let arrayOfNumbers = [];
//   for (let i = 0; i < arrayOfStrings.length; i++) {
//     arrayOfNumbers.push(arrayOfStrings[i].length);
//   }
//   return arrayOfNumbers;
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

/* G. maxOfThree
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
console.log(maxOfThree(6, 9, 1));
=> 9
Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().*/

// function maxOfThree(a, b, c) {
//   if ((a > b && a > c) || (a === b && a > c)) {
//     console.log(a);
//   } else if ((b > a && b > c) || (b === c && b > a)) {
//     console.log(b);
//   } else if ((c > a && c > b) || (c === a && c > b)) {
//     console.log(c);
//   } else if (a === b && a === b) {
//     console.log(a);
//   }
// }
// console.log(maxOfThree(6, 9, 1));
// console.log(maxOfThree(25, 109, 567));
// console.log(maxOfThree(4, 4, 3));
// HELP: The terminal is printing the correct answer but it is also printing "undefined" after each answer.  WHY?

/* H. printLongestWord
Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
=> "Peanutbutter"*/

function printLongestWord(arrayOfStrings) {
  let longestWord = arrayOfStrings[0];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length > longestWord.length) {
      longestWord = arrayOfStrings[i];
    }
    return longestWord;
  }
}
console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);

/* Objects
Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.
A. Make a user object
Create an object called user.
Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.*/

const user = {
  name: "Barb",
  age: 76,
  email: "barb@yahoo.com",
  purchased: [],
};

// //B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.

user.email = "barb@gmail.com";

// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

user.age++;
console.log(user);

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).

user.location = "Santa Barbara";
console.log(user);

/*D. Shopaholic!
Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
Console.log just the "Merino jodhpurs" from the purchasedarray.*/

user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friendwith a nameand age, we could write:
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friendobject added to our user object.
// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
  name: "Ann",
  age: 75,
  location: "Cincinnati",
  purchased: [],
};

// Console.log just the friend's name
console.log(user.friend.name);
// Console.log just the friend's location
console.log(user.friend.location);
// CHANGE the friend's age to 55
user.friend.age = "55";
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring");
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte");
// Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1]);

/*F. Loops
Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console. */

for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}
//Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.

for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}

/* G. Functions can operate on objects
Write a single function updateUser that takes no parameters. When the function is run, it should:
it should increment the user's age by 1
make the user's name uppercase
The function does not need a return statement, it will merely modify the user object.
Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument. */

function updateUser() {
  user.age++;
  user.name = user.name.toUpperCase();
}

console.log(user.name);
console.log(user.age);

let person = user;
function oldAndLoud(person) {
  person.age++;
  person.name = person.name.toUpperCase();
}
oldAndLoud(user);
console.log(person);
