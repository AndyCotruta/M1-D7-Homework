// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 1");
console.log(
  "Use a ternary operator to assign to a variable called gender the string values male or female.\nThe choice should be made based on the value of another variable called isMale."
);
let isMale = false;
let gender = isMale === true ? "male" : "female";
console.log("Your gender is " + gender);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 2");
console.log(
  "Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8."
);
let x = 7;
let k = 4;
let condition = x - k === 12 || k + y === 12 || x === 8 || k === 8;
console.log("The condition is: " + condition);

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 3");
console.log(
  "Create a variable and assign to it the concatenation of two strings."
);
let string1 = "Concatenated";
let string2 = "String";
let string3 = string1 + string2;
console.log("This is a " + string3);
/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 4");
console.log(
  "Create three variables and assign a numerical value to each one of them.\nUsing a conditional statement, write a piece of code for sorting their values from highest to lowest.\nDisplay the result in the console."
);
let a = 6;
let b = 3;
let c = 9;
if (a > b && a > c && b > c) {
  console.log("The order is: a,b,c");
} else if (b > a && b > c && a > c) {
  console.log("The order is: b,a,c");
} else if (c > a && c > b && a > b) {
  console.log("The order is: c,a,b");
} else if (a > b && a > c && b < c) {
  console.log("The order is: a,c,b");
} else if (b > a && b > c && a < c) {
  console.log("The order is: b,c,a");
} else if (c > a && c > b && a < b) {
  console.log("The order is: c,b,a");
} else {
  console.log("Please choose different positive integers");
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 5");
console.log(
  "Write a piece of code for finding the average of two given integers."
);
let d = 10;
let e = 13;
let average = (d + e) / 2;
console.log("The average is: " + average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 6");
console.log(
  "Write a piece of code for finding the longest of two given strings."
);
let firstString = "Epicode";
let secondString = "Course";
if (firstString.lentgh > secondString.length) {
  console.log("The longest String is: " + firstString);
} else if (firstString.length < secondString.length) {
  console.log("The longest String is: " + secondString);
} else if ((firstString.length = secondString.length)) {
  console.log("Both Strings' length is equal!");
} else {
  console.log("Please input two Strings!");
}

/*EX 7
 Write a piece of code for checking if a given value is an integer or not.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 7");
console.log(
  "Write a piece of code for checking if a given value is an integer or not."
);
let f = 37;
let isInteger = Number.isInteger(f);
console.log("f is Integer is: " + isInteger);

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEXERCISE 8");
console.log(
  "Write a piece of code for calculating a certain percentage of a given number.\n(Ex.: the 20% of 400 is 80)"
);
let m = 35;
let percentage = (20 * 100) / m;
console.log("20% of " + m + " is: " + percentage);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 9");
console.log(
  "Write a piece of code for checking if a given number is even or odd."
);

let n = 32;
if (Number.isInteger(n / 2)) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
