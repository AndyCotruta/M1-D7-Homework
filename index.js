/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */

console.log("EXERCISE 1");
console.log("\nMain data types in JavaScript are:");
console.log(
  "Boolean type (true or false): default value is false and they evaluate the logical condition of a variable."
);
console.log(
  "Null type: is the value assigned to a variable in order to empty the content of it."
);
console.log(
  "Undefined type: is the default value assigned to a variable before declaring any value to it."
);
console.log(
  "Numeric type: used to define numbers as variable. Can be integers, decimal numbers etc."
);
console.log("String type: used to define letters or words as a variable.");

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEXERCISE 2");
console.log("\nDescribe what a variable is:");
console.log("A variable is a container used to store different types of data");

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEXERCISE 3");
console.log(
  "Write the code to execute an addition (a sum) of the numbers 12 and 20."
);
let sum = 12 + 20;
console.log("The sum is: " + sum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEXERCISE 4");
console.log("Create a variable named x and assign to it the number 12.");
let x = 12;
console.log(x);

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEXERCISE 5");
console.log(
  "Create a variable called name and assign to it the string John Doe"
);
let name = "John Doe";
console.log("My name is " + name);

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEXERCISE 6");
console.log(
  "Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12)."
);
let subtraction = x - 12;
console.log(subtraction);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 7");
console.log(
  "Create two variables: name1 and name2. Assign to name1 the string john, and to name2 the string John this one has a capital J.Verify that name1 is different from name2 HINT: check their equality to be false.Finally, verify that the equality between name1 and name2 becomes true if both are lowercase without changing the value of name2."
);
let name1 = "john";
let name2 = "John";
let differentName = name1 === name2;
let differentName2 = name1 === name2.toLowerCase();
console.log("Names are different is: " + differentName);
console.log("Names are different is: " + differentName2 + " if lowercase");
/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 8");
console.log(
  "Create a variable named x, and assign to it a numeric value less than 10.Write the code to print the literal value of x (ex.: if x is 1, it should print one, if x is 5 it should print five etc.)"
);
let y = 9;
if (y === 0) {
  console.log("zero");
} else if (y === 1) {
  console.log("one");
} else if (y === 2) {
  console.log("two");
} else if (y === 3) {
  console.log("three");
} else if (y === 4) {
  console.log("four");
} else if (y === 5) {
  console.log("five");
} else if (y === 6) {
  console.log("six");
} else if (y === 7) {
  console.log("seven");
} else if (y === 8) {
  console.log("eight");
} else if (y === 9) {
  console.log("nine");
} else {
  console.log("Please choose a positive number smaller than 10!");
}
/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 9");
console.log(
  "Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,\ntry to search it by yourself, tomorrow morning we'll discuss it together!)"
);
let age = 23;
let beverageAllowed = age >= 18 ? "Beer" : "Juice";
console.log("You are allowed to drink " + beverageAllowed);
